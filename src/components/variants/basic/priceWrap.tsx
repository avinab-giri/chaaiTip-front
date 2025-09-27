'use client'
import React, { ChangeEvent, useState } from 'react'
import { CustomDialog } from "@/components/CustomDialog";
import UpiQrGenerater from '@/components/upiQrGenerater';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';

interface BasicPriceWrapProps {
    userId: number,
    userName: string,
    oneCupPrice: number,
    currencySvg: string,
    currencyName: string,
    minPriceReceived: string,
    sysPmtName: string,
    upiId: string,
    merchantName: string,
    onSupportSuccess?: () => void;
}

const BasicPriceWrap: React.FC<BasicPriceWrapProps> = ({ userId, userName, oneCupPrice, currencySvg, currencyName, minPriceReceived, sysPmtName, merchantName, upiId, onSupportSuccess }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [totalCups, setTotalCups] = useState(1);
    const [totalPrice, setTotalPrice] = useState(oneCupPrice);
    const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);
    const [openThankYou, setOpenThankYou] = useState(false);
    const [loading, setLoading] = useState(false);

    const minPrice = (Number(minPriceReceived) < 0) ? minPriceReceived : 1;

    const handelPriceBtn = (num: number) => {
        let price = oneCupPrice * num;
        setTotalCups(num);
        setTotalPrice(price);
    }

    const handelInputPriceBtn = (e: ChangeEvent<HTMLInputElement>) => {
        handelPriceBtn(Number(e.target.value));
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget; // capture early if you still want access later
        setLoading(true);

        try {
            const formData = new FormData(form);
            const name = (formData.get("name") as string)?.trim();
            const message = (formData.get("message") as string)?.trim();

            if (!totalPrice || totalPrice < Number(minPriceReceived)) {
                alert(`Minimum support is ${currencySvg}${minPriceReceived}`);
                return;
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/support`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    userId,
                    name,
                    feedback: message,
                    price: totalPrice,
                    feedbackDisplay: 1,
                    cups: totalCups,
                }),
            });

            const result = await response.json();

            if (result?.data?.paymentId) {
                setDialogContent(
                    <UpiQrGenerater
                        vpa={upiId}
                        payeeName={merchantName}
                        amount={totalPrice.toString()}
                        transactionNote={result.data.paymentId}
                        onPaymentVerified={() => {
                            setDialogOpen(false);
                            setOpenThankYou(true);
                            onSupportSuccess?.();
                            // if you WANT to clear after verification, do it here:
                            form.reset();
                            setTotalCups(1); setTotalPrice(oneCupPrice);
                        }}
                    />
                );
                setDialogOpen(true);
            }
        } catch (err) {
            console.error("Support request failed:", err);
        } finally {
            setLoading(false);
        }
    };

    const incChaiCount = ()=>{
        setTotalCups(totalCups + 1);
    }

    const decChaiCount = ()=>{
        if(totalCups == 1){
            setTotalCups(1);
        }else{
            setTotalCups(totalCups - 1);
        }
    }


    return (
        <>
            <div className="bg-white rounded-xl p-6 card border border-gray-100">

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Buy {userName} a Chai</h2>
                    <p className="text-gray-500">Fuel creativity and show your appreciation</p>
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className="mb-6">
                        <div className="grid grid-cols-5 gap-3">
                            <div className="support-option cursor-pointer p-3 text-center">
                                <Image width={150} height={150} src="/img/tea-cup.png" alt=""/>
                            </div>
                            <button
                                type='button'
                                onClick={() => handelPriceBtn(1)}
                                className={`support-option cursor-pointer bg-white border-2 rounded-lg p-3 text-center ${totalCups === 1 ? "!bg-[rgb(var(--primary-500))] border-[rgb(var(--primary-500))] text-white selected" : "border-gray-200"
                                    }`}
                            >
                                <span className="font-medium">1</span>
                            </button>
                            <button
                                type='button'
                                onClick={() => handelPriceBtn(3)}
                                className={`support-option cursor-pointer bg-white border-2 rounded-lg p-3 text-center ${totalCups === 3 ? "!bg-[rgb(var(--primary-500))] border-[rgb(var(--primary-500))] text-white selected" : "border-gray-200"
                                    }`}
                            >
                                <span className="font-medium">3</span>
                            </button>

                            <button
                                type='button'
                                onClick={() => handelPriceBtn(5)}
                                className={`support-option cursor-pointer bg-white border-2 rounded-lg p-3 text-center ${totalCups === 5 ? "!bg-[rgb(var(--primary-500))] border-[rgb(var(--primary-500))] text-white selected" : "border-gray-200"
                                    }`}
                            >
                                <span className="font-medium">5</span>
                            </button>

                            <div className="support-option cursor-pointer bg-white border-2 border-gray-200 rounded-lg p-3 text-center flex items-center">
                                <input readOnly name='totalPrice' onChange={handelInputPriceBtn} className='font-medium text-gray-800 w-full' min={minPrice} type="text" defaultValue={totalCups} />
                                <div className='flex flex-col gap-0.5'>
                                    <button className='cursor-pointer bg-gray-100' type='button' onClick={incChaiCount}><IoIosArrowUp /></button>
                                    <button className='cursor-pointer bg-gray-100' type='button' onClick={decChaiCount}><IoIosArrowDown /></button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Your name</label>
                        <input autoComplete="off" name='name' type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(var(--primary-500))] focus:ring-0 outline-none transition" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Say something nice...</label>
                        <textarea autoComplete="off" name='message' id="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[rgb(var(--primary-500))] focus:ring-0 outline-none transition" style={{ height: '98px' }}></textarea>
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className={`glow-effect w-full bg-gradient-to-r from-[rgb(var(--primary-600))] to-[rgb(var(--primary-400))] 
              text-white font-bold py-3 px-4 rounded-lg text-lg shadow-lg 
              hover:shadow-xl transition-all transform hover:-translate-y-0.5 
              ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 mr-2 text-white" /* ... */ />
                                Processing...
                            </span>
                        ) : (
                            <>Support {currencySvg} {totalPrice} <i className="fas fa-arrow-right ml-2"></i></>
                        )}
                    </button>


                </form>

                <div className="mt-4 flex items-center justify-center space-x-2">
                    <i className="fas fa-lock text-gray-400"></i>
                    <p className="text-xs text-gray-500">Secure payment with {sysPmtName}</p>
                </div>

            </div>

            <CustomDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                {dialogContent}
            </CustomDialog>


            <CustomDialog open={openThankYou} onOpenChange={setOpenThankYou}>
                <p className="text-center font-bold">🎉 Thank you for your support!</p>
            </CustomDialog>
        </>
    )
}

export default BasicPriceWrap