Feature: Ecommerce validations


@Regression
Scenario: Placing the Order
Given a login to Ecommerce application with "adityadeshpande2345@gmail.com" and  "DeshAdi1#"
When Add "iphone 13 pro" to Cart
Then Verify "iphone 13 pro" is displayed in the Cart
When Enter valid details and Place the Order
Then Verify order is present in the Orde History


@Validation

Scenario Outline: Placing the Order
Given a login to Ecommerce2 application with "<username>" and  "<password>"
Then Verify Error message is displayed

Examples:
|username|password|
|adityadeshpande2345@gmail.com|DeshAdi1#|
|hello@123.com|Iamhello@12|