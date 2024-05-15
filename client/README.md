# Kiraz - Ecommerce Clothing

I have developed a responsive E-commerce clothing site using multiple technologies.

Link: https://kiraz-clothing.netlify.app/

#### Used Technologies

- React
- TypeScript
- CSS
- Axios
- React Router.

## About

#### HomePage

- There are four different collections : Shirts, Hoodies, Pants and Shorts.
- You can see the latest added product to the page.

#### Collection Pages

- You can filter products by color and size.
- You can choose multiple filtering options. (Example: filter by green color and black with large size)
- You can see each product card with its details.
- You can click on the product name or image to go to the product page.
- Admin users can add a new product card.
- Admin users can edit or delete the product card.

#### Product Page

- You can choose the color and the size of the product by the available options.
- Clicking on different color changes the img of the product to the new color.
- Whenever you choose a color or size it gets saved to the page parameter.
- Refreshing the page or sharing the url keeps the selected color and size.
- If you are logged in you can add the product to your bag.

#### User's Bag Page

- You can see the products you added to your bag.
- You can remove a product from your bag.
- You can clear your bag with one button.
- You can checkout with the chosen products.
- When you checkout , the items automatically gets moved to the history page.
- You can click on purchase history button to move to your history's page.
- I have added pagination functionality to the page.

#### History Page

- You can see the products you have bought before.
- You can see how much money you spent in total.
- I have added pagination functionality to the page.

#### More

- You have the ability to change the site's theme.
- The theme is saved in local storage.
- Navigation bar to move to a different page.
- The site is fully responsive.
- Used one generic modal for the whole site.

---

#### ENV File

VITE_BACKEND_URL = http://localhost:9999

---

Installation Guide:

- Clone this repository
- Type npm install in the terminal to install the dependencies
- Type npm run dev to start the client.

---

#### Showcasing my site

![home-1](./src/assets/showcase/home-1.png)
![home-2](./src/assets/showcase/home-two.png)
![collection-1](./src/assets/showcase/collection-1.png)
![collection-2](./src/assets/showcase/collection-2.png)
![add-and-edit-modal](./src/assets/showcase/add-edit-modal.png)
![bag](./src/assets/showcase/bag.png)
![empty-bag](./src/assets/showcase/empty-bag.png)
![history-page](./src/assets/showcase/history.png)
