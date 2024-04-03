import person1 from '../assets/person1.svg'
import person2 from '../assets/person2.svg'
import person3 from '../assets/person3.svg'

const reviews = () => {
  return (
    <div className=" mt-11 w-full sm:mt-20">
      <h1 className="mx-[7%] text-[#4475F2] text-[10px] sm:text-[15px] font-bold">
        REVIEWS
      </h1>
      <p className="mx-[7%] text-[5vw] sm:text-[4vw] lg:text-[3.5vw] font-extrabold">
        💬• Reviews of Others
      </p>

      <div className=" flex flex-col sm:my-10 sm:flex-row w-full items-center sm:justify-between">
        <div className='mx-[7%] my-8 flex flex-col items-center border border-[#DEDEDE] shadow-lg px-6 sm:mr-0 sm:px-2 lg:px-5'>
            <img src={person1} alt="" className='w-28 my-7 sm:w-20' />
            <p className='text-center text-[13px] mb-3 text-[#5E6282] sm:text-[1.5vw] lg:text-[15px]'>Engaging plot, vivid characters;  <br />a captivating read that <br />lingers in your thoughts.</p>
            <p className='text-center text-[13px] mb-3 text-[#23A6F0] sm:text-[1.5vw] lg:text-[15px]'>Ahmad Saugi</p>
            <p className='text-center text-[13px] mb-7 text-[#181E4B] sm:text-[1.5vw] lg:text-[15px]'>College Student</p>
        </div>

        <div className='mx-[7%] my-8 flex flex-col items-center border border-[#DEDEDE] shadow-lg px-6 sm:mx-[7px] lg:px-5'>
            <img src={person2} alt="" className='w-28 my-7 sm:w-20' />
            <p className='text-center text-[13px] mb-3 text-[#5E6282] sm:text-[1.5vw] lg:text-[15px]'>Thought-provoking narrative <br />and rich prose. A must-read for <br />any avid book lover!</p>
            <p className='text-center text-[13px] mb-3 text-[#23A6F0] sm:text-[1.5vw] lg:text-[15px]'>Muhammad Alfian</p>
            <p className='text-center text-[13px] mb-7 text-[#181E4B] sm:text-[1.5vw] lg:text-[15px]'>School Student</p>
        </div>  

        <div className='mx-[7%] my-8 flex flex-col items-center border border-[#DEDEDE] shadow-lg px-6 sm:ml-0 lg:px-5'>
            <img src={person3} alt="" className='w-28 my-7 sm:w-20' />
            <p className='text-center text-[13px] mb-3 text-[#5E6282] sm:text-[1.5vw] lg:text-[15px]'>Immersive storytelling! <br />An enriching literary experience <br />worth savoring and sharing.</p>
            <p className='text-center text-[13px] mb-3 text-[#23A6F0] sm:text-[1.5vw] lg:text-[15px]'>Wahyu Amirulloh</p>
            <p className='text-center text-[13px] mb-7 text-[#181E4B] sm:text-[1.5vw] lg:text-[15px]'>ERP Developer</p>
        </div>    
      </div>
    </div>
  )
}

export default reviews
