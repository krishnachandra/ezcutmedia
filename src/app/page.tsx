import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from './page.module.css';

export default function Home() {
  const marqueeBrands = [
    { src: "/assets/brands/nt_ticket_factory.png", alt: "Ticket Factory" },
    { src: "/assets/brands/nt_hyd_times.jpg", alt: "Hyderabad Times Fashion Week" },
    { src: "/assets/brands/nt_xiti.jpg", alt: "Xiti Weaves" },
    { src: "/assets/brands/nt_skolors.png", alt: "SKOLORS" },
    { src: "/assets/brands/nt_sapta_aswa.jpg", alt: "Sapta Aswa" },
    { src: "/assets/brands/nt_malibu.png", alt: "Malibu" },
    { src: "/assets/brands/nt_deccan_project.jpg", alt: "The Deccan Project" },
    { src: "/assets/brands/nt_vyra.jpg", alt: "Vyra Entertainments" },
    { src: "/assets/brands/nt_thrive.png", alt: "Thrive Events" }
  ];
  
  // Duplicate array so it's long enough to cover ultra-wide 4k screens
  const trackBrands = [...marqueeBrands, ...marqueeBrands];

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
          {/* Brand Logos Marquee */}
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeContent}>
              {/* Render two identical tracks for an absolute perfect infinite loop */}
              {[1, 2].map((trackIndex) => (
                <div key={trackIndex} className={styles.marqueeTrack} aria-hidden={trackIndex === 2}>
                  {trackBrands.map((brand, i) => (
                    <div key={`${trackIndex}-${i}`} className={styles.brandItem}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={brand.src}
                        alt={brand.alt}
                        loading={trackIndex === 1 && i < 10 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />

      <Services />

      <div style={{ height: '50px', background: 'linear-gradient(to bottom, var(--surface), var(--background))' }}></div>


      {/* Differentiators */}
      <section className="container" style={{ padding: '8rem 1.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Why EZ Cut Media?</h2>
        <div className={styles.benefitsGrid}>
          {[
            { title: "30 Minute Turnaround", desc: "Our primary promise. Walk out with finished content." },
            { title: "Easy & Professional", desc: "Book a trained Reelographer in seconds. Zero hassle." },
            { title: "Affordable & Clear", desc: "Premium content at unbeatable rates. No hidden costs." },
            { title: "End-to-End Pipeline", desc: "We handle everything from lighting to upload." },
            { title: "Trusted & Secure", desc: "Used by public figures who value privacy. 100% Safe." },
            { title: "Creator Ecosystem", desc: "We don't just make ads; we build modern brands." }
          ].map((item, i) => (
            <div key={i} style={{ padding: '2.5rem', border: '1px solid var(--border)', borderRadius: '8px', background: 'rgba(255,255,255,0.03)' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>◉</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '4rem', textAlign: 'center', maxWidth: '800px', margin: '4rem auto 0' }}>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: 'white', fontWeight: '500' }}>
            We are not just a service provider but your partner in growth.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem' }}>
            Whether you&apos;re building a personal brand or driving business goals, our content is designed to make an instant impact.
          </p>
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
      <Footer />
    </main>
  );
}
