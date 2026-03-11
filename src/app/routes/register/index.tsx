import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../features/auth/hooks/useAuth";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { register, isLoading, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    register(name, phone, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/register/otp");
    }
  }, [isAuthenticated]);

  return (
    <div className="relative flex min-h-screen flex-col bg-white font-display">
      {/* Header */}
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

      {/* Kontent */}
      <div className="px-6 pt-8 pb-4">
        {/* Logo va sarlavha */}
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

        {/* Xato xabari */}
        {error && (
          <div className="w-full mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        {/* Forma */}
        <div className="space-y-5">
          {/* Ism */}
          <div className="flex flex-col gap-2">
            <span className="text-slate-700 text-sm font-semibold ml-1">
              Ism-sharif
            </span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                person
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ismingizni kiriting"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base outline-none"
              />
            </div>
          </div>

          {/* Telefon */}
          <div className="flex flex-col gap-2">
            <span className="text-slate-700 text-sm font-semibold ml-1">
              Telefon raqami
            </span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                phone
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 00 000 00 00"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base outline-none"
              />
            </div>
          </div>

          {/* Parol */}
          <div className="flex flex-col gap-2">
            <span className="text-slate-700 text-sm font-semibold ml-1">
              Parol
            </span>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                lock
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Kamida 8 ta belgi"
                className="w-full h-14 pl-12 pr-12 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tugmalar */}
        <div className="mt-10 space-y-4">
          <button
            onClick={handleRegister}
            disabled={isLoading}
            className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-[0.98] disabled:opacity-50"
          >
            {isLoading ? "Yuklanmoqda..." : "Davom etish"}
          </button>

          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="text-slate-500">Profilingiz bormi?</span>
            <button
              onClick={() => navigate("/login")}
              className="text-primary font-bold hover:underline py-2 px-4"
            >
              Kirish
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
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
