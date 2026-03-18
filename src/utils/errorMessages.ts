const ERROR_MAP: Record<string, string> = {
  "Already used member nick or phone!": "Bu telefon raqam allaqachon ro'yxatdan o'tgan!",
  "No data found!": "Foydalanuvchi topilmadi!",
  "Wrong password, try again!": "Parol noto'g'ri, qaytadan urinib ko'ring!",
  "Something went wrong!": "Xatolik yuz berdi, qaytadan urinib ko'ring!",
  "No member with that member nick!": "Bunday foydalanuvchi topilmadi!",
  "You have been blocked!": "Sizning hisobingiz bloklangan!",
  "You are not authenticated, please login first!": "Tizimga kirmagansiz, avval kiring!",
  "Bearer Token is not provided!": "Avtorizatsiya tokeni topilmadi!",
  "Allowed only for members with specific roles!": "Bu amalni bajarishga ruxsat yo'q!",
  "Not Allowed Request!": "Ruxsat etilmagan so'rov!",
  "Failed to fetch": "Server bilan bog'lanib bo'lmadi, internetni tekshiring!",
  "Load failed": "Server bilan bog'lanib bo'lmadi, internetni tekshiring!",
  "Network request failed": "Tarmoq xatosi, internetni tekshiring!",
};

export const toUzbekError = (message: string): string => {
  for (const [key, value] of Object.entries(ERROR_MAP)) {
    if (message.includes(key)) return value;
  }
  return "Xatolik yuz berdi!";
};
