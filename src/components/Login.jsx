import React from 'react'
import { Link } from 'react-router';

function Login() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-[#F7F8F9]">
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] flex flex-col px-[20px] pt-[40px] shadow-lg rounded-[16px]">
        
        <div>
          <h1 className=" w-[188px] h-[69px] font-[Rubik] font-[500] text-[28px] text-[#1D2226]">
            Signin to your PopX account
          </h1>
          <p className="w-[232px] h-[48px] font-[Rubik] font-[400] text-[18px] text-[#1D2226] opacity-60 mt-[14px] mb-0">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="mt-[33px] flex flex-col gap-[14px]">
      
          <div className="relative w-full mb-[20px]">
            <label className="absolute -top-[14px] left-[12px] bg-[#F9FAFB] px-[4px] text-[#6C25FF] text-[13px] font-[Rubik]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-[335px] h-[40px] border border-[#D1D5DB] rounded-[8px] px-[12px] font-[Rubik] text-[14px] text-[#919191] placeholder:text-[#9CA3AF] outline-none "
            />
          </div>

          <div className="relative w-full mb-[20px">
            <label className="absolute -top-[14px] left-[12px] bg-[#F9FAFB] px-[4px] text-[#6C25FF] text-[13px] font-[Rubik]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-[335px] h-[40px] border border-[#D1D5DB] rounded-[8px] px-[12px] font-[Rubik] text-[14px] text-[#919191] placeholder:text-[#9CA3AF] outline-none"
            />
          </div>
        <Link to ="/profile" className="w-[335px] h-[46px] flex items-center justify-center bg-[#CBCBCB] text-[#FFF] font-[Rubik] font-[500] text-[16px]  rounded-[8px]">
          Login
        </Link>
        </div>

       </div>
      </div>
  );
}


export default Login;
