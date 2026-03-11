interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center font-display">
      <div className="w-full max-w-sm mx-auto px-4">{children}</div>
    </div>
  );
};

export default AuthLayout;
