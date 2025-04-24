/**
 * prototype(proto) property of an object is a link to its parent and parents prototype is link to its parent
 * its a link for inheritence
 */

/**
 * If you use spreading & Object.assign() , prototype chain is lost at that point , it only copies OWN & ENUMERABLE properties
 * from source into resulting object. if you do obj.__proto__ , it will point to Object.Prototype
 * Use Object.create() to preserve that enumerability chain -> No copying — just sets up the chain.
 * 
*/

// Define a parent object
const animal = {
    type: 'Mammal'
  };
  
  // Create an object using animal as its prototype
  const dog = Object.create(animal);
  dog.breed = 'Labrador';
  
  // Create another object using dog as its prototype
  const myDog = Object.create(dog);
  myDog.name = 'Buddy';
  
  // Access properties
  console.log(myDog.name);  // Output: Buddy
  console.log(myDog.breed); // Output: Labrador
  console.log(myDog.type);  // Output: Mammal (inherited from animal)
  
  // Check the prototype chain
  console.log(Object.getPrototypeOf(myDog) === dog);   // Output: true
  console.log(Object.getPrototypeOf(dog) === animal);  // Output: true

  
  console.log(myDog.__proto__ === dog); // Output: true
  console.log(myDog.__proto__.__proto__ === animal); // Output: true
  
  console.log(Object.getPrototypeOf(myDog) === dog); // Output: true
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(myDog)) === animal); // Output: true
  
  