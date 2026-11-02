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
          small
