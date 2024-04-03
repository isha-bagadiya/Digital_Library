import cover from "../assets/Cover.svg";
import books from "../assets/Left.svg";

function hero() {
  return (
    <div className='-mt-[70px] flex flex-col-reverse sm:flex-row'>
      <div className="left mx-[7%] sm:mr-0 sm:mt-[12%] lg:mt-[10%]">
        <h1 className='text-[10vw] sm:text-[4vw] font-extrabold leading-snug'>Search & review <br/>your <span className='text-[#4475F2] underline decoration-[1.3px] underline-offset-8'>fav book </span> <br/> effortlessly</h1>
        <p className='text-[3.5vw] mt-4 sm:text-[1.5vw] w-full text-justify'>Embark on a literary journey like never before with our revolutionary library application! Introducing a seamless experience that transcends traditional boundaries, where  you can effortlessly search your favorite books.✨</p>
        <button className='mt-4 px-8 py-[8px] bg-[#4475F2] rounded-lg text-white cursor-pointer'>Start now →</button>
      </div>
      <div className="right">
      <div className="w-[82%] sm:w-[55vw] float-right top-0">
        <img src={cover} alt="right" className='float-right'/>
      </div>
      <div className='w-[58vw] sm:w-[40vw] z-10 absolute top-[11%] sm:top-[14%] right-[17%] sm:right-[10%] lg:top-[23%]'>
        <img src={books} alt="books" className='w-[100%]'/>
      </div>
      </div>
    </div>
  )
}

export default hero
