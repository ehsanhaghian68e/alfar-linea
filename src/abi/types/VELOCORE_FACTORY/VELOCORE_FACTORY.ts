/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type PoolCreated = ContractEventLog<{
  pool: string;
  t1: string;
  t2: string;
  0: string;
  1: string;
  2: string;
}>;

export interface VELOCORE_FACTORY extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VELOCORE_FACTORY;
  clone(): VELOCORE_FACTORY;
  methods: {
    deploy(
      quoteToken: string | number[],
      baseToken: string | number[]
    ): NonPayableTransactionObject<string>;

    getPools(
      begin: number | string | BN,
      maxLength: number | string | BN
    ): NonPayableTransactionObject<string[]>;

    isPool(arg0: string): NonPayableTransactionObject<boolean>;

    poolList(arg0: number | string | BN): NonPayableTransactionObject<string>;

    pools(
      arg0: string | number[],
      arg1: string | number[]
    ): NonPayableTransactionObject<string>;

    poolsLength(): NonPayableTransactionObject<string>;

    setDecay(decay_: number | string | BN): NonPayableTransactionObject<void>;

    setFee(fee1e9_: number | string | BN): NonPayableTransactionObject<void>;
  };
  events: {
    PoolCreated(cb?: Callback<PoolCreated>): EventEmitter;
    PoolCreated(
      options?: EventOptions,
      cb?: Callback<PoolCreated>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "PoolCreated", cb: Callback<PoolCreated>): void;
  once(
    event: "PoolCreated",
    options: EventOptions,
    cb: Callback<PoolCreated>
  ): void;
}
