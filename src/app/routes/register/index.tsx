import { useNavigate } from "react-router-dom";
import RegisterForm from "../../../features/auth/components/RegisterForm";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col bg-white font-display">
      <div className="flex items-center p-4 pb-2 justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex size-12 shrink-0 items-center justify-center hover:bg-primary/10 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-2xl text-slate-900">
            arrow_back
          </span>
        </button>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
          Ro'yxatdan o'tish
        </h2>
      </div>

      <div className="px-6 pt-8 pb-4">
        <div className="mb-6">
          <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center mb-6">
            <span
              className="material-symbols-outlined text-white"
              style={{ fontSize: "28px" }}
            >
              eco
            </span>
          </div>
          <h3 className="text-slate-900 tracking-tight text-3xl font-extrabold leading-tight">
            Xush kelibsiz!
          </h3>
          <p className="text-slate-600 text-base font-normal mt-2">
            AgroSmart tizimidan foydalanish uchun ma'lumotlaringizni kiriting
          </p>
        </div>

        <RegisterForm />
      </div>

      <div className="mt-auto p-6 text-center">
        <p className="text-xs text-slate-400 leading-relaxed">
          Ro'yxatdan o'tish orqali siz bizning{" "}
          <button className="underline text-slate-500">
            Foydalanish shartlari
          </button>{" "}
          va{" "}
          <button className="underline text-slate-500">
            Maxfiylik siyosati
          </button>
          ga rozilik berasiz.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
