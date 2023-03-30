interface IconProps {
  size?: string | number;
  fill?: string;
}

export const HeartEmptyIcon = ({ size = 32, fill = '#fff', ...restProps }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...restProps}>
      <path
        d="M4.42602 12.9469L10.1622 19.1217C11.1546 20.1899 12.8454 20.1899 13.8378 19.1217L19.574 12.9469C21.4753 10.9002 21.4753 7.58179 19.574 5.53505C17.6726 3.48832 14.5899 3.48832 12.6885 5.53505V5.53505C12.3168 5.93527 11.6832 5.93527 11.3115 5.53505V5.53505C9.4101 3.48832 6.32738 3.48832 4.42602 5.53505C2.52466 7.58178 2.52466 10.9002 4.42602 12.9469Z"
        stroke={fill}
        strokeWidth="2"
      />
    </svg>
  );
};
