function makeTimer() {	
    
    let endTime =new Date("25 December 2021 12:00 PST");			
        endTime = (Date.parse(endTime) / 1000);

    let now = new Date();
        now = (Date.parse(now) / 1000);

    let timeLeft = endTime - now;

    let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

document.querySelector("#days").innerHTML= days + "<span>Days</span>"
document.querySelector("#hours").innerHTML= hours + "<span>Hours</span>"
document.querySelector("#minutes").innerHTML= minutes + "<span>Minutes</span>"
document.querySelector("#seconds").innerHTML= seconds + "<span>Seconds</span>"


}

setInterval(function() { makeTimer(); }, 1000);
