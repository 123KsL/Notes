Object.defineProperty(obj, prop, {
    enumerable: false, //仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false
    configurable: false,//仅当该属性的 configurable 为 true 时，该属性才能够被改变，也能够被删除。默认为 false
    writable: false,// 仅当仅当该属性的writable为 true 时，该属性才能被赋值运算符改变。默认为 false
    value: "{phone:123456789}"//该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined
})

// obj 需要定义属性的对象。
// prop 添加的属性名
const person ={name:111,phone:1111111};
Object.keys(person)  //[name,phone]

Object.entries([1,2,3])//[[ "0", 1 ],[ "1", 2 ],[ "2", 3 ]] //数组转为可枚举键值对
Object.fromEntries([[2,4]]) //键值对列表转为对象 //{2：4}
//检查键值对是否存在 const a={name:'xxx'}
'name' in a //true
Reflect.has(a,'name') //true
a.hasOwnProperty('name') //true
app['name'] //true
Object.hasOwn(a,'name') //true//es2022

