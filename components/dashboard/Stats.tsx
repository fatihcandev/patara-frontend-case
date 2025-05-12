import { Button } from '../ui/button';
import { Asterisk, Gift, HandCoins, UserPlus } from '@/assets/svg';

const Stats = () => {
  const statistics = [
    {
      icon: <HandCoins />,
      label: 'Total Earned Fee',
      value: '$1,000.00',
    },
    {
      icon: <Asterisk />,
      label: 'Unclaimed Fee',
      value: '$500.00',
      actionButton: <Button>Claim</Button>,
    },
    {
      icon: <Gift />,
      label: 'Total Referral Points',
      value: '1289',
    },
    {
      icon: <UserPlus />,
      label: 'Referrals',
      value: '89',
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-5">
      {statistics.map((stat, i) => (
        <div
          key={i}
          className="bg-background-primary flex items-center gap-4 rounded-2xl p-5"
        >
          <span className="bg-secondary text-primary-blue-400 flex size-12 items-center justify-center rounded-lg">
            {stat.icon}
          </span>
          <div className="flex flex-col">
            <span className="text-secondary-foreground text-sm">
              {stat.label}
            </span>
            <span className="text-primary-foreground text-2xl">
              {stat.value}
            </span>
          </div>
          {stat.actionButton && (
            <span className="ml-auto">{stat.actionButton}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stats;
