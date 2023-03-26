interface IconProps {
  size?: string | number;
  fill?: string;
}

export const ArrowRightIcon = ({ size = 32, fill = '#000', ...restProps }: IconProps) => {
  return (
    <svg fill={fill} width={size} height={size} viewBox="0 0 32 32" version="1.1" {...restProps}>
      <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
    </svg>
  );
};