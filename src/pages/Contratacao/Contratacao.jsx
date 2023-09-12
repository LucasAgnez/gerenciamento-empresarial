import { useState } from "react";
import styles from "./Contratacao.module.css";
import InputMask from "react-input-mask";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button
} from "@mui/material/";

const Contratacao = () => {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("0");
  const [erroTelefone, setErroTelefone] = useState(false);
  const [erroData, setErroData] = useState(false);
  const [erroCpf, setErroCpf] = useState(false);
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [cargo, setCargo] = useState("");

  function handleSubmit(e) {
    console.log(
      "\nnome:" +
        nome +
        "\ndata:" +
        dataNasc +
        "\nendereco:" +
        endereco +
        "\ntelefone:" +
        telefone +
        "\nemail:" +
        email +
        "\ncpf:" +
        cpf +
        "\ncargo:" +
        cargo
    );
    alert("Funcionario Cadastrado");
    e.preventDefault();
  }

  function checaErroTelefone(e) {
    if (e.length < 15) {
      setErroTelefone(true);
    } else {
      setErroTelefone(false);
    }
  }

  function checaErroData(e) {
    console.log(e);
    if (e.length < 10) {
      setErroData(true);
    } else {
      setErroData(false);
    }
  }

  function checaErroCpf(e) {
    if (e.length < 14) {
      setErroCpf(true);
    } else {
      setErroCpf(false);
    }
  }

  return (
    <main className={styles.main}>
        <h1 className={styles.header}>Cadastro de funcionário</h1>
      <form onSubmit={() => handleSubmit()} className={styles.form}>
        <TextField
          required
          id="nome"
          label="Nome Completo"
          defaultValue=""
          onChange={(e) => setNome(e.target.value)}
        />
        <div>
          <FormLabel id="genero">
            Gênero
          </FormLabel>
          <RadioGroup
            required
            row
            aria-labelledby="genero"
            name="select genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <FormControlLabel
              value="H"
              control={<Radio required={true} />}
              label="Homem"
            />
            <FormControlLabel
              value="M"
              control={<Radio required={true} />}
              label="Mulher"
            />
            <FormControlLabel
              value="O"
              control={<Radio required={true} />}
              label="Outro"
            />
          </RadioGroup>
        </div>
        <InputMask
          mask="(99) 99999-9999"
          maskChar=""
          onChange={(e) => (
            setTelefone(e.target.value), checaErroTelefone(e.target.value)
          )}
          required
        >
          {() => (
            <TextField
              error={erroTelefone}
              required
              id="telefone"
              label="Telefone"
              defaultValue=""
            />
          )}
        </InputMask>
        <InputMask
          mask="99/99/9999"
          maskChar=""
          onChange={(e) => (
            setDataNasc(e.target.value), checaErroData(e.target.value)
          )}
          required
        >
          {() => (
            <TextField
              error={erroData}
              required
              id="data"
              label="Data de Nascimento"
              defaultValue=""
            />
          )}
        </InputMask>
        <TextField
          required
          id="email"
          label="Email"
          defaultValue=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          id="endereco"
          label="Endereço"
          defaultValue=""
          onChange={(e) => setEndereco(e.target.value)}
        />
        <InputMask
          mask="999.999.999-99"
          maskChar=""
          onChange={(e) => (
            setCpf(e.target.value), checaErroCpf(e.target.value)
          )}
          required
        >
          {() => (
            <TextField
              error={erroCpf}
              required
              id="cpf"
              label="CPF"
              defaultValue=""
            />
          )}
        </InputMask>
        <TextField
          required
          id="cargo"
          label="Cargo"
          defaultValue=""
          onChange={(e) => setCargo(e.target.value)}
        />
        <Button
          type="submit"
          disabled={erroTelefone || erroData || erroCpf}
          color="success"
          variant="contained"
        >Confirma</Button>
      </form>
    </main>
  );
};
export default Contratacao;
