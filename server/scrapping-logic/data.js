// Im using Render for my server to be live and puppeteer doesn't work on render
// unless i use Docker , so i just created a folder and typed the logic
// and then got the data that i want from the site that i scrapped from
// and used postman to insert the data to my database.

// import puppeteer from "puppeteer-extra";
// import StealthPlugin from "puppeteer-extra-plugin-stealth";
// import * as fs from "fs";

// puppeteer.use(StealthPlugin());

// const url =
//   "https://www.aloyoga.com/collections/mens-sweatshirts-hoodies?Color=ColorGroup%3ABlack%2CColorGroup%3ABlue%2CColorGroup%3AGreen";

// const main = async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto(url);

//   const getData = await page.evaluate((url) => {
//     const cards = Array.from(document.querySelectorAll(".PlpTile "));

//     const data = cards.slice(0, 10).map((info) => {
//       const sizes = ["S", "M", "L"];
//       let randomNumber = Math.floor(Math.random() * sizes.length);
//       const randomSize = sizes[randomNumber];

//       const priceText = info.querySelector(
//         "div.info > div.card-price > span"
//       ).innerText;

//       // Remove non-numeric characters and convert to integer
//       const price = priceText
//         ? parseInt(priceText.replace(/[^\d.]/g, ""))
//         : null;

//       if (
//         info.querySelector(".product-color").innerText === "Navy" ||
//         info.querySelector(".product-color").innerText === "Dark Navy"
//       ) {
//         return {
//           name: info.querySelector(".product-name > a").innerText,
//           color: "blue",
//           size: randomSize,
//           price: price,

//           blueImg: info.querySelector("img.scrollable-image.loaded").src,
//         };
//       } else if (info.querySelector(".product-color").innerText === "Black") {
//         return {
//           name: info.querySelector(".product-name > a").innerText,
//           color: "black",
//           size: randomSize,

//           price: price,
//           blackImg: info.querySelector("img.scrollable-image.loaded").src,
//         };
//       } else if (
//         info.querySelector(".product-color").innerText === "Stealth Green" ||
//         info.querySelector(".product-color").innerText === "Midnight Green"
//       ) {
//         return {
//           name: info.querySelector(".product-name > a").innerText,
//           color: "green",
//           size: randomSize,

//           price: price,
//           greenImg: info.querySelector("img.scrollable-image.loaded").src,
//         };
//       }
//     });
//     return data;
//   }, url);

//   console.log(getData);
//   await browser.close();
//   fs.writeFileSync("data.json", JSON.stringify(getData));
// };

// main();
