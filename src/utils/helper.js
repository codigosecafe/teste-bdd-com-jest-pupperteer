require("./env");
const puppeteer = require("puppeteer");

module.exports = {
  
  const : {
      MOSTRAR_BROWSER: false,
      OCULTAR_BROWSER: true
  },

  _openBrowser: async function() {
    return await puppeteer.launch({
      headless: false,
      args: ["--disable-notifications", "--disable-extensions"],
      ignoreHTTPSErrors: true,
      defaultViewport: null,
    });
  },

  loadBrowser: async function (showBrowser) {

    let localShowBrowser = showBrowser || false;

    
    const browser = (localShowBrowser)? await puppeteer.launch({}) : await this._openBrowser()

    global.__BROWSER_GLOBAL__ = browser;

  },
  
  newPage: async function () {
    global.__PAGE_GLOBAL__ = await global.__BROWSER_GLOBAL__.newPage();
  },

  accessPage: async function (url) {
    await global.__PAGE_GLOBAL__.goto(url);
  },

  closeBrowser: async function () {
    await global.__BROWSER_GLOBAL__.close();
  }

};

