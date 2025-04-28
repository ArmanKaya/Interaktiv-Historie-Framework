const storyData = [
    { 
        id: 1,
        texts: ["at 14 [playerName]'s family moved outside the big city into a smaller town to find silence... but one day that silence was broken.. suddenly i got a call.. my friend oliver called me.. i figured he just wanted to play something, but no. it was our friend niels... niels had died.. it was labled as suicide.."],
        choices: [
            { text: "Attend his funeral", nextId: 2 },


        ]
    },

    {
        id: 2,
        texts: ["at the funeral [playerName]'s and Oliver discuss with each other and plan to head out to the forest for a walk.. we see a shed and head to it to have a seat, suddenly we hear a buzz sound.. it was niels' phone.."],
        choices: [
            { text: "continue", nextId: 3 }
        ],
        image: "img/1funeral.jpeg"
    },


]
   

// id: X;
// Dette gir en id til teksten så programmet bruker dette til å vite hvilken tekst du skal bruke

// texts: ["string1", "string2"]
// Her skriver du teksten som skal være assosiert med id-en du har gitt den. Du kan ha så mage tekster du vil. For vær tekst string, så lager den en et nyt paragraf. Du kan også ha bare en tekst.

// choices: [
//   { text: "string1", nextId: x }
//   { text: "string2", nextId: y }
//];
// choices bruker en text variable som inneholder texten det står på choice og nextId variable som sier hvilken tekst om skal vises når den er trykket. Dette er den samme som Id-en på texts listen.

// nextId x;
// nextId som står for seg selv, vil putte en knapp som går til

export default storyData;