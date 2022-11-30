import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SearchForm.css";
import { debounce } from "./utils";

/**
 * SearchForm:
 *
 * Props: search - function, to be called in parent
 *
 * State: value - string
 *
 * { JobsList, CompaniesList } -> SearchForm
 */
function SearchForm({ searchFor }) {
  const [value, setValue] = useState("");

  console.log("SearchForm");

  /**Handle the input change. */
  function handleChange(evt) {
    setValue(evt.target.value);
    searchFor(evt.target.value);
  }

  /**Handle search submit. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(value);
  }

  return (
    <Form className="SearchForm" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          onChange={debounce(handleChange, 300)}
          placeholder="Enter search term"
          className="SearchForm-bar mt-5 form-control-lg"
        />
        <Button type="submit" className="btn-lg btn-primary" disabled>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
