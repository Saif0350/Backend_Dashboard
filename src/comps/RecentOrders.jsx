import React from "react";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../lib/helpers/getOrderStatus";

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "7",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
  {
    id: "3",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "4",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    order_date: "2022-05-14T03:24:00",
    order_total: "$876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "5",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
];

const RecentOrders = () => {
  return (
    <>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">Recent Orders</strong>
        <div className="mt-3 overflow-auto rounded-lg shadow-sm border-x">
          <table className="w-full text-gray-700">
            <thead className="bg-gray-100 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  ID
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Product ID
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Customer Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Order Date
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Order Total
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  shipping Address
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Order Status
                </th>
              </tr>
            </thead>

            {/* table content */}
            <tbody className="divide-y divide-gray-100">
              {recentOrderData.map((item) => (
                <tr key={item.id}>
                  <td className="p-3 text-sm text-gray-700">
                    <Link to={`/order/${item.id}`}>#{item.id}</Link>
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    <Link to={`/product/${item.product_id}`}>
                      #{item.product_id}
                    </Link>
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    <Link to={`/customer/${item.customer_id}`}>
                      {item.customer_name}
                    </Link>
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    {new Date(item.order_date).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    {item.order_total}
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    {item.shipment_address}
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    {getOrderStatus(item.current_order_status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecentOrders;
