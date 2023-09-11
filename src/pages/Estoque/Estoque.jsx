import ProdutoMiniatura from "../../components/ProdutoMiniatura/ProdutoMiniatura";
import styles from "./Estoque.module.css";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);

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

  return (
    <main className={styles.estoque}>
      <section className={styles.cabecalho}>
        <section className={styles.pesquisa}>
          <div className={styles.barraPesquisa}>
            <input />
            <FiSearch />
          </div>
        </section>
        <button className={styles.filtro}>
          <FaFilter/>
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
          />
        ))}

      </section>
    </main>
  );
};
export default Estoque;
