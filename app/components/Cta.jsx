import React from 'react'

const Cta = () => {
  return (
    <div className='p-10 m-20 bg-[#F5EDEC] rounded-[40px] stroke-4 stroke-orange-50 drop-shadow-md'>
        <div className='flex flex-col justify-center items-center gap-[32px]'>
        <div className="bg-primary rounded-[20px] text-[17px] w-fit drop-shadow-sm px-4 py-1">Take the First Step Toward Efficiency</div>
        <h1 className="text-5xl font-bold">Let’s Discuss Your Marketing Needs</h1>
            <p className="text-md leading-[35px] opacity-75">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="bg-accent text-primary px-10 py-3 rounded-2xl w-fit font-bold">
              Read More
            </button>
        </div>
    </div>
  )
}

export default Cta