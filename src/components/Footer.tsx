import Link from 'next/link';

// Actually, looking at the existing footer, it just uses text/basic HTML. I'll stick to that to avoid dependency issues if react-icons isn't installed.

export default function Footer() {
    return (
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
                        <Link href="/">Services</Link>
                        <Link href="/#portfolio">Portfolio</Link>
                        <Link href="/#mission">About Us</Link>
                        <Link href="/careers">Careers</Link>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', color: 'white', marginBottom: '1.5rem' }}>Connect</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                        <a href="https://instagram.com/ezcut_media" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                        <a href="mailto:ezcutmedia@gmail.com">ezcutmedia@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #111', color: '#444', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>&copy; {new Date().getFullYear()} EZ Cut Media.</span>
                <span>Privacy Policy</span>
            </div>
        </footer>
    );
}
