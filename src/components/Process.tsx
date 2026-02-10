import styles from './Process.module.css';

export default function Process() {
    const steps = [
        { num: '01', title: 'Plan', desc: 'Select and book a plan according to our comprehensive packages.' },
        { num: '02', title: 'Shoot', desc: 'Our professional Reelographer comes directly to your location.' },
        { num: '03', title: 'Edit', desc: 'He shoots & edits on the spot according to your specific requirements.' },
        { num: '04', title: 'Deliver', desc: 'We deliver the final content ready for you to post immediately.' },
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
