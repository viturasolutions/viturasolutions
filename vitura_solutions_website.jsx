import React from "react";

// Vitura Solutions — Agency-style single-file React component
// Modeled after a premium agency layout (dark, bold hero, clear CTAs).
// Uses a local logo image uploaded to the environment at the path provided.

const Logo = ({ src, alt = "Vitura Solutions" }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: 72, height: 72, objectFit: "contain", display: "block" }}
    onError={(e) => (e.currentTarget.style.display = "none")}
  />
);

const Button = ({ children, onClick, style = {}, primary = true }) => (
  <button
    onClick={onClick}
    style={{
      cursor: "pointer",
      padding: "0.75rem 1.25rem",
      borderRadius: 8,
      fontWeight: 600,
      border: "none",
      boxShadow: "0 6px 18px rgba(2,6,23,0.24)",
      ...(primary
        ? { background: "linear-gradient(90deg,#0ea5a0,#0369a1)", color: "#fff" }
        : { background: "transparent", color: "#cbd5e1", border: "1px solid rgba(255,255,255,0.06)" }),
      ...style,
    }}
  >
    {children}
  </button>
);

const Badge = ({ children }) => (
  <span style={{ background: "rgba(255,255,255,0.04)", padding: "6px 10px", borderRadius: 999, color: "#a5b4fc", fontWeight: 700, fontSize: 12 }}>{children}</span>
);

export default function VituraAgency({ logoSrc = "/mnt/data/0680efa0-115a-4bde-918c-bd4d4d96d97e79.png" }) {
  // The default logo path is the uploaded file. If your environment serves it
  // under a different path, pass logoSrc when mounting the component.
  const safeLogo = logoSrc || "/mnt/data/0680efa0-115a-4bde-918c-bd4d96d97e79.png";

  // Sample portfolio items to simulate real projects
  const portfolio = [
    {
      title: "Greenleaf Café",
      desc: "Branded site + online ordering that increased reservations by 32%.",
    },
    { title: "Craft Boutique", desc: "E‑commerce store with streamlined checkout and a 25% boost in AOV." },
    { title: "Neighborhood Yoga", desc: "Membership signup flows and scheduling integration." },
  ];

  const testimonials = [
    { name: "Maya R.", role: "Owner, Greenleaf Café", quote: "Fast, thoughtful, and affordable — our website brought real customers." },
    { name: "Liam P.", role: "Founder, Craft Boutique", quote: "Vitura made launching online so simple. Highly recommend." },
  ];

  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial", color: "#e6eef8", background: "#081028", minHeight: "100vh" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", position: "sticky", top: 0, background: "linear-gradient(180deg, rgba(8,16,40,0.85), rgba(8,16,40,0.6))", backdropFilter: "blur(6px)", zIndex: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 72, height: 72, borderRadius: 12, overflow: "hidden", background: "linear-gradient(180deg,#047857,#0369a1)" }}>
              <Logo src={safeLogo} />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#e6eef8" }}>Vitura Solutions</div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>Digital access for all</div>
            </div>
          </div>
        </div>

        <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href="#services" style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 600 }}>Services</a>
          <a href="#portfolio" style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 600 }}>Work</a>
          <a href="#about" style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 600 }}>About</a>
          <a href="#contact" style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 600 }}>Contact</a>
          <Button primary onClick={() => alert("Book a free consultation — implement booking flow in production")}>Free Consultation</Button>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ padding: "5rem 2rem 4rem 2rem", display: "grid", gridTemplateColumns: "1fr 420px", gap: 32, alignItems: "center", maxWidth: 1200, margin: "0 auto" }}>
        <div>
          <Badge>Student‑led • Free consulting</Badge>
          <h1 style={{ fontSize: 48, margin: "1rem 0", lineHeight: 1.02, color: "#f8fafc" }}>Websites that open doors — and open them wide.</h1>
          <p style={{ color: "#cbd5e1", maxWidth: 680, fontSize: 18, margin: "0.5rem 0 1.5rem 0" }}>
            We make owning a website an opportunity for all. Our student creators design and build fast, accessible sites that convert — backed by free consulting and full support.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <Button primary onClick={() => alert("Get started — free consultation")}>Get a Free Consultation</Button>
            <Button primary={false} onClick={() => alert("View services")}>View Services</Button>
          </div>

          <div style={{ display: "flex", gap: 16, marginTop: 32, color: "#94a3b8" }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#f8fafc" }}>Affordable</div>
              <div style={{ fontSize: 13 }}>Plans for small brands</div>
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#f8fafc" }}>Accessible</div>
              <div style={{ fontSize: 13 }}>Built for everyone</div>
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#f8fafc" }}>Fast</div>
              <div style={{ fontSize: 13 }}>Optimized performance</div>
            </div>
          </div>
        </div>

        {/* Right column hero card */}
        <aside style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))", padding: 24, borderRadius: 12, boxShadow: "0 10px 30px rgba(2,6,23,0.5)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 13, color: "#e6eef8", fontWeight: 700 }}>Start with a free consult</div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>No sales pressure — just a plan.</div>
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>30–45 min</div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Consultation requested — implement flow in production'); }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <input placeholder="Your name" required style={{ flex: 1, padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "#e6eef8" }} />
            </div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <input placeholder="Your email" type="email" required style={{ flex: 1, padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "#e6eef8" }} />
            </div>
            <div style={{ marginTop: 12 }}>
              <Button style={{ width: "100%" }}>Request Free Consultation</Button>
            </div>
          </form>

          <div style={{ marginTop: 16, color: "#94a3b8", fontSize: 13 }}>
            Co‑founders: <strong>Adam Stainton</strong> & <strong>Sameen Sekandar</strong>
          </div>
        </aside>
      </section>

      {/* Services / Process */}
      <section id="services" style={{ padding: "4rem 2rem", borderTop: "1px solid rgba(255,255,255,0.02)", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ color: "#fff", fontSize: 28 }}>Services that cover the full lifecycle</h2>
        <p style={{ color: "#9ca3af", maxWidth: 860 }}>From concept to launch and beyond — design, e‑commerce, SEO, and hosting with transparent pricing and friendly support.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, marginTop: 20 }}>
          <div style={{ background: "rgba(255,255,255,0.02)", padding: 20, borderRadius: 10 }}>
            <h4 style={{ margin: 0, color: "#e6eef8" }}>Design & Development</h4>
            <p style={{ color: "#9ca3af" }}>Custom responsive websites with attention to conversion and accessibility.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", padding: 20, borderRadius: 10 }}>
            <h4 style={{ margin: 0, color: "#e6eef8" }}>E‑commerce</h4>
            <p style={{ color: "#9ca3af" }}>Launch stores that are simple to manage and built to sell.</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", padding: 20, borderRadius: 10 }}>
            <h4 style={{ margin: 0, color: "#e6eef8" }}>SEO & Performance</h4>
            <p style={{ color: "#9ca3af" }}>Speed, structure, and content that helps customers find you.</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <div style={{ flex: 1, background: "linear-gradient(90deg,#06306b,#075985)", padding: 20, borderRadius: 10 }}>
            <h4 style={{ margin: 0 }}>Starter</h4>
            <p style={{ color: "#e6eef8" }}>Perfect for new businesses — landing pages and essential features.</p>
          </div>
          <div style={{ flex: 1, background: "linear-gradient(90deg,#065f46,#047857)", padding: 20, borderRadius: 10 }}>
            <h4 style={{ margin: 0 }}>Growth</h4>
            <p style={{ color: "#e6eef8" }}>More pages, e‑commerce, and SEO strategy.</p>
          </div>
          <div style={{ flex: 1, background: "linear-gradient(90deg,#7c3aed,#4c1d95)", padding: 20, borderRadius: 10 }}>
            <h4 style={{ margin: 0 }}>Premium</h4>
            <p style={{ color: "#e6eef8" }}>Custom integrations, advanced analytics, and priority support.</p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ color: "#fff" }}>Selected Work</h2>
        <p style={{ color: "#9ca3af" }}>Real projects for small brands — design and development that moves the needle.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 20 }}>
          {portfolio.map((p, i) => (
            <article key={i} style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", padding: 18, borderRadius: 10 }}>
              <div style={{ height: 140, borderRadius: 8, background: "linear-gradient(90deg,#0ea5a0,#0369a1)", marginBottom: 12 }} />
              <h4 style={{ margin: "0 0 6px 0" }}>{p.title}</h4>
              <p style={{ margin: 0, color: "#9ca3af" }}>{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "3rem 2rem", background: "rgba(255,255,255,0.01)" }}>
        <h2 style={{ color: "#fff", maxWidth: 1200, margin: "0 auto" }}>What clients say</h2>
        <div style={{ display: "flex", gap: 18, marginTop: 18, maxWidth: 1200, marginLeft: "auto", marginRight: "auto" }}>
          {testimonials.map((t, i) => (
            <blockquote key={i} style={{ background: "rgba(255,255,255,0.02)", padding: 18, borderRadius: 8, flex: 1 }}>
              <p style={{ margin: 0, color: "#cbd5e1" }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ marginTop: 12, color: "#9ca3af", fontSize: 13 }}>{t.name} — <span style={{ color: "#cbd5e1" }}>{t.role}</span></div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "4rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ background: "linear-gradient(180deg, rgba(2,6,23,0.8), rgba(2,6,23,0.95))", padding: 24, borderRadius: 12 }}>
          <h2 style={{ color: "#fff" }}>Ready to start?</h2>
          <p style={{ color: "#9ca3af" }}>Book a free consultation or request a quote — we’ll get back within 24 hours.</p>

          <form onSubmit={(e) => { e.preventDefault(); alert('Thanks — we received your request'); }} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
            <input placeholder="Name" required style={{ padding: 12, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "#e6eef8" }} />
            <input placeholder="Email" type="email" required style={{ padding: 12, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "#e6eef8" }} />
            <input placeholder="Business name" style={{ gridColumn: "1 / -1", padding: 12, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "#e6eef8" }} />
            <textarea placeholder="Tell us about your project" rows={4} style={{ gridColumn: "1 / -1", padding: 12, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "transparent", color: "#e6eef8" }} />

            <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "flex-end" }}>
              <Button>Request Free Consultation</Button>
            </div>
          </form>
        </div>
      </section>

      <footer style={{ padding: "2rem 1rem", color: "#94a3b8", textAlign: "center" }}>
        <div>© {new Date().getFullYear()} Vitura Solutions</div>
        <div style={{ marginTop: 6 }}>Co‑Founded by Adam Stainton & Sameen Sekandar</div>
      </footer>
    </div>
  );
}
