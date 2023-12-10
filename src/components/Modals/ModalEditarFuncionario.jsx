import React, { useState } from "react";
import styles from "./ModalFuncionario.module.css";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { backend_config } from "../../config/backend.config";

const ModalEditarFuncionario = ({ closeModal, funcionario, modal }) => {

    const [nome, setNome] = useState(funcionario.nome);
    const [departamento, setDepartamento] = useState(funcionario.departamento);
    const [sexo, setSexo] = useState(funcionario.sexo);
    const [cpf, setCpf] = useState(funcionario.cpf);
    const [email, setEmail] = useState(funcionario.email);
    const [salario, setSalario] = useState(funcionario.salario);

    const dto = {
        _id:'',
        nome: '',
        email: '',
        sexo: '',
        departamento: '',
        cpf: '',
        salario: 0.0,
    }

    const departamentoOptions = ["RH","Design","Financeiro"]

    const handleSubmit = async () => {
        // funcionario.nome = nome;
        // funcionario.cpf = cpf;
        // funcionario.sexo = sexo;
        // funcionario.email = email;
        // funcionario.salario = salario;
        // funcionario.departamento = departamento;
        dto._id = funcionario._id
        dto.nome = nome
        dto.email = email
        dto.sexo = sexo
        dto.departamento = departamento
        dto.cpf = cpf
        dto.salario = salario
        try {
            await axios.put(
                backend_config.url+'/funcionario/'+dto._id, dto
            );
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={styles.modal_background}>
            <div className={styles.modal_container}>
                <header>
                    <div className={styles.modal_titulo}>
                        <h3>Editar Funcionário</h3>
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

                        {/* <fieldset>
                            <label>Departamento:</label>
                            <select className={styles.select_form} id="departamentos" name="departamentos" required
                                value={departamento} onChange={(e) => setDepartamento(e.target.value)} >
                                <option value="Design">Design</option>
                                <option value="Financeiro">Financeiro</option>
                                <option value="RH">RH</option>
                            </select>
                        </fieldset> */}
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={departamentoOptions}
                            sx={{ width: 300 }}
                            renderInput={(params) => 
                                <TextField {...params} label="Departamento" required />}
                            value={departamento}
                            getOptionLabel={(option) => option}
                            isOptionEqualToValue={(option, value) => option === value}
                            onChange={(e) => {setDepartamento(e.target.textContent)}}
                        />

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

                        <footer className={styles.modal_footer}>
                            <button type="button" className={styles.btn_fechar} onClick={() => closeModal(false)}>
                                Fechar
                            </button>
                            <button type="submit" className={styles.btn_cadastrar} 
                                onClick={() => {
                                    handleSubmit();
                                    modal(true);
                                    closeModal(false)                        
                                }}
                            >
                                Confirmar
                            </button>
                        </footer>
                        
                    </form>
                </section>

            </div>
        </div>
    )
}

export default ModalEditarFuncionario;