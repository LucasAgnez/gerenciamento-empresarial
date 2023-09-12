import styles from "./Funcionario.module.css";

const Funcionario = (props) => {
  //const [nome, cpf, dataNascimento, endereco, salario, email, telefone, foto] = props

  const nome = "João da Silva";
  const cpf = "123.456.789-00";
  const dataNascimento = "01/01/1990";
  const endereco = "Rua da Amostra, 123";
  const salario = "R$ 5.000,00";
  const email = "joao.silva@example.com";
  const telefone = "(11) 1234-5678";
  const foto = "404image";

  return (
    <main className={styles.funcionario}>
      <div className={styles.dados}>
        <div className={styles.header}>
          <img src={foto} alt="Foto" className={styles.foto} />
          <h2>{nome}</h2>
        </div>
        <div className={styles.dado}>
          <strong>CPF: </strong>
          <p className={styles.valor}> {cpf} </p>
        </div>
        <div className={styles.dado}>
          <strong>Data de Nascimento: </strong>
          <p className={styles.valor}> {dataNascimento} </p>
        </div>
        <div className={styles.dado}>
          <strong>Telefone: </strong>
          <p className={styles.valor}> {telefone} </p>
        </div>
        <div className={styles.dado}>
          <strong>Email: </strong>
          <p className={styles.valor}> {email} </p>
        </div>
        <div className={styles.dado}>
          <strong>Endereço: </strong>
          <p className={styles.valor}> {endereco} </p>
        </div>
        <div className={styles.dado}>
          <strong>Salário: </strong>
          <p className={styles.valor}> {salario} </p>
        </div>
      </div >
    </main>
  );
};
export default Funcionario;
