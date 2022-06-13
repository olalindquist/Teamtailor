import {useState} from 'react';
interface MemoryHandlerProps{
    remember: ()=>void,
    clearMemory: ()=>void,
    setCurrent:(job:any)=>void; 
    list: any[],
}

function MemoryHandler(props:MemoryHandlerProps):JSX.Element {
    const [memoryPointer, setMemoryPointer]=useState<number>(0);
    function next() {
        if(memoryPointer < props.list.length)
        setMemoryPointer(memoryPointer+1)
    }

    function prev() {
        if(memoryPointer > 0 )
        setMemoryPointer(memoryPointer-1)
    }
    function gotoMem(){
        props.setCurrent(props.list[memoryPointer])
        setMemoryPointer(0)
    }
    
    function show():JSX.Element{
        return (
            <div >
                {props.list.map( (job:any, i) => (
                                       

                       i=== memoryPointer ?  
                        <b>{ JSON.stringify(job.attributes.title)+" "} </b>
                        :<i>
                        { JSON.stringify(job.attributes.title)+" "}</i>
                    
                    

                )
                               )}
            </div>
        )
    }
    return (
        <div >
            Memory
            <button onClick={props.remember}>
            remeber current Job
        </button>
            <button onClick={props.clearMemory}>
            clear Memory
        </button>

            <button onClick={prev}>
            prevMem
        </button>
                        <button onClick={next}>
            nextMem
        </button>
            <button onClick={gotoMem}>
            gotoMem
        </button>
            {show()}
        </div>
            
    );    
}

export default MemoryHandler; 
