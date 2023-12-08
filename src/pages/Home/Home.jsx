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
  
    vendas.forEach((venda) => {
      const { data } = venda;
  
      if (!vendasPorDia[data]) {
        vendasPorDia[data] = [];
      }
  
      vendasPorDia[data].push(venda);
    });
  
    const resultadoFinal = [];
  
    for (const data in vendasPorDia) {
      resultadoFinal.push({
        data: data,
        vendas: vendasPorDia[data]
      });
    }
    return resultadoFinal;
  };

  const v  = vendas && vendedores ? organizarVendas(vendas) : []
  const vd  = vendas && vendedores ? organizarVendasPorDia(vendas) : []
  //name: dia
  //dado 1: numero
  //dado 2: numero

  const graficoLinha = vd.map(objeto => ({
    name: objeto.data,
    numeroDeVendas: objeto.vendas.length
  }));
  //name: pessoa
  //value: numero
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
