/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const laptop = {
  resolution: "1920x1080",
  gpu: "NVIDIA GeForce MX550",
  cpu: "12th Gen Intel i5-1235U (12) @ 4.400GHz",
  keyboard: {
    layout: "QWERTY",
    type: "US",
    size: "96%",
  },
  memory: "4629MiB / 15696MiB",
};

console.log(laptop);
