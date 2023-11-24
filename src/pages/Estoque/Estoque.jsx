import React, { useEffect, useState } from "react";
import Filtro from "../../components/Filtro/Filtro";
import ProdutoMiniatura from "../../components/ProdutoMiniatura/ProdutoMiniatura";
import styles from "./Estoque.module.css";
import { TextField, Button } from '@mui/material/';
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Estoque = () => {
  const tags=["esporte", "casual", "masculino", "feminino"];
  const [vendas, setVendas] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // URL da API que retorna a lista de produtos.
    fetch("https://64ff5d1af8b9eeca9e2a0b54.mockapi.io/produto")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data); // Atualiza o estado com a lista de produtos
      })
      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
      });
  }, []); // O segundo parâmetro vazio [] garante que o useEffect seja executado apenas uma vez

  const recarregarEstoque = () => {
    fetch("https://64ff5d1af8b9eeca9e2a0b54.mockapi.io/produto")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data); 
      })
      .catch((error) => {
        console.error("Erro ao buscar os produtos:", error);
      });
  };

  return (
    <main className={styles.estoque}>
      <section className={styles.cabecalho}>
        <Button 
          color="success"
          variant="contained"
          onClick={() => setVendas(!vendas)}>
            Registrar Venda
        </Button>
        <section className={styles.pesquisa}>
          <div className={styles.barraPesquisa}>
          <TextField id="pesquisa" variant="standard"/>
            <FiSearch />
          </div>
        </section>
        <Filtro slider={true} labels={tags}/>
      </section>
      <section>
        <button className={styles.addButton} onClick={() => navigate(`/gerenciamento/estoque/create`)}>
            Adicionar
        </button>
      </section>
      <section className={styles.estoqueGrid}>
      {produtos.map((produto) => (
          <ProdutoMiniatura
            key={produto.id} // Chave única para cada produto
            id={produto.id}
            nome={produto.nome}
            qntd={produto.qntd}
            img={produto.img} // URL da imagem
            recarregarEstoque={recarregarEstoque}
          />
        ))}
      </section>
      { vendas ? <Button 
          color="success"
          variant="contained">
            Concluir
        </Button> : null}
    </main>
  );
};
export default Estoque;
