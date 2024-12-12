const Text = ({ name, description }) => (
    <div className="flex-grow flex flex-col  items-start h-[80px] ">
      <p className="text-base font-extrabold text-gray-900 flex items-center sm:text-2xl">
        {name}
       <img src="/verify.png" alt="varify" className="w-6 h-6 m-1"/>
      </p>
      <p className="text-gray-800 text-base sm:text-xl">{description}</p>
    </div>
  );

export default Text