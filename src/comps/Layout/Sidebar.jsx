import React from "react";
import classNames from "classnames";
import Logo from "../../assets/logo.png";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/importants/navigation";
import { Link, useLocation } from "react-router-dom";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col bg-neutral-900 text-white w-60 p-3">
        <div className="flex items-center gap-2 px-1 py-3">
          <img src={Logo} width={22} alt="logo_img" />
          <span className="text-lg">Thaiger Pharma</span>
        </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>

        {/* bottom part */}
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
          <div className={classNames(linkClass, "cursor-pointer text-red-500")}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <>
      <Link
        to={item.path}
        className={classNames(
          pathname === item.path ? "bg-neutral-700" : "text-neutral-400",
          linkClass
        )}
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </Link>
    </>
  );
}
