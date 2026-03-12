import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "O'zbekiston fermerlariga maxsus",
    description: "Monitoring and smart data at your fingertips.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAc1q0Q0rktMPczNaA8L7bVb_VQXAnmODUUhKe7w1pQrc-o59qfaTCOLv88VGUdbUzgVNsbTdqL05dKXlepD2rtxYTj62tu2kjTTBiT3gY6yXk9svW-PPpFTCZqmL7n10dIELV1zorN0AAivxCEJTWqGc3Ql3Y6x3KdlEIKLxP_1sCIyc1gnQqvLF7P66914frg24hPlF5AvOhxbAYegGwDVsnyj-BZw2-TU9PIzuOF6CVT2SKkFzQavZ4KDWxm-_5GBS6ioS2v2qh-",
  },
  {
    id: 2,
    title: "Dalalaringizni kuzating",
    description: "Sun'iy yo'ldosh orqali real vaqtda monitoring.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI bilan kasallik aniqlang",
    description: "Rasm yuklang — kasallikni darhol aniqlang.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop",
  },
];

const OnboardingPage = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const navigate = useNavigate();

  const handleNext = () => {
    setAutoPlay(false);
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= slides.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [autoPlay, navigate]);

  return (
    <div className="relative flex h-screen w-full flex-col bg-background-light overflow-hidden font-display">
      <div className="flex items-center p-4 justify-between">
        <span className="material-symbols-outlined text-slate-900">info</span>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          AgroSmart Uzbekistan
        </h2>
        <button
          onClick={handleSkip}
          className="text-primary font-semibold text-sm"
        >
          O'tkazib yuborish
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4">
        <div
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-primary/10 rounded-xl min-h-[400px] transition-all duration-500"
          style={{
            backgroundImage: `url('${slides[current].image}')`,
          }}
        ></div>

        <div className="mt-8 space-y-3">
          <h2 className="text-slate-900 tracking-tight text-3xl font-bold leading-tight text-center px-2">
            {slides[current].title}
          </h2>
          <p className="text-slate-600 text-lg font-normal leading-relaxed text-center px-6">
            {slides[current].description}
          </p>
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`
                h-2 rounded-full transition-all duration-300
                ${index === current ? "w-6 bg-primary" : "w-2 bg-primary/30"}
              `}
            ></div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={handleNext}
          className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
        >
          Keyingisi
        </button>
      </div>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-32 bg-slate-200 rounded-full opacity-50"></div>
    </div>
  );
};

export default OnboardingPage;
