import React, { useState } from "react";
import styles from "./ModalFuncionario.module.css";
import TextField from '@mui/material/TextField';
import axios from "axios";
import { backend_config } from "../../config/backend.config";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import InputMask from "react-input-mask";
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

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
            const response = await axios.put(
                backend_config.url+'/funcionario/'+dto._id, dto
            );
            if(response.status === 200){
                toast.success('Funcionário editado com Sucesso')
            }
        } catch (error) {
            toast.error('Não foi possível editar o usuário. ' + error.response.data)
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
                            <FormControl fullWidth>
                                <TextField id="outlined-size-small" 
                                    size="small"
                                    label="Nome Completo" 
                                    required
                                    placeholder="Digite o nome completo."
                                    value={nome} 
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </FormControl>
                        </fieldset>

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl className={styles.select_form} sx={{ m: 1, minWidth: 150 }}>
                                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                                <Select
                                    className={styles.select_form}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={sexo}
                                    label="Sexo"
                                    onChange={(e) => setSexo(e.target.value)}
                                >
                                    <MenuItem value="Masculino">Masculino</MenuItem>
                                    <MenuItem value="Feminino">Feminino</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 220 }}>
                                <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
                                <Select
                                    className={styles.select_form}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={departamento}
                                    label="Departamento"
                                    required
                                    onChange={(e) => setDepartamento(e.target.value)}
                                >
                                    <MenuItem value="Design">Design</MenuItem>
                                    <MenuItem value="Financeiro">Financeiro</MenuItem>
                                    <MenuItem value="RH">RH</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <fieldset>
                            <InputMask
                                id="cpf"
                                name="cpf"
                                className={styles.input_form}
                                required
                                mask="999.999.999-99" 
                                placeholder="000.000.000-00"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            >
                                {() => <TextField 
                                            id="outlined-size-small" 
                                            size="small"
                                            label="CPF"
                                            required
                                        />}
                            </InputMask>
                        </fieldset>

                        <fieldset>
                            <FormControl fullWidth>
                                <TextField id="outlined-size-small" 
                                    size="small"
                                    label="E-mail" 
                                    required
                                    placeholder="exemplo@gmail.com"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                        </fieldset>

                        <fieldset>
                            <FormControl fullWidth>
                                <TextField id="outlined-size-small" 
                                    size="small"
                                    label="Salário" 
                                    type="number"
                                    placeholder="Informe o salário."
                                    value={salario} 
                                    onChange={(e) => setSalario(e.target.value)}
                                />
                            </FormControl>
                        </fieldset>

                        <footer className={styles.modal_footer}>
                            <Button 
                                variant="contained"
                                onClick={() => closeModal(false)}
                                color="error"
                                >
                                    Fechar
                            </Button>
                            <Button 
                                variant="contained"
                                type="submit"
                                onClick={() => {
                                    handleSubmit();
                                    modal(true);
                                    closeModal(false)                        
                                }}
                                color="success"
                                >
                                    Confirmar
                            </Button>
                        </footer>
                        
                    </form>
                </section>

            </div>
        </div>
    )
}

export default ModalEditarFuncionario;