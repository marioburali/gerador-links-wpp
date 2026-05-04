'use client';
import Image from 'next/image';
import RadialBackground from './ui/RadialBackground';
import ResultLink from './result/ResultLinkSection';
import PromoSection from './result/PromoSection';

type Props = {
  waLink: string;
  onNew?: () => void;
};

export default function ResultStep({ waLink, onNew }: Props) {
  return (
    <div className="mx-auto w-full px-4 md:px-8 lg:px-10 xl:px-12 2xl:px-14 overflow-hidden">
      <RadialBackground
        className="pt-10 lg:px-10 lg:py-14 xl:py-16 2xl:py-18 overflow-visible"
        invertOnMd
      >
        <div className="relative mx-auto w-full px-6 z-10">
          <div className="w-full lg:max-w-[838px] lg:-translate-x-6 xl:-translate-x-8">
            <ResultLink waLink={waLink} onNew={onNew} />
            <PromoSection />
          </div>
        </div>
        <Image
          src="/whatsapp.svg"
          alt=""
          width={328}
          height={328}
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-14 h-[94.48227438326175px] w-[93.55597435926941px] transform:rotate-[12.76deg] md:-right-22 md:-top-26 md:h-[152.39289447363876px] md:w-[150.89884544143132px] lg:-right-30 lg:top-1/2 lg:h-[2238px] lg:w-[238px] lg:-translate-y-1/2 xl:-right-30 xl:top-1/2 xl:h-[328px] xl:w-[328px] xl:-translate-y-1/2 2xl:h-[490px] 2xl:w-[490px] z-0"
        />
      </RadialBackground>
    </div>
  );
}
