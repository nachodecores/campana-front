"use client";

import { useState } from "react";
import ControlPanel from "@/components/ControlPanel";

export default function RunScrapersPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRunScrapers = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/run-scrapers", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Error al ejecutar los scrapers");
      }

      const data = await response.json();
      setMessage(data.message || "Scrapers ejecutados correctamente.");
    } catch (error) {
      setMessage("Error: No se pudo ejecutar los scrapers.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ControlPanel
      onRunScrapers={handleRunScrapers}
      loading={loading}
      message={message}
    />
  );
}
