import { createBrowserRouter , RouterProvider ,Navigate } from "react-router"
import RootLayout from "./components/RootLayout.jsx"
import Home from "./components/Home.jsx"
import CreateEmp from "./components/CreateEmp.jsx"
import ListOfEmps from "./components/ListOfEmps.jsx"
import Employee from "./components/Employee.jsx"
import EditEmployee from "./components/EditEmployee.jsx"
function App() {
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        { path:"",element:<Home /> },
        { path:"create-emp", element:<CreateEmp /> },
        { path:"list",element:<ListOfEmps /> },
        { path:"employee",element:<Employee />},
        { path:"edit",element:<EditEmployee />},
        // { path:"employee",element:<Employee />}
      ],
    },
  ]);
  return (
    <RouterProvider router = {routerObj} />
  )
}

export default App