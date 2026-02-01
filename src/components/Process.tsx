import styles from './Process.module.css';

export default function Process() {
    const steps = [
        { num: '01', title: 'Plan', desc: 'Concept, hook, and shot list in minutes.' },
        { num: '02', title: 'Shoot', desc: 'High-end capture with our pro team.' },
        { num: '03', title: 'Edit', desc: 'Live editing on set. Zero lag.' },
        { num: '04', title: 'Deliver', desc: 'Ready to post before you leave.' },
    ];

    return (
        <section id="how-it-works" className={styles.section}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '4rem' }}>How It Works</h2>
                <div className={styles.steps}>
                    {steps.map((step, i) => (
                        <div key={i} className={styles.step}>
                            <div className={styles.number}>{step.num}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
