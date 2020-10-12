import {Person, bbb} from "./b.js"
/*import ccc from "./c.js"*/ //ccc() 호출
import {default as kkk} from "./c.js" 
import defaultExport from "./c.js"//defaultExport() 호출

var p= new Person("홍길동");
bbb();
//ccc();
kkk();
defaultExport(); //ccc()호출 
console.log(">>>>", p.name);