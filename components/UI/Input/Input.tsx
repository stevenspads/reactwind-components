import { InputHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib"

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const classNames = cn(
    "flex w-full rounded-md border-solid border-2 border-slate-300 bg-transparent py-2 px-3 text-slate-600 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:placeholder:text-slate-500 dark:focus:ring-slate-900 dark:focus:ring-offset-black",
    className
  )

  return <input ref={ref} className={classNames} {...props} />
})

Input.displayName = "Input"

export { Input }
