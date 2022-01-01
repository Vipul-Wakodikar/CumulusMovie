import React,{useContext} from 'react'
import { changeCategories, changeVals } from "./changeVals";
  
const ShowContent = () => {
    const {value1,value2} = useContext(changeCategories);
  const { category,setCategory} = value1;
  const {director,setDirector} = value2;
    return (
        <div>
            <span>
                <input type = "checkbox" onChange={(e)=>setDirector(!director)} checked = {director}></input>
                {/* <input type="checkbox"></input> */}
                Director
            </span>
        </div>
    )
}

export default ShowContent
