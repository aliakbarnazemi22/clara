import React from 'react'

function Section2() {
    return (
        <section className='w-full min-h-[700px]  bg-[#013539] flex justify-center items-center flex-col gap-8'>
            <img src="images/icons/quote-mark.svg" alt="" />
            <h3 className='text-white text-[1.5rem] lg:text-[2.5rem] font-bold text-center w-[85%] lg:w-[55%] lg:leading-[1.25]'>
                Clara has completely changed the way I stay organized and get things done. Would highly recommend to anyone looking to boost productivity effortlessly!
            </h3>
            <div className="flex items-center gap-4">
                <img src="images/sec2.avif" alt="" className='w-[46px] h-[46px] border border-[#a3e96a] rounded-[1rem]'/>
                <div className="flex flex-col ">
                    <p className='text-white font-[600]'>
                        Carter Lee
                    </p>
                    <span className='font-medium text-[0.875rem] text-[#fffc]'>
                        Freelance writer
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Section2