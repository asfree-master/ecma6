//b.js
//export는 
//import {aaa} from...
export function bbb() {
	console.log("bbb 호출");
}//end function

export class Employee{
	
	constructor(name, sal)
	{
		this.name=name;
		this.sal=sal;
	}
	setName(name){
		this.name= name;
	}
	getName(){
		return this.name;
	}
	setSalary(sal){
		this.salary= sal;
	}
	getSalary(){
		return this.salary;
	}
	getEmployee(){
		return this.name+"\t"+ this.salary;
	}
}//end Employee