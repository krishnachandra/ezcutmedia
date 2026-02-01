import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Proof Section */}
      <section className="bg-surface" style={{ padding: '3rem 0', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem' }}>
            Trusted by Leading Creator Brands & Celebrities
          </p>
          {/* Brand Logos */}
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { src: "/assets/brands/sapta_aswa.jpg", alt: "Sapta Aswa", width: 100 },
              { src: "/assets/brands/thrive_events.jpg", alt: "Thrive Events", width: 100 },
              { src: "/assets/brands/xiti.jpg", alt: "Xiti Weaves", width: 90 },
              { src: "/assets/brands/malibu.jpg", alt: "Malibu", width: 100 },
              { src: "/assets/brands/avm.jpg", alt: "AVM Entertainments", width: 60 }
            ].map((brand, i) => (
              <div key={i} style={{
                position: 'relative',
                width: brand.width,
                height: 60,
                filter: 'grayscale(100%) brightness(0.8)',
                opacity: 0.7,
                transition: 'all 0.3s'
              }}>
                {/* Using standard img tag for now to avoid Next.js Image component complexity with unknown dimensions/blur if not configured, or could use Image with objectFit contain */}
                <img
                  src={brand.src}
                  alt={brand.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      <Services />

      <div style={{ height: '50px', background: 'linear-gradient(to bottom, var(--surface), var(--background))' }}></div>


      {/* Differentiators */}
      <section className="container" style={{ padding: '8rem 1.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Why EZ Cut Media?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { title: "30 Minute Turnaround", desc: "Our primary promise. Walk out with finished content." },
            { title: "End-to-End Pipeline", desc: "We handle everything from lighting to upload." },
            { title: "Celebrity Trusted", desc: "Used by public figures who value time and privacy." },
            { title: "Creator Ecosystem", desc: "We don't just make ads; we build modern brands." }
          ].map((item, i) => (
            <div key={i} style={{ padding: '2.5rem', border: '1px solid var(--border)', borderRadius: '8px', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>◉</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creator Mission */}
      <section id="mission" style={{ padding: '8rem 0', background: 'var(--surface)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            The Mission
          </span>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Empowering the <br /> Next Generation.
          </h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            EZ Cut Media is a launchpad for young talent. We provide real projects, professional mentorship, and a career path in the fast-paced world of digital media.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-outline">Join the Team</button>
            <button className="btn btn-primary">Hire Our Graduates</button>
          </div>
        </div>

        {/* Abstract Glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '800px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 122, 31, 0.15) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 1
        }}></div>
      </section>

      {/* Final CTA Banner */}
      <section style={{ padding: '6rem 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '2rem', letterSpacing: '-0.03em' }}>
            Ready to <span className="text-primary">Shoot?</span>
          </h2>
          <p style={{ marginBottom: '3rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            Book your slot. Get your content.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
            Start Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', background: '#050505' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ fontWeight: '800', fontSize: '1.5rem', marginBottom: '1rem' }}>EZ CUT MEDIA</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Content at the speed of culture.<br />
              Shoot. Cut. Deliver.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'white', marginBottom: '1.5rem' }}>Explore</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <a href="#">Services</a>
              <a href="#">Portfolio</a>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'white', marginBottom: '1.5rem' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
              <a href="https://instagram.com/ezcut_media" target="_blank">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="mailto:hello@ezcutmedia.com">hello@ezcutmedia.com</a>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #111', color: '#444', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
          <span>&copy; {new Date().getFullYear()} EZ Cut Media.</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </main>
  );
}
