import React from 'react';
import { ButtonWrapper, ButtonWrapperProps } from './styles/ButtonWrapper';

interface ButtonBaseProps {
  type?: "button" | "submit" | "reset";
  /**
   * Essa prop usa o disabled padrão do HTML e aplica um CSS junto
   */
  disabled?: boolean;
  /**
   * Passe via children o que deseja renderizar dentro do botão
   */
  children: React.ReactNode;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type ButtonProps = ButtonBaseProps & ButtonWrapperProps;
export default function Button({
  type,
  disabled,
  children,
  color,
  onClick
}: ButtonProps): JSX.Element {
  return (
    <ButtonWrapper
      type={type}
      disabled={disabled}
      color={color}
      onClick={onClick}
    >
      [{children}]
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  color: 'primary.main',
}