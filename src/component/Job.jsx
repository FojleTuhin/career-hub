import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";


const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl border border-cyan-500">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] mr-4">{job_type}</button>
                </div>
                <div className="flex justify-between">
                    <h2 className="flex gap-2  items-center"><CiLocationOn></CiLocationOn> {location}</h2>
                    <h2 className="flex gap-2 items-center"><HiOutlineCurrencyDollar></HiOutlineCurrencyDollar> {salary}</h2>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;