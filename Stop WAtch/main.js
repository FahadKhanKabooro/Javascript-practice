// var count = 0
// var stop ;

// function timer(){
//     count++
// console.log(count)
// }
// stop = setInterval(timer,1000)


// setTimeout(function(){
//     clearInterval(stop)
// },5000)

// function timeOut(){
//     console.log("Running...")
// }
// setTimeout(timeOut,3000)

// var count = 0

// var stop ;
//  function timer(){
//     count++
//     console.log(count)
//  }
//   stop =setInterval(timer,1000)

//   setTimeout(function(){
//     clearInterval(stop)
//   },5000)

// var min = 0;
// var sec = 0;
// var msec = 0;
// var minHead = document.getElementById("min") 
// var secHead = document.getElementById("sec") 
// var msecHead = document.getElementById("msec") 

//  var interval ;

//  function timer(){
//     msec++
//     msecHead.innerHTML = msec;
//     if(msec >= 100){
//         sec++
//         secHead.innerHTML = sec;
//         msec = 0
//     }else if(sec >= 60){
//         min++
//         minHead.innerHTML = min;
//         sec = 0
        
//     }
//  }

//  function start(){
//     interval = setInterval(timer,10)
    

//  }

//  function stop(){
//     clearInterval(interval)
//  }

//  function reset(){
//     min = 0;
//     sec = 0;
//     msec = 0;
//     minHead.innerHTML = min;
//     secHead.innerHTML = sec;
//     msecHead.innerHTML = msec;
//     stop()
    
//  }

// var min = 0;
// var sec = 0;
// var msec = 0
// var minHead = document.getElementById("min")
// var secHead = document.getElementById("sec")
// var msecHead = document.getElementById("msec")

// var pause ;

// function timer(){
//     msec++
//     msecHead.innerHTML = msec;
//     if(msec >=100){
//         sec++
//         secHead.innerHTML = sec;
//         msec = 0
//     }else if(sec >= 60){
//         min++
//         minHead.innerHTML = min;
//         sec = 0
//     }
// }

// function start(){
// pause = setInterval(timer,10)
// }

// function stop(){
//     clearInterval(pause)
// }

// function reset(){
//     min = 0
//     sec = 0
//     msec = 0
//     minHead.innerHTML = min;
//     secHead.innerHTML = sec;
//     msecHead.innerHTML = msec
//     stop()
// }