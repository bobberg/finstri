import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  isLoading?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-ink text-white shadow-soft-xl hover:-translate-y-0.5 hover:bg-graphite hover:shadow-[0_26px_60px_-32px_rgba(8,17,31,0.75)]',
  secondary:
    'border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-ocean/35 hover:bg-white hover:shadow-[0_22px_50px_-34px_rgba(8,17,31,0.55)]',
  ghost: 'text-ink hover:bg-white/70 hover:text-ocean',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
};

function Button({
  children,
  className = '',
  disabled,
  icon,
  isLoading = false,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-md font-semibold tracking-normal transition duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : icon}
      <span>{children}</span>
    </button>
  );
}

export default Button;