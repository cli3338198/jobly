import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SearchForm.css";

/**
 * SearchForm:
 *
 * Props: searchTerm - string
 *        handleSubmit - function, to be called in parent component
 *        handleChange - function, to be called in parent component
 *
 * State: none
 *
 * { JobsList, CompaniesList } -> SearchForm
 */
function SearchForm({ searchTerm, handleSubmit, handleChange }) {
  return (
    <Form className="SearchForm" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          value={searchTerm}
          onChange={handleChange}
          placeholder="Enter search term"
          className="SearchForm-bar mt-5 form-control-lg"
        />
        <Button type="submit" className="btn-lg btn-primary">Submit</Button>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
