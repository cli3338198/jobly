import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import "./CompanyDetail.css";
import MySpinner from "./MySpinner";

/**
 * CompanyDetail:
 *
 * Props: None
 *
 * State: company: object like {name: "", description: "", jobs: [...]}
 *
 * Routes -> CompanyDetail -> JobCard
 */

function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  console.log("CompanyDetail");

  useEffect(() => {
    async function getCompanyDetail() {
      const companyDetailResults = await JoblyApi.getCompany(handle);
      setCompany(companyDetailResults);
    }
    getCompanyDetail();
  }, [handle]);

  if (company === null) {
    return <MySpinner />;
  }

  return (
    <div className="CompanyDetail">
      <h1 className="m-5 CompanyDetail-title">{company.name}</h1>
      <h4 className="m-5 CompanyDetail-subtitle">{company.description}</h4>
      {company.jobs.map((j) => (
        <JobCard key={j.id} {...j} />
      ))}
    </div>
  );
}

export default CompanyDetail;
