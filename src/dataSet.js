const cards = [
    {
        "question": "What string prototype would you use to find the first character in this string",
        "exampleString": "let lsp = \"Lumpy Space Princes\"",
        "answer": "lsp.charAt(0)",
        "category": "easy",
        "id": 1
    },
    {
        "question": "What string prototype would you use to see if \"glob\" is used in this string?",
        "exampleString": "let  finn = \"Oh my glob!\"",
        "answer": "finn.includes(\"glob\")",
        "category": "easy",
        "id": 2
    },
    {
        "question": "What string prototype would you use to find the first occurrence of \"Finn\"?",
        "exampleString": "let bemo = \" Who wants Finn cakes?\" ",
        "answer": "bemo.indexOf(\"Finn\")",
        "category": "easy",
        "id": 3
    },
    {
        "question": "What string prototype would you use to stop Ice King from yelling?",
        "exampleString": "let iceKing = \"I JUST WANTED TO BE LOVED!\"",
        "answer": "iceKing.toLowerCase()",
        "category": "easy",
        "id": 4
    },
    {
        "question": "How can we turn what Jake is saying into one variable?",
        "exampleString": "let jake = \"Dude, suckin at something is the first step\"  let theDog = \"to being sorta good at something\"",
        "answer": "jake.concat(theDog)",
        "category": "easy",
        "id": 5
    },
    {
        "question": "Make Bemo repeat himself three times",
        "exampleString": "let bemoChop = \"BMO Chop! If this were a real attack, you'd be dead.\"",
        "answer": "bemoChop.repeat(3)",
        "category": "easy",
        "id": 6
    },
    {
        "question": "How would you split each word into its own string?",
        "exampleString": "let bemo = \"Yes, Finn. It goes in my butt.\"",
        "answer": "bemo.split(\" \")",
        "category": "easy",
        "id": 7
    },
    {
        "question": "What does the string prototype .split return?",
        "answer": "an array",
        "category": "easy",
        "id": 8
    },
    {
        "question": "How would you determine how long this string is?",
        "exampleString": "let finn = \"Jake, it's my special occasion phone! Someone's calling me to tell me about a special occasion.\"",
        "answer": "finn.length",
        "category": "easy",
        "id": 9
    },
    {
        "question": "How would you get rid of all of those extra spaces?",
        "exampleString": "let time = \"      Dude, I found out my human dad is still alive.              \" ",
        "answer": "time.trim()",
        "category": "easy",
        "id": 10
    },
    {
        "question": "How would you make a new string that says \"Finn the Human\" from the provided string?",
        "exampleString": "let title = \"Jake the dog and Finn the Human\"",
        "answer": "title.slice(17)",
        "category": "medium",
        "id": 11
    },
    {
        "question": "What would this return?",
        "exampleString": "let title = \"Dude, what the bjork?\" title.charAt(5)",
        "answer": ",",
        "category": "medium",
        "id": 12
    },
    {
        "question": "Using one line and one type of string prototype, use prototypes to return the string P.B",
        "exampleString": "let princess = \"Princess bubblegum\"",
        "answer": "(princess[0] + \".\" + princess[9]).toUpperCase();",
        "category": "hard",
        "id": 13
    },
    {
        "question": "What would be returned from this statement?",
        "exampleString": "let jake = \"I love food more than I love people\" jake.includes(\"more\")",
        "answer": "true",
        "category": "easy",
        "id": 14
    },
    {
        "question": "What would be returned from this statement?",
        "exampleString": " let jake = \"Bro, you gotta let things take their natural path \" jake.startsWith(\"Bro, yo\")",
        "answer": "true",
        "category": "medium",
        "id": 15
    },
    {
        "question": "What is returned from this statement?",
        "exampleString": "let bemo = \"Sometimes life is scary and dark.\"; bemo.length",
        "answer": "33",
        "category": "medium",
        "id": 16
    },
    {
        "question": "What is returned from this statement?",
        "exampleString": "let jake = \"To live life, you need problems. If you get everything you want the minute you want it, then what\’s the point of livin\’ ? \"; jake.toUpperCase() ",
        "answer": "TO LIVE LIFE, YOU NEED PROBLEMS. IF YOU GET EVERYTHING YOU WANT THE MINUTE YOU WANT IT, THEN WHAT\'S THE POINT OF LIVIN\'?\"",
        "category": "medium",
        "id": 17
    },
    {
        "question": "How would you make this one variable?",
        "exampleString": "let jake = \" I say 'creepy' is just another label we use to distance ourselves from stuff we don\'t understand.\" let theDog= \"Or that it reminds us of something in ourselves that we're not comfortable with. It just ain't a real thing, ya know? Unless you choose to believe it\"",
        "answer": "jake.concat(theDog)",
        "category": "medium",
        "id": 18
    },
    {
        "question": "How would you make this one variable and add an exclamation point at the end of the variable king?",
        "exampleString": "let king = \"You don\'t understand \" let ice = \"If you were me you\'d do the things I\'ve done.\"",
        "answer": "king.concat(\"!\", ice)",
        "category": "hard",
        "id": 19
    },
    {
        "question": "Return the third letter in the string capitalized",
        "exampleString": "let vampire = \"Marceline the Vampire Queen\"",
        "answer": "vampire.charAt(2).toUpperCase();",
        "category": "hard",
        "id": 20
    },
    {
        "question": "What will be returned after this statement?",
        "exampleString": "let finn = \" People get built different. We don't need to figure it out, we just need to respect it.\" finn.endsWith(\"o respect it\")",
        "answer": "true",
        "category": "medium",
        "id": 21
    },
    {
        "question": "What will be returned after this statement?",
        "exampleString": "let jake = \"You guys are so cute, I could just maul you to death.\" jake.indexOf(\"cute\")",
        "answer": "16",
        "category": "medium",
        "id": 22
    },
    {
        "question": "Return the 10th character in this string",
        "exampleString": "let marcie = \"Sucking at something is the first step towards being sorta good at something\" ",
        "answer": "marcie.charAt(12)",
        "category": "medium",
        "id": 23
    },
    {
        "question": "What will be returned after this statement?",
        "exampleString": "let marcie = \"Sucking at something is the first step towards being sorta good at something\"; marcie.charAt(12)",
        "answer": " ",
        "category": "hard",
        "id": 24
    },
    {
        "question": "What datatype does the string prototype .startsWith() return?",
        "answer": "boolean",
        "category": "easy",
        "id": 25
    },
    {
        "question": "What datatype does the string prototype .indexOf() return?",
        "answer": "boolean",
        "category": "easy",
        "id": 26
    },
    {
        "question": "What datatype does the string prototype .endsWith() return?",
        "answer": "boolean",
        "category": "easy",
        "id": 27
    },
    {
        "question": "What datatype does the string prototype .charAt() return?",
        "answer": "string",
        "category": "easy",
        "id": 28
    },
    {
        "question": "What datatype does the string prototype .substring() return?",
        "answer": "string",
        "category": "easy",
        "id": 29
    },
    {
        "question": "What datatype does the string prototype .slice() return?",
        "answer": "string",
        "category": "easy",
        "id": 30
    },
    {
        "question": "What datatype does the string prototype .includes() return?",
        "answer": "boolean",
        "category": "easy",
        "id": 31
    }
]

module.exports= {
    cards
} 