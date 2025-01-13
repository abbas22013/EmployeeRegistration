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





  router.get('/:employeeId', async (req, res) => {
    try {
      // Look up the user from req.session
      const currentUser = await User.findById(req.session.user._id);
      // Find the application by the applicationId supplied from req.params
      const employee = currentUser.employees.id(req.params.employeeId);
      // Render the show view, passing the application data in the context object
      res.render('employees/show.ejs', {
        employee,
      });
    } catch (error) {
      // If any errors, log them and redirect back home
      console.log(error);
      res.redirect('/');
    }
  });





  // Route to render the edit form for an employee
router.get('/:employeeId/edit', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);

      const employee = currentUser.employees.id(req.params.employeeId);
      res.render('employees/edit.ejs', {
        user: currentUser,
        employee: employee,
      });
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });





  // Route to handle updating employee details
router.put('/:employeeId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);

      const employee = currentUser.employees.id(req.params.employeeId);
      employee.employeeName = req.body.employeeName;
      employee.email = req.body.email;
      employee.notes = req.body.notes;
      employee.status = req.body.status;
      await currentUser.save();
      res.redirect(`/users/${currentUser._id}/employees`);
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });
  





  router.delete('/:employeeId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);

      currentUser.employees.id(req.params.employeeId).deleteOne();
      await currentUser.save();
      res.redirect(`/users/${currentUser._id}/employees`);
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });
  
  

  



  module.exports = router;








  
  











 

  



  






  