const songs = [
    {
        title: "common sense",
        album: "common sense",
        releaseDate: "2020-04-03",
        rating: 1,
        favourite: false,
        explanation: "it's cute but boring...",
        tags: [
            "love",
            "slow"
        ]
    },
    {
        title: "anyone else",
        album: "anyone else",
        releaseDate: "2020-07-16",
        rating: 2,
        favourite: false,
        explanation: "really cute but not much going for it",
        tags: [
            "love",
            "pop"
        ]
    },
    {
        title: "sorry",
        album: "joshua bassett",
        releaseDate: "2021-03-12",
        rating: 4,
        favourite: false,
        explanation: "my og favourite unreleased, but feels like it's missing something",
        tags: [
            "runner-up",
            "love"
        ]
    },
    {
        title: "do it all again",
        album: "joshua bassett",
        releaseDate: "2021-03-12",
        rating: 2,
        favourite: false,
        explanation: "cute but boring",
        tags: [
            "love",
            "slow"
        ]
    },
    {
        title: "lie lie lie",
        album: "joshua bassett",
        releaseDate: "2021-03-12",
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
        title: "only a matter of time",
        album: "joshua bassett",
        releaseDate: "2021-03-12",
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
        title: "telling myself",
        album: "joshua bassett",
        releaseDate: "2021-03-12",
        rating: 5,
        favourite: true,
        explanation: "MY FIRST TRUE JOSH HYPERFIXATION SONG. THE POST CHORUS GUITAR ITCHES MY BRAIN SO GOOD",
        tags: [
            "tension",
            "love"
        ]
    },
    {
        title: "heaven is you",
        album: "joshua bassett",
        releaseDate: "2021-03-12",
        rating: 3,
        favourite: false,
        explanation: "so cute but doesn't do much for me (second verse run though 🤌🏾",
        tags: [
            "love",
            "sweet"
        ]
    },
    {
        title: "feel something",
        album: "feel something",
        releaseDate: "2021-05-07",
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
        title: "crisis",
        album: "crisis/secret/set me free",
        releaseDate: "2021-12-03",
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
        title: "secret",
        album: "crisis/secret/set me free",
        releaseDate: "2021-12-03",
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
        title: "set me free",
        album: "crisis/secret/set me free",
        releaseDate: "2021-12-03",
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
        title: "doppelgänger",
        album: "doppelgänger",
        releaseDate: "2022-02-25",
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
        title: "sad songs in a hotel room",
        album: "sad songs in a hotel room",
        releaseDate: "2022-09-23",
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
        title: "la",
        album: "sad songs in a hotel room",
        releaseDate: "2022-09-23",
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
        title: "used to it",
        album: "sad songs in a hotel room",
        releaseDate: "2022-09-23",
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
        title: "smoke slow",
        album: "sad songs in a hotel room",
        releaseDate: "2022-09-23",
        rating: 5,
        favourite: true,
        explanation: "THE METAPHORS? THE BRIDGE? EVERYTHING? ITS PERFECTION ITSELF",
        tags: [
            "longing",
            "love"
        ]
    },
    {
        title: "lifeline",
        album: "sad songs in a hotel room",
        releaseDate: "2022-09-23",
        rating: 2,
        favourite: false,
        explanation: "BEAUTIFUL SONG BUT I CAN'T GET INTO SLOW DEPRESSING SONGS",
        tags: [
            "depression",
            "trauma"
        ]
    },
    {
        title: "all in due time",
        album: "sad songs in a hotel room",
        releaseDate: "2022-09-23",
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
        title: "would you love me now?",
        album: "would you love me now?",
        releaseDate: "2022-10-06",
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
        title: "she said he said she said",
        album: "she said he said she said",
        releaseDate: "2022-10-13",
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
        title: "i'm sorry",
        album: "i'm sorry",
        releaseDate: "2022-10-20",
        rating: 1,
        favourite: false,
        explanation: "beautiful, but not for me",
        tags: [
            "heartbreak",
            "slow"
        ]
    },
    {
        title: "different",
        album: "different",
        releaseDate: "2022-10-27",
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
        title: "just love",
        album: "just love",
        releaseDate: "2023-09-22",
        rating: 2,
        favourite: false,
        explanation: "such a beautiful song about God's love, but not engaging for me",
        tags: [
            "love",
            "hope"
        ]
    },
    {
        title: "biting my tongue",
        album: "the golden years",
        releaseDate: "2024-07-26",
        rating: 3,
        favourite: false,
        explanation: "such a deeply personal song, and it shows",
        tags: [
            "heartbreak",
            "cathartic"
        ]
    },
    {
        title: "the golden years",
        album: "the golden years",
        releaseDate: "2024-07-26",
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
        title: "dancing with tears in my eyes",
        album: "the golden years",
        releaseDate: "2024-07-26",
        rating: 4,
        favourite: true,
        explanation: "DANCING THROUGH THE PAIN also joshua held my hand during this so we have a connection",
        tags: [
            "heartbreak",
            "cathartic"
        ]
    },
    {
        title: "don't let me down",
        album: "the golden years",
        releaseDate: "2024-07-26",
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
        title: "cherry blossom",
        album: "the golden years",
        releaseDate: "2024-07-26",
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
        title: "circles",
        album: "the golden years",
        releaseDate: "2024-07-26",
        rating: 5,
        favourite: true,
        explanation: "such a vibe and an immediate favourite",
        tags: [
            "heartbreak",
            "angst",
        ]
    },
    {
        title: "wildfire",
        album: "the golden years",
        releaseDate: "2024-07-26",
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
        title: "little rita",
        album: "the golden years",
        releaseDate: "2024-07-26",
        rating: 2,
        favourite: false,
        explanation: "so so sweet, but not to my liking",
        tags: [
            "hope"
        ]
    },
    {
        title: "would ya tell me?",
        album: "the golden years",
        releaseDate: "2024-07-26",
        rating: 4,
        favourite: false,
        explanation: "such a fun dancing song",
        tags: [
            "fun",
            "love",
            "runnerup"
        ]
    },
    {
        title: "mirror",
        album: "the golden years",
        releaseDate: "2024-07-26",
        rating: 5,
        favourite: false,
        explanation: "so heartbreaking but so relatable",
        tags: [
            "trauma",
            "cathartic",
            "depression",
            "runnerup"
        ]
    },
    {
        title: "look how far you've come",
        album: "the golden years",
        releaseDate: "2024-07-26",
        rating: 3,
        favourite: false,
        explanation: "made me sob the first time i listened",
        tags: [
            "hope",
            "cathartic"
        ]
    },
    {
        title: "blue",
        album: "blue",
        releaseDate: "2025-09-30",
        rating: 3,
        favourite: false,
        explanation: "so sweet and gentle",
        tags: [
            "love",
            "hope"
        ]
    },
    {
        title: "clouds",
        album: "clouds",
        releaseDate: "2026-07-17",
        rating: 2,
        favourite: false,
        explanation: "such a beautiful song about running until your problems catch up",
        tags: [
            "hope",
            "depression"
        ]
    },
    {
        title: "hold me",
        album: "hold me",
        releaseDate: "2026-07-24",
        rating: 3,
        favourite: false,
        explanation: "a heartbreaking song about dealing with mental health struggles with someone else in a relationship",
        tags: [
            "heartbreak",
            "depression"
        ]
    }
];