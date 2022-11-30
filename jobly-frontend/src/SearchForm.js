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
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input value={searchTerm} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;
