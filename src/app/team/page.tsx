"use client";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './team.module.css';

export default function TeamPage() {
    return (
        <main>
            <Navbar />

            <div className={styles.container}>
                <section className={styles.hero}>

                    <div className={styles.backButtonWrapper}>
                        <Link href="/" className={styles.backButton}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>

                    <h1 className={styles.headline}>
                        Founders <span className="text-primary">Note.</span>
                    </h1>

                    <div className={styles.contentGrid}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/founder.jpg"
                                alt="Rahul Bhagi"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <div className={styles.bio}>
                            <p>
                                EZ Cut Media began with a clear belief: creativity should move fast. In a world where content shifts instantly, we built a team that shoots, edits, and delivers with the same speed. Our focus is simple—create sharp, impactful visuals that connect audiences within seconds.
                            </p>
                            <p>
                                Beyond quick delivery, EZ Cut Media is a platform for young creators to grow, experiment, and build real careers. We are not just part of the digital content space; we aim to elevate it and set stronger standards for modern storytelling.
                            </p>
                            <div className={styles.signature}>
                                <span className={styles.name}>Rahul Bhagi</span>
                                <span className={styles.title}>Founder, EZ Cut Media</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>5+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>1k+</span>
                            <span className={styles.statLabel}>Reels Delivered</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                    </div>

                    <div className={styles.backButtonWrapper}>
                        <Link href="/" className={styles.backButton}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>

                </section>
            </div>
        </main>
    );
}
