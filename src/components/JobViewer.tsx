import React from "react";
import { useState } from "react";
import JobListHandler from "./JobListHandler";
import MemoryHandler from "./MemoryHandler";

function JobViewer(): JSX.Element {
  const [jobdata, setJobdata] = useState<any>();
  const [currentJob, setCurrentJob] = useState<any>();
  const [gotCurrentJob, setGotCurrentJob] = useState<boolean>(false);
  const [jobPointer, setJobPointer] = useState<number>(0);
  const [memory, setMemory] = useState<any[]>([]);
 

    function setCurrentJobTo(job: any) {

        if (gotCurrentJob) {
    let i: number = 0;
    jobdata.data.forEach((j: any) => {
      i++;
      if (j.id === jobdata.data[jobPointer]) {
        setCurrentJob(jobdata.data[i]);
        setJobPointer(i);
      }
    });

            setCurrentJob(job);
            
        }}

  function remember() {
    if (gotCurrentJob) {
      let currentJobInMemory: boolean = false;

      memory.forEach((job: any) =>
        JSON.stringify(job.id) === JSON.stringify(currentJob.id)
          ? (currentJobInMemory = true)
          : null
      );
      if (!currentJobInMemory) {
        setMemory((memory) => [...memory, currentJob]);
      }
    }
  }
  function clearMemory() {
    setMemory([]);
  }

  function nextJob(): void {
    if (jobPointer < jobdata.data.length) {
      let newval = jobPointer + 1;
      setJobPointer(newval);
      setCurrentJob(jobdata.data[jobPointer]);
    }
  }

  function previousJob(): void {
    if (jobPointer !== 0) {
      let newval = jobPointer - 1;
      setJobPointer(newval);
      setCurrentJob(jobdata.data[jobPointer]);
    }
  }

  function getResult(): void {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token token=a5o4wu2Ghgnehh_kX79193wPTv9bD4A72hY5mtzv"
    );
    myHeaders.append("X-Api-Version", "20210218");
    var requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.teamtailor.com/v1/jobs", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setJobdata(result);
        setCurrentJob(result.data[0]);
        setGotCurrentJob(true);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <h1> JOBVIEWER </h1>
      <div>
        <MemoryHandler
          remember={remember}
          clearMemory={clearMemory}
          list={memory}
          setCurrent={setCurrentJobTo}
        />
        {gotCurrentJob ? (
          <JobListHandler
            currentJob={currentJob}
            next={nextJob}
            prev={previousJob}
                />
        ) : (null
        )}
      </div>
      <button onClick={getResult}>Check for Jobs</button>
      <div></div>
    </div>
  );
}

export default JobViewer;
