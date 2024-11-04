import { Link } from "react-router-dom";


const JobFeatured = ({ featured }) => {
    console.log(featured)
    const {company_name,logo,job_title,job_type,remote_or_onsite,salary,location}=featured
    return (
        <div className="border p-6 rounded">
            <img src={logo} alt="" />
            <h1>{ job_title}</h1>
            <h1>{company_name}</h1>
            <div className="flex text-sm">
                <h5 className="pr-3">{remote_or_onsite}</h5>
                <h5>{job_type}</h5>
                
            </div>
            <div className="flex text-xs ">
                <div className="flex pr-8 content-center ">
                    <img className="" src="https://i.ibb.co.com/dDcw3vC/Location.png" alt="" />
                    <p className="mt-.5">{ location}</p>
              </div >
                <div className="flex">
                <img src="https://i.ibb.co.com/bzL53m6/money.png" alt="" />
                <p className="mt-0.5 ">{ salary}</p>
          </div>
            </div>
            <Link to=''>
                <button className="btn mt-3 p-2 rounded-md font-medium text-white bg-gradient-to-r from-[#7045e6fd]  to-[#9873ff]">
                    View Details</button></Link>
        </div>
    );
};

export default JobFeatured;