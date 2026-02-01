"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    const screenRef = useRef<HTMLDivElement>(null);
    const [time, setTime] = useState('12:00');

    const [playingReel, setPlayingReel] = useState<string | null>(null);

    // Duplicated list for infinite scroll illusion
    const originalReels = [
        { src: "/assets/user_reel_1.jpg", id: "DS-Ih7DEibM", views: "1.2M", title: "Celebrity Vibes" },
        { src: "/assets/reel_singer.jpg", id: "DPE_2g4E2CH", views: "900K", title: "Live Concerts" },
        { src: "/assets/user_reel_2.jpg", id: "DR95q0pkwC1", views: "850K", title: "Event Highlights" },
        { src: "/assets/reel_fashion_red.jpg", id: "DPylZwCEi_I", views: "1.5M", title: "Fashion Week" },
        { src: "/assets/reel_dance.jpg", id: "DS-Ih7DEibM", views: "2.1M", title: "Festival Energy" },
        { src: "/assets/reel_fashion_black.jpg", id: "DR95q0pkwC1", views: "600K", title: "Runway Trends" }
    ];
    const reels = [...originalReels, ...originalReels];

    // Clock Update
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Infinite Scroll Logic
    useEffect(() => {
        const screen = screenRef.current;
        if (!screen) return;

        // Pause auto-scroll if video is playing
        if (playingReel) return;

        let currentIndex = 0;
        const scrollInterval = setInterval(() => {
            currentIndex++;

            // If we reached the start of the duplicate set
            if (currentIndex === originalReels.length) {
                // Smooth scroll to it first
                screen.scrollTo({
                    top: screen.clientHeight * currentIndex,
                    behavior: 'smooth'
                });

                // Wait for smooth scroll (approx 600ms) then silent snap
                setTimeout(() => {
                    screen.scrollTo({ top: 0, behavior: 'auto' });
                    currentIndex = 0;
                }, 800);  // Increased safety buffer to prevent flickering
            } else {
                screen.scrollTo({
                    top: screen.clientHeight * currentIndex,
                    behavior: 'smooth'
                });
            }
        }, 4000);

        return () => clearInterval(scrollInterval);
    }, [playingReel]);

    return (
        <section className={styles.hero}>
            {/* Uniform background color is handled in CSS now */}

            {playingReel && (
                <div className={styles.modalOverlay} onClick={() => setPlayingReel(null)}>
                    <button className={styles.closeBtn} onClick={() => setPlayingReel(null)}>&times;</button>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={`https://www.instagram.com/p/${playingReel}/embed/captioned/?cr=1&v=14&wp=540`}
                            width="100%"
                            height="100%"
                            style={{ border: 'none', borderRadius: '12px' }}
                            allow="encrypted-media"
                        ></iframe>
                    </div>
                </div>
            )}

            <div className={`container ${styles.content}`}>
                {/* Left Side: Text */}
                <div className={styles.textSide}>
                    <span className={styles.prehead}>Content at the Speed of Culture</span>
                    <h1 className={styles.headline}>
                        Shoot, Edit & <span className="text-primary">Deliver.</span>
                    </h1>
                    <p className={styles.subtext}>
                        Short-form video production for brands, celebrities, and creators. <br className="hidden md:block" />
                        We shoot, edit, and deliver them post-ready in <strong>under 30 minutes</strong>.
                    </p>
                    <div className={styles.actions}>
                        <Link href="https://wa.me/yourwhatsapplink" target="_blank" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '20px' }}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.006.574 1.944.887 3.322.887 3.166-.007 5.767-2.607 5.767-5.772 0-3.18-2.583-5.764-5.763-5.764zm6.65 10.428c-1.63 1.628-3.956 2.525-6.307 2.525h-.006c-1.393 0-2.822-.387-4.093-1.121l-4.5 1.18 1.196-4.387c-.815-1.362-1.246-2.91-1.244-4.502.007-4.912 4.005-8.91 8.918-8.91 2.38 0 4.619.927 6.302 2.61a8.878 8.878 0 0 1 2.61 6.29 8.87 8.87 0 0 1-2.617 6.297z" /></svg>
                            WhatsApp
                        </Link>
                        <Link href="tel:+1234567890" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            Call
                        </Link>
                        <Link href="https://instagram.com/ezcutmedia" target="_blank" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '20px' }}>
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            ezcut_media
                        </Link>
                    </div>
                </div>

                {/* Right Side: iPhone Portfolio */}
                <div className={styles.phoneSide}>
                    <div className={styles.iphone}>
                        {/* Status Bar */}
                        <div className={styles.statusBar}>
                            <div className={styles.time}>{time}</div>
                            <div className={styles.statusIcons}>
                                <div className={styles.signal}>
                                    <div className={styles.bar}></div>
                                    <div className={styles.bar}></div>
                                    <div className={styles.bar}></div>
                                    <div className={styles.bar}></div>
                                </div>
                                <div className={styles.wifi}></div>
                                <div className={styles.battery}>
                                    <div className={styles.batteryFill}></div>
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Island */}
                        <div className={styles.dynamicIsland}></div>

                        {/* Top Bar Overlay */}
                        <div className={styles.topOverlay}>
                            <svg viewBox="0 0 24 24" className={styles.cameraIcon} style={{ width: 24, height: 24 }}>
                                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <svg viewBox="0 0 24 24" className={styles.cameraIcon} style={{ width: 26, height: 26 }}>
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                    <circle cx="12" cy="13" r="4" />
                                </svg>
                                {/* Top Right Logo Watermark */}
                                <div style={{ width: 30, height: 30, background: 'var(--primary)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ color: 'white', fontWeight: 900, fontSize: 16 }}>E</span>
                                </div>
                            </div>
                        </div>

                        {/* Screen Content */}
                        <div className={styles.screen} ref={screenRef}>
                            {reels.map((item, i) => (
                                <div key={i} className={styles.reel}>
                                    <Image
                                        src={item.src}
                                        alt="Reel content"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority={i < 2}
                                    />

                                    {/* Play Button */}
                                    <div className={styles.playButton} onClick={() => setPlayingReel(item.id)}>
                                        <svg viewBox="0 0 24 24" style={{ width: 32, height: 32, fill: 'white', marginLeft: 4 }}>
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>

                                    {/* Right Side Actions */}
                                    <div className={styles.reelActions}>
                                        <div className={styles.actionBtn}>
                                            <svg viewBox="0 0 24 24" className={styles.actionIcon}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                                            <span>32</span>
                                        </div>
                                        <div className={styles.actionBtn}>
                                            <svg viewBox="0 0 24 24" className={styles.actionIcon}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                                            <span>1</span>
                                        </div>
                                        {/* Sync/Refresh Icon */}
                                        <div className={styles.actionBtn}>
                                            <svg viewBox="0 0 24 24" className={styles.actionIcon}><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                                            <span>4</span>
                                        </div>
                                        <div className={styles.actionBtn}>
                                            <svg viewBox="0 0 24 24" className={styles.actionIcon} style={{ transform: 'rotate(-20deg)' }}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                            <span>2</span>
                                        </div>
                                        <div className={styles.actionBtn}>
                                            <svg viewBox="0 0 24 24" className={styles.actionIcon} style={{ width: 20 }}><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                                        </div>
                                        {/* Album Art */}
                                        <div className={styles.albumArt}>
                                            <Image src="/assets/logo-icon.png" width={32} height={32} alt="audio" />
                                        </div>
                                    </div>

                                    {/* Reel Overlay Content */}
                                    <div className={styles.reelContent}>

                                        {/* User Row */}
                                        <div className={styles.userRow}>
                                            <div className={styles.userAvatar}>
                                                <Image src="/assets/logo-icon.png" width={24} height={24} alt="user" />
                                            </div>
                                            <span className={styles.username}>ezcut_media</span>
                                        </div>

                                        {/* Caption */}
                                        <p className={styles.caption}>
                                            Celebrating Excellence | The Times Hospitality ...
                                        </p>

                                        {/* Insights Pill Row */}
                                        <div className={styles.insightsRow}>
                                            <div className={styles.insightPill}>
                                                <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: 'white' }}><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
                                                762 • View insights
                                            </div>
                                            <div className={styles.insightPill} style={{ background: 'rgba(59, 130, 246, 0.4)' }}>
                                                <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: 'white' }}><path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z" /></svg>
                                                Boost reel
                                            </div>
                                        </div>

                                        {/* Music Marquee */}
                                        <div className={styles.musicTrack} style={{ background: 'transparent', padding: 0, marginTop: 0 }}>
                                            <svg viewBox="0 0 24 24" style={{ fill: 'white', width: 12, height: 12 }}><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
                                            <span className={styles.musicText}>Original Audio • ezcut_media</span>
                                        </div>

                                    </div>

                                    {/* Add Comment Bar */}
                                    <div className={styles.commentBar}>
                                        Add comment...
                                    </div>

                                </div>
                            ))}
                        </div>
                        {/* Glossy overlay reflection for realism */}
                        <div className={styles.reflection}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
