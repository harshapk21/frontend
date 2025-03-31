/*
In C++ , we create objects only by new keyword & class
But in JS , an object can be created directly using { } or through new keyword & class or through
new keyword & function
*/

/**
 * In JavaScript, the this keyword refers to the context within which a function is executed. 
 * 
 * this value is determined by how a function is called in case of normal function.
 * if we call function directly without using object , 'this' inside normal function will 
 * always point to global object
 * 
 * this will mostly be inside a function , you need to determine value of this when asked or needed.
 * 
 * 2 types of functions (arrow & normal) , behaviour of this is completely different for both fun's
 * 
 * arrow fn will never have this of its own , it depends on this of parent scope/parent function's this value
 */

let obj = {
  id: 1,
  name: 'hpk',
  getName: function parent() {
    console.log(this);

    let child = () => {
      console.log(this);
      return this.name;
    };

    
    return child();;
  },
};

console.log(obj.getName());



let obj2 = {            
    id: 1,
    name: 'hpk',
    getName: () => {
      return obj2.name;
    },
  };
  
console.log(obj2.getName());  


let obj3 = {            
    id: 1,
    name: 'hpk',
    getName: function() {
        console.log(this,'outer')
        function inner(){
        console.log(this,'inner')
        }
        inner();
      return obj3.name;
    },
  };
  
console.log(obj3.getName());  


function parent(){
    console.log(this,'outer')

    let child = ()=>{
        console.log(this,'inner')
    }
    child();
    //If u dont return anything , undefined will be returned
}
  
console.log(parent());  

//this inside setTimeout & setInterval

let obj5 = {
    id: 1,
    fn: function(){
        setTimeout(()=>console.log(this.id),1000)
    }
}

obj5.fn();

let obj6 = {
    id: 1,
    fn: function(){
        setTimeout(function(){
            console.log(this.id)
        },1000)
    }
}

obj6.fn();

let obj7 = {
  id: 1,
  fn: function () {
    function inner() {
      console.log(obj7.id);
    }
    setTimeout(inner, 1000);
  },
};

obj7.fn();

let obj8 = {
  id: 1,
  fn: function () {
    function inner() {
      console.log(this.id);
    }
    setTimeout(inner.bind(this), 1000);
    this.inner()
  },
};

obj8.fn();
  