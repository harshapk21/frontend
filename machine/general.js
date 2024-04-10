/**
 * we can make grid cols to be dynamic v.imp
 * like grid-template-columns:`repeat(dynamicnumber , 1fr)`
 */

/**something called 1:1 aspect ratio , possible with paddingB:100% & height:0 */

/**
 * slice() give clone of full array. shift/unshift & push/pop */

 /**Try to answer solution in dynamic way ex: grid lights */

 /**
  * inactive { //for a tags
  * pointer-events:none
  * }
  * 
  * const futureDate = new Date(Date.now() + 1000);
  * const formattedDate = futureDate.toLocaleString();
  * 
  * the way we write promise.all in real-world , axios.get() return a promise which can denote resolved/rejected value of api call
  * but if you write axios.get().then().catch() , unless you throw promise.reject() or throw err . it hanldes rejection and gives you success al2ways
  * 
  * display:grid , by default positions vertically i.e row by row 
  * depends on default value of the grid-auto-flow property, which is row
  * 
  */

 /**
  * we have onBlur event on input to handle save onBlur etc
  */

 /**
  * try to use useReducer hook for simulating redux , no need to install any dep etc and flow is also smooth
  * 2 params = reducer fn , initial state
  * gives state & dispatch
  * 
  * reudcer is just a normal fn , case:{
  * return {...state,products:[...state.products,action.payload]
  * }}
  * 
  * whatever you put in payload , is the same thing you access in reducer dispatch({
  * type:'',
  * payload:
  * })
  * 
  * can't use set with object for uniqueness
  */

 /**
  * you need to export the createContext() variable and import it everywhere if u want to use that
  * so its better to have a useContext hook , that way you dont need to remember variable name everywhere u need to use it
  * value in provide should be object value={
  * {
  * fn,
  * state etc
  * }
  * } 
  */