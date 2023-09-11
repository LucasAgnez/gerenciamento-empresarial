import FuncionarioMiniatura from "../../components/FuncionarioMiniatura/FuncionarioMiniatura";
import styles from "./Equipe.module.css";
import {TextField} from '@mui/material/';
import { FiSearch } from "react-icons/fi";
import Filtro from "../../components/Filtro/Filtro";

const Equipe = () => {
  const departamentos=["juridico", "design", "vendas", "rh"]
  return (
    <main className={styles.equipe}>
      <section className={styles.cabecalho}>
        <section className={styles.pesquisa}>
          <div className={styles.barraPesquisa}>
            <TextField id="pesquisa" variant="standard"/>
            <FiSearch />
          </div>
        </section>
        <Filtro slider={false} labels={departamentos}/>
      </section>
      <section className={styles.listaEquipe}>
        <FuncionarioMiniatura
          nome="Jociane Barbosa"
          id="10500312"
          cargo="gestor de vendas"
          idade="30"
          departamento="vendas"
        />
        <FuncionarioMiniatura />
        <FuncionarioMiniatura />
        <FuncionarioMiniatura />
      </section>
    </main>
  );
};
export default Equipe;
