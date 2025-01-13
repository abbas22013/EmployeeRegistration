const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  email: { type: String, required: true },
  notes: { type: String },
  status: {
    type: String,
    enum: ['IT', 'HR', 'Marketing', 'Management', 'Accounting'],
    required: true
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  employess: [employeesSchema]
});

module.exports = mongoose.model('User', userSchema);
