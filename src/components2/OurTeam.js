import React from 'react'

function OurTeam() {
  return (
    <div className='w-full text-center overflow mb-10'>
        <div>
            <h1 className='text-3xl tracking-wider pt-6 font-semibold'>Our Team</h1>
        </div>
        <div className='flex justify-evenly flex-wrap px-6 md:px-10 mt-8'>
            <div className='hover:shadow-lg my-2 w-[250px]'>
                <div className='productCard w-full h-full border-2 border-re-500'>
                    <img src={process.env.PUBLIC_URL + 'images/shafiq.jpg'} className='team-member-image' alt=''/>
                    <span className='team-members'>Mss. Wendy Toyan</span>
                    <span className='team-member-position'>Designer and Inventor Specialist</span>
                </div>
            </div>
            <div className='hover:shadow-lg my-2 w-[250px]'>
                <div className='productCard  w-full h-full'>
                    <img src={process.env.PUBLIC_URL + 'images/team2.jpg'} className='team-member-image' alt=''/>
                    <span className='team-members'>Ms. Moya Mollvie</span>
                    <span className='team-member-position'>Custormer Support Specialist</span>
                </div>
            </div>
            <div className='hover:shadow-lg my-2 w-[250px]'>
                <div className='productCard w-full h-full'>
                    <img src={process.env.PUBLIC_URL + 'images/team4.jpg'} className='team-member-image' alt=''/>
                    <span className='team-members'>Mr. Jone Smite</span>
                    <span className='team-member-position'>Chief Officer</span>
                </div>
            </div>
            <div className='hover:shadow-lg my-2 w-[250px]'>
                <div className='productCard w-full h-full'>
                    <img src={process.env.PUBLIC_URL + 'images/team3.jpg'} className='team-member-image' alt=''/>
                    <span className='team-members'>Mr. Bandy Molvie</span>
                    <span className='team-member-position'>Sceneior Developer</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam