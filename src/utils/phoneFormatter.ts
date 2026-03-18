export const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  const d = digits.startsWith("998") ? digits : "998" + digits.replace(/^0+/, "");
  let result = "+998";
  if (d.length > 3) result += " " + d.slice(3, 5);
  if (d.length > 5) result += " " + d.slice(5, 8);
  if (d.length > 8) result += " " + d.slice(8, 10);
  if (d.length > 10) result += " " + d.slice(10, 12);
  return result;
};

export const normalizePhone = (value: string): string =>
  value.replace(/\s/g, "");
