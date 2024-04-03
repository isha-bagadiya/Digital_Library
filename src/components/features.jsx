import search from "../assets/search.svg";
import review from "../assets/review.svg";
import wishlist from "../assets/wishlist.svg";

const features = () => {
  return (
    <div className=" mt-10 w-full">
      <h1 className="mx-[7%] text-[#4475F2] text-[10px] sm:text-[15px] font-bold">
        FEATURES
      </h1>
      <p className="mx-[7%] text-[5vw] sm:text-[4vw] lg:text-[3.5vw] font-extrabold">
        🤔• What You Can Do?
      </p>

      <div className=" flex flex-col sm:flex-row sm:my-14">
        <div className="flex flex-col m-auto items-center">
          <img src={search} alt="" className="w-[100px] mt-3 lg:w-[150px]" />
          <h2 className="font-bold -mt-6 text-[17px] lg:text-[22px]">
            Search book
          </h2>
          <p className="text-center text-[15px] sm:text-[11px] lg:text-[20px]">
            Effortlessly find your next
            <br />
            read with our powerful and intuitive <br />
            book search.
          </p>
        </div>

        <div className="flex flex-col m-auto items-center">
          <img src={review} alt="" className="w-[100px] mt-3 lg:w-[150px]" />
          <h2 className="font-bold -mt-6 text-[17px] lg:text-[22px]">
            Review book
          </h2>
          <p className="text-center text-[15px] sm:text-[11px] lg:text-[20px]">
            Discover insightful critiques and
            <br />
            share your thoughts on diverse
            <br />
            literary masterpieces effortlessly.
          </p>
        </div>

        <div className="flex flex-col m-auto items-center">
          <img src={wishlist} alt="" className="w-[100px] mt-3 lg:w-[150px]" />
          <h2 className="font-bold -mt-6 text-[17px] lg:text-[22px]">
            Wishlist book
          </h2>
          <p className="text-center text-[15px] sm:text-[11px] lg:text-[20px]">
            Curate your literary
            <br />
            dreams–wishlist books for future <br />
            adventures and discoveries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default features;
