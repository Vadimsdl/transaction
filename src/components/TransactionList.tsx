import { ArrowRight } from "lucide-react";
import { formatTransactionDate } from "../utils/date";
import { Link } from "react-router-dom";

interface Transaction {
  id: number;
  type: "Credit" | "Payment";
  amount: number;
  name: string;
  description: string;
  date: string;
  pending?: boolean;
  authorizedUser?: string;
  location?: string | null;
  percentage?: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Latest Transactions</h2>
      <div className="space-y-2">
        {transactions.map((transaction) => (
          <Link
            key={transaction.id}
            to={`/transaction/${transaction.id}`}
            className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="size-[2.5em] min-w-[2.5em] bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">
                    {transaction.name.charAt(0)}
                  </span>
                </div>
                <div className="w-52 overflow-hidden">
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">
                    {transaction.pending && "Pending - "}
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {transaction.authorizedUser && `${transaction.authorizedUser} – `}
                    {formatTransactionDate(transaction.date)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className="font-medium">
                    {transaction.type === "Payment" ? "+" : ""}${transaction.amount.toFixed(2)}
                  </p>
                  {transaction.percentage && (
                    <p className="text-sm text-gray-500">{transaction.percentage}</p>
                  )}
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};