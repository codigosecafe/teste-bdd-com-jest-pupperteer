
module.exports = {
    attenptAs: async function(use_login, use_password) {
      
        let page = await global.__PAGE_GLOBAL__;
        
        await page.waitForTimeout(1000);
        await page.waitForSelector('.login-box' );
        await page.type('input[name="email"]', use_login, {delay:50});
        await page.type('input[name="password"]', use_password, {delay:50});
        await page.keyboard.press('Enter',{delay:100});
        await page.waitForTimeout(3000);
        await page.waitForSelector('.content-header');

        let content_page = await page.$eval('.active', el => el.innerText.trim());
        const regex = /Dashboard/gm;

        if(regex.exec(content_page) !== null){ 
            return true;
        }

        return false;
    }
    
}
