import { useState } from "react";
import PropTypes from "prop-types";

const Sorting = ({ data, setData }) => {
  // Initial value it will be points, it can be changed to assist, rebounds or allStar
  const [sortKey, setSortKey] = useState("points");

  // This function should sort data
  const sortData = (data, key) => {

    return data.sort((a, b) => {

      const aValue= a.statistics[key];
      const bValue= b.statistics[key];
      
      return bValue - aValue;
    });
  };

  const handleSort = (event) => {
    // I need function to assign value of options
    setSortKey(event.target.value);
    // I need function that will filter data
    // sortData need data and key: data will be a copy of data, using spread opertor and the key will be the current value: "points", "rebounds".... the different value of option, it depends on which you click it
    // First sorting (sortData) then changing the data in setData
    setData(sortData([...data], event.target.value));
  };
  return (
    <div>
      <label>Sort by:</label>
      {/* When you select one of the options, handleSort function will be triggered */}
      <select value={sortKey} onChange={handleSort}>
        {/* Values should be start with small letters because they are going to the backend */}
        <option value="points">Points</option>
        <option value="rebounds">Rebounds</option>
        <option value="assists">Assists</option>
        <option value="allstar">All Star</option>
      </select>
    </div>
  );
};

Sorting.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Sorting;
