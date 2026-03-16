export default function Skeleton() {
  return (
    <>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div
              style={{
                width: "120px",
                height: "16px",
                borderRadius: "6px",
                background:
                  "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />
          </div>
          <div
            style={{
              width: "60px",
              height: "32px",
              borderRadius: "6px",
              marginTop: "8px",
              background:
                "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
            }}
          />
        </div>
      </div>

      <div className="projects-grid">
        {[1, 2, 3, 4].map((i) => (
          <div
            className="project-card"
            key={i}
            style={{ overflow: "hidden" }}
          >
            <div className="project-card-header">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                }}
              />
              <div
                style={{
                  width: "70px",
                  height: "22px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                }}
              />
            </div>

            <div
              style={{
                width: "70%",
                height: "18px",
                borderRadius: "6px",
                margin: "12px 0 8px",
                background:
                  "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />

            <div
              style={{
                width: "100%",
                height: "13px",
                borderRadius: "6px",
                marginBottom: "6px",
                background:
                  "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />
            <div
              style={{
                width: "60%",
                height: "13px",
                borderRadius: "6px",
                background:
                  "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
}