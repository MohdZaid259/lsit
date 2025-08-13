import React from 'react'
import { termsOfService } from '../../../public/footer'

function page() {
  return (
    <div className='mx-2 md:mx-16 my-4'>
      <h1 className='font-bold text-3xl mb-4'>Terms of Service</h1>
      <div dangerouslySetInnerHTML={{ __html: termsOfService }} />
    </div>
  )
}

export default page