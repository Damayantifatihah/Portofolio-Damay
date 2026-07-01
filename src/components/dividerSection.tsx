
function SectionDivider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
        padding: "36px 0",
        backgroundColor: "#FFF8F6",
      }}
    >
      <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #E8B8C0)" }} />
      <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 1 L10.8 6.6 L17 6.6 L12 10.2 L13.8 15.8 L9 12.2 L4.2 15.8 L6 10.2 L1 6.6 L7.2 6.6 Z"
          fill="#E8A0A8"
        />
      </svg>
      <div style={{ width: "80px", height: "1px", background: "linear-gradient(to left, transparent, #E8B8C0)" }} />
    </div>
  );
}

export default SectionDivider;