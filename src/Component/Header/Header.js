import React, { useContext,useState } from "react";
import styles from "./Header.module.css";
import { changeCategories, changeVals } from "./changeVals";
import { Checkbox } from "@mui/material";
import ShowContent from "./ShowContent";

const Header = () => {
  const { searchText, setSearchText } = useContext(changeVals);
  const {value1,value2} = useContext(changeCategories);
  const { category,setCategory} = value1;
  const {director,setDirector} = value2;
  const [showItems,setShowItems] = useState(false);
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
      <div onClick={(e)=>setShowItems(!showItems)}>
      Show content Filter{showItems?(<span>⏬</span>):(<span>⏩</span>)}
      </div>
      { showItems && (
        <ShowContent />
      )}
      
      
      
      <div>{category} {searchText}</div>
    </div>
  );
};

export default Header;
