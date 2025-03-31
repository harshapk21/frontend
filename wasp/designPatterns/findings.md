1. Any methods/properties defined in a class are non-static i.e they're not accessible by class name but only by instances.(use this only inside class constructor , we should not use this outisde constructors)
2. methods defined on class level are stored in class prototype i.e they are defined only once and are shared
   by instances(saves mempory & redudndancy).
3. properties defined on class level are stored in instance ,i.e for each instance created , a new copy of property is added at instance level.

4. First search of property/method is done at instance level & then on prototype level.
5. you have to explicitly name a method or property as static , only then it'll be accessible by class name directly. like function constructos , here also instances can access static properties using instance.constructor.static_prop.
6. you can return a explicit instance from constructor itself check: singleton pattern.
7. Incase of subclass extends parent class , methods defined in parent class are available to subclass through prototype reference/ sharing/prototypal inheritence but for you to access parent class properties , you need to class super() on your subclass constructor else you won't be able to use this , more details in the ss attatched classExtendsImp.png.

// Objects - create & assign
8. Incase of objects , any property/method defined on them are stored at instance level , objects do have **proto** that defines their prototypal relationship i.e **proto**-> Object prototype -> null
9. Using newObj = Object.create(oldObj) // newObj.**proto** = oldObj
   we avoided duplication of defining property names by making use of protypal design pattern.
   Object.assign({},oldObj) => everything is copied i.e all properties , no memory efficieny by not making use of prototypes
