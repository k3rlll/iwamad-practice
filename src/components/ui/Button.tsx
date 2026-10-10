import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button 
      type="button" 
      className={`base-button variant-${variant} ${className || ''}`} 
      {...props}
    >
      {children}
    </button>
  );
}