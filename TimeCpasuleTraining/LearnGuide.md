<import { useState } from "react";

const curriculum = {
  phases: [
    {
      id: 1,
      label: "Phase 1",
      title: "CS Fundamentals",
      duration: "5–6 weeks",
      color: "#e8f4fd",
      accent: "#1a6fb5",
      tag: "Foundation",
      intro:
        "Most senior frontend interviews at product companies include 1–2 LeetCode-style rounds. You don't need to be a competitive programmer — you need fluency with the patterns that cover ~80% of problems.",
      sections: [
        {
          title: "Data Structures to master",
          items: [
            "Array & String manipulation — sliding window, two pointers",
            "HashMap / HashSet — frequency maps, anagram detection",
            "Stack & Queue — monotonic stack, BFS with queue",
            "Linked List — fast/slow pointers, reversal",
            "Binary Tree — DFS (pre/in/post), BFS level-order",
            "Graph basics — adjacency list, DFS/BFS traversal",
            "Heap / Priority Queue — top-K problems",
          ],
        },
        {
          title: "Algorithms to understand",
          items: [
            "Binary Search — on sorted arrays and on answer space",
            "Recursion + Backtracking — subsets, permutations",
            "Dynamic Programming — memoization first, then tabulation",
            "Sorting intuition — when to use which and why (don't memorize implementations)",
          ],
        },
        {
          title: "Study approach",
          items: [
            "Use Neetcode.io — curated roadmap, video explanations, grouped by pattern",
            "Solve 3–4 problems per pattern before moving on",
            "Target: LeetCode Easy fluently, Medium comfortably — Hard is a bonus",
            "Practice explaining your approach out loud as you code",
            "Track time — aim for 20–30min per Medium problem",
          ],
        },
        {
          title: "Resources",
          items: [
            "neetcode.io — primary resource, roadmap + videos",
            "leetcode.com — practice platform",
            '"Grokking the Coding Interview" (Educative) — pattern-based approach',
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Phase 2",
      title: "Architecture & Patterns",
      duration: "3–4 weeks",
      color: "#f0fdf4",
      accent: "#15803d",
      tag: "Design",
      intro:
        "At the senior/staff level, interviewers want to know you can make defensible architectural decisions and communicate tradeoffs — not just ship features. This phase connects theory to your real-world experience.",
      sections: [
        {
          title: "Design Patterns (GoF)",
          items: [
            "Creational: Factory, Builder, Singleton (and why to avoid it)",
            "Structural: Adapter, Decorator, Facade, Proxy",
            "Behavioral: Observer, Strategy, Command, Iterator",
            "For each: know the problem it solves, a JS/TS example, and when NOT to use it",
          ],
        },
        {
          title: "Frontend Architecture Patterns",
          items: [
            "Component design: Compound Components, Render Props, HOCs — and their modern hook equivalents",
            "State architecture: local vs server vs global — when each layer owns what",
            "Flux / Unidirectional data flow — why it matters for debugging",
            "Feature-Sliced Design or Domain-Driven folder structures",
            "Micro-frontends: Module Federation basics, tradeoffs vs monolith",
          ],
        },
        {
          title: "SOLID & Clean Code in TypeScript",
          items: [
            "Single Responsibility, Open/Closed — apply to React components and composables",
            "Dependency Inversion — why it enables testability",
            "Interface segregation — practical in TS generics and props design",
            "Recognizing and naming code smells in your own work",
          ],
        },
        {
          title: "Resources",
          items: [
            "refactoring.guru — best visual reference for GoF patterns with JS examples",
            '"Patterns.dev" (free online book) — modern JS/React patterns',
            '"Clean Code" by Robert Martin — read selectively (ch. 1–6, 10, 17)',
            "Your own past codebases — audit one with these patterns in mind",
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Phase 3",
      title: "System Design",
      duration: "4–5 weeks",
      color: "#fefce8",
      accent: "#a16207",
      tag: "Scale",
      intro:
        "Senior interviews almost always include a system design round. Frontend roles get Frontend System Design; fullstack roles may include general System Design too. Learn both, but prioritize frontend.",
      sections: [
        {
          title: "Frontend System Design (priority)",
          items: [
            "Design a component library / design system from scratch",
            "Design an autocomplete / typeahead widget at scale",
            "Design an infinite scroll news feed",
            "Design a real-time collaborative editor (like Notion)",
            "Design a file upload system with progress and resumability",
            "Topics per problem: API contracts, state shape, caching, rendering strategy (CSR/SSR/ISR), accessibility, performance, error handling",
          ],
        },
        {
          title: "General System Design basics",
          items: [
            "Client–server communication: REST, GraphQL, WebSockets, SSE",
            "Caching layers: browser cache, CDN, Redis — what lives where",
            "Database basics: SQL vs NoSQL tradeoffs (don't need depth, need intuition)",
            "Load balancing, horizontal vs vertical scaling — conceptual understanding",
            "Authentication patterns: JWT, sessions, OAuth — how they work end-to-end",
          ],
        },
        {
          title: "Interview technique",
          items: [
            "Always clarify requirements first — functional and non-functional",
            "Start with a rough diagram, then drill into components",
            "Call out tradeoffs explicitly: 'I could use X, but Y is better here because...'",
            "Mention scalability, failure modes, and monitoring at the end",
            "Practice on a physical whiteboard or Excalidraw",
          ],
        },
        {
          title: "Resources",
          items: [
            "greatfrontend.com — best dedicated Frontend System Design prep",
            '"System Design Interview" Vol. 1 by Alex Xu — for general SD intuition',
            "frontendinterviewhandbook.com — broad reference",
            "Excalidraw — for practice diagramming",
          ],
        },
      ],
    },
    {
      id: 4,
      label: "Phase 4",
      title: "Integration & Mock Interviews",
      duration: "2–3 weeks",
      color: "#fdf4ff",
      accent: "#7e22ce",
      tag: "Readiness",
      intro:
        "Theory alone won't get you through. This phase is about simulating real pressure and patching remaining gaps before you go live with applications.",
      sections: [
        {
          title: "Weekly practice rhythm",
          items: [
            "3x coding problems per week — 2 Medium, 1 Hard attempt",
            "1x system design problem per week — full 45min timed session",
            "Review 1 architecture pattern per week with a TypeScript implementation",
          ],
        },
        {
          title: "Mock interviews",
          items: [
            "Do at least 3 mock sessions with a peer or on a platform",
            "Pramp.com — free peer mock interviews",
            "interviewing.io — paid but high-quality, anonymous with real engineers",
            "Record yourself — watch it back once, it's uncomfortable but effective",
          ],
        },
        {
          title: "Before each real interview",
          items: [
            "Research the company stack and tailor examples to their domain",
            "Prepare 3–4 STAR stories from your Demand.io and BitPatagonia work",
            "Have a clear answer for: 'Tell me about a hard technical decision you made'",
            "Review your own CV — every bullet point is fair game for deep questioning",
          ],
        },
      ],
    },
  ],
};

const totalWeeks = "14–18 weeks";

function PhaseCard({ phase, isActive, onClick }) {
  return (
    %3Cbutton
      onClick={onClick}
      style={{
        background: isActive ? phase.accent : "white",
        color: isActive ? "white" : "#1a1a1a",
        border: `2px solid ${isActive ? phase.accent : "#e5e7eb"}`,
        borderRadius: "10px",
        padding: "12px 18px",
        cursor: "pointer",
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "0.05em",
        transition: "all 0.2s ease",
        textAlign: "left",
        width: "100%",
      }}
    %3E
      <div style={{ opacity: isActive ? 0.8 : 0.5, fontSize: "10px", marginBottom: "3px" }}>
        {phase.label} · {phase.duration}
      </div>
      <div>{phase.title}</div>
    </button>
  );
}

function Section({ section }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        marginBottom: "8px",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: open ? "#f9fafb" : "white",
          border: "none",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          fontWeight: "600",
          color: "#111827",
          textAlign: "left",
          transition: "background 0.15s",
        }}
      >
        <span>{section.title}</span>
        <span
          style={{
            fontSize: "18px",
            color: "#9ca3af",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div style={{ padding: "4px 16px 14px", background: "#f9fafb" }}>
          {section.items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                padding: "6px 0",
                borderBottom: i < section.items.length - 1 ? "1px solid #f0f0f0" : "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "#374151",
                lineHeight: "1.5",
              }}
            >
              <span style={{ color: "#9ca3af", flexShrink: 0, marginTop: "1px" }}>—</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Curriculum() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = curriculum.phases[activePhase];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f8f6",
        padding: "0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <div
        style={{
          background: "#0f0f0f",
          color: "white",
          padding: "28px 24px 24px",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            color: "#6b7280",
            letterSpacing: "0.1em",
            marginBottom: "8px",
            textTransform: "uppercase",
          }}
        >
          Francisco Blanco · Senior Frontend Interview Prep
        </div>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: "700",
            margin: "0 0 6px",
            letterSpacing: "-0.5px",
          }}
        >
          Study Curriculum
        </h1>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              color: "#9ca3af",
            }}
          >
            {totalWeeks} · CS + Architecture + System Design
          </span>
          <span
            style={{
              background: "#1f2937",
              color: "#d1fae5",
              fontSize: "11px",
              fontFamily: "'DM Mono', monospace",
              padding: "2px 8px",
              borderRadius: "4px",
            }}
          >
            Staff/Senior target
          </span>
        </div>
      </div>

      {/* Phase selector */}
      <div
        style={{
          padding: "16px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
          background: "white",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {curriculum.phases.map((p, i) => (
          <PhaseCard
            key={p.id}
            phase={p}
            isActive={activePhase === i}
            onClick={() => setActivePhase(i)}
          />
        ))}
      </div>

      {/* Phase content */}
      <div style={{ padding: "20px 16px" }}>
        {/* Phase header */}
        <div
          style={{
            background: phase.color,
            borderRadius: "12px",
            padding: "18px",
            marginBottom: "16px",
            borderLeft: `4px solid ${phase.accent}`,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: phase.accent,
                  fontWeight: "600",
                  marginBottom: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {phase.label} · {phase.tag}
              </div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  margin: 0,
                  color: "#111827",
                }}
              >
                {phase.title}
              </h2>
            </div>
            <span
              style={{
                background: phase.accent,
                color: "white",
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                padding: "4px 10px",
                borderRadius: "6px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {phase.duration}
            </span>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "#4b5563",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {phase.intro}
          </p>
        </div>

        {/* Sections */}
        {phase.sections.map((section, i) => (
          <Section key={i} section={section} />
        ))}

        {/* Phase nav */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "8px",
          }}
        >
          {activePhase > 0 && (
            <button
              onClick={() => setActivePhase((p) => p - 1)}
              style={{
                flex: 1,
                padding: "12px",
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              ← {curriculum.phases[activePhase - 1].title}
            </button>
          )}
          {activePhase < curriculum.phases.length - 1 && (
            <button
              onClick={() => setActivePhase((p) => p + 1)}
              style={{
                flex: 1,
                padding: "12px",
                background: "#0f0f0f",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: "600",
                color: "white",
              }}
            >
              {curriculum.phases[activePhase + 1].title} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}>)