import React from "react";
import { useSelector } from "react-redux";
import { TABLE_HEADERS } from "../utils/constants";

const EditForm = () => {
  const userInfo = useSelector((store) => store.user);
  console.log(userInfo.user);
  return (
    <>
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
        {userInfo.length>0 ? 
         (userInfo.map((row,index)=>(
          <tr>
          {TABLE_HEADERS.map((column, index)=>{
           return <td key={row.name}>{row[column]}</td>
          })}
          </tr>
        ))
      )
      : <p className="nodata">No data</p>
    }
        </tbody>
      </table>
    </>
  );
};

export default EditForm;
