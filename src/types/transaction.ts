export type TransactionType = "Credit" | "Payment";

export interface Transaction {
  id: number;
  type: TransactionType;
  amount: number;
  name: string;
  description: string;
  date: string;
  pending?: boolean;
  authorizedUser?: string;
  location?: string | null;
  percentage?: string;
}