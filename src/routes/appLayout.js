import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const appLayout=()=>{
    return(
      <>
      <Header/>
      <Outlet/>
      </>
    )
  }
  export default appLayout