import React, { useContext } from "react";
import "../App.css";
import DataAreaContext from "../utils/DataAreaContext";
import "../App.css";

const SearchDOB = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox">
       <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="">
          Date of Birth
          </span>
      </div>
      <input type="date" className="form-control"   onChange={e => context.handleSearchChange(e)}/>
      </div>
    </div>
  );
};
export default SearchDOB;
