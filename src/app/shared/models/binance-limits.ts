export const BINANCE_LIMITS = {
  timezone: 'UTC',
  serverTime: 1536896945380,
  rateLimits: [
     {
        rateLimitType: 'REQUEST_WEIGHT',
        interval: 'MINUTE',
        limit: 1200
     },
     {
        rateLimitType: 'ORDERS',
        interval: 'SECOND',
        limit: 10
     },
     {
        rateLimitType: 'ORDERS',
        interval: 'DAY',
        limit: 100000
     }
  ],
  exchangeFilters: [

  ],
  symbols: [
     {
        symbol: 'ETHBTC',
        status: 'TRADING',
        baseAsset: 'ETH',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00336200',
              maxPrice: '0.33619500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '100000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LTCBTC',
        status: 'TRADING',
        baseAsset: 'LTC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00084600',
              maxPrice: '0.08457500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '100000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BNBBTC',
        status: 'TRADING',
        baseAsset: 'BNB',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00014910',
              maxPrice: '0.01490800',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NEOBTC',
        status: 'TRADING',
        baseAsset: 'NEO',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00028300',
              maxPrice: '0.02830000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '100000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QTUMETH',
        status: 'TRADING',
        baseAsset: 'QTUM',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00161900',
              maxPrice: '0.16189500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'EOSETH',
        status: 'TRADING',
        baseAsset: 'EOS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00249400',
              maxPrice: '0.24935500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SNTETH',
        status: 'TRADING',
        baseAsset: 'SNT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001545',
              maxPrice: '0.00154410',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BNTETH',
        status: 'TRADING',
        baseAsset: 'BNT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00064000',
              maxPrice: '0.06392000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCCBTC',
        status: 'TRADING',
        baseAsset: 'BCC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00718400',
              maxPrice: '0.71830500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '100000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GASBTC',
        status: 'TRADING',
        baseAsset: 'GAS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00008900',
              maxPrice: '0.00886500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '100000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BNBETH',
        status: 'TRADING',
        baseAsset: 'BNB',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00444900',
              maxPrice: '0.44489000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BTCUSDT',
        status: 'TRADING',
        baseAsset: 'BTC',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '655.15000000',
              maxPrice: '65515.00000000',
              tickSize: '0.01000000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00000100',
              maxQty: '10000000.00000000',
              stepSize: '0.00000100'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ETHUSDT',
        status: 'TRADING',
        baseAsset: 'ETH',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '21.97000000',
              maxPrice: '2196.40000000',
              tickSize: '0.01000000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00001000',
              maxQty: '10000000.00000000',
              stepSize: '0.00001000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'HSRBTC',
        status: 'BREAK',
        baseAsset: 'HSR',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00007200',
              maxPrice: '0.00713500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'OAXETH',
        status: 'TRADING',
        baseAsset: 'OAX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00006530',
              maxPrice: '0.00652600',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DNTETH',
        status: 'TRADING',
        baseAsset: 'DNT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000923',
              maxPrice: '0.00092280',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MCOETH',
        status: 'TRADING',
        baseAsset: 'MCO',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00205500',
              maxPrice: '0.20543000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ICNETH',
        status: 'TRADING',
        baseAsset: 'ICN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00016860',
              maxPrice: '0.01685500',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MCOBTC',
        status: 'TRADING',
        baseAsset: 'MCO',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00006900',
              maxPrice: '0.00688500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WTCBTC',
        status: 'TRADING',
        baseAsset: 'WTC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00004890',
              maxPrice: '0.00488100',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WTCETH',
        status: 'TRADING',
        baseAsset: 'WTC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00145400',
              maxPrice: '0.14531000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LRCBTC',
        status: 'TRADING',
        baseAsset: 'LRC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000136',
              maxPrice: '0.00013580',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LRCETH',
        status: 'TRADING',
        baseAsset: 'LRC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00004045',
              maxPrice: '0.00404460',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QTUMBTC',
        status: 'TRADING',
        baseAsset: 'QTUM',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005500',
              maxPrice: '0.00544000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'YOYOBTC',
        status: 'TRADING',
        baseAsset: 'YOYO',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000032',
              maxPrice: '0.00003200',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'OMGBTC',
        status: 'TRADING',
        baseAsset: 'OMG',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005300',
              maxPrice: '0.00525000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'OMGETH',
        status: 'TRADING',
        baseAsset: 'OMG',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00156400',
              maxPrice: '0.15640000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZRXBTC',
        status: 'TRADING',
        baseAsset: 'ZRX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000855',
              maxPrice: '0.00085430',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZRXETH',
        status: 'TRADING',
        baseAsset: 'ZRX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00025375',
              maxPrice: '0.02537500',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STRATBTC',
        status: 'TRADING',
        baseAsset: 'STRAT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002170',
              maxPrice: '0.00216800',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STRATETH',
        status: 'TRADING',
        baseAsset: 'STRAT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00064400',
              maxPrice: '0.06436000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SNGLSBTC',
        status: 'TRADING',
        baseAsset: 'SNGLS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000031',
              maxPrice: '0.00003080',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SNGLSETH',
        status: 'TRADING',
        baseAsset: 'SNGLS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000917',
              maxPrice: '0.00091610',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BQXBTC',
        status: 'TRADING',
        baseAsset: 'BQX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000493',
              maxPrice: '0.00049290',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BQXETH',
        status: 'TRADING',
        baseAsset: 'BQX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00014610',
              maxPrice: '0.01460600',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'KNCBTC',
        status: 'TRADING',
        baseAsset: 'KNC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000581',
              maxPrice: '0.00058040',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'KNCETH',
        status: 'TRADING',
        baseAsset: 'KNC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00017310',
              maxPrice: '0.01730500',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'FUNBTC',
        status: 'TRADING',
        baseAsset: 'FUN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000023',
              maxPrice: '0.00002220',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'FUNETH',
        status: 'TRADING',
        baseAsset: 'FUN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000662',
              maxPrice: '0.00066150',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SNMBTC',
        status: 'TRADING',
        baseAsset: 'SNM',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000076',
              maxPrice: '0.00007570',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SNMETH',
        status: 'TRADING',
        baseAsset: 'SNM',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002264',
              maxPrice: '0.00226370',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NEOETH',
        status: 'TRADING',
        baseAsset: 'NEO',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00843100',
              maxPrice: '0.84304500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'IOTABTC',
        status: 'TRADING',
        baseAsset: 'IOTA',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000918',
              maxPrice: '0.00091750',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'IOTAETH',
        status: 'TRADING',
        baseAsset: 'IOTA',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00027398',
              maxPrice: '0.02739730',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LINKBTC',
        status: 'TRADING',
        baseAsset: 'LINK',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000404',
              maxPrice: '0.00040340',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LINKETH',
        status: 'TRADING',
        baseAsset: 'LINK',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00012015',
              maxPrice: '0.01201460',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XVGBTC',
        status: 'TRADING',
        baseAsset: 'XVG',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000021',
              maxPrice: '0.00002050',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XVGETH',
        status: 'TRADING',
        baseAsset: 'XVG',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000610',
              maxPrice: '0.00060940',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SALTBTC',
        status: 'TRADING',
        baseAsset: 'SALT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000670',
              maxPrice: '0.00066800',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SALTETH',
        status: 'TRADING',
        baseAsset: 'SALT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00019800',
              maxPrice: '0.01975000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MDABTC',
        status: 'TRADING',
        baseAsset: 'MDA',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000754',
              maxPrice: '0.00075340',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MDAETH',
        status: 'TRADING',
        baseAsset: 'MDA',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00022310',
              maxPrice: '0.02230200',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MTLBTC',
        status: 'TRADING',
        baseAsset: 'MTL',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001250',
              maxPrice: '0.00124350',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MTLETH',
        status: 'TRADING',
        baseAsset: 'MTL',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00037100',
              maxPrice: '0.03707000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SUBBTC',
        status: 'TRADING',
        baseAsset: 'SUB',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000162',
              maxPrice: '0.00016120',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SUBETH',
        status: 'TRADING',
        baseAsset: 'SUB',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00004854',
              maxPrice: '0.00485380',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'EOSBTC',
        status: 'TRADING',
        baseAsset: 'EOS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00008380',
              maxPrice: '0.00838000',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SNTBTC',
        status: 'TRADING',
        baseAsset: 'SNT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000053',
              maxPrice: '0.00005210',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ETCETH',
        status: 'TRADING',
        baseAsset: 'ETC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00512900',
              maxPrice: '0.51280500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ETCBTC',
        status: 'TRADING',
        baseAsset: 'ETC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00017300',
              maxPrice: '0.01723000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MTHBTC',
        status: 'TRADING',
        baseAsset: 'MTH',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000031',
              maxPrice: '0.00003040',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MTHETH',
        status: 'TRADING',
        baseAsset: 'MTH',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000903',
              maxPrice: '0.00090230',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ENGBTC',
        status: 'TRADING',
        baseAsset: 'ENG',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000930',
              maxPrice: '0.00092930',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ENGETH',
        status: 'TRADING',
        baseAsset: 'ENG',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00027740',
              maxPrice: '0.02773100',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DNTBTC',
        status: 'TRADING',
        baseAsset: 'DNT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000031',
              maxPrice: '0.00003090',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZECBTC',
        status: 'TRADING',
        baseAsset: 'ZEC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00186200',
              maxPrice: '0.18610500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZECETH',
        status: 'TRADING',
        baseAsset: 'ZEC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.05551000',
              maxPrice: '5.55090000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BNTBTC',
        status: 'TRADING',
        baseAsset: 'BNT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002169',
              maxPrice: '0.00216810',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ASTBTC',
        status: 'TRADING',
        baseAsset: 'AST',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000107',
              maxPrice: '0.00010620',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ASTETH',
        status: 'TRADING',
        baseAsset: 'AST',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003170',
              maxPrice: '0.00316200',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DASHBTC',
        status: 'TRADING',
        baseAsset: 'DASH',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00301200',
              maxPrice: '0.30114000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DASHETH',
        status: 'TRADING',
        baseAsset: 'DASH',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.08951000',
              maxPrice: '8.95030000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'OAXBTC',
        status: 'TRADING',
        baseAsset: 'OAX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000221',
              maxPrice: '0.00022030',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ICNBTC',
        status: 'TRADING',
        baseAsset: 'ICN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000571',
              maxPrice: '0.00057060',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BTGBTC',
        status: 'TRADING',
        baseAsset: 'BTG',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00031000',
              maxPrice: '0.03100000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BTGETH',
        status: 'TRADING',
        baseAsset: 'BTG',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00918800',
              maxPrice: '0.91877000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'EVXBTC',
        status: 'TRADING',
        baseAsset: 'EVX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000602',
              maxPrice: '0.00060140',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'EVXETH',
        status: 'TRADING',
        baseAsset: 'EVX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00018010',
              maxPrice: '0.01800200',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'REQBTC',
        status: 'TRADING',
        baseAsset: 'REQ',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000055',
              maxPrice: '0.00005490',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'REQETH',
        status: 'TRADING',
        baseAsset: 'REQ',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001633',
              maxPrice: '0.00163250',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VIBBTC',
        status: 'TRADING',
        baseAsset: 'VIB',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000048',
              maxPrice: '0.00004720',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VIBETH',
        status: 'TRADING',
        baseAsset: 'VIB',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001404',
              maxPrice: '0.00140320',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'HSRETH',
        status: 'BREAK',
        baseAsset: 'HSR',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000100',
              maxPrice: '100000.00000000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TRXBTC',
        status: 'TRADING',
        baseAsset: 'TRX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000032',
              maxPrice: '0.00003140',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TRXETH',
        status: 'TRADING',
        baseAsset: 'TRX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000933',
              maxPrice: '0.00093270',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POWRBTC',
        status: 'TRADING',
        baseAsset: 'POWR',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000219',
              maxPrice: '0.00021820',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POWRETH',
        status: 'TRADING',
        baseAsset: 'POWR',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00006494',
              maxPrice: '0.00649310',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ARKBTC',
        status: 'TRADING',
        baseAsset: 'ARK',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001010',
              maxPrice: '0.00100900',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ARKETH',
        status: 'TRADING',
        baseAsset: 'ARK',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00030200',
              maxPrice: '0.03018000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'YOYOETH',
        status: 'TRADING',
        baseAsset: 'YOYO',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000951',
              maxPrice: '0.00095050',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XRPBTC',
        status: 'TRADING',
        baseAsset: 'XRP',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000432',
              maxPrice: '0.00043160',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XRPETH',
        status: 'TRADING',
        baseAsset: 'XRP',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00012864',
              maxPrice: '0.01286310',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MODBTC',
        status: 'TRADING',
        baseAsset: 'MOD',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001060',
              maxPrice: '0.00105300',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MODETH',
        status: 'TRADING',
        baseAsset: 'MOD',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00031500',
              maxPrice: '0.03140500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ENJBTC',
        status: 'TRADING',
        baseAsset: 'ENJ',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000062',
              maxPrice: '0.00006130',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ENJETH',
        status: 'TRADING',
        baseAsset: 'ENJ',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001828',
              maxPrice: '0.00182710',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STORJBTC',
        status: 'TRADING',
        baseAsset: 'STORJ',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000382',
              maxPrice: '0.00038180',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STORJETH',
        status: 'TRADING',
        baseAsset: 'STORJ',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00011200',
              maxPrice: '0.01119700',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BNBUSDT',
        status: 'TRADING',
        baseAsset: 'BNB',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.97650000',
              maxPrice: '97.64200000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VENBNB',
        status: 'BREAK',
        baseAsset: 'VEN',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01510000',
              maxPrice: '1.50150000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'YOYOBNB',
        status: 'TRADING',
        baseAsset: 'YOYO',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00021200',
              maxPrice: '0.02120000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POWRBNB',
        status: 'TRADING',
        baseAsset: 'POWR',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00146000',
              maxPrice: '0.14600000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VENBTC',
        status: 'BREAK',
        baseAsset: 'VEN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000001',
              maxPrice: '100000.00000000',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VENETH',
        status: 'BREAK',
        baseAsset: 'VEN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000001',
              maxPrice: '100000.00000000',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'KMDBTC',
        status: 'TRADING',
        baseAsset: 'KMD',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001580',
              maxPrice: '0.00157800',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'KMDETH',
        status: 'TRADING',
        baseAsset: 'KMD',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00047000',
              maxPrice: '0.04696000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NULSBNB',
        status: 'TRADING',
        baseAsset: 'NULS',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01266000',
              maxPrice: '1.26550000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RCNBTC',
        status: 'TRADING',
        baseAsset: 'RCN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000032',
              maxPrice: '0.00003140',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RCNETH',
        status: 'TRADING',
        baseAsset: 'RCN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000939',
              maxPrice: '0.00093820',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RCNBNB',
        status: 'TRADING',
        baseAsset: 'RCN',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00020800',
              maxPrice: '0.02073000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NULSBTC',
        status: 'TRADING',
        baseAsset: 'NULS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001879',
              maxPrice: '0.00187850',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NULSETH',
        status: 'TRADING',
        baseAsset: 'NULS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00055991',
              maxPrice: '0.05599020',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RDNBTC',
        status: 'TRADING',
        baseAsset: 'RDN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000692',
              maxPrice: '0.00069190',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RDNETH',
        status: 'TRADING',
        baseAsset: 'RDN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00020450',
              maxPrice: '0.02044600',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RDNBNB',
        status: 'TRADING',
        baseAsset: 'RDN',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00468000',
              maxPrice: '0.46770000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XMRBTC',
        status: 'TRADING',
        baseAsset: 'XMR',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00174000',
              maxPrice: '0.17392000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XMRETH',
        status: 'TRADING',
        baseAsset: 'XMR',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.05212000',
              maxPrice: '5.21170000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DLTBNB',
        status: 'TRADING',
        baseAsset: 'DLT',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00036000',
              maxPrice: '0.03510000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WTCBNB',
        status: 'TRADING',
        baseAsset: 'WTC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.03260000',
              maxPrice: '3.25600000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DLTBTC',
        status: 'TRADING',
        baseAsset: 'DLT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000053',
              maxPrice: '0.00005260',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DLTETH',
        status: 'TRADING',
        baseAsset: 'DLT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001584',
              maxPrice: '0.00158380',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AMBBTC',
        status: 'TRADING',
        baseAsset: 'AMB',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000189',
              maxPrice: '0.00018870',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AMBETH',
        status: 'TRADING',
        baseAsset: 'AMB',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005593',
              maxPrice: '0.00559210',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AMBBNB',
        status: 'TRADING',
        baseAsset: 'AMB',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00128000',
              maxPrice: '0.12760000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCCETH',
        status: 'TRADING',
        baseAsset: 'BCC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.21451000',
              maxPrice: '21.45050000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCCUSDT',
        status: 'TRADING',
        baseAsset: 'BCC',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '47.05000000',
              maxPrice: '4704.75000000',
              tickSize: '0.01000000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00001000',
              maxQty: '10000000.00000000',
              stepSize: '0.00001000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCCBNB',
        status: 'TRADING',
        baseAsset: 'BCC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '4.82000000',
              maxPrice: '481.90000000',
              tickSize: '0.01000000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00001000',
              maxQty: '10000000.00000000',
              stepSize: '0.00001000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BATBTC',
        status: 'TRADING',
        baseAsset: 'BAT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000257',
              maxPrice: '0.00025640',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BATETH',
        status: 'TRADING',
        baseAsset: 'BAT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00007672',
              maxPrice: '0.00767190',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BATBNB',
        status: 'TRADING',
        baseAsset: 'BAT',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00171000',
              maxPrice: '0.17100000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCPTBTC',
        status: 'TRADING',
        baseAsset: 'BCPT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000114',
              maxPrice: '0.00011360',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCPTETH',
        status: 'TRADING',
        baseAsset: 'BCPT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003375',
              maxPrice: '0.00337410',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCPTBNB',
        status: 'TRADING',
        baseAsset: 'BCPT',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00077000',
              maxPrice: '0.07650000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ARNBTC',
        status: 'TRADING',
        baseAsset: 'ARN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000387',
              maxPrice: '0.00038670',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ARNETH',
        status: 'TRADING',
        baseAsset: 'ARN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00011420',
              maxPrice: '0.01141930',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GVTBTC',
        status: 'TRADING',
        baseAsset: 'GVT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00013400',
              maxPrice: '0.01339200',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GVTETH',
        status: 'TRADING',
        baseAsset: 'GVT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00397300',
              maxPrice: '0.39727500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CDTBTC',
        status: 'TRADING',
        baseAsset: 'CDT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000018',
              maxPrice: '0.00001710',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CDTETH',
        status: 'TRADING',
        baseAsset: 'CDT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000510',
              maxPrice: '0.00050940',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GXSBTC',
        status: 'TRADING',
        baseAsset: 'GXS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001670',
              maxPrice: '0.00166300',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GXSETH',
        status: 'TRADING',
        baseAsset: 'GXS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00049500',
              maxPrice: '0.04950000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NEOUSDT',
        status: 'TRADING',
        baseAsset: 'NEO',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '1.85700000',
              maxPrice: '185.61500000',
              tickSize: '0.00100000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NEOBNB',
        status: 'TRADING',
        baseAsset: 'NEO',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.19200000',
              maxPrice: '19.20000000',
              tickSize: '0.00100000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POEBTC',
        status: 'TRADING',
        baseAsset: 'POE',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000013',
              maxPrice: '0.00001230',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POEETH',
        status: 'TRADING',
        baseAsset: 'POE',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000367',
              maxPrice: '0.00036620',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QSPBTC',
        status: 'TRADING',
        baseAsset: 'QSP',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000047',
              maxPrice: '0.00004640',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QSPETH',
        status: 'TRADING',
        baseAsset: 'QSP',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001376',
              maxPrice: '0.00137530',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QSPBNB',
        status: 'TRADING',
        baseAsset: 'QSP',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00030600',
              maxPrice: '0.03052000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BTSBTC',
        status: 'TRADING',
        baseAsset: 'BTS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000158',
              maxPrice: '0.00015790',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BTSETH',
        status: 'TRADING',
        baseAsset: 'BTS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00004672',
              maxPrice: '0.00467150',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BTSBNB',
        status: 'TRADING',
        baseAsset: 'BTS',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00106000',
              maxPrice: '0.10560000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XZCBTC',
        status: 'TRADING',
        baseAsset: 'XZC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00016800',
              maxPrice: '0.01680000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XZCETH',
        status: 'TRADING',
        baseAsset: 'XZC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00498800',
              maxPrice: '0.49880000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XZCBNB',
        status: 'TRADING',
        baseAsset: 'XZC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.10900000',
              maxPrice: '10.83000000',
              tickSize: '0.00100000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LSKBTC',
        status: 'TRADING',
        baseAsset: 'LSK',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005450',
              maxPrice: '0.00544700',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LSKETH',
        status: 'TRADING',
        baseAsset: 'LSK',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00161600',
              maxPrice: '0.16158000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LSKBNB',
        status: 'TRADING',
        baseAsset: 'LSK',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.03590000',
              maxPrice: '3.58800000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TNTBTC',
        status: 'TRADING',
        baseAsset: 'TNT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000026',
              maxPrice: '0.00002600',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TNTETH',
        status: 'TRADING',
        baseAsset: 'TNT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000774',
              maxPrice: '0.00077340',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'FUELBTC',
        status: 'TRADING',
        baseAsset: 'FUEL',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000018',
              maxPrice: '0.00001720',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'FUELETH',
        status: 'TRADING',
        baseAsset: 'FUEL',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000513',
              maxPrice: '0.00051220',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MANABTC',
        status: 'TRADING',
        baseAsset: 'MANA',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000102',
              maxPrice: '0.00010160',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MANAETH',
        status: 'TRADING',
        baseAsset: 'MANA',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003022',
              maxPrice: '0.00302120',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCDBTC',
        status: 'TRADING',
        baseAsset: 'BCD',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003000',
              maxPrice: '0.00295000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCDETH',
        status: 'TRADING',
        baseAsset: 'BCD',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00088000',
              maxPrice: '0.08770000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DGDBTC',
        status: 'TRADING',
        baseAsset: 'DGD',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00053900',
              maxPrice: '0.05390000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DGDETH',
        status: 'TRADING',
        baseAsset: 'DGD',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01602000',
              maxPrice: '1.60120000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'IOTABNB',
        status: 'TRADING',
        baseAsset: 'IOTA',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00620000',
              maxPrice: '0.61920000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ADXBTC',
        status: 'TRADING',
        baseAsset: 'ADX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000261',
              maxPrice: '0.00026020',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ADXETH',
        status: 'TRADING',
        baseAsset: 'ADX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00007750',
              maxPrice: '0.00774600',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ADXBNB',
        status: 'TRADING',
        baseAsset: 'ADX',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00172000',
              maxPrice: '0.17200000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ADABTC',
        status: 'TRADING',
        baseAsset: 'ADA',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000107',
              maxPrice: '0.00010670',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ADAETH',
        status: 'TRADING',
        baseAsset: 'ADA',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003181',
              maxPrice: '0.00318020',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'PPTBTC',
        status: 'TRADING',
        baseAsset: 'PPT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005210',
              maxPrice: '0.00520800',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'PPTETH',
        status: 'TRADING',
        baseAsset: 'PPT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00155700',
              maxPrice: '0.15561000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CMTBTC',
        status: 'TRADING',
        baseAsset: 'CMT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000125',
              maxPrice: '0.00012460',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CMTETH',
        status: 'TRADING',
        baseAsset: 'CMT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003711',
              maxPrice: '0.00371060',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CMTBNB',
        status: 'TRADING',
        baseAsset: 'CMT',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00086000',
              maxPrice: '0.08540000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XLMBTC',
        status: 'TRADING',
        baseAsset: 'XLM',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000318',
              maxPrice: '0.00031800',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XLMETH',
        status: 'TRADING',
        baseAsset: 'XLM',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00009449',
              maxPrice: '0.00944860',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XLMBNB',
        status: 'TRADING',
        baseAsset: 'XLM',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00214000',
              maxPrice: '0.21330000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CNDBTC',
        status: 'TRADING',
        baseAsset: 'CND',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000030',
              maxPrice: '0.00003000',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CNDETH',
        status: 'TRADING',
        baseAsset: 'CND',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000898',
              maxPrice: '0.00089770',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CNDBNB',
        status: 'TRADING',
        baseAsset: 'CND',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00020300',
              maxPrice: '0.02024000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LENDBTC',
        status: 'TRADING',
        baseAsset: 'LEND',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000018',
              maxPrice: '0.00001710',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LENDETH',
        status: 'TRADING',
        baseAsset: 'LEND',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000503',
              maxPrice: '0.00050290',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WABIBTC',
        status: 'TRADING',
        baseAsset: 'WABI',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000275',
              maxPrice: '0.00027430',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WABIETH',
        status: 'TRADING',
        baseAsset: 'WABI',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00008159',
              maxPrice: '0.00815900',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WABIBNB',
        status: 'TRADING',
        baseAsset: 'WABI',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00185000',
              maxPrice: '0.18460000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LTCETH',
        status: 'TRADING',
        baseAsset: 'LTC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.02512000',
              maxPrice: '2.51180000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LTCUSDT',
        status: 'TRADING',
        baseAsset: 'LTC',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '5.53000000',
              maxPrice: '552.80000000',
              tickSize: '0.01000000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00001000',
              maxQty: '10000000.00000000',
              stepSize: '0.00001000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LTCBNB',
        status: 'TRADING',
        baseAsset: 'LTC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.57000000',
              maxPrice: '56.80000000',
              tickSize: '0.01000000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00001000',
              maxQty: '10000000.00000000',
              stepSize: '0.00001000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TNBBTC',
        status: 'TRADING',
        baseAsset: 'TNB',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000013',
              maxPrice: '0.00001230',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TNBETH',
        status: 'TRADING',
        baseAsset: 'TNB',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000366',
              maxPrice: '0.00036600',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WAVESBTC',
        status: 'TRADING',
        baseAsset: 'WAVES',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003590',
              maxPrice: '0.00359000',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WAVESETH',
        status: 'TRADING',
        baseAsset: 'WAVES',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00106600',
              maxPrice: '0.10657000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WAVESBNB',
        status: 'TRADING',
        baseAsset: 'WAVES',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.02400000',
              maxPrice: '2.39300000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GTOBTC',
        status: 'TRADING',
        baseAsset: 'GTO',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000091',
              maxPrice: '0.00009080',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GTOETH',
        status: 'TRADING',
        baseAsset: 'GTO',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002709',
              maxPrice: '0.00270810',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GTOBNB',
        status: 'TRADING',
        baseAsset: 'GTO',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00062000',
              maxPrice: '0.06120000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ICXBTC',
        status: 'TRADING',
        baseAsset: 'ICX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000980',
              maxPrice: '0.00097550',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ICXETH',
        status: 'TRADING',
        baseAsset: 'ICX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00029100',
              maxPrice: '0.02908500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ICXBNB',
        status: 'TRADING',
        baseAsset: 'ICX',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00646000',
              maxPrice: '0.64530000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'OSTBTC',
        status: 'TRADING',
        baseAsset: 'OST',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000046',
              maxPrice: '0.00004590',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'OSTETH',
        status: 'TRADING',
        baseAsset: 'OST',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001360',
              maxPrice: '0.00135970',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'OSTBNB',
        status: 'TRADING',
        baseAsset: 'OST',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00030500',
              maxPrice: '0.03049000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ELFBTC',
        status: 'TRADING',
        baseAsset: 'ELF',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000502',
              maxPrice: '0.00050150',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ELFETH',
        status: 'TRADING',
        baseAsset: 'ELF',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00014964',
              maxPrice: '0.01496400',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AIONBTC',
        status: 'TRADING',
        baseAsset: 'AION',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000690',
              maxPrice: '0.00068200',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AIONETH',
        status: 'TRADING',
        baseAsset: 'AION',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00020200',
              maxPrice: '0.02019000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AIONBNB',
        status: 'TRADING',
        baseAsset: 'AION',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00456000',
              maxPrice: '0.45580000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NEBLBTC',
        status: 'TRADING',
        baseAsset: 'NEBL',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002770',
              maxPrice: '0.00277000',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NEBLETH',
        status: 'TRADING',
        baseAsset: 'NEBL',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00083000',
              maxPrice: '0.08299000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NEBLBNB',
        status: 'TRADING',
        baseAsset: 'NEBL',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01831000',
              maxPrice: '1.83030000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BRDBTC',
        status: 'TRADING',
        baseAsset: 'BRD',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000488',
              maxPrice: '0.00048730',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BRDETH',
        status: 'TRADING',
        baseAsset: 'BRD',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00014560',
              maxPrice: '0.01455500',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BRDBNB',
        status: 'TRADING',
        baseAsset: 'BRD',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00323000',
              maxPrice: '0.32210000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MCOBNB',
        status: 'TRADING',
        baseAsset: 'MCO',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.04701000',
              maxPrice: '4.70040000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'EDOBTC',
        status: 'TRADING',
        baseAsset: 'EDO',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001140',
              maxPrice: '0.00113300',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'EDOETH',
        status: 'TRADING',
        baseAsset: 'EDO',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00034000',
              maxPrice: '0.03399000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WINGSBTC',
        status: 'TRADING',
        baseAsset: 'WINGS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000186',
              maxPrice: '0.00018530',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WINGSETH',
        status: 'TRADING',
        baseAsset: 'WINGS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005580',
              maxPrice: '0.00558000',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NAVBTC',
        status: 'TRADING',
        baseAsset: 'NAV',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000360',
              maxPrice: '0.00035500',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NAVETH',
        status: 'TRADING',
        baseAsset: 'NAV',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00010700',
              maxPrice: '0.01063000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NAVBNB',
        status: 'TRADING',
        baseAsset: 'NAV',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00239000',
              maxPrice: '0.23860000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LUNBTC',
        status: 'TRADING',
        baseAsset: 'LUN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003950',
              maxPrice: '0.00395000',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LUNETH',
        status: 'TRADING',
        baseAsset: 'LUN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00117600',
              maxPrice: '0.11759500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TRIGBTC',
        status: 'TRADING',
        baseAsset: 'TRIG',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000320',
              maxPrice: '0.00032000',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TRIGETH',
        status: 'TRADING',
        baseAsset: 'TRIG',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00009500',
              maxPrice: '0.00949000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TRIGBNB',
        status: 'TRADING',
        baseAsset: 'TRIG',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00212000',
              maxPrice: '0.21120000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'APPCBTC',
        status: 'TRADING',
        baseAsset: 'APPC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000109',
              maxPrice: '0.00010840',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'APPCETH',
        status: 'TRADING',
        baseAsset: 'APPC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003240',
              maxPrice: '0.00323300',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'APPCBNB',
        status: 'TRADING',
        baseAsset: 'APPC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00073000',
              maxPrice: '0.07250000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VIBEBTC',
        status: 'TRADING',
        baseAsset: 'VIBE',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000046',
              maxPrice: '0.00004600',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VIBEETH',
        status: 'TRADING',
        baseAsset: 'VIBE',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001370',
              maxPrice: '0.00136600',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RLCBTC',
        status: 'TRADING',
        baseAsset: 'RLC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000540',
              maxPrice: '0.00053800',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RLCETH',
        status: 'TRADING',
        baseAsset: 'RLC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00016000',
              maxPrice: '0.01595000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RLCBNB',
        status: 'TRADING',
        baseAsset: 'RLC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00360000',
              maxPrice: '0.35930000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'INSBTC',
        status: 'TRADING',
        baseAsset: 'INS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000410',
              maxPrice: '0.00040100',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'INSETH',
        status: 'TRADING',
        baseAsset: 'INS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00012000',
              maxPrice: '0.01197000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'PIVXBTC',
        status: 'TRADING',
        baseAsset: 'PIVX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001410',
              maxPrice: '0.00140200',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'PIVXETH',
        status: 'TRADING',
        baseAsset: 'PIVX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00042000',
              maxPrice: '0.04195000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'PIVXBNB',
        status: 'TRADING',
        baseAsset: 'PIVX',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00950000',
              maxPrice: '0.94910000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'IOSTBTC',
        status: 'TRADING',
        baseAsset: 'IOST',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000019',
              maxPrice: '0.00001870',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'IOSTETH',
        status: 'TRADING',
        baseAsset: 'IOST',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000555',
              maxPrice: '0.00055430',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CHATBTC',
        status: 'TRADING',
        baseAsset: 'CHAT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000029',
              maxPrice: '0.00002900',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CHATETH',
        status: 'TRADING',
        baseAsset: 'CHAT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000861',
              maxPrice: '0.00086050',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STEEMBTC',
        status: 'TRADING',
        baseAsset: 'STEEM',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001130',
              maxPrice: '0.00113000',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STEEMETH',
        status: 'TRADING',
        baseAsset: 'STEEM',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00033600',
              maxPrice: '0.03357000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STEEMBNB',
        status: 'TRADING',
        baseAsset: 'STEEM',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00755000',
              maxPrice: '0.75500000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NANOBTC',
        status: 'TRADING',
        baseAsset: 'NANO',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003680',
              maxPrice: '0.00367900',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NANOETH',
        status: 'TRADING',
        baseAsset: 'NANO',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00109300',
              maxPrice: '0.10929500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NANOBNB',
        status: 'TRADING',
        baseAsset: 'NANO',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.02470000',
              maxPrice: '2.46500000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VIABTC',
        status: 'TRADING',
        baseAsset: 'VIA',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000950',
              maxPrice: '0.00094500',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VIAETH',
        status: 'TRADING',
        baseAsset: 'VIA',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00028000',
              maxPrice: '0.02796000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VIABNB',
        status: 'TRADING',
        baseAsset: 'VIA',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00639000',
              maxPrice: '0.63830000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BLZBTC',
        status: 'TRADING',
        baseAsset: 'BLZ',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000169',
              maxPrice: '0.00016860',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BLZETH',
        status: 'TRADING',
        baseAsset: 'BLZ',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005041',
              maxPrice: '0.00504100',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BLZBNB',
        status: 'TRADING',
        baseAsset: 'BLZ',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00114000',
              maxPrice: '0.11320000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AEBTC',
        status: 'TRADING',
        baseAsset: 'AE',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001400',
              maxPrice: '0.00139600',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AEETH',
        status: 'TRADING',
        baseAsset: 'AE',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00041900',
              maxPrice: '0.04185000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AEBNB',
        status: 'TRADING',
        baseAsset: 'AE',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00942000',
              maxPrice: '0.94200000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RPXBTC',
        status: 'BREAK',
        baseAsset: 'RPX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000001',
              maxPrice: '100000.00000000',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RPXETH',
        status: 'BREAK',
        baseAsset: 'RPX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000001',
              maxPrice: '100000.00000000',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'RPXBNB',
        status: 'BREAK',
        baseAsset: 'RPX',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000100',
              maxPrice: '10000.00000000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NCASHBTC',
        status: 'TRADING',
        baseAsset: 'NCASH',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000008',
              maxPrice: '0.00000780',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NCASHETH',
        status: 'TRADING',
        baseAsset: 'NCASH',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000236',
              maxPrice: '0.00023540',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NCASHBNB',
        status: 'TRADING',
        baseAsset: 'NCASH',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005300',
              maxPrice: '0.00528000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POABTC',
        status: 'TRADING',
        baseAsset: 'POA',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000095',
              maxPrice: '0.00009480',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POAETH',
        status: 'TRADING',
        baseAsset: 'POA',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002815',
              maxPrice: '0.00281430',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POABNB',
        status: 'TRADING',
        baseAsset: 'POA',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00065000',
              maxPrice: '0.06420000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZILBTC',
        status: 'TRADING',
        baseAsset: 'ZIL',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000053',
              maxPrice: '0.00005240',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZILETH',
        status: 'TRADING',
        baseAsset: 'ZIL',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001555',
              maxPrice: '0.00155460',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZILBNB',
        status: 'TRADING',
        baseAsset: 'ZIL',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00035200',
              maxPrice: '0.03518000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ONTBTC',
        status: 'TRADING',
        baseAsset: 'ONT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002890',
              maxPrice: '0.00289000',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ONTETH',
        status: 'TRADING',
        baseAsset: 'ONT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00086000',
              maxPrice: '0.08593500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ONTBNB',
        status: 'TRADING',
        baseAsset: 'ONT',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01949000',
              maxPrice: '1.94880000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STORMBTC',
        status: 'TRADING',
        baseAsset: 'STORM',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000011',
              maxPrice: '0.00001030',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STORMETH',
        status: 'TRADING',
        baseAsset: 'STORM',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000307',
              maxPrice: '0.00030610',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'STORMBNB',
        status: 'TRADING',
        baseAsset: 'STORM',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00007000',
              maxPrice: '0.00698000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QTUMBNB',
        status: 'TRADING',
        baseAsset: 'QTUM',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.03650000',
              maxPrice: '3.64970000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QTUMUSDT',
        status: 'TRADING',
        baseAsset: 'QTUM',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.35700000',
              maxPrice: '35.66000000',
              tickSize: '0.00100000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XEMBTC',
        status: 'TRADING',
        baseAsset: 'XEM',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000144',
              maxPrice: '0.00014320',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XEMETH',
        status: 'TRADING',
        baseAsset: 'XEM',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00004262',
              maxPrice: '0.00426130',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XEMBNB',
        status: 'TRADING',
        baseAsset: 'XEM',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00097000',
              maxPrice: '0.09640000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WANBTC',
        status: 'TRADING',
        baseAsset: 'WAN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001420',
              maxPrice: '0.00141700',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WANETH',
        status: 'TRADING',
        baseAsset: 'WAN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00042100',
              maxPrice: '0.04203500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WANBNB',
        status: 'TRADING',
        baseAsset: 'WAN',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00955000',
              maxPrice: '0.95410000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WPRBTC',
        status: 'TRADING',
        baseAsset: 'WPR',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000028',
              maxPrice: '0.00002760',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'WPRETH',
        status: 'TRADING',
        baseAsset: 'WPR',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000815',
              maxPrice: '0.00081490',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QLCBTC',
        status: 'TRADING',
        baseAsset: 'QLC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000088',
              maxPrice: '0.00008800',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QLCETH',
        status: 'TRADING',
        baseAsset: 'QLC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002632',
              maxPrice: '0.00263140',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SYSBTC',
        status: 'TRADING',
        baseAsset: 'SYS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000129',
              maxPrice: '0.00012820',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SYSETH',
        status: 'TRADING',
        baseAsset: 'SYS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003801',
              maxPrice: '0.00380020',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SYSBNB',
        status: 'TRADING',
        baseAsset: 'SYS',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00087000',
              maxPrice: '0.08620000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QLCBNB',
        status: 'TRADING',
        baseAsset: 'QLC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00057000',
              maxPrice: '0.05695000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GRSBTC',
        status: 'TRADING',
        baseAsset: 'GRS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000833',
              maxPrice: '0.00083290',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GRSETH',
        status: 'TRADING',
        baseAsset: 'GRS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00024833',
              maxPrice: '0.02483280',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ADAUSDT',
        status: 'TRADING',
        baseAsset: 'ADA',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00699000',
              maxPrice: '0.69895000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ADABNB',
        status: 'TRADING',
        baseAsset: 'ADA',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00072000',
              maxPrice: '0.07130000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CLOAKBTC',
        status: 'TRADING',
        baseAsset: 'CLOAK',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002920',
              maxPrice: '0.00291400',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CLOAKETH',
        status: 'TRADING',
        baseAsset: 'CLOAK',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00087100',
              maxPrice: '0.08702000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GNTBTC',
        status: 'TRADING',
        baseAsset: 'GNT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000204',
              maxPrice: '0.00020320',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GNTETH',
        status: 'TRADING',
        baseAsset: 'GNT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00006073',
              maxPrice: '0.00607250',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GNTBNB',
        status: 'TRADING',
        baseAsset: 'GNT',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00136000',
              maxPrice: '0.13540000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LOOMBTC',
        status: 'TRADING',
        baseAsset: 'LOOM',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000122',
              maxPrice: '0.00012180',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LOOMETH',
        status: 'TRADING',
        baseAsset: 'LOOM',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003633',
              maxPrice: '0.00363220',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'LOOMBNB',
        status: 'TRADING',
        baseAsset: 'LOOM',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00081000',
              maxPrice: '0.08080000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XRPUSDT',
        status: 'TRADING',
        baseAsset: 'XRP',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.02828000',
              maxPrice: '2.82720000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCNBTC',
        status: 'TRADING',
        baseAsset: 'BCN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000003',
              maxPrice: '0.00000300',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCNETH',
        status: 'TRADING',
        baseAsset: 'BCN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000090',
              maxPrice: '0.00008930',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'BCNBNB',
        status: 'TRADING',
        baseAsset: 'BCN',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002100',
              maxPrice: '0.00201000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'REPBTC',
        status: 'TRADING',
        baseAsset: 'REP',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00021300',
              maxPrice: '0.02121000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'REPETH',
        status: 'TRADING',
        baseAsset: 'REP',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00634000',
              maxPrice: '0.63390000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'REPBNB',
        status: 'TRADING',
        baseAsset: 'REP',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.14300000',
              maxPrice: '14.23000000',
              tickSize: '0.00100000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TUSDBTC',
        status: 'TRADING',
        baseAsset: 'TUSD',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001528',
              maxPrice: '0.00152730',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TUSDETH',
        status: 'TRADING',
        baseAsset: 'TUSD',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00045478',
              maxPrice: '0.04547770',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TUSDBNB',
        status: 'TRADING',
        baseAsset: 'TUSD',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01033000',
              maxPrice: '1.03290000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZENBTC',
        status: 'TRADING',
        baseAsset: 'ZEN',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00024800',
              maxPrice: '0.02479000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZENETH',
        status: 'TRADING',
        baseAsset: 'ZEN',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00740000',
              maxPrice: '0.73950000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ZENBNB',
        status: 'TRADING',
        baseAsset: 'ZEN',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.16700000',
              maxPrice: '16.61000000',
              tickSize: '0.00100000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SKYBTC',
        status: 'TRADING',
        baseAsset: 'SKY',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005500',
              maxPrice: '0.00547000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SKYETH',
        status: 'TRADING',
        baseAsset: 'SKY',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00163000',
              maxPrice: '0.16300000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SKYBNB',
        status: 'TRADING',
        baseAsset: 'SKY',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.03700000',
              maxPrice: '3.66000000',
              tickSize: '0.00100000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'EOSUSDT',
        status: 'TRADING',
        baseAsset: 'EOS',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.54850000',
              maxPrice: '54.84850000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'EOSBNB',
        status: 'TRADING',
        baseAsset: 'EOS',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.05610000',
              maxPrice: '5.60500000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CVCBTC',
        status: 'TRADING',
        baseAsset: 'CVC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000170',
              maxPrice: '0.00016980',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CVCETH',
        status: 'TRADING',
        baseAsset: 'CVC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005058',
              maxPrice: '0.00505740',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'CVCBNB',
        status: 'TRADING',
        baseAsset: 'CVC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00115000',
              maxPrice: '0.11470000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'THETABTC',
        status: 'TRADING',
        baseAsset: 'THETA',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000130',
              maxPrice: '0.00013000',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'THETAETH',
        status: 'TRADING',
        baseAsset: 'THETA',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003867',
              maxPrice: '0.00386700',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'THETABNB',
        status: 'TRADING',
        baseAsset: 'THETA',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00087000',
              maxPrice: '0.08690000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XRPBNB',
        status: 'TRADING',
        baseAsset: 'XRP',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00289000',
              maxPrice: '0.28830000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TUSDUSDT',
        status: 'TRADING',
        baseAsset: 'TUSD',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.10010000',
              maxPrice: '10.00300000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'IOTAUSDT',
        status: 'TRADING',
        baseAsset: 'IOTA',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.06020000',
              maxPrice: '6.01150000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'XLMUSDT',
        status: 'TRADING',
        baseAsset: 'XLM',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.02083000',
              maxPrice: '2.08300000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'IOTXBTC',
        status: 'TRADING',
        baseAsset: 'IOTX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000018',
              maxPrice: '0.00001760',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'IOTXETH',
        status: 'TRADING',
        baseAsset: 'IOTX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000526',
              maxPrice: '0.00052510',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QKCBTC',
        status: 'TRADING',
        baseAsset: 'QKC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000051',
              maxPrice: '0.00005100',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'QKCETH',
        status: 'TRADING',
        baseAsset: 'QKC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001519',
              maxPrice: '0.00151840',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AGIBTC',
        status: 'TRADING',
        baseAsset: 'AGI',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000060',
              maxPrice: '0.00006000',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AGIETH',
        status: 'TRADING',
        baseAsset: 'AGI',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001786',
              maxPrice: '0.00178600',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'AGIBNB',
        status: 'TRADING',
        baseAsset: 'AGI',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00040000',
              maxPrice: '0.03920000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NXSBTC',
        status: 'TRADING',
        baseAsset: 'NXS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001370',
              maxPrice: '0.00136900',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NXSETH',
        status: 'TRADING',
        baseAsset: 'NXS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00040600',
              maxPrice: '0.04056000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NXSBNB',
        status: 'TRADING',
        baseAsset: 'NXS',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00950000',
              maxPrice: '0.94600000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ENJBNB',
        status: 'TRADING',
        baseAsset: 'ENJ',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00041600',
              maxPrice: '0.04151000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DATABTC',
        status: 'TRADING',
        baseAsset: 'DATA',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000048',
              maxPrice: '0.00004710',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DATAETH',
        status: 'TRADING',
        baseAsset: 'DATA',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00001400',
              maxPrice: '0.00140000',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ONTUSDT',
        status: 'TRADING',
        baseAsset: 'ONT',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.19000000',
              maxPrice: '18.92000000',
              tickSize: '0.00100000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.00100000',
              maxQty: '10000000.00000000',
              stepSize: '0.00100000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'TRXUSDT',
        status: 'TRADING',
        baseAsset: 'TRX',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00206000',
              maxPrice: '0.20535000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ETCUSDT',
        status: 'TRADING',
        baseAsset: 'ETC',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '1.12870000',
              maxPrice: '112.86400000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ETCBNB',
        status: 'TRADING',
        baseAsset: 'ETC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.11510000',
              maxPrice: '11.50700000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ICXUSDT',
        status: 'TRADING',
        baseAsset: 'ICX',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.06410000',
              maxPrice: '6.40500000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SCBTC',
        status: 'TRADING',
        baseAsset: 'SC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000009',
              maxPrice: '0.00000840',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SCETH',
        status: 'TRADING',
        baseAsset: 'SC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000249',
              maxPrice: '0.00024810',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'SCBNB',
        status: 'TRADING',
        baseAsset: 'SC',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00005600',
              maxPrice: '0.00556000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NPXSBTC',
        status: 'TRADING',
        baseAsset: 'NPXS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000003',
              maxPrice: '0.00000240',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NPXSETH',
        status: 'TRADING',
        baseAsset: 'NPXS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000069',
              maxPrice: '0.00006820',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VENUSDT',
        status: 'BREAK',
        baseAsset: 'VEN',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.18430000',
              maxPrice: '18.42100000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'KEYBTC',
        status: 'TRADING',
        baseAsset: 'KEY',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000009',
              maxPrice: '0.00000820',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'KEYETH',
        status: 'TRADING',
        baseAsset: 'KEY',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000244',
              maxPrice: '0.00024400',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NASBTC',
        status: 'TRADING',
        baseAsset: 'NAS',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00002240',
              maxPrice: '0.00223200',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NASETH',
        status: 'TRADING',
        baseAsset: 'NAS',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00066700',
              maxPrice: '0.06660500',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NASBNB',
        status: 'TRADING',
        baseAsset: 'NAS',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.01490000',
              maxPrice: '1.49000000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MFTBTC',
        status: 'TRADING',
        baseAsset: 'MFT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000010',
              maxPrice: '0.00000930',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MFTETH',
        status: 'TRADING',
        baseAsset: 'MFT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000277',
              maxPrice: '0.00027660',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'MFTBNB',
        status: 'TRADING',
        baseAsset: 'MFT',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00006200',
              maxPrice: '0.00618000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DENTBTC',
        status: 'TRADING',
        baseAsset: 'DENT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000004',
              maxPrice: '0.00000350',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DENTETH',
        status: 'TRADING',
        baseAsset: 'DENT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000102',
              maxPrice: '0.00010200',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ARDRBTC',
        status: 'TRADING',
        baseAsset: 'ARDR',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000155',
              maxPrice: '0.00015500',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ARDRETH',
        status: 'TRADING',
        baseAsset: 'ARDR',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00004583',
              maxPrice: '0.00458280',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'ARDRBNB',
        status: 'TRADING',
        baseAsset: 'ARDR',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00102000',
              maxPrice: '0.10160000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'NULSUSDT',
        status: 'TRADING',
        baseAsset: 'NULS',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.12450000',
              maxPrice: '12.44200000',
              tickSize: '0.00010000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '10000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'HOTBTC',
        status: 'TRADING',
        baseAsset: 'HOT',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000002',
              maxPrice: '0.00000190',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'HOTETH',
        status: 'TRADING',
        baseAsset: 'HOT',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000055',
              maxPrice: '0.00005440',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VETBTC',
        status: 'TRADING',
        baseAsset: 'VET',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000022',
              maxPrice: '0.00002160',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VETETH',
        status: 'TRADING',
        baseAsset: 'VET',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000643',
              maxPrice: '0.00064220',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VETUSDT',
        status: 'TRADING',
        baseAsset: 'VET',
        baseAssetPrecision: 8,
        quoteAsset: 'USDT',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00142000',
              maxPrice: '0.14140000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '10.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'VETBNB',
        status: 'TRADING',
        baseAsset: 'VET',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00015000',
              maxPrice: '0.01450000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DOCKBTC',
        status: 'TRADING',
        baseAsset: 'DOCK',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000024',
              maxPrice: '0.00002370',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'DOCKETH',
        status: 'TRADING',
        baseAsset: 'DOCK',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000705',
              maxPrice: '0.00070500',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POLYBTC',
        status: 'TRADING',
        baseAsset: 'POLY',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000225',
              maxPrice: '0.00022410',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'POLYBNB',
        status: 'TRADING',
        baseAsset: 'POLY',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00153000',
              maxPrice: '0.15260000',
              tickSize: '0.00001000'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.10000000',
              maxQty: '90000000.00000000',
              stepSize: '0.10000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'PHXBTC',
        status: 'TRADING',
        baseAsset: 'PHX',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000018',
              maxPrice: '0.00001750',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'PHXETH',
        status: 'TRADING',
        baseAsset: 'PHX',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000518',
              maxPrice: '0.00051800',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'PHXBNB',
        status: 'TRADING',
        baseAsset: 'PHX',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00011600',
              maxPrice: '0.01157000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'HCBTC',
        status: 'TRADING',
        baseAsset: 'HC',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00003450',
              maxPrice: '0.00344200',
              tickSize: '0.00000010'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'HCETH',
        status: 'TRADING',
        baseAsset: 'HC',
        baseAssetPrecision: 8,
        quoteAsset: 'ETH',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00101800',
              maxPrice: '0.10175000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '0.01000000',
              maxQty: '90000000.00000000',
              stepSize: '0.01000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.01000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GOBTC',
        status: 'TRADING',
        baseAsset: 'GO',
        baseAssetPrecision: 8,
        quoteAsset: 'BTC',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00000067',
              maxPrice: '0.00006640',
              tickSize: '0.00000001'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '0.00100000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     },
     {
        symbol: 'GOBNB',
        status: 'TRADING',
        baseAsset: 'GO',
        baseAssetPrecision: 8,
        quoteAsset: 'BNB',
        quotePrecision: 8,
        orderTypes: [
           'LIMIT',
           'LIMIT_MAKER',
           'MARKET',
           'STOP_LOSS_LIMIT',
           'TAKE_PROFIT_LIMIT'
        ],
        icebergAllowed: true,
        filters: [
           {
              filterType: 'PRICE_FILTER',
              minPrice: '0.00044600',
              maxPrice: '0.04457000',
              tickSize: '0.00000100'
           },
           {
              filterType: 'LOT_SIZE',
              minQty: '1.00000000',
              maxQty: '90000000.00000000',
              stepSize: '1.00000000'
           },
           {
              filterType: 'MIN_NOTIONAL',
              minNotional: '1.00000000'
           },
           {
              filterType: 'ICEBERG_PARTS',
              limit: 10
           },
           {
              filterType: 'MAX_NUM_ALGO_ORDERS',
              maxNumAlgoOrders: 5
           }
        ]
     }
  ]
};
