import React from 'react'

function Section3() {
    return (
        <section className='container mx-auto my-32 flex xl:justify-between xl:items-center xl:flex-row flex-col gap-12 xl:gap-0 px-4 sm:px-0' dir='ltr'>
            <img src="images/sec3.svg" alt="" className='rounded-[3rem] block xl:hidden w-full' />
            <div className="xl:p-[4rem] h-full">
                <div className="px-[1rem] py-[0.5rem] rounded-[0.5rem] border border-[#066f7629] text-[1rem] text-[#013539] w-[fit-content]">
                    <div className="div mt-[2px]">
                        Integrations
                    </div>
                </div>

                <div className="mb-8 mt-6">
                    <h2 className='text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-[800] leading-[1.1] text-[#2c2c2c] w-full xl:w-[70%]'>
                        Seamless workflows across all your apps
                    </h2>

                    <div className="mt-5 w-full xl:w-[70%]">
                        <span className='text-[#013539cc] font-medium text-[1.125rem]'>
                            Clara connects with the tools you already use – such as Slack, Notion, Google Workspace and more – keeping your work synced and streamlined.
                        </span>
                    </div>

                    <br />
                    <br className='hidden xl:block'/>

                    <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='z-50'>
                        <button className='py-[1rem] px-[1.5rem] rounded-xl bg-[#a3e96a] border border-[#a3e96a] text-[#013539] z-50'>
                            View integrations
                        </button>
                    </a>
                </div>
            </div>
            <img src="images/sec3.svg" alt="" className='rounded-[3rem] hidden xl:block' />
        </section>
    )
}

export default Section3