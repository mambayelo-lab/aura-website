// Aura Premium v1 – Grid Glow Hero (Pigment-Style)
// Full Next.js page – index.js

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
        <meta name="description" content="Aura – Architecture, Data & GenAI" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="page">
        {/* GRID BACKGROUND */}
        <div className="grid-bg" />

        {/* HERO */}
        <header className="hero">
          <div className="container">
            <div className="pill">Aura · Architecture, Data & GenAI</div>
            <h1 className="hero-title">Aura, l’architecte de la connaissance.</h1>
            <p className="hero-subtitle">
              Une plateforme d’architecture augmentée pour révéler les flux, les capacités,
              les dépendances, et poser un schéma directeur clair en 30 jours.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn-primary">Demander un échange</a>
              <a href="#offre" className="link-secondary">Découvrir les offres →</a>
            </div>
          </div>
        </header>

        {/* NAV */}
        <nav className="nav">
          <div className="container nav-inner">
            <a href="#offre">Offre</a>
            <a href="#method">Méthode 30 jours</a>
            <a href="#expertise">Expertises</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* OFFER SECTION */}
        <section id="offre" className="section">
          <div className="container">
            <h2 className="section-title">Offres Aura</h2>
            <p className="section-subtitle">
              Stratégie, data, observabilité et GenAI combinées pour produire des schémas directeurs
              exécutables.
            </p>

            <div className="grid">
              <div className="card">
                <h3>Schéma Directeur – 30 jours</h3>
                <p>Vision, architecture cible, roadmap et décisions structurantes en moins d’un mois.</p>
              </div>
              <div className="card">
                <h3>Audit SI & Observabilité</h3>
                <p>Analyse des logs, des flux, des incidents et des performances réelles du SI.</p>
              </div>
              <div className="card">
                <h3>Cadrage GenAI</h3>
                <p>Architecture d’agents, gouvernance, sécurité et cas d’usage priorisés.</p>
              </div>
              <div className="card">
                <h3>Ontologie & Data</h3>
                <p>Unification des données métiers, capacité data products et data governance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Un échange de 30 minutes pour comprendre vos enjeux.</p>

            <div className="card">
              <form onSubmit={handleSubmit} className="form">
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email professionnel"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <textarea
                  placeholder="Votre message"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button type="submit" className="btn-primary">Envoyer</button>

                {status === "ok" && (
                  <p style={{ color: "#4ade80", marginTop: "0.5rem" }}>
                    Merci, votre message a bien été envoyé.
                  </p>
                )}
                {status === "error" && (
                  <p style={{ color: "#f87171", marginTop: "0.5rem" }}>
                    Une erreur est survenue.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">Aura © 2025 – Architecture, Data & GenAI</footer>
      </main>

      {/* STYLES */}
      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
        }
        .page {
          background: #01040d;
          color: white;
          position: relative;
          overflow-x: hidden;
        }

        /* GRID BACKGROUND */
        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(#0a1223 1px, transparent 1px),
            linear-gradient(90deg, #0a1223 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.12;
          pointer-events: none;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem;
        }

        .hero {
          padding: 6rem 0 5rem;
          text-align: center;
          position: relative;
        }

        .pill {
          background: rgba(255, 255, 255, 0.1);
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .hero-title {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.7;
          max-width: 700px;
          margin: 0 auto 2rem;
        }

        .btn-primary {
          background: #2563eb;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          color: white;
          text-decoration: none;
          margin-right: 1rem;
          display: inline-block;
        }

        .link-secondary {
          color: #60a5fa;
          text-decoration: none;
        }

        .nav {
          background: rgba(255, 255, 255, 0.04);
          padding: 1rem;
          position: sticky;
          top: 0;
          backdrop-filter: blur(10px);
          z-index: 20;
        }

        .nav-inner {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
        }

        .section {
          padding:
