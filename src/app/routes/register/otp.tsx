import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CROPS = ["Paxta", "Bug'doy", "Uzum", "Meva", "Sabzavot"];

const REGIONS = [
  "Toshkent viloyati",
  "Farg'ona viloyati",
  "Samarqand viloyati",
  "Buxoro viloyati",
  "Andijon viloyati",
  "Namangan viloyati",
  "Qashqadaryo viloyati",
  "Surxondaryo viloyati",
  "Jizzax viloyati",
  "Sirdaryo viloyati",
  "Navoiy viloyati",
  "Xorazm viloyati",
  "Qoraqalpog'iston",
];

const OtpPage = () => {
  const [pinfl, setPinfl] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [selectedCrops, setSelectedCrops] = useState<string[]>([]);
  const [area, setArea] = useState("");
  const navigate = useNavigate();

  const toggleCrop = (crop: string) => {
    if (selectedCrops.includes(crop)) {
      setSelectedCrops(selectedCrops.filter((c) => c !== crop));
    } else {
      setSelectedCrops([...selectedCrops, crop]);
    }
  };

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-display bg-background-light">
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between max-w-2xl mx-auto w-full">
        <button
          onClick={() => navigate(-1)}
          className="flex size-12 shrink-0 items-center justify-start"
        >
          <span className="material-symbols-outlined text-slate-900">
            arrow_back
          </span>
        </button>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">
          Ro'yxatdan o'tish
        </h2>
      </div>

      {/* Progress */}
      <div className="flex flex-col gap-3 p-4 max-w-2xl mx-auto w-full">
        <div className="flex gap-6 justify-between items-center">
          <p className="text-slate-700 text-base font-medium leading-normal">
            Bosqich: Ma'lumotlar
          </p>
          <p className="text-primary text-sm font-bold leading-normal">2 / 5</p>
        </div>
        <div className="rounded-full bg-primary/20 h-2 w-full overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: "40%" }}
          ></div>
        </div>
      </div>

      {/* Forma */}
      <div className="flex flex-col p-4 max-w-2xl mx-auto w-full space-y-6">
        {/* Sarlavha */}
        <div className="pt-2">
          <h3 className="text-slate-900 tracking-tight text-2xl font-bold leading-tight">
            Xo'jalik ma'lumotlari
          </h3>
          <p className="text-slate-500 text-sm mt-1">
            Iltimos, xo'jaligingizga oid asosiy ma'lumotlarni kiriting.
          </p>
        </div>

        {/* JSHSHIR */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-800 text-sm font-semibold">
            JSHSHIR (PINFL) yoki ID
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              fingerprint
            </span>
            <input
              type="text"
              value={pinfl}
              onChange={(e) => setPinfl(e.target.value)}
              placeholder="14 xonali raqamni kiriting"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-primary/20 bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        {/* Viloyat va Tuman */}
        <div className="grid grid-cols-1 gap-4">
          {/* Viloyat */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-800 text-sm font-semibold">
              Viloyat
            </label>
            <div className="relative">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-4 rounded-xl border border-primary/20 bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none appearance-none transition-all"
              >
                <option value="">Viloyatni tanlang</option>
                {REGIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          {/* Tuman */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-800 text-sm font-semibold">
              Tuman / Shahar
            </label>
            <div className="relative">
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full px-4 py-4 rounded-xl border border-primary/20 bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none appearance-none transition-all"
              >
                <option value="">Tumanni tanlang</option>
                <option value="1">Parkent tumani</option>
                <option value="2">Zangiota tumani</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Asosiy ekinlar */}
        <div className="flex flex-col gap-3">
          <label className="text-slate-800 text-sm font-semibold">
            Asosiy ekinlar
          </label>
          <div className="flex flex-wrap gap-2">
            {CROPS.map((crop) => (
              <button
                key={crop}
                onClick={() => toggleCrop(crop)}
                className={`
                  px-4 py-2 rounded-full border text-sm font-medium
                  flex items-center gap-2 transition-colors
                  ${
                    selectedCrops.includes(crop)
                      ? "border-primary bg-primary text-white"
                      : "border-primary/20 bg-white text-slate-600 hover:border-primary"
                  }
                `}
              >
                {crop}
                {selectedCrops.includes(crop) && (
                  <span className="material-symbols-outlined text-sm">
                    close
                  </span>
                )}
              </button>
            ))}
            <button className="px-3 py-2 rounded-full border border-dashed border-primary/40 text-primary text-sm font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">add</span>
              Boshqa
            </button>
          </div>
        </div>

        {/* Ekin maydoni */}
        <div className="flex flex-col gap-2">
          <label className="text-slate-800 text-sm font-semibold">
            Ekin maydoni (Gektar)
          </label>
          <div className="relative">
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-4 rounded-xl border border-primary/20 bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">
              ga
            </span>
          </div>
        </div>

        {/* Tugma */}
        <div className="pt-8 pb-10">
          <button
            onClick={handleSubmit}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
          >
            Davom etish
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto p-6 text-center">
        <p className="text-slate-400 text-xs">
          AgroSmart Uzbekistan © 2024. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
};

export default OtpPage;
