// Assign DOM elements
const spooky = document.querySelector("#spooky");
const jumbotron = document.querySelector(".jumbotron");

// Random facts
const factElement = document.querySelector('#fact');

// Array of Halloween facts
// Source: https://www.womansday.com/life/g485/15-fascinating-halloween-facts-124464/
// Source: https://www.huffingtonpost.in/entry/halloween-weird-facts_n_5948456
// Source: https://www.factretriever.com/halloween-facts
// Source: https://www.realsimple.com/holidays-entertaining/holidays/halloween/halloween-fun-facts
// Source: https://edition.cnn.com/2013/06/13/us/halloween-fast-facts/index.html

const facts = [
    'The first jack-o`-lanterns were made out of potatoes and turnips',
    'Americans spend about $86.13 on Halloween every year.',
    'California, Illinois, Michigan, New York, Ohio, and Pennsylvania produce the majority of pumpkins for Halloween – over 1 billion pounds a year!',
    'The name Jack-O-Lantern first originated from an Irish folktale about a man named Stingy Jack who tricked the Devil over and over again. When Jack died, he was forced to walk the Earth with only a carved-out turnip and burning coal to help light his way.',
    'The Plymouth Colony Pilgrims started the superstition about black cats.',
    'Tootsie Rolls, Smarties, and candy corn were among the most hated candies in 2017.',
    "Reese's Peanut Butter Cups were 2017’s most popular Halloween candy.",
    'At one time, it was customary to perform dances, songs, prayers, and plays in order to receive treats.',
    'Silly String is banned in Hollywood on Halloween.',
    'In 2014, the total estimated cost of all Halloween costumes was $2.8 billion.',
    'Candy Corn was created in 1898 and 35 million pounds of it are made every year.',
    'Halloween in the second largest consumer holiday in the United States. Consumers spent about $7 billion in 2015.',
    "Guinness World Records has named the Haunted Cave in Lewisburg, Ohio as the world's longest haunted house. It measures 3,564 feet long and is located 80 feet below ground in an abandoned mine.",
    'Harry Houdini died on Halloween in 1926.',
    'Trunk-or-Treating was created as a safer alternative to Trick-or-Treating in 2000.',
    'Halloween ranks as the sixth most popular card-giving holiday, with 20 million cards sent each year.',
    'In 2017, the most popular pet costumes were pumpkins, hot dogs, and a tie between a dog, lion, and pirate.',
    'Candy Corn was originally known as "chicken feed"',
    'Samhainophobia is the fear of Halloween.',
    'Halloween is thought to have originated around 4000 B.C., which means Halloween has been around for over 6,000 years.',
    'The first Jack O’Lanterns were actually made from turnips.',
    "Some animal shelters won't allow the adoption of black cats around Halloween for fear they'll be sacrificed.",
    'In a few American towns, Halloween was originally referred to as \"Cabbage Night.\"',
    'The first Jack O\’Lanterns were actually made from turnips.',
    'Samhainophobia is the fear of Halloween.',
    'The largest pumpkin ever measured was grown by Norm Craven, who broke the world record in 1993 with a 836 lb. pumpkin.',
    'Trick-or-treating evolved from the ancient Celtic tradition of putting out treats and food to placate spirits who roamed the streets at Samhain, a sacred festival that marked the end of the Celtic calendar year.',
    'The first known mention of trick-or-treating in print in North America occurred in 1927 in Blackie, Alberta, Canada.',
    'Ireland is typically believed to be the birthplace of Halloween.',
    'Scarecrows, a popular Halloween fixture, symbolize the ancient agricultural roots of the holiday.',
    'Halloween has variously been called All Hallows’ Eve, Witches Night, Lamswool, Snap-Apple Night, Samhaim, and Summer’s End.',
    'In 2010, 72.2% of those surveyed by the National Retail Federation will hand out candy, 46.3% will carve a pumpkin, 20.8% will visit a haunted house, and 11.5% will dress up their pets.',
    'The Village Halloween parade in New York City is the largest Halloween parade in the United States. The parade includes 50,000 participants and draws over 2 million spectators.',
    'Comedian John Evans once quipped: “What do you get if you divide the circumference of a jack-o’-lantern by its diameter? Pumpkin π.”',
    'Boston, Massachusetts, holds the record for the most Jack O’Lanterns lit at once (30,128).',
    'Both Salem, Massachusetts, and Anoka, Minnesota, are the self-proclaimed Halloween capitals of the world.',
    'Halloween is thought to have originated around 4000 B.C., which means Halloween has been around for over 6,000 years.',
    'According to tradition, if a person wears his or her clothes inside out and then walks backwards on Halloween, he or she will see a witch at midnight.',
    'Because the movie Halloween (1978) was on such a tight budget, they had to use the cheapest mask they could find for the character Michael Meyers, which turned out to be a William Shatner Star Trek mask. Shatner initially didn’t know the mask was in his likeness, but when he found out years later, he said he was honored.',
    "Halloween is more Irish than St.Patrick's Day.",
    'Fifty percent of kids prefer to receive chocolate candy for Halloween, compared with 24% who prefer non-chocolate candy and 10% who preferred gum.',
    'Most experts trace trick-or-treating to the European practice of "mumming," or "guysing," in which costume-wearing participants would go door-to-door performing choreographed dances, songs and plays in exchange for treats.',
    'Candy makers supposedly lobbied to extend daylight savings time into the beginning of November to get an extra hour of daylight so children could collect even more candy!',
    'Trick-or-treating harks back to the Middle Ages and All Souls’ Day, when poor people in Britain would beg for soul cakes, a sweet-bread treat, and pray for dead relatives in return.',
    'Chocolate makes up about three-quarters of a trick-or-treater’s loot, according to the National Confectioners Association.',
    'Immigrants from Ireland and Scotland brought Halloween to the United States in the 1800s. Haitian and African immigrants brought voodoo beliefs about black cats, fire, and witchcraft.',
];

// Display message and fact
factElement.innerHTML = facts[Math.floor(Math.random() * facts.length)];

// Assign colors
const colors = {
    spooky: "#ada48f"
};

const getMessage = days => {
    if (days < 0) {
        return `Halloween was ${-days} days ago.`;
    }

    if (days === 0) {
        return "It's Halloween! Stay spooky!";
    }

    if (days === 1) {
        return "Halloween is tomorrow! Be afraid, be very afraid!";
    }

    return `There are ${days} days until Halloween.`;
};

const today = moment().startOf('day'); // Today
const halloween = moment("31-10", "DD-MM"); // Next Halloween
const message = getMessage(halloween.diff(today, "days")); // Calculate difference

// Display message
spooky.innerHTML = `<div>${message} 👻🎃</div>
                    <div id="outerCostumeBox">
                    <button id="costumeButton">🦇</button>
                    <div id="costumeContent">Got a costume yet?
                     <br>Click on the bat for a random idea!</div>
                    </div>`;

// Map of allowed keys for Konami Code
const allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    65: "a",
    66: "b"
};

// 'Official' Konami Code sequence
const konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"];

// Variable to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;

// Add keydown event listener
document.addEventListener("keydown", e => {
    // Get the value of the key code from the key map
    const key = allowedKeys[e.keyCode];

    // Get the value of the required key from the konami code
    const requiredKey = konamiCode[konamiCodePosition];

    // Compare the key with the required key
    if (key === requiredKey) {

        // Move to the next key in the konami code sequence
        konamiCodePosition++;

        // If the last key is reached, activate cheats
        if (konamiCodePosition === konamiCode.length) {
            doKonami();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

// Konami function that activates
const doKonami = () => {
    // Changes the CSS of elements into spooky theme
    jumbotron.style.backgroundColor = "transparent";
    spooky.style.color = colors["spooky"];

    document.body.classList.add(["konami"]);

    // Changes the color of all hyperlinks
    document.querySelectorAll("a").forEach(link => {
        if (link.href !== "") {
            link.style.color = colors["spooky"];
        }
    });
};


// Script for Random Costume Picker

const costumes = [
    ["Napolen Dynamite", "https://i.pinimg.com/originals/26/2a/f4/262af40e4592db053fd8613773e3f5b0.jpg"],
    ["Castaway","https://www.pinterest.ca/pin/16958936081976494/"],
    ["a 404error", "https://www.instagram.com/p/7QsQ9Vhj9_/?utm_source=ig_embed"],
    ["50 Shades of Grey", "https://i.pinimg.com/474x/9a/45/42/9a454265d6a6e59ba609831a1b7c7028--so-funny-funny-stuff.jpg"],
    ["Octocat", "https://twitter.com/Bint_alBeatz/status/793178052494815233"],
    ["The Shining", "https://i.pinimg.com/originals/21/e3/a9/21e3a9859795366b7cc1b7aa3c8ed598.jpg"]
    ["Tamagotchi", "https://www.pinterest.ca/pin/192810427770341992/"],
    ["Clippy","https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F83%2F37%2F31%2F8337315668b57bcbf4fcb82a4fde2a99.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F518758450798995072%2F&docid=zgMyyDogGc7eJM&tbnid=Ex7IH-SdFvQoaM%3A&vet=10ahUKEwjXjKbr0_ndAhWL1FkKHZg5DfYQMwg7KAEwAQ..i&w=650&h=975&safe=off&client=firefox-b-ab&bih=781&biw=1440&q=halloween%20clippy&ved=0ahUKEwjXjKbr0_ndAhWL1FkKHZg5DfYQMwg7KAEwAQ&iact=mrc&uact=8"],
    ["Mark Zuckerberg", "https://costumewall.com/dress-like-mark-zuckerberg/"],
    ["a stick figure", "https://twitter.com/CarlForrest/status/1050448521353207808"]
  ];

  //Assign DOM elements
  let costumeButton = document.getElementById("costumeButton");
  let costumeContent = document.getElementById("costumeContent");

  //Pick a random costume
  const costumeIs = () => {
    let numCostumes = costumes.length;
    let randomNumber = Math.floor( ( Math.random() * numCostumes ) );
    return costumes[randomNumber];
  }

  //Display costume on page with link.
  const newCostume = () => {
    costume = costumeIs();
    costumeContent.innerHTML = `Got a costume yet?<br>
                                You could be: <a href="${costume[1]}" target="_blank">${costume[0]}</a>`;
  };

  //Add event listener on 'click'
  costumeButton.addEventListener('click', newCostume, false);
