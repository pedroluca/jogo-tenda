import { ComponentProps } from "react"
import { Link } from "react-router-dom"

interface ButtonProps extends ComponentProps<'a'> {
  to: string,
  buttonClick?: () => void,
  className?: string
}

export function Button({to, buttonClick, className, ...props}: ButtonProps) {
  return (
    <Link role='button' to={to} className={`border-effect button ${className}`} {...buttonClick} {...props}>{props.children}</Link>
  )
}