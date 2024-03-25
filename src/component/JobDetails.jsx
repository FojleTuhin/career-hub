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
            <div className="grid gap-4 md:grid-cols-6 mb-20">
                <div className="border md:col-span-4 p-8">

                    <h2 className="mb-4"><span className="font-bold">Description</span>:  {job.job_description}</h2>
                    <h2 className="mb-4"><span className="font-bold">Job resposibility</span>: {job.job_responsibility}</h2>
                    <h3 className="mb-4"><span className="font-bold mb-4">Educational Requierment</span> <br />{job.educational_requirements}</h3>
                    <h3 className="mb-4"><span className="font-bold mb-4">Experience</span><br /> {job.experiences}</h3>
                </div>
                <div className="border rounded-xl  col-span-2">
                    <div className="mb-6 rounded-xl bg-[#E3FDFD] p-4 ">
                        <p className="text-xl font-bold mt-3 mb-4">Job Details</p>
                        <hr className="mb-4" />


                        <div className="flex gap-2 items-center">
                            <img className="w-5 h-5" src="/public/assets/icons/money.png" alt="" />
                            <h2 className="mb-2"> <span className="font-bold">Salary</span>: {job.salary} (per month)</h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="w-5 h-5" src="/public/assets/icons/calendar.png" alt="" />
                            <h2 className="mb-2"> <span className="font-bold">Job Title</span>: {job.job_title} </h2>
                        </div>

                        <p className="text-xl font-bold mt-4 mb-4">Contact Information</p>
                        <hr className="mb-4"/>

                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;