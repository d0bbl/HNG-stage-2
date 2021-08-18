const mongoose = require('mongoose');

const { Schema } = mongoose;

const resumeSchema = new Schema({
    email: {
      type: String,
      required: true,
    },
    
    fname: {
      type: String,
      required: true,
    },
  
    lname: {
      type: String,
      required: true,
    },
  
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  }, { timestamps: true });

  const Resume = mongoose.model('Resume', resumeSchema);
  module.exports = Resume;