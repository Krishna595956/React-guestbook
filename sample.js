// const numbers=[1,2,3,4,5,6]
// // //syntax:arrayName.filter(value=>condition)
// // const evenNumbers=numbers.filter(a=>a%2==1)
// // console.log(evenNumbers)
// // console.log(numbers)

// const students=[
//     {"name":"one","branch":"cse"},
//     {"name":"two","branch":"ece"},
//     {"name":"three","branch":"cse"},
//     {"name":"four","branch":"ece"}]

// const newStudents=students.filter(student=>student.branch==='ece')
// console.log(newStudents)

// numbers.map(value=>console.log(value/2))
// students.map(student=>console.log(student.branch))

//Terenary opearator:condition?True expression?False expression

// if(10<20){
//     console.log("True")
// }
// else{
//     console.log("True")
// }

// 10>20 ? console.log("True"):console.log("False")

// const numbers=[1,2,3,4,5,6]
// const [a,b,,,c]=numbers

// const students=[
//     {"name":"one","branch":"cse"},
//     {"name":"two","branch":"ece"},
//     {"name":"three","branch":"cse"},
//     {"name":"four","branch":"ece"}]
// for(let items of students){
//    const {name,branch}=items;
//    console.log(name,branch)
// }

// const cart=[
//     {"quantity":5,"cost":20},
//     {"quantity":6,"cost":50}
// ]
// const total=cart.reduce((total1,item)=>total1+(item.quantity*item.cost),0);
// console.log(total)