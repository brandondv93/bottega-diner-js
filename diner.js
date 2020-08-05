const totalOrder = [];

const entreeOptions = {
  sandwich: 7.99,
  chickenSalad: 4.99,
  steak: 12.99,
  friedChicken: 8.99,
  cheeseburger: 5.99,
  hamburger: 4.99,
  fishAndChips: 9.99
};

const sideOptions = {
  frenchFries: 1.99,
  vegetables: 2.49,
  mashedPotatoes: 2.49,
  bakedPotato: 1.99,
  sweetPotato: 2.49,
  sweetCorn: 1.49,
  appleSauce: 1.49
};

const orderReducer = (total, currentValue) => total + currentValue;

const dinerMenu = ("Our Entree options: Roast beef sandwich, Chicken salad, 8 oz. sirloin steak, Cheeseburger, Hamburger, and Fish and chips. \r\n \r\nOur sides options: French Fries, Mixed Vegetables, Mashed potatoes, Baked potato, Sweet potato, Sweet corn, and Applesauce");

const dinerMenuEntree = ("Entrees: Roast beef sandwich, Chicken salad, 8 oz. sirloin steak, Cheeseburger, Hamburger, and Fish and chips.");

const dinerMenuSides = ("Sides: French Fries, Mixed Vegetables, Mashed potatoes, Baked potato, Sweet potato, Sweet corn, and Applesauce");

const dinerWelcome = (`Hello, and welcome to Bottega Diner! Our passion is serving our customers delicious, home-style food that gives you the energy you need to keep coding! Our current menu allows for one choice of entree and two choices of sides. Please look over our menu and press Enter when you are ready for me to take your order. \r\n \r\n${dinerMenu}`);

const orderResponseEntree = function () {
       if (entreeOrder.toLowerCase().includes("sandwich")) {
          totalOrder.push(entreeOptions.sandwich);
          prompt(`Excellent choice! Our roast beef sandwich is our most popular dish, and for good reason! \r\n \r\n Price:$${entreeOptions.sandwich} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter to choose a side`);
        } else if 
          (entreeOrder.toLowerCase().includes("salad")) {
          totalOrder.push(entreeOptions.chickenSalad);
          prompt(`This dish is a hearty salad with juicy grilled chicken on a bed of fresh greens topped with a blend of cheddar cheeses and tomatoes. \r\n \r\n Price:$${entreeOptions.chickenSalad} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter to choose a side`);
        } else if 
          (entreeOrder.toLowerCase().includes("steak")) {
          totalOrder.push(entreeOptions.steak);
          prompt(`Lightly seasoned USDA Select top sirloin cooked to perfection and served hot off the grill.\r\n \r\n Price:$${entreeOptions.steak} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter to choose a side`);
        } else if 
          (entreeOrder.toLowerCase().includes("fried")) {
          totalOrder.push(entreeOptions.friedChicken);
          prompt(`An American classic! Breaded and fried with our own special blend of spices. My personal favorite!\r\n \r\n Price:$${entreeOptions.friedChicken} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter to choose a side`);
        } else if 
          (entreeOrder.toLowerCase().includes("cheeseburger")) {
          totalOrder.push(entreeOptions.cheeseburger);
          prompt(`A juicy all-beef burger with two cheddar cheese slices, lettuce, tomato, onion, and pickles on a brioche bun.\r\n \r\n Price:$${entreeOptions.cheeseburger} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter to choose a side`);
        } else if 
          (entreeOrder.toLowerCase().includes("hamburger")) {
          totalOrder.push(entreeOptions.hamburger);
          prompt(`A juicy all-beef burger classic with lettuce, tomato, onion and pickles on a brioche bun.\r\n \r\n Price:$${entreeOptions.hamburger} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter to choose a side`);
        } else if 
          (entreeOrder.toLowerCase().includes("fish")) {
          totalOrder.push(entreeOptions.fishAndChips);
          prompt(`Golden, crispy battered fish with fries. Comes with our signature coleslaw, tartar sauce and a lemon wedge.\r\n \r\n Price:$${entreeOptions.fishAndChips} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter to choose a side`);
        }};

const orderResponseSide = function () {
       if (sideOrder.toLowerCase().includes("fries")) {
          totalOrder.push(sideOptions.frenchFries);
          prompt(`Thick-cut russett potatoes fried to golden perfection! \r\n \r\n Price:$${sideOptions.frenchFries} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter`);
        } else if 
          (sideOrder.toLowerCase().includes("mixed")) {
          totalOrder.push(sideOptions.vegetables);
          prompt(`A farm-fresh vegetable medley containing carrots, broccoli, cauliflower, and green beans, steamed until tender. \r\n \r\n Price:$${sideOptions.vegetables} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter`);
        } else if 
          (sideOrder.toLowerCase().includes("mashed")) {
          totalOrder.push(sideOptions.mashedPotatoes);
          prompt(`Light, fluffy, and served with our homemade gravy.\r\n \r\n Price:$${sideOptions.mashedPotatoes} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter`);
        } else if 
          (sideOrder.toLowerCase().includes("baked")) {
          totalOrder.push(sideOptions.bakedPotato);
          prompt(`A tender baked potato served with butter and sour cream, and topped with bacon.\r\n \r\n Price:$${sideOptions.bakedPotato} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter`);
        } else if 
          (sideOrder.toLowerCase().includes("sweet potato")) {
          totalOrder.push(sideOptions.sweetPotato);
          prompt(`A perfectly cooked sweet potato, stuffed with brown sugar, marshmallows, and butter.\r\n \r\n Price:$${sideOptions.sweetPotato} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter`);
        } else if 
          (sideOrder.toLowerCase().includes("sweet corn")) {
          totalOrder.push(sideOptions.sweetCorn);
          prompt(`Farm fresh sweet corn, healthy and delicious!\r\n \r\n Price:$${sideOptions.sweetCorn} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter`);
        } else if 
          (sideOrder.toLowerCase().includes("sauce")) {
          totalOrder.push(sideOptions.appleSauce);
          prompt(`A delicious and healthy applesauce, topped with cinnamon.\r\n \r\n Price:$${sideOptions.appleSauce} \r\n Your current total is $${totalOrder.reduce(orderReducer)} \r\n \r\nPlease press Enter`);
        }};

for (var i = 0; i <= 3; i++) {
  if (i == 0) {
    prompt(dinerWelcome);
    var entreeOrder = prompt(`What would you like to order for your entree? Here are the entree options again: \r\n \r\n${dinerMenuEntree}`);
    orderResponseEntree();
  } else if (i == 1) {
    var sideOrder = prompt(`Please choose an item for your first side. Here are the side options again: \r\n \r\n${dinerMenuSides}`);
    orderResponseSide();
  } else if (i == 2) {
    var sideOrder = prompt(`Please choose an item for your second side. Here are the side options again: \r\n \r\n${dinerMenuSides}`);
    orderResponseSide();
  } else if (i == 3) {
    prompt(`Thank you for your order! We appreciate your business, and we will have your food out to you shortly. The total on your check will be $${totalOrder.reduce(orderReducer)}`)
  };
};