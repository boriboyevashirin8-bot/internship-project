import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Spinner from "../../../components/atoms/Spinner";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!phone || !password) return;
    login(phone, password);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {error && (
        <div className="w-full mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-600 text-sm text-center">{error}</p>
        </div>
      )}

      <div className="w-full space-y-5">
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
              onKeyDown={handleKeyDown}
              placeholder="+998 -- --- -- --"
              className="w-full rounded-xl text-slate-900 focus:ring-2 focus:ring-primary border border-slate-300 bg-white h-14 pl-12 pr-4 text-base font-medium outline-none transition-all"
            />
          </div>
        </div>

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
              onKeyDown={handleKeyDown}
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

        <div className="flex justify-end px-1">
          <button className="text-primary text-sm font-semibold hover:underline">
            Parolni unutdingizmi?
          </button>
        </div>

        <div className="pt-4 space-y-4">
          <button
            onClick={handleLogin}
            disabled={isLoading || !phone || !password}
            className="w-full bg-primary hover:bg-primary/90 text-white text-lg font-bold h-14 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? <Spinner /> : "Kirish"}
          </button>

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
    </>
  );
};

export default LoginForm;
