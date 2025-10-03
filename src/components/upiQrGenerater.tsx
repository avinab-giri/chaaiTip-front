'use client'

import React, { useEffect, useMemo, useState } from 'react';
import ThemeColorSetter from './themeColorSetter';
import QRCode from 'qrcode';

interface UpiQrGeneraterProps {
    vpa: string;
    payeeName: string;
    amount: string;
    transactionNote: string;
    onPaymentVerified: () => void;
}

interface UPIDetails {
    vpa: string;
    payeeName: string;
    amount: string;
    transactionNote: string;
    transactionRef: string;
}

const themeColor = '#002d1f';

const generateSmartRefId = (): string => {
    const timestamp = Date.now().toString().slice(-6);
    const randomPart = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `PAY${timestamp}${randomPart}`;
};

const generateUPIString = (details: UPIDetails): string => {
    const { vpa, payeeName, amount, transactionNote, transactionRef } = details;
    const shortRef = (transactionRef || '').slice(-8);
    const upiParams = new URLSearchParams({
        pa: vpa,
        pn: payeeName,
        am: amount,
        tn: `${transactionNote} ${shortRef}`,
        cu: 'INR',
    });
    return `upi://pay?${upiParams.toString()}`;
};

const UpiQrGenerater: React.FC<UpiQrGeneraterProps> = ({
    vpa,
    payeeName,
    amount,
    transactionNote,
    onPaymentVerified,
}) => {
    const [qrCodeDataURL, setQRCodeDataURL] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Prepare stable upiDetails: transactionRef is generated once per props-group
    const upiDetails = useMemo<UPIDetails>(() => {
        return {
            vpa,
            payeeName,
            amount,
            transactionNote,
            transactionRef: generateSmartRefId(),
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vpa, payeeName, amount, transactionNote]); // changes to inputs -> new ref

    // Generate QR when relevant details change (including the stable transactionRef)
    useEffect(() => {
        let mounted = true;
        const gen = async () => {
            if (!upiDetails.vpa || !upiDetails.payeeName) return;
            setIsLoading(true);
            try {
                const upiString = generateUPIString(upiDetails);
                // console.debug('UPI String:', upiString);
                const dataUrl = await QRCode.toDataURL(upiString, {
                    width: 300,
                    margin: 2,
                    color: { dark: '#000000', light: '#FFFFFF' },
                });
                if (mounted) setQRCodeDataURL(dataUrl);
            } catch (err) {
                console.error('Error generating QR code', err);
            } finally {
                if (mounted) setIsLoading(false);
            }
        };
        gen();
        return () => {
            mounted = false;
        };
    }, [upiDetails.vpa, upiDetails.payeeName, upiDetails.amount, upiDetails.transactionNote, upiDetails.transactionRef]);

    // Format amount for UI
    const formatted = useMemo(() => {
        return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Number(amount));
    }, [amount]);

    // Payment verification - uses transactionRef (server side must expect this ref)
    const verifyPayment = async (transactionRef: string): Promise<boolean> => {
        try {
            const apiBase = process.env.NEXT_PUBLIC_API_URL ?? '';
            const res = await fetch(`${apiBase}/api/payment/verify/${encodeURIComponent(transactionRef)}`);
            if (!res.ok) {
                console.error('Verify API returned not ok', res.status);
                return false;
            }
            const result = await res.json();
            if (result.success && result.payment?.status === 'COMPLETED') {
                return true;
            }
            return false;
        } catch (err) {
            console.error('Verification failed', err);
            return false;
        }
    };

    const handleVerifyPayment = async () => {
        setLoading(true);
        setError(null);

        let attempts = 0;
        let verified = false;

        // Poll up to 6 times with 5s interval (total ~30s); adjust as needed
        while (attempts < 6 && !verified) {
            // Use the stable transactionRef
            verified = await verifyPayment(upiDetails.transactionRef);
            if (verified) break;
            // simple wait
            // NOTE: this is client-side waiting; acceptable for a short poll
            // eslint-disable-next-line no-await-in-loop
            await new Promise((r) => setTimeout(r, 5000));
            attempts++;
        }

        setLoading(false);

        if (verified) {
            onPaymentVerified();
        } else {
            setError('❌ Payment not yet received. Please try again in a moment.');
        }
    };

    const handleDirectPayment = () => {
        const upiString = generateUPIString(upiDetails);
        const userAgent = typeof navigator !== 'undefined' ? (navigator.userAgent || navigator.vendor || '') : '';
        const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
        if (isMobile) {
            // navigate to UPI url to open apps on mobile
            window.location.href = upiString;
        } else {
            // Desktop — instruct to scan
            // You can show a modal instead of alert in your real UI
            alert('Please scan the QR code with your mobile UPI app.');
        }
    };

    const copyUPIID = async () => {
        try {
            await navigator.clipboard.writeText(upiDetails.vpa);
            alert('UPI ID copied to clipboard!');
        } catch {
            alert('Failed to copy UPI ID.');
        }
    };

    const copyRefID = async () => {
        try {
            await navigator.clipboard.writeText(upiDetails.transactionRef);
            alert('Reference ID copied to clipboard!');
        } catch {
            alert('Failed to copy Reference ID.');
        }
    };

    return (
        <>
            <ThemeColorSetter color={themeColor} />

            {isLoading ? (
                <div className="animate-pulse">
                    {/* simplified skeleton — keep your original skeleton if desired */}
                    <div className="max-w-[450px] w-full bg-white rounded-2xl shadow-xl p-6">Generating QR…</div>
                </div>
            ) : (
                <div className="card">
                    <div className="card-body relative max-w-[450px] w-full">
                        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden card">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white flex justify-between items-center">
                                <div className="mb-2">
                                    <h1 className="text-2xl font-bold capitalize">{payeeName}</h1>
                                    <p className="!text-blue-100 !text-xs">{process.env.NEXT_PUBLIC_BRAND_NAME} Trusted Business</p>
                                </div>
                                <div>
                                    <h2 className="text-white !text-sm font-medium">Price Summary</h2>
                                    <span className="text-3xl font-bold text-white">₹ {formatted}</span>
                                </div>
                            </div>

                            <div className="p-4 flex flex-col items-center">
                                <div className="qr-code bg-white p-4 rounded-xl shadow-md mb-5 relative z-10">
                                    {/* Using plain img for dataURL */}
                                    {qrCodeDataURL ? (
                                        <img src={qrCodeDataURL} alt="UPI QR Code" width={150} height={150} />
                                    ) : (
                                        <div className="h-[150px] w-[150px] bg-gray-100 flex items-center justify-center">No QR</div>
                                    )}
                                </div>

                                <div className="bottom-bar py-3 px-6 bg-[var(--theme-color)]/10 w-full text-center mb-2">
                                    <p className="text-gray-500 !text-xs mb-2">Scan With Any UPI App.</p>
                                    <div className="flex items-center justify-center gap-5">
                                        <img width={20} height={20} src="/img/google-pay-icon.svg" alt="GPay" />
                                        <img width={20} height={20} src="/img/phonepe-icon.svg" alt="PhonePe" />
                                        <img width={20} height={20} src="/img/paytm-icon.svg" alt="Paytm" />
                                        <img width={20} height={20} src="/img/mobikwik-logo-icon.svg" alt="Mobikwik" />
                                        <img width={20} height={20} src="/img/bhim-app-icon.svg" alt="BHIM" />
                                    </div>
                                </div>

                                <div className="w-full grid gap-2">
                                    {isMobile && (
                                        <button
                                            onClick={handleDirectPayment}
                                            className="w-full bg-green-600 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors"
                                        >
                                            Pay with Any UPI App
                                        </button>
                                    )}

                                    <button
                                        id="paymentBtn"
                                        onClick={handleVerifyPayment}
                                        disabled={loading}
                                        className="payment-btn w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center"
                                    >
                                        <span className="btn-text">{loading ? '⏳ Verifying...' : '✅ I Have Made the Payment'}</span>
                                    </button>

                                    <div className="flex gap-2 mt-2">
                                        <button onClick={copyUPIID} className="flex-1 py-2 rounded border">
                                            Copy UPI ID
                                        </button>
                                        <button onClick={copyRefID} className="flex-1 py-2 rounded border">
                                            Copy Reference
                                        </button>
                                    </div>

                                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                                    <p className="!text-xs text-gray-500 mt-3">© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BRAND_NAME}. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UpiQrGenerater;
