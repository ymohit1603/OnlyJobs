"use client"

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

const Ticker = () => {
  return (
      <div className="w-full ">
          <InfiniteMovingCards items={testimonials}/>
    </div>
  )
}

const testimonials = [
    {
      name: "Google",
      icon: <GoogleIcon style={{ fontSize: 40 }} />, // Set the size for the icons
    },
    {
      name: "Facebook",
      icon: <FacebookIcon style={{ fontSize: 40 }} />,
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon style={{ fontSize: 40 }} />,
    },
    {
      name: "Microsoft",
      icon: <MicrosoftIcon style={{ fontSize: 40 }} />,
    },
    {
      name: "Apple",
      icon: <AppleIcon style={{ fontSize: 40 }} />,
    },
  ];

export default Ticker