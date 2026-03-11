import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
const DashboardPage = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light font-display">
      <header className="flex items-center justify-between p-4 pt-6 bg-background-light">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">
              person
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">
              Salom, {user?.name ?? "Foydalanuvchi"}!
            </h1>
            <p className="text-sm text-slate-500">Xush kelibsiz AgroSmart-ga</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm"
        >
          <span className="material-symbols-outlined text-slate-600">
            notifications
          </span>
        </button>
      </header>

      <section className="px-4 py-2">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-4 border border-primary/10 flex items-center justify-between shadow-sm">
          <div className="flex flex-col gap-1 z-10">
            <p className="text-slate-900 text-lg font-bold">Toshkent, 28°C</p>
            <p className="text-primary font-medium text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">rainy</span>
              Yomg'ir ehtimoli 10%
            </p>
          </div>
          <div className="size-16 flex items-center justify-center z-10">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontSize: "48px" }}
            >
              partly_cloudy_day
            </span>
          </div>
          <div className="absolute -right-4 -bottom-4 size-24 bg-primary/10 rounded-full blur-2xl"></div>
        </div>
      </section>

      <section className="px-4 py-4">
        <h2 className="text-lg font-bold mb-3">Asosiy ko'rsatkichlar</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  Farm Health
                </p>
                <p className="text-xl font-bold">85%</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-green-600 text-sm font-bold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                +5%
              </span>
              <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                <div className="bg-green-500 h-full w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Tuproq namligi</p>
            <p className="text-xl font-bold">42%</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="size-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-3">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Ogohlantirishlar
            </p>
            <p className="text-xl font-bold text-amber-600">2 ta</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-4">
        <h2 className="text-lg font-bold mb-3">Tezkor amallar</h2>
        <div className="grid grid-cols-3 gap-3">
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white shadow-sm active:scale-95 transition-transform border border-slate-100">
            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">
                add_location_alt
              </span>
            </div>
            <span className="text-[10px] font-bold text-center uppercase tracking-tight">
              Dala qo'shish
            </span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white shadow-sm active:scale-95 transition-transform border border-slate-100">
            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">photo_camera</span>
            </div>
            <span className="text-[10px] font-bold text-center uppercase tracking-tight">
              Kasallik aniqlash
            </span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white shadow-sm active:scale-95 transition-transform border border-slate-100">
            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined">map</span>
            </div>
            <span className="text-[10px] font-bold text-center uppercase tracking-tight">
              Xaritani ko'rish
            </span>
          </button>
        </div>
      </section>

      <section className="px-4 py-4 mb-24">
        <div className="rounded-xl overflow-hidden border border-slate-200 h-32 relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG5Aw8Jpw2aYrqsScLf8octXxWM37yAZtT5UmxjqRCVpb3REAb6iYNPBuKgwp_38tMJswujvgooz1SwqMwdnLK7EJrPxwODyJcSnPOd3WyCMtfLt-k5zu8zteAUU4327iPfngoavoaSDPDWuq73tiI05h7EYObyNBgfDoE_MaD1naafgfp0ApTHdBpjaDYUhkW3g-1y4rXX-aCGYok6cr3ZBB89hKkAb2ZXyMTiLxEh9f9bX4MOvD0aJMZscLKA66-c_03tiiGFpIT"
            alt="Farm view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <span className="px-4 py-2 bg-white/90 rounded-full text-xs font-bold shadow-lg">
              Faol dalalar: 12 gektar
            </span>
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-lg border-t border-slate-200 pb-6 pt-2 px-6">
        <div className="flex justify-between items-center">
          <button className="flex flex-col items-center gap-1 text-primary">
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings:
                  "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}
            >
              home
            </span>
            <span className="text-[10px] font-bold">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">potted_plant</span>
            <span className="text-[10px] font-medium">Dalalar</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">
              notification_important
            </span>
            <span className="text-[10px] font-medium text-center leading-tight">
              Ogohlantirish
            </span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default DashboardPage;
