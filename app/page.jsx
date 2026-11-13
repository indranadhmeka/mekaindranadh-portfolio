import { ArrowUpRight, Download, Github, Linkedin, Mail, Code2, Layers3, Gauge, Workflow, BriefcaseBusiness, Sparkles, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Tracker from "@/components/Tracker";
import ContactForm from "@/components/ContactForm";
import { site, skills, projects, experience, education } from "@/lib/data";

const ext = { target: "_blank", rel: "noopener noreferrer" };
const icons = [Code2, Layers3, Gauge, Workflow];

export default function Home() {
  return <>
    <Header name={site.name} />
    <Tracker path="/" />
    <main>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span /> Available for frontend opportunities</div>
          <p className="eyebrow">HELLO, I'M</p>
          <h1>Meka <span>Indranadh</span></h1>
          <h2 className="hero-title">Frontend Developer<span className="period">.</span></h2>
          <p className="lead">I build modern, responsive and user-friendly web applications with React.js, Next.js and JavaScript.</p>
          <div className="actions">
            <a className="btn" href="#projects">Explore projects <ArrowUpRight size={18}/></a>
            <a className="btn ghost" href="#contact"><Mail size={17}/> Contact me</a>
            <a className="btn ghost" href={site.resumeUrl} {...ext}><Download size={17}/> View resume</a>
          </div>
          <div className="hero-socials">
            <a href={site.socials[0].url} {...ext}><Github size={18}/> GitHub</a>
            <a href={site.socials[1].url} {...ext}><Linkedin size={18}/> LinkedIn</a>
            <a href={`mailto:${site.email}`}><Mail size={18}/> Email</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative code illustration">
          <div className="orb orb-one"/><div className="orb orb-two"/>
          <div className="code-window">
            <div className="window-bar"><i/><i/><i/><span>developer.js</span></div>
            <pre><code><span className="syntax-purple">const</span> developer = {'{'}{ '\n' }
  name: <span className="syntax-green">"Meka Indranadh"</span>,{ '\n' }
  role: <span className="syntax-green">"Frontend Developer"</span>,{ '\n' }
  skills: [<span className="syntax-blue">"React"</span>, <span className="syntax-blue">"Next.js"</span>,{ '\n' }
          <span className="syntax-blue">"JavaScript"</span>],{ '\n' }
  mindset: <span className="syntax-green">"Build. Learn. Improve."</span>{ '\n' }
{'}'};</code></pre>
            <div className="code-footer"><span><b/> Available to build</span><span>01 / 05</span></div>
          </div>
          <div className="floating-tag tag-react">React.js</div><div className="floating-tag tag-next">Next.js</div><div className="floating-tag tag-css">Tailwind CSS</div>
          <div className="art-caption">DESIGN · DEVELOP · DELIVER</div>
        </div>
      </section>

      <section className="wrap stats-strip" aria-label="Developer focus">
        <div><BriefcaseBusiness/><strong>Frontend</strong><span>Development focus</span></div>
        <div><Layers3/><strong>Reusable UI</strong><span>Component-driven</span></div>
        <div><Gauge/><strong>Performance</strong><span>Optimized experiences</span></div>
        <div><Sparkles/><strong>Always learning</strong><span>Modern web technologies</span></div>
      </section>

      <section id="about" className="wrap section about-section">
        <div className="section-heading"><p className="eyebrow">GET TO KNOW ME</p><h2>Building useful experiences <span>with code.</span></h2></div>
        <div className="about-grid"><div className="about-copy">{site.about.map((p,i)=><p key={i}>{p}</p>)}<a className="text-link" href="#contact">Let's work together <ArrowUpRight size={17}/></a></div>
          <div className="principles">{["Clean & responsive interfaces","Reusable component architecture","REST API integration","Performance and accessibility"].map((t,i)=>{const Icon=icons[i];return <div className="principle" key={t}><span><Icon size={19}/></span>{t}</div>})}</div>
        </div>
      </section>

      <section id="skills" className="wrap section"><div className="section-heading"><p className="eyebrow">MY TOOLKIT</p><h2>Technical <span>skills.</span></h2><p className="section-intro">The technologies and workflows I use to build modern web experiences.</p></div>
        <div className="grid skills-grid">{skills.map(g=><article className="card skill-card" key={g.group}><h3>{g.group}</h3><ul className="chips">{g.items.map(i=><li key={i}>{i}</li>)}</ul></article>)}</div>
      </section>

      <section id="projects" className="wrap section"><div className="section-heading"><p className="eyebrow">SELECTED WORK</p><h2>Featured <span>projects.</span></h2><p className="section-intro">A selection of applications and product concepts I've worked on.</p></div>
        <div className="grid projects-grid">{projects.map((p,i)=><article className="card project-card" key={p.title}><div className={`project-visual visual-${i+1}`}><span>0{i+1}</span><Code2 size={42}/><small>{p.stack[0]}</small></div><div className="project-body"><div className="project-meta"><div className="project-kicker">FEATURED PROJECT</div><span className={`status-pill ${p.status === "Ongoing" ? "ongoing" : p.status === "Completed" ? "completed" : "development"}`}>{p.status}</span></div><h3>{p.title}</h3><p>{p.summary}</p><ul className="chips">{p.stack.map(s=><li key={s}>{s}</li>)}</ul><div className="card-links">{p.demoUrl ? <a href={p.demoUrl} {...ext}>Live demo <ExternalLink size={15}/></a> : <span className="muted small">Demo link to be added</span>}{p.repoUrl ? <a href={p.repoUrl} {...ext}>GitHub <Github size={15}/></a> : <span className="muted small">Repository link to be added</span>}</div></div></article>)}</div>
      </section>

      <section id="experience" className="wrap section"><div className="section-heading"><p className="eyebrow">MY JOURNEY</p><h2>Work <span>experience.</span></h2></div>
        <div className="experience-list">{experience.map((e,i)=><article className="experience-card" key={e.org}><div className="experience-marker">0{i+1}</div><div><p className="eyebrow">{e.period}</p><h3>{e.role}</h3><h4>{e.org}</h4><ul>{e.points.map(p=><li key={p}>{p}</li>)}</ul></div></article>)}</div>
      </section>

      <section id="education" className="wrap section"><div className="section-heading"><p className="eyebrow">ACADEMIC BACKGROUND</p><h2>My <span>education.</span></h2><p className="section-intro">My academic qualifications and learning foundation.</p></div>
        <div className="grid education-grid">{education.map((item,i)=><article className="card education-card" key={item.qualification}><div className="education-number">0{i+1}</div><h3>{item.qualification}</h3><p>{item.institution}</p>{item.specialization && <span>{item.specialization}</span>}{item.period && <small>{item.period}</small>}</article>)}</div>
      </section>

      <section className="wrap resume-banner"><div><p className="eyebrow">LET'S CONNECT</p><h2>Have a role in mind?</h2><p>Explore my experience or get in touch about frontend opportunities.</p></div><a className="btn" href={site.resumeUrl} {...ext}><Download size={17}/> View resume</a></section>

      <section id="contact" className="wrap section contact-section"><div className="section-heading"><p className="eyebrow">GET IN TOUCH</p><h2>Let's build something <span>great.</span></h2><p className="section-intro">Have an opportunity or project in mind? Send me a message.</p><a className="email-link" href={`mailto:${site.email}`}>{site.email} <ArrowUpRight size={16}/></a></div><div className="contact-panel"><ContactForm/></div></section>
    </main>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} {site.name}</span><span>Designed & developed with care.</span><a href="#home">Back to top ↑</a></footer>
  </>;
}
