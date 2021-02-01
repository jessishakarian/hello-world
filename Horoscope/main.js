function zodiacChoose() {
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

    if (month > 12|| day > 31) {
        alert("That's a real quick no");
    }
    else if (month == 1 && day >= 20 || month == 2 && day <= 18) {
        document.getElementById("signChar").innerHTML="You got Stevie - Aquarius";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/dCA2spO.jpg>";
        document.getElementById("description").innerHTML="Like Stevie, you have a tough outer shell, but inside you are honest and loyal, once you let people in to your life. "
    }
    else if (month == 2 && day >= 19 || month == 3 && day <= 20){
        document.getElementById("signChar").innerHTML="You are Ted - Pisces";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/9vqUoCz.jpg>";
        document.getElementById("description").innerHTML="Like Ted, you are sensitive and compassionate. Once you put your mind to helping people nothing can stand in your way.";
    }
    else if (month == 3 && day >= 21 || month == 4 && day <= 19) {
        document.getElementById("signChar").innerHTML="You are Alexis - Aries";
        document.getElementById("pic").innerHTML="<img src=https://imgur.com/OVRDzub.jpg>";
        document.getElementById("description").innerHTML="You are adventurous and energetic. Sometimes that can become impulsive if left unchecked, but like Alexis, your intelligence and drive can be used for good.";
    }
    else if (month == 4 && day >= 20 || month == 5 && day <= 20) {
        document.getElementById("signChar").innerHTML="You are Ronnie - Taurus";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/MYSCTFh.jpg>";
        document.getElementById("description").innerHTML="Like Ronnie, you are reliable and persistent with the people that matter in your life, even if you can be a little snarky sometimes. But it's always to the people that matter in your life (or town).";
    }
    else if (month == 5 && day >= 21 || month == 6 && day <= 20) {
        document.getElementById("signChar").innerHTML="You are Bob - Gemini";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/De9wt9Z.jpg>";
        document.getElementById("description").innerHTML="You are adaptable and have many interests and have a youthful disposition. But being a gemini, you have a duality to your spirit.";
    }
    else if (month == 6 && day >= 21 || month == 7 && day <= 22) {
        document.getElementById("signChar").innerHTML="You got David - Cancer";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/Ygx9yUc.png>";
        document.getElementById("description").innerHTML="You are emotional, and like David, causes you to be a little moody sometimes. But once you have your heart set on something, your attached for good. Like giving up your old dream of New York.";
    }
    else if (month == 7 && day >= 23 || month == 8 && day <= 22) {
        document.getElementById("signChar").innerHTML="You got Mutt - Leo";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/glnEiPi.jpg>";
        document.getElementById("description").innerHTML="You are open minded to things that maybe others aren't in town. Your generosity knows no bounds, but you like to do your own thing.";
    }
    else if (month == 8 && day >= 23 || month == 9 && day <= 22) {
        document.getElementById("signChar").innerHTML="You got Twyla - Virgo";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/A8whciy.jpg>";
        document.getElementById("description").innerHTML="You are kind and thoughtful, but also meticulous and a perfectionist. You have a big heart and keep secrets well.";
    }
    else if (month == 9 && day >= 23 || month == 10 && day <= 22) {
        document.getElementById("signChar").innerHTML="You got Johnny - Scorpio";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/X7h8w4Q.jpg>";
        document.getElementById("description").innerHTML="Like Johnny, you are diplomatic and (mostly) level headed. Unlike Moira who's always the life of the party, you are social and charming, easygoing.";
    }
    else if (month == 10 && day >= 23 || month == 11 && day <= 21) {
        document.getElementById("signChar").innerHTML="You got Moira - Scorpio";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/WBP7FEr.jpg>";
        document.getElementById("description").innerHTML="You are headstrong and determined, nothing stands in your way when you want to get something done. Like Moira, your energy is magnet for others, or maybe even the camera.";
    }
    else if (month == 11 && day >= 22 || month == 12 && day <= 21) {
        document.getElementById("signChar").innerHTML="You got Jocelyn - Sagittarius";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/Ch3V8E9.jpg>";
        document.getElementById("description").innerHTML="You see the sunny side in every situation, and are eager to help any time you can. You find joy easily in your life.";
    }
    else if (month == 12 && day >= 22 || month == 1 && day <= 19) {
        document.getElementById("signChar").innerHTML=" You got Patrick - Capricorn";
        document.getElementById("pic").innerHTML="<img src=https://i.imgur.com/OQZsg9z.jpg>";
        document.getElementById("description").innerHTML="You are practical but patient, you love having other people's energy to bounce off of.";
    }

}
