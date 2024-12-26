import { MaxWidthWrapper } from "@/components/max-width-wrapper"; 
import Link from "next/link"; 
import { buttonVariants } from "./ui/button";

export function NavBar() {
  return (
    <MaxWidthWrapper className="flex items-center mt-4 px-4 bg-black border rounded-3xl border-gray-900 ">

      <Link href={"/"} className="font-bold flex">
        OnlyJobs
      </Link>
      

      <div className="flex gap-2 my-4 ml-auto">
        <Link
          href={"#"}
          className={`${buttonVariants({ variant: "default" })} `}
        >
          Star this repo ⭐
        </Link>

        <Link
          href={"#"}
          className={`${buttonVariants({ variant: "default" })}`}
        >
          Buy me Protein 🥤
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
