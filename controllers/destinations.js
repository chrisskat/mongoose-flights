const Flight = require('../models/flight')


module.exports = {
    create,
    show
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { title: 'Flight Detail', flight })
    });
  }