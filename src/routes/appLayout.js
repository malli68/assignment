import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const appLayout=()=>{
    return(
      <>
      <Header/>
      <Sidebar/>
      <Outlet/>
      </>
    )
  }
  export default appLayout