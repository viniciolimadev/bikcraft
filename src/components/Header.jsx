const Header = ({ children, corFundo, corFonte, altura, preenchimento }) => {
  const style = `
  ${corFonte}
  ${corFundo}
  ${altura}
  ${preenchimento}
  `;

  return <header className={style}>{children}</header>;
};

export default Header;

// bg-black flex justify-between pt-0 pb-0 pr-25 pl-25 items-center text-white h-[2.5rem]
