import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";
import styles from "./Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";


const Home = () => {

  const [vendas, setVendas] = useState()
  const [vendedores, setVendedores] = useState()

  async function fetchData() {
    let response2 = await axios.get("http://localhost:3000/funcionario");
    let funcs = response2.data;
    setVendedores(funcs.filter(f => {
        if(f.departamento=="vendas") {
            return true
        }
        return false
    }));
    let response = await axios.get("http://localhost:3000/venda");
    let vnds = response.data;
    setVendas(vnds);
  }

  useEffect(() => {
    fetchData();
  }, []); 
  

  const calcularValorVenda = (produtos) => {
    return produtos.reduce((total, produto) => total + (produto.preco * produto.qntd), 0);
  };
  
  // Organizar as vendas por vendedor e separar por dia
  const organizarVendas = (vendas) => {
    const vendasPorFuncionario = {};

    vendas.forEach((venda) => {
      const { idVendedor, produtos } = venda;

      if (!vendasPorFuncionario[idVendedor]) {
        vendasPorFuncionario[idVendedor] = {
          name: vendedores.find(obj => {
                    return obj._id === idVendedor
                  }).nome,
          vendas: [],
          valorTotal: 0,
        };
      }

      vendasPorFuncionario[idVendedor].vendas.push(venda);
      vendasPorFuncionario[idVendedor].valorTotal += calcularValorVenda(produtos);
    });

    // Formatar o resultado como um array de objetos
    const resultadoFinal = Object.values(vendasPorFuncionario);
    console.log(resultadoFinal)
    return resultadoFinal
  };

  const organizarVendasPorDia = (vendas) => {
    const vendasPorDia = {};
    const dataAtual = new Date(); // Obter a data atual
    const seteDiasAtras = new Date(dataAtual);
    seteDiasAtras.setDate(seteDiasAtras.getDate() - 7)
  
    vendas.forEach((venda) => {
      const { data } = venda;
      const partesData = data.split('-'); // Divide a string da data em dia, mês e ano
      const dataVenda = new Date( partesData[2], partesData[1] - 1, partesData[0]);
      console.log(dataVenda)
      if (dataVenda >= seteDiasAtras){
        if (!vendasPorDia[data]) {
          vendasPorDia[data] = [];
        }
        vendasPorDia[data].push(venda);
      }
  
    });
  
    const resultadoFinal = [];
  
    for (let i = 6; i >= 0; i--) {
      const dataVerificada = new Date(dataAtual);
      dataVerificada.setDate(dataAtual.getDate() - i);
  
      const dataFormatada = `${dataVerificada.getDate().toString().padStart(2, '0')}-${(dataVerificada.getMonth() + 1).toString().padStart(2, '0')}-${dataVerificada.getFullYear()}`;
  
      if (vendasPorDia[dataFormatada]) {
        resultadoFinal.push({
          data: dataFormatada,
          vendas: vendasPorDia[dataFormatada]
        });
      } else {
        resultadoFinal.push({
          data: dataFormatada,
          vendas: []
        });
      }
    }
    return resultadoFinal.sort((a, b) => a.data > b.data ? 1 : -1);
  };

  const v  = vendas && vendedores ? organizarVendas(vendas) : []
  const vd  = vendas && vendedores ? organizarVendasPorDia(vendas) : []

  const graficoLinha = vd.map(objeto => ({
    name: objeto.data,
    numeroDeVendas: objeto.vendas.length
  }));

  const pizzaVendas = v.map(objeto => ({
    name: objeto.name,
    value: objeto.vendas.length
  }));;

  const pizzaValor = v.map(objeto => ({
    name: objeto.name,
    value: objeto.valorTotal
  }));;


  return (
    <main className={styles.main}>
      <header>
        <h1>Estatísticas de vendas</h1>
      </header>
      <section className={styles.vendas}>
        <section className={styles.graficos}>
          <h3>Vendas por Vendedor</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={pizzaVendas}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </section>
        <section className={styles.graficos}>
          <h3>Valor de vendas por Vendedor</h3>
          <PieChart width={200} height={200}>
            <Pie
              data={pizzaValor}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Tooltip
              formatter={(value) => {
                return `R$${value.toFixed(2)}`;
              }}
            />
          </PieChart>
        </section>
      </section>

      <section>
				<h3>Vendas dos últimos 7 dias</h3>
        <LineChart
          width={730}
          height={250}
          data={graficoLinha}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="numeroDeVendas" stroke="#8884d8" />
        </LineChart>
      </section>
    </main>
  );
};
export default Home;
