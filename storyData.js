


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



    {
        id: 3,
        texts: ["Oliver: you realize there is something wrong with this whole situation right? we were playing games then he logs off, then boom suddenly his dead? this whole thing makes no sense... we should really look into this..."],
        choices: [
            { text: "Agree with Oliver", nextId: 4}
        ],
        image: "img/1funeral.jpeg"
    },

    {
        id: 4,
        texts: ["Oliver: Let's go to the forest to find a place where we can sit and discuss our plans"],
        choices: [
            { text: "continue", nextId: 5 }
        ],

    },

    {
        id: 5,
        texts: ["Whilst walking in the forest looking for a place to have a seat, you see a shed that looks abandoned.. what do you do?"],
        choices: [
            { text: "Approach the shed", nextId: 6},
            { text: "Walk away", nextId: 101 }
        ],
        image: "img/shed.jpeg"
    },

    /// death
    {
        id: 101,
        texts: ["Whilst walking away the murder came from behind... GAME OVER"],
        choices: [
            { text: "Restart", nextId: 1},
        ],
    },
    
//death end


{
    id: 6,
    texts: ["You enter the shed, and suddenly you hear a phone buzz.. you pick it up... it's niels' phone... you open it, and see a voice note he tried to send you.. but it was never delivered..."],
    choices: [
        { text: "Play the voice mail", nextId: 7 },
    ],
    image: "img/shed-inside.jpeg",
    Sound: "sounds/phonebuzz.mp3"
},


{
    id: 7,
    texts: [""],
    choices: [
        { text: "Play the voice mail", nextId: 8 },
    ],
    image: "img/shed-inside.jpeg",
    Sound: "sounds/nielshjelp.mp3",
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