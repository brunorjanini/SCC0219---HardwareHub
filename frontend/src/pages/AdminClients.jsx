import TopBar from "../components/admin/TopBar";
import SuperiorModal from "../components/SuperiorModal";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export default function AdminClients() {
  const [error, setError] = useState("");

  return (
    <>
      <div className="clients-page">
        <TopBar title="Clientes" />
      </div>

      <button onClick={() => setError("Teste")}>Teste</button>

      <AnimatePresence>
        {error && (
          <SuperiorModal type={"error"} onClose={() => setError("")}>
            {error}
          </SuperiorModal>
        )}
      </AnimatePresence>
    </>
  );
}
