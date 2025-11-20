import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Head>
        <title>Aura – Architecte de la connaissance</title>
        <meta
          name="description"
          content="Aura – L’intelligence qui révèle votre architecture : schémas directeurs, data, GenAI, dette technique."
        />
      </Head>

      <main className="page">
        {/* HERO */}
        <header className="hero">
          <div className="container">
            <div className="pill">
              Aura · Architecture, Data & GenAI
            </div>

            <h1 className="hero-title">
              Aura, l’architecte
              <br />
              de la connaissance.
            </h1>
            <p className="hero-subtitle">
              Une nouvelle génération de schéma directeur SI : IA, DDD, data,
              logs et GenAI réunis pour révéler la vraie architecture de votre
              entreprise – en moins de 30 jours.
            </p>

            <div className="hero-cta">
              <a href="#contact" className="btn-primary">
                Demander un échange
              </a>
              <a href="#offre" className="link-secondary">
                Découvrir les offres →
              </a>
            </div>
          </div>
        </header>

        {/* NAV */}
        <nav className="nav">
          <div className="container nav-inner">
            <a href="#offre">Offre</a>
            <a href="#method">Méthode 30 jours</a>
            <a href="#expertise">Expertises</a>
            <a href="#tech">Dette technique & coûts IT</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* OFFRE */}
        <section id="offre" className="section">
          <div className="container">
            <h2 className="section-title">Offres Aura</h2>
            <p className="section-subtitle">
              Aura est un agent d’architecture qui combine stratégie, data,
              observabilité et GenAI pour produire des schémas directeurs
              clairs, factuels et exécutables.
            </p>

            <div className="grid">
              <div className="card">
                <h3>Schéma Directeur SI – 30 jours</h3>
                <p>
                  Un schéma directeur complet, orienté valeur et action, livré
                  en 30 jours : vision, architecture cible, roadmap, budget,
                  risques.
                </p>
                <ul>
                  <li>• Vision métier & capabilities</li>
                  <li>• Architecture applicative cible</li>
                  <li>• Architecture data & ontologie</li>
                  <li>• Roadmap 3 ans & quick wins</li>
                </ul>
              </div>

              <div className="card">
                <h3>Audit SI & Observabilité</h3>
                <p>
                  Analyse des logs, des performances, des flux et des incidents
                  pour comprendre comment votre SI vit réellement.
                </p>
                <ul>
                  <li>• Analyse des logs par application</li>
                  <li>• Cartographie des points de friction</li>
                  <li>• Proposition d’observabilité (OpenTelemetry)</li>
                  <li>• Indicateurs SLO / SLI / erreurs</li>
                </ul>
              </div>

              <div className="card">
                <h3>Cadrage GenAI à l’échelle</h3>
                <p>
                  Poser les fondations d’un usage maîtrisé de la GenAI :
                  architecture d’agents, gouvernance, use cases, risques.
                </p>
                <ul>
                  <li>• Cas d’usage prioritaires</li>
                  <li>• Architecture d’agents & intégration SI</li>
                  <li>• Gouvernance, sécurité, conformité</li>
                  <li>• Plan de déploiement & ROI</li>
                </ul>
              </div>

              <div className="card">
                <h3>Data & Ontologie d’entreprise</h3>
                <p>
                  Une vision structurée de vos données, de leurs usages et de
                  leur gouvernance, pour rendre votre SI vraiment data-driven.
                </p>
                <ul>
                  <li>• Domains & data products</li>
                  <li>• Ontologie d’entreprise</li>
                  <li>• Rôles & responsabilité data</li>
                  <li>• Plan de montée en maturité</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Un échange de 30 minutes pour comprendre vos enjeux.
            </p>

            <div className="card">
              <form onSubmit={handleSubmit} className="form">
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email professionnel"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
                <textarea
                  placeholder="Votre message"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
                <button type="submit" className="btn-primary">
                  Envoyer
                </button>
                {status === "ok" && (
  <p style={{ color: "#4ade80", marginTop: "0.5rem" }}>
    Merci, votre message a bien été envoyé.
  </p>
)}


