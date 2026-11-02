"use client";

import { useState } from "react";

type Team = {
  name: string;
  w: number;
  l: number;
  rd: number;
  pts: number;
};

type Match = {
  match: string;
  time: string;
  team1: string;
  team2: string;
  status: "UPCOMING" | "DEFAULT";
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

const matches: Match[] = [
  {
    match: "MATCH 1",
    time: "7:00 - 7:30 PM",
    team1: "CODE UNKNOWN",
    team2: "AMBUSH ESPORTS",
    status: "UPCOMING",
  },
  {
    match: "MATCH 2",
    time: "7:40 - 8:10 PM",
    team1: "LIVESTRONG HEARTS",
    team2: "INVICTUS INTERNATIONAL",
    status: "UPCOMING",
  },
  {
    match: "MATCH 3",
    time: "8:20 - 8:50 PM",
    team1: "PROJECT ZERO",
    team2: "KADILIMAN ESPORTS",
    status: "UPCOMING",
  },
  {
    match: "MATCH 4",
    time: "9:00 - 9:30 PM",
    team1: "PH VALORIS",
    team2: "DON DESTROYER",
    status: "UPCOMING",
  },
  {
    match: "MATCH 5",
    time: "DEFAULT WIN",
    team1: "LIVESTRONG KINGS",
    team2: "PH VENGEANCE",
    status: "DEFAULT",
  },
  {
    match: "MATCH 6",
    time: "9:40 - 10:20 PM",
    team1: "NEMESIS ACADEMY",
    team2: "VANGUARD FAMILIA",
    status: "UPCOMING",
  },
];

const allTeams: Team[] = [...groupA, ...groupB];

function formatRD(rd: number) {
  if (rd > 0) return `+${rd}`;
  return `${rd}`;
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
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        .bsp-site {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 82% 18%,
              rgba(230, 0, 0, 0.28),
              transparent 30%
            ),
            radial-gradient(
              circle at 20% 48%,
              rgba(100, 0, 0, 0.16),
              transparent 32%
            ),
            #050505;
        }

        /* NAVIGATION */

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid #242424;
          background: rgba(5, 5, 5, 0.96);
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
          box-shadow: 0 0 20px rgba(229, 9, 20, 0.25);
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
          letter-spacing: 0.05em;
        }

        .nav-links a:hover {
          color: #ff1a1a;
        }

        /* HERO */

        .hero {
          min-height: 650px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #1d1d1d;
          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.95),
              rgba(0, 0, 0, 0.55),
              rgba(80, 0, 0, 0.25)
            ),
            radial-gradient(
              circle at 78% 40%,
              #600000,
              transparent 35%
            );
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
          letter-spacing: 0.3em;
          margin-bottom: 18px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(64px, 10vw, 130px);
          line-height: 0.85;
          letter-spacing: -0.06em;
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

        /* STATS */

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
          letter-spacing: 0.15em;
        }

        .stat-value {
          font-size: 27px;
          font-weight: 900;
          margin-top: 10px;
        }

        /* SECTIONS */

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
          letter-spacing: -0.04em;
        }

        .section-title p {
          color: #888;
          margin: 0;
        }

        /* STANDINGS */

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
          color: #fff;
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
          letter-spacing: 0.12em;
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

        /* MATCHES */

        .day-banner {
          border: 1px solid #5d0000;
          background:
            linear-gradient(
              90deg,
              rgba(229, 9, 20, 0.2),
              rgba(10, 10, 10, 0.8)
            );
          padding: 24px;
          margin-bottom: 20px;
        }

        .day-banner small {
          color: #ff3030;
          font-weight: 900;
          letter-spacing: 0.15em;
        }

        .day-banner h3 {
          margin: 8px 0 0;
          font-size: 28px;
        }

        .match-grid {
          display: grid;
          gap: 12px;
        }

        .match-card {
          display: grid;
          grid-template-columns: 135px 1fr 70px 1fr;
          align-items: center;
          gap: 15px;
          padding: 22px;
          border: 1px solid #242424;
          background: #0a0a0a;
        }

        .match-card:hover {
          border-color: #5d0000;
          background: #0e0e0e;
        }

        .match-time {
          color: #e50914;
          font-size: 13px;
          font-weight: 900;
          line-height: 1.5;
        }

        .match-number {
          color: #fff;
          font-size: 11px;
          letter-spacing: 0.08em;
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

        .default-label {
          display: block;
          color: #e50914;
          font-size: 10px;
          margin-top: 5px;
          letter-spacing: 0.05em;
        }

        .dq-label {
          display: block;
          color: #777;
          font-size: 10px;
          margin-top: 5px;
          text-decoration: line-through;
        }

        /* TEAMS */

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .team-card {
          border: 1px solid #242424;
          background: #0a0a0a;
          padding: 25px;
          min-height: 115px;
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

        .group-tag {
          color: #e50914;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          margin-bottom: 10px;
        }

        /* ADMIN */

        .admin-box {
          border: 1px solid #5d0000;
          background:
            linear-gradient(
              135deg,
              #160000,
              #080808
            );
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

        /* FOOTER */

        footer {
          border-top: 1px solid #222;
          padding: 40px 24px;
          text-align: center;
          color: #666;
          font-size: 12px;
          line-height: 1.8;
        }

        footer strong {
          color: #e50914;
        }

        /* MOBILE */

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

          .stat {
            padding: 22px 16px;
          }

          .stat-value {
            font-size: 21px;
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

        @media (max-width: 500px) {
          .brand-text {
            font-size: 12px;
          }

          .brand-logo {
            width: 35px;
            height: 44px;
            font-size: 26px;
          }

          .hero-inner {
            padding: 70px 20px;
          }

          .hero h1 {
            font-size: 58px;
          }

          .hero h2 {
            font-size: 18px;
          }

          .stats {
            grid-template-columns: 1fr 1fr;
          }

          .stat-label {
            font-size: 9px;
          }

          .stat-value {
            font-size: 17px;
          }

          .match-card {
            padding: 18px 14px;
          }

          .match-team {
            font-size: 13px;
          }
        }
      `}</style>

      {/* NAVIGATION */}

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

      {/* HERO */}

      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="eyebrow">
            BAKBAKAN SA PINAS
          </div>

          <h1>SEASON 5</h1>

          <h2>
            THE BATTLE FOR GLORY STARTS HERE.
          </h2>

          <p>
            Philippines Community Esports Tournament
            <br />
            2nd Round Qualifiers
          </p>

          <div className="hero-buttons">
            <a
              href="#matches"
              className="button button-red"
            >
              VIEW MATCHES
            </a>

            <a
              href="#standings"
              className="button button-dark"
            >
              VIEW STANDINGS
            </a>
          </div>
        </div>
      </section>

      {/* TOURNAMENT STATS */}

      <div className="stats">
        <div className="stat">
          <div className="stat-label">
            FORMAT
          </div>

          <div className="stat-value">
            ROUND ROBIN
            <br />
            · BO1
          </div>
        </div>

        <div className="stat">
          <div className="stat-label">
            ACTIVE TEAMS
          </div>

          <div className="stat-value">
            12 TEAMS
          </div>
        </div>

        <div className="stat">
          <div className="stat-label">
            PLAYOFFS
          </div>

          <div className="stat-value">
            8 TEAMS
          </div>
        </div>

        <div className="stat">
          <div className="stat-label">
            STATUS
          </div>

          <div className="stat-value">
            ROUND 2
          </div>
        </div>
      </div>

      {/* STANDINGS */}

      <section
        id="standings"
        className="section"
      >
        <div className="section-title">
          <div>
            <h2>STANDINGS</h2>
            <p>
              2nd Round Qualifiers
            </p>
          </div>
        </div>

        <div className="group-buttons">
          <button
            className={`group-button ${
              group === "A"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setGroup("A")
            }
          >
            GROUP A
          </button>

          <button
            className={`group-button ${
              group === "B"
                ? "active"
                : ""
            }`}
            onClick={() =>
              setGroup("B")
            }
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
              {standings.map(
                (team, index) => (
                  <tr key={team.name}>
                    <td className="rank">
                      {index + 1}
                    </td>

                    <td className="team-name">
                      {team.name}
                    </td>

                    <td>
                      {team.w}
                    </td>

                    <td>
                      {team.l}
                    </td>

                    <td
                      className={
                        team.rd >= 0
                          ? "positive"
                          : "negative"
                      }
                    >
                      {formatRD(
                        team.rd
                      )}
                    </td>

                    <td>
                      {team.pts}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* MATCH SCHEDULE */}

      <section
        id="matches"
        className="section"
      >
        <div className="section-title">
          <div>
            <h2>MATCH SCHEDULE</h2>
            <p>
              Round 2 Qualifiers
            </p>
          </div>
        </div>

        <div className="day-banner">
          <small>
            BAKBAKAN SA PINAS S5
          </small>

          <h3>
            DAY 5 — NOVEMBER 3, 2026
          </h3>
        </div>

        <div className="match-grid">
          {matches.map(
            (match) => (
              <div
                className="match-card"
                key={match.match}
              >
                <div className="match-time">
                  <span className="match-number">
                    {match.match}
                  </span>

                  <br />

                  {match.time}
                </div>

                <div className="match-team">
                  {match.team1}

                  {match.status ===
                    "DEFAULT" && (
                    <span className="default-label">
    
