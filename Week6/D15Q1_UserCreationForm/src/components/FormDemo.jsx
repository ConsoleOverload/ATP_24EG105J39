import {useForm} from 'react-hook-form'

function FormDemo(){
    const {
        register,//To register form fields
        handleSubmit,//To handle for submission
        formState:{errors}//To handle validations
    } = useForm()
    //Form submit function
    const onFormSubmit =(obj)=>{
        console.log(obj)
    }
    return(
        <div>
            <h1 className='text-center text-5xl'>Form Demo</h1>
            {/** Form demo */}
            <form className='max-w-md mx-auto mt-10'
                onSubmit={handleSubmit(onFormSubmit)}>
                {/* Username */}
                <div className='mb-3'>
                    <label htmlFor='username'>Username</label>
                    <input type='text'
                        {...register('username',{
                            required: 'Username required',
                            validate:(v)=>v.trim().length!==0 || "White space is not valid"
                            // minLength:4
                        })}
                        id='Username'
                        className='border w-full p-3' />
                        {/* Username validation error message */}
                        {errors.username?.type==='required' && <p className='text-red-500'>{errors.username.message}</p>}
                        {/* {
                            errors.username?.type==='minLength' && <p className='text-red-500'>Minimum length of 4 characters is required</p>
                        } */}
                        {errors.username?.type==='validate'&& <p className='text-red-500'>{errors.username.message}</p>}
                </div>
                {/* Email */}
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                        {...register('Email')}
                        id='Email'
                        className='border w-full p-3' />
                </div>
                {/* Submit */}
                <div className='mb-3'>
                    <button type ='submit' className='bg-amber-400 p-4 mx-auto block' >Login</button>
                </div>
            </form>
        </div>
        
    )
}
export default FormDemo