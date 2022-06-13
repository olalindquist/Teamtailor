import React from "react";
interface displayDataProps {
  jobdata: any;
}

function DisplayData(props: displayDataProps) {
  return (
    <div>
      DisplayData: <br />
      {JSON.stringify(props.jobdata)}
      <br />
      DisplayData***************: <br />
    </div>
  );
}
export default DisplayData;
// {JSON.stringify(props.jobdata[0].id)}
