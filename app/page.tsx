"use client";

import { useState } from "react";

type Team = {
  name: string;
  w: number | string;
  l: number | string;
  rd: number | string;
  pts: number | string;
};

type Match = {
  time: string;
  team1: string;
  team2: string;
  status?: string;
};

const groupA: Team[] = [
  { name: "KADILIMAN ESPORTS", w: 3, l: 0, rd: "+22", pts: 9 },
  { name: "PROJECT ZERO", w: 3, l: 0, rd: "+17", pts: 9 },
  { name: "CODE UNKNOWN", w: 2, l: 1, rd: "+9", pts: 6 },
  { name: "INVICTUS INTERNATIONAL", w: 2, l: 2, rd: "-1", pts: 6 },
  { name: "LIVESTRONG HEARTS", w: 2, l: 2, rd: "-2", pts: 6 },
  { name: "AMBUSH ESPORTS", w: 0, l: 3, rd: "-20", pts: 0 },
  { name: "LIVESTRONG ROOKS", w: 0, l: 4, rd: "-24", pts: 0 },
];

const groupB: Team[] = [
  { name: "VANGUARD FAMILIA", w: 3, l: 0, rd: "+15", pts: 9 },
  { name: "LIVESTRONG KINGS", w: 3, l: 1, rd: "+1", pts: 9 },
  { name: "PH VALORIS", w: 2, l: 1, rd: "+3", pts: 6 },
  { name: "DON DESTROYER", w: 2, l: 1, rd: "-1", pts: 6 },
  { name: "NEMESIS ACADEMY", w: 1, l: 2, rd: "-5", pts: 3 },
  { name: "PH AETERIX", w: "-", l: "-", rd: "-", pts: "-" },
  { name: "PH VENGEANCE", w: "-", l: "-", rd: "-", pts: "-" },
];

const day5: Match[] = [
  {
    time: "7:00 – 7:30 PM",
    team1: "CODE UNKNOWN",
    team2: "AMBUSH ESPORTS",
  },
  {
    time: "7:40 – 8:10 PM",
    team1: "LIVESTRONG HEARTS",
    team2: "INVICTUS INTERNATIONAL",
  },
  {
    time: "8:20 – 8:50 PM",
    team1: "PROJECT ZERO",
    team2: "KADILIMAN ESPORTS",
  },
  {
    time: "9:00 – 9:30 PM",
    team1: "PH VALORIS",
    team2: "DON DESTROYER",
  },
  {
    time: "DEFAULT WIN",
    team1: "LIVESTRONG KINGS",
    team2: "PH VENGEANCE",
    status: "LIVESTRONG KINGS DEFAULT WIN • PH VENGEANCE DISQUALIFIED",
  },
  {
    time: "9:40 – 10:20 PM",
    team1: "NEMESIS ACADEMY",
    team2: "VANGUARD FAMILIA",
  },
];

const day6: Match[] = [
  {
    time: "7:00 – 7:30 PM",
    team1: "CODE UNKNOWN",
    team2: "INVICTUS INTERNATIONAL",
  },
  {
    time: "7:40 – 8:10 PM",
    team1: "AMBUSH ESPORTS",
    team2: "KADILIMAN ESPORTS",
  },
  {
    time: "8:20 – 8:50 PM",
    team1: "PROJECT ZERO",
    team2: "LIVESTRONG ROOKS",
  },
  {
    time: "DEFAULT WIN",
    team1: "PH VALORIS",
    team2: "PH VENGEANCE",
    status: "PH VALORIS DEFAULT WIN • PH VENGEANCE DISQUALIFIED",
  },
  {
    time: "9:00 – 9:30 PM",
    team1: "DON DESTROYER",
    team2: "VANGUARD FAMILIA",
  },
  {
    time: "DEFAULT WIN",
    team1: "NEMESIS ACADEMY",
    team2: "PH AETERIX",
    status: "NEMESIS ACADEMY DEFAULT WIN",
  },
];

const day7: Match[] = [
  {
    time: "7:00 – 7:30 PM",
    team1: "CODE UNKNOWN",
    team2: "KADILIMAN ESPORTS",
  },
  {
    time: "7:40 – 8:10 PM",
    team1: "AMBUSH ESPORTS",
    team2: "LIVESTRONG ROOKS",
  },
  {
    time: "8:20 – 8:50 PM",
    team1: "LIVESTRONG HEARTS",
    team2: "PROJECT ZERO",
  },
  {
    time: "9:00 – 9:30 PM",
    team1: "PH VALORIS",
    team2: "DON DESTROYER",
  },
  {
    time: "DEFAULT WIN",
    team1: "DON DESTROYER",
    team2: "PH AETERIX",
    status: "DON DESTROYER DEFAULT WIN",
  },
  {
    time: "10:20 – 10:50 PM",
    team1: "LIVESTRONG KINGS",
    team2: "NEMESIS ACADEMY",
  },
];

const allTeams = [
  ...groupA.map((team) => team.name),
  ...groupB.map((team) => team.name),
];

function StandingsTable({
  title,
  teams,
}: {
  title: string;
  teams: Team[];
}) {
  return (
    <section className="standings-card">
      <div className="section-title">
        <span>{title}</span>
        <small>2ND ROUND QUALIFIERS</small>
      </div>

      <div className="table-head">
        <span>#</span>
        <span>TEAM</span>
        <span>W</span>
        <span>L</span>
        <span>RD</span>
        <span>PTS</span>
      </div>

      {teams.map((team, index) => (
        <div className="table-row" key={team.name}>
          <span className="rank">{index + 1}</span>
          <span className="team-name">{team.name}</span>
          <span>{team.w}</span>
          <span>{team.l}</span>
          <span className="rd">{team.rd}</span>
          <span className="pts">{team.pts}</span>
        </div>
      ))}
    </section>
  );
}

function MatchList({
  title,
  date,
  matches,
}: {
  title: string;
  date: string;
  matches: Match[];
}) {
  return (
    <section className="schedule-section">
      <div className="schedule-heading">
        <div>
          <span className="day-label">{title}</span>
          <h2>{date}</h2>
        </div>
        <span className="bo1">ROUND ROBIN • BEST OF 1</span>
      </div>

      <div className="matches">
        {matches.map((match, index) => (
          <div className="match-card" key={`${title}-${index}`}>
            <div className="match-number">MATCH {index + 1}</div>

            <div className="match-time">
              {match.status ? match.status : match.time}
            </div>

            <div className="teams-match">
              <div className="match-team left">
                <span>{match.team1}</span>
              </div>

              <div className="vs">VS</div>

              <div className="match-team right">
                <span>{match.team2}</span>
              </div>
            </div>

            {!match.status && (
              <div className="match-footer">
                BAKBAKAN SA PINAS S5 • ROUND 2
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const standings = activeTab === "A" ? groupA : groupB;

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

        .bsp-site {
          min-height: 100vh;
          background:
            radial-gradient(circle at 80% 15%, rgba(160, 0, 0, .28), transparent 30%),
            radial-gradient(circle at 20% 60%, rgba(100, 0, 0, .12), transparent 35%),
            #050505;
        }

        header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(5, 5, 5, .96);
          border-bottom: 1px solid #242424;
          backdrop-filter: blur(10px);
        }

        .nav {
          max-width: 1200px;
          margin: auto;
          min-height: 76px;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          background: #e50914;
          color: white;
          font-weight: 900;
          font-size: 25px;
          font-style: italic;
        }

        .brand-text {
          line-height: 1;
        }

        .brand-text strong {
          display: block;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .brand-text span {
          color: #e50914;
          font-size: 10px;
          letter-spacing: 2px;
        }

        nav {
          display: flex;
          gap: 25px;
        }

        nav a {
          color: #aaa;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        nav a:hover {
          color: #e50914;
        }

        .hero {
          max-width: 1200px;
          min-height: 500px;
          margin: auto;
          padding: 100px 24px 70px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero:after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          right: -150px;
          top: 20px;
          background: radial-gradient(circle, rgba(190, 0, 0, .28), transparent 65%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .eyebrow {
          color: #e50914;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 6px;
          margin-bottom: 15px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(70px, 12vw, 145px);
          line-height: .82;
          letter-spacing: -7px;
          font-weight: 900;
        }

        .hero h2 {
          margin: 25px 0 10px;
          font-size: 22px;
          letter-spacing: 1px;
        }

        .hero p {
          color: #999;
          max-width: 560px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          margin-top: 28px;
        }

        .btn {
          display: inline-block;
          padding: 15px 22px;
          text-decoration: none;
          font-weight: 900;
          font-size: 12px;
          letter-spacing: 1px;
          border: 1px solid #333;
        }

        .btn-red {
          background: #e50914;
          color: white;
          border-color: #e50914;
        }

        .btn-dark {
          background: #151515;
          color: white;
        }

        .stats {
          border-top: 1px solid #222;
          border-bottom: 1px solid #222;
          background: #080808;
        }

        .stats-grid {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .stat {
          padding: 35px 25px;
          border-right: 1px solid #222;
        }

        .stat:last-child {
          border-right: 0;
        }

        .stat small {
          display: block;
          color: #777;
          font-size: 10px;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .stat strong {
          font-size: 25px;
        }

        .stat.red strong {
          color: #e50914;
        }

        .section {
          max-width: 1200px;
          margin: auto;
          padding: 75px 24px;
        }

        .section-header {
          margin-bottom: 35px;
        }

        .section-header span {
          color: #e50914;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .section-header h2 {
          margin: 8px 0 0;
          font-size: 45px;
          letter-spacing: -2px;
        }

        .tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tab {
          border: 1px solid #333;
          background: #111;
          color: #aaa;
          padding: 12px 25px;
          font-weight: 900;
          cursor: pointer;
        }

        .tab.active {
          background: #e50914;
          border-color: #e50914;
          color: white;
        }

        .standings-card {
          border: 1px solid #252525;
          background: #0b0b0b;
          overflow: hidden;
        }

        .section-title {
          padding: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #252525;
        }

        .section-title span {
          font-size: 22px;
          font-weight: 900;
        }

        .section-title small {
          color: #e50914;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .table-head,
        .table-row {
          display: grid;
          grid-template-columns: 45px minmax(180px, 1fr) 55px 55px 75px 65px;
          align-items: center;
          gap: 10px;
          padding: 17px 20px;
        }

        .table-head {
          color: #666;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1px;
          background: #080808;
        }

        .table-row {
          border-top: 1px solid #191919;
          font-size: 13px;
        }

        .table-row:hover {
          background: #111;
        }

        .rank {
          color: #777;
        }

        .team-name {
          font-weight: 800;
        }

        .rd {
          color: #ddd;
        }

        .pts {
          color: #e50914;
          font-weight: 900;
        }

        .schedule-section {
          margin-top: 70px;
        }

        .schedule-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 25px;
          gap: 20px;
        }

        .day-label {
          color: #e50914;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .schedule-heading h2 {
          margin: 6px 0 0;
          font-size: 38px;
        }

        .bo1 {
          color: #777;
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 900;
        }

        .matches {
          display: grid;
          gap: 10px;
        }

        .match-card {
          position: relative;
          background: linear-gradient(90deg, #180505, #101010, #05102a);
          border: 1px solid #292929;
          overflow: hidden;
        }

        .match-number {
          padding: 8px 15px 0;
          color: #666;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .match-time {
          text-align: center;
          padding: 12px 10px 5px;
          color: white;
          font-size: 19px;
          font-weight: 900;
        }

        .teams-match {
          display: grid;
          grid-template-columns: 1fr 70px 1fr;
          align-items: center;
          padding: 10px 25px 16px;
        }

        .match-team {
          font-size: 16px;
          font-weight: 900;
        }

        .match-team.left {
          text-align: right;
        }

        .match-team.right {
          text-align: left;
        }

        .vs {
          text-align: center;
          color: #e50914;
          font-size: 11px;
          font-weight: 900;
        }

        .match-footer {
          text-align: center;
          padding: 7px;
          background: rgba(0,0,0,.45);
          color: #777;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .teams-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .team-card {
          padding: 22px;
          background: #0c0c0c;
          border: 1px solid #222;
          font-weight: 900;
        }

        .team-card span {
          display: block;
          margin-top: 8px;
          color: #e50914;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .playoffs {
          padding: 70px 24px;
          background: linear-gradient(180deg, #0b0b0b, #050505);
          border-top: 1px solid #222;
        }

        .playoff-inner {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .playoff-inner h2 {
          font-size: 55px;
          margin: 10px 0;
        }

        .playoff-inner p {
          color: #777;
        }

        .playoff-box {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .playoff-item {
          padding: 30px;
          border: 1px solid #292929;
          background: #0d0d0d;
        }

        .playoff-item strong {
          display: block;
          color: #e50914;
          font-size: 30px;
        }

        footer {
          border-top: 1px solid #222;
          padding: 35px 24px;
          color: #555;
          text-align: center;
          font-size: 10px;
          letter-spacing: 2px;
        }

        @media (max-width: 700px) {
          .nav {
            padding: 12px 15px;
          }

          nav {
            gap: 10px;
          }

          nav a {
            font-size: 9px;
          }

          .brand-text {
            display: none;
          }

          .hero {
            min-height: 450px;
            padding: 80px 20px 60px;
          }

          .hero h1 {
            font-size: 72px;
            letter-spacing: -4px;
          }

          .hero h2 {
            font-size: 18px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat {
            padding: 25px 18px;
          }

          .section {
            padding: 55px 15px;
          }

          .section-header h2 {
            font-size: 35px;
          }

          .table-head,
          .table-row {
            grid-template-columns: 25px minmax(125px, 1fr) 35px 35px 50px 45px;
            padding: 14px 10px;
            font-size: 10px;
          }

          .section-title {
            padding: 18px 12px;
          }

          .section-title span {
            font-size: 17px;
          }

          .section-title small {
            font-size: 7px;
          }

          .schedule-heading {
            display: block;
          }

          .schedule-heading h2 {
            font-size: 30px;
          }

          .bo1 {
            display: block;
            margin-top: 10px;
          }

          .teams-match {
            grid-template-columns: 1fr 35px 1fr;
            padding: 10px 10px 15px;
          }

          .match-team {
            font-size: 11px;
          }

          .match-time {
            font-size: 16px;
          }

          .teams-grid {
            grid-template-columns: 1fr 1fr;
          }

          .playoff-box {
            grid-template-columns: 1fr;
          }

          .playoff-inner h2 {
            font-size: 42px;
          }
        }
      `}</style>

      <header>
        <div className="nav">
          <div className="brand">
            <div className="brand-mark">B</div>
            <div className="brand-text">
              <strong>BAKBAKAN SA PINAS</strong>
              <span>ESPORTS TOURNAMENT</span>
            </div>
          </div>

          <nav>
            <a href="#home">HOME</a>
            <a href="#matches">MATCHES</a>
            <a href="#standings">STANDINGS</a>
            <a href="#teams">TEAMS</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">BAKBAKAN SA PINAS</div>
          <h1>SEASON 5</h1>
          <h2>THE BATTLE FOR GLORY STARTS HERE.</h2>
          <p>
            Philippines Community Esports Tournament
            <br />
            2nd Round Qualifiers
          </p>

          <div className="hero-buttons">
            <a href="#matches" className="btn btn-red">
              VIEW MATCHES
            </a>
            <a href="#standings" className="btn btn-dark">
              VIEW STANDINGS
            </a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div className="stat">
            <small>FORMAT</small>
            <strong>ROUND ROBIN<br />• BO1</strong>
          </div>

          <div className="stat">
            <small>TEAMS</small>
            <strong>14 TEAMS</strong>
          </div>

          <div className="stat">
            <small>PLAYOFFS</small>
            <strong>8 TEAMS</strong>
          </div>

          <div className="stat red">
            <small>STATUS</small>
            <strong>ROUND 2</strong>
          </div>
        </div>
      </section>

      <section className="section" id="standings">
        <div className="section-header">
          <span>LIVE TOURNAMENT STANDINGS</span>
          <h2>GROUP STANDINGS</h2>
        </div>

        <div className="tabs">
          <button
            className={
