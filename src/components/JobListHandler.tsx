import React from "react";
import { useState } from "react";
import FullJob from "./FullJob";

interface JobListHandlerProps {
  currentJob: any;
  next: () => void;
  prev: () => void;
}

function JobListHandler(props: JobListHandlerProps): JSX.Element {
  const [displayFullJob, setDisplayFullJob] = useState<boolean>(false);
  function showMore(): void {
    setDisplayFullJob(true);
  }
  function showLess() {
    setDisplayFullJob(false);
  }

  return (
    <div>
      <h2>
        {" "}
        CurrentJobb {props.currentJob.attributes.title} ID:{" "}
        {props.currentJob.id}{" "}
      </h2>
      <button onClick={props.prev}>prev</button>
      <button onClick={props.next}>next</button> <br />
      <br />
      {props.currentJob.attributes.body}
      <br />
      <button onClick={showMore}>showMore</button>
      {displayFullJob ? <FullJob currentJob={props.currentJob} /> : null}
      {displayFullJob ? <button onClick={showLess}>Show Less</button> : null}
    </div>
  );
}
export default JobListHandler;
