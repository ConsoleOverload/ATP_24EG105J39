import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router"
function CreateEmp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onFormSubmit = async (newEmpObj) => {
    console.log("New employee newEmpObj:", newEmpObj)
    setLoading(true)
    setError(null)
    try {
        let res = await fetch('http://localhost:4002/employee-api/create', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj)
      })
      if (res.status === 201) {
        alert("Employee submitted successfully")
        setLoading(false)
        navigate("/list")
      } else {
        throw new Error("Failed to submit")
      }
    } catch (err) {
      setLoading(false)
      setError("Failed to submit employee. Please try again.")
      console.error("Error submitting employee:", err)
    }
  }

  if (loading) {
    return <p className="text-center text-4xl">Loading...</p>
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>
  }

  return (
    
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-md shadow-lg">
      
      <h1 className="text-3xl font-semibold mb-6 text-center">Create Employee</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} className="grid gap-5">
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
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
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
          className="mt-4 inline-flex justify-center rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Submit Employee
        </button>
      </form>
    </div>
  )
}

export default CreateEmp