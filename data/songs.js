const songs = [
    {
        id: 1,
        title: "common sense",
        album: "common sense",
        alias: "cs",
        track: 1,
        releaseDate: "2020-04-03",
        duration: "2:47",
        rating: 1,
        favourite: false,
        explanation: "it's cute but boring...",
        tags: [
            "love",
            "slow"
        ]
    },
    {
        id: 2,
        title: "anyone else",
        album: "anyone else",
        alias: "ae",
        track: 1,
        releaseDate: "2020-07-16",
        duration: "3:20",
        rating: 2,
        favourite: false,
        explanation: "really cute but not much going for it",
        tags: [
            "love",
            "pop"
        ]
    },
    {
        id: 3,
        title: "sorry",
        album: "joshua bassett",
        alias: "",
        track: 1,
        releaseDate: "2021-03-12",
        duration: "3:23",
        rating: 4,
        favourite: false,
        explanation: "my og favourite unreleased, but feels like it's missing something",
        tags: [
            "runner-up",
            "love"
        ]
    },
    {
        id: 4,
        title: "do it all again",
        album: "joshua bassett",
        alias: "diaa",
        track: 2,
        releaseDate: "2021-03-12",
        duration: "3:31",
        rating: 2,
        favourite: false,
        explanation: "cute but boring",
        tags: [
            "love",
            "slow"
        ]
    },
    {
        id: 5,
        title: "lie lie lie",
        album: "joshua bassett",
        alias: "li3",
        track: 3,
        releaseDate: "2021-03-12",
        duration: "2:57",
        rating: 4,
        favourite: false,
        explanation: "#hot but he has better",
        tags: [
            "angry",
            "angst",
            "betrayal",
            "runner-up"
        ]
    },
    {
        id: 6,
        title: "only a matter of time",
        album: "joshua bassett",
        alias: "oamot",
        track: 4,
        releaseDate: "2021-03-12",
        duration: "3:14",
        rating: 4,
        favourite: false,
        explanation: "it's such a good song but idk not my fav. the bridge is fantastic though",
        tags: [
            "angst",
            "betrayal",
            "runner-up"
        ]
    },
    {
        id: 7,
        title: "telling myself",
        album: "joshua bassett",
        alias: "tm",
        track: 5,
        releaseDate: "2021-03-12",
        duration: "2:49",
        rating: 5,
        favourite: true,
        explanation: "MY FIRST TRUE JOSH HYPERFIXATION SONG. THE POST CHORUS GUITAR ITCHES MY BRAIN SO GOOD",
        tags: [
            "tension",
            "love"
        ]
    },
    {
        id: 8,
        title: "heaven is you",
        album: "joshua bassett",
        alias: "hiy",
        track: 6,
        releaseDate: "2021-03-12",
        duration: "3:43",
        rating: 3,
        favourite: false,
        explanation: "so cute but doesn't do much for me (second verse run though 🤌🏾",
        tags: [
            "love",
            "sweet"
        ]
    },
    {
        id: 9,
        title: "feel something",
        album: "feel something",
        alias: "fs",
        track: 1,
        releaseDate: "2021-05-07",
        duration: "2:44",
        rating: 3,
        favourite: false,
        explanation: "i want to love it, but it kind of got old for me...",
        tags: [
            "fun",
            "pop",
            "party"
        ]
    },
    {
        id: 10,
        title: "crisis",
        album: "crisis/secret/set me free",
        alias: "",
        track: 1,
        releaseDate: "2021-12-03",
        duration: "3:09",
        rating: 2,
        favourite: false,
        explanation: "...let me not say anything, josh is gonna find me and hunt me down",
        tags: [
            "heartbreak",
            "depression",
            "trauma"
        ]
    },
    {
        id: 11,
        title: "secret",
        album: "crisis/secret/set me free",
        alias: "",
        track: 2,
        releaseDate: "2021-12-03",
        duration: "3:12",
        rating: 5,
        favourite: true,
        explanation: "BEST SONG EVER WTF EVERYTHING IS PERFECT I JUST NEED A ROCK VERSION",
        tags: [
            "angst",
            "betrayal",
            "soty"
        ]
    },
    {
        id: 12,
        title: "set me free",
        album: "crisis/secret/set me free",
        alias: "smf",
        track: 3,
        releaseDate: "2021-12-03",
        duration: "4:03",
        rating: 5,
        favourite: false,
        explanation: "SEEEEEEET MEEEEEE FREEEEEEEEEE",
        tags: [
            "trauma",
            "hope",
            "cathartic",
            "runnerup"
        ]
    },
    {
        id: 13,
        title: "doppelgänger",
        album: "doppelgänger",
        alias: "doppelganger",
        track: 1,
        releaseDate: "2022-02-25",
        duration: "3:15",
        rating: 2,
        favourite: false,
        explanation: "cute, but doesn't do much for me",
        tags: [
            "hope",
            "love",
            "heartbreak"
        ]
    },
    {
        id: 14,
        title: "sad songs in a hotel room",
        album: "sad songs in a hotel room",
        alias: "ssiahr",
        track: 1,
        releaseDate: "2022-09-23",
        duration: "3:11",
        rating: 4,
        favourite: false,
        explanation: "justice for sad songs tbh, your dad should treat you better",
        tags: [
            "heartbreak",
            "longing",
            "runnerup"
        ]
    },
    {
        id: 15,
        title: "la",
        album: "sad songs in a hotel room",
        alias: "",
        track: 2,
        releaseDate: "2022-09-23",
        duration: "3:11",
        rating: 1,
        favourite: false,
        explanation: "IT'S GOOD IT'S JUST SLOW I DON'T LIKE IT",
        tags: [
            "slow",
            "depression",
            "betrayal"
        ]
    },
    {
        id: 16,
        title: "used to it",
        album: "sad songs in a hotel room",
        alias: "uti",
        track: 3,
        releaseDate: "2022-09-23",
        duration: "3:15",
        rating: 4,
        favourite: true,
        explanation: "just a straight up masterpiece",
        tags: [
            "betrayal",
            "heartbreak",
            "cathartic"
        ]
    },
    {
        id: 17,
        title: "smoke slow",
        album: "sad songs in a hotel room",
        alias: "ss",
        track: 4,
        releaseDate: "2022-09-23",
        duration: "2:44",
        rating: 5,
        favourite: true,
        explanation: "THE METAPHORS? THE BRIDGE? EVERYTHING? ITS PERFECTION ITSELF",
        tags: [
            "longing",
            "love"
        ]
    },
    {
        id: 18,
        title: "lifeline",
        album: "sad songs in a hotel room",
        alias: "",
        track: 5,
        releaseDate: "2022-09-23",
        duration: "3:49",
        rating: 2,
        favourite: false,
        explanation: "BEAUTIFUL SONG BUT I CAN'T GET INTO SLOW DEPRESSING SONGS",
        tags: [
            "depression",
            "trauma"
        ]
    },
    {
        id: 19,
        title: "all in due time",
        album: "sad songs in a hotel room",
        alias: "aidt",
        track: 6,
        releaseDate: "2022-09-23",
        duration: "2:19",
        rating: 3,
        favourite: false,
        explanation: "so much hope for the future, but a slow song so not my favourite",
        tags: [
            "hope",
            "depression",
            "trauma"
        ]
    },
    {
        id: 20,
        title: "would you love me now?",
        album: "would you love me now?",
        alias: "wylmn",
        track: 1,
        releaseDate: "2022-10-06",
        duration: "3:26",
        rating: 2,
        favourite: false,
        explanation: "cute, but not my favourite",
        tags: [
            "love",
            "hope",
            "slow"
        ]
    },
    {
        id: 21,
        title: "she said he said she said",
        album: "she said he said she said",
        alias: "sshsss",
        track: 1,
        releaseDate: "2022-10-13",
        duration: "2:37",
        rating: 4,
        favourite: true,
        explanation: "AND ONE MORE THING ahh bridge",
        tags: [
            "angry",
            "betrayal",
            "cathartic"
        ]
    },
    {
        id: 22,
        title: "i'm sorry",
        album: "i'm sorry",
        alias: "is",
        track: 1,
        releaseDate: "2022-10-20",
        duration: "3:45",
        rating: 1,
        favourite: false,
        explanation: "beautiful, but not for me",
        tags: [
            "heartbreak",
            "slow"
        ]
    },
    {
        id: 23,
        title: "different",
        album: "different",
        alias: "",
        track: 1,
        releaseDate: "2022-10-27",
        duration: "3:14",
        rating: 3,
        favourite: false,
        explanation: "so beautiful",
        tags: [
            "love",
            "hope",
            "slow"
        ]
    },
    {
        id: 24,
        title: "just love",
        album: "just love",
        alias: "jl",
        track: 1,
        releaseDate: "2023-09-22",
        duration: "3:16",
        rating: 2,
        favourite: false,
        explanation: "such a beautiful song about God's love, but not engaging for me",
        tags: [
            "love",
            "hope"
        ]
    },
    {
        id: 25,
        title: "biting my tongue",
        album: "the golden years",
        alias: "bmt",
        track: 1,
        releaseDate: "2024-07-26",
        duration: "3:33",
        rating: 3,
        favourite: false,
        explanation: "such a deeply personal song, and it shows",
        tags: [
            "heartbreak",
            "cathartic"
        ]
    },
    {
        id: 26,
        title: "the golden years",
        album: "the golden years",
        alias: "tgy",
        track: 2,
        releaseDate: "2024-07-26",
        duration: "3:35",
        rating: 5,
        favourite: true,
        explanation: "there is something inexplicably catching about it, and it's so beautifully nostalgic",
        tags: [
            "nostalgia",
            "love",
            "longing"
        ]
    },
    {
        id: 27,
        title: "dancing with tears in my eyes",
        album: "the golden years",
        alias: "dwtime",
        track: 3,
        releaseDate: "2024-07-26",
        duration: "3:39",
        rating: 4,
        favourite: true,
        explanation: "DANCING THROUGH THE PAIN also joshua held my hand during this so we have a connection",
        tags: [
            "heartbreak",
            "cathartic"
        ]
    },
    {
        id: 28,
        title: "don't let me down",
        album: "the golden years",
        alias: "dlmd",
        track: 4,
        releaseDate: "2024-07-26",
        duration: "3:47",
        rating: 3,
        favourite: false,
        explanation: "love jenna raine, and their voices together are beautiful",
        tags: [
            "love",
            "hope",
            "heartbreak"
        ]
    },
    {
        id: 29,
        title: "cherry blossom",
        album: "the golden years",
        alias: "cb",
        track: 5,
        releaseDate: "2024-07-26",
        duration: "2:35",
        rating: 4,
        favourite: false,
        explanation: "so fun and encapsulating of young love",
        tags: [
            "love",
            "fun",
            "runnerup"
        ]
    },
    {
        id: 30,
        title: "circles",
        album: "the golden years",
        alias: "",
        track: 6,
        releaseDate: "2024-07-26",
        duration: "3:59",
        rating: 5,
        favourite: true,
        explanation: "such a vibe and an immediate favourite",
        tags: [
            "heartbreak",
            "angst",
        ]
    },
    {
        id: 31,
        title: "wildfire",
        album: "the golden years",
        alias: "",
        track: 7,
        releaseDate: "2024-07-26",
        duration: "3:52",
        rating: 5,
        favourite: true,
        explanation: "OH MY GOSH? THERE AREN'T WORDS SUFFICIENT TO DESCRIBE HOW GORGEOUS THIS IS? AND THE SMOKE SLOW CALLBACKS?",
        tags: [
            "heartbreak",
            "longing",
            "angst"
        ]
    },
    {
        id: 32,
        title: "little rita",
        album: "the golden years",
        alias: "lr",
        track: 8,
        releaseDate: "2024-07-26",
        duration: "3:45",
        rating: 2,
        favourite: false,
        explanation: "so so sweet, but not to my liking",
        tags: [
            "hope"
        ]
    },
    {
        id: 33,
        title: "would ya tell me?",
        album: "the golden years",
        alias: "wytm",
        track: 9,
        releaseDate: "2024-07-26",
        duration: "3:34",
        rating: 4,
        favourite: false,
        explanation: "such a fun dancing song",
        tags: [
            "fun",
            "love",
            "runner-up"
        ]
    },
    {
        id: 34,
        title: "mirror",
        album: "the golden years",
        alias: "",
        track: 10,
        releaseDate: "2024-07-26",
        duration: "4:23",
        rating: 5,
        favourite: false,
        explanation: "so heartbreaking but so relatable",
        tags: [
            "trauma",
            "cathartic",
            "depression",
            "runner-up"
        ]
    },
    {
        id: 35,
        title: "look how far you've come",
        album: "the golden years",
        alias: "lhfyc",
        track: 11,
        releaseDate: "2024-07-26",
        duration: "3:23",
        rating: 3,
        favourite: false,
        explanation: "made me sob the first time i listened",
        tags: [
            "hope",
            "cathartic"
        ]
    },
    {
        id: 36,
        title: "blue",
        album: "easier",
        alias: "",
        track: 1,
        releaseDate: "2026-08-14",
        duration: "4:15",
        rating: 3,
        favourite: false,
        explanation: "so sweet and gentle",
        tags: [
            "love",
            "hope"
        ]
    },
    {
        id: 37,
        title: "dancing on the edge",
        album: "easier",
        alias: "dote",
        track: 2,
        releaseDate: "2026-08-14",
        duration: "4:19",
        rating: 4,
        favourite: false,
        explanation: "jumping headfirst into a relationship, but being scared of falling",
        tags: [
            "love",
            "hope",
            "runner-up"
        ]
    },
    {
        id: 38,
        title: "hold me",
        album: "easier",
        alias: "hm",
        track: 3,
        releaseDate: "2026-08-14",
        duration: "3:31",
        rating: 3,
        favourite: false,
        explanation: "a heartbreaking song about dealing with mental health struggles with someone else in a relationship",
        tags: [
            "heartbreak",
            "depression"
        ]
    },
    {
        id: 39,
        title: "selfish, love",
        album: "easier",
        alias: "selfish love",
        track: 4,
        releaseDate: "2026-08-14",
        duration: "-:--",
        rating: 0,
        favourite: false,
        explanation: "",
        tags: []
    },
    {
        id: 40,
        title: "clouds",
        album: "easier",
        alias: "",
        track: 5,
        releaseDate: "2026-08-14",
        duration: "3:27",
        rating: 2,
        favourite: false,
        explanation: "such a beautiful song about running until your problems catch up",
        tags: [
            "hope",
            "depression"
        ]
    },
    {
        id: 41,
        title: "i still care",
        album: "easier",
        alias: "isc",
        track: 6,
        releaseDate: "2026-08-14",
        duration: "-:--",
        rating: 0,
        favourite: false,
        explanation: "",
        tags: []
    },
    {
        id: 42,
        title: "easier",
        album: "easier",
        alias: "",
        track: 7,
        releaseDate: "2026-08-14",
        duration: "3:55",
        rating: 3,
        favourite: false,
        explanation: "knowing you're not stable enough for a relationship, but it still hurts to see them moving on",
        tags: [
            "heartbreak",
            "depression"
        ]
    },
    {
        id: 43,
        title: "ruined",
        album: "easier",
        alias: "",
        track: 8,
        releaseDate: "2026-08-14",
        duration: "-:--",
        rating: 0,
        favourite: false,
        explanation: "",
        tags: []
    },
    {
        id: 44,
        title: "no-one loves like you",
        album: "easier",
        alias: "nlly",
        track: 9,
        releaseDate: "2026-08-14",
        duration: "-:--",
        rating: 0,
        favourite: false,
        explanation: "",
        tags: []
    }
];