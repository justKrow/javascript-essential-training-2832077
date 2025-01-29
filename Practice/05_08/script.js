/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

console.log(document.querySelector("h1").classList.add("hidden"));
console.log(document.querySelector("h1").classList.add("test"));
console.log(document.querySelector("h1").classList.remove("hidden"));
console.log(
  document.querySelector(".backpack__features").setAttribute("alt", "test")
);
console.log(document.querySelector(".backpack__features").getAttribute("alt"));
console.log(
  document.querySelector(".backpack__features").setAttribute("alt", "pass")
);
console.log(
  (document.querySelector(".backpack__features").style.color = "blue")
);
