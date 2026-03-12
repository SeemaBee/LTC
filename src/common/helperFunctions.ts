import { LightTheme } from 'theme/colors';

export const useTheme = () => {
  return LightTheme;
};

export const formattedDate = (date: number, month: number, year: number) => {
  return `${date}/${month}/${year}`;
};

export const get18YearsAgo = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return date;
};