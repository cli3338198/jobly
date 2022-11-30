import "./JobCard.css";

/**
 * JobCard:
 *
 * Props: handle - string
 *        name - string
 *        description - string
 *        logoUrl - string
 *
 * State: none
 *
 * { JobList, CompanyDetail }  -> JobCard
 */
function JobCard({ title, salary, equity, companyName }) {
  return (
    <div className="JobCard">
      <h1>{title}</h1>
      <p>{companyName}</p>
      <i>Salary: {salary}</i>
      <i>Equity: {equity}</i>
    </div>
  );
}

export default JobCard;
