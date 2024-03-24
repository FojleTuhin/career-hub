import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleApplyJob = () => {
        saveJobApplication(idInt);
    }

    
    
    return (
        <div>
            <div>
                <h2 className="text-center font-bold text-3xl pt-14 pb-14">Job Details</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-6">
                <div className="border md:col-span-4">
                    
                    <h2 className="mb-4"><span className="font-bold">Description</span>:  {job.job_description}</h2>
                    <h2 className="mb-4"><span className="font-bold">Job resposibility</span>: {job.job_responsibility}</h2>
                    <h3 className="mb-4"><span className="font-bold mb-4">Educational Requierment</span> <br />{job.educational_requirements}</h3>
                    <h3 className="mb-4"><span className="font-bold mb-4">Experience</span><br /> {job.experiences}</h3>
                </div>
                <div className="border flex items-center justify-center md:col-span-2">
                <h2>Job details of: {job.job_title} </h2>
                    <h2>Company: {job.company_name}</h2>
                    <button onClick={handleApplyJob} className="btn btn-primary ">Apply now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;