const timeout = 15000;

afterAll(async ()=>{
})

beforeEach(async ()=>{
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
},timeout)

describe('Test page shopping cart functionalities', () => { 

    
    test('Cart open', async () => {
        // let element = await page.$("#cart_btn")
        // element.evaluate(element=>console.log(element.innerHTML))
        // let checkoutBtn = await page.waitForSelector("#checkout_btn")

        // expect(checkoutBtn.evaluate(el=>el.textContent)).toBe("Checkout")
        
        }, timeout);
        test('Cart open1', async () => {
            // let element = await page.$("#cart_btn")
            // element.evaluate(element=>console.log(element.innerHTML))
            // let checkoutBtn = await page.waitForSelector("#checkout_btn")
    
            // expect(checkoutBtn.evaluate(el=>el.textContent)).toBe("Checkout")
            
            }, timeout);
            test('Cart open2', async () => {
                // let element = await page.$("#cart_btn")
                // element.evaluate(element=>console.log(element.innerHTML))
                // let checkoutBtn = await page.waitForSelector("#checkout_btn")
        
                // expect(checkoutBtn.evaluate(el=>el.textContent)).toBe("Checkout")
                
                }, timeout);
                test('Cart open3', async () => {
                    // let element = await page.$("#cart_btn")
                    // element.evaluate(element=>console.log(element.innerHTML))
                    // let checkoutBtn = await page.waitForSelector("#checkout_btn")
            
                    // expect(checkoutBtn.evaluate(el=>el.textContent)).toBe("Checkout")
                    
                    }, timeout);
                    test('Cart open4', async () => {
                        // let element = await page.$("#cart_btn")
                        // element.evaluate(element=>console.log(element.innerHTML))
                        // let checkoutBtn = await page.waitForSelector("#checkout_btn")
                
                        // expect(checkoutBtn.evaluate(el=>el.textContent)).toBe("Checkout")
                        
                        }, timeout);
                        test('Cart open5', async () => {
                            // let element = await page.$("#cart_btn")
                            // element.evaluate(element=>console.log(element.innerHTML))
                            // let checkoutBtn = await page.waitForSelector("#checkout_btn")
                    
                            // expect(checkoutBtn.evaluate(el=>el.textContent)).toBe("Checkout")
                            
                            }, timeout);
                            test('Cart open6', async () => {
                                // let element = await page.$("#cart_btn")
                                // element.evaluate(element=>console.log(element.innerHTML))
                                // let checkoutBtn = await page.waitForSelector("#checkout_btn")
                        
                                // expect(checkoutBtn.evaluate(el=>el.textContent)).toBe("Checkout")
                                
                                }, timeout);



});