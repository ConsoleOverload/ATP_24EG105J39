import { useForm } from "react-hook-form";
import { useState } from "react";
/**Create User Form
 * firstname
 * email
 * dob
 * 
 * Then Display the list of users
 * firstname    email   dob
 */
function UserForm1(){
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm()
    let [users,setUsers]=useState([])
    const onFormSubmit =(obj)=>{
        console.log(obj)
        setUsers([...users, obj]);
    }
    return(
        <div>
            <div className="border-4 max-w-md mx-auto mt-10 p-5 bg-orange-400">
                <h1 className='text-center text-5xl'>User Form</h1>
                {/** User form*/}
                <form className='max-w-md mx-auto mt-10'
                    onSubmit={handleSubmit(onFormSubmit)}>
                    {/* FirstName */}
                    <div className='mb-3'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text'
                            {...register('firstName',{
                                required: 'firstName required',
                                validate:(v)=>v.trim().length!==0 || "White space is not valid"
                            })}
                            id='firstName'
                            className='border w-full p-3' />
                            {/* firstName validation error message */}
                            {errors.firstName?.type==='required' && <p className='text-red-500'>{errors.firstName.message}</p>}
                            {errors.firstName?.type==='validate'&& <p className='text-red-500'>{errors.firstName.message}</p>}
                    </div>
                    {/* Email */}
                    <div className='mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='text'
                            {...register('email',{
                                required: 'email is required',
                                validate:(v)=>v.trim().length!==0 || "White space is not valid"
                            })}
                            id='email'
                            className='border w-full p-3' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                        <input type='date'
                            {...register('dateOfBirth',{
                                required:'Date of birth is required',
                                validate:(v)=>v.trim().length!==0 || "White space is not valid"
                            })}
                            id='dateOfBirth'
                            className="border w-full p-3" />
                    </div>
                    {/* Add User */}
                    <div className='mb-3'>
                        <button type ='submit' className='bg-pink-700 p-4 mx-auto block' >Add User</button>
                    </div>
                </form>
            </div>{/* Table to display List of Users */}
                <table className="mt-5 border mx-auto text-3xl">
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((userObj, index) => (
                            <tr key={index}>
                            <td>{userObj.firstName}</td>
                            <td>{userObj.email}</td>
                            <td>{userObj.dateOfBirth}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>   
    )
}
export default UserForm1;