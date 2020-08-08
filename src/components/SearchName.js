import React, { useContext } from "react";
import "../App.css";
import DataAreaContext from "../utils/DataAreaContext";

const SearchName = () => {
  const context = useContext(DataAreaContext);
// Search for the employee by name//
  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Employee Name
            </span>
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
export default SearchName;
