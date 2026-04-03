import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import axios from "axios"
function ListOfEmps() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const goToEmployee = (emp)=>{
    // Navigate to /employee
    navigate("/employee",{state:emp});
  }
  const goToEditEmployee = (emp)=>{
    // Navigate to /edit
    navigate("/edit",{state:emp});
  }

  const deleteEmpByID = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:4002/employee-api/delete/${id}`)
      if (res.status === 200) {
        setEmployees((prev) => prev.filter((emp) => emp._id !== id))
      }
    } catch (err) {
      console.error("Delete failed:", err)
      setError("Unable to delete employee. Please try again.")
    }
  }

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("http://localhost:4002/employee-api/get-all")
        if (!res.ok) {
          throw new Error(`Failed to load employees (${res.status})`)
        }
        const data = await res.json()
        setEmployees(data.data || [])
      } catch (err) {
        setError(err.message || "Unable to load employees")
      } finally {
        setLoading(false)
      }
    }

    fetchEmployees()
  }, [])

  if (loading) {
    return <p className="text-center text-2xl">Loading employees...</p>
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>
  }

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-md shadow-lg ">
      <h1 className="text-4xl font-bold mb-6">List of Employees</h1>
      {employees.length === 0 ? (
        <p className="text-lg text-gray-600">No employees found.</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-start">
          {employees.map((emp) => (
            <div
              key={emp._id}
              className="flex-1 min-w-65 max-w-sm p-4 bg-gray-50 rounded-2xl shadow-sm border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-900 text-center">{emp.name}</h2>
              <p className="text-gray-600 mb-4 text-center">{emp.email}</p>
              <div className="flex justify-around p-2 ">
              <button onClick ={()=>goToEmployee(emp)} className="bg-green-500 rounded p-2">View</button>
              <button onClick ={()=>goToEditEmployee(emp)} className="bg-red-500 rounded p-2">Edit</button>
              <button onClick ={()=>deleteEmpByID(emp._id)} className="bg-orange-500 rounded p-2">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ListOfEmps
