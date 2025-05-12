import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Transaction } from '@/types';

const tableHeadings = [
  'ACCOUNT',
  'AMOUNT IN',
  'AMOUNT OUT',
  'PRICE',
  'VALUE',
  'EARNED FEE',
  'TIME',
];

const transaction: Transaction = {
  accountId: '0x1f20e...e2026',
  amountIn: 1000,
  amountOut: 2500,
  price: 2.5,
  value: 2500,
  earnedFee: 0.05,
  createdAt: '1 day ago',
};

const EarningsTable = () => {
  return (
    <div className="bg-background-primary rounded-2xl p-4">
      <Table className="border-separate border-spacing-y-2">
        <TableHeader>
          <TableRow className="border-none hover:bg-transparent">
            {tableHeadings.map((head) => (
              <TableHead
                key={head}
                className="text-secondary-foreground pb-4 text-xs"
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(10)
            .fill(transaction)
            .map((t: Transaction, i) => (
              <TableRow
                key={i}
                className="[&_td]:bg-secondary border-none [&_td]:py-4 [&_td]:first:pl-4 [&_td]:last:pr-4"
              >
                <TableCell className="min-w-[250px] rounded-tl-xl rounded-bl-xl">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/signed-in-user-avatar.webp"
                      width={32}
                      height={32}
                      alt=""
                      className="rounded-full"
                    />
                    {t.accountId}
                  </div>
                </TableCell>
                <TableCell>
                  {t.amountIn.toFixed(2)}
                  <span className="text-secondary-foreground ml-1">SUI</span>
                </TableCell>
                <TableCell>
                  {t.amountOut.toFixed(2)}
                  <span className="text-secondary-foreground ml-1">USDC</span>
                </TableCell>
                <TableCell>${t.price.toFixed(2)}</TableCell>
                <TableCell>${t.value.toFixed(2)}</TableCell>
                <TableCell>${t.earnedFee}</TableCell>
                <TableCell className="rounded-tr-xl rounded-br-xl">
                  {t.createdAt}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EarningsTable;
