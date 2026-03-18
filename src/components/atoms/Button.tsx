import Spinner from "./Spinner";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  isLoading = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        h-14 px-6 rounded-xl font-bold text-lg transition-all duration-200
        flex items-center justify-center gap-2 active:scale-[0.98]
        ${fullWidth ? "w-full" : ""}
        ${
          variant === "primary"
            ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
            : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
        }
        ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
