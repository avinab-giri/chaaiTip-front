'use client'

import React, { useEffect, useState } from 'react'
import ThemeColorSetter from './themeColorSetter';
import Image from 'next/image';
import QRCode from 'qrcode';

interface UpiQrGeneraterProps {
    vpa: string;
    payeeName: string;
    amount: string;
    transactionNote: string;
    onPaymentVerified: () => void;
}

const UpiQrGenerater: React.FC<UpiQrGeneraterProps> = ({ vpa, payeeName, amount, transactionNote, onPaymentVerified }) => {
    const themeColor = '#002d1f';
    const [qrCodeDataURL, setQRCodeDataURL] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const generateUPIString = () => {
        const upiParams = new URLSearchParams({
            pa: vpa,
            pn: payeeName,
            ...(amount && { am: amount }),
            ...(transactionNote && { tn: transactionNote }),
            cu: 'INR'
        });

        return `upi://pay?${upiParams.toString()}`;
    };

    const generateQRCode = async () => {
        if (!vpa || !payeeName) {
            alert('Please fill in VPA and Payee Name');
            return;
        }

        setIsLoading(true);
        try {
            const upiString = generateUPIString();
            console.log('UPI String:', upiString); // For debugging

            const qrDataURL = await QRCode.toDataURL(upiString, {
                width: 300,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                }
            });
            setQRCodeDataURL(qrDataURL);
        } catch (error) {
            console.error('Error generating QR code:', error);
            alert('Error generating QR code');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        generateQRCode();
    }, []);

    const formatted = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(Number(amount));


    const verifyPayment = async (): Promise<boolean> => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payment/verify/${transactionNote}`);
            const result = await res.json();
            if (result.success && result.payment?.status === "COMPLETED") {
                return true;
            }
            return false;
        } catch (err) {
            console.error("Verification failed", err);
            return false;
        }
    };

    const handleVerifyPayment = async () => {
        setLoading(true);
        setError(null);

        let attempts = 0;
        let verified = false;

        while (attempts < 6 && !verified) { 
            verified = await verifyPayment();
            if (verified) break;
            await new Promise(resolve => setTimeout(resolve, 5000)); 
            attempts++;
        }

        setLoading(false);

        if (verified) {
            onPaymentVerified();
        } else {
            setError("❌ Payment not yet received. Please try again in a moment.");
        }
    };

    return (
        <>
            <ThemeColorSetter color={themeColor} />
            {isLoading ? <>
                <div className="animate-pulse">
                    <div className="relative max-w-[450px] w-full">
                        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">

                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                                </div>
                                <div>
                                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            </div>

                            <div className="p-4 flex flex-col items-center">
                                <div className="bg-white p-4 rounded-xl shadow-md mb-5 relative z-10 h-24 w-24"></div>
                                <div className="py-3 px-6 w-full text-center mb-2">
                                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                                    <div className="flex items-center justify-center gap-5">
                                        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                                        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                                        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                                        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                                        <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                            </div>

                            <div className="bg-gray-50 p-4 text-center">
                                <div className="h-4 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </> : <>
                <div className="card">
                    <div className="card-body relative max-w-[450px] w-full">
                        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden card">

                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white flex justify-between items-center">

                                <div className=' mb-2'>
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
                                    <Image width={150} height={150} src={qrCodeDataURL} alt={''} />
                                </div>

                                {/* <div className="w-full bg-blue-50 rounded-lg p-4 mb-6">
                                <p className="text-blue-800 text-center text-sm font-medium">
                                    <i className="fas fa-lock-shield mr-1.5"></i> Secured by {process.env.NEXT_PUBLIC_BRAND_NAME}
                                </p>
                            </div> */}

                                <div className="bottom-bar py-3 px-6 bg-[var(--theme-color)]/10 w-full text-center mb-2">
                                    <p className="text-gray-500 !text-xs mb-2">Scan With Any UPI App.</p>
                                    <div className='flex items-center justify-center gap-5'>
                                        <Image width={20} height={20} src={'/img/google-pay-icon.svg'} alt='' />
                                        <Image width={20} height={20} src={'/img/phonepe-icon.svg'} alt='' />
                                        <Image width={20} height={20} src={'/img/paytm-icon.svg'} alt='' />
                                        <Image width={20} height={20} src={'/img/mobikwik-logo-icon.svg'} alt='' />
                                        <Image width={20} height={20} src={'/img/bhim-app-icon.svg'} alt='' />
                                    </div>
                                </div>

                                <button id="paymentBtn" onClick={handleVerifyPayment}
                                    disabled={loading} className="payment-btn w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center">
                                    <span className="btn-text">{loading ? "⏳ Verifying..." : "✅ I Have Made the Payment"}</span>
                                    <span className="tick"><i className="fas fa-check-circle mr-2"></i> Payment Verified</span>
                                </button>
                            </div>


                            <div className="bg-gray-50 p-4 text-center">
                                <p className="!text-xs text-gray-500">© 2023 {process.env.NEXT_PUBLIC_BRAND_NAME}. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>}

        </>
    )
}

export default UpiQrGenerater