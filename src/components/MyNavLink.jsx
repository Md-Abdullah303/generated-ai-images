import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({ href, children }) => {
  const path = usePathname();
  const isActive = path === href;
  // console.log(path);
  return (
    <Link 
    href={href} 
    className={`
    ${isActive && `border border-purple-400 text-purple-500`}
    p-2 rounded-lg 
    `}>
      {children}
    </Link>
  );
};

export default MyNavLink;
