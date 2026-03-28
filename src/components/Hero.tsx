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
        { src: "/assets/user_reel_1.jpg", id: "DS-Ih7DEibM", views: "1.2M", title: "Celebrity Vibes", likes: "45.2K", comments: "4.1K", reposts: "4.2K", shares: "810K" },
        { src: "/assets/reel_singer.jpg", id: "DPE_2g4E2CH", views: "900K", title: "Live Concerts", likes: "12.8K", comments: "1.1K", reposts: "1.2K", shares: "240K" },
        { src: "/assets/user_reel_2.jpg", id: "DR95q0pkwC1", views: "850K", title: "Event Highlights", likes: "89.5K", comments: "8.2K", reposts: "8.5K", shares: "1.6M" },
        { src: "/assets/reel_fashion_red.jpg", id: "DPylZwCEi_I", views: "1.5M", title: "Fashion Week", likes: "22.1K", comments: "2.0K", reposts: "2.1K", shares: "410K" },
        { src: "/assets/reel_dance.jpg", id: "DS-Ih7DEibM", views: "2.1M", title: "Festival Energy", likes: "67.8K", comments: "6.5K", reposts: "6.6K", shares: "1.2M" },
        { src: "/assets/reel_fashion_black.jpg", id: "DR95q0pkwC1", views: "600K", title: "Runway Trends", likes: "34.4K", comments: "3.2K", reposts: "3.3K", shares: "620K" }
    ];
    const reels = [...originalReels, ...originalReels];

    // Clock Update
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Infinite Scroll Logic
    useEffect(() => {
        const screen = screenRef.current;
        if (!screen || playingReel) return;

        let currentIndex = 0;

        const scrollToNextReel = () => {
            // Seamless loop logic:
            // If we are currently at the duplicate set (index >= 6),
            // effectively we are at index 0 visually.
            // 1. Instantly jump back to real index 0 to reset position.
            // 2. Then animate to index 1.

            if (currentIndex >= originalReels.length) {
                // Instant jump to start
                screen.scrollTo({
                    top: 0,
                    behavior: 'auto'
                });
                currentIndex = 0;

                // Small delay to ensure the browser processes the jump before starting the smooth scroll
                // This prevents the browser from merging the commands and scrolling backwards
                setTimeout(() => {
                    currentIndex++;
                    screen.scrollTo({
                        top: screen.clientHeight * currentIndex,
                        behavior: 'smooth'
                    });
                }, 50);
            } else {
                // Normal scroll
                currentIndex++;
                screen.scrollTo({
                    top: screen.clientHeight * currentIndex,
                    behavior: 'smooth'
                });
            }
        };

        // Change reel every 4 seconds (like TikTok auto-play)
        const interval = setInterval(scrollToNextReel, 4000);

        return () => clearInterval(interval);
    }, [playingReel, originalReels.length]);

    const scrollToMobilePortfolio = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('mobile-portfolio');
        if (element) {
            const offset = 80; // Navbar height offset
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

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
                    <h1 className={styles.headline}>
                        <span className={styles.subtitle}>under 30 minutes</span>
                        Shoot, Edit & <span className="text-primary">Deliver.</span>
                    </h1>
                    <p className={styles.subtext}>
                        Short-form video production for brands, celebrities, and creators. We shoot, edit, and deliver them almost instantly.
                    </p>

                    <div className={styles.rotatorWrapper}>
                        We create content for
                        <div className={styles.rotatorWindow}>
                            <div className={styles.rotatorList}>
                                <div className={styles.rotatorItem}>Weddings <span className={styles.ringEmoji}>💍</span></div>
                                <div className={styles.rotatorItem}>Corporate/Social Events <span className={styles.toastEmoji}>🥂</span></div>
                                <div className={`${styles.rotatorItem} ${styles.partyItem}`}>Private Parties <span className={styles.partyEmoji}>🥳</span></div>
                                <div className={styles.rotatorItem}>Movie Launches <span className={styles.actionEmoji}>🎬</span></div>
                                <div className={styles.rotatorItem}>Weddings <span className={styles.ringEmoji}>💍</span></div>
                            </div>
                        </div>
                    </div>

                    <Link href="/careers" className={styles.careersLink}>
                        Are you a Reelographer? <span className={styles.careersHighlight}>Click here</span>
                    </Link>

                    <div className={styles.actions}>
                        <Link href="tel:+919121930521" className={styles.heroIconLink} aria-label="Call">
                            <div className={styles.iconCircle}>
                                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.35-.65.24-1.01A11.36 11.36 0 0 1 8.59 4.29c0-.55-.45-1-1-1H4.21c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.38c0-.55-.45-1-1-1z" /></svg>
                            </div>
                        </Link>

                        <Link href="https://wa.me/919121930521" target="_blank" className={styles.heroIconLink} aria-label="WhatsApp">
                            <Image src="/assets/whatsapp.png" alt="WhatsApp" width={40} height={40} sizes="40px" />
                        </Link>

                        <Link href="https://instagram.com/ezcut_media" target="_blank" className={styles.heroIconLink} aria-label="Instagram">
                            <Image src="/assets/instagram.png" alt="Instagram" width={40} height={40} sizes="40px" />
                        </Link>
                    </div>
                </div>

                {/* Right Side: iPhone Portfolio */}
                <div className={styles.phoneSide} id="mobile-portfolio">
                    <div className={styles.iphone}>
                        {/* Phone Frame Image */}
                        <div className={styles.phoneFrame}>
                            <Image
                                src="/assets/frame-v2.png"
                                alt="iPhone Frame"
                                fill
                                sizes="288px"
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>

                        {/* Status Bar - Positioned manually */}
                        <div className={styles.statusBar} style={{ top: 25, width: '88%', left: '6%' }}>
                            <div className={styles.time}>{time}</div>
                            <div className={styles.statusIcons}>
                                <Image
                                    src="/assets/statusbar.png"
                                    alt="Status Icons"
                                    width={70}
                                    height={14}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </div>

                        {/* Dynamic Island Removed (Part of Image) */}
                        {/* <div className={styles.dynamicIsland}></div> */}

                        {/* Top Bar Overlay */}
                        <div className={styles.topOverlay}>
                            {/* Left: Plus Icon */}
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8 }}>
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>

                            {/* Center + Right grouped together */}
                            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                                {/* Center: Reels | Friends */}
                                <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14, fontWeight: 700 }}>
                                    <span style={{ color: '#888' }}>Reels</span>
                                    <span style={{ color: 'white' }}>Friends</span>
                                </div>

                                {/* Right: Stacked Avatars */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: 20, height: 20, borderRadius: '50%', border: '1px solid black', overflow: 'hidden', position: 'relative', zIndex: 3 }}>
                                        <Image src="/assets/founder.jpg" alt="User 1" fill sizes="20px" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ width: 20, height: 20, borderRadius: '50%', border: '1px solid black', overflow: 'hidden', position: 'relative', marginLeft: -8, zIndex: 2 }}>
                                        <Image src="/assets/user_reel_1.jpg" alt="User 2" fill sizes="20px" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ width: 20, height: 20, borderRadius: '50%', border: '1px solid black', overflow: 'hidden', position: 'relative', marginLeft: -8, zIndex: 1, backgroundColor: '#333' }}>
                                        {/* Fallback/Third User */}
                                        <Image src="/assets/user_reel_2.jpg" alt="User 3" fill sizes="20px" style={{ objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Screen Content */}
                        <div className={styles.screen} ref={screenRef}>
                            {reels.map((item, i) => (
                                <div key={i} className={styles.reel}>
                                    <Image
                                        src={item.src}
                                        alt={`${item.title} - Professional Instagram reel by EZ Cut Media showcasing ${item.views} views`}
                                        fill
                                        sizes="270px"
                                        style={{ objectFit: 'cover' }}
                                        priority={i < 2}
                                        loading={i < 2 ? 'eager' : 'lazy'}
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
                                            <svg viewBox="0 0 24 24" width="24" height="24" fill="#FE2C55" stroke="none">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                            </svg>
                                            <span style={{ fontSize: 10, fontWeight: 400 }}>{item.likes}</span>
                                        </div>
                                        <div className={styles.actionBtn}>
                                            <Image src="/assets/comment icon.png" alt="Comment" width={24} height={24} style={{ objectFit: 'contain' }} />
                                            <span style={{ fontSize: 10, fontWeight: 400 }}>{item.comments}</span>
                                        </div>
                                        {/* Repost Icon */}
                                        <div className={styles.actionBtn}>
                                            <Image src="/assets/repost icon.png" alt="Repost" width={36} height={36} style={{ objectFit: 'contain' }} />
                                            <span style={{ fontSize: 10, fontWeight: 400 }}>{item.reposts}</span>
                                        </div>
                                        <div className={styles.actionBtn}>
                                            <Image src="/assets/send icon.png" alt="Share" width={20} height={20} style={{ objectFit: 'contain' }} />
                                            <span style={{ fontSize: 10, fontWeight: 400 }}>{item.shares}</span>
                                        </div>
                                        <div className={styles.actionBtn}>
                                            <svg viewBox="0 0 24 24" className={styles.actionIcon} style={{ width: 20 }}><circle cx="12" cy="12" r="1" /><circle cx="6" cy="12" r="1" /><circle cx="18" cy="12" r="1" /></svg>
                                        </div>
                                        {/* Album Art */}
                                        <div className={styles.albumArt}>
                                            <Image src="/assets/logo-icon.png" width={24} height={24} alt="audio" />
                                        </div>
                                    </div>

                                    {/* Reel Overlay Content */}
                                    <div className={styles.reelContent}>

                                        {/* User Row with Follow Button */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8, marginLeft: 0 }}>
                                            {/* Avatar */}
                                            <div style={{ width: 20, height: 20, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid white' }}>
                                                <Image src="/assets/logo-icon.png" width={20} height={20} alt="user" style={{ objectFit: 'cover' }} />
                                            </div>

                                            {/* Username and Location */}
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                                                    <span style={{ fontSize: 9, fontWeight: 600, color: 'white' }}>ezcut_media</span>

                                                </div>
                                                <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.8)' }}>
                                                    Original • Hyderabad
                                                </div>
                                            </div>

                                            {/* Follow Button */}
                                            <button style={{
                                                background: 'transparent',
                                                border: '1px solid white',
                                                color: 'white',
                                                padding: '4px 10px',
                                                borderRadius: 6,
                                                fontSize: 8.5,
                                                fontWeight: 600,
                                                cursor: 'pointer'
                                            }}>
                                                Follow
                                            </button>

                                        </div>

                                        {/* Caption */}
                                        <p style={{
                                            fontSize: 8.5,
                                            color: 'white',
                                            margin: '0 0 8px 0',
                                            lineHeight: 1.4
                                        }}>
                                            Tag your girl bestie💆‍♀️ ...
                                        </p>


                                    </div>

                                    {/* Video Progress Bar */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 40,
                                        left: 0,
                                        right: 0,
                                        height: 2,
                                        background: 'rgba(255,255,255,0.3)',
                                        zIndex: 30
                                    }}>
                                        <div style={{
                                            width: '45%',
                                            height: '100%',
                                            background: 'white'
                                        }}></div>
                                    </div>

                                    {/* Bottom Navigation Bar */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: 40,
                                        background: '#000',
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        padding: '0 20px',
                                        zIndex: 30
                                    }}>
                                        {/* Home Icon */}
                                        <div style={{ position: 'relative', width: 16, height: 16 }}>
                                            <Image src="/assets/home.png" alt="Home" fill sizes="16px" style={{ objectFit: 'contain' }} />
                                        </div>

                                        {/* Reels Icon */}
                                        <div style={{ position: 'relative', width: 16, height: 16 }}>
                                            <Image src="/assets/reels.png" alt="Reels" fill sizes="16px" style={{ objectFit: 'contain' }} />
                                        </div>

                                        {/* Send Icon */}
                                        <div style={{ position: 'relative', width: 16, height: 16 }}>
                                            <Image src="/assets/send icon.png" alt="Send" fill sizes="16px" style={{ objectFit: 'contain' }} />
                                        </div>

                                        {/* Search Icon */}
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.35-4.35"></path>
                                        </svg>

                                        {/* Profile Icon with Red Dot */}
                                        <div style={{ position: 'relative' }}>
                                            <Image src="/assets/logo-icon.png" width={16} height={16} alt="profile" style={{ borderRadius: '50%' }} />
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                right: 0,
                                                width: 6,
                                                height: 6,
                                                background: '#ef4444',
                                                borderRadius: '50%',
                                                border: '1px solid black'
                                            }}></div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                        {/* Glossy overlay reflection for realism */}
                        <div className={styles.reflection}></div>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom CTA */}
            <div className={styles.scrollIndicator}>
                <a href="#mobile-portfolio" onClick={scrollToMobilePortfolio} className={styles.scrollLink}>
                    <span>View Portfolio</span>
                    <svg className={styles.chevron} viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </a>
            </div>
        </section>
    );
}
