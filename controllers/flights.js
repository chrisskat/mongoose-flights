const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights })
    })
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    req.body.nowFlying = !!req.body.nowFlying
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights/new');
});
}

