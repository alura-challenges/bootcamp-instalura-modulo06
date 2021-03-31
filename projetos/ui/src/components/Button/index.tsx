import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

const ButtonWrapper = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;

    color: ${({ theme, color }) => get(theme, `colors.${color}.contrastText`)};
    background: ${({ theme, color }) => get(theme, `colors.${color}.color`)};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
`;

// const nome: string = 'Mario';
// console.log(nome);

interface ButtonProps {
  color: string;
  /**
   * Essa prop usa o disabled padrão do HTML e aplica um CSS junto
   */
  disabled?: boolean;
  /**
   * Passe via children o que deseja renderizar dentro do botão
   */
  children: React.ReactNode
}


export default function Button({ disabled, children, color }: ButtonProps) {
  return (
    <ButtonWrapper disabled={disabled} color={color}>
      {children}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  color: 'primary.main',
}


// Button.propTypes = {
//   disabled: PropTypes.bool,
//   children: PropTypes.node.isRequired,
// }
