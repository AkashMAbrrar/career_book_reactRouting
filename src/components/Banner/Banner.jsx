import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold leading-normal mt-4">
            Books To Gained Knowledge And Make Your Soul{" "}
            <span className="text-green-700">Holy</span> And{" "}
            <span className="text-yellow-500">Enlighten</span>!
          </h1>
          <p className="py-6">
            Reading Books is one of the most important tasks in the world.Books
            Can show us the right path and the best way to do something. Make a
            good habit to reading books everyday.Books Could Make Our Brain
            Sharp And Smart.
          </p>
          <button className="btn btn-outline btn-success font-bold">
            View The Lists
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
