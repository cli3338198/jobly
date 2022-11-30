import Card from "react-bootstrap/Card";

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
    <Card className="JobCard m-4">
      <Card.Header as="h1">{title}</Card.Header>
      <Card.Body>
        <Card.Title>
          {companyName}
        </Card.Title>
        <Card.Text className="m-0">
          Salary: {salary}
        </Card.Text>
        <Card.Text className="m-0">
          Equity: {equity}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
