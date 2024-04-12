import { ComponentProps } from "react"
import { Link } from "react-router-dom"

interface ButtonProps extends ComponentProps<'a'> {
  children: string,
  to: string,
  buttonClick?: () => void
}

export function Button({children, to, buttonClick, ...props}: ButtonProps) {
  return (
    <Link role='button' to={to} className='border-effect button' {...buttonClick} {...props}>{children}</Link>
  )
}