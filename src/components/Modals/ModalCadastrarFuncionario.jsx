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
                    <form>
                        <fieldset>
                            <label>Nome Completo</label> <br />
                            <input className={styles.input_form} type="text" name="nome" id="nome" placeholder="Digite o nome completo." maxLength={250} required/>
                        </fieldset>

                        <fieldset>
                            <label>Sexo: </label>
                            <select name="sexo" id="sexo">
                                <option value="s1">Masculino</option>
                                <option value="s1">Feminino</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Departamento: </label>
                            <select id="departamentos" name="departamentos" required>
                                <option value="dp1">Departamento 01</option>
                                <option value="dp2">Departamento 02</option>
                                <option value="dp3">Departamento 03</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>CPF</label> <br />
                            <input className={styles.input_form} type="text" name="cpf" id="cpf" placeholder="000.000.000-00" required/>
                        </fieldset>

                        <fieldset>
                            <label>Email</label> <br />
                            <input className={styles.input_form} type="email" name="email" placeholder="exemplo@gmail.com" maxLength={250} id="email"/>
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