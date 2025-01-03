import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

/**
 * Button component
 * @type {(props?: (Props<{size: {default: string, lg: string, wd: string}, variant: {default: string, outline: string, primary: string}}> | undefined)) => string}
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
          default: "bg-[var(--text-accent)] text-primary hover:bg-[var(--text-accent-hover)]",
          primary: "bg-primary text-white",
          outline: "border border-[var(--text-accent)] bg-transparent text-[var(--text-accent)] hover:bg-[var(--text-accent)] hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        wd: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
