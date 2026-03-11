import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"green" | "white">("green");
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/onboarding");
          return 100;
        }
        if (prev >= 40) {
          setPhase("white");
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className={`
          absolute inset-0 flex flex-col items-center justify-between
          bg-primary p-8 font-display antialiased
          transition-opacity duration-700 ease-in-out
          ${phase === "green" ? "opacity-100 z-10" : "opacity-0 z-0"}
        `}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-second-green rounded-full"></div>
          <div className="absolute top-1/2 -right-32 w-96 h-96 bg-second-green rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 border-4 opacity-10 border-white rounded-xl rotate-45"></div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 z-10">
          <div className="relative flex items-center justify-center w-48 h-48 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-2xl overflow-hidden">
            <div
              className="absolute opacity-30 w-32 h-32 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnMd8Erv8gj-PUKjkF9FXYlLdvTXWJrkrxQQALUhra9SgErm240tOf58rAXWs4w13YL3HgmolgQ8dnuHWRp7mgPx7R21EDxJb8BhBTZc14fSASAHc6O_HRHdO250UklpLj7AZe_ZJMVjD7GLPZIsPb5SBXtU2B4RhVdgKWTErwnLWoIgVVt5CZngNsWkvKFA5ajmFy2lPTEWBUynT_naZe6NSLgLJLwsWCVLX4TJ9xpB_wSS5ZrgMhB-sk2UO4m3MGyID4LvKEonRJ')`,
              }}
            ></div>
            <div className="relative flex flex-col items-center gap-2">
              <span
                className="material-symbols-outlined text-white drop-shadow-lg"
                style={{ fontSize: "72px" }}
              >
                eco
              </span>
              <span
                className="material-symbols-outlined text-white opacity-90"
                style={{ fontSize: "42px" }}
              >
                agriculture
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs flex flex-col items-center gap-6 z-10 mb-8">
          <div className="w-full space-y-3">
            <div className="flex justify-between items-center text-white/80 text-sm font-medium">
              <span>Inisializatsiya qilinmoqda...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-medium">
            Digitalizing Agriculture
          </p>
        </div>
      </div>

      <div
        className={`
          absolute inset-0 flex flex-col
          bg-background-light font-display
          transition-opacity duration-700 ease-in-out
          ${phase === "white" ? "opacity-100 z-10" : "opacity-0 z-0"}
        `}
      >
        <div className="flex items-center justify-end p-6 pt-12">
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-sm">
              language
            </span>
            <p className="text-primary text-xs font-bold leading-normal tracking-[0.05em]">
              UZ / RU / EN
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-8">
          <div className="relative mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="absolute inset-0 rounded-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
            <div className="relative flex h-32 w-32 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/40">
              <span
                className="material-symbols-outlined text-white"
                style={{ fontSize: "72px" }}
              >
                eco
              </span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-slate-900 text-4xl font-bold tracking-tight mb-2">
              AgroSmart
            </h1>
            <p className="text-primary font-medium tracking-widest text-sm uppercase">
              Agrotexnika Solutions
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-8 pb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-slate-600 text-sm font-medium">
                Initializing system...
              </p>
              <p className="text-primary text-sm font-bold">{progress}%</p>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
              <div
                className="h-full rounded-full bg-primary transition-all duration-75"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-slate-500 text-[10px] text-center mt-1">
              Optimizing for local farm conditions
            </p>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em]">
              Smart Agriculture Intelligence
            </p>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
          <div
            className="h-full w-full bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwo8C9H5bFvYDHct_rBRWPNMGNyL3S8tbQo_YNMBssZ4d5Dn9lNxBkeCWp-iKGMO8ZT3tC5jCob3yMFpAe_wI-Kj3wiLnZ3WT_8tw3on1gMMrbkkby5fZNioUCuNYFBFvHaAfzfzslS4Kz_b8cKwbtl57C2tMDwu_TxpuDEmaZyvBRI0gfFgk9Jw3JqP6yPHfEJujkygH4O9CTxYLziXtFcTSNntDvZOXbt58PD0FsQxRvuqDoOkWJXVysvobYnukP7h1BmFJuT0Hf')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
