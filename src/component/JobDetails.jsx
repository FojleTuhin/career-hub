import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../localStorage";

const JobDetails = () => {
     const jobs =useLoaderData();
     const {id}=useParams();
     const idInt= parseInt(id)
     const job=jobs.find(job => job.id === idInt);
     console.log(job)

     const handleApplyJob=()=>{
        saveJobApplication(idInt);
     }
    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                <h2>Job details of: {job.job_title} </h2>
                <h2>Company: {job.company_name}</h2>
                <h2>Description:  {job.job_description}</h2>
                <h3>{job.educational_requirements}</h3>
                <h3>{job.experiences}</h3>
                </div>
                <div className="border flex items-center justify-center">
                    <button onClick={handleApplyJob} className="btn btn-primary ">Apply now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;