
setInterval(tickTock,1000);
// write only function name without paranthesis in the setInterval and set time out fucntion and then time in milliseconds


// Own code but not efficient for real time .
function tickTock(){
    // hourHand.innerText = "pop";
    // Always wrrite in " " the property.

    let hourHand = document.getElementById("hourHand");
    let minuteHand = document.getElementById("minuteHand");
    let secondHand = document.getElementById("secondHand");

    var x = 34;
    var r = new Date();

    var s = r.getSeconds() * 6;
    var m = r.getMinutes()*6;
    var h =( r.getHours()*30)+r.getMinutes()*0.5;

    secondHand.style.transform  = `rotate(${s}deg)`;
    minuteHand.style.transform = `rotate(${m}deg)`
    hourHand.style.transform = `rotate(${h}deg)`
    console.log(
        r.getHours(),
        r.getMinutes(),
        r.getSeconds()
    );
    
    // DONE ✅:)

}

