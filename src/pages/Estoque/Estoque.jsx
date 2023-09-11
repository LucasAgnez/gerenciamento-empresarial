import Filtro from "../../components/Filtro/Filtro";
import ProdutoMiniatura from "../../components/ProdutoMiniatura/ProdutoMiniatura";
import styles from "./Estoque.module.css";
import { TextField } from '@mui/material/';
import { FiSearch } from "react-icons/fi";

const Estoque = () => {
  const tags=["esporte", "casual", "masculino", "feminino"]
  return (
    <main className={styles.estoque}>
      <section className={styles.cabecalho}>
        <section className={styles.pesquisa}>
          <div className={styles.barraPesquisa}>
          <TextField id="pesquisa" variant="standard"/>
            <FiSearch />
          </div>
        </section>
        <Filtro slider={true} labels={tags}/>
      </section>
      <section className={styles.estoqueGrid}>
        <ProdutoMiniatura nome="aaa" qntd="0" id="db29126v" />
        <ProdutoMiniatura nome="aaa" qntd="0" id="db29126v" />
        <ProdutoMiniatura nome="aaa" qntd="0" id="db29126v" />
        <ProdutoMiniatura nome="aaa" qntd="0" id="db29126v" />
        <ProdutoMiniatura nome="aaa" qntd="0" id="db29126v" />
      </section>
    </main>
  );
};
export default Estoque;
