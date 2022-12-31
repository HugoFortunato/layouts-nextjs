import { ButtonProps, S } from ".";

export function Button({
  onClick,
  children,
  color = "primary",
  disabled,
}: ButtonProps) {
  return (
    <S.Container onClick={() => onClick} color={color} disabled={disabled}>
      {children}
    </S.Container>
  );
}
