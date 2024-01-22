let num=[85,97,44,37,76,60];

let sum=0;

for(let i=0;i<num.length;i++){
    sum+=num[i];
}

console.log(sum);
let total=sum/num.length;
console.log(total);

let arr=[250,645,300,900,50]

let t=0;
for(i=0;i<arr.length;i++){
    t=arr[i]/10;
    arr[i]=arr[i]-t;

}

for(let x of arr){
    console.log(x);
}




let a=["aditya","Abhishek","Amit","Vivek"];

//1: remove element from front
//ans:- 
//a.shift();//remove element form front
//console.log(a);

//2: remove element from given index 

//a.splice(1,1); //its remove "Abhishek" from 1st index
//console.log(a);




