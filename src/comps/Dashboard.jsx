import React from "react";
import DashboardStats from "./DashboardStats";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 ">
      <DashboardStats />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>

      {/* Table of orders */}
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
}
