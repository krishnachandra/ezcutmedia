"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './ContactCard.module.css';

interface ContactCardProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactCard({ isOpen, onClose }: ContactCardProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.card} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>

                <div className={styles.cardInner}>
                    {/* Left Side - Logo */}
                    <div className={styles.logoSide}>
                        <Image
                            src="/assets/logo-icon.png"
                            alt="EZ Cut Media"
                            width={200}
                            height={200}
                            style={{ objectFit: 'contain' }}
                        />
                        <div className={styles.logoText}>
                            <h2>EZ CUT<br />MEDIA</h2>
                            <p>SHOOT | EDIT | DELIVER</p>
                        </div>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className={styles.infoSide}>
                        <h3 className={styles.title}>About EZ Cut Media</h3>
                        <p className={styles.subtitle}>Contact Info <span className={styles.highlight}>Here</span></p>

                        <div className={styles.infoGrid}>
                            <div className={styles.infoSection}>
                                <h4>Address</h4>
                                <p>Hyderabad</p>
                            </div>

                            <div className={styles.infoSection}>
                                <h4>Office Hours</h4>
                                <p>Monday – Saturday</p>
                                <p>10:00 AM – 06:00 PM</p>
                            </div>

                            <div className={styles.infoSection}>
                                <h4>Get In Touch</h4>
                                <a href="tel:+919121930521">+91 91219 30521</a>
                            </div>

                            <div className={styles.infoSection}>
                                <h4 className={styles.followUs}>Follow Us</h4>
                                <a href="mailto:ezcutmedia@gmail.com">ezcutmedia@gmail.com</a>
                                <a href="https://instagram.com/ezcut_media" target="_blank" rel="noopener">Instagram</a>
                                <a href="https://facebook.com/ezcutmedia" target="_blank" rel="noopener">Facebook</a>
                                <a href="https://x.com/ezcut_media" target="_blank" rel="noopener">X</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
