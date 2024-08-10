import React from 'react'

export default function Hero() {
  return (
    <section className='bg-white p-8 mt-[5rem]'>
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8 items-center">
                <div className='row-start-2 row-span-2 lg:row-start-auto'>
                    <h1 className='leading-tight text-5xl font-bold mb-4'>Welcome to my Web Development Portofolio!</h1>
                    <p className='leading-relaxed text-xl text-gray-500 mb-4 md:pr-16 xl:pr-28'>I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.</p>
                    <form action="">
                        <p className='text-sm mb-2'>Your email</p>
                        <div className='mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row mb-2'>
                            <input type="text" className='p-3 border rounded-md h-full w-2/3' placeholder='Enter your email'/>
                            <button className='font-semibold text-sm text-white uppercase bg-black px-5 py-3 rounded-md'>require offer</button>
                        </div>
                    </form>
                    <p className='text-sm text-gray-400'>Read my <a href="#" className='underline'>Term and Conditions</a></p>
                </div>
                <img src="https://demos.creative-tim.com/nextjs-tailwind-portfolio-page/image/image-7.svg" className='w-full rounded-xl object-cover h-[36rem]' alt="" />
            </div>
        </div>
    </section>
  )
}
