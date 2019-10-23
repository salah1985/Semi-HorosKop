var month = prompt("Bitte gib deinen Geburtsmonat als Zahl an!");
var url = ["https://www.horoscopedates.com/img/icon_aquarius.png", 
"https://www.horoscopedates.com/img/icon_pisces.png",
"https://www.horoscopedates.com/img/icon_aries.png",
"https://www.horoscopedates.com/img/icon_taurus.png",
"https://www.horoscopedates.com/img/icon_gemini.png",
"https://www.horoscopedates.com/img/icon_cancer.png",
"https://www.horoscopedates.com/img/icon_leo.png",
"https://www.horoscopedates.com/img/icon_virgo.png",
"https://www.horoscopedates.com/img/icon_libra.png",
"https://www.horoscopedates.com/img/icon_scorpio.png",
"https://www.horoscopedates.com/img/icon_sagittarius.png",
"https://www.horoscopedates.com/img/icon_capricorn.png"]
var sign = ["AQUARIUS", "PISCES", "ARIES", "TAURUS", "GEMINI", "CANCER", "LEO", "VIRGO", "LIBRA", "SCORPIO", "SAGITTARIUS", "CAPRICORN"]
var text = ["Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…",
"Communication is very important today—written, spoken, and even nonverbal body language will all…",
"Today your patience might be tested when one or more of your projects gets put on hold by someone…",
"Your intense energy makes you a great candidate for a leadership position right now, so if you are…",
"If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…",
"Too many different elements in your life are overlapping with each other right now—and it's your…",
"The issues you'll be dealing with today are very complicated ones—you will have to navigate your…",
"You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…",
"Pick a cultural event that's coming up and get some tickets for it today.",
"Someone will challenge a belief that you've held for a very long time today—and they will say an…",
"Someone in your life needs to step up and take on more responsibility—and you need to tell them to....",
"Breaking the rules is not always a bad thing—especially if the rules limit your creativity. ",
]
var i;
if (month<=12) {
    for (i = 0; i < sign.length; i++) {
            if (i+1 == month) {
                document.write(`<figure>
                <img src="${url[i]} " alt=""><figcaption>Your horoscope is ${sign[i]}:
                <span>${text[i]}</span></figcaption>
                </figure>`);
            } 
    } 
} else {
    document.write("<h1>ERROR</h1>")
}