import { cn } from "@/utils"
import { type ReactNode } from "react"

interface MaxWidthWrapperProps {
  className?: string
  children: ReactNode
}

export const MaxWidthWrapper = ({
  className,
  children,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-md ",
        className
      )}
    >
      {children}
    </div>
  )
}