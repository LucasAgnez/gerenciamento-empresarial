import React, { useState } from "react";
import styles from "./CadastrarFuncionario.module.css";

const ModalCadastrarFuncionario = (props) => {

    const [showModal, setShowModal] = useState(false);

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
                        <input type="text" name="nome" id="nome"/>
                    </fieldset>

                    <fieldset>
                        <label> Departamento</label>
                        <input list="departamentos"/>
                        <datalist id="departamentos">
                            <option value="Departamento 01" />
                            <option value="Departamento 02" />
                            <option value="Departamento 03" />
                        </datalist>
                    </fieldset>

                    <fieldset>
                        <label>CPF</label>
                        <input type="text" name="cpf" id="cpf"/>
                    </fieldset>

                    <fieldset>
                        <label>Email</label>
                        <input type="email" name="email" id="email"/>
                    </fieldset>
                </form>
            </section>

            <footer>
                <button type="submit" className={styles.btn_cadastrar} onClick={() => setShowModal(false)}>
                    Cadastrar
                </button>
                <button type="button" className={styles.btn_fechar} onClick={() => setShowModal(false)}>
                    Fechar
                </button>
            </footer>
        </div>
    )
}

export default ModalCadastrarFuncionario;