interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden font-display bg-background-light">
      <div className="fixed -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      {children}
    </div>
  );
};

export default AuthLayout;
