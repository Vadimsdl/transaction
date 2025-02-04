import { calculateDailyPoints } from "../utils/date";
import { cn } from "../lib/utils";
import { Check } from "lucide-react";

interface CardBalanceProps {
  balance: number;
  limit: number;
  className?: string;
}

export const CardBalance = ({ balance, limit, className }: CardBalanceProps) => {
  const available = limit - balance;
  const points = calculateDailyPoints();

  return (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
      <div className={cn("grid gap-4", className)}>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold">Card Balance</h2>
            <div className="space-y-1">
              <p className="text-2xl font-semibold">${balance.toFixed(2)}</p>
              <p className="text-sm text-gray-500">${Number(available.toFixed(2)).toLocaleString()} Available</p>
            </div>
          </div>
        </div>
      
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-sm font-semibold">Daily Points</h2>
          <p className="text-xl text-gray-500 mt-1">{points}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col justify-between">
        <div className="space-y-2">
            <h2 className="text-sm font-semibold">No Payment Due</h2>
            <p className="text-sm text-gray-500">You've paid your September balance.</p>
        </div>
          <div className="flex items-center justify-end">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
              <Check className="h-8 w-8 text-gray-900" />
            </div>
          </div>
      </div>
    </div>
  );
};