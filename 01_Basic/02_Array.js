
const myKey= Symbol("myKey")
const myObj={
    name :"Arbaz Khan",
    [myKey] :"key",
    salary :10000,
    role :"Java Developer"
}

console.log(myObj)
console.log(myObj.name)
console.log(myObj.salary)
console.log(myObj["role"])
myObj.name="Mohammed Arbaz Salim khan"

// Object.freeze(myObj)
myObj.name="KingofCode"
console.log(myObj)

myObj.greeting=function(){
    console.log("Hello Arbaz, You are doing Great.");
    console.log(`hello user , ${this.name}`)
}

console.log("....")
console.log(myObj.greeting())