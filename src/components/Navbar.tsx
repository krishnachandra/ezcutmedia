"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
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
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#portfolio" className={styles.link}>Portfolio</Link>
                    <Link href="#mission" className={styles.link}>Mission</Link>
                </div>

                <Link href="#contact" className={`btn btn-primary ${styles.cta}`}>
                    Book a Shoot
                </Link>
            </div>
        </nav>
    );
}
