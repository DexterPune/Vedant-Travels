import React, { useState, useEffect } from 'react';

const Visionn = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sectionStyle = {
        padding: isMobile ? '0px' : '40px',
        margin: '0 auto',
    };

    const containerStyle = {
        maxWidth: isMobile ? '100%' : '1200px',
        margin: '0 auto',
        padding: '0 15px',
    };

    const rowStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        gap: '20px',
    };

    const colStyle = {
        flex: '1',
        minWidth: isMobile ? '100%' : '300px',
        boxSizing: 'border-box',
        marginBottom: isMobile ? '20px' : '0',
    };

    const headingStyle = {
        textAlign: 'center',
        paddingBottom: '20px',
        fontSize: isMobile ? '24px' : '32px',
        color: '#343a40',
    };

    const visionContentStyle = {
        backgroundColor: '#006BB7',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        color: 'white',
    };

    const sectionTitleStyle = {
        color: '#E8302F', // Light color for titles
    };
    const sectionTitleStylee = {
        color: 'white'
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <h3 style={{ ...headingStyle, ...sectionTitleStyle }}>About Our Vision & Mission</h3>
                <div style={rowStyle}>
                    <div style={colStyle}>
                        <div style={visionContentStyle}>
                            <h4 style={sectionTitleStylee}>Vision</h4>
                            <p className='text-white'>
                                At Vedant Travels, our vision is to redefine the way people travel by offering fast, reliable, and comfortable transportation options for every passenger. We aim to transform the travel experience with state-of-the-art technology, outstanding service, and a strong commitment to passenger safety. Our vision is to become the go-to travel partner for those seeking convenient, dependable, and affordable transportation solutions.

                                We envision a future where every journey is seamless, stress-free, and enjoyable, offering the peace of mind that comes with punctuality and excellence. Whether you're commuting for work, attending an event, or embarking on an outstation trip, Vedant Travels ensures that your ride is always a pleasant experience.
                            </p>
                        </div>
                    </div>
                    <div style={colStyle}>
                        <div style={visionContentStyle}>
                            <h4 style={sectionTitleStylee}>Mission</h4>
                            <p className='text-white'>
                                At Vedant Travels, our mission is to provide world-class transportation services that prioritize safety, comfort, and efficiency. Our goal is to offer an exceptional travel experience by providing timely, affordable, and top-quality rides, driven by professional drivers in well-maintained vehicles.

                                Our mission is fueled by a passion for customer satisfaction and a dedication to continuous improvement. We are focused on making every ride hassle-free and enjoyable, integrating real-time tracking, transparent pricing, and flexible booking options. With Vedant Travels, we aspire to create positive, memorable journeys that foster long-term relationships with our cherished customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visionn;
