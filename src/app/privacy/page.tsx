import React from 'react'
import { privacyPolicy } from '../../../public/footer'

function page() {
  return (
    <div className='mx-2 md:mx-16 my-4'>
      <h1 className='font-bold text-3xl mb-4'>Privacy Policy</h1>
      <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
    </div>
  )
}

export default page