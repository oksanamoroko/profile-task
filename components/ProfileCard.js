const ProfileCard = ({ children, reversed }) => {
    return (
      <div
        className={`p-4  mx-auto bg-white shadow-md  ${
          reversed ? "flex-row-reverse space-x-reverse" : ""
        }`}
      >
        <div
          className={`flex items-center h-max ${
            reversed ? "flex-row-reverse space-x-reverse" : "space-x-3"
          }`}
        >
          {children}
        </div>
      </div>
    );
  };

  export default ProfileCard