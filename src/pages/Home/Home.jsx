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

const Home = () => {
 // const vendas = axios.get('http://localhost:3000/venda').then(() => console.log('vendas carregadas'))  
 const data = [
    {
      name: "Dia T",
      calcados: 21,
      camisas: 30,
    },
		{
      name: "Dia U",
      calcados: 11,
      camisas: 7,
    },
		{
      name: "Dia V",
      calcados: 17,
      camisas: 10,
    },{
      name: "Dia W",
      calcados: 27,
      camisas: 39,
    },
    {
      name: "Dia X",
      camisas: 40,
      calcados: 24,
    },
    {
      name: "Dia Y",
      camisas: 30,
      calcados: 19,
    },
    {
      name: "Dia Z",
      camisas: 20,
      calcados: 98,
    },
  ];

  const data2 = [
    {
      name: "Fulano",
      value: 50,
    },
    {
      name: "Beltrano",
      value: 35,
    },
    {
      name: "Cicrano",
      value: 20,
    },
  ];

  const data3 = [
    {
      name: "Fulano",
      value: 1200.0,
    },
    {
      name: "Beltrano",
      value: 700.12,
    },
    {
      name: "Cicrano",
      value: 1000,
    },
  ];

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
              data={data2}
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
              data={data3}
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
          data={data}
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
