import AppRoutes from "./app/AppRoutes";
import { useOnlineStatus } from "./hooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();

  return (
    <>
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-500 text-white text-sm font-semibold text-center py-2 px-4 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-base">wifi_off</span>
          Internet ulanishi yo'q — sahifa keshdan ko'rsatilmoqda
        </div>
      )}
      <AppRoutes />
    </>
  );
}

export default App;
