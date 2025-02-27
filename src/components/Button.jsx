"use client"
const Button = ({ href, children, className = "", ...props }) => {
  return (
    <a
      href={href}
      className={`inline-block px-6 py-3 bg-accent text-black font-medium rounded-lg hover:bg-accent/90 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;