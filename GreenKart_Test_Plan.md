# GreenKart Application Test Plan

## Application Overview

Test plan for GreenKart application at https://rahulshettyacademy.com/seleniumPractise/#/. Covers home page validation, search and filter, cart interactions, checkout flow, and header navigation.

## Test Scenarios

### 1. GreenKart Functional Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Homepage Load and UI Validation

**File:** `GreenKart_Test_Plan.md`

**Steps:**
  1. -
    - expect: The page URL should be https://rahulshettyacademy.com/seleniumPractise/#/.
    - expect: The page title should be "GreenKart - veg and fruits kart".
  2. Verify the header shows the site name GREENKART, the search field placeholder reads "Search for Vegetables and Fruits", and the Cart icon is visible.
    - expect: Header branding is visible.
    - expect: Search field placeholder text is correct.
    - expect: Cart icon is visible.
  3. Verify the navigation links include Top Deals and Flight Booking.
    - expect: Top Deals link is present.
    - expect: Flight Booking link is present.
  4. Verify the product listing contains 30 products and each product card includes a name, price, quantity control (minus, spinner, plus), and ADD TO CART button.
    - expect: There are 30 products displayed.
    - expect: Each product card has a product name, price, quantity controls, and Add to Cart button.

#### 1.2. Product Search and Filter

**File:** `GreenKart_Test_Plan.md`

**Steps:**
  1. Open the app and enter a known product keyword into the search field, for example "Tomato".
    - expect: The search field accepts input.
  2. Verify the visible product list updates to show only matching products.
    - expect: Only products matching the search keyword are displayed.
    - expect: Non-matching products are hidden.
  3. Clear the search field or reload the page and verify the full product list returns.
    - expect: The product list returns to the full catalog after clearing search.

#### 1.3. Quantity Adjustment and Add to Cart

**File:** `GreenKart_Test_Plan.md`

**Steps:**
  1. Open the app and locate a product item, for example Brocolli or Tomato.
    - expect: The target product card is visible.
  2. Click the + control to increase the quantity from 1 to 2, then click ADD TO CART for that item.
    - expect: Product quantity increments correctly.
    - expect: The item is added to cart.
  3. Open the cart preview and verify the cart count updates, the product is listed, and item quantity is reflected.
    - expect: Cart reflects the added item count.
    - expect: Added product appears in the cart preview with correct quantity.
  4. Click the - control once when quantity is 1 and verify the quantity does not go below 1.
    - expect: Quantity remains at 1 and negative values are prevented.

#### 1.4. Cart Preview and Checkout Flow

**File:** `GreenKart_Test_Plan.md`

**Steps:**
  1. With an empty cart, open the cart preview from the cart icon.
    - expect: The cart preview shows a message such as "Your cart is empty!" and a PROCEED TO CHECKOUT button.
  2. Add a product to the cart, open the cart preview again, and verify the cart shows the selected item.
    - expect: The cart preview lists the selected item.
    - expect: The PROCEED TO CHECKOUT button is visible.
  3. Click PROCEED TO CHECKOUT and verify a checkout page or checkout section is displayed.
    - expect: The app navigates to a checkout page or displays an order summary section.

#### 1.5. Header Navigation and External Link Behavior

**File:** `GreenKart_Test_Plan.md`

**Steps:**
  1. Click the Top Deals link in the header.
    - expect: The app navigates to the offers section or updates route to #/offers.
  2. Click the Flight Booking link and verify navigation to the flight booking or dropdown practise page.
    - expect: The browser navigates to the external or linked page.
  3. Return to the GreenKart home page and verify the product catalog is visible again.
    - expect: The GreenKart home page loads successfully after returning.
