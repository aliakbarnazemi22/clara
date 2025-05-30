import React from 'react'

function DownHeroSection() {
    return (
        <section className='container mx-auto my-24'>
            <div className="p-4 md:p-24 w-full md:w-[70%] mx-auto">
                <h2 className='text-center font-[900] text-[3rem] md:text-[4rem] text-[#013539] leading-[1.2]'>
                    Smarter productivity with less effort
                </h2>
            </div>

            <div className="px-3">
                <div className="container mx-auto p-4 bg-[#f1f7f3] rounded-[3rem] flex items-center flex-col gap-6 lg:gap-0 lg:flex-row">
                    <img src="images/dhs1.avif" alt="" className='rounded-[2rem] w-full lg:w-1/2' />

                    <div className="lg:p-[4rem] p-[1rem]">
                        <h3 className='text-[2rem] md:text-[3rem] font-[800] text-[#013539] leading-[1.2]'>
                            Automated task management
                        </h3>
                        <p className="my-3 text-[#013539] font-medium w-[80%]">
                            Stay organized without the hassle. Clara intelligently sorts your tasks, sets priorities and automates workflows so you can focus on what matters most.
                        </p>
                        <br />
                        <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='mt-6'>
                            <button className='py-[1rem] px-[1.5rem] rounded-xl bg-[#a3e96a] border border-[#a3e96a] text-[#013539]'>
                                Get started for free
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center flex-wrap">
                <div className="py-2 px-3 w-full sm:w-1/2 lg:w-1/4">
                    <div className="w-full p-6 bg-[#f1f7f3] rounded-[2rem] min-h-[300px]">
                        <div className="bg-white rounded-lg p-3 w-[fit-content]">
                            <img src="images/icons/notif1.svg" alt="" />
                        </div>
                        <br />
                        <br />
                        <p className='text-[1.5rem] font-[800] text-[#013539] line-clamp-2'>
                            Smart scheduling and reminders
                        </p>
                        <div className="h-[5px]"></div>
                        <span className="text-lg text-[#013539cc] font-medium line-clamp-2">
                            Get automatic reminders and schedule tasks effortlessly.
                        </span>
                    </div>
                </div>
                <div className="py-2 px-3 w-full sm:w-1/2 lg:w-1/4">
                    <div className="w-full p-6 bg-[#f1f7f3] rounded-[2rem] min-h-[300px]">
                        <div className="bg-white rounded-lg p-3 w-[fit-content]">
                            <img src="images/icons/list1.svg" alt="" />
                        </div>
                        <br />
                        <br />
                        <p className='text-[1.5rem] font-[800] text-[#013539] line-clamp-2'>
                            AI-powered meeting notes
                        </p>
                        <div className="h-[5px]"></div>
                        <span className="text-lg text-[#013539cc] font-medium line-clamp-2">
                            Turn conversations into actionable notes instantly.
                        </span>
                    </div>
                </div>
                <div className="py-2 px-3 w-full sm:w-1/2 lg:w-1/4">
                    <div className="w-full p-6 bg-[#f1f7f3] rounded-[2rem] min-h-[300px]">
                        <div className="bg-white rounded-lg p-3 w-[fit-content]">
                            <img src="images/icons/tick1.svg" alt="" />
                        </div>
                        <br />
                        <br />
                        <p className='text-[1.5rem] font-[800] text-[#013539] line-clamp-2'>
                            Distraction-free deep focus mode
                        </p>
                        <div className="h-[5px]"></div>
                        <span className="text-lg text-[#013539cc] font-medium line-clamp-2">
                            Block distractions and stay in deep work longer.
                        </span>
                    </div>
                </div>
                <div className="py-2 px-3 w-full sm:w-1/2 lg:w-1/4">
                    <div className="w-full p-6 bg-[#f1f7f3] rounded-[2rem] min-h-[300px]">
                        <div className="bg-white rounded-lg p-3 w-[fit-content]">
                            <img src="images/icons/users1.svg" alt="" />
                        </div>
                        <br />
                        <br />
                        <p className='text-[1.5rem] font-[800] text-[#013539] line-clamp-2'>
                            Effortless team collaboration
                        </p>
                        <div className="h-[5px]"></div>
                        <span className="text-lg text-[#013539cc] font-medium line-clamp-2">
                            Keep your team in sync without the back-and-forth.
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full">
                <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='mt-6'>
                    <button className='py-[1rem] px-[1.5rem] rounded-xl bg-[#a3e96a] border border-[#a3e96a] text-[#013539]'>
                        Explore Features
                    </button>
                </a>
            </div>
        </section>
    )
}

export default DownHeroSection