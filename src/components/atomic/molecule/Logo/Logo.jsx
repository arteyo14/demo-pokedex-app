import { Image } from '@atomic';

const Logo = ({ src, width = '100%' }) => {
  return <Image src={src} width={width} />;
};

export default Logo;
