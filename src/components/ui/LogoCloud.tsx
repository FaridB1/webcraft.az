import { InfiniteSlider } from './InfiniteSlider';
import { ProgressiveBlur } from './ProgressiveBlur';

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="logo-cloud" style={{ position: 'relative', width: '100%', padding: '2rem 0' }}>
      <InfiniteSlider gap={42} speed={60} reverse>
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            style={{ height: '40px', objectFit: 'contain', userSelect: 'none', pointerEvents: 'none' }}
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur direction="left" blurIntensity={2} />
      <ProgressiveBlur direction="right" blurIntensity={2} />
    </div>
  );
}
