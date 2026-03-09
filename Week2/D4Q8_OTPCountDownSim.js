/*
2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends
        */
console.log("OTP Sent Successfully")
let sec = 10;
let intervalID = setInterval(()=>{
    sec--;
    console.log(`Resend OTP in ${sec} seconds`)
    if(sec === 0){
        console.log("You can now resend the OTP")
        clearInterval(intervalID)
    }
},1000)