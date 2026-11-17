import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Bot, BriefcaseBusiness, Check,
  ChevronDown, ChevronUp, Cpu, Download, Github, Globe2, Linkedin,
  Mail, Menu, MessageCircle, Send, Sparkles, Target, Users, X, Zap
} from "lucide-react";

const achievements = [
  { value: "9+", label: "Years of experience", detail: "Across customer support and SaaS operations", icon: BriefcaseBusiness },
  { value: "15", label: "Team members led", detail: "Building accountable, high-performing teams", icon: Users },
  { value: "96%", label: "SLA adherence", detail: "Across the current client portfolio", icon: Target },
  { value: "35%", label: "Less manual triage", detail: "Through an AI-powered support tool", icon: Zap },
];

const experience = [
  {
    period: "OCT 2025 — PRESENT", company: "Dotts Tech", role: "Support & Change Request Manager",
    location: "Coimbatore, India", current: true,
    points: [
      "Lead 15 Salesforce Administrators and Developers delivering post-implementation CRM support for Dubai-based real estate clients.",
      "Own issue resolution, escalation management and change request coordination, maintaining 96% SLA adherence.",
      "Reduced ticket backlog and resolution time by 25% through workload rebalancing, resource planning and process optimization.",
      "Improved team productivity and accountability by 18% through structured reviews and mentoring."
    ],
    tags: ["Salesforce", "Zoho Desk", "Zoho Projects", "Workforce Planning"]
  },
  {
    period: "APR 2024 — OCT 2025", company: "Rently", role: "Associate Manager — Technical Support",
    location: "Coimbatore, India",
    points: [
      "Led a global technical support team across India, the US and Mexico, delivering 24×7 coverage across chat, email and phone.",
      "Improved First Contact Resolution by 20% through workflow redesign and AI-assisted support initiatives.",
      "Spearheaded an internal AI-powered tool for summarization, keyword tagging, help-center suggestions and draft responses.",
      "Overhauled SOPs and Confluence knowledge base documentation, improving self-serve resolution and onboarding time by 30%."
    ],
    tags: ["Global Support", "AI Automation", "Confluence", "Escalation Management"]
  },
  {
    period: "JUN 2021 — MAR 2024", company: "Rently", role: "Associate Team Lead",
    location: "Coimbatore, India",
    points: [
      "Led daily operations for B2B and B2C technical support, partnering with Product and Engineering on complex escalations.",
      "Redesigned ticket workflows and standardized processes to reduce turnaround time by 24%.",
      "Owned KPI tracking and operational performance reports used in leadership decision-making.",
      "Mentored 10 support agents, improving individual FCR and CSAT by 18%."
    ],
    tags: ["Team Leadership", "KPI Reporting", "RCA", "Process Improvement"]
  },
  {
    period: "MAY 2017 — JUN 2021", company: "Amazon Development Centre", role: "Customer Support Representative",
    location: "Coimbatore, India",
    points: [
      "Delivered multi-channel customer support while maintaining a 95% quality score and handling 25 tickets per day.",
      "Served as a Subject Matter Expert, supporting peer issue resolution and process clarification.",
      "Authored process documentation and knowledge base guides adopted team-wide."
    ],
    tags: ["Customer Support", "SME", "Documentation", "Quality"]
  }
];

const projects = [
  {
    number: "01", title: "AI-Powered Support Automation", category: "AI · OPERATIONS",
    summary: "Turning repetitive ticket handling into a smarter, faster support workflow.",
    challenge: "Agents spent valuable time manually reading conversations, identifying intent and preparing responses.",
    approach: "Led the design and rollout of an internal AI-powered tool for email and chat summarization, keyword extraction, ticket tagging, help-center article suggestions and draft response generation.",
    impact: "Reduced manual triage effort by 35%, improved agent response speed and drove team-wide adoption. The initiative was presented at the internal company hackathon.",
    icon: Cpu, accent: "violet"
  },
  {
    number: "02", title: "DSAT Analysis & CSAT Improvement", category: "CUSTOMER EXPERIENCE",
    summary: "Using customer feedback to identify root causes and improve service outcomes.",
    challenge: "Customer dissatisfaction needed to be separated into controllable and non-controllable drivers.",
    approach: "Led root cause analysis and corrective and preventive action initiatives, then partnered cross-functionally to address the highest-impact drivers.",
    impact: "Contributed to a 12% CSAT lift over six months.",
    icon: Target, accent: "blue"
  }
];

const skillGroups = [
  { name: "Support Operations", items: ["SaaS Customer Support", "Escalation Management", "Incident & Queue Management", "SLA / KPI Management", "RCA", "CAPA"] },
  { name: "Leadership", items: ["Global Team Leadership", "Coaching & Mentoring", "Workforce Planning", "Performance Management", "Hiring & Onboarding", "Stakeholder Management"] },
  { name: "Process & Analytics", items: ["Process Optimization", "Support Analytics", "Knowledge Base & SOPs", "Customer Feedback Analysis", "Operational Reporting"] },
  { name: "Platforms & Technology", items: ["Zendesk", "Salesforce", "Zoho Desk", "Zoho Projects", "Jira", "Confluence", "Dialpad", "Playvox", "AskNicely", "API", "JWT", "SSO", "MCP", "Azure", "AWS"] }
];

const quickAnswers = [
  { q: "Tell me about Sainath's experience", a: "Sainath has 9+ years of experience in customer support, technical support and SaaS customer operations. His career includes Amazon Development Centre, Rently and Dotts Tech, with experience leading global support teams across India, the US and Mexico." },
  { q: "What are his biggest achievements?", a: "Highlights include maintaining 96% SLA adherence in his current role, reducing ticket backlog and resolution time by 25%, improving FCR by 20% through AI-assisted workflows, reducing manual triage by 35%, and contributing to a 12% CSAT improvement." },
  { q: "What is his AI experience?", a: "At Rently, Sainath spearheaded the design and rollout of an internal AI-powered support automation tool. It supported email/chat summarization, keyword extraction, ticket tagging, help-center article suggestions and draft response generation." },
  { q: "What tools and platforms does he know?", a: "His resume lists Zendesk, Salesforce, Zoho Desk, Zoho Projects, Zoho People, Jira, Confluence, Dialpad, Playvox and AskNicely, along with API integrations, JWT, SSO, MCP, Azure and AWS." },
  { q: "What leadership experience does he have?", a: "He currently leads 15 Salesforce Administrators and Developers. Previously, he led global technical support teams, mentored Team Leads and agents, supported hiring and onboarding, and managed 24×7 support coverage." }
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m Sainath’s portfolio assistant. Ask me about his experience, leadership, projects or technical skills." }
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  const answer = (question) => {
    const q = question.toLowerCase();
    const match = quickAnswers.find(item =>
      item.q.toLowerCase().split(" ").some(word => word.length > 4 && q.includes(word))
    );
    if (q.includes("project") || q.includes("automation")) return quickAnswers[2].a;
    if (q.includes("achievement") || q.includes("metric") || q.includes("result")) return quickAnswers[1].a;
    if (q.includes("skill") || q.includes("tool") || q.includes("platform")) return quickAnswers[3].a;
    if (q.includes("leader") || q.includes("team") || q.includes("manage")) return quickAnswers[4].a;
    if (q.includes("experience") || q.includes("career") || q.includes("background")) return quickAnswers[0].a;
    return match?.a || "I can help with Sainath’s experience, leadership background, AI support automation project, achievements and tools. Try one of the suggested questions below.";
  };

  const send = (value = input) => {
    const clean = value.trim();
    if (!clean || thinking) return;
    setMessages(prev => [...prev, { from: "user", text: clean }]);
    setInput("");
    setThinking(true);
    window.setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: answer(clean) }]);
      setThinking(false);
    }, 500);
  };

  return <>
    <button className="assistant-launcher" onClick={() => setOpen(true)} aria-label="Open portfolio assistant">
      <span className="assistant-pulse"><Bot size={21}/></span><span>Ask about Sainath</span><Sparkles size={15}/>
    </button>
    <AnimatePresence>
      {open && <motion.div className="chat-panel" initial={{ opacity: 0, y: 18, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .97 }}>
        <div className="chat-head">
          <div className="chat-avatar"><Bot size={19}/></div>
          <div><strong>Portfolio Assistant</strong><small><span className="online-dot"/> Answers based on this portfolio</small></div>
          <button className="icon-button" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18}/></button>
        </div>
        <div className="chat-messages">
          {messages.map((m, i) => <div key={i} className={`chat-bubble ${m.from}`}>{m.text}</div>)}
          {thinking && <div className="chat-bubble bot typing">Thinking…</div>}
        </div>
        <div className="suggestions">
          {["Experience", "Key achievements", "AI projects"].map(s => <button key={s} onClick={() => send(s)}>{s}</button>)}
        </div>
        <form className="chat-input" onSubmit={e => { e.preventDefault(); send(); }}>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask a question…" aria-label="Ask a question"/>
          <button type="submit" aria-label="Send question"><Send size={17}/></button>
        </form>
        <p className="chat-note">Demo assistant · Responses are generated from the portfolio content.</p>
      </motion.div>}
    </AnimatePresence>
  </>;
}

export default function App() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [expandedRole, setExpandedRole] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const nav = ["About", "Experience", "Projects", "Expertise", "Contact"];
  const skillItems = useMemo(() => skillGroups[activeSkill].items, [activeSkill]);

  const closeMenu = () => setMobileMenu(false);
  return <div className="app-shell" style={{ overflow: "clip" }}>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="site-header" style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(8, 11, 18, 0.94)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(166,185,220,.13)" }}>
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">S.</span><span>SAINATH<span className="brand-dot">.</span></span></a>
      <nav className={mobileMenu ? "nav-links open" : "nav-links"}>
        {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMobileMenu(v => !v)} aria-label="Toggle navigation">{mobileMenu ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="availability"><span className="online-dot"/> SUPPORT LEADERSHIP · CUSTOMER OPERATIONS</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .6 }}>
            Turning support<br/>into a <span className="gradient-text">strategic</span><br/>advantage.
          </motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 }}>
            I’m <strong>Sainath L.</strong> — a Support Manager with 9+ years of experience building high-performing teams, transforming support operations and improving customer experiences through people, process and technology.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
            <a className="button button-primary" href="#experience">Explore my journey <ArrowUpRight size={17}/></a>
            <a className="button button-quiet" href="/Sainath_L_Resume_Tech_Support_Manager.pdf" download><Download size={16}/> Download resume</a>
          </motion.div>
          <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>
            <span><Globe2 size={15}/> Coimbatore, India</span><span className="meta-divider"/> <span>Working across global teams</span>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .7, delay: .2 }}>
          <div className="visual-grid"/>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="profile-core">
            <div className="core-icon"><Users size={36}/></div>
            <span className="core-label">PEOPLE · PROCESS · PERFORMANCE</span>
            <strong>Support<br/><em>that scales.</em></strong>
            <span className="core-caption">Leadership with measurable impact</span>
          </div>
          <div className="float-card float-top"><span className="float-icon purple"><Zap size={16}/></span><div><strong>AI-driven</strong><small>Support innovation</small></div></div>
          <div className="float-card float-bottom"><span className="float-icon cyan"><Target size={16}/></span><div><strong>96% SLA</strong><small>Operational consistency</small></div></div>
          <div className="visual-index">01 / 05 <span/></div>
        </motion.div>
        <a href="#about" className="scroll-cue"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
      </section>

      <section className="metrics-section section-wrap" id="about">
        <div className="metrics-top"><span className="eyebrow">THE IMPACT, IN NUMBERS</span><span className="metrics-note">A few outcomes from the journey so far</span></div>
        <div className="metrics-grid">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return <motion.div className="metric-card" key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
              <div className="metric-icon"><Icon size={18}/></div><strong>{item.value}</strong><b>{item.label}</b><p>{item.detail}</p>
            </motion.div>;
          })}
        </div>
      </section>

      <section className="section-wrap about-section">
        <SectionHeading eyebrow="01 — A LITTLE ABOUT ME" title={<>People-first leadership.<br/><span className="muted-heading">Performance-led execution.</span></>} text="I connect the dots between customer needs, team capability and operational excellence."/>
        <div className="about-grid">
          <div className="about-main">
            <p className="large-copy">Great support isn’t just about resolving tickets. It’s about creating the systems, teams and experiences that prevent the next one.</p>
            <p>Across SaaS and customer operations, I’ve worked at the intersection of frontline support, team leadership, process improvement and technical problem-solving. I enjoy turning operational data into practical changes that make life easier for customers and support teams alike.</p>
          </div>
          <div className="principles">
            {[["01","Build teams that own outcomes"],["02","Make processes simpler and smarter"],["03","Use data to find the real problem"],["04","Bring technology closer to the customer"]].map(([n,t]) => <div className="principle" key={n}><span>{n}</span><strong>{t}</strong><ArrowUpRight size={16}/></div>)}
          </div>
        </div>
      </section>

      <section className="section-wrap experience-section" id="experience">
        <SectionHeading eyebrow="02 — THE CAREER JOURNEY" title={<>Experience built<br/><span className="muted-heading">one improvement at a time.</span></>} text="From frontline customer support to managing global operations and change requests."/>
        <div className="timeline">
          {experience.map((job, i) => <motion.div className={`timeline-item ${expandedRole === i ? "expanded" : ""}`} key={job.company + job.period} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="timeline-marker"><span/></div>
            <button className="timeline-card" onClick={() => setExpandedRole(expandedRole === i ? -1 : i)}>
              <div className="timeline-main">
                <div className="timeline-period">{job.period} {job.current && <span className="current-pill">CURRENT</span>}</div>
                <h3>{job.role}</h3><div className="company-line">{job.company} <span>·</span> {job.location}</div>
              </div>
              <div className="expand-icon">{expandedRole === i ? <ChevronUp/> : <ChevronDown/>}</div>
            </button>
            <AnimatePresence>
              {expandedRole === i && <motion.div className="timeline-details" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                <ul>{job.points.map(p => <li key={p}>{p}</li>)}</ul>
                <div className="tag-row">{job.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              </motion.div>}
            </AnimatePresence>
          </motion.div>)}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-wrap">
          <SectionHeading eyebrow="03 — SELECTED WORK" title={<>Ideas translated<br/><span className="muted-heading">into measurable impact.</span></>} text="A closer look at initiatives that improved the support experience and the way teams work."/>
          <div className="project-grid">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return <motion.button className={`project-card ${project.accent}`} key={project.number} onClick={() => setActiveProject(project)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}>
                <div className="project-top"><span>{project.number} / CASE STUDY</span><ArrowUpRight size={19}/></div>
                <div className="project-icon"><Icon size={25}/></div>
                <span className="eyebrow">{project.category}</span>
                <h3>{project.title}</h3><p>{project.summary}</p>
                <div className="project-link">Explore case study <ArrowRight size={16}/></div>
              </motion.button>;
            })}
          </div>
        </div>
      </section>

      <section className="section-wrap expertise-section" id="expertise">
        <SectionHeading eyebrow="04 — WHAT I BRING" title={<>A versatile toolkit<br/><span className="muted-heading">for modern support teams.</span></>} text="A blend of operational leadership, customer empathy, process thinking and technical fluency."/>
        <div className="skills-layout">
          <div className="skill-tabs">
            {skillGroups.map((group, i) => <button key={group.name} className={activeSkill === i ? "active" : ""} onClick={() => setActiveSkill(i)}><span>0{i + 1}</span>{group.name}<ArrowUpRight size={15}/></button>)}
          </div>
          <motion.div className="skill-content" key={activeSkill} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}>
            <span className="eyebrow">CORE CAPABILITIES</span><h3>{skillGroups[activeSkill].name}</h3>
            <div className="skill-pills">{skillItems.map(item => <span key={item}>{item}<Check size={13}/></span>)}</div>
          </motion.div>
        </div>
        <div className="recognition">
          <div><span className="eyebrow">RECOGNITION & LEARNING</span><h3>Recognised for the work.<br/>Always learning for what’s next.</h3></div>
          <div className="awards">
            <div><Sparkles size={17}/><span><strong>Business Champion Award</strong><small>Q4 2023 · Q3 2024</small></span></div>
            <div><Sparkles size={17}/><span><strong>Global CS Employee of the Quarter</strong><small>Q3 2024</small></span></div>
            <div><Check size={17}/><span><strong>Foundations of Project Management</strong><small>Google / Coursera · 2024</small></span></div>
            <div><Check size={17}/><span><strong>Technical Support Fundamentals</strong><small>Google / Coursera · 2024</small></span></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <span className="eyebrow">05 — WHAT’S NEXT?</span>
          <h2>Let’s make support<br/><span className="gradient-text">work better.</span></h2>
          <p>Have a team to scale, a customer experience to improve or an interesting challenge to solve? I’d be glad to connect.</p>
          <a className="button button-primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=sainathmannadiar%40gmail.com&su=Hello%20Sainath" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={17}/></a>
          <div className="contact-links">
            <a href="mailto:sainathmannadiar@gmail.com"><Mail size={17}/> sainathmannadiar@gmail.com</a>
            <a href="https://www.linkedin.com/in/sainath-l/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
            <a href="tel:+919629915630"><MessageCircle size={17}/> +91 96299 15630</a>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer section-wrap"><a href="#home" className="brand"><span className="brand-mark">S.</span><span>SAINATH<span className="brand-dot">.</span></span></a><span>Designed to show the work behind the numbers.</span><span>© {new Date().getFullYear()} Sainath L.</span></footer>

    <Assistant/>

    <AnimatePresence>
      {activeProject && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}>
        <motion.div className="project-modal" initial={{ opacity: 0, y: 25, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 25, scale: .97 }} onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close case study"><X/></button>
          <span className="eyebrow">{activeProject.number} — {activeProject.category}</span>
          <h2>{activeProject.title}</h2><p className="modal-summary">{activeProject.summary}</p>
          <div className="case-block"><span>THE CHALLENGE</span><p>{activeProject.challenge}</p></div>
          <div className="case-block"><span>THE APPROACH</span><p>{activeProject.approach}</p></div>
          <div className="case-impact"><Sparkles size={19}/><div><span>THE IMPACT</span><p>{activeProject.impact}</p></div></div>
          <button className="button button-primary" onClick={() => setActiveProject(null)}>Back to portfolio <ArrowRight size={16}/></button>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </div>;
}