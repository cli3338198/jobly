import Alert from "react-bootstrap/Alert";
/**
 * Alert:
 *
 * Props: err - Error
 *
 * State:
 *
 * {} -> Alert
 */
function MyAlert({ errors = [] }) {
  return (
    <Alert className="mt-3" variant="danger">
      {errors.map((err, i) => (
        <p key={i}>{err}</p>
      ))}
    </Alert>
  );
}

export default MyAlert;
