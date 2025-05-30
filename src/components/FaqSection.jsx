import React, { useState } from 'react'

function FaqSection() {
    const [accordion, setAccordion] = useState(0);
    const cards = [
        {
            id: 1,
            title: 'How do I get started with Clara?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            id: 2,
            title: 'Can I use Clara for free?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            id: 3,
            title: 'How does Clara use AI to improve productivity?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            id: 4,
            title: 'What apps does Clara integrate with?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            id: 5,
            title: 'Does Clara work for teams and individuals?',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ]
    return (
        <section className='container mx-auto my-24 flex flex-col justify-center items-center gap-6 px-4 sm:px-0'>
            <div className="px-[1rem] py-[0.5rem] rounded-[0.5rem] border border-[#066f7629] text-[1rem] text-[#013539] w-[fit-content]">
                <div className="div mt-[2px]">
                    FAQ
                </div>

            </div>
            <h2 className='text-center font-[900] text-[2rem] md:text-[4rem] text-[#013539] leading-[1.1] lg:w-[40%] w-full'>
                Get answers to common questions
            </h2>

            <div className="div flex flex-col gap-4 items-center justify-center w-full">
                {cards.map((item) => (
                    <div id={item.id} className={accordion === item.id ? "accordion cursor-pointer border border-[#066f7629] p-[1rem] rounded-[1rem] w-[95%] lg:w-[60%] transition2 bg-[#f1f7f3]" : "transition2 bg-white accordion cursor-pointer border border-[#066f7629] p-[1rem] rounded-[1rem] w-[95%] lg:w-[60%]"} onClick={() => setAccordion(item.id)}>
                        <div className="flex justify-between items-center">
                            <h3 className='text-[16px] md:text-[1.25rem] font-[800]'>
                                {item.title}
                            </h3>

                            <button className="border border-[#066f7629] min-w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center">
                                {accordion === item.id ? <img src="images/icons/plus1.svg" alt="" className='rotate-45 transition2'/> : <img src="images/icons/plus1.svg" alt="" className='transition2 rotate-0'/>}
                            </button>
                        </div>

                        {accordion === item.id ? <div className='w-full transition2'>
                            <div className='py-4 text-[#013539cc] font-medium'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, suscipit nemo. Ea quod assumenda maiores praesentium nostrum, nam nemo cum quia, beatae facere, numquam unde quam delectus sint accusantium voluptates.
                            </div>
                        </div> : <div className='transition2 w-full h-[2px]'>
                        </div>}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FaqSection