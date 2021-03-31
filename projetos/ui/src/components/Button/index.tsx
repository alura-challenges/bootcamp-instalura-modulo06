import React from 'react';

// const nome: string = 'Mario';
// console.log(nome);

interface ButtonProps {
  /**
   * Essa prop usa o disabled padrão do HTML e aplica um CSS junto
   */
  disabled?: boolean;
  /**
   * Passe via children o que deseja renderizar dentro do botão
   */
  children: React.ReactNode
}


export default function Button({ disabled, children }: ButtonProps) {
  return (
    <button disabled={disabled}>
      {children}
    </button>
  )
}

// Button.defaultProps = {
// }
// Button.propTypes = {
//   disabled: PropTypes.bool,
//   children: PropTypes.node.isRequired,
// }
