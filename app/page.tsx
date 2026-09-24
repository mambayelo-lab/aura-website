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
import { articles } from "./articles";

const contact = "mailto:contact@aura-decision.ai?subject=Diagnostic%20AURA";

const cases = [
  {
    icon: BatteryCharging,
    tag: "Énergie",
    title: "Investissement batterie ou micro-réseau",
    text: "Arbitrer rentabilité, raccordement, flexibilité, sécurité et risques — puis identifier les changements qui rendent le projet finançable.",
  },
  {
    icon: Factory,
    tag: "Produit",
    title: "Nouveau produit industriel",
    text: "Tester la proposition de valeur, les hypothèses de marché, le modèle économique et les choix de conception avant l’industrialisation.",
  },
  {
    icon: Network,
    tag: "Supply chain",
    title: "Résilience fournisseurs et stocks",
    text: "Comparer double sourcing, stock stratégique, redesign ou relocalisation sans sacrifier mécaniquement la marge et le service.",
  },
  {
    icon: Workflow,
    tag: "Transformation",
    title: "Programme digital complexe",
    text: "Aligner la cible métier avec l’architecture fonctionnelle, applicative et d’intégration, les investissements et le backlog exécutable.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AURA — accueil">
          <img src="/images/aura-logo.png" alt="AURA" />
        </a>
        <nav aria-label="Navigation principale">
          <a href="#offres">Offres</a>
          <a href="#verticales">Verticales</a>
          <a href="#cas">Cas d’usage</a>
          <a href="#articles">Articles</a>
        </nav>
        <a className="button button-small" href={contact}>Parler d’une décision</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Décision intelligence · architecture · impact</p>
          <h1>Décidez ce qu’il faut changer. <em>Architecturez</em> ce qui vient ensuite.</h1>
          <p className="hero-lead">
            AURA dérisque vos stratégies, vos nouveaux produits et vos transformations avant que les investissements irréversibles ne commencent.
          </p>
          <div className="hero-actions">
            <a className="button" href={contact}>Cadrer une décision <ArrowRight size={17} /></a>
            <a className="text-link" href="#offres">Découvrir les offres <ArrowRight size={16} /></a>
          </div>
          <div className="proof-row">
            <span><TimerReset /> 20 jours maximum</span>
            <span><ShieldCheck /> Décision explicable</span>
            <span><Blocks /> Impacts architecturés</span>
          </div>
        </div>

        <figure className="hero-visual">
          <img src="/images/aura-energy-control-room.png" alt="Pilotage de systèmes énergétiques et industriels complexes" />
          <figcaption><span>Energy × Industry</span> Décider et transformer sous contraintes réelles.</figcaption>
        </figure>
      </section>

      <section className="section" id="offres">
        <div className="section-heading">
          <div><p className="eyebrow">Deux offres. Une chaîne de valeur.</p><h2>De la bonne décision à une transformation exécutable.</h2></div>
          <p>AURA ne remplace ni l’expertise métier ni les décideurs. Elle rend l’arbitrage rigoureux, collectif et défendable.</p>
        </div>
        <div className="offer-grid">
          <article className="offer-card primary-card">
            <img className="offer-visual" src="/images/aura-decide.png" alt="Décision multicritère assistée par AURA" />
            <div className="card-top"><span className="offer-number">01</span><Compass /></div>
            <p className="offer-label">AURA Décider · Decision Sprint</p>
            <h3>Dérisquer les stratégies et la conception préliminaire de nouveaux produits.</h3>
            <p>En 20 jours maximum, passer d’une question ambiguë à une décision argumentée, testée sous incertitude et assortie de conditions de succès.</p>
            <ul>
              <li><Check /> Objectifs, critères et contraintes</li>
              <li><Check /> Scénarios, hypothèses et incertitudes</li>
              <li><Check /> Analyse Forward et Backward</li>
              <li><Check /> Recommandation et Decision Record</li>
            </ul>
            <div className="price"><small>À partir de</small><strong>15 000 €</strong><span>· 20 jours max.</span></div>
          </article>
          <article className="offer-card dark-card">
            <img className="offer-visual" src="/images/aura-architecture-team.png" alt="Équipe définissant une architecture de transformation" />
            <div className="card-top"><span className="offer-number">02</span><Blocks /></div>
            <p className="offer-label">AURA Architecturer · Architecture Sprint</p>
            <h3>Dérisquer et accélérer les programmes de transformation digitale.</h3>
            <p>Transformer une ambition métier en vision cible cohérente, investissements estimés et backlog immédiatement actionnable.</p>
            <ul>
              <li><Check /> Vision et architecture fonctionnelle</li>
              <li><Check /> Architecture applicative cible</li>
              <li><Check /> Architecture d’intégration et liste des flux</li>
              <li><Check /> Estimations, trajectoire et backlog</li>
            </ul>
            <div className="price"><small>À partir de</small><strong>35 000 €</strong><span>· 4 à 8 semaines</span></div>
          </article>
        </div>
      </section>

      <section className="verticals" id="verticales">
        <div className="section-heading light-heading">
          <div><p className="eyebrow">Verticales prioritaires</p><h2>Là où les décisions engagent des actifs, des opérations et du capital.</h2></div>
          <p>Un même noyau de décision. Deux terrains où l’incertitude, les dépendances et la valeur en jeu justifient une approche plus rigoureuse.</p>
        </div>
        <div className="vertical-grid">
          <article>
            <img className="vertical-visual" src="/images/aura-energy.png" alt="Énergie circulaire, renouvelable et industrie" />
            <div className="vertical-icon"><BatteryCharging /></div>
            <p className="vertical-kicker">Verticale 01</p><h3>AURA Energy</h3>
            <p>Décisions d’investissement et de résilience pour les énergéticiens, industriels, data centers, développeurs et investisseurs.</p>
            <div className="tag-list"><span>Batteries</span><span>PPA</span><span>Raccordement</span><span>Micro-réseaux</span><span>Data centers</span><span>Résilience usine</span></div>
          </article>
          <article>
            <img className="vertical-visual" src="/images/aura-supply-chain.png" alt="Réseau industriel et supply chain résiliente" />
            <div className="vertical-icon"><Network /></div>
            <p className="vertical-kicker">Verticale 02</p><h3>AURA Supply Chain</h3>
            <p>Arbitrages de résilience et de transformation pour industriels, distributeurs, achats, opérations et fonds en post-acquisition.</p>
            <div className="tag-list"><span>Fournisseurs</span><span>Stocks</span><span>Marge</span><span>Make or buy</span><span>Réseau logistique</span><span>Control Tower</span></div>
          </article>
        </div>
      </section>

      <section className="section" id="cas">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">Cas d’usage</p><h2>Les décisions que nous rendons plus sûres.</h2></div>
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
        <div className="method-intro"><p className="eyebrow">La méthode AURA</p><h2>La vitesse vient de la structure.</h2><p>Pas d’intégration lourde pour commencer : documents, entretiens et données ciblées suffisent à construire une première décision robuste.</p><img src="/images/aura-method.png" alt="De l’objectif au choix puis au plan d’action" /></div>
        <ol className="method-list">
          {[
            ["01", "Cadrer", "La décision, l’horizon, les décideurs et la valeur en jeu."],
            ["02", "Structurer", "Les objectifs, contraintes, critères et faits utiles."],
            ["03", "Évaluer", "Les scénarios, incertitudes, risques et compromis."],
            ["04", "Réparer", "Les modifications minimales qui rendent une option acceptable."],
            ["05", "Décider", "La recommandation, ses preuves et ses conditions d’exécution."],
          ].map(([number, title, text]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}
        </ol>
      </section>

      <section className="editorial" id="articles">
        <div className="editorial-hero">
          <p className="eyebrow">AURA Perspectives</p>
          <h2>Penser les décisions complexes autrement.</h2>
          <p>Huit analyses pour relier stratégie, architecture, énergie, supply chain, finance et intelligence artificielle.</p>
        </div>
        <div className="article-index">
          {articles.map((article, index) => (
            <a href={`#${article.slug}`} key={article.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span><div><small>{article.category} · {article.readTime}</small><strong>{article.title}</strong></div><ArrowRight />
            </a>
          ))}
        </div>
      </section>

      <section className="article-library" aria-label="Articles AURA">
        {articles.map((article, index) => (
          <article className="long-article" id={article.slug} key={article.slug}>
            <div className="article-meta"><span>{String(index + 1).padStart(2, "0")}</span><p>{article.category}<br /><small>{article.readTime}</small></p></div>
            <div className="article-content">
              <h2>{article.title}</h2><p className="standfirst">{article.standfirst}</p>
              {index === 5 && <img className="article-visual" src="/images/aura-transformation.png" alt="Du système legacy à une architecture digitale cohérente" />}
              {index === 7 && <img className="article-visual" src="/images/aura-living-context.png" alt="Connexion du contexte métier vivant au système d’information" />}
              {article.body.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
              <aside><BrainCircuit /><div><strong>À retenir</strong><ul>{article.takeaways.map(item => <li key={item}>{item}</li>)}</ul></div></aside>
            </div>
          </article>
        ))}
      </section>

      <section className="final-cta">
        <div><p className="eyebrow">Une décision importante devant vous ?</p><h2>Rendez-la explicite avant de la rendre coûteuse.</h2></div>
        <a className="button button-light" href={contact}>Cadrer un Sprint AURA <ArrowRight size={17} /></a>
      </section>

      <footer><a className="brand footer-brand" href="#top"><img src="/images/aura-logo.png" alt="AURA" /></a><p>Decision Intelligence & Transformation Architecture</p><p>Paris · France</p></footer>
    </main>
  );
}
