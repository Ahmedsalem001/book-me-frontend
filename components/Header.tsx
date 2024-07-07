"use client";
import Image from "next/image";
import { navLinks } from "@/constants/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.svg";
import logo2 from "@/public/logo2.svg";
import menu from "@/public/menu.svg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  const logoswitcher = pathname === "/" ? logo : logo2;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav
      className={`flex justify-between items-center px-20 max-sm:px-10 w-screen h-24 ${
        pathname === "/" && "absolute"
      } `}
      style={{ background: `${pathname === "/" ? "#FFE5E538" : "#FFE5E5"}` }}
    >
      <Link href={"/"}>
        <Image
          priority
          src={logoswitcher}
          width={230}
          height={66}
          alt="logo"
          className="max-sm:w-48"
        />
      </Link>
      <div className="flex justify-between ">
        {navLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              key={link.label}
              className={`pr-8 max-sm:hidden ${
                pathname === "/"
                  ? `${isActive && "text-light-1"}`
                  : `${isActive ? "text-[#756AB6]" : "text-[#E0AED0]"}`
              } `}
              href={link.route}
            >
              {link.label}
            </Link>
          );
        })}

        <div>
          <div className="block sm:hidden">
            <Button
              
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Image src={menu} alt="menu" width={32} height={32} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {navLinks.map((link) => {
                return (
                  <Link key={link.label} href={link.route}>
                    <MenuItem onClick={handleClose}>{link.label}</MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
