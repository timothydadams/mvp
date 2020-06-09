import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Job from './job.jsx';


class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      searchTerm: '',
    };

    this.getAllJobs = this.getAllJobs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchJobs = this.searchJobs.bind(this);
  }

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs() {
    axios.get('/jobs')
      .then((data) => this.setState({ jobs: data.data }))
      .catch((err) => console.log(err));
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
    this.searchJobs();
  }

  searchJobs() {
    const { searchTerm } = this.state;
    axios.get('/search', {
      params: {
        keyword: searchTerm,
      },
    })
      .then((data) => this.setState({ jobs: data.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const { jobs } = this.state;
    return (
      <div>
        { jobs ? (
          <div>
            <TextField style={{padding: 24}}
              id="searchInput"
              placeholder="Search saved jobs"
              margin="normal"
              onChange={this.handleChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              { jobs.map((job) => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Job details={job} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : 'No jobs found'}
      </div>
    );
  }
}

export default JobList;
