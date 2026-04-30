"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import MyNavLink from "./MyNavLink";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-3">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><MyNavLink href={"/"}>Home</MyNavLink></li>
          <li><MyNavLink href={"/all-photos"}>All Photos</MyNavLink></li>
          <li><MyNavLink href={"/profile"}>Profile</MyNavLink></li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <h1 className="text-sm font-semibold">
                Hi, {user?.name}
              </h1>

              <Avatar>
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

              <Button onClick={handleLogOut} variant="danger">
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link href={"/singup"}>SignUp</Link>
              <Link href={"/signin"}>SignIn</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 py-4 border-t">
          
          <MyNavLink href={"/"}>Home</MyNavLink>
          <MyNavLink href={"/all-photos"}>All Photos</MyNavLink>
          <MyNavLink href={"/profile"}>Profile</MyNavLink>

          <div className="border-t pt-3">
            {user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <Avatar.Image src={user?.image} />
                    <Avatar.Fallback>
                      {user?.name?.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                  <span>{user?.name}</span>
                </div>

                <Button onClick={handleLogOut} variant="danger">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex sm:flex-col gap-2">
                <Link href={"/signup"}>SignUp</Link>
                <Link href={"/signin"}>SignIn</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;