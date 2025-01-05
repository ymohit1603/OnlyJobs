import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Ticker from "./ticker";
import { BackgroundBeams } from "@/components/ui/background-beams";
// import FeedbackForm from "@/components/feedback-form";
import Image from "next/image";
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';

import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className=" relative mt-10 bg-black">
      <MaxWidthWrapper className="mt-12 sm:mt-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-6">
                <span className="px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg animate-[pulse_3s_ease-in-out_infinite]">
                  Cumming soon 💦
                </span>
                
                <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
                  <h1 className="font-extrabold text-transparent text-3xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    Say 👋 Goodbye to Fake Job Postings.
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                    Authentic job postings fetched directly from company websites, all in one place.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link 
                href="/job-postings"
                className={`${buttonVariants({ variant: "default" })} text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-xl text-white`}
              >
                Let&apos;s get hard &rarr;
              </Link>
            </div>
          </div>

          <div className="relative">
            <Ticker />
          </div>

          {/* <div className="mt-8">
            <FeedbackForm/>
          </div> */}
          
        </div>
      
      <BackgroundBeams className="pointer-events-none fixed inset-0 " />
      </MaxWidthWrapper>
      <div className="relative w-3/4 mb-4 border border-none rounded-xl bg-black h-[500px] mx-auto mt-12 transition-all duration-300 hover:shadow-[0_0_50px_12px_rgba(59,130,246,0.5)]">
          <Image
            src="/image.png"
            alt="Description"
            fill
            className="object-cover"
            priority
          />
      </div>
      

      {/*Footer here*/}
      <footer className="mt-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Button
                variant="ghost"
                className="text-gray-400 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-200"
                asChild
              >
                <Link href="mailto:mohityadav0330@gmail.com" className="flex items-center gap-2">
                  <EmailIcon className="text-gray-400 group-hover:text-purple-400" />
                  <span className="text-gray-400 group-hover:text-purple-400 duration-200 transition-colors ">mohityadav0330@gmail.com</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-200"
                asChild
              >
                <Link 
                  href="https://x.com/ymohit1603" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <XIcon className="text-gray-400 group-hover:text-purple-400" />
                  
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
