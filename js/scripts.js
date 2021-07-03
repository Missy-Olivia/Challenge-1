async function getUser1(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')

    const data =await response.json();
    console.log(data);

    document.getElementById("name0").innerHTML = data.name;
    document.getElementById("email0").innerHTML = data.email;
    
}
getUser1();
//2nd user
async function getUser2(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2')

    const data2 =await response.json();
    console.log(data2);

    document.getElementById("name1").innerHTML = data2.name;
    document.getElementById("email1").innerHTML = data2.email;

}
getUser2();

//3rd user
async function getUser3(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3')

    const data =await response.json();
    console.log(data);

    document.getElementById("name2").innerHTML = data.name;
    document.getElementById("email2").innerHTML = data.email;

}
getUser3();
//4th user
async function getUser4(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/4')

    const data =await response.json();
    console.log(data);

    document.getElementById("name3").innerHTML = data.name;
    document.getElementById("email3").innerHTML = data.email;

}
getUser4();
//5th user
async function getUser5(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/5')

    const data =await response.json();
    console.log(data);

    document.getElementById("name4").innerHTML = data.name;
    document.getElementById("email4").innerHTML = data.email;

}
getUser5();
//6th user
async function getUser6(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/6')

    const data =await response.json();
    console.log(data);

    document.getElementById("name5").innerHTML = data.name;
    document.getElementById("email5").innerHTML = data.email;

}
getUser6();
//7th user
async function getUser7(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/7')

    const data =await response.json();
    console.log(data);

    document.getElementById("name6").innerHTML = data.name;
    document.getElementById("email6").innerHTML = data.email;

}
getUser7();
//8th user
async function getUser8(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/8')

    const data =await response.json();
    console.log(data);

    document.getElementById("name7").innerHTML = data.name;
    document.getElementById("email7").innerHTML = data.email;

}
getUser8();
//9th user
async function getUser9(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/9')

    const data =await response.json();
    console.log(data);

    document.getElementById("name8").innerHTML = data.name;
    document.getElementById("email8").innerHTML = data.email;

}
getUser9();
//10th user
async function getUser10(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/10')

    const data =await response.json();
    console.log(data);

    document.getElementById("name9").innerHTML = data.name;
    document.getElementById("email9").innerHTML = data.email;

}
getUser10();