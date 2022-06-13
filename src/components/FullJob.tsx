
interface FullJobProps {
  currentJob: any;
}

function FullJob(props: FullJobProps): JSX.Element {
  return (
    <div>
      FullJobb <br />
      Start-date: {props.currentJob["attributes"]["start-date"]} <br />
      "end-date": {props.currentJob["attributes"]["end-date"]} <br />
      "human-status": {props.currentJob["attributes"]["humanStatus"]} <br />
      "status":{props.currentJob["attributes"]["status"]} <br />
      "tags":{props.currentJob["attributes"]["tags"]} <br />
      "pitch": "tags":{props.currentJob["attributes"]["pitch"]} <br />
      "external-application-url":
      {<a href={props.currentJob["attributes"]["pitch"]}>Link </a>} <br />
    </div>
  );
}
export default FullJob;
