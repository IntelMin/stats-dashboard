import { useEffect, useState } from 'react';
// import { useMarkets } from 'graphqlAPI';
import Card from '../../../components/Card';
import InfiniteScroll from 'react-infinite-scroll-component';
const marketData = [
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  {
    "assetSymbol": "USDT",
    "created": "1629800072",
    "createdAtBlock": "13",
    "createdAtTransaction": "0xa13c7b5bcf8559147500fef21c9296c13fd40863a0bb253e34c13e20198a5af8",
    "id": "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
    "liquidity": "1000841300332631042752305",
    "name": "�MUN",
    "price": {
      "id": "162980037917",
      "marketPrice": "201240000000000000",
      "oraclePrice": "223600000000000000",
      "timestamp": "1629800379"
    },
    "priceDailyChange": null,
    "stakedPnl": "841120945826916",
    "token": {
      "id": "0x610178da211fef7d417bc0e6fed39f05609ad788",
      "symbol": "SLP",
      "totalSupply": "1000000000000000000000000"
    }
  },
  
  
]
const ModuleView = () => {
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  // const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  // const [count, setCount ] = useState(1000);
  // const { markets } = useMarkets(10, page * 10);
  const [marketsDisplay, setMarketsDisplay] = useState<any>([]);
  // const [loading, setLoading] = useState(false);
  useEffect(()=>{
    loadMoreMarket(page)
  }, [])
  useEffect(()=>{
    if(page * 10 > marketData.length)
      setHasMore(false)
  }, [page, marketData])
  
  // useEffect(() => {
    // if (markets) {
      // console.log("module view markets->>",markets)
    // }
  // }, [markets])
  
  const loadMoreMarket = (page) => {
    
    setTimeout(() => {
      setMarketsDisplay( marketData.slice(0, (page + 1) * 10) );
      setPage(page + 1)
    }, 1500);
  }


  return (
    <>
      <InfiniteScroll
        dataLength={marketsDisplay.length}
        next={ () => loadMoreMarket(page)}
        hasMore={hasMore}
        loader={<div className="lazy-loading"><div className="lds-ripple"><div></div><div></div></div></div>}
        scrollableTarget="scrollableDiv"
        className="card-grid"
      >
        {marketsDisplay.map((market, index) => {
          return <Card market={market} key={index} />
        })}
      </InfiniteScroll>
    </>
    // <div className="card-grid">
    // {
    //   marketData.map((market, index) => {
    //     return <Card market={market} key={index} />
    //   })
    // } 
    // </div>
  );
};

export default ModuleView;
