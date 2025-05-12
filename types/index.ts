export interface Transaction {
  accountId: string;
  amountIn: number;
  amountOut: number;
  price: number;
  value: number;
  earnedFee: number;
  createdAt: string;
}
