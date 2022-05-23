const obj = { nome: "Abner", idade: 22 };

const objSerializado = JSON.stringify(obj);

const objDesserializado = JSON.parse(objSerializado);

console.log(obj, "obj");
console.log(objSerializado, "objSerializado");
console.log(objDesserializado, "objDesserializado");


const objFunc = { funcao: function () { console.log("isso é uma função") }, nome: "Teste" };
console.log(objFunc, "objFunc");
objFunc.funcao();

const objFuncSerializado = JSON.stringify(objFunc);
console.log(objFuncSerializado);

const objFuncDesserializado = JSON.parse(objFuncSerializado);
console.log(objFuncDesserializado);