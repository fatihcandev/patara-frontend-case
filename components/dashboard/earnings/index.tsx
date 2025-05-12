import DateFilters from './DateFilters';
import Pagination from './Pagination';
import EarningsTable from './Table';

const Earnings = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-2">
        <h2>Earnings</h2>
        <DateFilters />
      </div>
      <EarningsTable />
      <Pagination />
    </div>
  );
};

export default Earnings;
