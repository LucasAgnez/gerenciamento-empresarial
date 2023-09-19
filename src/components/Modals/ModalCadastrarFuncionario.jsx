import React, { useState } from "react";
import styles from "./CadastrarFuncionario.module.css";

const ModalCadastrarFuncionario = ({ closeModal }) => {

    return (
        <div>
            <header>
                <div>
                    <h3>Cadastro de Funcionário</h3>
                </div>
            </header>

            <section>
                <form>
                    <fieldset>
                        <label>Nome Completo</label>
                        <input type="text" name="nome" id="nome" required/>
                    </fieldset>

                    <fieldset>
                        <label> Departamento</label>
                        <select id="departamentos" name="departamentos" required>
                            <option value="dp1">Departamento 01</option>
                            <option value="dp2">Departamento 02</option>
                            <option value="dp3">Departamento 03</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <label>CPF</label>
                        <input type="text" name="cpf" id="cpf" required/>
                    </fieldset>

                    <fieldset>
                        <label>Email</label>
                        <input type="email" name="email" id="email"/>
                    </fieldset>
                </form>
            </section>

            <footer>
                <button type="submit" className={styles.btn_cadastrar} onClick={() => closeModal(false)}>
                    Cadastrar
                </button>
                <button type="button" className={styles.btn_fechar} onClick={() => closeModal(false)}>
                    Fechar
                </button>
            </footer>
        </div>
    )
}

export default ModalCadastrarFuncionario;