import { format, isThisWeek, parseISO } from "date-fns";

export const formatTransactionDate = (dateString: string) => {
  const date = parseISO(dateString);
  if (isThisWeek(date)) {
    return format(date, "EEEE");
  }
  return format(date, "MM/dd/yy");
};

export const calculateDailyPoints = () => {
  const today = new Date();
  const dayOfSeason: number = 32; // Mocked as October 2nd (32nd day of autumn)
  
  if (dayOfSeason === 1) return 2;
  if (dayOfSeason === 2) return 3;
  
  // For day 3 and beyond
  const previousDayPoints = dayOfSeason === 3 ? 3 : 456; // Mocked for demo
  const dayBeforePreviousPoints = dayOfSeason === 3 ? 2 : 285; // Mocked for demo
  
  const points = Math.round(
    dayBeforePreviousPoints + (previousDayPoints * 0.6)
  );
  
  return points > 1000 ? `${Math.round(points / 1000)}K` : points.toString();
};