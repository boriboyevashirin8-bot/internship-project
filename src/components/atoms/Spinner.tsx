interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "white" | "primary";
}

const sizeMap = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-8 h-8 border-[3px]",
};

const colorMap = {
  white: "border-white border-t-transparent",
  primary: "border-primary border-t-transparent",
};

const Spinner = ({ size = "md", color = "white" }: SpinnerProps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`rounded-full animate-spin ${sizeMap[size]} ${colorMap[color]}`}
      />
    </div>
  );
};

export default Spinner;
