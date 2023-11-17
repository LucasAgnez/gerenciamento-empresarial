import React, { useState } from "react";
import styles from "./CadastrarFuncionario.module.css";

const ModalCadastrarFuncionario = ({ closeModal, funcionarios }) => {

    const [nome, setNome] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [salario, setSalario] = useState(0.0);

    const funcionarioDto = {
        nome: '',
        cpf: '',
        sexo: '',
        email: '',
        salario: 0.0,
        departamento: ''
    }

    const handleSubmit = () => {
        funcionarioDto.nome = nome;
        funcionarioDto.cpf = cpf;
        funcionarioDto.sexo = sexo;
        funcionarioDto.email = email;
        funcionarioDto.salario = salario;
        funcionarioDto.departamento = departamento;
        funcionarios.push(funcionarioDto);
    }

    return (
        <div className={styles.modal_background}>
            <div className={styles.modal_container}>
                <header>
                    <div className={styles.modal_titulo}>
                        <h3>Cadastrar Funcionário</h3>
                    </div>
                </header>

                <section>
                    <form className={styles.form}>
                        <fieldset>
                            <label>Nome Completo</label> <br />
                            <input className={styles.input_form} type="text" name="nome" id="nome" 
                                    placeholder="Digite o nome completo." maxLength={250} required
                                    value={nome} onChange={(e) => setNome(e.target.value)}
                                    />
                        </fieldset>

                        <fieldset>
                            <label>Sexo:</label>
                            <select className={styles.select_form} name="sexo" id="sexo" 
                                value={sexo} onChange={(e) => setSexo(e.target.value)}>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Departamento:</label>
                            <select className={styles.select_form} id="departamentos" name="departamentos" required
                                value={departamento} onChange={(e) => setDepartamento(e.target.value)} >
                                <option value="Design">Design</option>
                                <option value="Financeiro">Financeiro</option>
                                <option value="RH">RH</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>CPF</label> <br />
                            <input className={styles.input_form} type="text" name="cpf" id="cpf" 
                                    placeholder="000.000.000-00" required
                                    value={cpf} onChange={(e) => setCpf(e.target.value)}
                                    />
                        </fieldset>

                        <fieldset>
                            <label>Email</label> <br />
                            <input className={styles.input_form} type="email" name="email" id="email" 
                                    placeholder="exemplo@gmail.com" maxLength={250} required
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                        </fieldset>

                        <fieldset>
                            <label>Salário</label> <br />
                            <input className={styles.input_form} type="number" min="0.00" max="10000.00" step="0.01" 
                                    name="salario" id="salario" placeholder="Informe o salário." required
                                    value={salario} onChange={(e) => setSalario(e.target.value)}
                                    />
                        </fieldset>
                    </form>
                </section>

                <footer className={styles.modal_footer}>
                    <button type="submit" className={styles.btn_cadastrar} 
                        onClick={() => {
                            handleSubmit();
                            closeModal(false)                        
                        }}
                    >
                        Confirmar
                    </button>
                    <button type="button" className={styles.btn_fechar} onClick={() => closeModal(false)}>
                        Fechar
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default ModalCadastrarFuncionario;