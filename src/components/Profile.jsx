import React from "react";

function Profile() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-[#FFF]">
   
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] shadow-lg rounded-[16px] overflow-hidden flex flex-col">
        
       <div className="h-[61px] pl-[15px] bg-[#FFFFFF] border-b border-[#E5E7EB] flex items-end">
          <h1 className="h-[22px] font-[Rubik] text-[18px] font-[400] text-[#1D2226] mb-[19px]">
             Account Settings</h1>
        </div>
       <div className="px-[20px] pt-[30px] pb-[20px] bg-[#F7F8F9] relative">
        
          <div className="flex items-center gap-[20px]">
            <div className="relative">
              <img
                src="/Ellipse 114.png" 
                alt="profile"
                className="w-[76px] h-[76px] rounded-full object-cover"/>

              <div className="absolute bottom-0 right-0 w-[21px] h-[23px] rounded-full flex items-center justify-center">
                <img
                  src="/Group 1585.png"
                    alt="camera"
                />
              </div>
            </div>

            <div>
              <p className="w-[73px] h-[18px] font-[Rubik] text-[15px] font-[500] text-[#1D2226]">
                Marry Doe
              </p>
              <p className="w-[118px] h-[17px] font-[Rubik] text-[14px] text-[#1D2226]">
                Marry@Gmail.Com
              </p>
            </div>
          </div>
          <p className= " w-[337px] h-[63px] mt-[30px] mr-[18px] font-[Rubik] text-[14px] text-[#1D2226]">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <div className="w-full border-b border-gray-400" 
     style={{ borderImage: "repeating-linear-gradient(to right, #D1D5DB 0, #D1D5DB 4px, transparent 4px, transparent 8px) 1" }}>
</div>
      </div>
      </div>
  );
}

export default Profile;
