import React from "react";
import { Link } from "react-router-dom";

function Signup() {

  return (
      <div className="flex items-center justify-center min-h-screen bg-[#F7F8F9]">

      <div className="w-[375px] h-[812px] bg-[#F9FAFB] flex flex-col px-[20px] pt-[40px] shadow-lg rounded-[16px] overflow-y-auto">
              
        <div>
          <h1 className="font-[Rubik] font-[500] text-[28px] text-[#1D2226]  m-0">
            Create your <br/> PopX account
          </h1>
        </div>

        <div className="mt-[32px] flex flex-col gap-[20px]">
          <div className="relative w-full">
            <label className="absolute -top-[10px] left-[12px] bg-[#F9FAFB] px-[4px] text-[#6C25FF] text-[14px] font-[Rubik]">
              Full Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              defaultValue="Marry Doe"
              className="w-[335px] h-[40px] border border-[#CBCBCB] rounded-[8px] px-[12px] font-[Rubik] text-[16px] text-[#1D2226] outline-none"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-[10px] left-[12px] bg-[#F9FAFB] px-[4px] text-[#6C25FF] text-[14px] font-[Rubik]">
              Phone number<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              defaultValue="Marry Doe"
              className="w-[335px] h-[40px] border border-[#CBCBCB] rounded-[8px] px-[12px] font-[Rubik] text-[16px] text-[#1D2226] outline-none"
            />
          </div>
          <div className="relative w-full">
            <label className="absolute -top-[10px] left-[12px] bg-[#F9FAFB] px-[4px] text-[#6C25FF] text-[14px] font-[Rubik]">
              Email address<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              defaultValue="Marry Doe"
              className="w-[335px] h-[40px] border border-[#CBCBCB] rounded-[8px] px-[12px] font-[Rubik] text-[16px] text-[#1D2226] outline-none"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-[10px] left-[12px] bg-[#F9FAFB] px-[4px] text-[#6C25FF] text-[14px] font-[Rubik]">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              defaultValue="Marry Doe"
              className="w-[335px] h-[40px] border border-[#CBCBCB] rounded-[8px] px-[12px] font-[Rubik] text-[16px] text-[#1D2226] outline-none"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-[10px] left-[12px] bg-[#F9FAFB] px-[4px] text-[#6C25FF] text-[14px] font-[Rubik]">
              Company name
            </label>
            <input
              type="text"
              defaultValue="Marry Doe"
              className="w-[335px] h-[40px] border border-[#CBCBCB] rounded-[8px] px-[12px] font-[Rubik] text-[16px] text-[#1D2226] outline-none"
            />
          </div>

          <div className=" w-[132px] h-[78px]">
            <p className="font-[Rubik] text-[15px] text-[#1D2226] mb-[8px]">
              Are you an Agency?<span className="text-red-600">*</span>
            </p>
            <div className="flex items-center gap-[20px]">
              <label className="flex items-center gap-[6px]">
                <input type="radio" name="agency" className="accent-[#642AF5] w-[18px] h-[17px]" defaultChecked />
                <span className="font-[Rubik] text-[#1D2226] text-[14px]">Yes</span>
              </label>
              <label className="flex items-center gap-[6px]">
                <input type="radio" name="agency" className="accent-[#642AF5] w-[18px] h-[17px]" />
                <span className="font-[Rubik] text-[#1D2226] text-[14px]">No</span>
              </label>
            </div>
          </div>
        </div>
    
        <Link to="/profile" className="  flex items-center justify-center absolute bottom-0 w-[335px] h-[46px] bg-[#6A00F5] text-white font-[Rubik] text-[16px] font-[500] rounded-[8px] mb-[30px]">
          Create Account
        </Link>
      
      </div>
    </div>
  );
}

export default Signup;