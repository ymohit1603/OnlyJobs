import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import Ticker from "./ticker";
import { BackgroundBeams } from "@/components/ui/background-beams";
import FeedbackForm from "@/components/feedback-form";

export default async function Home() {

  return (
    <div>
      
        <MaxWidthWrapper className="mt-6 sm:mt-16 " >
          <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-6">
            <div >
              <div className="flex flex-col gap-4">
                <p className="text-center text-slate-300 text-md font-bold  rounded-md shadow-md inline-block">
                  Cumming soon 💦
                </p>
                  
                <div className="flex flex-col items-center gap-3 max-w-2xljustify-center">
                <h1 className="text-center font-bold max-w-2xl text-2xl md:text-4xl lg:text-5xl">
                  Say 👋 Goodbye to Fake Job Postings.
                </h1>
                <p className="text-center text-slate-300 max-w-2xl font-semibold">
                  Authentic job postings fetched directly from company websites, all in one place.
                </p>
              </div>

              </div>
            </div>
            
          <div className="flex justify-center">
              <Link 
                  href="/job-postings"
                  className={`${buttonVariants({ variant: "default" })} py-3 cursor-pointer`}
              >
                  Let&apos;s get hard &rarr;
                </Link>
          </div>

          </div>
            <Ticker />
          </div>
            <FeedbackForm/>
      </MaxWidthWrapper>
      <BackgroundBeams className="pointer-events-none -z-10" />
     </div>
   
  );
}

