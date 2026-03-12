const STORAGE_KEY = "agrosmart_registered_users";

interface StoredUser {
  id: string;
  name: string;
  phone: string;
  password: string;
  token: string;
}

const normalizePhone = (phone: string) => phone.replace(/\s|-/g, "");

export const getLocalUsers = (): StoredUser[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
};

export const saveLocalUser = (user: StoredUser): void => {
  const users = getLocalUsers();
  const normalized = normalizePhone(user.phone);
  const exists = users.find((u) => normalizePhone(u.phone) === normalized);
  if (!exists) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([...users, { ...user, phone: normalized }]),
    );
  }
};

export const findLocalUser = (
  phone: string,
  password: string,
): StoredUser | undefined => {
  const normalized = normalizePhone(phone);
  return getLocalUsers().find(
    (u) => normalizePhone(u.phone) === normalized && u.password === password,
  );
};
