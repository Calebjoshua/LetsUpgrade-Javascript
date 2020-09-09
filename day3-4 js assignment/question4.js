let students=[
    {
    name:"caleb",
    age:25,
    country:"india",
    hobbies:["playing","music","studing","movies"]
},
{
    name:"Joshua",
    age:32,
    country:"india",
    hobbies:["playing","sleeping"]
},
{
    name:"john cena",
    age:44,
    country:"USA",
    hobbies:["WWE"]
},
{
    name:"Sinchan",
    age:20,
    country:"korea",
    hobbies:["watching cartoon"]
}]
function f1(){
    for(let i=0;i<students.length;i++){
        if(students[i].age<30){
            console.log(students[i]);
    }
    }
}
function f2(){
    for(let i=0;i<students.length;i++){
        if(students[i].country=="india"){
            console.log(students[i]);
        }
    }
}
f1();
f2();