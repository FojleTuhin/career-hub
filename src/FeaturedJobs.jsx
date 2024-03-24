import { useEffect, useState } from "react";
import Job from "./component/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured jobs:{jobs.length}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quibusdam facilis soluta praesentium illo, suscipit omnis mollitia! Porro, aut consectetur!</p>
            </div>
            <div className="grid grid-cols-2 gap-6 ">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="text-center mt-10 mb-10">
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary text-center">Show All Jobs</button>
                </div>
            </div>

        </div>
    );
};

export default FeaturedJobs;