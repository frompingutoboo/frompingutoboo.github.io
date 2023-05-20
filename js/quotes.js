var quotes = ["I love you 💞💞",
    "Fuck you are so tight 🥵🥵",
    "I am proud of you boo *headpat*",
    "You are so cute",
    "Have a wonderful day, I love you 😽",
    "I wanna squish you right now 🐧",
    "Pingu dash 🐧🐧",
    "I am pooping 💩💩",
    "I thought you don\'t poop💩",
    "Thanks for making me c** daddy 🌚",
    "saranghae boo boo 💗",
    "Bogoshipeo yeobo 💗",
    "Do you best at work 😍 Fighting!!💯",
    "You look so cute when you are angry 💢",
    "Jal ja baby girl",
    "Seeing you instantly relaxes me haebara",
    "Everything you do is super cute, keeping shining 🌟",
    "You look gorgeous in everything babe😘",
    "You are a good s***",
    "I hope you have the best day ever, I miss you 😽❤",
    "oppa saranghae pingu 💗🐧",
    "I want coconuts 💗🥥",
    "You are a good slut 🌚"
    ];

function messageGenerator() {
    var element = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById("displayMessage").innerHTML = '<div class="messageArt">'+element+'</div>';
    document.getElementById("disappear").style.display = "none";

}