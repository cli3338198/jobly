import { useEffect, useState } from "react";
import MySpinner from "./MySpinner";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./api";

/**
 * CompanyList:
 *
 * Props: none
 *
 * State: companies: list of objects like [{name: "", description: "", jobs: [...]}, ...{...}]
 *        currSearch: string
 *
 * Routes -> CompanyList -> { SearchForm, CompanyCard }
 */
function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [currSearch, setCurrSearch] = useState();

  console.log("CompanyList", currSearch);

  useEffect(() => {
    search();
  }, []);

  // TODO: log if no currUser,

  /**Search for companies and sets the companies state.
   * Called from SearchForm and useEffect.
   */
  async function search(searchTerm = "") {
    const companiesResults = await JoblyApi.getCompanies(
      searchTerm.length > 0 ? { nameLike: searchTerm } : {}
    );
    setCompanies(companiesResults);
    setCurrSearch(searchTerm);
  }

  if (companies === null) {
    return <MySpinner />;
  }

  return (
    <div className="CompanyList container">
      <SearchForm searchFor={search} />
      {companies.length > 0 ? (
        companies.map((c) => <CompanyCard key={c.name} {...c} />)
      ) : (
        <p className="none lead d-flex justify-content-center mt-5">
          Nothing Found
        </p>
      )}
    </div>
  );
}

export default CompanyList;
