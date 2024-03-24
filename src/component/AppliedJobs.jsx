import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../localStorage";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }

            console.log(jobs, storedJobIds)
            console.log(jobsApplied)

            setAppliedJobs(jobsApplied)
        }
    }, [])
    return (
        <div>
            <h2 className="text-3xl font-bold text-yellow-700">Applied jobs:{appliedJobs.length}</h2>

           <div className="flex justify-end mr-20 mb-20">
           <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                    <li><a>All</a></li>
                </ul>
            </details>
           </div>

            <ul>
                {
                    appliedJobs.map(job =>

                        <li className="text-2xl text-sky-200" key={job.id}><span>{job.job_title} {job.company_name}: {job.remote_or_onsite}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;