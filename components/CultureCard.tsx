"use client";

type CultureCardProps = {
  title: string;
  description: string;
  index: number;
};

export default function CultureCard({ title, description, index }: CultureCardProps) {
  return (
    <div
      className="h-100 p-4 rounded-4 border-0 position-relative overflow-hidden culture-card"
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
      <div className="d-flex align-items-start gap-3 mb-3">
        <div
          className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
          style={{
            width: "48px",
            height: "48px",
            background: index === 0 ? "rgba(59, 130, 246, 0.1)" :
                       index === 1 ? "rgba(96, 165, 250, 0.1)" :
                       "rgba(71, 85, 105, 0.1)",
            color: index === 0 ? "#3b82f6" :
                   index === 1 ? "#2563eb" :
                   "#475569",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {index === 0 ? (
              // Ícone de escudo (regulação)
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            ) : index === 1 ? (
              // Ícone de rede/conexão (tecnologia)
              <g>
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="5" r="2" />
                <circle cx="5" cy="5" r="2" />
                <circle cx="19" cy="19" r="2" />
                <circle cx="5" cy="19" r="2" />
                <path d="M10.4 10.4L6.9 6.9M13.6 10.4L17.1 6.9M10.4 13.6L6.9 17.1M13.6 13.6L17.1 17.1" />
              </g>
            ) : (
              // Ícone de pessoas (time)
              <g>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </g>
            )}
          </svg>
        </div>
        <div>
          <h3 className="h5 fw-bold mb-2" style={{ color: "#0f172a" }}>
            {title}
          </h3>
        </div>
      </div>
      <p className="mb-0" style={{ color: "#64748b", lineHeight: 1.7, fontSize: "0.95rem" }}>
        {description}
      </p>
    </div>
  );
}
