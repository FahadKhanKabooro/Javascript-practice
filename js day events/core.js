// for(a =0;a<10;a++){
//     console.log(a)
// }

// var b = 0
// while(b < 10){
//     console.log(b)
//     b++
// }

// var c = 0;
// do{
//     console.log(c)
//     c++

// }
// while(c < 10);

// For Loop
// for(var a = 0;a <10;a++){
//     console.log(a)
// }

// While Loop
// var b = 0
// while(b <20){
//     console.log(b)
//     b++
// }

// Do while loop
// var i = 0
// do{
//     console.log(i)
//     i++
// }
// while(i < 14);




        // EVENTS LINKS

// function foo(greet){
//     alert(greet)
// }
// function doo(){
//     var a = 2 + 2
//     alert(a)
// }
// function hello(){
//     alert("hi user")
// }
// function clk(){
//     alert("clicked")
// }



            // Setting Feild Values

    // function getName(){
    //     var abc = document.getElementById("abc")
    //     console.log(abc.value)
    // }
    // abc.value = ""
    function setName(){
        var name = document.getElementById('abc');
        name.value = "fahad"
        var para = document.getElementById("para");
        para.innerHTML = "Hello this is Example"
        para.style.color='blue'
        para.style.border='2px solid black'
    }
    setName()