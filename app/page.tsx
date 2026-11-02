"use client";

import { useState } from "react";

const standings = [
  { team: "KADILIMAN ESPORTS", w: 3, l: 0, pts: 27, rd: "+18" },
  { team: "PH VALORIS", w: 2, l: 1, pts: 19, rd: "+7" },
  { team: "LIVESTRONG KINGS", w: 2, l: 1, pts: 17, rd: "+5" },
  { team: "NEMESIS ACADEMY", w: 1, l: 2, pts: 9, rd: "-4" },
  { team: "RAGE ESPORTS", w: 1, l: 2, pts: 7, rd: "-8" },
  { team: "LIVESTRONG HEARTS", w: 0, l: 3, pts: 0, rd: "-18" },
];

const matches = [
  ["07:00 PM", "PH VALORIS", "NEMESIS ACADEMY"],
  ["07:40 PM", "RAGE ESPORTS", "LIVESTRONG KINGS"],
  ["08:20 PM", "KADILIMAN ESPORTS", "PH VALORIS"],
  ["09:00 PM", "NEMESIS ACADEMY", "RAGE ESPORTS"],
  ["09:40 PM", "LIVESTRONG KINGS", "KADILIMAN ESPORTS"],
];

const teams = [
  "KADILIMAN ESPORTS",
  "PH VALORIS",
  "LIVESTRONG KINGS",
  "NEMESIS ACADEMY",
  "RAGE ESPORTS",
  "LIVESTRONG HEARTS",
];

export default function Home() {
  const [menu, setMenu] = useState("HOME");

  const scrollTo = (id: string, name: string) => {
    setMenu(name);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <div style={styles.logoMark}>B</div>
          <div>
            <strong>BAKBAKAN SA PINAS</strong>
            <small>ESPORTS TOURNAMENT</small>
          </div>
        </div>

        <div style={styles.navLinks}>
          {[
            ["HOME", "home"],
            ["MATCHES", "matches"],
            ["STANDINGS", "standings"],
            ["TEAMS", "teams"],
          ].map(([name, id]) => (
            <button
              key={name}
              onClick={() => scrollTo(id, name)}
              style={{
                ...styles.navButton,
                color: menu === name ? "#ff3030" : "#aaa",
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroOverlay}>
          <span style={styles.kicker}>BAKBAKAN SA PINAS</span>

          <h1>
            SEASON <span>5</span>
          </h1>

          <p>
            THE BATTLE FOR GLORY STARTS HERE.
            <br />
            PHILIPPINES COMMUNITY ESPORTS TOURNAMENT
          </p>

          <div style={styles.heroButtons}>
            <button
              style={styles.redButton}
              onClick={() => scrollTo("matches", "MATCHES")}
            >
              VIEW MATCHES
            </button>

            <button
              style={styles.darkButton}
              onClick={() => scrollTo("standings", "STANDINGS")}
            >
              VIEW STANDINGS
            </button>
          </div>
        </div>
      </section>

      {/* TOURNAMENT INFO */}
      <section style={styles.infoGrid}>
        <Info title="FORMAT" value="ROUND ROBIN • BO1" />
        <Info title="TEAMS" value="28 TEAMS" />
        <Info title="PLAYOFFS" value="8 TEAMS" />
        <Info title="STATUS" value="ROUND 2" red />
      </section>

      {/* MATCHES */}
      <section id="matches" style={styles.section}>
        <SectionTitle
          small="UPCOMING"
          title="MATCH SCHEDULE"
          description="ROUND 2 QUALIFIERS • BEST OF 1"
        />

        <div style={styles.matchGrid}>
          {matches.map((match, i) => (
            <div key={i} style={styles.matchCard}>
              <div style={styles.matchTop}>
                <span>DAY 5</span>
                <strong>{match[0]}</strong>
              </div>

              <div style={styles.teamRow}>
                <b>{match[1]}</b>
                <span>VS</span>
                <b>{match[2]}</b>
              </div>

              <div style={styles.matchBottom}>
                <span>10 ROUNDS</span>
                <span>BEST OF 1</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STANDINGS */}
      <section id="standings" style={{ ...styles.section, background: "#090909" }}>
        <SectionTitle
          small="ROUND 2"
          title="CURRENT STANDINGS"
          description="RANKED BY TOTAL POINTS THEN ROUND DIFFERENCE"
        />

        <div style={styles.table}>
          <div style={styles.tableHeader}>
            <span>#</span>
            <span>TEAM</span>
            <span>W</span>
            <span>L</span>
            <span>PTS</span>
            <span>RD</span>
          </div>

          {standings.map((team, i) => (
            <div style={styles.tableRow} key={team.team}>
              <span style={styles.rank}>{i + 1}</span>
              <strong>{team.team}</strong>
              <span>{team.w}</span>
              <span>{team.l}</span>
              <b>{team.pts}</b>
              <span
                style={{
                  color: team.rd.startsWith("+") ? "#4ade80" : "#ff5555",
                }}
              >
                {team.rd}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* TEAMS */}
      <section id="teams" style={styles.section}>
        <SectionTitle
          small="COMPETING TEAMS"
          title="TEAMS"
          description="BAKBAKAN SA PINAS SEASON 5"
        />

        <div style={styles.teamGrid}>
          {teams.map((team, i) => (
            <div style={styles.teamCard} key={team}>
              <div style={styles.teamLogo}>{i + 1}</div>
              <div>
                <strong>{team}</strong>
                <small>ROUND 2 QUALIFIER</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOURNAMENT */}
      <section style={styles.tournament}>
        <div>
          <span style={styles.kicker}>THE ROAD TO THE PLAYOFFS</span>
          <h2>BAKBAKAN SA PINAS S5</h2>
          <p>
            14 TEAMS • 2 GROUPS • ROUND ROBIN • TOP 4 EACH GROUP
          </p>
        </div>

        <div style={styles.progressBox}>
          <span>TOURNAMENT PROGRESS</span>
          <strong>ROUND 2 / PLAYOFFS</strong>
          <div style={styles.progress}>
            <div style={styles.progressFill}></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <strong>BAKBAKAN SA PINAS</strong>
        <span>SEASON 5</span>
        <small>OFFICIAL COMMUNITY ESPORTS TOURNAMENT</small>
      </footer>
    </main>
  );
}

function Info({
  title,
  value,
  red,
}: {
  title: string;
  value: string;
  red?: boolean;
}) {
  return (
    <div style={styles.infoCard}>
      <small>{title}</small>
      <strong style={{ color: red ? "#ff3030" : "#fff" }}>{value}</strong>
    </div>
  );
}

function SectionTitle({
  small,
  title,
  description,
}: {
  small: string;
  title: string;
  description: string;
}) {
  return (
    <div style={styles.sectionTitle}>
      <span>{small}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#fff",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  nav: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 5%",
    background: "rgba(5,5,5,.96)",
    borderBottom: "1px solid #222",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  logoMark: {
    width: 40,
    height: 40,
    display: "grid",
    placeItems: "center",
    background: "#e50914",
    fontWeight: 900,
    fontSize: 22,
    fontStyle: "italic",
  },

  navLinks: {
    display: "flex",
    gap: 8,
  },

  navButton: {
    background: "transparent",
    border: 0,
    padding: "8px 10px",
    fontWeight: 800,
    fontSize: 11,
    cursor: "pointer",
  },

  hero: {
    minHeight: "520px",
    display: "flex",
    alignItems: "center",
    background:
      "radial-gradient(circle at 80% 30%, rgba(220,0,0,.25), transparent 35%), linear-gradient(135deg,#150000,#050505 55%,#111)",
    borderBottom: "1px solid #222",
  },

  heroOverlay: {
    width: "90%",
    maxWidth: "1100px",
    margin: "auto",
    padding: "80px 0",
  },

  kicker: {
    color: "#ff3030",
    fontSize: 13,
    fontWeight: 900,
    letterSpacing: 3,
  },

  heroH1: {},

  heroButtons: {
    display: "flex",
    gap: 12,
    marginTop: 30,
    flexWrap: "wrap",
  },

  redButton: {
    background: "#e50914",
    color: "#fff",
    border: 0,
    padding: "14px 22px",
    fontWeight: 900,
    cursor: "pointer",
  },

  darkButton: {
    background: "#171717",
    color: "#fff",
    border: "1px solid #444",
    padding: "14px 22px",
    fontWeight: 900,
    cursor: "pointer",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    borderBottom: "1px solid #222",
  },

  infoCard: {
    padding: "24px",
    borderRight: "1px solid #222",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  section: {
    padding: "80px 5%",
  },

  sectionTitle: {
    marginBottom: 35,
  },

  matchGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 15,
  },

  matchCard: {
    background: "#111",
    border: "1px solid #292929",
    padding: 20,
  },

  matchTop: {
    display: "flex",
    justifyContent: "space-between",
    color: "#888",
    fontSize: 11,
    marginBottom: 25,
  },

  teamRow: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    gap: 8,
    textAlign: "center",
  },

  matchBottom: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 25,
    paddingTop: 15,
    borderTop: "1px solid #252525",
    color: "#777",
    fontSize: 10,
  },

  table: {
    border: "1px solid #292929",
    overflow: "hidden",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "40px 1fr 50px 50px 70px 70px",
    gap: 8,
    padding: 15,
    background: "#151515",
    color: "#888",
    fontSize: 11,
  },

  tableRow: {
    display: "grid",
    gridTemplateColumns: "40px 1fr 50px 50px 70px 70px",
    gap: 8,
    padding: 18,
    borderTop: "1px solid #222",
    alignItems: "center",
    fontSize: 13,
  },

  rank: {
    color: "#ff3030",
    fontWeight: 900,
  },

  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 15,
  },

  teamCard: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    padding: 20,
    background: "#101010",
    border: "1px solid #252525",
  },

  teamLogo: {
    width: 45,
    height: 45,
    display: "grid",
    placeItems: "center",
    background: "#1b1b1b",
    border: "1px solid #444",
    color: "#e50914",
    fontWeight: 900,
  },

  tournament: {
    padding: "60px 5%",
    background: "linear-gradient(90deg,#260000,#0b0b0b)",
    display: "flex",
    justifyContent: "space-between",
    gap: 40,
    flexWrap: "wrap",
  },

  progressBox: {
    minWidth: 280,
    background: "#111",
    padding: 25,
    border: "1px solid #333",
  },

  progress: {
    height: 8,
    background: "#333",
    marginTop: 15,
  },

  progressFill: {
    width: "72%",
    height: "100%",
    background: "#e50914",
  },

  footer: {
    padding: "40px 5%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    background: "#030303",
    borderTop: "1px solid #222",
    color: "#888",
  },
};
