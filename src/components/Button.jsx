import Link from "next/link";

const Button = ({ href, children, className = "", ...props }) => {
  return (
    <Link
      href={href}
      className={`inline-block px-6 py-3 bg-accent text-black font-medium rounded-lg hover:bg-accent/90 transition-colors ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;