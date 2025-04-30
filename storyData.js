const storyData = [
    { 
        id: 1,
        texts: ["At 14, [playerName]'s family moved outside the big city into a smaller town to find silence, but one day that silence was broken. Suddenly, I got a call. My friend Oliver called me. I figured he just wanted to play something, but no. It was our friend Niels. Niels had died. It was labeled as suicide."],
        choices: [
            { text: "Attend his funeral", nextId: 121},
        ]
    },

    {
        id: 2,
        texts: ["At the funeral, [playerName] and Oliver discuss with each other."],
        choices: [
            { text: "continue", nextId: 3 }
        ],
        image: "img/1funeral.jpeg"
    },

    {
        id: 3,
        texts: ["Oliver: 'You realize there is something wrong with this whole situation, right? We were playing games, then he logs off, then boom, suddenly he's dead. This whole thing makes no sense. We should really look into this.'"],
        choices: [
            { text: "Yea, you're right..", nextId: 4}
        ],
        image: "img/1funeral.jpeg"
    },

    {
        id: 4,
        texts: ["Oliver: 'Let's go to the forest to find a place where we can sit and discuss our plans.'"],
        choices: [
            { text: "continue", nextId: 5 }
        ],

    },

    {
        id: 5,
        texts: ["While walking in the forest, looking for a place to sit, you see a shed that looks abandoned. What do you do?"],
        choices: [
            { text: "Approach the shed", nextId: 6},
            { text: "Walk away", nextId: 201 }
        ],
        image: "img/shed.jpeg"
    },

    /// death
    {
        id: 201,
        texts: ["While walking away, the murderer came from behind... GAME OVER."],
        choices: [
            { text: "Restart", nextId: 1},
        ],
    },
    
    // death end


    {
        id: 6,
        texts: ["You enter the shed, and suddenly you hear a phone buzz. You pick it up. It's Niels' phone. You open it and see a voice note he tried to send you, but it was never delivered."],
        choices: [
            { text: "Play the voicemail", nextId: 7 },
        ],
        image: "img/shed-inside.jpeg",
        Sound: "sounds/phonebuzz.mp3"
    },

    {
        id: 7,
        texts: [""],
        choices: [
            { text: "Continue", nextId: 8 },
        ],
        image: "img/shed-inside.jpeg",
        Sound: "sounds/nielshjelp.mp3",
    },

    {
        id: 8,
        texts: ["Suddenly, you hear a loud sound. There's something here."],
        choices: [
            { text: "Approach the sound", nextId: 202 },
            { text: "Run away", nextId: 9 },
        ],
        image: "img/shed-inside.jpeg",
    },

    /// death
    {
        id: 202,
        texts: ["You approach the sound. It was the killer. GAME OVER."],
        choices: [
            { text: "Restart", nextId: 1 },
        ],
        
    },
    // death end

    {
        id: 9,
        texts: ["While running away, you heard footsteps behind you. Someone was in there too."],
        choices: [
            { text: "Continue", nextId: 10 },
        ],
        image: "img/forest.jpeg",
    }, 

    {
        id: 10,
        texts: ["Oliver: [playerName].. you realize there is no way back now right? what if the police tracks our dna and links the murder to us... Anyway this is getting really creepy, but it's getting late. We should head back.'"],
        choices: [
            { text: "Ask Oliver to come over and spend the night", nextId: 11 },
            { text: "Go home and make plans later", nextId: 112},
        ],
        image: "img/forest.jpeg",
    },

    // happy ending

    {
        id: 11,
        texts: ["You and Oliver head back to your place and head to sleep. But your sleep was interrupted by Oliver's phone being called over and over. Finally, he picks up. It's his mother. You could tell his heart sank, then suddenly he drops his phone. Oliver tells you that his whole family, except his mother, was murdered."],
        choices: [
            { text: "Ask him what's next", nextId: 13 },
            { text: "Ask if we should take a day off", nextId: 12 },
        ], 
    },

    {
        id: 12,
        texts: ["Oliver: 'How can we take a day off... Who's to say we won't be next... we don't have much time... we NEED to solve this murder.'"],
        choices: [
            { text: "Continue", nextId: 13},
        ], 
    },

    {
        id: 13,
        texts: ["Oliver: 'We need to work, and we have to be fast, otherwise... we may be next!, where should we even start?'"],
        choices: [
            { text: "Let's stay home and investigate a bit more", nextId: 14},
            { text: "", nextId: 14},
        ], 
    },

    {
        id: 14,
        texts: ["After reading news articles about the murders, they revealed that all the causes of death were from a machete. What should [playerName] and Oliver bring before going out?"],
        choices: [
            { text: "Bring a machete", nextId: 15, unlock: "machete"},
            { text: "Bring a baseball bat", nextId: 15, unlock: "baseball"},
            { text: "Bring a gun", nextId: 15, unlock: "gun"},
        ], 
    },

    {
        id: 15,
        texts: ["As you are about to head out, you hear sirens surrounding the house. What do you do?"],
        choices: [
            { text: "Hide in bushes in the backyard.", nextId: 16},
            { text: "Run towards the forest", nextId: 17},
            { text: "Head downstairs and ask why they are there", nextId: 303},
        ], 
    },


    /// arrested game over
    {
        id: 303,
        texts: ["The police placed you into custody and put the murders of Niels and Oliver's family on your name. You're sentenced to life in prison."],
        choices: [
            { text: "continue", nextId: 2003},
        ], 
            image: "img/prisonhouse.jpeg"
    },

    {
        id: 2003,
        texts: ["GAME OVER."],
        choices: [
            { text: "Restart", nextId: 1},
        ], 
    },


    /// arrested game over end

    {
        id: 16,
        texts: ["You're stuck in the bushes and surrounded by police, but suddenly they leave the yard."],
        choices: [
            { text: "Run towards the forest", nextId: 17},
            { text: "Walk back inside", nextId: 303},
        ], 
    },

    {
        id: 17,
        texts: ["You got to the forest and got some distance from them, but they are still on your tail. Where do you want to head now?"],
        choices: [
            { text: "Left", nextId: 18},
            { text: "Follow the road straight", nextId: 19},
            { text: "Right", nextId: 18},

        ], 
        image: "img/runforest.jpeg"
    },

    {
        id: 18,
        texts: ["It's a dead end."],
        choices: [
            { text: "Head back", nextId: 17},
        ],
        image: "img/deadend.jpeg"
    },

    {
        id: 19,
        texts: ["You arrive back at the shed, but something is different. Oliver's mother is there, and she is holding a machete with dried blood on it. Oliver asks, confused, what she is doing there. Oliver's mother: 'Stop acting blind. You know why I'm here. Same reason Niels was here. Because I murdered him.' *Suddenly she comes charging towards us.*"],
        choices: [
            { text: "Attack her", nextId: 20 },
            { text: "Run away", nextId: 20},
        ], 
        image: "img/olivermommachete.jpeg"
    },

    {
        id: 20,
        texts: ["As you run backwards, suddenly you hear sirens and gunshots. It was the police. They shot Oliver's mother and saved your life. Police Officer: 'On behalf of all the officers here, we would like to apologize for accusing you of the murder and applaud you. You really are a hero and solved this case. Thank you, [playerName] and Oliver.'"],
        choices: [
            { text: "Continue", nextId: 21},
        ],
        image: "img/happy-ending.jpeg",
        Sound: "sounds/policesiren.wav"
    },

    {
        id: 21,
        texts: ["Congratulations, [playerName], you achieved the happy ending."],
        choices: [
            { text: "Replay", nextId: 1},
        ],
        Sound: "sounds/celebration.mp3"
    },

    /// alternative endings
///alternative endings

{
    id: 63,
    texts: ["As you shoot her you suddenly hear sirens.. it was the police.. Police Officer: On behalf of all the officers here, we would like to apologize for accusing you of the murder, and applaud you, you really a hero and solved this case, Thank you [playerName] and Oliver."],
    choices: [
        { text: "continue", nextId: 21},
    ],
    image: "img/happy-ending.jpeg",
    Sound: "sounds/policesiren.wav"
},

{
    id: 543,
    texts: ["You tried but the baseball bat simply wasnt enough... GAME OVER"],
    choices: [
        { text: "Restart", nextId: 1},
    ], 
},

{
    id: 544,
    texts: ["You charge her machete vs machete, You felt your machete pierce her and realize you did it.. then you look down.. you were stabbed yourself.. you may have died but it wasnt in vain.. for you stopped her murder spree and died as a hero of the town with your own statue to never be forgotten."],
    choices: [
        { text: "Continue", nextId: 545},
    ], 
    image: "img/statue.png"
},

{
    id: 545,
    texts: ["Congratulations, even if it wasn't the happy ending, You achieved a heroic ending!"],
    choices: [
        { text: "Replay", nextId: 1},
    ], 
},

///alternative endings end

// happy ending end

/// oliver dead - Sad ending

{
    id: 112,
    texts: ["The next morning you wake up to hearing your phone go off.. the police is calling, curious why, you answer.. it was Oliver... him and his whole family except his mother is dead... "],
    choices: [
        { text: "Head over to their house to console the mother.", nextId: 113 },
    ],
    Sound: "sounds/phone-rining.mp3"
},

{
    id: 113,
    texts: ["You arrive at Oliver's house, and are greeted by his mother. [playerName]: Don't worry, I'll find out who is behind this and report them to the police.. and it may sound stupid, but I believe they were behind the murder of Niels too."],
    choices: [
        { text: "Continue", nextId: 114},
    ],
    image: "img/oliver-house.jpeg"
},

{
    id: 114,
    texts: ["*Oliver's mother suddenly seems nervous and her face of sadness turned into a face of fear* Oliver's Mother: uhm.. I don't think that's smart.. what if something happens to you too.. ([playerName] realizes something's wrong.. her whole mood shifted..) "],
    choices: [
        { text: "Confront her and ask why her mood switched and she seems so against it..", nextId: 203},
        { text: "Act like nothing and head home to make new plans..", nextId: 115},
    ],
},

// death
{
    id: 203,
    texts: ["Oliver's Mother: You should've just kept to yourself... GAME OVER"],
    choices: [
        { text: "restart", nextId: 1},
    ],
},

//death end

{
    id: 115,
    texts: ["You arrive outside your house.. but something's wrong.. there are plenty of police cars outside and suddenly you hear a shout.. A police officer shouts at you asking, what you were doing at the shed yesterday.."],
    choices: [
        { text: "Explain why you were there", nextId: 304},
        { text: "Start running towards the forest", nextId: 116},
    ],
    image: "img/policehouse.jpeg",
    Sound: "sounds/policesiren.wav"
},

//Game over
{
    id: 304,
    texts: ["The police linked you to the murder of Niels due to your appearance at the place he was murdered, then suddenly your other best friend you were with died the next day.. you were put in prison with a life sentence"],
    choices: [
        { text: "continue", nextId: 204},
    ],
    image: "img/prisonhouse.jpeg"
},

{
    id: 204,
    texts: ["GAME OVER"],
    choices: [
        { text: "restart", nextId: 1},
    ],
},

//Game over end 

{
    id: 116,
    texts: ["You got to the forest and got some distance from them, but they are still on your tail.. Where do you want to head to now?"],
    choices: [
        { text: "left", nextId: 117},
        { text: "right", nextId: 117},
        { text: "follow the road straight", nextId: 118},
    ], 
    image: "img/runforest.jpeg"
},

{
    id: 117,
    texts: ["It's a dead end.."],
    choices: [
        { text: "head back", nextId: 116},
    ],
    image: "img/deadend.jpeg"
},

{
    id: 118,
    texts: ["You arrive back at the shed.. but something is different... Oliver's mother is there.. and she is holding a machete with dried blood on it.. what now?"],
    choices: [
        { text: "Ask her why she did it..", nextId: 120},
        { text: "Grab a stone and charge towards her", nextId: 305},
    ],
    image: "img/olivermommachete.jpeg"
},

///game over

{
    id: 305,
    texts: ["You charge towards her with a stone.. but ultimately the machete wins."],
    choices: [
        { text: "continue", nextId: 205},
    ],
},

{
    id: 205,
    texts: ["GAME OVER"],
    choices: [
        { text: "restart", nextId: 1},
    ],
},

/// game over end 

{
    id: 120,
    texts: ["[playerName]: Why would you do this... you murdered your own son... his friend.. your husband... WHY?. Oliver's Mother: SHUT UP STOP PUTTING YOUR NOSE INTO STUFF THAT HAS NOTHING TO DO WITH YOU, THIS IS WHY ILL HAVE TO KILL YOU... *She comes charging towards you*"],
    choices: [
        { text: "Run backwards", nextId: 121},
        { text: "Grab a stone and charge towards her", nextId: 305},
    ],
},

{
    id: 121,
    texts: ["As you run backwards, suddenly you hear sirens and gun shots... it was the police... they shot Oliver's Mother and saved your life... Police Officer: On behalf of all the officers here, we would like to apologize for accusing you of the murder, and applaud you, you really a hero and solved this case, Thank you [playerName]."],
    choices: [
        { text: "Continue", nextId: 333},
    ],
    image: "img/happy-ending.jpeg",
    Sound: "sounds/policesiren.wav"
},

{
    id: 333,
    texts: ["You're glad you busted the murder... but your family was shocked and moved away from the town again.. and yet again.. you're all alone, and think to yourself.. was this all even worth it?.."],
    choices: [
        { text: "Continue", nextId: 334},
    ],
},

{
    id: 334,
    texts: ["Sad ending..."],
    choices: [
        { text: "Replay", nextId: 1},
    ],
},

//oliver sad ending end

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