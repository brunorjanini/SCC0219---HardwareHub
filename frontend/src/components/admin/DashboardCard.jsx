import "./DashboardCard.css";

export default function DashboardCard({ title, value, comment, children }) {
  return (
    <div className="dashboard-card">
      <div className="card-title-icon">
        <h2>{title}</h2>
        <div className="card-icon">{children}</div>
      </div>
      <h3>{value}</h3>
      <p>{comment}</p>
    </div>
  );
}
