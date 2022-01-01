import React,{useContext} from 'react'
import { changeCategories, changeVals } from "./changeVals";
  
const ShowContent = () => {
    const {value1,value2,value3} = useContext(changeCategories);
  const { category,setCategory} = value1;
  const {director,setDirector} = value2;
  const {plot,setPlot} = value3;
    return (
        <div>
            <span>
                <input type = "checkbox" onChange={(e)=>setDirector(!director)} checked = {director}></input>
                Director
            </span><br />

            <span>
                <input type = "checkbox" onChange={(e)=>setPlot(!plot)} checked = {plot}></input>
                Plot
            </span><br />
        </div>
    )
}

export default ShowContent
