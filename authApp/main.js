// console.log(firebase)
// var email = document.getElementById("email")
// var password = document.getElementById("password")
// var signup = document.getElementById("signup")
// var signin = document.getElementById("signin")

// signup.addEventListener("click",function(){
//     console.log(email.value)
//     console.log(password.value)
//     firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
//     .then((user)=>{
//         console.log(user)
//         console.log(user.user.uid)
//     })
//     .catch((e)=>{
//         console.log(e.code)
//         console.log(e.message)
//     })
// })

// signin.addEventListener("click",function(){
//     console.log(email.value)
//     console.log(password.value)
//     firebase.auth().signInWithEmailAndPassword(email.value,password.value)
//     .then((user)=>{
//         console.log(user.user.uid)
//     })
//     .catch((e)=>{
//         console.log(e.code)
//         console.log(e.message)
//     })
// })

var username = document.getElementsByName("username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var signup = document.getElementById("signup")
var signin = document.getElementById("signin")
var admin = document.getElementById("admin")
var user1 = document.getElementById("user")
var btn = document.getElementsByTagName("button")
var role = document.getElementsByName("role")
console.log(user1.value)
var getrole=""


console.log(role.value)

btn[0].addEventListener("click",function(){
   
    for(var i=0;i<role.length;i++){
        if(role[i].checked){
            getrole=role[i].value
            break

        }
    }
    if(getrole==""){
        alert("select one ")
    }
    else{
        console.log(getrole)

    }
})



signup.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((user)=>{
        console.log(user.user)
        var obj = {
            name: "Haseeb khan",
            email: email.value,
            password: password.value,
            role: "user",
            country : "Pakistan",
            uid: user.user.uid,
        }
        // firebase.database().ref("users/").push(obj)
        firebase.database().ref("users/").child(user.user.uid).push(obj)
    })
    .catch((e)=>{
        console.log(e.code)
        console.log(e.message)
    })
})

signin.addEventListener("click",function(){
    console.log(email.value)
    console.log(password.value)
    firebase.auth().signInWithEmailAndPassword(email.value,password.value)
    .then((user)=>{
        console.log(user.user.uid)
        console.log(user.user.displayName)
        console.log(user.user.password)
    })
    .catch((e)=>{
        console.log(e.code)
        console.log(e.message)
    })
})