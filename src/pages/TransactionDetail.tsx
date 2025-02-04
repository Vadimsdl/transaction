import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import transactionsData from "../data/transactions.json";
import { ArrowLeft } from "lucide-react";
import { formatTransactionDate } from "../utils/date";

const TransactionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => transactionsData,
    initialData: transactionsData,
  });

  const transaction = data.transactions.find(t => t.id === Number(id));

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-blue-600"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-semibold">
              ${transaction.amount.toFixed(2)}
            </h1>
            <p className="text-xl text-gray-600">{transaction.name}</p>
            <p className="text-gray-500">
              {formatTransactionDate(transaction.date)}
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 space-y-4 shadow-sm">
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-medium">
                {transaction.pending ? "Pending" : "Approved"}
              </p>
            </div>

            {transaction.location && (
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{transaction.location}</p>
              </div>
            )}

            {transaction.authorizedUser && (
              <div>
                <p className="text-sm text-gray-500">Authorized User</p>
                <p className="font-medium">{transaction.authorizedUser}</p>
              </div>
            )}

            <div>
              <p className="text-sm text-gray-500">Total</p>
              <p className="font-medium">${transaction.amount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;