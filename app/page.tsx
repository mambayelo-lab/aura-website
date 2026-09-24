import {
  ArrowRight,
  BatteryCharging,
  Blocks,
  BrainCircuit,
  Check,
  Compass,
  Factory,
  Network,
  ShieldCheck,
  TimerReset,
  Workflow,
} from "lucide-react";
import { articlesEn as articles } from "./articles-en";

const contact = "mailto:contact@aura-decision.ai?subject=AURA%20Decision%20Sprint";

const cases = [
  {
    icon: BatteryCharging,
    tag: "Energy",
    title: "Battery or microgrid investment",
    text: "Arbitrate returns, grid connection, flexibility, safety and risk - then identify the changes that make the project bankable.",
  },
  {
    icon: Factory,
    tag: "Product",
    title: "New industrial product",
    text: "Test the value proposition, market assumptions, business model and design choices before industrialisation.",
  },
  {
    icon: Network,
    tag: "Supply chain",
    title: "Supplier and inventory resilience",
    text: "Compare dual sourcing, strategic inventory, redesign or relocation without automatically sacrificing margin and service.",
  },
  {
    icon: Workflow,
    tag: "Transformation",
    title: "Complex digital programme",
    text: "Align the business target with functional, application and integration architectures, investment estimates and an executable backlog.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AURA home">
          <img src="/images/aura-logo.png" alt="AURA" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#offres">Offers</a>
          <a href="#verticales">Industries</a>
          <a href="#cas">Use cases</a>
          <a href="#articles">Insights</a>
        </nav>
        <div className="header-actions"><a className="language-link active" href="#top">EN</a><a className="language-link" href="/fr">FR</a><a className="button button-small" href={contact}>Discuss a decision</a></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Decision intelligence · architecture · impact</p>
          <h1>Decide what must change. <em>Architect</em> what comes next.</h1>
          <p className="hero-lead">
            AURA de-risks strategies, new products and transformations before irreversible investment begins.
          </p>
          <div className="hero-actions">
            <a className="button" href={contact}>Frame a decision <ArrowRight size={17} /></a>
            <a className="text-link" href="#offres">Explore the offers <ArrowRight size={16} /></a>
          </div>
          <div className="proof-row">
            <span><TimerReset /> 20 days maximum</span>
            <span><ShieldCheck /> Explainable decision</span>
            <span><Blocks /> Architected impacts</span>
          </div>
        </div>

        <figure className="hero-visual">
          <img src="/images/aura-energy-control-room.png" alt="Control of complex energy and industrial systems" />
          <figcaption><span>Energy × Industry</span> Decide and transform under real-world constraints.</figcaption>
        </figure>
      </section>

      <section className="section" id="offres">
        <div className="section-heading">
          <div><p className="eyebrow">Two offers. One value chain.</p><h2>From the right decision to an executable transformation.</h2></div>
          <p>AURA does not replace domain expertise or accountable leaders. It makes arbitration rigorous, collective and defensible.</p>
        </div>
        <div className="offer-grid">
          <article className="offer-card primary-card">
            <img className="offer-visual" src="/images/aura-decide.png" alt="AURA-assisted multicriteria decision" />
            <div className="card-top"><span className="offer-number">01</span><Compass /></div>
            <p className="offer-label">AURA Decide · Decision Sprint</p>
            <h3>De-risk strategies and the preliminary design of new products.</h3>
            <p>In no more than 20 days, move from an ambiguous question to an evidence-based decision tested under uncertainty, with explicit conditions for success.</p>
            <ul>
              <li><Check /> Objectives, criteria and constraints</li>
              <li><Check /> Scenarios, assumptions and uncertainty</li>
              <li><Check /> Forward and Backward analysis</li>
              <li><Check /> Recommendation and Decision Record</li>
            </ul>
            <div className="price"><small>Starting from</small><strong>€15,000</strong><span>· 20 days max.</span></div>
          </article>
          <article className="offer-card dark-card">
            <img className="offer-visual" src="/images/aura-architecture-team.png" alt="Team defining a transformation architecture" />
            <div className="card-top"><span className="offer-number">02</span><Blocks /></div>
            <p className="offer-label">AURA Architect · Architecture Sprint</p>
            <h3>De-risk and accelerate digital transformation programmes.</h3>
            <p>Turn a business ambition into a coherent target vision, estimated investment and an immediately actionable backlog.</p>
            <ul>
              <li><Check /> Vision and functional architecture</li>
              <li><Check /> Target application architecture</li>
              <li><Check /> Integration architecture and flow catalogue</li>
              <li><Check /> Estimates, roadmap and backlog</li>
            </ul>
            <div className="price"><small>Starting from</small><strong>€35,000</strong><span>· 4 to 8 weeks</span></div>
          </article>
        </div>
      </section>

      <section className="verticals" id="verticales">
        <div className="section-heading light-heading">
          <div><p className="eyebrow">Priority industries</p><h2>Where decisions commit assets, operations and capital.</h2></div>
          <p>One decision core. Two environments where uncertainty, dependencies and value at stake demand a more rigorous approach.</p>
        </div>
        <div className="vertical-grid">
          <article>
            <img className="vertical-visual" src="/images/aura-energy.png" alt="Circular energy, renewables and industry" />
            <div className="vertical-icon"><BatteryCharging /></div>
            <p className="vertical-kicker">Industry 01</p><h3>AURA Energy</h3>
            <p>Investment and resilience decisions for utilities, industrial companies, data centres, developers and investors.</p>
            <div className="tag-list"><span>Batteries</span><span>PPAs</span><span>Grid connection</span><span>Microgrids</span><span>Data centres</span><span>Factory resilience</span></div>
          </article>
          <article>
            <img className="vertical-visual" src="/images/aura-supply-chain.png" alt="Industrial network and resilient supply chain" />
            <div className="vertical-icon"><Network /></div>
            <p className="vertical-kicker">Industry 02</p><h3>AURA Supply Chain</h3>
            <p>Resilience and transformation arbitrations for manufacturers, retailers, procurement, operations and post-acquisition funds.</p>
            <div className="tag-list"><span>Suppliers</span><span>Inventory</span><span>Margin</span><span>Make or buy</span><span>Logistics network</span><span>Control Tower</span></div>
          </article>
        </div>
      </section>

      <section className="section" id="cas">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">Use cases</p><h2>The decisions we make safer.</h2></div>
        </div>
        <div className="case-grid">
          {cases.map(({ icon: Icon, tag, title, text }) => (
            <article className="case-card" key={title}>
              <div className="case-icon"><Icon /></div><p>{tag}</p><h3>{title}</h3><span>{text}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="method-section">
        <div className="method-intro"><p className="eyebrow">The AURA method</p><h2>Speed comes from structure.</h2><p>No heavy integration is needed to begin: documents, interviews and targeted data are enough to build the first robust decision.</p><img src="/images/aura-method.png" alt="From objective to choice and action plan" /></div>
        <ol className="method-list">
          {[
            ["01", "Frame", "The decision, horizon, decision-makers and value at stake."],
            ["02", "Structure", "Objectives, constraints, criteria and relevant facts."],
            ["03", "Evaluate", "Scenarios, uncertainties, risks and trade-offs."],
            ["04", "Repair", "The minimum changes that make an option acceptable."],
            ["05", "Decide", "The recommendation, its evidence and execution conditions."],
          ].map(([number, title, text]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}
        </ol>
      </section>

      <section className="editorial" id="articles">
        <div className="editorial-hero">
          <p className="eyebrow">AURA Perspectives</p>
          <h2>A different way to think about complex decisions.</h2>
          <p>Eight insights connecting strategy, architecture, energy, supply chain, finance and artificial intelligence.</p>
        </div>
        <div className="article-index">
          {articles.map((article, index) => (
            <a href={`#${article.slug}`} key={article.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span><div><small>{article.category} · {article.readTime}</small><strong>{article.title}</strong></div><ArrowRight />
            </a>
          ))}
        </div>
      </section>

      <section className="article-library" aria-label="AURA insights">
        {articles.map((article, index) => (
          <article className="long-article" id={article.slug} key={article.slug}>
            <div className="article-meta"><span>{String(index + 1).padStart(2, "0")}</span><p>{article.category}<br /><small>{article.readTime}</small></p></div>
            <div className="article-content">
              <h2>{article.title}</h2><p className="standfirst">{article.standfirst}</p>
              {index === 5 && <img className="article-visual" src="/images/aura-transformation.png" alt="From legacy systems to a coherent digital architecture" />}
              {index === 7 && <img className="article-visual" src="/images/aura-living-context.png" alt="Connecting living business context to enterprise systems" />}
              {article.body.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
              <aside><BrainCircuit /><div><strong>Key takeaways</strong><ul>{article.takeaways.map(item => <li key={item}>{item}</li>)}</ul></div></aside>
            </div>
          </article>
        ))}
      </section>

      <section className="final-cta">
        <div><p className="eyebrow">Facing an important decision?</p><h2>Make it explicit before it becomes expensive.</h2></div>
        <a className="button button-light" href={contact}>Frame an AURA Sprint <ArrowRight size={17} /></a>
      </section>

      <footer><a className="brand footer-brand" href="#top"><img src="/images/aura-logo.png" alt="AURA" /></a><p>Decision Intelligence & Transformation Architecture</p><p>Paris · France</p></footer>
    </main>
  );
}
