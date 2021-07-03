
//getting user1 posts
async function getPost(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    const post = await response.json();
    console.log(post.title);

    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
    const user = await resp.json();
    
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost();

//getting user2 posts

async function getPost1(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2')

    const post = await response.json();
    console.log(post.title);
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/2`)
    const user = await resp.json();
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost1();

//getting user3 posts

async function getPost2(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/3')

    const post = await response.json();
    console.log(post.title);
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/3`)
    const user = await resp.json();
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost2();

//getting user4 posts
async function getPost3(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/4')

    const post = await response.json();
    console.log(post.title);
const resp = await fetch(`https://jsonplaceholder.typicode.com/users/4`)
    const user = await resp.json();
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost3();

//getting user5 posts
async function getPost4(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/5')

    const post = await response.json();
    console.log(post.title);
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/5`)
    const user = await resp.json();
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost4();

//getting user6 posts
async function getPost5(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/6')

    const post = await response.json();
    console.log(post.title);
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/6`)
    const user = await resp.json();
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost5();

//getting user7 posts
async function getPost6(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/7')

    const post = await response.json();
    console.log(post.title);
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/7`)
    const user = await resp.json();
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost6();

//getting user8 posts

async function getPost7(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/8')

    const post = await response.json();
    console.log(post.title);
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/8`)
    const user = await resp.json();
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost7();

//getting user9 posts

async function getPost8(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/9')

    const post = await response.json();
    console.log(post.title);
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/9`)
    const user = await resp.json();
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost8();

//getting user10 posts

async function getPost9(){
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/10')

    const post = await response.json();
    console.log(post.title);
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/10`)
    const user = await resp.json();
    document.getElementById("head").innerHTML= `${user.name}'s Posts` ;

    document.getElementById("title").innerHTML = post.title;
    document.getElementById("posts").innerHTML = post.body;

}
getPost9();

//end of posts

