const cardArray = [
    {
        name:"fries",
        img:"Images/fries.png"
    },
    {
        name:"cheeseburger",
        img:"Images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img:"Images/hotdog.png"
    },
    {
        name:"ice-cream",
        img:"Images/ice-cream.png"
    },
    {
        name:"milkshake",
        img:"Images/milkshake.png"
    },
    {
        name:"pizza",
        img:"Images/pizza.png"
    },
    {
        name:"fries",
        img:"Images/fries.png"
    },
    {
        name:"cheeseburger",
        img:"Images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img:"Images/hotdog.png"
    },
    {
        name:"ice-cream",
        img:"Images/ice-cream.png"
    },
    {
        name:"milkshake",
        img:"Images/milkshake.png"
    },
    {
        name:"pizza",
        img:"Images/pizza.png"
    },
]

cardArray.sort(()=> .5 -Math.random())
const gridDisplay =document.querySelector("#grid")
const result =document.querySelector("#result")
const totalPairs = cardArray.length/2
let cardsChoosen=[]
let cardsChoosenId=[]
const cardsWon=[]

function createBoard(){

    for(let i=0 ; i<cardArray.length ; i++){
    const card = document.createElement("img")
    card.setAttribute("src", "Images/blank.png")
    card.setAttribute("data-id", i)
   
    gridDisplay.append(card)
    card.addEventListener("click" , flipCard)


}

}

createBoard()

function checkMatch(){
 const cards = document.querySelectorAll("#grid img")
  
 const option1= cardsChoosenId[0]
 const option2 = cardsChoosenId[1]
   if(cardsChoosen[0] == cardsChoosen[1]){
    alert("You found a match")
    cards[option1].setAttribute("src", "Images/white.png")
    cards[option2].setAttribute("src","Images/white.png")
    cards[option1].removeEventListener("click", flipCard)
    cards[option2].removeEventListener("click", flipCard)
    cardsWon.push(cardsChoosen)
   }else{
    cards[option1].setAttribute("src", "Images/blank.png")
    cards[option2].setAttribute("src", "Images/blank.png")
    alert("Sorry try again")
   }
   result.innerHTML = cardsWon.length +" "+  " of /" + totalPairs
   cardsChoosen=[]
   cardsChoosenId=[]

   if(cardsWon.length == cardArray.length/2){
    result.innerHTML ="Congratulation you found them all"
   }
}


function flipCard (){
    const cardId= this.getAttribute("data-id")
    console.log(cardId)
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenId.push(cardId)
    console.log(cardsChoosenId)
    this.setAttribute("src", cardArray[cardId].img)
    if(cardsChoosen.length === 2){
       
        setTimeout(checkMatch, 400)
    }
}






