import React, { useContext } from "react";
import styles from "./Header.module.css";
import { changeCategories, changeVals } from "./changeVals";
const Header = () => {
  const { searchText, setSearchText } = useContext(changeVals);
  const { category,setCategory} = useContext(changeCategories)
  return (
    <div className={styles.headerTitle} style={{ backgroundColor: "#000" }}>
      <h4>Credit: Cumulus</h4>
      <p>please click on Card to display Information</p>
      <select name="category" onChange={(e)=>setCategory(e.target.value)} className={styles.dropDown}>
        <option value="Title">Movie Name</option>
        <option value="Genre">Genre</option>
      </select>
      <input
        type="text"
        onChange={(e) => {
          setSearchText(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          );
        }}
        placeholder="Select category and type name or genre"
      />
      <div>{category} {searchText}</div>
    </div>
  );
};

export default Header;
