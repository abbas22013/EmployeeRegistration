// controllers/applications.js

const express = require('express');

const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
  try {
    // find the user
    const currentUser = await User.findById(req.session.user._id);

    res.render('employees/index.ejs', {
      employees: currentUser.employees,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

router.get('/new', async (req, res) => {
    res.render('employees/new.ejs');
  });




  router.post('/', async (req, res) => {
    try {
      // find the user
      const currentUser = await User.findById(req.session.user._id);
      // add the app to the applications array on the user object
      currentUser.employees.push(req.body);
      // save the changes to the user record.
      await currentUser.save();
      // redirect usr to index page
      res.redirect(`/users/${currentUser._id}/employees`);
    } catch (err) {
      console.log(err);
      res.redirect('/');
    }
  });

  



  module.exports = router;








  
  











 

  



  






  