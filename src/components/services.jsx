import service1 from "../assets/Service.svg";
import service2 from "../assets/service2.svg";

const services = () => {
  return (
    <div className="mt-11 w-full sm:mt-20">
      <h1 className="mx-[7%] text-[#4475F2] text-[10px] sm:text-[15px] font-bold">
        SERVICES
      </h1>
      <p className="mx-[7%] text-[5vw] sm:text-[4vw] lg:text-[3.5vw] font-extrabold">
        🚀• The Services for You
      </p>

      <div className=" flex flex-col sm:my-12">
        <div className="flex flex-col m-auto sm:flex-row sm:items-start sm:mx-[3%]">
          <img src={service1} alt="" className="mt-5 sm:w-[50%] sm:mt-0" />
          <div>
            <h3 className=" font-[500] mx-[7%] -mt-4 text-[5vw] sm:text-[2.5vw] sm:ml-0 sm:mt-4">
              <span className="text-[#4475F2]">Rent</span> your favorite book{" "}
              <br />
              fairly easy on <span className="text-[#4475F2]">Lidia</span>!
            </h3>
            <p className="text-[3vw] mt-4 mx-[7%] sm:text-[1.5vw] sm:ml-0">
              Viewing, rent, and organize your favorite books has never been
              easier. An integrated digital library rent that’s simple to use,
              Lidia lets you spend less time managing your work and more time
              actually doing it!
            </p>
            <p className="text-[3vw] mt-2 mx-[7%] sm:text-[1.5vw] sm:ml-0">
              Effortless rentals, personalized shelves—Lidia transforms book
              management, enhancing your reading experience~
            </p>
          </div>
        </div>
        <div className="flex flex-col m-auto sm:flex-row-reverse sm:items-start sm:mx-[3%]">
          <img
            src={service2}
            alt=""
            className="mt-5 sm:w-[50%] sm:mt-0 sm:ml-0"
          />
          <div>
            <h3 className=" font-[500] mx-[7%] -mt-4 text-[5vw] sm:text-[2.5vw] sm:mt-4">
              Quick Book Rentals: <br />
              <span className="text-[#4475F2]">Dive </span> into{" "}
              <span className="text-[#4475F2]">Reading</span>Instantly
            </h3>
            <p className="text-[3vw] mt-4 mx-[7%] sm:text-[1.5vw]">
              Discover instant literary delight. Access a vast library, borrow
              your favorite reads, and dive into captivating stories within
              minutes. Reading made quick and easy, just a click away!
            </p>
            <p className="text-[3vw] mt-2 mx-[7%] sm:text-[1.5vw]">
              Unlock a world of stories effortlessly. Browse genres, choose,
              rent in minutes. Seamlessly manage your reading adventures with
              our intuitive platform~
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
