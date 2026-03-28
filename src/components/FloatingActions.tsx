"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './FloatingActions.module.css';

export default function FloatingActions() {
    const [showActions, setShowActions] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show only after scrolling past roughly the first viewport (approx 80vh)
            // This ensures they appear "from 2nd section" as requested
            const triggerHeight = window.innerHeight * 0.8;
            setShowActions(window.scrollY > triggerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check in case of reload
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Only render if visible and on mobile (CSS handles display:none for desktop)
    // But we conditionally render to keep DOM clean
    if (!showActions) return null;

    return (
        <div className={styles.container}>
            <Link href="tel:+919121930521" className={styles.fab} aria-label="Call Us">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.35-.65.24-1.01A11.36 11.36 0 0 1 8.59 4.29c0-.55-.45-1-1-1H4.21c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.38c0-.55-.45-1-1-1z" />
                </svg>
            </Link>
            <Link href="https://wa.me/919121930521" target="_blank" className={styles.fab} aria-label="WhatsApp">
                <Image src="/assets/whatsapp.png" alt="WhatsApp" width={28} height={28} sizes="28px" />
            </Link>
            <Link href="https://instagram.com/ezcut_media" target="_blank" className={styles.fab} aria-label="Instagram">
                <Image src="/assets/instagram.png" alt="Instagram" width={28} height={28} sizes="28px" />
            </Link>
        </div>
    );
}
