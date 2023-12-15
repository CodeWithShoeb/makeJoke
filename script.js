//1 way:-
let jokeE=document.getElementById('joke');
let get_joke=document.getElementById('get_joke');
//add event listener to the button.
get_joke.addEventListener("click",generateJoke)//For clicking on button asevent happens

generateJoke();

async function generateJoke(){
    //Cal the Icanhaz API
     
     const jokeRes=await fetch('https://icanhazdadjoke.com/',
     {
        headers:{
            accept:'application/json'
        }
     })

     const joke= await jokeRes.json();

      console.log(joke)

    //Set the random joke.
   jokeE.innerHTML=joke.joke;
}














//2 way:-
// let myjokes=[
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 24,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Misc",
//         "type": "single",
//         "joke": "My husband and I were happy for 20 years. And then we met.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "safe": true,
//         "id": 273,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 180,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 34,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Today I learned that changing random stuff until your program works is \"hacky\" and a \"bad coding practice\" but if you do it fast enough it's \"Machine Learning\" and pays 4x your current salary.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 33,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Your mama's so FAT she can't save files bigger than 4GB.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": true
//         },
//         "id": 9,
//         "safe": false,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 41,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Misc",
//         "type": "single",
//         "joke": "Yo mama is so old, she knew Burger King while he was still a prince.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "safe": true,
//         "id": 306,
//         "lang": "en"
//     },
//     {
//         "category": "Dark",
//         "type": "single",
//         "joke": "I don't know where I stand on abortion. I like killing babies, but I don't like giving women a choice.",
//         "flags": {
//             "nsfw": true,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": true,
//             "explicit": true
//         },
//         "id": 228,
//         "safe": false,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 12,
//         "safe": true,
//         "lang": "en"
//     }
// ]



// let index=Math.floor(Math.random()*myjokes.length-1);
// console.log(index)
// joke.innerHTML=myjokes[index].joke
