import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs';

const dateFilters = ['1D', '1W', '1M', '1Y', 'ALL'];

const DateFilters = () => {
  return (
    <Tabs defaultValue="1W">
      <TabsList className="bg-background-primary">
        {dateFilters.map((filter) => (
          <TabsTrigger
            key={filter}
            value={filter}
            className="text-tertiary data-[state=active]:text-primary-foreground data-[state=active]:bg-secondary"
          >
            {filter}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default DateFilters;
