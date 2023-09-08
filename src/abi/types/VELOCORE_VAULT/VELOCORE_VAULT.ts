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

export type BribeAttached = ContractEventLog<{
  gauge: string;
  bribe: string;
  0: string;
  1: string;
}>;
export type BribeKilled = ContractEventLog<{
  gauge: string;
  bribe: string;
  0: string;
  1: string;
}>;
export type Convert = ContractEventLog<{
  pool: string;
  user: string;
  tokenRef: string[];
  delta: string[];
  0: string;
  1: string;
  2: string[];
  3: string[];
}>;
export type Gauge = ContractEventLog<{
  pool: string;
  user: string;
  tokenRef: string[];
  delta: string[];
  0: string;
  1: string;
  2: string[];
  3: string[];
}>;
export type GaugeKilled = ContractEventLog<{
  gauge: string;
  killed: boolean;
  0: string;
  1: boolean;
}>;
export type Swap = ContractEventLog<{
  pool: string;
  user: string;
  tokenRef: string[];
  delta: string[];
  0: string;
  1: string;
  2: string[];
  3: string[];
}>;
export type UserBalance = ContractEventLog<{
  to: string;
  from: string;
  tokenRef: string[];
  delta: string[];
  0: string;
  1: string;
  2: string[];
  3: string[];
}>;
export type Vote = ContractEventLog<{
  pool: string;
  user: string;
  voteDelta: string;
  0: string;
  1: string;
  2: string;
}>;

export interface VELOCORE_VAULT extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): VELOCORE_VAULT;
  clone(): VELOCORE_VAULT;
  methods: {
    admin_addFacet(implementation: string): NonPayableTransactionObject<void>;

    admin_pause(t: boolean): NonPayableTransactionObject<void>;

    admin_setAuthorizer(auth_: string): NonPayableTransactionObject<void>;

    admin_setFunctions(
      implementation: string,
      sigs: (string | number[])[]
    ): NonPayableTransactionObject<void>;

    admin_setTreasury(treasury: string): NonPayableTransactionObject<void>;

    attachBribe(
      gauge: string,
      bribe: string
    ): NonPayableTransactionObject<void>;

    ballotToken(): NonPayableTransactionObject<string>;

    emissionToken(): NonPayableTransactionObject<string>;

    execute(
      tokenRef: (string | number[])[],
      deposit: (number | string | BN)[],
      ops: [string | number[], (string | number[])[], string | number[]][]
    ): PayableTransactionObject<void>;

    inspect(
      lens: string,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    killBribe(gauge: string, bribe: string): NonPayableTransactionObject<void>;

    killGauge(gauge: string, t: boolean): NonPayableTransactionObject<void>;

    notifyInitialSupply(
      arg0: string | number[],
      arg1: number | string | BN,
      arg2: number | string | BN
    ): NonPayableTransactionObject<void>;

    query(
      user: string,
      tokenRef: (string | number[])[],
      deposit: (number | string | BN)[],
      ops: [string | number[], (string | number[])[], string | number[]][]
    ): NonPayableTransactionObject<string[]>;
  };
  events: {
    BribeAttached(cb?: Callback<BribeAttached>): EventEmitter;
    BribeAttached(
      options?: EventOptions,
      cb?: Callback<BribeAttached>
    ): EventEmitter;

    BribeKilled(cb?: Callback<BribeKilled>): EventEmitter;
    BribeKilled(
      options?: EventOptions,
      cb?: Callback<BribeKilled>
    ): EventEmitter;

    Convert(cb?: Callback<Convert>): EventEmitter;
    Convert(options?: EventOptions, cb?: Callback<Convert>): EventEmitter;

    Gauge(cb?: Callback<Gauge>): EventEmitter;
    Gauge(options?: EventOptions, cb?: Callback<Gauge>): EventEmitter;

    GaugeKilled(cb?: Callback<GaugeKilled>): EventEmitter;
    GaugeKilled(
      options?: EventOptions,
      cb?: Callback<GaugeKilled>
    ): EventEmitter;

    Swap(cb?: Callback<Swap>): EventEmitter;
    Swap(options?: EventOptions, cb?: Callback<Swap>): EventEmitter;

    UserBalance(cb?: Callback<UserBalance>): EventEmitter;
    UserBalance(
      options?: EventOptions,
      cb?: Callback<UserBalance>
    ): EventEmitter;

    Vote(cb?: Callback<Vote>): EventEmitter;
    Vote(options?: EventOptions, cb?: Callback<Vote>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "BribeAttached", cb: Callback<BribeAttached>): void;
  once(
    event: "BribeAttached",
    options: EventOptions,
    cb: Callback<BribeAttached>
  ): void;

  once(event: "BribeKilled", cb: Callback<BribeKilled>): void;
  once(
    event: "BribeKilled",
    options: EventOptions,
    cb: Callback<BribeKilled>
  ): void;

  once(event: "Convert", cb: Callback<Convert>): void;
  once(event: "Convert", options: EventOptions, cb: Callback<Convert>): void;

  once(event: "Gauge", cb: Callback<Gauge>): void;
  once(event: "Gauge", options: EventOptions, cb: Callback<Gauge>): void;

  once(event: "GaugeKilled", cb: Callback<GaugeKilled>): void;
  once(
    event: "GaugeKilled",
    options: EventOptions,
    cb: Callback<GaugeKilled>
  ): void;

  once(event: "Swap", cb: Callback<Swap>): void;
  once(event: "Swap", options: EventOptions, cb: Callback<Swap>): void;

  once(event: "UserBalance", cb: Callback<UserBalance>): void;
  once(
    event: "UserBalance",
    options: EventOptions,
    cb: Callback<UserBalance>
  ): void;

  once(event: "Vote", cb: Callback<Vote>): void;
  once(event: "Vote", options: EventOptions, cb: Callback<Vote>): void;
}
