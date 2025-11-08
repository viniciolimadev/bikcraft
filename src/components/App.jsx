import Header from "./Header.jsx";
import Logo from "./Logo.jsx";
import Navegation from "./Navegation.jsx";
import List from "./List.jsx";
import Item from "./Item.jsx";
import Link from "./Link.jsx";

const App = () => {
  return (
    <>
      <Header
        corFonte="text-white"
        corFundo="bg-black"
        altura="h-[6rem]"
        preenchimento="px-50"
        modeloCaixa="flex"
        justificacao="justify-between"
        alinhamento="items-center"
      >
        <Logo
          texto="bikcraft"
          tamanhoFonte="text-5xl"
          pesoFonte="font-bold"
          caixaFonte="uppercase"
          espacamentoFonte="tracking-[0.5]"
        />
        <Navegation>
          <List modeloCaixa="flex" distanciamento="gap-10">
            <Item>
              <Link
                texto="modelos"
                referencia="#"
                tamanhoFonte="text-lg"
                pesoFonte="font-bold"
                caixaFonte="uppercase"
                espacamentoFonte="tracking-[0.15rem]"
                sobreFonte="hover:text-yellow-500"
                transicao="duration-200"
              />
            </Item>
            <Item>
              <Link
                texto="contato"
                referencia="#"
                tamanhoFonte="text-lg"
                pesoFonte="font-bold"
                caixaFonte="uppercase"
                espacamentoFonte="tracking-[0.15rem]"
                sobreFonte="hover:text-yellow-500"
              />
            </Item>
            <Item>
              <Link
                texto="sobre"
                referencia="#"
                tamanhoFonte="text-lg"
                pesoFonte="font-bold"
                caixaFonte="uppercase"
                espacamentoFonte="tracking-[0.15rem]"
                sobreFonte="hover:text-yellow-500"
              />
            </Item>
          </List>
        </Navegation>
      </Header>
    </>
  );
};

export default App;
