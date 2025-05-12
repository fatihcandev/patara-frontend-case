import { ThreeDotsBounce } from '@/assets/svg';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <ThreeDotsBounce fill="white" width={48} height={48} />
    </div>
  );
};

export default Loading;
