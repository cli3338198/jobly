import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";

/**
 * CompanyDetail:
 *
 * Props:
 *
 * State:
 *
 * Routes -> CompanyDetail
 */

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompanyDetail() {
      const companyDetailResults = await JoblyApi.getCompany(handle);
      setCompany(companyDetailResults);
    }
    getCompanyDetail();
  }, [handle]);



  return <div className="CompanyDetail">
    <h1>{company && company.name}</h1>
    <h3>{company && company.description}</h3>
    {company && company.jobs.map((j) => (
        <JobCard key={j.id} {...j} />
      ))}
  </div>;
}

export default CompanyDetail;

// handle, name, description, numEmployees, logoUrl, jobs
