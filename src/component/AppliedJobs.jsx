import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../localStorage";

const AppliedJobs = () => {

    const jobs =useLoaderData();


    useEffect(()=>{
        const storedJobIds=getStoredJobApplication();
        if(jobs.length>0){
            const jobsApplied=[];
            for(const id of storedJobIds){
                const job=jobs.find(job=> job.id===id);
                if(job){
                    jobsApplied.push(job)
                }
            }
        }
    },[])
    return (
        <div>
            i am in applied jobs
        </div>
    );
};

export default AppliedJobs;