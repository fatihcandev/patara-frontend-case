import { cn } from '@/lib/utils';

interface BlurredLetterProps {
  children: React.ReactNode;
  className?: string;
}

const BlurredLetter = ({ children, className }: BlurredLetterProps) => {
  return (
    <div
      className={cn(
        'text-patara-light-400 flex size-[60px] items-center justify-center rounded-full text-3xl font-bold opacity-75',
        className,
      )}
      style={{
        filter: 'blur(3px)',
        background:
          'linear-gradient(180deg, #282832 0%, #212121 36.52%, #121212 100%)',
      }}
    >
      {children}
    </div>
  );
};

export default BlurredLetter;
