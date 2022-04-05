const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    create,

}

function create(req,res){
    // console.log(req.body);
    // console.log(req.params.id);
    Ticket.create(req.body, function(err,ticket){
        if (err) return handleError(err);
        console.log(ticket)
        res.redirect(`/flights/${req.params.id}`)
    })
    // Ticket.create(req.body, function(err, ticket))
    
}


function handleError(err) {
        console.log(err, ' this here be the err yer lookin for')
}