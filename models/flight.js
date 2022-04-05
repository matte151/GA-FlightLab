const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {type: String, enum:['AUS','DFW','DEN','LAX','SAN']},
    arrival: {type: Date},
})

const flightSchema = new Schema({
    airline: {type: String, enum: ['American','Delta','Southwest','United']},
    airport: {type: String, default: 'DEN', enum: ['ATL','DFW','DEN','LAX','SAN']},
    flightNo: {type: Number, min: 10, max: 9999, unique: true},
    departs: {type: Date, default: function() {return new Date(new Date().setFullYear(new Date().getFullYear() + 1))}},
    destinations: [destinationSchema],
    // tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}]
});

module.exports = mongoose.model('Flight', flightSchema);