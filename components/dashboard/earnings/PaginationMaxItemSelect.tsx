import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const options = [
  {
    label: '10 Transaction',
    value: '10',
  },
  {
    label: '25 Transaction',
    value: '25',
  },
  {
    label: '50 Transaction',
    value: '50',
  },
];

const PaginationMaxItemSelect = () => {
  return (
    <Select defaultValue="10">
      <SelectTrigger className="border-secondary">
        <SelectValue>{options[0].label}</SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-secondary">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-primary-foreground"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PaginationMaxItemSelect;
