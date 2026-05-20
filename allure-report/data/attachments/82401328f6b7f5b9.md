# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> @Web Client app login for iphone 13 pro
- Location: tests\ClientAppPO.spec.js:8:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[routerlink*=\'cart\']')
    - locator resolved to <button tabindex="0" _ngcontent-elx-c33="" class="btn btn-custom" routerlink="/dashboard/cart">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-elx-c31="" class="ngx-spinner-overlay ng-tns-c31-1 ng-trigger ng-trigger-fadeIn ng-star-inserted ng-animating">…</div> from <ngx-spinner _nghost-elx-c31="" _ngcontent-elx-c34="" class="ng-tns-c31-1 ng-star-inserted">…</ngx-spinner> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-elx-c31="" class="ngx-spinner-overlay ng-tns-c31-1 ng-trigger ng-trigger-fadeIn ng-star-inserted">…</div> from <ngx-spinner _nghost-elx-c31="" _ngcontent-elx-c34="" class="ng-tns-c31-1 ng-star-inserted">…</ngx-spinner> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - text:    
  - generic [ref=e26]:
    - paragraph [ref=e27]: Home | Search
    - heading "Filters" [level=4] [ref=e29]
    - generic [ref=e30]:
      - textbox "search" [ref=e32]
      - generic [ref=e33]:
        - heading "Price Range" [level=6] [ref=e34]
        - generic [ref=e35]:
          - textbox "Min Price" [ref=e37]
          - textbox "Max Price" [ref=e39]
      - generic [ref=e40]:
        - heading "Categories" [level=6] [ref=e41]
        - generic [ref=e43]: 
        - generic [ref=e44]:
          - checkbox [ref=e45]
          - generic [ref=e46]: fashion
        - generic [ref=e47]:
          - checkbox [ref=e48]
          - generic [ref=e49]: electronics
        - generic [ref=e50]:
          - checkbox [ref=e51]
          - generic [ref=e52]: household
      - generic [ref=e53]:
        - heading "Sub Categories" [level=6] [ref=e54]
        - generic [ref=e56]: 
        - generic [ref=e57]:
          - checkbox [ref=e58]
          - generic [ref=e59]: t-shirts
        - generic [ref=e60]:
          - checkbox [ref=e61]
          - generic [ref=e62]: shirts
        - generic [ref=e63]:
          - checkbox [ref=e64]
          - generic [ref=e65]: shoes
        - generic [ref=e66]:
          - checkbox [ref=e67]
          - generic [ref=e68]: mobiles
        - generic [ref=e69]:
          - checkbox [ref=e70]
          - generic [ref=e71]: laptops
      - generic [ref=e72]:
        - heading "Search For" [level=6] [ref=e73]
        - generic [ref=e75]: 
        - generic [ref=e76]:
          - checkbox [ref=e77]
          - generic [ref=e78]: men
        - generic [ref=e79]:
          - checkbox [ref=e80]
          - generic [ref=e81]: women
  - generic [ref=e82]:
    - generic [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e85]: Showing 9 results |
        - generic [ref=e86]: User can only see maximum 9 products on a page
      - generic [ref=e87]:
        - generic [ref=e89]:
          - img [ref=e90]
          - generic [ref=e91]:
            - heading "ADIDAS ORIGINAL" [level=5] [ref=e92]
            - generic [ref=e94]: $ 11500
            - button "View" [ref=e95] [cursor=pointer]:
              - generic [ref=e96]: 
              - text: View
            - button " Add To Cart" [ref=e97] [cursor=pointer]:
              - generic [ref=e98]: 
              - text: Add To Cart
        - generic [ref=e100]:
          - img [ref=e101]
          - generic [ref=e102]:
            - heading "ZARA COAT 3" [level=5] [ref=e103]
            - generic [ref=e105]: $ 11500
            - button "View" [ref=e106] [cursor=pointer]:
              - generic [ref=e107]: 
              - text: View
            - button " Add To Cart" [ref=e108] [cursor=pointer]:
              - generic [ref=e109]: 
              - text: Add To Cart
        - generic [ref=e111]:
          - img [ref=e112]
          - generic [ref=e113]:
            - heading "iphone 13 pro" [level=5] [ref=e114]
            - generic [ref=e116]: $ 55000
            - button "View" [ref=e117] [cursor=pointer]:
              - generic [ref=e118]: 
              - text: View
            - button " Add To Cart" [active] [ref=e119] [cursor=pointer]:
              - generic [ref=e120]: 
              - text: Add To Cart
        - generic [ref=e122]:
          - img [ref=e123]
          - generic [ref=e124]:
            - heading "Laptop" [level=5] [ref=e125]
            - generic [ref=e127]: $ 11500
            - button "View" [ref=e128] [cursor=pointer]:
              - generic [ref=e129]: 
              - text: View
            - button " Add To Cart" [ref=e130] [cursor=pointer]:
              - generic [ref=e131]: 
              - text: Add To Cart
        - generic [ref=e133]:
          - img [ref=e134]
          - generic [ref=e135]:
            - heading "Laptop" [level=5] [ref=e136]
            - generic [ref=e138]: $ 11500
            - button "View" [ref=e139] [cursor=pointer]:
              - generic [ref=e140]: 
              - text: View
            - button " Add To Cart" [ref=e141] [cursor=pointer]:
              - generic [ref=e142]: 
              - text: Add To Cart
        - generic [ref=e144]:
          - img [ref=e145]
          - generic [ref=e146]:
            - heading "Laptop" [level=5] [ref=e147]
            - generic [ref=e149]: $ 11500
            - button "View" [ref=e150] [cursor=pointer]:
              - generic [ref=e151]: 
              - text: View
            - button " Add To Cart" [ref=e152] [cursor=pointer]:
              - generic [ref=e153]: 
              - text: Add To Cart
        - generic [ref=e155]:
          - img [ref=e156]
          - generic [ref=e157]:
            - heading "Laptop" [level=5] [ref=e158]
            - generic [ref=e160]: $ 11500
            - button "View" [ref=e161] [cursor=pointer]:
              - generic [ref=e162]: 
              - text: View
            - button " Add To Cart" [ref=e163] [cursor=pointer]:
              - generic [ref=e164]: 
              - text: Add To Cart
        - generic [ref=e166]:
          - img [ref=e167]
          - generic [ref=e168]:
            - heading "qwerty" [level=5] [ref=e169]
            - generic [ref=e171]: $ 11500
            - button "View" [ref=e172] [cursor=pointer]:
              - generic [ref=e173]: 
              - text: View
            - button " Add To Cart" [ref=e174] [cursor=pointer]:
              - generic [ref=e175]: 
              - text: Add To Cart
        - generic [ref=e177]:
          - img [ref=e178]
          - generic [ref=e179]:
            - heading "qwerty" [level=5] [ref=e180]
            - generic [ref=e182]: $ 11500
            - button "View" [ref=e183] [cursor=pointer]:
              - generic [ref=e184]: 
              - text: View
            - button " Add To Cart" [ref=e185] [cursor=pointer]:
              - generic [ref=e186]: 
              - text: Add To Cart
    - list "Pagination" [ref=e191]:
      - listitem [ref=e192]:
        - text: «
        - generic [ref=e193]:
          - text: Previous
          - generic [ref=e194]: page
      - listitem [ref=e195]:
        - generic [ref=e196]: You're on page
        - text: "1"
      - listitem [ref=e197]:
        - generic [ref=e198]:
          - text: Next
          - generic [ref=e199]: page
        - text: »
  - generic [ref=e200]: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | class DashboardPage
  2  | {
  3  | 
  4  |     constructor(page)
  5  |     {
  6  |         this.page=page;
  7  |         this.products=page.locator(".card-body");
  8  |         this.productsText=page.locator(".card-body b");
  9  |         this.cart=page.locator("[routerlink*='cart']");
  10 |         this.orders=page.locator("button[routerlink*='myorders']");
  11 |     }
  12 | 
  13 | 
  14 |     async searchProduct(productName)
  15 |     {
  16 | 
  17 |            await this.productsText.first().waitFor();
  18 |             const titles=await this.productsText.allTextContents();
  19 |             console.log(titles);
  20 |             const count=await this.products.count();
  21 |             for(let i=0;i<count;i++)
  22 |             {
  23 |                 if(await this.products.nth(i).locator("b").textContent()=== productName)
  24 |                 {
  25 |                     await this.products.nth(i).locator("text= Add To Cart").click();
  26 |                     break;
  27 |                 }
  28 |             }
  29 |            
  30 |     }
  31 | 
  32 |     async navigateToCart()
  33 |     {
> 34 |         await this.cart.click();
     |                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  35 |     }
  36 | 
  37 |     async naviagateToOrders()
  38 |     {
  39 |         await this.orders.click();
  40 |     }
  41 | }
  42 | module.exports={DashboardPage};
```