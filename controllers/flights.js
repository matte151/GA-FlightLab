const Flight = require('../models/flight')

module.exports = {
    create,
    index,
    new: newFlight,
    show,
    delete: deleteFlight,
}

function create(req,res){
    // console.log(req.body)
    Flight.create(req.body, function(err, flight){
        if (err) return handleError(err);
        console.log(flight)
    });
    // Flight.create({stuff}, function(err,flightDoc){
//     console.log(flightDoc)
// });
    res.redirect('/flights/new')
}

function index(req, res){
    Flight.find({}, function(err, allFlights){
        res.render('flights/index',{
            allFlights, 
            title: "Not Orbitz",
        })
    })
}

function newFlight(req,res) {
    res.render('flights/new', {title: "Not Orbitz"})
}

function show(req,res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {title: 'Flight Detail', flight});
    });
}

function deleteFlight(req,res) {
    Flight.findByIdAndDelete(req.params.id, function(err) {
        if (err) return handleError(err);
        res.redirect('/flights')
    })
}

function handleError(err) {
    console.log(err, ' this here be the err yer lookin for')
}