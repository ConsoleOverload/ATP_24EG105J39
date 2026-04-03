import { useNavigate ,useLocation } from 'react-router';
import {useForm} from 'react-hook-form'
import {useEffect} from "react"
import axios from 'axios'
function EditEmployee() {
  const { register,handleSubmit,formState: { errors },setValue} = useForm()
  const {state} = useLocation();
  const navigate = useNavigate()
  useEffect(()=>{
    setValue("name",state.name)
    setValue("email",state.email)
    setValue("mobile",state.mobile)
    setValue("designation",state.designation)
    setValue("companyName",state.companyName)
  },[])
 const saveModifiedEmp = async (modifiedEmp) => {
  const res = await axios.put(`http://localhost:4002/employee-api/edit/${state._id}`,modifiedEmp)
  if (res.status === 200) {
    alert("Employee updated successfully")
    navigate("/list") 
  }
}
  if (!state) {
  return <p className="text-center text-red-500">No employee data found</p>
}
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-md shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">Edit Employee</h1>
      <form onSubmit={handleSubmit(saveModifiedEmp)} className="grid gap-5">
        <label className="block">
          <span className="text-sm font-medium">Employee Name</span>
          <input
            type="text"
            {...register("name", { required: "Employee name is required" })}
            className="mt-2 w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter employee name"
          />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="mt-2 w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter employee email"
          />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium">Mobile Number</span>
          <input
            type="number"
            {...register("mobile", {
              required: "Mobile number is required",
            })}
            className="mt-2 w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter mobile number"
          />
          {errors.mobile && <p className="text-sm text-red-600 mt-1">{errors.mobile.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium">Designation</span>
          <input
            type="text"
            {...register("designation", { required: "Designation is required" })}
            className="mt-2 w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter designation"
          />
          {errors.designation && <p className="text-sm text-red-600 mt-1">{errors.designation.message}</p>}
        </label>

        <label className="block">
          <span className="text-sm font-medium">Company Name</span>
          <input
            type="text"
            {...register("companyName", { required: "Company Name is required" })}
            className="mt-2 w-full rounded border px-3 py-2 focus:border-blue-500 focus:outline-none"
            placeholder="Enter Company Name"
          />
          {errors.companyName && <p className="text-sm text-red-600 mt-1">{errors.companyName.message}</p>}
        </label>

        <button
          type="submit"
          className="mt-4 inline-flex justify-center rounded bg-green-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  )
}
export default EditEmployee