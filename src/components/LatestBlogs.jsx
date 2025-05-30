import React from 'react'

function LatestBlogs() {
    const cards = [
        {
            id: 1,
            title: 'How to prioritize tasks without overwhelm',
            date: 'February 23, 2025',
            category: 'Productivity',
            image: 'images/blog/blog1.jpg'
        },
        {
            id: 2,
            title: 'The best Clara features that save you hours',
            date: 'February 23, 2025',
            category: 'Company',
            image: 'images/blog/blog2.jpg'
        },
        {
            id: 3,
            title: 'How AI can streamline your workflow instantly',
            date: 'February 23, 2025',
            category: 'Automation',
            image: 'images/blog/blog3.jpg'
        }
    ]

    return (
        <section className='w-full bg-[#f1f7f3] py-32'>
            <div className="container mx-auto">
                <h2 className='text-center font-[900] text-[3rem] md:text-[4rem] text-[#013539] leading-[1.1] w-full'>
                    Latest from the blog
                </h2>

                <div className="mt-6 flex items-center flex-wrap">
                    {cards.map((item) => (
                        <div className="w-full md:w-1/2 lg:w-1/3 p-3" key={item.id}>
                            <div className="bg-white rounded-[2rem] w-full p-2 border border-white transition2 hover:border-[#066f7629] cursor-pointer">
                                <img src={item.image} alt="" className='aspect-[4.2/2.7] rounded-[1.5rem]' />

                                <div className="mt-3 p-4">
                                    <a href="#" className='text-[1.5rem] font-[800] leading-[1.2]'>
                                        {item.title}
                                    </a>

                                    <div className="mt-2 flex items-center gap-4">
                                        <div className="text-[.875rem] px-3 py-1 border border-[#066f7629] text-[#066f76] rounded-full">
                                            <p className="mt-[1px]">{item.category}</p>
                                        </div>
                                        <span className='text-[.875rem] text-[#013539cc] font-medium'>
                                            {item.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 w-full flex justify-center">
                    <a href="https://aliakbarnazemi.ir" target='_blank' rel='noreferrer' className='z-50'>
                        <button className='py-[1rem] px-[1.5rem] rounded-xl bg-[#a3e96a] border border-[#a3e96a] text-[#013539] z-50'>
                            View blog
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default LatestBlogs