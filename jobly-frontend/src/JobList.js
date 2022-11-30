import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";
import JoblyApi from "./api";

/**
 * JobList:
 *
 * Props: None
 *
 * State: jobs - list of jobs like
 *        [{companyHandle: "",
 *          companyName: "",
 *          equity: "",
 *          id: 1,
 *          salary: 110000,
 *          title: ""},
 *            ...{...}]
 *
 * Routes -> JobList -> { JobCard, SearchForm }
 */
function JobList() {
  const [jobs, setJobs] = useState(null);

  console.log("JobList");

  useEffect(() => {
    search();
  }, []);

  /**Search for jobs and sets the jobs state.
   * Called from SearchForm and useEffect.
   */
  async function search(searchTerm = "") {
    const jobsResults = await JoblyApi.getJobs(
      searchTerm.length > 0 ? { title: searchTerm } : {}
    );
    setJobs(jobsResults);
  }

  if (jobs === null) {
    return <Spinner />;
  }

  return (
    <div className="JobList">
      <SearchForm searchFor={search} />
      {jobs.length > 0 ? (
        jobs.map((j) => <JobCard key={j.id} {...j} />)
      ) : (
        <p className="d-flex justify-content-center align-items-center mt-5">
          Nothing Found
        </p>
      )}
    </div>
  );
}

export default JobList;
