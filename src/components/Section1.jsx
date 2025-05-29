import React from 'react'

function Section1() {
    return (
        <section className='w-full bg-[#f1f7f3] mt-32 py-32'>
            <div className="container mx-auto px-4 sm:px-0">
                <div className="flex items-center lg:flex-row flex-col gap-8 lg:gap-0">
                    <img src="images/sec1image1.avif" alt="" className='w-full h-full rounded-[3rem] lg:w-1/2' />
                    <div className="lg:p-[4rem] w-full lg:w-auto">
                        <div className="px-[1rem] py-[0.5rem] rounded-[0.5rem] border border-[#066f7629] text-[1rem] text-[#013539] w-[fit-content]">
                            <div className="div mt-[2px]">
                                How it works
                            </div>
                        </div>
                        <div className="mb-8 mt-6">
                            <h2 className='text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-[800] leading-[1.1] text-[#2c2c2c] w-full'>
                                Organize, automate and get things done
                            </h2>
                        </div>
                        <div className="w-full flex flex-col gap-8">
                            <div className="flex gap-4">
                                <div className="flex justify-center items-center rounded-[0.75rem] bg-white !h-[40px] !w-[40px] min-w-[39px]">
                                    <img src="images/icons/list21.svg" alt="" />
                                </div>
                                <div className="flex gap-1 flex-col">
                                    <p className='text-[1.25rem] font-[800] text-[#2c2c2c]'>
                                        Create tasks and projects
                                    </p>
                                    <span className='text-[#013539cc] font-medium text-[1.125rem]'>
                                        Quickly add tasks, set priorities and organize projects.
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex justify-center items-center rounded-[0.75rem] bg-white !h-[40px] !w-[40px] min-w-[39px]">
                                    <img src="images/icons/star1.svg" alt="" />
                                </div>
                                <div className="flex gap-1 flex-col">
                                    <p className='text-[1.25rem] font-[800] text-[#2c2c2c]'>
                                        Let AI organize and prioritize
                                    </p>
                                    <span className='text-[#013539cc] font-medium text-[1.125rem]'>
                                        Clara intelligently sorts your tasks and schedules them.
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex justify-center items-center rounded-[0.75rem] bg-white !h-[40px] !w-[40px] min-w-[39px]">
                                    <img src="images/icons/tick1.svg" alt="" />
                                </div>
                                <div className="flex gap-1 flex-col">
                                    <p className='text-[1.25rem] font-[800] text-[#2c2c2c]'>
                                        Stay focused and productive
                                    </p>
                                    <span className='text-[#013539cc] font-medium text-[1.125rem]'>
                                        Get smart reminders and avoid distractions.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-12 w-full bg-c1 rounded-[3rem] p-[4rem] relative z-50">
                    <div className="flex lg:flex-row flex-col gap-12 lg:gap-0 items-center justify-between">
                        <div className="w-full lg:w-[60%] xl:w-[40%] h-[30p]">
                            <h2 className='text-[3rem] font-[800] text-white leading-[1.3]'>
                                Boost your productivity today with Clara
                            </h2>
                        </div>
                        <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='z-50'>
                            <button className='py-[1rem] px-[1.5rem] rounded-xl bg-[#a3e96a] border border-[#a3e96a] text-[#013539] z-50'>
                                Get started for free
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1

// #2b8c73

// #9de56b