import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
} from "react"
import { cn } from "@/lib"
import { VariantProps, cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex border-0 font-semibold cursor-pointer rounded-md",
  {
    variants: {
      variant: {
        default:
          "border-primary-500 text-white bg-primary-500 hover:bg-primary-600 hover:border-primary-600 hover:text-white",
        outline:
          "bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white",
        gradient:
          "text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br",
        gradientShadow:
          "text-white bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:bg-gradient-to-br shadow-lg shadow-primary-500/50",
      },
      size: {
        default: "py-2 px-4",
        sm: "py-1 px-3 rounded-md text-sm",
        lg: "py-2 px-8 rounded-md text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type AnchorProps = AnchorHTMLAttributes<HTMLElement>
type ButtonProps = ButtonHTMLAttributes<HTMLElement>
type AnchorOrButtonProps = AnchorProps | ButtonProps
type Props = AnchorOrButtonProps & VariantProps<typeof buttonVariants>

const isAnchor = (props: AnchorOrButtonProps): props is AnchorProps => {
  return (props as AnchorProps).href !== undefined
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ className, variant, size, ...props }, ref) => {
    if (isAnchor(props)) {
      return (
        <a
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      )
    }

    return (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(props as ButtonHTMLAttributes<HTMLElement>)}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
