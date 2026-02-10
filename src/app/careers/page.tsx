import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './careers.module.css';

export default function Careers() {
    const openings = [
        { title: 'Reelographers', count: 1, type: 'Full-time' },
        { title: 'Social Media Manager - Intern', count: 1, type: 'Internship' },
        { title: 'Content Strategist - Intern', count: 1, type: 'Internship' },
    ];

    return (
        <main>
            <Navbar />

            <section className={styles.header}>
                <div className="container">
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                        Join the Team
                    </span>
                    <h1 className={styles.title}>Build the Future of <br />Short-Form Content.</h1>
                    <p className={styles.subtitle}>
                        We are looking for creative minds who live and breathe social media.
                        If you are obsessed with storytelling and speed, you belong here.
                    </p>
                </div>
            </section>

            <section className="container">
                <div className={styles.positions}>
                    {openings.map((job, i) => (
                        <div key={i} className={styles.jobCard}>
                            <div>
                                <h3 className={styles.jobTitle}>{job.title}</h3>
                                <div className={styles.jobMeta}>
                                    <span>{job.type}</span>
                                    <span>•</span>
                                    <span>Hyderabad</span>
                                </div>
                            </div>
                            <div className={styles.countBadge}>
                                {job.count} Open
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.applySection}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>See a role that fits?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Send your resume and portfolio to
                    </p>
                    <a href="mailto:ezcutmedia@gmail.com" className={styles.emailLink}>
                        ezcutmedia@gmail.com
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
