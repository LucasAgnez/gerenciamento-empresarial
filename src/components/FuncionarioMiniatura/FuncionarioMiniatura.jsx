import { useNavigate } from "react-router-dom";
import styles from "./FuncionarioMiniatura.module.css";

const FuncionarioMiniatura = (props) => {
  const navigate = useNavigate();
  const {
    id = 10,
    nome = "nome sobrenome",
    idade = "30",
    cargo = "cargo",
    departamento = "departamento",
  } = props;


  return (
    <div
      className={styles.funcionarioMiniatura}
      onClick={() => navigate(`/gerenciamento/equipe/${id}`)}
    >
      <section className={styles.conteudo}>
        <img className={styles.image} src="404image" />
        <section>
          <h1>{id}</h1>
          <section className={styles.infos}>
            <section className={styles.nomeIdade}>
              <p>Nome: {nome}</p>
              <p>Idade: {idade}</p>
            </section>
            <section className={styles.cargoDepartamento}>
              <p>Cargo: {cargo}</p>
              <p>Departamento: {departamento}</p>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};
export default FuncionarioMiniatura;
