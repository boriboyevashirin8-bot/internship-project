import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Button from "../../../components/atoms/Button";
import { formatPhone, normalizePhone } from "../../../utils/phoneFormatter";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { register, isLoading, error, isRegistering } = useAuth();
  const navigate = useNavigate();

  const isPhoneValid = phone.replace(/\D/g, "").length === 12;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleRegister = () => {
    if (!name || !isPhoneValid || password.length < 8) return;
    register(name, normalizePhone(phone), password);
  };

  useEffect(() => {
    if (isRegistering) {
      navigate("/register/otp");
    }
  }, [isRegistering, navigate]);

  return (
    <>
      {error && (
        <div className="w-full mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-600 text-sm text-center">{error}</p>
        </div>
      )}

      <div className="space-y-5">
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
              onChange={handlePhoneChange}
              placeholder="+998 XX XXX XX XX"
              className="w-full h-14 pl-12 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-base outline-none"
            />
          </div>
        </div>

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

      <div className="mt-10 space-y-4">
        <Button
          onClick={handleRegister}
          disabled={!name || !isPhoneValid || password.length < 8}
          isLoading={isLoading}
          fullWidth
        >
          Davom etish
        </Button>

        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="text-slate-500">Profilingiz bormi?</span>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-primary font-bold hover:underline py-2 px-4"
          >
            Kirish
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
