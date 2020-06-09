import React from 'react';

const Job = (props) => {
  return (
    <div><a href={props.details.company_url} target="_blank">{props.details.company}</a></div>
  )
}


export default Job;