import React, { useState } from 'react'

function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <header className='container mx-auto py-9 border-b border-b-[#066f7629] text-white px-4'>
            <div className="w-full hidden lg:flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <a href="#">
                        <img src="./images/logo/logo2.svg" alt="" />
                    </a>

                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        Features
                    </a>
                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        Integrations
                    </a>
                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        Pricing
                    </a>
                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        Blog
                    </a>
                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        About
                    </a>

                </div>
                <div className="div">
                    <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer'>
                        <button className='py-[1rem] px-[1.5rem] rounded-xl bg-[#a3e96a] border border-[#a3e96a] text-[#013539]'>
                            My CV
                        </button>
                    </a>
                </div>
            </div>
            <div className="w-full flex lg:hidden justify-between items-center">
                <div className="flex items-center gap-8">
                    <a href="#">
                        <img src="images/logo/logo2.svg" alt="" />
                    </a>
                </div>
                <div className="div">
                    {menu === false ? <button onClick={() => setMenu(true)} className='w-[56px] h-[56px] flex flex-col justify-center items-center gap-2 rounded-xl bg-[#024246] border border-[#024246] text-[#066f76]'>
                        <div className="w-[28px] rounded-lg h-[2px] bg-[#066f76]"></div>
                        <div className="w-[28px] rounded-lg h-[2px] bg-[#066f76]"></div>
                    </button> : <button onClick={() => setMenu(false)} className='w-[56px] h-[56px] flex flex-col justify-center items-center gap-2 rounded-xl bg-[#024246] border border-[#024246] text-[#066f76]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#066f76" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>}
                </div>
            </div>

            {menu === false ? <div></div> : <div className='absolute top-28 left-0 right-0 w-full h-full bg-[#013539] z-50'>
                <div className="flex flex-col items-center gap-7 px-4">
                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        Features
                    </a>
                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        Integrations
                    </a>
                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        Pricing
                    </a>
                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        Blog
                    </a>
                    <a href="#" className='text-white text-[16px] font-[400] transition hover:text-[#a3e96a]'>
                        About
                    </a>
                    <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='w-full'>
                        <button className='py-[1rem] w-full px-[1.5rem] rounded-xl bg-[#a3e96a] border border-[#a3e96a] text-[#013539]'>
                            My CV
                        </button>
                    </a>
                </div>
            </div>}
        </header>
    )
}

export default Header