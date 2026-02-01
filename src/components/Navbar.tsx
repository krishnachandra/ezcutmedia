"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ContactCard from './ContactCard';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const pathname = usePathname();
    const isTeamPage = pathname === '/team';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = (e: React.MouseEvent) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.container}`}>
                    <Link href="/" className={styles.logo} onClick={handleLogoClick}>
                        <Image
                            src="/assets/logo-icon.png"
                            alt="EZ Cut Media"
                            width={40}
                            height={40}
                            style={{ objectFit: 'contain' }}
                        />
                        <span>EZ CUT MEDIA</span>
                    </Link>

                    <div className={styles.links}>
                        <Link href="#how-it-works" className={styles.link}>How It Works</Link>
                        <Link href="#packages" className={styles.link}>Packages</Link>
                        <Link href="#portfolio" className={styles.link}>Portfolio</Link>
                        <Link href="/team" className={styles.link}>The Team</Link>
                    </div>

                    {!isTeamPage && (
                        <>
                            <button onClick={() => setShowContact(true)} className={styles.contactButton}>
                                Contact
                            </button>

                            <div className={styles.socialIcons}>
                                <Link href="https://wa.me/919121930521" target="_blank" className={styles.iconLink}>
                                    <Image
                                        src="/assets/whatsapp.png"
                                        alt="WhatsApp"
                                        width={28}
                                        height={28}
                                    />
                                </Link>
                                <Link href="tel:+919121930521" className={styles.iconLink}>
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.35-.65.24-1.01A11.36 11.36 0 0 1 8.59 4.29c0-.55-.45-1-1-1H4.21c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.38c0-.55-.45-1-1-1z" /></svg>
                                </Link>
                                <Link href="https://instagram.com/ezcut_media" target="_blank" className={styles.iconLink}>
                                    <Image
                                        src="/assets/instagram.png"
                                        alt="Instagram"
                                        width={28}
                                        height={28}
                                    />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </nav>

            <ContactCard isOpen={showContact} onClose={() => setShowContact(false)} />
        </>
    );
}
