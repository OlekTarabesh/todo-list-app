import { ButtonPropsType } from "./types";

export const Button: React.FC<ButtonPropsType> = ({
  onClick,
  onChange,
  onKeyDown,
  children,
  className,
}) => {
  return (
    <button
      onKeyDown={onKeyDown}
      disabled={false}
      onChange={onChange}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
