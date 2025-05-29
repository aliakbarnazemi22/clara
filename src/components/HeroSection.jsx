import React from 'react'

function HeroSection() {
  return (
    <section className='container mx-auto px-6 py-6 sm:py-12 flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-12'>
      <div className="lg:w-1/2 w-full lg:block flex flex-col items-center">
        <div className="py-[8px] px-[16px] border border-[#066f7629] rounded-[8px] w-[fit-content] text-white text-lg font-[600]">
          AI-powered productivity
        </div>
        <h2 className='md:text-[4rem] sm:text-[3rem] text-[2rem] text-center lg:text-start xl:text-[5rem] font-[800] leading-[1.1] text-white tracking-tight w-full lg:w-[70%] mt-4'>
          Work smarter, finish faster
        </h2>
        <p className='mt-4 text-center lg:text-start md:text-lg text-[16px] font-[400] text-white w-[75%]'>
          Take control of your tasks, automate workflows and stay focused with our all-in-one AI-driven platform.
        </p>
        <br />
        <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='mt-6'>
          <button className='py-[1rem] px-[1.5rem] rounded-xl bg-[#a3e96a] border border-[#a3e96a] text-[#013539]'>
            Get started for free
          </button>
        </a>

        <div className="bg-[#024246] py-[6px] pl-2 pr-5 rounded-[100vw] w-[fit-content] mt-4 text-white text-[.875rem] font-medium flex items-center gap-0">
          <div className="relative w-[140px] h-[40px] flex items-center gap-2">
            <img src="images/heroimages/item1.avif" className='w-[40px] h-[40px] rounded-full border-[3px] border-[#024246] absolute left-0' alt="" />
            <img src="images/heroimages/item2.avif" className='w-[40px] h-[40px] rounded-full border-[3px] border-[#024246] absolute left-[30px]' alt="" />
            <img src="images/heroimages/item3.avif" className='w-[40px] h-[40px] rounded-full border-[3px] border-[#024246] absolute left-[60px]' alt="" />
            <img src="images/heroimages/item4.avif" className='w-[40px] h-[40px] rounded-full border-[3px] border-[#024246] absolute left-[90px]' alt="" />
          </div>
          Trusted by 20k+ users
        </div>
      </div>
      <img src="images/heroimage1.avif" className='w-full lg:w-[40%] lg:h-[700px] rounded-[4rem] object-cover' alt="" />
    </section>
  )
}

export default HeroSection