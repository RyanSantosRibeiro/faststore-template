
module.exports = {
  seo: {
  "title": "Cadastra",
  "description": "A fast and performant store framework",
  "titleTemplate": "Cadastra | FastStore",
  "author": "Cadastra"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "maeztraio",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://maeztraio.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/libresse",
    search: "/s?q=Tramontina",
    pdp: "/camisa-branca-manga-longa/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/camisa-branca-manga-longa/p",
      collection: "/libresse",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/camisa-branca-manga-longa/p",
      collection: "/libresse",
      collection_filtered: "/libresse/?category-1=libresse&brand=Tramontina&facets=category-1%2Cbrand%27",
      search: "/s?q=Tramontina",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://maeztraio.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
