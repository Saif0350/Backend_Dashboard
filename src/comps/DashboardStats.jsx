import React from "react";
import { IoBagHandle, IoCart, IoPeople, IoPieChart } from "react-icons/io5";

const DashboardStats = () => {
  return (
    <>
      <div className="flex gap-2 w-full">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#131659]">
            <IoBagHandle className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Sales
            </span>
            {/* price div */}
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                &#8377;454867.60
              </strong>
              <span className="text-sm text-green-500 pl-2">+234</span>
            </div>
            {/* price div */}
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#1e6f1b]">
            <IoPieChart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Sales
            </span>
            {/* price div */}
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                &#8377;454867.60
              </strong>
              <span className="text-sm text-green-500 pl-2">+234</span>
            </div>
            {/* price div */}
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#802580]">
            <IoPeople className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Sales
            </span>
            {/* price div */}
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                &#8377;454867.60
              </strong>
              <span className="text-sm text-green-500 pl-2">+234</span>
            </div>
            {/* price div */}
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#83224c]">
            <IoCart className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Sales
            </span>
            {/* price div */}
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                &#8377;454867.60
              </strong>
              <span className="text-sm text-green-500 pl-2">+234</span>
            </div>
            {/* price div */}
          </div>
        </BoxWrapper>
      </div>
    </>
  );
};

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
export default DashboardStats;
