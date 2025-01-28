/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cupboard = {
  doorNum: 2,
  drawerNum: 5,
  height: 48,
  width: 36,
  depth: 12,
  hasClothesHanger: false,
  changeClothesHanger: function (clothesHangerStatus) {
    this.hasClothesHanger = clothesHangerStatus;
  },
  contentsInside: {
    booksNum: 3,
    shirtsNum: 15,
    pantsNum: 10,
    socksNum: 9,
  },
};
