import { useQuery } from "@tanstack/react-query";
import transactionsData from "../data/transactions.json";
import { CardBalance } from "../components/CardBalance";
import { TransactionList } from "../components/TransactionList";
import { Transaction } from "../types/transaction";

const Index = () => {
  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => transactionsData as {
      cardLimit: number;
      cardBalance: number;
      transactions: Transaction[];
    },
    initialData: transactionsData as {
      cardLimit: number;
      cardBalance: number;
      transactions: Transaction[];
    },
  });

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 bg-gray-100">
      <CardBalance
        balance={data.cardBalance}
        limit={data.cardLimit}
      />
      <TransactionList transactions={data.transactions} />
    </div>
  );
};

export default Index;