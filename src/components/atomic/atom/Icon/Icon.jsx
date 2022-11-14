import {
  InfoCircleFilled,
  HeartFilled,
  BackwardFilled
} from '@ant-design/icons';

const getIcon = (name) => {
  const Icons = {
    info: InfoCircleFilled,
    heart: HeartFilled,
    back: BackwardFilled
  };

  const icon = Icons[name] || <div />;
  return icon;
};

const Icon = ({ name, size, style, ...props }) => {
  const Icon = getIcon(name);

  return <Icon style={{ ...style, fontSize: size }} {...props} />;
};

export default Icon;
