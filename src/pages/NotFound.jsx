import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-8">
      <img
        src="https://www.seozof.com.tr/wp-content/uploads/2018/10/404-sayfa-bulunamadi-not-found-.jpg"
        alt=""
      />
      <div className=" flex justify-center gap-5 mt-3">
        <Link to={-1} className="bg-blue-500 py-1 px-2 rounded-lg hover:bg-blue-600">GET BACK</Link>
        <Link to="/dashboard/home" className="bg-blue-500 py-1 px-2 rounded-lg hover:bg-blue-600">HOME BACK</Link>
      </div>
    </div>
  );
};

export default NotFound;
