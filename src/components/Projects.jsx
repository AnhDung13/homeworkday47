import React from 'react'

export default function Projects() {

  const items = [
    {
        imgSrc: 'src/img/blog1.svg',
        title: 'Mobile App Development',
        content: 'Mobile app designed to help users discover and explore local restaurants and cuisines.',
    },
    {
        imgSrc: 'src/img/blog2.svg',
        title: 'Landing Page Development',
        content: 'Promotional landing page for a fitness website Summer Campaign. Form development included.',
    },
    {
        imgSrc: 'src/img/blog3.svg',
        title: 'Mobile App Development',
        content: 'Mobile app designed to help users discover and explore local restaurants and cuisines.',
    },
    {
        imgSrc: 'src/img/blog4.svg',
        title: 'E-commerce development',
        content: 'Ecommerce website offering access to the latest and greatest gadgets and accessories.',
    },
    {
        imgSrc: 'src/img/blog1.svg',
        title: 'Mobile App Development',
        content: 'Mobile app designed to help users discover and explore local restaurants and cuisines.',
    },
    {
        imgSrc: 'src/img/blog2.svg',
        title: 'Landing Page Development',
        content: 'Promotional landing page for a fitness website Summer Campaign. Form development included.',
    },
    {
        imgSrc: 'src/img/blog3.svg',
        title: 'Mobile App Development',
        content: 'Mobile app designed to help users discover and explore local restaurants and cuisines.',
    },
    {
        imgSrc: 'src/img/blog4.svg',
        title: 'E-commerce development',
        content: 'Ecommerce website offering access to the latest and greatest gadgets and accessories.',
    },
  ]

  return (
    <section className='py-28 px-8'>
        <div className="container mx-auto mb-20 text-center">
            <h1 className="text-5xl font-semibold leading-tight text-blue-gray-900 mb-4">My Projects</h1>
            <p className='text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12'>
            Whether you have a mobile app idea that needs to come to life or a website that requires a facelift, I'm here to turn your digital dreams into reality.
            </p>
        </div>
        <div className='container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4'>
            {items.map(({imgSrc, title, content})=>
                <div className='flex flex-col text-gray-700'>
                    <img src={imgSrc} alt="" className='h-full w-full object-cover'/>
                    <a href="#" className='text-blue-gray-900'>
                        <h3 className='text-xl font-semibold leading-snug text-inherit mb-2'>{title}</h3>
                    </a>
                    <p className='leading-relaxed text-inherit mb-6 font-normal !text-gray-500'>{content}</p>
                    <button className='font-bold text-center uppercase text-xs py-2 px-4 rounded-lg bg-gray-900 text-white w-fit'>see details</button>
                </div>
            )}
        </div>
    </section>
  )
}
