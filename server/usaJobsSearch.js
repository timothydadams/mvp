// const request = require('request');
// const keys = require('../keys');
const db = require('../db/index');
const axios = require('axios');

// const host = 'data.usajobs.gov';
// const userAgent = 'adams.timothy.d@gmail.com';
// const authKey = keys.usaJobsAPI;

// request({
//   url: 'https://data.usajobs.gov/api/Search?RemunerationMinimumAmount=200001',
//   method: 'GET',
//   headers: {
//     'Host': host,
//     'User-Agent': userAgent,
//     'Authorization-Key': authKey,
//   }
// }, (error, response, body) => {
//   const data = JSON.parse(body);
//   data.SearchResult.SearchResultItems.forEach(item => {
//     console.log(item.MatchedObjectDescriptor.PositionTitle);
//     console.log(item.MatchedObjectDescriptor.PositionRemuneration);
//   })
//   // data.SearchResult.SearchResultItems.forEach(job => {
//   //   console.log(job.MatchedObjectDescriptor.PositionTitle);
//   //   job.MatchedObjectDescriptor.PositionLocation.forEach(location => {
//   //     console.log(location);
//   //   });
//   // });
// });


axios.get('https://jobs.github.com/positions.json?description=software&location=Raleigh')
  .then(results => {
    results.data.forEach(job => db.addJob(job));
  })
  .catch(err => console.log(err));
