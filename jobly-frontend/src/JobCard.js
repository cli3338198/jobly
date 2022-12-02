import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./JobCard.css";
import { useContext, useEffect, useState } from "react";
import userContext from "./userContext";

/**
 * JobCard:
 *
 * Props: id - number
 *        handle - string
 *        name - string
 *        description - string
 *        logoUrl - string
 *
 * State: none
 *
 * { JobList, CompanyDetail }  -> JobCard
 */
function JobCard({ id, title, salary, equity, companyName }) {
  console.log("JobCard");

  const { applyToJob, hasApplied } = useContext(userContext);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    setApplied(hasApplied(id))
  }, [id, hasApplied]);

  function handleApply(evt) {
    if(hasApplied(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <Card className="JobCard m-4">
      <Card.Header as="h1">{title}</Card.Header>
      <Card.Body>
        <Card.Title>{companyName}</Card.Title>
        <Card.Text className="m-0">Salary: {salary}</Card.Text>
        <Card.Text className="m-0">Equity: {equity}</Card.Text>
        <Button
          className="JobCard-Btn"
          onClick={handleApply}
          disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </Button>
      </Card.Body>
    </Card>
  );
  // TODO: Apply Button
}

export default JobCard;
