for(let i=1;i<=5;i++){
    console.log("Hello World");
}

i=0;
while(i<=5){
    console.log("Hello Anjali");
    i++;
}

i=0;
do{
console.log("students");
i++;
}while(i<=5);

let str="Aditya";

for(let j of str){
console.log(j);
}

let students={
    name:"Aditya yadav",
    age:20,
    cgpa:7.0,
    isPass: true
};

for(let k in students){
    console.log("key=",k,"value=",students[k]);
}

for(let j=1;j<=100;j++){
    if(j%2===0){
        console.log(j);
    }
}

name="aditya";
console.log(name[3]);
//output : t