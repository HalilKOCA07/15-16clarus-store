import React, { useState } from "react";

const Testimonial = () => {
  const testimonial = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, that the point of using Lorem Ipsum.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ",
    },
  ];

  const [currentTest, setCurrentTest] = useState(0);
  return (
    <div className="flex items-center flex-col mt-8">
        <h1 className="text-blue-800">What people are saying...</h1>
      <ul className="sm:mx-5 lg:mx-12 ">
        {testimonial.map(({ avatar, name, title, quote }, index) =>
          currentTest == index ? (
            <li
              key={index}
              className="flex flex-col justify-center items-center mt-8"
            >
              <figure className="flex flex-col items-center">
                <p className="text-center">{quote}</p>
                <img src={avatar} className="w-16 rounded-full mt-8 mb-3" alt="" />
                <h1>{name}</h1>
                <h3>{title}</h3>
              </figure>
            </li>
          ) : (
            ""
          )
        )}
      </ul>
      <ul className="flex gap-5">
        {testimonial.map((item, index) => (
            <li key={index}>
                <button className={`w-3 h-3 rounded-full duration-150 ring-offset-2 ring-indigo-700 focus:ring ${currentTest == index ? "bg-indigo-700" : "bg-blue-300"}`} onClick={() => setCurrentTest(index)}>
                </button>

            </li>
        )
        
    )}
      </ul>
    </div>
  );
};

export default Testimonial;
