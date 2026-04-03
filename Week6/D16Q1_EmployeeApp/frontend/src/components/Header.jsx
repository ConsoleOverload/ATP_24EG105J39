import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-end text-3xl p-7 gap-6 bg-gray-600 text-white">
      <NavLink to="" className={({isActive})=>(isActive?"text-orange-400":"")}>Home</NavLink>
      <NavLink to="create-emp" className={({isActive})=>isActive?"text-orange-400":""}>CreateEmp</NavLink>
      <NavLink to="list" className={({isActive})=>isActive?"text-orange-400":""}>ListOfEmps</NavLink>
    </nav>
  )
}

export default Header