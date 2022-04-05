const newTicketButton = document.querySelector('#newTicketButton')
const newTicketWindow = document.querySelector('.newTicketsDiv')

newTicketButton.addEventListener('click', handleNewTicketClick)

function handleNewTicketClick(e){
    newTicketWindow.classList.toggle("active")}