import { useNavigate } from "react-router-dom";
import LoginForm from "../../features/auth/components/LoginForm";
import AuthLayout from "../../components/layouts/AuthLayout";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="flex items-center p-4 pb-2 justify-between">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-slate-900 flex size-12 shrink-0 items-center justify-start"
        >
          <span className="material-symbols-outlined text-3xl">arrow_back</span>
        </button>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
          AgroSmart Uzbekistan
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center px-4 pt-10 pb-12 max-w-[480px] mx-auto w-full">
        <div className="mb-8 p-6 bg-primary/10 rounded-full">
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontSize: "60px" }}
          >
            agriculture
          </span>
        </div>

        <h1 className="text-slate-900 text-[32px] font-bold leading-tight text-center pb-2">
          Xush kelibsiz
        </h1>
        <p className="text-slate-600 text-base font-normal leading-normal pb-8 text-center">
          Tizimga kirish uchun ma'lumotlaringizni kiriting
        </p>

        <LoginForm />
      </div>

      <div className="mt-auto p-8 text-center">
        <p className="text-slate-500 text-sm">
          © 2024 AgroSmart Uzbekistan. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
