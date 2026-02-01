import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            title: "Rapid Content",
            desc: "Reels, Shorts, and Ads produced at lightning speed. We shoot, edit, and hand it over in 30 minutes. No waiting.",
            icon: "⚡"
        },
        {
            title: "Social Media PR",
            desc: "Influencer amplification, trend positioning, and visibility campaigns that get your brand talked about.",
            icon: "📢"
        },
        {
            title: "Digital Marketing",
            desc: "Performance-driven growth. We combine creative speed with paid strategies for maximum ROI.",
            icon: "📈"
        },
        {
            title: "End-to-End Production",
            desc: "From concept to posting. We handle the gear, the set, the edit, and the final upload.",
            icon: "🎬"
        }
    ];

    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Services</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Built for those who need to move fast.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardIcon}>{s.icon}</div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
