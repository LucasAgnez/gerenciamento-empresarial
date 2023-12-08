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
    let response = await axios.get("http://localhost:3000/venda");
    let vnds = response.data;
    setVendas(vnds);
    console.log(vnds)
    let response2 = await axios.get("http://localhost:3000/funcionario");
        let funcs = response2.data;
        setVendedores(funcs.filter(f => {
            if(f.departamento=="vendas") {
                return true
            }
            return false
        }));
  }

  useEffect(() => {
    fetchData();
  }, []); 
  

  const calcularValorVenda = (produtos) => {
    return produtos.reduce((total, produto) => total + (produto.preco * produto.qntd), 0);
  };
  
  // Organizar as vendas por vendedor e separar por dia
  const organizarVendas = (vendas) => {
    const vendasPorVendedor = {};
  
    vendas.forEach((venda) => {
      const { idVendedor, data, produtos } = venda;
  
      if (!vendasPorVendedor[idVendedor]) {
        vendasPorVendedor[idVendedor] = {};
      }
  
      if (!vendasPorVendedor[idVendedor][data]) {
        vendasPorVendedor[idVendedor][data] = [];
      }
  
      vendasPorVendedor[idVendedor][data].push(venda);
    });
  
    const resultadoFinal = {};
  
    for (const vendedor in vendasPorVendedor) {
      resultadoFinal[vendedor] = {};
      for (const data in vendasPorVendedor[vendedor]) {
        const vendasPorDia = vendasPorVendedor[vendedor][data];
        const valorTotalVendas = vendasPorDia.reduce((total, venda) => total + calcularValorVenda(venda.produtos), 0);
  
        resultadoFinal[vendedor][data] = {
          numeroVendas: vendasPorDia.length,
          valorTotal: valorTotalVendas,
        };
      }
    }
    
    console.log(resultadoFinal)
    return resultadoFinal;
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
    console.log(resultadoFinal)
    return resultadoFinal;
  };

  const v  = vendas ? organizarVendas(vendas) : null
  const vd  = vendas ? organizarVendasPorDia(vendas) : null
  //name: dia
  //dado 1: numero
  //dado 2: numero
  const graficoLinha = []

  //name: pessoa
  //value: numero
  const pizzaVendedor = [];

  const pizzaCategoria = [];


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
              data={pizzaVendedor}
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
              data={pizzaCategoria}
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
          <Line type="monotone" dataKey="calcados" stroke="#8884d8" />
          <Line type="monotone" dataKey="camisas" stroke="#82ca9d" />
        </LineChart>
      </section>
    </main>
  );
};
export default Home;
