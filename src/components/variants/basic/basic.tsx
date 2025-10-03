'use client'

import React, { useMemo, useState } from 'react';
import BasicPriceWrap from './priceWrap';
import BasicRecentSupporters from './recentSupportList';
import BasicMilestones from './milestones';

interface BasicVarientProps {
    data?: any;
}

const clamp = (v: number) => Math.max(0, Math.min(255, v));
const hexToRgb = (hex: string) => {
    const m = hex.replace('#', '').match(/^([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i);
    if (!m) return [34, 197, 94];
    return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
};
const shade = (rgb: number[], percent: number) => {
    const f = (v: number) => clamp(Math.round(v + (percent / 100) * (percent < 0 ? v : (255 - v))));
    return [f(rgb[0]), f(rgb[1]), f(rgb[2])];
};
const toCssRgb = (rgb: number[]) => `${rgb[0]} ${rgb[1]} ${rgb[2]}`;

const BasicVarient: React.FC<BasicVarientProps> = ({ data }) => {
    const userData = data.data;
    const userId = userData.id;
    const username = userData.username;
    const supportData = data.support;
    const payOutSettingData = data.payOutSetting;

    const totalSupport = data.totalSupport;

    const userName = userData.name;
    const bio = userData.bio;

    const bioContent = (bio == null || bio.length === 0) ? (
        <span>
            <span className="text-[rgb(var(--primary-500))] font-medium">Hey!</span> I just created a page here. You can now buy me a coffee to support my work!
        </span>
    ) : (
        <span>{bio}</span>
    );

    const oneCupPrice = payOutSettingData.oneCupPrice;
    const currencyName = payOutSettingData.currencyName;
    const currencySvg = '₹ ';

    const minPriceReceived = payOutSettingData.minPriceReceived;
    const sysPmtName = payOutSettingData.sysPmtName;

    const merchantName = payOutSettingData.merchantName;
    const upiId = payOutSettingData.upiId;

    const [refreshKey, setRefreshKey] = useState(0);

    let milestoneTitle = '';
    if (totalSupport === 0) {
        milestoneTitle = 'First supporter';
    } else if (totalSupport > 0 && totalSupport <= 5) {
        milestoneTitle = 'Thanks to the first 5 supporters—your help means a lot!';
    } else if (totalSupport > 5 && totalSupport < 100) {
        milestoneTitle = `${totalSupport} amazing people have supported—thank you all!`;
    } else if (totalSupport >= 100) {
        milestoneTitle = '100 supporters strong! I\'m so grateful for each of you.';
    }

    const handleSupportSuccess = () => setRefreshKey(prev => prev + 1);

    const { vars } = useMemo(() => {
        const baseHex: string = data?.theme?.primary ?? '#22c55e';
        const base = hexToRgb(baseHex);

        const p500 = base;
        const p400 = shade(base, +12);
        const p600 = shade(base, -12);

        const p20 = shade(base, +94);
        const p50 = shade(base, +88);
        const p100 = shade(base, +75);

        const p700 = shade(base, -24);
        const p800 = shade(base, -36);
        const p900 = shade(base, -48);

        return {
            vars: {
                '--primary-20': toCssRgb(p20),
                '--primary-50': toCssRgb(p50),
                '--primary-100': toCssRgb(p100),
                '--primary-400': toCssRgb(p400),
                '--primary-500': toCssRgb(p500),
                '--primary-600': toCssRgb(p600),
                '--primary-700': toCssRgb(p700),
                '--primary-800': toCssRgb(p800),
                '--primary-900': toCssRgb(p900),
            } as React.CSSProperties
        };
    }, [data?.theme?.primary]);



    return (
        <div className="flex-grow" style={vars}>

            <header className="hero-gradient bg-red-100 text-white py-10 px-4" style={{ background: '#070c08' }}>
                <div className="max-w-5xl mx-auto text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 mug-icon">
                        <i className="fas fa-mug-hot text-3xl text-[rgb(var(--primary-500))]"></i>
                    </div>
                    <h1 className="text-4xl font-bold mb-2">Support {username}</h1>
                    <p className="text-xl opacity-90 !text-white">Fuel creativity with your support</p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-8 -mt-16">
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    <div className="space-y-6 order-2 lg:order-1">
                        <div className="bg-white rounded-xl p-6 card border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">About</h2>
                            <p className="text-gray-600 mb-6">
                                {bioContent}
                            </p>

                            <BasicRecentSupporters userId={username} refreshKey={refreshKey} />
                        </div>

                        <BasicMilestones username={username} refreshKey={refreshKey} milestoneTitle={milestoneTitle} />
                    </div>

                    <div className="sticky top-8 order-1 lg:order-2">
                        <BasicPriceWrap
                            userId={userId}
                            userName={userName}
                            oneCupPrice={oneCupPrice}
                            currencySvg={currencySvg}
                            currencyName={currencyName}
                            minPriceReceived={minPriceReceived}
                            sysPmtName={sysPmtName}
                            upiId={upiId}
                            merchantName={merchantName}
                            onSupportSuccess={handleSupportSuccess}
                        />
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-gray-200 py-6 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex space-x-5 mb-4 md:mb-0">
                            <a href="#" className="text-sm text-gray-500 hover:text-[rgb(var(--primary-600))] transition">English</a>
                            <a href="#" className="text-sm text-gray-500 hover:text-[rgb(var(--primary-600))] transition">Privacy</a>
                            <a href="#" className="text-sm text-gray-500 hover:text-[rgb(var(--primary-600))] transition">Terms</a>
                            <a href="#" className="text-sm text-gray-500 hover:text-[rgb(var(--primary-600))] transition">Report</a>
                        </div>
                        <a href="#" className="text-sm font-medium text-[rgb(var(--primary-600))] hover:text-[rgb(var(--primary-500))] flex items-center transition">
                            Start your page <i className="fas fa-arrow-right ml-2 text-xs"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BasicVarient;
