
import{test as baseTest} from '@playwright/test';
interface TestDataForOrder
{
    username:string;
    password:string;
    productName:string;
}
export const customTest=baseTest.extend<{testDataForOrder: TestDataForOrder}>(
    {

        testDataForOrder: {
             

    username:"adityadeshpande2345@gmail.com",
    password:"DeshAdi1#",
    productName:"iphone 13 pro"  
}
            
         
}    

    
    
)