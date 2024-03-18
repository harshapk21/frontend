function test(){
	z='test';
	this.id = 1;
}
var x = new test();
let y=10;
console.log(window.x,window.y,window.z);	