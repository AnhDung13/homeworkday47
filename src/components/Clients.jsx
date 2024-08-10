import React from 'react'
export default function Clients() {
  return (
    <section className='px-8 py-28'>
      <div className="container mx-auto">
        <h6 className='text-center text-base font-bold leading-relaxed text-blue-gray-900 mb-8'>My awesome clients</h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img className='w-40 h-full' src="src/img/logo-coinbase.svg" alt="" />
          <img className='w-40 h-full' src="src/img/logo-spotify.svg" alt="" />
          <img className='w-40 h-full' src="src/img/logo-pinterest.svg" alt="" />
          <img className='w-40 h-full' src="src/img/logo-google.svg" alt="" />
          <img className='w-40 h-full' src="src/img/logo-amazon.svg" alt="" />
          <img className='w-40 h-full' src="src/img/logo-netflix.svg" alt="" />
        </div>
      </div>
    </section>
  )
}
