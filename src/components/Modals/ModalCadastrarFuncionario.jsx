import React, { useState } from "react";
import styles from "./CadastrarFuncionario.module.css";

const ModalCadastrarFuncionario = ({ closeModal }) => {

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
                                    placeholder="Digite o nome completo." maxLength={250} required/>
                        </fieldset>

                        <fieldset>
                            <label>Sexo:</label>
                            <select className={styles.select_form} name="sexo" id="sexo">
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Departamento:</label>
                            <select className={styles.select_form} id="departamentos" name="departamentos" required>
                                <option value="design">Design</option>
                                <option value="financeiro">Financeiro</option>
                                <option value="rh">RH</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>CPF</label> <br />
                            <input className={styles.input_form} type="text" name="cpf" id="cpf" 
                                    placeholder="000.000.000-00" required/>
                        </fieldset>

                        <fieldset>
                            <label>Email</label> <br />
                            <input className={styles.input_form} type="email" name="email" id="email" 
                                    placeholder="exemplo@gmail.com" maxLength={250} />
                        </fieldset>

                        <fieldset>
                            <label>Salário</label> <br />
                            <input className={styles.input_form} type="number" min="0.00" max="10000.00" step="0.01" 
                                    name="salario" id="salario" placeholder="Informe o salário." required/>
                        </fieldset>
                    </form>
                </section>

                <footer className={styles.modal_footer}>
                    <button type="submit" className={styles.btn_cadastrar} onClick={() => closeModal(false)}>
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