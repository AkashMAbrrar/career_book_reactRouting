import React from "react";
import errImg from "../../assets/imgs/err.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5xl mt-10">OOooOOps!!!</h2>
      <br />
      <h2 className="text-5xl">Page Not Found</h2>
      <img className="w-96 mt-10 rounded-2xl" src={errImg} alt="" />
    </div>
  );
};

export default ErrorPage;
