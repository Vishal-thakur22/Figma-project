import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F7F8F9]">
      <div className="w-[375px] h-[812px] bg-[#F9FAFB] flex flex-col justify-end px-[20px] pb-[41px] shadow-lg rounded-[16px]">
        
      
        <div className="w-[232px] flex flex-col gap-[10px] items-start ">
          <h1 className="w-[231px] h-[33px] font-[Rubik] font-[500] text-[28px] text-[#1D2226] m-0">
            Welcome to PopX
          </h1>
          <p className="w-[232px] h-[48px] font-[Rubik] font-[400] text-[18px] text-[#1D2226] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="mt-[24px] flex flex-col gap-[10px]">
          <Link
            to="/signup"
            className="w-[335px] h-[46px] flex items-center justify-center bg-[#6A00F5] text-[#FFFFFF] font-[Rubik] font-[500] text-[16px] leading-[17px] rounded-[8px]"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="w-[335px] h-[46px] flex items-center justify-center bg-[#6C25FF4B] text-[#1D2226] font-[Rubik] font-[500] text-[16px] leading-[17px] rounded-[8px]"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

