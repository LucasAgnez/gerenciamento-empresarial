import { useState } from "react";
import Filtro from "../../components/Filtro/Filtro";
import ProdutoMiniatura from "../../components/ProdutoMiniatura/ProdutoMiniatura";
import styles from "./Estoque.module.css";
import { TextField, Button } from '@mui/material/';
import { FiSearch } from "react-icons/fi";

const Estoque = () => {
  const tags=["esporte", "casual", "masculino", "feminino"]
  const [vendas, setVendas] = useState(false)
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
      <section className={styles.estoqueGrid}>
        <ProdutoMiniatura vendas={vendas} nome="aaa" qntd="10" id="db29126v" />
        <ProdutoMiniatura vendas={vendas} nome="aaa" qntd="5" id="db29126v" />
        <ProdutoMiniatura vendas={vendas} nome="aaa" qntd="6" id="db29126v" />
        <ProdutoMiniatura vendas={vendas} nome="aaa" qntd="2" id="db29126v" />
        <ProdutoMiniatura vendas={vendas} nome="aaa" qntd="0" id="db29126v" />
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
