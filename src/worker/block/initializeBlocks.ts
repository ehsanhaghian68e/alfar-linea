import Chain from "../../core/chain";

import SyncSwapEthUsdcSwap from "../../block/syncSwapSwap/syncSwapEthUsdcSwap";
import SyncSwapEthWbtcSwap from "../../block/syncSwapSwap/syncSwapEthWbtcSwap";
import DmailSendMail from "../../block/dmail/dmailSendMail";
import VelocoreEthUsdcSwap from "../../block/velocoreSwap/velocoreEthUsdcSwap";
import VelocoreEthCebusdSwap from "../../block/velocoreSwap/velocoreEthCebusdSwap";
import SyncSwapEthCebusdSwap from "../../block/syncSwapSwap/syncSwapEthCebusdSwap";
import OpenOceanEthCebusdSwap from "../../block/openOceanSwap/openOceanEthCebusdSwap";
import OpenOceanEthIusdSwap from "../../block/openOceanSwap/openOceanEthIusdSwap";
import OpenOceanEthIziSwap from "../../block/openOceanSwap/openOceanEthIziSwap";
import OpenOceanEthUsdcSwap from "../../block/openOceanSwap/openOceanEthUsdcSwap";
import OpenOceanEthWavaxSwap from "../../block/openOceanSwap/openOceanEthWavaxSwap";
import OpenOceanEthWbnbSwap from "../../block/openOceanSwap/openOceanEthWbnbSwap";
import OpenOceanEthWmaticSwap from "../../block/openOceanSwap/openOceanEthWmaticSwap";

const initializeBlocks = (params: {
  chain: Chain;
  minWorkAmountPercent: number;
  maxWorkAmountPercent: number;
}) => {
  const { chain, minWorkAmountPercent, maxWorkAmountPercent } = params;
  return [
    new SyncSwapEthUsdcSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new SyncSwapEthWbtcSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new SyncSwapEthCebusdSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new VelocoreEthUsdcSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new VelocoreEthCebusdSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new DmailSendMail({ chain }),
    new OpenOceanEthCebusdSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new OpenOceanEthIusdSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new OpenOceanEthIziSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new OpenOceanEthUsdcSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new OpenOceanEthWavaxSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new OpenOceanEthWbnbSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
    new OpenOceanEthWmaticSwap({
      chain,
      minWorkAmountPercent,
      maxWorkAmountPercent,
    }),
  ];
};

export default initializeBlocks;
