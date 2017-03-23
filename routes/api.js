var db = require('../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Day = require('../models/day')
var router = require('express').Router();


router.post('/days', function (req, res, next) {

  Day.create(req.body).then(function(data){
    console.log(data);
    res.send(data);
  }).catch(next);



});

router.get('/days', function (req, res, next) {
  Day.findAll({})
  .then(function (days) {
    console.log(days);
    res.json(days);
  })
  .catch(next);
});






// router.get('/api/days/:id/hotels', function (req, res, next) {
//   Day.findOne(
//     {
//       where:{
//        id: req.params.id
//       },
//       include: [ Hotel ]
//     }
//   )
//   .then(function (allHotels) {
//     res.json(allHotels)
//   })
//   .catch(next);
// });


// router.get('/api/days/:id/hotels', function (req, res, next) {
//   Hotel.findAll(
//   )
//   .then(function (allHotels) {
//     res.json(allHotels)
//   })
//   .catch(next);
// });

// router.get('/api/days/:id/restaurants', function (req, res, next) {
//   Restaurant.findAll()
//   .then(function (allRestaurants) {
//     res.json(allRestaurants)
//   })
//   .catch(next);
// });

// router.get('/api/days/:id/activities', function (req, res, next) {
//   Activity.findAll()
//   .then(function (allActivities) {
//     res.json(allActivities)
//   })
//   .catch(next);
// });



router.get('/hotels', function (req, res, next) {
  Hotel.findAll()
  .then(function (allHotels) {
    res.json(allHotels)
  })
  .catch(next);
});

router.get('/restaurants', function (req, res, next) {
  Restaurant.findAll()
  .then(function (allRestaurants) {
    res.json(allRestaurants)
  })
  .catch(next);
});

router.get('/activities', function (req, res, next) {
  Activity.findAll()
  .then(function (allActivities) {
    res.json(allActivities)
  })
  .catch(next);
});



module.exports = router;
