import React from 'react'
import EditCounter1 from './EditCounter1'
import EditCounter2 from './EditCounter2'
import EditCounter3 from './EditCounter3'
import EditCounter4 from './EditCounter4'
function RootLayout() {
  return (
    <div className='text-center'> APP
    <div className='flex justify-around min-h-screen bg-pink-700 w-100% m-5 p-10'>
        <EditCounter1 />
        <EditCounter2 />
        <EditCounter3 />
        <EditCounter4 />
    </div>
    </div>
  )
}

export default RootLayout