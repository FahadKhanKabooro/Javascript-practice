var arr = ["cat","dog","tiger","lion"]
console.log(arr[2])

var arr1 = new Array("ali","ghous","fahad")
console.log(arr1)

    arr[4] = "elepant"
    console.log(arr)


    // var x;
    // for(let x = 1;x<=10;x = x+2){
    //     console.log(x)
    // }

    // for(var i = 0;i < 5;i++){
    //     console.log(i)
    // }
    // for(let i = 0; i < 5; i++){
    //     alert("HEllo World!")
    // }

    // document.write("2"+"x"+1+"="+2*1+"<br>")
    // document.write("2"+"x"+1+"="+2*2+"<br>")
    // document.write("2"+"x"+1+"="+2*3+"<br>")
    // document.write("2"+"x"+1+"="+2*4+"<br>")
    // document.write("2"+"x"+1+"="+2*5+"<br>")

    // for(var i = 0;i < 20;i++){
    //     document.write("2"+"x"+i+"="+2*i+"<br>")
    // }

    // var names = ["fahad","ali","haseeb","zafar"]
    // for(var r = 0; r < names.length;r++){
    //     document.write("<br>"+names[r])
    // }

//     var cities = ["Lahore","Islamabad","Hyderabad","Karachi"]
//     for(var i = 0;i < cities.length;i++){
//         document.write(cities[i])
//     if(cities[i] === "Karachi" ){
//         alert(cities[i]+" is a cleanest city os pakistan")
//     }
// }   

// for(var i = 1; i > 0; i++){
//     if(i == 10){
//         break
//     }
//     document.write("Hello")
// }

// for(var i = 1; i < 10;i++){
//     if(i == 5){
//         break
//     }


    // document.wr/ite("Luve You")
// }
// for(var i = 0;i < 5; i++){
//     for(var j = 0;j<3;j++){
//         document.write(j+"Pakistan Zindabad"+"<br>")
//     }
// }

// var firstName = ["fahad","zafar","haseeb"]
// var lastName = ["khan",]
// for(var i = 0;i < firstName.length;i++){
//     for(var x = 0;x < lastName.length;x++){
//         document.write(firstName[i] + " " + lastName[x]+"<br>")
//     }
// }


// TRIANGLE WITH NESTED FOR LOOP
// for(var i = 0;i <10 ; i++){
//     for(var j = 0;j < i;j++){
//     document.write("*")
//     }
//     document.write("<br>")
// }


// PALENDROM WORDS

// var user = prompt("Enter your word")
// var chck ="";
// for(var i = user.length -1;i >= 0;i--){
// // document.write(user[i])
// chck += user[i]
// if(chck === user){
//     alert(user+" is palindrom")
// }

// }

// var name = "kabooro"
// name1 = name.toUpperCase()
// document.write(name1)

// var name = "KhanKabooroFaddy"
// document.write(name.indexOf("a"))


// CALCULATOR 

var inp1 = parseInt(prompt("Enter First Value"))
var sign = prompt("Enter operator u want ")
var inp2 = parseInt(prompt("Enter 2nd value"))


console.log(inp1+sign+inp2)
if(sign === "+"){
    alert(inp1+inp2)
}else if(sign === "-"){
    alert(inp1-inp2)
}else if(sign === "*"){
    alert(inp1*inp2)
}else if(sign === "/"){
    alert(inp1/inp2)
}else if(sign === "%"){
    alert(inp1%inp2)
}


