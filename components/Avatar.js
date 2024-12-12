import Image from "next/image";

const Avatar = ({ avatarSrc, badgeSrc, badgeNumber, reversed }) => {
    return (
      <div className="relative w-16 h-16 mt-2 mb-2">
        <div className="w-18 h-18 rounded-full overflow-hidden flex-shrink-0">
            <img 
                src={avatarSrc}
                alt="Avatar" 
                className="w-full h-full object-cover" 
            />
        </div>
        <div className ={`absolute w-7 h-7 -bottom-[6px] left-[39px] flex items-center bg-white rounded-full p-[3px] ${
          reversed ? "-bottom-[6px] -left-[8px]": ""
        } `}>
          <img 
                src={badgeSrc}
                alt="Badge" 
                className="w-full h-full object-cover" 
            />
          
        </div>
        <div className={`absolute -bottom-[14px] left-[70px] text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 text-base scale-x-90 ${
          reversed ? "-bottom-[14px] -left-[47px]": ""}`}>{badgeNumber}</div>
      </div>
    );
  };

  export default Avatar