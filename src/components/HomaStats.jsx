const HomeStates = () => {
  const stats = [
    {
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Downloads",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];

  return (
    <div className="m-3 px-12">
      <div className="flex flex-col items-center gap-4 tracking-wide mt-12">
        <h1 className="text-center font-semibold text-[1.8rem]  tracking-wider">
          Our Customers Are Always Happy...
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          venenatis sollicitudin quam ut tincidunt.
        </p>
      </div>
      <ul className="flex flex-col sm:flex-row justify-center mt-4 sm:divide-x">
        {stats.map(({ data, title, index}) => {
          return <li id={index} className="text-center px-10 md:px-16">
            <h1 className="text-[3rem] font-semibold text-yellow-600">{data}</h1>
            <h1 className="text-[1.2rem] ">{title}</h1>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default HomeStates;
