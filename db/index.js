const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jobs', { useNewUrlParser: true, useUnifiedTopology: true });

const jobSchema = new mongoose.Schema({
  position: String,
  company: String,
  company_url: String,
  location: String,
  description: String,
  category: String,
  posted: Date,
  application_link: String,
});

const Job = mongoose.model('Job', jobSchema);

const addJob = (details) => {
  const newJob = new Job({
    position: details.position,
    company: details.company,
    company_url: details.company_url,
    location: details.location,
    description: details.description,
    category: details.category,
    posted: details.posted,
    application_link: details.application_link,
  });

  newJob.save((err, results) => {
    if (err) {
      console.log(err);
    }
    console.log('Job Added', results);
  });
};

//
const findAll = (cb) => {
  Job.find({}).exec((err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};


// search Jobs (pass an object with field and value properties)
const search = ({field, value}, cb) => {
  Review.find({ field: value }).exec((err, results) => {
    if (err) {
      cb(err);
    }
    cb(null, results);
  });
};

module.exports = {
  addJob, findAll,
};
