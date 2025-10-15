"use client";

type PillarCardProps = {
  badge: string;
  description: string;
  index: number;
};

export default function PillarCard({ badge, description, index }: PillarCardProps) {
  return (
    <div
      className="h-100 p-4 rounded-4 border-0 position-relative overflow-hidden pillar-card"
      style={{
        background: "white",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
      }}
    >
      <div className="d-flex align-items-center gap-3 mb-3">
        <div
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{
            width: "48px",
            height: "48px",
            background: index === 0 ? "rgba(59, 130, 246, 0.1)" :
                       index === 1 ? "rgba(71, 85, 105, 0.1)" :
                       "rgba(59, 130, 246, 0.1)",
            color: index === 0 ? "#3b82f6" :
                   index === 1 ? "#475569" :
                   "#3b82f6",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {index === 0 ? (
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            ) : index === 1 ? (
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
            ) : (
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            )}
          </svg>
        </div>
        <span
          className="badge text-uppercase fw-semibold px-3 py-2"
          style={{
            background: index === 0 ? "rgba(59, 130, 246, 0.1)" :
                       index === 1 ? "rgba(71, 85, 105, 0.1)" :
                       "rgba(59, 130, 246, 0.1)",
            color: index === 0 ? "#1e40af" :
                   index === 1 ? "#334155" :
                   "#1e40af",
            fontSize: "0.7rem",
            letterSpacing: "0.05em"
          }}
        >
          {badge}
        </span>
      </div>
      <p className="mb-0" style={{ color: "#64748b", lineHeight: 1.7, fontSize: "0.95rem" }}>
        {description}
      </p>
    </div>
  );
}
