import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'default', as = 'button', ...props }, ref) => {
    const Component = as

    const variants = {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-transparent border border-white text-white',
      outline: 'border border-input bg-background',
      ghost: 'bg-transparent',
    }

    const sizes = {
      default: 'h-10 px-8 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
    }

    return (
      <Component
        className={cn(
          'inline-flex items-center justify-center rounded text-sm font-medium tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
