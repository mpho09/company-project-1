export default function RulerDivider({ inverted = false }) {
  return (
    <div className={`w-full overflow-hidden ${inverted ? "bg-charcoal" : "bg-plaster"}`}>
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-10">
        <line x1="0" y1="20" x2="1200" y2="20"
          stroke={inverted ? "#EFEAE0" : "#23262A"} strokeWidth="1.5" opacity="0.3" />
        {Array.from({ length: 61 }).map((_, i) => {
          const x = i * 20;
          const isMajor = i % 5 === 0;
          return (
            <g key={i}>
              <line x1={x} y1={isMajor ? 8 : 14} x2={x} y2="20"
                stroke={inverted ? "#EFEAE0" : "#23262A"}
                strokeWidth={isMajor ? 1.5 : 1} opacity={isMajor ? 0.6 : 0.3} />
              {isMajor && (
                <text x={x + 3} y="16" fontSize="9" fontFamily="IBM Plex Mono, monospace"
                  fill={inverted ? "#EFEAE0" : "#23262A"} opacity="0.5">
                  {i}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}