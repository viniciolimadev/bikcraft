const Link = ({
  texto,
  referencia,
  tamanhoFonte,
  pesoFonte,
  caixaFonte,
  espacamentoFonte,
  sobreFonte,
  transicao,
}) => {
  const style = `
  ${tamanhoFonte}
  ${pesoFonte}
  ${caixaFonte}
  ${espacamentoFonte}
  ${sobreFonte}
  ${transicao}
  `;

  return (
    <a className={style} href={referencia}>
      {texto}
    </a>
  );
};

export default Link;
