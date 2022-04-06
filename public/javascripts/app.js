const newTicketButton = document.querySelector('#newTicketButton')
const newTicketWindow = document.querySelector('.newTicketsDiv')
const newDestButton = document.querySelector('#newDestButton')
const newDestWindow = document.querySelector('.addDestinationsDiv')

newDestButton.addEventListener('click', handleNewDestClick)
newTicketButton.addEventListener('click', handleNewTicketClick)

function handleNewTicketClick(e){
    newTicketWindow.classList.toggle("active")}

function handleNewDestClick(e){
    newDestWindow.classList.toggle("active")}