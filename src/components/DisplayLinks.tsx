import React from "react";
interface displayLinksProps {
  jobLinks: any;
}

function DisplayLinks(props: displayLinksProps) {
  return (
    <div>
      <h4> Links:</h4>
      CareerSite:{" "}
      <a href={JSON.stringify(props.jobLinks["careersite-job-url"])}>
        Link{" "}
      </a>{" "}
      <br />
      JobApply:{" "}
      <a href={JSON.stringify(props.jobLinks["careersite-job-apply-url"])}>
        Link{" "}
      </a>{" "}
      <br />
      Apply I-Frame:{" "}
      <a href={JSON.stringify(props.jobLinks["careersite-job-url"])}>
        Link{" "}
      </a>{" "}
      <br />
      Self: <a href={JSON.stringify(props.jobLinks["self"])}>Link </a> <br />
      DisplayData***************
    </div>
  );
}
export default DisplayLinks;
