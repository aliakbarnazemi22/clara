import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="w-full bg-c1 rounded-t-[4rem] flex justify-center flex-col items-center gap-6 py-24 px-6">
                <h2 className='text-center font-[900] text-[3rem] xl:text-[5rem] text-[#FFF] leading-[1.1] w-full lg:w-[50%] xl:w-[40%]'>
                    Start using Clara today for free
                </h2>
                <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='z-50 mt-4'>
                    <button className='py-[1rem] px-[1.5rem] rounded-xl bg-[#a3e96a] border border-[#a3e96a] text-[#013539] z-50'>
                        Get started for free
                    </button>
                </a>
                <p className="text-center text-white">
                    No credit card required
                </p>
            </div>
            <div className="w-full h-auto bg-[#013539] pt-16 pb-6">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <img src="images/logo/logo2.svg" alt="" />

                            <p className='w-1/2 text-[#fffc] text-[1rem] font-medium mt-5'>
                                Clara is a vibrant Webflow CMS template made for startups ready to stand out and scale up.
                            </p>

                            <br />
                            <br />
                            <div className="flex items-center gap-4">
                                <button className='p-3 bg-[#024246] rounded-[0.5rem] border border-[#024246] transition2 hover:border-[#a3e96a]'>
                                    <img src="images/icons/footer/item1.svg" alt="" />
                                </button>
                                <button className='p-3 bg-[#024246] rounded-[0.5rem] border border-[#024246] transition2 hover:border-[#a3e96a]'>
                                    <img src="images/icons/footer/item2.svg" alt="" />
                                </button>
                                <button className='p-3 bg-[#024246] rounded-[0.5rem] border border-[#024246] transition2 hover:border-[#a3e96a]'>
                                    <img src="images/icons/footer/item3.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center gap-16">
                                <div className="w-1/2">
                                    <p className='text-[.875rem] text-[#fffc]'>
                                        Explore
                                    </p>

                                    <div className="mt-6 flex flex-col gap-4">
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Features
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Integrations
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Contact
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Pricing
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Blog
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            About
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Privacy Policy
                                        </a>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <p className='text-[.875rem] text-[#fffc]'>
                                        Template
                                    </p>

                                    <div className="mt-6 flex flex-col gap-4">
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Features
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Integrations
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Contact
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Pricing
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Blog
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            About
                                        </a>
                                        <a href="#" className='text-white text-[18px] font-[500] transition hover:text-[#a3e96a]'>
                                            Privacy Policy
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#7cdcfa14] mt-12">
                    </div>

                    <div className='text-[1rem] text-[#fffc] mt-6'>
                        © Clara Template 2025. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer