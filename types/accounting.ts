export interface Transaction {
  id: string;
  type: 'income' | 'expense' | 'mobile';
  amount: number;
  date: string;
  description: string;
  category: string;
}

export interface FinancialSummary {
  revenue: number;
  expenses: number;
  treasury: number;
  mobileMoney: number;
  revenueChange: number;
  expensesChange: number;
}

export interface ChartData {
  label: string;
  value: number;
}
