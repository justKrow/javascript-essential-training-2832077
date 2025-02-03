/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const laptop = {
  name: "Aspire 5",
  brand: "Acer",
  price: 450,
  screen: "15.6 inches",
  CPU: "Intel Core i5-1035G1",
  ram: "8GB DDR4",
};

// function addArticle(article) {
//   const newArticle = document.createElement("article");
//   newArticle.innerHTML = `
//         <h1>${article.name}</h1>
//         <ul>
//             <li>Brand: ${article.brand}</li>
//             <li>Price: ${article.price}</li>
//             <li>Screen: ${article.screen}</li>
//             <li>CPU: ${article.CPU}</li>
//             <li>RAM: ${article.ram}</li>
//         </ul>`;
//   return newArticle;
// }

// const addArticle = function (article) {
//   const newArticle = document.createElement("article");
//   newArticle.innerHTML = `
//         <h1>${article.name}</h1>
//         <ul>
//             <li>Brand: ${article.brand}</li>
//             <li>Price: ${article.price}</li>
//             <li>Screen: ${article.screen}</li>
//             <li>CPU: ${article.CPU}</li>
//             <li>RAM: ${article.ram}</li>
//         </ul>`;
//   return newArticle;
// };

const addArticle = (article) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
        <h1>${article.name}</h1>
        <ul>
            <li>Brand: ${article.brand}</li>
            <li>Price: ${article.price}</li>
            <li>Screen: ${article.screen}</li>
            <li>CPU: ${article.CPU}</li>
            <li>RAM: ${article.ram}</li>
        </ul>`;
  return newArticle;
};

const main = document.querySelector("main");
main.appendChild(addArticle(laptop));
