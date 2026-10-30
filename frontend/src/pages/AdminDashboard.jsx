import TopBar from "../components/admin/TopBar";
import "./AdminDashboard.css";
import DashboardCard from "../components/admin/DashboardCard";
import SellingChart from "../components/admin/SellingChart";
import {
  CircleDollarSign,
  ShoppingBag,
  ChartNoAxesColumnIncreasing,
  PackageX,
} from "lucide-react";

// TODO: incluir chamadas à API
// TODO: comentar
// TODO: adicionar a tabela

function ActivitieBox({ title, when, children }) {
  return (
    <div className="actv-box">
      <div className="actv-icon-box">{children}</div>
      <div className="actv-descr">
        <h3>{title}</h3>
        <p>{when}</p>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <>
      <div className="dashboard-page">
        <TopBar title="Dashboard" />

        <div className="dashboard-main">
          <div className="subtitle-box">
            <h2>Visão Geral</h2>
            <p>Dados atualizados no dia tal na hora tal</p>
          </div>

          <div className="general-infos">
            <DashboardCard
              title="Receita no mês"
              value="R$ 184.920"
              comment="12,4% vs. mês anterior"
            >
              <CircleDollarSign />
            </DashboardCard>
            <DashboardCard
              title="Pedidos"
              value="428"
              comment="8,7% vs. mês anterior"
            >
              <ShoppingBag />
            </DashboardCard>
            <DashboardCard
              title="Ticket médio"
              value="R$ 432"
              comment="3,1% vs. mês anterior"
            >
              <ChartNoAxesColumnIncreasing />
            </DashboardCard>
            <DashboardCard
              title="Produtos sem estoque"
              value="12"
              comment="2 itens vs. mês anterior"
            >
              <PackageX />
            </DashboardCard>
          </div>

          <div className="chart-and-activities">
            <SellingChart
              title="Vendas nos últimos 7 dias"
              data={[
                { dia: "S", valor: 3200 },
                { dia: "T", valor: 3500 },
                { dia: "Q", valor: 9200 },
                { dia: "Q", valor: 7200 },
                { dia: "S", valor: 6200 },
                { dia: "S", valor: 5200 },
                { dia: "D", valor: 8600, destaque: true },
              ]}
            />
            <div className="activities-box">
              <h2>Atividade recente</h2>

              <ActivitieBox title="Novo pedido #10482" when="há 6 min">
                <ShoppingBag />
              </ActivitieBox>
              <ActivitieBox title="Novo pedido #10482" when="há 6 min">
                <ShoppingBag />
              </ActivitieBox>
              <ActivitieBox title="Novo pedido #10482" when="há 6 min">
                <ShoppingBag />
              </ActivitieBox>
              <ActivitieBox title="Novo pedido #10482" when="há 6 min">
                <ShoppingBag />
              </ActivitieBox>
              <ActivitieBox title="Novo pedido #10482" when="há 6 min">
                <ShoppingBag />
              </ActivitieBox>
              <ActivitieBox title="Novo pedido #10482" when="há 6 min">
                <ShoppingBag />
              </ActivitieBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
