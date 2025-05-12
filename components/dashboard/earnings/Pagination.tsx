import {
  Pagination as PaginationContainer,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import PaginationMaxItemSelect from './PaginationMaxItemSelect';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from '@/assets/svg';
import { cn } from '@/lib/utils';

const Pagination = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <PaginationMaxItemSelect />
      <PaginationContainer>
        <PaginationContent className="md:gap-2">
          <PaginationItem className="md:hidden">
            <Button size="icon" variant="outline">
              <ArrowLeft />
            </Button>
          </PaginationItem>
          {[1, 2, 3].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === 1}
                className={cn(
                  'data-[active=true]:bg-secondary hover:bg-secondary hover:text-primary-foreground border',
                  page === 3 && 'max-md:hidden',
                )}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis className="size-10 rounded-lg border" />
          </PaginationItem>
          {[4, 5, 6].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                className={cn(
                  'data-[active=true]:bg-secondary hover:bg-secondary hover:text-primary-foreground border',
                  page === 6 && 'max-md:hidden',
                )}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem className="md:hidden">
            <Button size="icon" variant="outline">
              <ArrowRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </PaginationContainer>
      <div className="flex gap-2 max-md:hidden">
        <Button
          size="icon"
          variant="outline"
          className="hover:bg-secondary hover:text-primary-foreground"
        >
          <ArrowLeft />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="hover:bg-secondary hover:text-primary-foreground"
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
