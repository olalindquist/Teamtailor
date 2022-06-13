import React from 'react';
import JobViewer from "./components/JobViewer";

//a5o4wu2Ghgnehh_kX79193wPTv9bD4A72hY5mtzv

function App():JSX.Element {
    
    return (
       
               <JobViewer />
       
        );
}

export default App;

/*
     <DisplayData data = {jobData} />
  fetch("https://api.teamtailor.com/v1/candidates", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

*/
