'use client';
import RadialBackground from './ui/RadialBackground';
import ResultLink from './result/ResultLinkSection';
import PromoSection from './result/PromoSection';

type Props = {
  waLink: string;
  onNew?: () => void;
};

export default function ResultStep({ waLink, onNew }: Props) {
  return (
    <div className="space-y-5">
      <RadialBackground className="pt-10" invertOnMd>
        <ResultLink waLink={waLink} onNew={onNew} />
        <PromoSection />
      </RadialBackground>
    </div>
  );
}
