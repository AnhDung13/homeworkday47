import React from 'react'
export default function Clients2() {
  return (
    <section className='px-8 py-28'>
      <div className="container mx-auto">
        <div className="text-center">
            <p className='text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12 mb-4'>
            POPULAR CLIENTS
            </p>
            <h1 className="text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">Trusted by over 10,000+
            clients</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <img className='w-40 h-full grayscale opacity-75' src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-coinbase.svg" alt="" />
          <img className='w-40 h-full grayscale opacity-75' src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-spotify.svg" alt="" />
          <img className='w-40 h-full grayscale opacity-75' src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-pinterest.svg" alt="" />
          <img className='w-40 h-full grayscale opacity-75' src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-google.svg" alt="" />
          <img className='w-40 h-full grayscale opacity-75' src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-amazon.svg" alt="" />
          <img className='w-40 h-full grayscale opacity-75' src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/logos/logo-netflix.svg" alt="" />
        </div>
      </div>
    </section>
  )
}   