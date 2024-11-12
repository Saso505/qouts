myButton=document.getElementById('mybutton');
console.log(myButton);
myQutes=document.getElementById('quote');
console.log(myQutes);

myauthor=document.getElementById('author');
console.log(myauthor);
//array have qutes
const qutes = [
{
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
},
{

    quote:  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author:   " Ralph Waldo Emerson "
},
{
    author: "Epictetus",
    quote: "It's not what happens to you, but how you react to it that matters.",
},
{
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
},
{ author: "Frank Sinatra", quote: "The best revenge is massive success." },

{
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
},
{
    author: "Nelson Mandela",
    quote:  "Resentment is like drinking poison and waiting for your enemies to die.",
},
];

// Function to generate random quote


    
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() *qutes.length)
    console.log(randomIndex);
return randomIndex
    

}
myButton.addEventListener( 'click',function (e) {
 // Display the random quote and author
 e.preventDefault();  
 const randomIndex = getRandomQuote();
 myQutes.innerText = `“ ${qutes[randomIndex].quote} ”`;
 myauthor.innerText =`-- ${ qutes[randomIndex].author} `;
 
 myButton.style.backgroundColor ='white'; 
})


