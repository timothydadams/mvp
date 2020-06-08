import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
    this.getJobs = this.getJobs.bind(this);
  }

  componentDidMount() {
    this.getJobs();
  }

  getJobs() {
    axios.get('/jobs')
      .then(data => this.setState({ jobs: data.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { jobs } = this.state;
    console.log(jobs);
    return (
      <div>
        <ul>
          {jobs.map(job => <li>{ job.company }</li>)}
        </ul>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
