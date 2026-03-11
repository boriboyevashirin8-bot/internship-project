interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-4 rounded-full font-semibold text-base transition-all duration-200
        ${fullWidth ? "w-full" : ""}
        ${
          variant === "primary"
            ? "bg-primary text-white hover:bg-primary/90 active:scale-95"
            : "bg-transparent border-2 border-primary text-primary hover:bg-primary/10"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
