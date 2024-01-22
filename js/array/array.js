let x=[1,2,3,4,5];
console.log(x);
console.log(typeof x);
console.log(x[2]);

for(let i=0;i<x.length;i++){
    console.log(x[i]);
}


  //x.push(100,1000,2992);
 //console.log(x);

x.pop();
console.log(x);


let a=[1,2,3,4,5];
//a.unshift(1);//add element in front
//console.log(a);

//a.shift();//remove element from front
//console.log(a);

//a.pop()//it remove elemnnt from last
//console.log(a);

//a.push(12);//its add elemnet in last
//console.log(a);

 console.log(a.slice(2,3));//its return value between given index but its not change in original array

//a.splice(3,0,13);//(index,number of element delete,add new number) it change in original array
//console.log(a);



a.forEach((val,index)=>{//its only use for arrays its is higher order methods  its change in original array
  console.log(val,index);
})


//here is ArrayMap 

let newArr=a.map((val)=>{ //its not change in original array its is use to create for new array from original array

return val**2;

})

console.log(newArr);


let myArr=[1,2,3,545,6,7];

//here is filter array its is use for filter  elemnent in array for new Array

let evenA=myArr.filter((val)=>{
  
  return val%2==0;


})

console.log(evenA);







