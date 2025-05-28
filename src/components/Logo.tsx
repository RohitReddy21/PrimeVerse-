import { GlobeIcon } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative mr-2">
        <div className="text-primary-500">
          <GlobeIcon size={32} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
        </div>
      </div>
      <div className="flex items-baseline">
        <span className="text-primary-500 font-bold text-xl">PRIME</span>
        <span className="text-secondary-500 font-bold text-xl">VERSE</span>
      </div>
    </div>
  );
};

export default Logo;