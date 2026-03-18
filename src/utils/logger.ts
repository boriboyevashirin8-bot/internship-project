type LogLevel = "info" | "warn" | "error";

const formatTime = () => new Date().toLocaleTimeString("uz-UZ");

const log = (level: LogLevel, context: string, message: string, data?: unknown) => {
  const prefix = `[${formatTime()}] [${context}]`;
  if (data !== undefined) {
    console[level](`${prefix} ${message}`, data);
  } else {
    console[level](`${prefix} ${message}`);
  }
};

export const logger = {
  info: (context: string, message: string, data?: unknown) =>
    log("info", context, message, data),
  warn: (context: string, message: string, data?: unknown) =>
    log("warn", context, message, data),
  error: (context: string, message: string, data?: unknown) =>
    log("error", context, message, data),
};
