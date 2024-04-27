import React from "react";
import { team } from "../helper/data";
import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";

const About = () => {
  return (
    <div className="m-8  flex items-center flex-col">
      <div className="flex flex-col flex-wrep items-center m-auto gap-2 mt-12 md:w-2/4">
        <h1 className=" text-5xl font-semibold">Meet our team</h1>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy.
        </p>
      </div>
      <ul className="grid sm:grid-cols-2 b md:grid-cols-3 w-full md:w-3/4 gap-3 mx-3">
        {team.map(({ avatar, name, title, desc, linkedin, twitter }, index) => (
          <li key={index} className="flex flex-col justify-center items-center mt-7 gap-2 m-auto">
            <img src={avatar} className="w-20 rounded-full" alt="" />
            <h3 className="text-center">{name}</h3>
            <h4 className="text-center text-blue-500">{title}</h4>
            <p className="text-center">{desc}</p>
            <div className="flex gap-3 mt-2">
              <Link>
                <RiTwitterXLine />
              </Link>
              <Link>
                <FaLinkedinIn  />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
