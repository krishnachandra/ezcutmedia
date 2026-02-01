"use client";

import { useState } from 'react';
import styles from './animations.module.css';

export default function TextAnimationsPage() {
    // Key used to force re-render/replay animations
    const [key, setKey] = useState(0);

    const replay = () => {
        setKey(prev => prev + 1);
    };

    return (
        <main className={styles.container}>
            <h1 style={{ marginBottom: '3rem', color: '#888' }}>Animation Concepts for "Shoot, Edit & Deliver"</h1>

            <div className={styles.grid}>

                {/* Variant 1: Typewriter */}
                <div className={styles.card} onClick={replay}>
                    <div className={styles.label}>01. Terminal Speed</div>
                    <div key={key + '-1'}>
                        <h1 className={`${styles.h1} ${styles.typewriter}`}>
                            Shoot, Edit & <span className={styles.highlight}>Deliver.</span>
                        </h1>
                    </div>
                </div>

                {/* Variant 2: Motion Blur Slide */}
                <div className={styles.card} onClick={replay}>
                    <div className={styles.label}>02. Motion Rush</div>
                    <div key={key + '-2'}>
                        <h1 className={`${styles.h1} ${styles.blurSlide}`}>
                            <span style={{ marginRight: '8px' }}>Shoot,</span>
                            <span style={{ marginRight: '8px' }}>Edit</span>
                            <span style={{ marginRight: '8px' }}>&</span>
                            <span className={styles.highlight}>Deliver.</span>
                        </h1>
                    </div>
                </div>

                {/* Variant 3: Glitch/Cyber */}
                <div className={styles.card} onClick={replay}>
                    <div className={styles.label}>03. Glitch Snap</div>
                    <div key={key + '-3'}>
                        <h1 className={styles.h1}>
                            <div className={styles.glitchWrapper}>
                                <div className={styles.glitch} data-text="Shoot, Edit & Deliver.">
                                    Shoot, Edit & <span className={styles.highlight}>Deliver.</span>
                                </div>
                            </div>
                        </h1>
                    </div>
                </div>

                {/* Variant 4: Rapid Fire */}
                <div className={styles.card} onClick={replay}>
                    <div className={styles.label}>04. Heavy Impact</div>
                    <div key={key + '-4'}>
                        <h1 className={`${styles.h1} ${styles.rapidFire}`}>
                            <span style={{ marginRight: '10px' }}>SHOOT.</span>
                            <span style={{ marginRight: '10px' }}>EDIT.</span>
                            <span className={styles.highlight}>DELIVER.</span>
                        </h1>
                    </div>
                </div>

                {/* Variant 5: Infinite Scroll Marquee */}
                <div className={styles.card} style={{ gridColumn: '1 / -1' }}>
                    <div className={styles.label}>05. Area of Expertise (Marquee)</div>
                    <div className={styles.marqueeContainer}>
                        <div className={styles.marqueeTrack}>
                            {/* Duplicate content x4 for safety */}
                            {[1, 2, 3, 4].map((i) => (
                                <div style={{ display: 'flex', gap: '4rem' }} key={i}>
                                    <span className={styles.marqueeItem}>Hospitality</span>
                                    <span className={`${styles.marqueeItem} ${styles.primary}`}>Fashion</span>
                                    <span className={styles.marqueeItem}>Corporate</span>
                                    <span className={styles.marqueeItem}>Events</span>
                                    <span className={`${styles.marqueeItem} ${styles.primary}`}>Personal Brand</span>
                                    <span className={styles.marqueeItem}>Real Estate</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Variant 6: Vertical Text Rotator */}
                <div className={styles.card} style={{ gridColumn: '1 / -1' }} onClick={replay}>
                    <div className={styles.label}>06. Vertical Rotator</div>
                    <div className={styles.rotatorWrapper}>
                        Content for
                        <div className={styles.rotatorWindow}>
                            <div className={styles.rotatorList} key={key + '-6'}>
                                <div className={styles.rotatorItem}>Hospitality</div>
                                <div className={styles.rotatorItem}>Fashion</div>
                                <div className={styles.rotatorItem}>Events</div>
                                <div className={styles.rotatorItem}>Hospitality</div> {/* Duplicate First */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <button className={styles.refreshBtn} onClick={replay}>
                Replay Animations
            </button>
        </main>
    );
}
