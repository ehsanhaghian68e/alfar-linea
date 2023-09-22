import Big from "big.js";
import { ethers } from "ethers";
import { Transaction as Web3Transaction, Web3 } from "web3";
import { z } from "zod";

import logger from "../utils/other/logger";
import randomInteger from "../utils/random/randomInteger";
import getShortString from "../utils/string/getShortString";

import Chain from "./chain";
import Token from "./token";

const evmAccountPrivateKeyLength = 66;

const evmAccountPrivateKeySchema = z
  .string()
  .length(evmAccountPrivateKeyLength)
  .startsWith("0x");

class Account {
  public readonly fileIndex: number;
  public readonly address: string;
  public readonly shortAddress: string;

  private readonly privateKey: string;
  private _transactionsPerformed: number;

  public constructor(params: { privateKey: string; fileIndex: number }) {
    const { privateKey, fileIndex } = params;
    this.fileIndex = fileIndex;
    this.privateKey = this.initializePrivateKey(privateKey);
    this.address = this.initializeAddress();
    this.shortAddress = getShortString(this.address);
    this._transactionsPerformed = 0;
  }

  private initializePrivateKey(privateKey: string) {
    const isPrivateValid = evmAccountPrivateKeySchema.safeParse(privateKey);

    if (isPrivateValid.success) return privateKey;

    const privateShortForm = getShortString(privateKey);

    throw new Error(
      `private key ${privateShortForm} on index ${this.fileIndex} is not valid. Check assets folder`,
    );
  }

  private initializeAddress() {
    return ethers.computeAddress(this.privateKey);
  }

  public toString() {
    const idx = this.fileIndex + 1;
    const addr = this.shortAddress;
    const txs = this._transactionsPerformed;

    return `[${idx}] ${addr} (txs:${txs})`;
  }

  public isEquals(account: Account) {
    return this.fileIndex === account.fileIndex;
  }

  private async signTransaction(w3: Web3, tx: Web3Transaction) {
    return await w3.eth.accounts.signTransaction(tx, this.privateKey);
  }

  private async sendSignedTransaction(w3: Web3, rawTx: string) {
    return await w3.eth.sendSignedTransaction(rawTx);
  }

  public async signAndSendTransaction(
    chain: Chain,
    tx: Web3Transaction,
  ): Promise<string> {
    const signResult = await this.signTransaction(chain.w3, tx);

    if (!signResult.rawTransaction) {
      throw new Error("transaction was not generated in blockchain");
    }

    const sendResult = await this.sendSignedTransaction(
      chain.w3,
      signResult.rawTransaction,
    );

    const hash = sendResult.transactionHash.toString();

    logger.debug(`${this} | tx sent: ${chain.getHashLink(hash)}`);

    await chain.waitTxReceipt(hash);

    this.incrementTransactionsPerformed();

    return hash;
  }

  private incrementTransactionsPerformed() {
    this._transactionsPerformed = this._transactionsPerformed + 1;
  }

  public transactionsPerformed() {
    return this._transactionsPerformed;
  }

  public async nonce(w3: Web3) {
    return await w3.eth.getTransactionCount(this.address);
  }

  public async getRandomNormalizedAmountOfBalance(
    token: Token,
    minPercent: number,
    maxPercent: number,
  ) {
    const accountBalance = await token.normalizedBalanceOf(this.address);

    const minMultiplier = Big(minPercent).div(100);
    const maxMultiplier = Big(maxPercent).div(100);

    const minNormalizedAmount = Big(accountBalance)
      .times(minMultiplier)
      .round()
      .toString();

    const maxNormalizedAmount = Big(accountBalance)
      .times(maxMultiplier)
      .round()
      .toString();

    const randomNormalizedAmount = randomInteger(
      minNormalizedAmount,
      maxNormalizedAmount,
    ).toString();

    return randomNormalizedAmount;
  }
}

export default Account;
