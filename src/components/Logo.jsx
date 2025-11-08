const Logo = ({
  texto,
  tamanhoFonte,
  pesoFonte,
  espacamentoFonte,
  caixaFonte,
}) => {
  const style = `
  ${tamanhoFonte}
  ${pesoFonte}
  ${espacamentoFonte}
  ${caixaFonte}
  `;

  return <span className={style}>{texto}</span>;
};

export default Logo;
