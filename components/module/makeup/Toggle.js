import { useState } from "react";

function Switch() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        {/*   Switch Container */}
        <div
          className="w-12 h-6 flex items-center bg-lily p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {/* Switch */}
          <div
            className={
              "bg-white h-5 w-5 shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>     
      </div>
    </>
  );
}

export default Switch;
