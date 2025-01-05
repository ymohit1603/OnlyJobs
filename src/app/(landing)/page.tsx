import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Ticker from "./ticker";
import { BackgroundBeams } from "@/components/ui/background-beams";
// import FeedbackForm from "@/components/feedback-form";
import Image from "next/image";

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
    </div>
  );
}
