
const timeout = 20000;
const helper = require('../src/utils/helper');
const login = require('../src/login.service');


describe('/login (Gostaria de testar o login)', () => {
    
    let isLoged;
    console.log('teste');
    beforeAll(async () => {
      
      await helper.loadBrowser(helper.const.MOSTRAR_BROWSER);
      await helper.newPage();
      await helper.accessPage(`${process.env.URL_BASE}/login`);

      isLoged = await login.attenptAs(process.env.USER_LOGIN, process.env.USER_PASSWORD);

    }, timeout);

    it('Checando se o resultado foi de sucesso', async () => {
        await expect(isLoged).toBe(true);
    });

    afterAll(async () => {
      await helper.closeBrowser();
    }, timeout);
 
  },

  timeout,
);

