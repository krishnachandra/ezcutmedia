"use client";

import styles from './Services.module.css';

export default function Services() {
    const handleEnquiry = (plan: string) => {
        const message = `Hi, I want to enquire about "${plan}"`;
        const url = `https://wa.me/919121930521?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="packages" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our <span className="text-primary">Packages</span></h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Built for those who need to move fast.
                    </p>
                </div>

                <div className={styles.packagesGrid}>
                    {/* Quick Shoot Packages */}
                    <div className={styles.quickShoots}>
                        <div className={styles.packageCard} onClick={() => handleEnquiry('1-Hour Shoot Plan')}>
                            <div className={styles.packageType}>1-Hour Shoot</div>
                            <div className={styles.packageDetails}>
                                <span className={styles.deliverable}>1 Reel</span>
                                <span className={styles.separator}>—</span>
                                <span className={styles.price}>₹1,599</span>
                                <span className={styles.gst}>+ GST</span>
                            </div>
                        </div>

                        <div className={styles.packageCard} onClick={() => handleEnquiry('4-Hour Shoot Plan')}>
                            <div className={styles.packageType}>4-Hour Shoot</div>
                            <div className={styles.packageDetails}>
                                <span className={styles.deliverable}>2 Reels</span>
                                <span className={styles.separator}>—</span>
                                <span className={styles.price}>₹5,999</span>
                                <span className={styles.gst}>+ GST</span>
                            </div>
                        </div>
                    </div>

                    {/* Creator & Brand Packages */}
                    <div className={styles.creatorPackages}>
                        <h3 className={styles.sectionTitle}>Creator & Brand Packages</h3>

                        <div className={styles.creatorGrid}>
                            <div className={styles.creatorCard} onClick={() => handleEnquiry('Basic Creator Package')}>
                                <div className={styles.creatorTier}>Basic</div>
                                <div className={styles.creatorDetails}>8 reels, 3 sessions</div>
                                <div className={styles.creatorPrice}>₹12,999 <span className={styles.gst}>+ GST</span></div>
                            </div>

                            <div className={`${styles.creatorCard} ${styles.popular}`} onClick={() => handleEnquiry('Standard Creator Package')}>
                                <div className={styles.popularBadge}>Most Popular</div>
                                <div className={styles.creatorTier}>Standard</div>
                                <div className={styles.creatorDetails}>8 reels (4 premium), 5 sessions</div>
                                <div className={styles.creatorPrice}>₹17,999 <span className={styles.gst}>+ GST</span></div>
                            </div>

                            <div className={styles.creatorCard} onClick={() => handleEnquiry('Premium Creator Package')}>
                                <div className={styles.creatorTier}>Premium</div>
                                <div className={styles.creatorDetails}>10 reels (6 premium), 8 sessions</div>
                                <div className={styles.creatorPrice}>₹25,999 <span className={styles.gst}>+ GST</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Event Packages */}
                    <div className={styles.eventPackages}>
                        <div className={styles.eventCard} onClick={() => handleEnquiry('Wedding Package')}>
                            <h3 className={styles.eventTitle}>Wedding Packages</h3>
                            <div className={styles.eventPrice}>Starting at ₹24,999 + GST</div>
                            <p className={styles.eventDesc}>
                                Comprehensive coverage for your special day.
                            </p>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>●</span> 10 Premium Reels</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>●</span> Up to 4 Event Shoots</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>●</span> 1 Day Turnaround</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>●</span> Fully Customizable Consignment</li>
                            </ul>
                        </div>

                        <div className={styles.eventCard} onClick={() => handleEnquiry('Private Party Package')}>
                            <h3 className={styles.eventTitle}>Private Party Packages</h3>
                            <div className={styles.eventPrice}>Starting at ₹5,499 + GST</div>
                            <p className={styles.eventDesc}>
                                Perfect for birthdays and intimate gatherings.
                            </p>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>●</span> 5 Edited Reels</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>●</span> 4 Hours of Coverage</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>●</span> 1 Day Turnaround</li>
                                <li className={styles.featureItem}><span className={styles.featureIcon}>●</span> Add-ons Available</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
