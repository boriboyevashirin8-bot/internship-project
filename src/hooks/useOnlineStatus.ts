import { useEffect, useState } from "react";
import { logger } from "../utils/logger";

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      logger.info("Network", "Internet ulanishi qayta tiklandi");
    };
    const handleOffline = () => {
      setIsOnline(false);
      logger.warn("Network", "Internet ulanishi uzildi");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
