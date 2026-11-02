"use client";

import { useState } from "react";

type Team = {
  name: string;
  group: "A" | "B";
  w: number | string;
  l: number | string;
  rd: string;
  pts: number | string;
  status?: string;
};

type Match = {
  day: string;
  date: string;
  time: string;
  team1: string;
  team2: string;
  result?: string;
};

const teams: Team[] = [
  {
    name: "KADILIMAN ESPORTS",
    group: "A",
    w: 3,
    l: 0,
    rd: "+22",
    pts: 9,
  },
  {
    name: "PROJECT ZERO",
    group: "A",
    w: 3,
    l: 0,
    rd: "+17",
    pts: 9,
  },
  {
    name: "CODE UNKNOWN",
    group: "A",
    w: 2,
    l: 1,
    rd: "+9",
    pts: 6,
  },
  {
    name: "INVICTUS INTERNATIONAL",
    group: "A",
    w: 2,
    l: 2,
    rd: "-1",
    pts: 6,
  },
  {
    name: "LIVESTRONG HEARTS",
    group: "A",
    w: 2,
    l: 2,
    rd: "-2",
    pts: 6,
  },
  {
    name: "AMBUSH ESPORTS",
    group: "A",
    w: 0,
    l: 3,
    rd: "-20",
    pts: 0,
  },
  {
    name: "LIVESTRONG ROOKS",
    group: "A",
    w: 0,
    l: 4,
    rd: "-24",
    pts: 0,
  },

  {
    name: "VANGUARD FAMILIA",
    group: "B",
    w: 3,
    l: 0,
    rd: "+15",
    pts: 9,
  },
  {
    name: "LIVESTRONG KINGS",
    group: "B",
    w: 3,
    l: 1,
    rd: "+1",
    pts: 9,
  },
  {
    name: "PH VALORIS",
    group: "B",
    w: 2,
    l: 1,
    rd: "+3",
    pts: 6,
  },
  {
    name: "DON DESTROYER",
    group: "B",
    w: 2,
    l: 1,
    rd: "-1",
    pts: 6,
  },
  {
    name: "NEMESIS ACADEMY",
    group: "B",
    w: 1,
    l: 2,
    rd: "-5",
    pts: 3,
  },
];

const matches: Match[] = [
  {
    day: "DAY 5",
    date: "NOVEMBER 3, 2026",
    time: "7:00 - 7:30 PM",
    team1: "CODE UNKNOWN",
    team2: "AMBUSH ESPORTS",
  },
  {
    day: "DAY 5",
    date: "NOVEMBER 3, 2026",
    time: "7:40 - 8:10 PM",
    team1: "LIVESTRONG HEARTS",
    team2: "INVICTUS INTERNATIONAL",
  },
  {
    day: "DAY 5",
    date: "NOVEMBER 3, 2026",
    time: "8:20 - 8:50 PM",
    team1: "PROJECT ZERO",
    team2: "KADILIMAN ESPORTS",
  },
  {
    day: "DAY 5",
    date: "NOVEMBER 3, 2026",
    time: "9:00 - 9:30 PM",
    team1: "PH VALORIS",
    team2: "DON DESTROYER",
  },
  {
    day: "DAY 5",
    date: "NOVEMBER 3, 2026",
    time: "DEFAULT",
    team1: "LIVESTRONG KINGS",
    team2: "PH VENGEANCE",
    result: "LIVESTRONG KINGS — DEFAULT WIN",
  },
  {
    day: "DAY 5",
    date: "NOVEMBER 3, 2026",
    time: "9:40 - 10:20 PM",
    team1: "NEMESIS ACADEMY",
    team2: "VANGUARD FAMILIA",
  },

  {
    day: "DAY 6",
    date: "NOVEMBER 4, 2026",
    time: "7:00 - 7:30 PM",
    team1: "CODE UNKNOWN",
    team2: "INVICTUS INTERNATIONAL",
  },
  {
    day: "DAY 6",
    date: "NOVEMBER 4, 2026",
    time: "7:40 - 8:10 PM",
    team1: "AMBUSH ESPORTS",
    team2: "KADILIMAN ESPORTS",
  },
  {
    day: "DAY 6",
    date: "NOVEMBER 4, 2026",
    time: "8:20 - 8:50 PM",
    team1: "PROJECT ZERO",
    team2: "LIVESTRONG ROOKS",
  },
  {
    day: "DAY 6",
    date: "NOVEMBER 4, 2026",
    time: "DEFAULT",
    team1: "PH VALORIS",
    team2: "PH VENGEANCE",
    result: "PH VALORIS — DEFAULT WIN",
  },
  {
    day: "DAY 6",
    date: "NOVEMBER 4, 2026",
    time: "9:00 - 9:30 PM",
    team1: "DON DESTROYER",
    team2: "VANGUARD FAMILIA",
  },
  {
    day: "DAY 6",
    date: "NOVEMBER 4, 2026",
    time: "DEFAULT",
    team1: "NEMESIS ACADEMY",
    team2: "PH AETERIX",
    result: "NEMESIS ACADEMY — DEFAULT WIN",
  },

  {
    day: "DAY 7",
    date: "NOVEMBER 5, 2026",
    time: "7:00 - 7:30 PM",
    team1: "CODE UNKNOWN",
    team2: "LIVESTRONG ROOKS",
  },
  {
    day: "DAY 7",
    date: "NOVEMBER 5, 2026",
    time: "7:40 - 8:10 PM",
    team1: "AMBUSH ESPORTS",
    team2: "PROJECT ZERO",
  },
  {
    day: "DAY 7",
    date: "NOVEMBER 5, 2026",
    time: "8:20 - 8:50 PM",
    team1: "LIVESTRONG HEARTS",
    team2: "KADILIMAN ESPORTS",
  },
  {
    day: "DAY 7",
    date: "NOVEMBER 5, 2026",
    time: "9:00 - 9:30 PM",
    team1: "PH VALORIS",
    team2: "NEMESIS ACADEMY",
  },
  {
    day: "DAY 7",
    date: "NOVEMBER 5, 2026",
    time: "DEFAULT",
    team1: "DON DESTROYER",
    team2: "PH AETERIX",
    result: "DON DESTROYER — DEFAULT WIN",
  },
  {
    day: "DAY 7",
    date: "NOVEMBER 5, 2026",
    time: "10:20 - 10:50 PM",
    team1: "LIVESTRONG KINGS",
    team2: "VANGUARD FAMILIA",
  },
];

const colors = [
  "#ef1c25",
  "#b80000",
  "#8f0f15",
  "#111111",
  "#222222",
  "#4b0000",
];

function teamShortName(name: string) {
  const words = name.split(" ");

  if (name === "KADILIMAN ESPORTS") return "KDM";
  if (name === "PROJECT ZERO") return "PZ";
  if (name === "CODE UNKNOWN") return "CU";
  if (name === "INVICTUS INTERNATIONAL") return "INV";
  if (name === "LIVESTRONG HEARTS") return "LSH";
  if (name === "AMBUSH ESPORTS") return "AMB";
  if (name === "LIVESTRONG ROOKS") return "LSR";
  if (name === "VANGUARD FAMILIA") return "VF";
  if (name === "LIVESTRONG KINGS") return "LSK";
  if (name === "PH VALORIS") return "VAL";
  if (name === "DON DESTROYER") return "DON";
  if (name === "NEMESIS ACADEMY") return "NEM";

  return words.map((word) => word[0]).join("").slice(0, 3);
}

function TeamBadge({ name }: { name: string }) {
  const index =
    name.length % colors.length;

  return (
    <div
      style={{
        width: 42,
        height: 42,
        minWidth: 42,
        borderRadius: 10,
        background: colors[index],
        border: "1px solid rgba(255,255,255,.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 900,
        fontSize: 12,
        color: "#fff",
      }}
    >
      {teamShortName(name)}
    </div>
  );
}

export default function Home() {
  const [activePage, setActivePage] = useState<
    "home" | "matches" | "standings" | "teams"
  >("home");

  const [group, setGroup] = useState<"A" | "B">("A");

  const filteredTeams = teams.filter(
    (team) => team.group === group
  );

  const day5 = matches.filter((match) => match.day === "DAY 5");
  const day6 = matches.filter((match) => match.day === "DAY 6");
  const day7 = matches.filter((match) => match.day === "DAY 7");

  const renderMatch = (match: Match, index: number) => (
    <div
      key={`${match.day}-${index}`}
      style={{
        background:
          "linear-gradient(90deg,#170000,#320609 45%,#061126)",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <div
        style={{
          fontSize: 11,
          color: "#ff444b",
          fontWeight: 800,
          letterSpacing: 1.5,
          marginBottom: 8,
        }}
      >
        MATCH {index + 1}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TeamBadge name={match.team1} />

          <div>
            <div
              style={{
                fontWeight: 900,
                fontSize: 14,
              }}
            >
              {match.team1}
            </div>

            <div
              style={{
                color: "#777",
                fontSize: 11,
                marginTop: 3,
              }}
            >
              {teamShortName(match.team1)}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 900,
              color:
                match.time === "DEFAULT"
                  ? "#ff4249"
                  : "#ffffff",
              whiteSpace: "nowrap",
            }}
          >
            {match.time}
          </div>

          <div
            style={{
              fontSize: 10,
              color: "#777",
              marginTop: 5,
            }}
          >
            VS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 10,
            textAlign: "right",
          }}
        >
          <div>
            <div
              style={{
                fontWeight: 900,
                fontSize: 14,
              }}
            >
              {match.team2}
            </div>

            <div
              style={{
                color: "#777",
                fontSize: 11,
                marginTop: 3,
              }}
            >
              {teamShortName(match.team2)}
            </div>
          </div>

          <TeamBadge name={match.team2} />
        </div>
      </div>

      {match.result && (
        <div
          style={{
            marginTop: 12,
            padding: "9px 12px",
            borderRadius: 8,
            background: "rgba(239,28,37,.12)",
            border: "1px solid rgba(239,28,37,.25)",
            color: "#ff5259",
            textAlign: "center",
            fontWeight: 900,
            fontSize: 12,
          }}
        >
          {match.result}
        </div>
      )}
    </div>
  );

  const renderDay = (
    title: string,
    date: string,
    dayMatches: Match[]
  ) => (
    <section style={{ marginBottom: 42 }}>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          gap: 15,
          marginBottom: 18,
        }}
      >
        <div>
          <div
            style={{
              color: "#ef1c25",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: 2,
            }}
          >
            ROUND 2 QUALIFIERS
          </div>

          <h2
            style={{
              margin: "4px 0 0",
              fontSize: 30,
              fontWeight: 1000,
            }}
          >
            {title}
          </h2>
        </div>

        <div
          style={{
            color: "#999",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          {date}
        </div>
      </div>

      {dayMatches.map(renderMatch)}
    </section>
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 80% 10%,rgba(150,0,0,.25),transparent 30%),#050505",
        color: "#fff",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(5,5,5,.95)",
          borderBottom:
            "1px solid rgba(255,255,255,.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "16px 22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <button
            onClick={() => setActivePage("home")}
            style={{
              border: 0,
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  background: "#ed1c24",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 25,
                  fontWeight: 1000,
                  fontStyle: "italic",
                }}
              >
                B
              </div>

              <div>
                <div
                  style={{
                    fontWeight: 1000,
                    fontSize: 15,
                    lineHeight: 1,
                  }}
                >
                  BAKBAKAN SA PINAS
                </div>

                <div
                  style={{
                    color: "#ed1c24",
                    fontSize: 10,
                    fontWeight: 900,
                    marginTop: 5,
                    letterSpacing: 1,
                  }}
                >
                  ESPORTS TOURNAMENT
                </div>
              </div>
            </div>
          </button>

          <nav
            style={{
              display: "flex",
              gap: 7,
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {[
              ["home", "HOME"],
              ["matches", "MATCHES"],
              ["standings", "STANDINGS"],
              ["teams", "TEAMS"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() =>
                  setActivePage(
                    key as
                      | "home"
                      | "matches"
                      | "standings"
                      | "teams"
                  )
                }
                style={{
                  background:
                    activePage === key
                      ? "#ed1c24"
                      : "transparent",
                  border: 0,
                  color:
                    activePage === key
                      ? "#fff"
                      : "#aaa",
                  padding: "9px 12px",
                  borderRadius: 7,
                  fontWeight: 900,
                  fontSize: 11,
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {activePage === "home" && (
        <>
          <section
            style={{
              minHeight: 540,
              display: "flex",
              alignItems: "center",
              background:
                "linear-gradient(120deg,#050505 35%,#210000 100%)",
            }}
          >
            <div
              style={{
                maxWidth: 1180,
                width: "100%",
                margin: "0 auto",
                padding: "80px 22px",
              }}
            >
              <div
                style={{
                  color: "#ef1c25",
                  fontWeight: 900,
                  letterSpacing: 4,
                  fontSize: 13,
                  marginBottom: 12,
                }}
              >
                BAKBAKAN SA PINAS
              </div>

              <h1
                style={{
                  fontSize: "clamp(65px,11vw,145px)",
                  lineHeight: ".85",
                  margin: 0,
                  fontWeight: 1000,
                  letterSpacing: -6,
                }}
              >
                SEASON 5
              </h1>

              <p
                style={{
                  maxWidth: 600,
                  color: "#bbb",
                  fontSize: 17,
                  lineHeight: 1.6,
                  marginTop: 25,
                }}
              >
                THE BATTLE FOR GLORY STARTS HERE.
                <br />
                PHILIPPINES COMMUNITY ESPORTS
                TOURNAMENT
                <br />
                <strong style={{ color: "#fff" }}>
                  2ND ROUND QUALIFIERS
                </strong>
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginTop: 30,
                }}
              >
                <button
                  onClick={() => setActivePage("matches")}
                  style={{
                    background: "#ed1c24",
                    color: "#fff",
                    border: 0,
                    padding: "15px 24px",
                    fontWeight: 900,
                    cursor: "pointer",
                    borderRadius: 5,
                  }}
                >
                  VIEW MATCHES
                </button>

                <button
                  onClick={() =>
                    setActivePage("standings")
                  }
                  style={{
                    background: "#171717",
                    color: "#fff",
                    border:
                      "1px solid rgba(255,255,255,.2)",
                    padding: "15px 24px",
                    fontWeight: 900,
                    cursor: "pointer",
                    borderRadius: 5,
                  }}
                >
                  VIEW STANDINGS
                </button>
              </div>
            </div>
          </section>

          <section
            style={{
              borderTop:
                "1px solid rgba(255,255,255,.08)",
              borderBottom:
                "1px solid rgba(255,255,255,.08)",
            }}
          >
            <div
              style={{
                maxWidth: 1180,
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns:
                  "repeat(4,1fr)",
              }}
            >
              {[
                ["FORMAT", "ROUND ROBIN", "BEST OF 1"],
                ["TEAMS", "12 ACTIVE", "2 GROUPS"],
                ["PLAYOFFS", "8 TEAMS", "DOUBLE ELIMINATION"],
                ["STATUS", "ROUND 2", "QUALIFIERS"],
              ].map((item) => (
                <div
                  key={item[0]}
                  style={{
                    padding: "35px 20px",
                    borderRight:
                      "1px solid rgba(255,255,255,.08)",
                  }}
                >
                  <div
                    style={{
                      color: "#ef1c25",
                      fontSize: 11,
                      fontWeight: 900,
                      letterSpacing: 2,
                    }}
                  >
                    {item[0]}
                  </div>

                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 1000,
                      marginTop: 10,
                    }}
                  >
                    {item[1]}
                  </div>

                  <div
                    style={{
                      color: "#777",
                      fontSize: 11,
                      marginTop: 5,
                    }}
                  >
                    {item[2]}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "60px 22px",
            }}
          >
            <div
              style={{
                color: "#ef1c25",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: 2,
              }}
            >
              NEXT BATTLE
            </div>

            <h2
              style={{
                fontSize: 38,
                margin: "7px 0 25px",
              }}
            >
              DAY 5 — NOVEMBER 3
            </h2>

            {day5.slice(0, 3).map(renderMatch)}

            <button
              onClick={() => setActivePage("matches")}
              style={{
                background: "transparent",
                color: "#fff",
                border:
                  "1px solid rgba(255,255,255,.2)",
                padding: "13px 20px",
                borderRadius: 6,
                fontWeight: 900,
                cursor: "pointer",
                marginTop: 10,
              }}
            >
              VIEW ALL UPCOMING MATCHES →
            </button>
          </section>
        </>
      )}

      {activePage === "matches" && (
        <section
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "70px 22px",
          }}
        >
          <div
            style={{
              color: "#ef1c25",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: 2,
            }}
          >
            BAKBAKAN SA PINAS S5
          </div>

          <h1
            style={{
              fontSize: 52,
              margin: "8px 0 10px",
            }}
          >
            UPCOMING MATCHES
          </h1>

          <p
            style={{
              color: "#777",
              marginBottom: 45,
            }}
          >
            ROUND 2 QUALIFIERS • BEST OF 1 • 10
            ROUNDS
          </p>

          {renderDay(
            "DAY 5",
            "NOVEMBER 3, 2026",
            day5
          )}

          {renderDay(
            "DAY 6",
            "NOVEMBER 4, 2026",
            day6
          )}

          {renderDay(
            "DAY 7",
            "NOVEMBER 5, 2026",
            day7
          )}
        </section>
      )}

      {activePage === "standings" && (
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "70px 22px",
          }}
        >
          <div
            style={{
              color: "#ef1c25",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: 2,
            }}
          >
            ROUND 2 QUALIFIERS
          </div>

          <h1
            style={{
              fontSize: 52,
              margin: "8px 0 25px",
            }}
          >
            STANDINGS
          </h1>

          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 25,
            }}
          >
            <button
              onClick={() => setGroup("A")}
              style={{
                background:
                  group === "A"
                    ? "#ed1c24"
                    : "#151515",
                color: "#fff",
                border: 0,
                padding: "12px 25px",
                borderRadius: 6,
                fontWeight: 900,
              }}
            >
              GROUP A
            </button>

            <button
              onClick={() => setGroup("B")}
              style={{
                background:
                  group === "B"
                    ? "#ed1c24"
                    : "#151515",
                color: "#fff",
                border: 0,
                padding: "12px 25px",
                borderRadius: 6,
                fontWeight: 900,
              }}
            >
              GROUP B
            </button>
          </div>

          <div
            style={{
              background: "#0d0d0d",
              border:
                "1px solid rgba(255,255,255,.08)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "45px 1fr 55px 55px 75px 65px",
                padding: "15px 18px",
                color: "#777",
                fontSize: 11,
                fontWeight: 900,
                borderBottom:
                  "1px solid rgba(255,255,255,.08)",
              }}
            >
              <span>#</span>
              <span>TEAM NAME</span>
              <span>W</span>
              <span>L</span>
              <span>RD</span>
              <span>PTS</span>
            </div>

            {filteredTeams.map((team, index) => (
              <div
                key={team.name}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "45px 1fr 55px 55px 75px 65px",
                  alignItems: "center",
                  padding: "16px 18px",
                  borderBottom:
                    "1px solid rgba(255,255,255,.06)",
                }}
              >
                <strong
                  style={{
                    color:
                      index < 4
                        ? "#ef1c25"
                        : "#777",
                  }}
                >
                  {index + 1}
                </strong>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <TeamBadge name={team.name} />

                  <strong
                    style={{
                      fontSize: 13,
                    }}
                  >
                    {team.name}
                  </strong>
                </div>

                <strong>{team.w}</strong>
                <strong>{team.l}</strong>

                <strong
                  style={{
                    color:
                      team.rd.startsWith("+")
                        ? "#42d66a"
                        : "#ff5050",
                  }}
                >
                  {team.rd}
                </strong>

                <strong>{team.pts}</strong>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 20,
              padding: 15,
              borderRadius: 8,
              background: "#0d0d0d",
              color: "#777",
              fontSize: 12,
            }}
          >
            <strong style={{ color: "#fff" }}>
              POINT SYSTEM:
            </strong>{" "}
            WIN = 3 BONUS POINTS + ROUND
            DIFFERENCE. LOSS = 0 POINTS.
          </div>
        </section>
      )}

      {activePage === "teams" && (
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "70px 22px",
          }}
        >
          <div
            style={{
              color: "#ef1c25",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: 2,
            }}
          >
            ROUND 2 QUALIFIERS
          </div>

          <h1
            style={{
              fontSize: 52,
              margin: "8px 0 35px",
            }}
          >
            QUALIFIED TEAMS
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: 14,
            }}
          >
            {teams.map((team) => (
              <div
                key={team.name}
                style={{
                  padding: 20,
                  background:
                    "linear-gradient(145deg,#111,#080808)",
                  border:
                    "1px solid rgba(255,255,255,.08)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <TeamBadge name={team.name} />

                <div>
                  <div
                    style={{
                      fontWeight: 1000,
                      fontSize: 14,
                    }}
                  >
                    {team.name}
                  </div>

                  <div
                    style={{
                      color: "#ef1c25",
                      fontSize: 10,
                      fontWeight: 900,
                      marginTop: 6,
                    }}
                  >
                    GROUP {team.group}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 40,
              padding: 22,
              background: "#0d0d0d",
              border:
                "1px solid rgba(255,255,255,.08)",
              borderRadius: 12,
            }}
          >
            <div
              style={{
                color: "#ef1c25",
                fontWeight: 900,
                fontSize: 12,
              }}
            >
              DISQUALIFIED
            </div>

            <h3
              style={{
                margin: "8px 0 4px",
              }}
            >
              PH VENGEANCE
            </h3>

            <p
              style={{
                color: "#777",
                fontSize: 12,
                margin: 0,
              }}
            >
              Removed from the Round 2 Qualifiers.
            </p>
          </div>

          <div
            style={{
              marginTop: 15,
              padding: 22,
              background: "#0d0d0d",
              border:
                "1px solid rgba(255,255,255,.08)",
              borderRadius: 12,
            }}
          >
            <div
              style={{
                color: "#ef1c25",
                fontWeight: 900,
                fontSize: 12,
              }}
            >
              REMOVED
            </div>

            <h3
              style={{
                margin: "8px 0 4px",
              }}
            >
              PH AETERIX
            </h3>

            <p
              style={{
                color: "#777",
                fontSize: 12,
                margin: 0,
              }}
            >
              Removed from active Round 2
              standings.
            </p>
          </div>
        </section>
      )}

      <footer
        style={{
          borderTop:
            "1px solid rgba(255,255,255,.08)",
          marginTop: 60,
          padding: "35px 22px",
          textAlign: "center",
          color: "#666",
          fontSize: 11,
        }}
      >
        <div
          style={{
            color: "#fff",
            fontWeight: 900,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          BAKBAKAN SA PINAS S5
        </div>

        <div>
          2ND ROUND QUALIFIERS • NOVEMBER 3–5,
          2026
        </div>

        <div style={{ marginTop: 10 }}>
          PRESENTED BY BAKBAKAN SA PINAS
        </div>
      </footer>
    </main>
  );
}
