import React, { useContext, useEffect, useState } from "react";
import Filtro from "../../components/Filtro/Filtro";
import ProdutoMiniatura from "../../components/ProdutoMiniatura/ProdutoMiniatura";
import ModalVendas from "../../components/Modals/ModalVendas"
import styles from "./Estoque.module.css";
import { TextField, Button } from '@mui/material/';
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ProdutosContext } from "../../context/ProdutosContext";

const Estoque = () => {
  const tags=["esporte", "casual", "masculino", "feminino"];
  const [vendas, setVendas] = useState(false);
  const [modalVendas, setModalVendas] = useState(false)
  const navigate = useNavigate();

  const {produtos, lista} = useContext(ProdutosContext)

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
        <Button 
          color="success"
          variant="contained"
          style={{marginLeft: "2rem"}}
          disabled={vendas}
          onClick={() => navigate(`/gerenciamento/estoque/create`)}>
            Adicionar
        </Button>
        <section className={styles.pesquisa}>
          <div className={styles.barraPesquisa}>
            <TextField id="pesquisa" variant="standard"/>
            <FiSearch />
          </div>
        </section>
        <Filtro slider={true} labels={tags}/>
      </section>
      {modalVendas && <ModalVendas closeModal={setModalVendas} lista={lista} />}
      <section className={styles.estoqueGrid}>
      {produtos.map((produto) => (
          <ProdutoMiniatura
            key={produto.id} // Chave única para cada produto
            id={produto.id}
            venda={vendas}
            nome={produto.nome}
            qntd={produto.qntd}
            img={produto.img} // URL da imagem
            recarregarEstoque={recarregarEstoque}
          />
        ))}
      </section>
      { vendas ? 
        <Button 
          onClick={() => setModalVendas(true)}
          color="success"
          variant="contained">
            Concluir
        </Button> : null}
    </main>
  );
};
export default Estoque;
