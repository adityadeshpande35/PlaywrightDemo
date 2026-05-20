const base=require('@playwright/test');
exports.customtest=base.test.extend(
    {

        testDataForOrder: {
             

    username:"adityadeshpande2345@gmail.com",
    password:"DeshAdi1#",
    productName:"iphone 13 pro"  
}
            
         
}    

    
    
)