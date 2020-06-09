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

// find all jobs
const findAll = (cb) => {
  Job.find({}).exec((err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};

// search most likely fields by keyword
const search = (keyword, cb) => {
  const query = { $or: [{ position: { $regex: `${keyword}`, $options: 'i' } }, { company: { $regex: `${keyword}`, $options: 'i' } }, { location: { $regex: `${keyword}`, $options: 'i' } }, { description: { $regex: `${keyword}`, $options: 'i' } }] };

  Job.find(query, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};

module.exports = {
  addJob, findAll, search,
};
