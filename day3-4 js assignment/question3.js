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
    console.log(students);
}
f1();

function f2(){
    if (students.age<=30){
        console.log(students);
    }
}
f2();