export type RawToken = {
  name: string;
  address: string;
  geskoId: string;
  readableDecimals?: number;
  isNative?: boolean;
  isWrappedNative?: boolean;
};
