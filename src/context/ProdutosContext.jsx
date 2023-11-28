import { createContext, useState, useEffect} from "react";

export const ProdutosContext = createContext()

export const ProdutosProvider = (props) => {
    const [produtos, setProdutos] = useState([])
    const [lista, setLista] = useState([])

    useEffect(() => {
        // URL da API que retorna a lista de produtos.
        fetch("https://64ff5d1af8b9eeca9e2a0b54.mockapi.io/produto")
          .then((response) => response.json())
          .then((data) => {
            setProdutos(data); // Atualiza o estado com a lista de produtos
            setLista(data.map((item) => ({...item, qntd: 0})));
          })
          .catch((error) => {
            console.error("Erro ao buscar os produtos:", error);
          });
      }, []); // O segundo parâmetro vazio [] garante que o useEffect seja executado apenas uma vez

      return (
        <ProdutosContext.Provider value={{produtos, setProdutos, lista, setLista}}>{props.children}</ProdutosContext.Provider>
      )
} 

