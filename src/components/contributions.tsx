const contributionsStyles = `
  .contrib-section {
    padding: 80px 100px;
    background: linear-gradient(180deg, #FFFBF3 0%, #FFF8F6 100%);
    box-sizing: border-box;
  }

  .contrib-card {
    max-width: 820px;
    margin: 0 auto;
    background: white;
    border: 1px solid #F6E4DE;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(243,128,129,0.08);
    box-sizing: border-box;
  }

  .contrib-graph-wrap {
    width: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: center;
  }

  .contrib-graph-wrap img {
    max-width: 100%;
    height: auto;
    min-width: 600px;
  }

  .contrib-btn {
    background: #FFFBF3;
    color: #F38081;
    border: 1.5px solid #F3B8B8;
    padding: 12px 26px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    letter-spacing: 0.3px;
    text-decoration: none;
    margin-top: 24px;
    transition: background 0.25s, color 0.25s, border-color 0.25s, box-shadow 0.25s, gap 0.25s;
  }

  .contrib-btn:hover {
    background: linear-gradient(135deg, #F38081, #F79977);
    color: #FFFFFF;
    border-color: transparent;
    box-shadow: 0 6px 18px rgba(243,128,129,0.35);
    gap: 12px;
  }

  @media (max-width: 820px) {
    .contrib-section {
      padding: 64px 40px;
    }
  }

  @media (max-width: 700px) {
    .contrib-section {
      padding: 56px 20px;
    }

    .contrib-card {
      padding: 24px 18px;
    }
  }
`;

function Contributions() {
  const githubUsername = "Damayantifatihah";

  return (
    <section id="Contributions" className="contrib-section">
      <style>{contributionsStyles}</style>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p
          style={{
            margin: "0 0 8px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#F79977",
          }}
        >
          Activity
        </p>
        <h2
          style={{
            margin: 0,
            fontSize: "2rem",
            fontWeight: 400,
            color: "#5C3D3D",
            fontFamily: "Georgia, serif",
          }}
        >
          GitHub{" "}
          <em style={{ color: "#F38081", fontStyle: "italic" }}>
            Contributions
          </em>
        </h2>
        <div
          style={{
            width: "36px",
            height: "2px",
            background: "#EFD780",
            borderRadius: "2px",
            margin: "14px auto 0",
          }}
        />
        <p
          style={{
            margin: "12px 0 0",
            fontSize: "13.5px",
            color: "#B08880",
          }}
        >
          A snapshot of my coding activity on GitHub throughout the year
        </p>
      </div>

      {/* Card */}
      <div className="contrib-card">
        <div className="contrib-graph-wrap">
          <img
            src={`https://ghchart.rshah.org/F38081/${githubUsername}`}
            alt={`GitHub contribution graph for ${githubUsername}`}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contrib-btn"
          >
            View GitHub Profile
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contributions;