import BlurredLetter from '@/components/BlurredLetter';

const BlurredLetters = () => {
  return (
    <>
      <BlurredLetter className="absolute top-0 right-0 max-md:hidden">
        M
      </BlurredLetter>
      <BlurredLetter className="absolute top-0 left-[1.5vw] max-md:hidden lg:left-[3.5vw]">
        P
      </BlurredLetter>
      <BlurredLetter className="absolute top-[210px] right-[5vw] max-md:hidden lg:right-[10vw]">
        C
      </BlurredLetter>
      <BlurredLetter className="absolute top-[250px] left-[1vw] max-md:hidden lg:left-[2vw]">
        S
      </BlurredLetter>
      <BlurredLetter className="absolute top-[500px] left-[5vw] max-md:hidden lg:left-[12vw]">
        F
      </BlurredLetter>
      <BlurredLetter className="absolute right-[1vw] bottom-[200px] max-md:hidden lg:right-[2vw]">
        W
      </BlurredLetter>
      <BlurredLetter className="absolute right-[1.5vw] bottom-0 max-md:hidden lg:right-[3.5vw]">
        A
      </BlurredLetter>
      <BlurredLetter className="absolute bottom-0 left-0 max-md:hidden">
        G
      </BlurredLetter>
    </>
  );
};

export default BlurredLetters;
