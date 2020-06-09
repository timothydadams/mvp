import React from 'react';
import ReactDom from 'react-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import NavBar from './components/navBar.jsx';
import SideBar from './components/sideBar.jsx';
import JobList from './components/jobList.jsx';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar />
    <SideBar />
    <JobList />
  </ThemeProvider>
);

ReactDom.render(<App />, document.getElementById('app'));
