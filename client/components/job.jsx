import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));


const Job = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1a-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>
              <a href={props.details.company_url}>{props.details.company}</a>
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography></Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            <Typography>{props.details.location}</Typography>
          </div>
          <div className={classes.column}>
            <Typography>
              { props.details.description.substr(0, 200) }...
            </Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Don't miss this one...
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                Apply
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelDetails>
          <TextField
            id="outlined-helperText"
            label="Notes"
            defaultValue="POCs / What do they make?  /  What are they looking for?"
            helperText="Some important text"
            variant="outlined"
            fullWidth="true"
            multiline="true"
          />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" color="primary">Save</Button>
          <Button size="small" color="secondary">Remove</Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

export default Job;