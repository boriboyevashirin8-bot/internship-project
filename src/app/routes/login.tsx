import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(phone, password);
  };

  // Login muvaffaqiyatli bo'lsa dashboard ga o'tish
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-light">
      {/* Orqa fon dekoratsiya */}
      <div className="fixed -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between">
        <button
          onClick={() => navigate(-1)}
          className="text-slate-900 flex size-12 shrink-0 items-center justify-start"
        >
          <span className="material-symbols-outlined text-3xl">arrow_back</span>
        </button>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
          AgroSmart Uzbekistan
        </h2>
      </div>

      {/* Asosiy kontent */}
      <div className="flex flex-col items-center justify-center px-4 pt-10 pb-12 max-w-[480px] mx-auto w-full">
        {/* Icon */}
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

        {/* Xato xabari */}
        {error && (
          <div className="w-full mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        {/* Forma */}
        <div className="w-full space-y-5">
          {/* Telefon */}
          <div className="flex flex-col w-full">
            <label className="text-slate-900 text-base font-semibold leading-normal pb-2 px-1">
              Telefon raqami
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                call
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 -- --- -- --"
                className="w-full rounded-xl text-slate-900 focus:ring-2 focus:ring-primary border border-slate-300 bg-white h-14 pl-12 pr-4 text-base font-medium outline-none transition-all"
              />
            </div>
          </div>

          {/* Parol */}
          <div className="flex flex-col w-full">
            <label className="text-slate-900 text-base font-semibold leading-normal pb-2 px-1">
              Parol
            </label>
            <div className="relative flex w-full items-stretch">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 z-10">
                lock
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full rounded-xl text-slate-900 focus:ring-2 focus:ring-primary border border-slate-300 bg-white h-14 pl-12 pr-12 text-base font-medium outline-none transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          {/* Parolni unutdingizmi */}
          <div className="flex justify-end px-1">
            <button className="text-primary text-sm font-semibold hover:underline">
              Parolni unutdingizmi?
            </button>
          </div>

          {/* Tugmalar */}
          <div className="pt-4 space-y-4">
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-bold h-14 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center disabled:opacity-50"
            >
              {isLoading ? "Yuklanmoqda..." : "Kirish"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px bg-slate-300 flex-1"></div>
              <span className="text-slate-500 text-sm">yoki</span>
              <div className="h-px bg-slate-300 flex-1"></div>
            </div>

            <button
              onClick={() => navigate("/register")}
              className="w-full bg-primary/10 hover:bg-primary/20 text-primary text-lg font-bold h-14 rounded-xl transition-all border border-primary/20 flex items-center justify-center"
            >
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto p-8 text-center">
        <p className="text-slate-500 text-sm">
          © 2024 AgroSmart Uzbekistan. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
