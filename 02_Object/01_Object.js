// const obj=new Object();
const obj1={};
// // console.log(obj);
// // console.log(obj1);


obj1.name="Abc"
obj1.id="abc1223"
obj1.isLogin=true

// console.log(obj1)


// const user={
//     email:"abc@gmail.com",
//     userName:{
//         fulName:{
//             name:"Arbaz",
//             sureName:"Khan"
//         }
//     },
//     job:"javaDeveloper"

// }

// console.log(user.email)
// console.log(user.userName)


const ob={1:"a",2:"b"}
const ob1={3:"a",4:"b"}
const ob2={5:"a",6:"b"}

const obj3=Object.assign({},ob1,ob2,ob)
// console.log(obj3)
const myO={...ob,...ob1,...ob2}
// console.log(myO)

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))

console.log(Object.hasOwnProperty('isLogin'))
