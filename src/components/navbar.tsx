"use client"
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Link from "next/link";
import {  buttonVariants } from "./ui/button";
import MenuIcon from "@mui/icons-material/Menu"; // Import MUI Menu icon
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material"; // Import MUI IconButton
import { useState } from "react";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const toggleMenu = ()=>{
    console.log("Menu toggled")
    setIsMenuOpen(prevState => !prevState)
  }
  return (
    <MaxWidthWrapper className="flex items-center mt-8 px-4 md:px-6 bg-black border rounded-3xl border-gray-900 md:justify-between">
      {/* Logo */}
      <Link href={"/"} className="font-bold flex md:order-1">
        OnlyJobs
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-2 my-4 ml-auto md:order-2">
        <Link
          href={"#"}
          className={`${buttonVariants({ variant: "default" })}`}
        >
          Star this repo
        </Link>

        <Link
          href={"#"}
          className={`${buttonVariants({ variant: "default" })} `}
        >
          Buy me Protein
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex ml-auto md:order-2" onClick={toggleMenu}>
        <IconButton
          color="inherit"
          aria-label="Open navigation menu"
          size="large"
        >
          {isMenuOpen ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
        </IconButton>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4">
          <Link
            href={"#"}
            className={`${buttonVariants({ variant: "default" })}`}
          >
            Star this repo
          </Link>

          <Link
            href={"#"}
            className={`${buttonVariants({ variant: "default" })}`}
          >
            Buy me Protein
          </Link>
        </div>
      )}
    </MaxWidthWrapper>
  );
}
