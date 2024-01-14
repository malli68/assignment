import React from "react";
import { useSelector } from "react-redux";
import { TABLE_HEADERS } from "../utils/constants";
import { Link } from "react-router-dom";

const EditForm = () => {
  const userInfo = useSelector((store) => store.user);
  console.log(userInfo.user);
  return (
    
    <>
    {userInfo.length > 0 ? (

<table>
<thead>
  <tr>
  {
    TABLE_HEADERS.map((header)=>{
      return <th key={header}>{header}</th>
    })
  }
  </tr>
</thead>
<tbody>
{userInfo.map((row,index)=>(
  <tr>
  {TABLE_HEADERS.map((column, index)=>{
   return <td key={row.name}>{row[column]}</td>
  })}
  </tr>
))
}
</tbody>
</table>
    ):(
      <div className="Table">
        <p> no data here click on this button to create user </p>
        <Link to="/create"><button>Add User</button></Link>
      </div>
      )
    }

    </>
  );
};

export default EditForm;
