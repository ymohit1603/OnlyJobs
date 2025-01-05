"use client"
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useState } from "react";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="fixed top-2 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm ">
      <MaxWidthWrapper>
            <div className="flex items-center justify-between h-16 px-4 py-9 border border-gray-800 rounded-full ">
              {/* Logo */}
              <Link 
                href="/" 
                className="font-bold text-xl text-white hover:text-gray-300 transition-colors"
              >
                OnlyJobs
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="/job-postings"
                  className={`${buttonVariants({ variant: "default" })} bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white`}
                   >
                  Job Postings
                </Link>
                <Link
                  href="#"
                  className={`${buttonVariants({ variant: "default" })} bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white`}
                >
                  Star this repo
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <IconButton
                  onClick={toggleMenu}
                  color="inherit"
                  aria-label="Open navigation menu"
                  size="large"
                  className="text-white"
                >
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden px-4 py-4 border-t border-gray-800">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/job-postings"
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={toggleMenu}
                  >
                    Job Postings
                  </Link>
                  <Link
                    href="#"
                    className={`${buttonVariants({ variant: "default" })} bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full text-center`}
                    onClick={toggleMenu}
                  >
                    Star this repo
                  </Link>
                </div>
              </div>
            )}
      </MaxWidthWrapper>
        </nav>
  );
}
