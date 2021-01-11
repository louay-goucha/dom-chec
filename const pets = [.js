const pets = [
    { name: 'Max', type: 'dog', bornOn: 2018 },
    { name: 'Angel', type: 'cat', bornOn: 2015 },
    { name: 'Jasper', type: 'dog', bornOn: 2016 }
  ]
 const  getAge=(bornOn)=> {
     return 2020-bornOn;
 }
 return pets.map(x=>x.Age=getAge(x.bornOn));


const dogs = (pets) => {
    return pets.filter(x=>x.type=='dog') 

}
const findJasper = (pets)=>{
   let obj = pets.filter (x=>x.name==='Jasper');
   return `${obj[0].name} is 4 years old`
}
//ex2

const zeros = (tab)=>{
 let arr1 = tab.filter (x=>x===0)
  let arr2 = tab.filter(x=>x!==0)
  return arr2.concat(arr1)
}
//ex3
let string = "Hello World!"
const rev = (str) => {
 return str.split(" ").map((x,i) => { return i%2===0 ? x : x.split('').reverse().join('');}).join(" ");
}

console.log(rev(string))