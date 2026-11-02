"use client";

import { useState } from "react";

type Team = {
  name: string;
  w: number;
  l: number;
  rd: number;
  pts: number;
};

const groupA: Team[] = [
  {
    name: "KADILIMAN ESPORTS",
    w: 3,
    l: 0,
    rd: 22,
    pts: 9,
  },
  {
    name: "PROJECT ZERO",
    w: 3,
    l: 0,
    rd: 17,
    pts: 9,
  },
  {
    name: "CODE UNKNOWN",
    w: 2,
    l: 1,
    rd: 9,
    pts: 6,
  },
  {
    name: "INVICTUS INTERNATIONAL",
    w: 2,
    l: 2,
    rd: -1,
    pts: 6,
  },
  {
    name: "LIVESTRONG HEARTS",
    w: 2,
    l: 2,
    rd: -2,
    pts: 6,
  },
  {
    name: "AMBUSH ESPORTS",
    w: 0,
    l: 3,
    rd: -20,
    pts: 0,
  },
  {
    name: "LIVESTRONG ROOKS",
    w: 0,
    l: 4,
    rd: -24,
    pts: 0,
  },
];

const groupB: Team[] = [
  {
    name: "VANGUARD FAMILIA",
    w: 3,
    l: 0,
    rd: 15,
    pts: 9,
  },
  {
    name: "LIVESTRONG KINGS",
    w: 3,
    l: 1,
    rd: 1,
    pts: 9,
  },
  {
    name: "PH VALORIS",
    w: 2,
    l: 1,
    rd: 3,
    pts: 6,
  },
  {
    name: "DON DESTROYER",
    w: 2,
    l: 1,
    rd: -1,
    pts: 6,
  },
  {
    name: "NEMESIS ACADEMY",
    w: 1,
    l: 2,
    rd: -5,
    pts: 3,
  },
];

const matches = [
  {
    time: "07:00 PM",
    team1: "PH VALORIS",
    team2: "NEMESIS ACADEMY",
  },
  {
    time: "07:40 PM",
    team1: "RAGE ESPORTS",
    team2: "LIVESTRONG KINGS",
  },
  {
    time: "08:20 PM",
    team1: "KADILIMAN ESPORTS",
    team2: "PH VALORIS",
  },
  {
    time: "09:00 PM",
    team1: "NEMESIS ACADEMY",
    team2: "DON DESTROYER",
  },
  {
    time: "09:40 PM",
    team1: "LIVESTRONG KINGS",
    team2: "VANGUARD FAMILIA",
  },
];

const allTeams = [
  ...groupA,
  ...groupB,
];

function formatRD(rd: number) {
  return rd > 0 ? `+${rd}` : `${rd}`;
}

export default function Home() {
  const [group, setGroup] = useState<"A" | "B">("A");

  const standings = group === "A" ? groupA : groupB;

  return (
    <main className="bsp-site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #050505;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .bsp-site {
          min-height: 100vh;
          background:
            radial-gradient(circle at 80% 18%, rgba(230, 0, 0, .28), transparent 30%),
            radial-gradient(circle at 20% 45%, rgba(100, 0, 0, .16), transparent 30%),
            #050505;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid #242424;
          background: rgba(5, 5, 5, .96);
          backdrop-filter: blur(12px);
        }

        .nav-inner {
          max-width: 1250px;
          margin: auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-logo {
          width: 42px;
          height: 52px;
          background: #e50914;
          display: grid;
          place-items: center;
          font-size: 32px;
          font-weight: 900;
          font-style: italic;
          box-shadow: 0 0 20px rgba(229, 9, 20, .25);
        }

        .brand-text {
          line-height: 1;
          font-size: 16px;
          font-weight: 900;
        }

        .brand-text span {
          color: #e50914;
        }

        .nav-links {
          display: flex;
          gap: 26px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .05em;
        }

        .nav-links a:hover {
          color: #ff1a1a;
        }

        .hero {
          min-height: 650px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #1d1d1d;
          background:
            linear-gradient(90deg, rgba(0,0,0,.95), rgba(0,0,0,.55), rgba(80,0,0,.25)),
            radial-gradient(circle at 78% 40%, #600000, transparent 35%);
        }

        .hero-inner {
          width: 100%;
          max-width: 1250px;
          margin: auto;
          padding: 80px 24px;
        }

        .eyebrow {
          color: #ff3030;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: .3em;
          margin-bottom: 18px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(64px, 10vw, 130px);
          line-height: .85;
          letter-spacing: -.06em;
          font-weight: 950;
        }

        .hero h2 {
          margin: 25px 0 10px;
          font-size: 22px;
          max-width: 600px;
        }

        .hero p {
          color: #aaa;
          max-width: 600px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .button {
          padding: 15px 24px;
          border: 1px solid #444;
          font-weight: 900;
          font-size: 13px;
          cursor: pointer;
          display: inline-block;
        }

        .button-red {
          background: #e50914;
          border-color: #e50914;
        }

        .button-red:hover {
          background: #ff1c27;
        }

        .button-dark {
          background: #151515;
        }

        .stats {
          max-width: 1250px;
          margin: auto;
          padding: 60px 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #222;
        }

        .stat {
          background: #080808;
          padding: 30px;
        }

        .stat-label {
          color: #e50914;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .15em;
        }

        .stat-value {
          font-size: 27px;
          font-weight: 900;
          margin-top: 10px;
        }

        section {
          scroll-margin-top: 100px;
        }

        .section {
          max-width: 1250px;
          margin: auto;
          padding: 80px 24px;
        }

        .section-title {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 30px;
        }

        .section-title h2 {
          margin: 0;
          font-size: 40px;
          letter-spacing: -.04em;
        }

        .section-title p {
          color: #888;
          margin: 0;
        }

        .group-buttons {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
        }

        .group-button {
          padding: 12px 24px;
          border: 1px solid #333;
          background: #101010;
          color: #aaa;
          font-weight: 900;
          cursor: pointer;
        }

        .group-button.active {
          background: #e50914;
          border-color: #e50914;
          color: white;
        }

        .table-wrap {
          overflow-x: auto;
          border: 1px solid #242424;
        }

        table {
          width: 100%;
          min-width: 650px;
          border-collapse: collapse;
        }

        th {
          text-align: left;
          background: #111;
          color: #888;
          font-size: 11px;
          letter-spacing: .12em;
          padding: 18px;
        }

        td {
          padding: 20px 18px;
          border-top: 1px solid #202020;
          font-weight: 700;
        }

        tr:hover td {
          background: #0d0d0d;
        }

        .rank {
          color: #e50914;
          font-size: 18px;
          font-weight: 900;
        }

        .team-name {
          font-weight: 900;
        }

        .positive {
          color: #32d583;
        }

        .negative {
          color: #ff4d4d;
        }

        .match-grid {
          display: grid;
          gap: 12px;
        }

        .match-card {
          display: grid;
          grid-template-columns: 110px 1fr 70px 1fr;
          align-items: center;
          gap: 15px;
          padding: 22px;
          border: 1px solid #242424;
          background: #0a0a0a;
        }

        .match-time {
          color: #e50914;
          font-size: 13px;
          font-weight: 900;
        }

        .match-team {
          font-weight: 900;
        }

        .versus {
          text-align: center;
          color: #666;
          font-size: 12px;
          font-weight: 900;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .team-card {
          border: 1px solid #242424;
          background: #0a0a0a;
          padding: 25px;
          min-height: 110px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .team-card:hover {
          border-color: #e50914;
        }

        .team-card small {
          color: #777;
        }

        .admin-box {
          border: 1px solid #5d0000;
          background: linear-gradient(135deg, #160000, #080808);
          padding: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .admin-box h3 {
          margin: 0 0 8px;
          font-size: 25px;
        }

        .admin-box p {
          margin: 0;
          color: #999;
        }

        footer {
          border-top: 1px solid #222;
          padding: 40px 24px;
          text-align: center;
          color: #666;
          font-size: 12px;
        }

        footer strong {
          color: #e50914;
        }

        @media (max-width: 800px) {
          .nav-inner {
            align-items: flex-start;
          }

          .nav-links {
            display: none;
          }

          .hero {
            min-height: 580px;
          }

          .hero h1 {
            font-size: 72px;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
            padding: 30px 0;
          }

          .section {
            padding: 60px 16px;
          }

          .section-title {
            display: block;
          }

          .section-title h2 {
            font-size: 32px;
            margin-bottom: 8px;
          }

          .match-card {
            grid-template-columns: 1fr 45px 1fr;
          }

          .match-time {
            grid-column: 1 / -1;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .admin-box {
            display: block;
          }

          .admin-box .button {
            margin-top: 20px;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="nav-inner">
          <a href="#home" className="brand">
            <div className="brand-logo">B</div>

            <div className="brand-text">
              BAKBAKAN SA PINAS
              <br />
              <span>ESPORTS TOURNAMENT</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#home">HOME</a>
            <a href="#matches">MATCHES</a>
            <a href="#standings">STANDINGS</a>
            <a href="#teams">TEAMS</a>
            <a href="/admin">ADMIN</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="eyebrow">BAKBAKAN SA PINAS</div>

          <h1>SEASON 5</h1>

          <h2>THE BATTLE FOR GLORY STARTS HERE.</h2>

          <p>
            Philippines Community Esports Tournament
            <br />
            2nd Round Qualifiers
          </p>

          <div className="hero-buttons">
            <a href="#matches" className="button button-red">
              VIEW MATCHES
            </a>

            <a href="#standings" className="button button-dark">
              VIEW STANDINGS
            </a>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat">
          <div className="stat-label">FORMAT</div>
          <div className="stat-value">
            ROUND ROBIN
            <br />
            · BO1
          </div>
        </div>

        <div className="stat">
          <div className="stat-label">ACTIVE TEAMS</div>
          <div className="stat-value">12 TEAMS</div>
        </div>

        <div className="stat">
          <div className="stat-label">PLAYOFFS</div>
          <div className="stat-value">8 TEAMS</div>
        </div>

        <div className="stat">
          <div className="stat-label">STATUS</div>
          <div className="stat-value">ROUND 2</div>
        </div>
      </div>

      <section id="standings" className="section">
        <div className="section-title">
          <div>
            <h2>STANDINGS</h2>
            <p>2nd Round Qualifiers</p>
          </div>
        </div>

        <div className="group-buttons">
          <button
            className={`group-button ${
              group === "A" ? "active" : ""
            }`}
            onClick={() => setGroup("A")}
          >
            GROUP A
          </button>

          <button
            className={`group-button ${
              group === "B" ? "active" : ""
            }`}
            onClick={() => setGroup("B")}
          >
            GROUP B
          </button>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>TEAM NAME</th>
                <th>W</th>
                <th>L</th>
                <th>RD</th>
                <th>PTS</th>
              </tr>
            </thead>

            <tbody>
              {standings.map((team, index) => (
                <tr key={team.name}>
                  <td className="rank">{index + 1}</td>

                  <td className="team-name">
                    {team.name}
                  </td>

                  <td>{team.w}</td>

                  <td>{team.l}</td>

                  <td
                    className={
                      team.rd >= 0 ? "positive" : "negative"
                    }
                  >
                    {formatRD(team.rd)}
                  </td>

                  <td>{team.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="matches" className="section">
        <div className="section-title">
          <div>
            <h2>MATCHES</h2>
            <p>Round 2 Qualifiers — Upcoming Schedule</p>
          </div>
        </div>

        <div className="match-grid">
          {matches.map((match, index) => (
            <div className="match-card" key={index}>
              <div className="match-time">
                {match.time}
              </div>

              <div className="match-team">
                {match.team1}
              </div>

              <div className="versus">VS</div>

              <div className="match-team">
                {match.team2}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="teams" className="section">
        <div className="section-title">
          <div>
            <h2>TEAMS</h2>
            <p>12 active teams in the 2nd Round</p>
          </div>
        </div>

        <div className="team-grid">
          {allTeams.map((team) => (
            <div className="team-card" key={team.name}>
              <strong>{team.name}</strong>

              <small>
                {team.w}W · {team.l}L ·{" "}
                {formatRD(team.rd)} RD
              </small>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="admin-box">
          <div>
            <h3>TOURNAMENT ADMINISTRATION</h3>

            <p>
              Manage match results, standings and tournament
              information.
            </p>
          </div>

          <a href="/admin" className="button button-red">
            OPEN ADMIN PANEL
          </a>
        </div>
      </section>

      <footer>
        <strong>BAKBAKAN SA PINAS S5</strong>
        <br />
        Philippines Community Esports Tournament
        <br />
        © 2026 Bakbakan Sa Pinas
      </footer>
    </main>
  );
}
