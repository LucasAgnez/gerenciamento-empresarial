import FuncionarioMiniatura from "../../components/FuncionarioMiniatura/FuncionarioMiniatura";
import styles from "./Equipe.module.css";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

const Equipe = () => {
  return (
    <main className={styles.equipe}>
      <section className={styles.cabecalho}>
        <section className={styles.pesquisa}>
          <div className={styles.barraPesquisa}>
            <input />
            <FiSearch />
          </div>
        </section>
        <button className={styles.filtro}>
          <FaFilter style={{margin: 0}}/>
        </button>
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
