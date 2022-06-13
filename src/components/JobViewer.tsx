import React from 'react';
import {useState} from 'react';
import DisplayData from "./DisplayData";
import DisplayLinks from "./DisplayLinks";
import JobListHandler from "./JobListHandler"
import MemoryHandler from "./MemoryHandler"

//a5o4wu2Ghgnehh_kX79193wPTv9bD4A72hY5mtzv

function JobViewer():JSX.Element {
    const [jobdata, setJobdata] =useState<any>();
    const[currentJob, setCurrentJob]= useState<any>();
    const [gotCurrentJob, setGotCurrentJob] =useState<boolean>(false) 
    const [jobPointer, setJobPointer] = useState<number>(0)
    const [memory, setMemory]  = useState<any[]>([]); 


    function setCurrentJobTo(job:any) {
        let i:number = 0;
        jobdata.data.forEach((j:any) =>{
            i++; 
            if (j.id === jobdata.data[jobPointer] ){
                setCurrentJob(jobdata.data[i])
                setJobPointer(i);
            }
        }
                            )
        
        setCurrentJob(job);
        

    }

    function remember() {
        let currentJobInMemory:boolean =false

        memory.forEach((job:any)=>
            JSON.stringify(job.id) === JSON.stringify(currentJob.id) ? currentJobInMemory = true : null

                      )
        if(!currentJobInMemory){
            
            setMemory((memory) => [...memory, currentJob] )
            
        }
    }
    function clearMemory (){
        setMemory([])
        
    }
    function nextJob():void{
        if (jobPointer < jobdata.data.length){
            setJobPointer(jobPointer+1);
            setCurrentJob(jobdata.data[jobPointer])
        }

        console.log("JP "+ jobPointer +" " + jobdata.data.length);
    }
    
    function previousJob():void{

        if (jobPointer > 0){
            setJobPointer (jobPointer-1);
            setCurrentJob(jobdata.data[jobPointer])
            
        }
        console.log("JP "+ jobPointer +" " + jobdata.data.length);
    }

    
    function getResult(): void
    {
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token token=a5o4wu2Ghgnehh_kX79193wPTv9bD4A72hY5mtzv");
        myHeaders.append("X-Api-Version", "20210218");
        var requestOptions:any = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("https://api.teamtailor.com/v1/jobs", requestOptions)
            .then(response => response.json())
            .then (result => {
                setJobdata(result);
                setCurrentJob(result.data[0])
                setGotCurrentJob(true)
            })
            .catch(error => console.log('error', error))

        
    }

    //*****************************************
    function show():JSX.Element {

        return (
            <div >
                FROM JV  *****
                {jobdata?.data.map( (s:any)=>{
                    return(
                        <div >
                            <DisplayData jobdata={s.id} />
                            <DisplayLinks jobLinks={s.links} />
                            <DisplayLinks jobLinks={s.attributes} /> 
                            </div>
                    );
                    
                }
                                  )}
        )                
        </div>
    )
    
}   
//***********************************************

return (
    <div >
        JOBVIEWER
        <div >
        <MemoryHandler remember={remember} clearMemory = {clearMemory} list={memory} setCurrent={setCurrentJobTo} />
        
        
        
        {gotCurrentJob ?         
            <JobListHandler currentJob={currentJob}  next={nextJob} prev={previousJob} />
            : <div >tjo </div>
            }
    ********
        
        </div>
        <button onClick={getResult}>
        Check for Jobs
    </button>
        <div >
        
        </div>
        
        </div>
);
}


export default JobViewer;
