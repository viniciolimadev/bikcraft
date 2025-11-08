import Header from "./Header.jsx";
import Logo from "./Logo.jsx";

const App = () => {
  return (
    <>
      <Header
        corFonte="text-white"
        corFundo="bg-black"
        altura="h-[6rem]"
        preenchimento="px-50"
      >
        <Logo
          texto="bikcraft"
          tamanhoFonte="text-5xl"
          pesoFonte="font-bold"
          caixaFonte="uppercase"
          espacamentoFonte="tracking-[0.5]"
        />
      </Header>
    </>
  );
};

export default App;
