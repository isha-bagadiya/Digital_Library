import logo from '../assets/Logo.svg'
import twitter from '../assets/Vector.svg'
import instagram from '../assets/Instagram.svg'
import facebook from '../assets/Facebook.svg'

const footer = () => {
  return (
    <div>
      <div className='flex items-start justify-around w-[70%] sm:w-[40%] lg:w-[30%] m-auto py-3'>
        <div className='flex flex-col items-center'>
            <p className='text-[10px] font-bold'>Managed By</p>
            <img src={logo} alt="" className='w-16'/>
        </div>

        <div className='flex flex-col items-center'>
            <p className='text-[10px] font-bold'>Social Media</p>
            <div className='flex mt-1'>
                <img src={twitter} alt="" className='w-4 mr-1'/>
                <img src={instagram} alt="" className='w-4' />
                <img src={facebook} alt="" className='w-4 ml-[2px]'/>
            </div>
        </div>

        <div className='flex flex-col items-center'>
            <p className='text-[10px] font-bold'>Slogan</p>
            <p className='text-[8px] mt-[7px]'>#RentFavBooks</p>
        </div>
      </div>
      <div className='bg-[#4475F2]'>
        <p className='text-center py-4 text-[10px] text-white'>© 2024 Lidia. All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer
