
const myArr=[1,2,3,"Arbaz",4,5,6]
console.log(myArr)

console.log(myArr.slice(0,3))
console.log(myArr.splice(4,7))
console.log(myArr)

myArr.unshift(10);
console.log(myArr);
console.log(myArr.shift())


const marvelHero=["Thor","IronMan","spiderman"]
const dcHeros=["Superman","flash","batman"]

marvelHero.push(dcHeros)

console.log(marvelHero)

const allH=marvelHero.concat(dcHeros)
console.log(allH)

console.log("...........................")
const newArr=[...marvelHero, ...dcHeros]
console.log(newArr)