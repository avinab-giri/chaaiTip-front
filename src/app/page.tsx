import Footer from "@/components/footer";
import LandingPageFaq from "@/components/landingFaq";
import Navbar from "@/components/navbar";
import { Directly, FastSave, IconZeroPercentage, NoHiddenCharge, NoMiddleMan } from "@/components/svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LuMousePointerClick } from "react-icons/lu";


import PerfectSection from "@/components/perfectSection";
import GetStartSection from "@/components/getStartSection";
import CircleText from "@/components/screen/circleText";
import LinkBtn from "@/components/screen/linkBtn";

export default function Home() {

  return (
    <>
      <Navbar />
      <main>

        <header className="bg-gradient-to-b from-primary-100 to-white">
          <div className="container">
            <div className="heroSection flex items-center justify-between flex-wrap">
              <div className="captionArea max-w-[500px] xl:scale-150 xl:origin-left">
                <div className="inline-block px-4 py-2 bg-chai-light rounded-full mb-2 border border-chai-DEFAULT/20">
                  <h4 className="flex items-center gap-2"><IconZeroPercentage className="w-5 h-5" /> <span className="text-xl">commission</span></h4>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">A Sip of Support <br /> for <span className="text-primary-600">Creators</span></h1>
                <p className="text-lg text-gray-600 mb-8">Fund your passion. Accept tips. Build your community. <br /> It’s easier than making a cup of chai!</p>
                <div className="flex items-center gap-3 mb-2">
                  <Button className="text-lg font-semibold text-center transition duration-300 shadow-lg"><a href={process.env.NEXT_PUBLIC_SIGNUP}>Start My Page</a></Button>
                  <Button variant={"outline"} ><a href="">Start My Page</a></Button>
                </div>
                <p className="text-sm !text-gray-500">It’s free and takes less than a minute!</p>
              </div>
              <div className="imgArea relative">
                <div><Image width={650} height={650} src={'/img/hero-section.png'} alt="" /></div>
              </div>
            </div>
          </div>
        </header>

        <section id="whatSection" className="py-10">
          <div className="container">

          </div>
        </section>

        <section id="whySection" className="pb-15">
          <div className="container">
            <div className="content grid grid-cols-12 relative">
              <div className="bgShap col-start-2 absolute -z-0 -top-5 animateLeftRightSlow">
                <Image width={350} height={350} src={'/img/service-shape-1-1.png'} alt="" />
              </div>

              <CircleText classname="!absolute top-[30%] right-20 !text-gray-400" text={`${process.env.NEXT_PUBLIC_BRAND_NAME} - Turn Love into Chai -`} />

              <div className="col-span-8 col-start-3 relative z-10 flex flex-wrap">

                <div className="item w-full grid items-center grid-cols-2 gap-5 mb-3">
                  <div>
                    <h4 className="py-2 px-6 bg-primary-500 inline-block !text-sm !font-normal rounded-full">What is ChaaiTip?</h4>
                    <h2 className="mb-4">Support Your Favourite Creator with a Cup of Chaai</h2>
                    <p className="">ChaaiTip is a zero commission support platform for Indian creators. Here, fans and supporters can directly send love, blessings, and small money help to their favourite creators.</p>
                  </div>
                  <div>
                    <ul>
                      <li className="flex items-center bg-white py-2 px-2 rounded-md mb-2">
                        <div className="ivon bg-primary-100 p-1 mr-2 rounded-sm">
                          <NoMiddleMan className="w-10 h-10"/>

                        </div> <p>No middleman.</p></li>
                      <li className="flex items-center bg-white py-2 px-2 rounded-md mb-2">
                        <div className="ivon bg-primary-100 p-2 mr-2 rounded-sm">
                          <NoHiddenCharge className="w-10 h-10"/>
                        </div> <p>No hidden charges.</p></li>
                      <li className="flex items-center bg-white py-2 px-2 rounded-md mb-2">
                        <div className="ivon bg-primary-100 p-2 mr-2 rounded-sm">
                          <Directly className="w-10 h-10"/>
                        </div> <p>Money goes directly to creator’s UPI ID</p></li>
                      <li className="flex items-center bg-white py-2 px-2 rounded-md mb-2">
                        <div className="ivon bg-primary-100 p-2 mr-2 rounded-sm">
                          <FastSave className="w-10 h-10"/>
                        </div> <p>Fast, safe, and simple.</p></li>
                    </ul>
                  </div>
                </div>

                <div className="grid items-center grid-cols-2 gap-3">

                  <div className="item !grid-cols-1 w-full h-full justify-items-center">
                    <div className="leftSide">
                      <h4 className="mb-2 font-bold">You own your supporters</h4>
                      <p className="mb-3">Your supporters are always yours. Build genuine relationships, export your list anytime, and stay fully connected without platform restrictions or hidden walls.</p>
                      <LinkBtn href={process.env.NEXT_PUBLIC_SIGNUP} target="_blank" name={`Join ${process.env.NEXT_PUBLIC_BRAND_NAME} Free`} />
                    </div>
                    <div className="rightSide">
                      <Image width={250} height={250} src={'/img/suppoter.png'} alt="" />
                    </div>
                  </div>

                  <div className="item !grid-cols-1 w-full h-full justify-items-center">
                    <div className="rightSide">
                      <h4 className="mb-2 font-bold">Instant payouts</h4>
                      <p className="mb-3">Get paid in seconds, not months. Every tip goes straight to your UPI, no middlemen, no 30-day waiting periods.</p>
                      <LinkBtn href={process.env.NEXT_PUBLIC_SIGNUP} target="_blank" name="Create My Page" />
                    </div>
                    <div className="leftSide">
                      <Image width={250} height={250} src={'/img/payout.png'} alt="" />
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        <section id="actionSection">
          <div className="container">
            <div className="content text-center px-25 py-15 bg-gray-900 rounded-2xl ">
              <h2 className="text-4xl mb-4 text-white capitalize">Give Your Audience an <br /> Easy Way to  <span className="text-primary-600">Say Thanks</span></h2>
              <p className="text-xl !text-gray-300 mb-6 max-w-[700px] mx-auto">{process.env.NEXT_PUBLIC_BRAND_NAME} makes it simple for your fans to support you instantly.
                In just a couple of taps, they can send you a tip (buy you a chai) and leave you a heartfelt message. No complicated sign-ups. No delays.</p>
              <p className="!text-gray-400 text-sm max-w-[700px] mx-auto">Whether you’re a YouTuber, artist, blogger, teacher, podcaster, or musician — {process.env.NEXT_PUBLIC_BRAND_NAME} lets you focus on creating, while your fans show their love in the most Indian way possible… with a cup of chai! </p>
            </div>
          </div>
        </section>

        <section id="howWork" className="py-25">
          <div className="container">
            <div className="content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              <div className="item">
                <div className="imgArea relative overflow-hidden">
                  <Image width={350} height={350} src="/img/work-1.png" alt="Work example"/>
                </div>
                <div className="textArea">
                  <h4>Create your {process.env.NEXT_PUBLIC_BRAND_NAME} page</h4>
                  <p>free and ready in less than a minute.</p>
                </div>
              </div>

              <div className="item">
                <div className="imgArea relative overflow-hidden">
                  <Image width={350} height={350} src="/img/work-2.png" alt="Work example" /> 
                </div>
                <div className="textArea">
                  <h4>Share your link</h4>
                  <p>add it to your bio, videos, posts, or streams.</p>
                </div>
              </div>

              <div className="item">
                <div className="imgArea relative overflow-hidden">
                  <Image width={350} height={350} src="/img/work-3.png" alt="Work example"/>
                </div>
                <div className="textArea">
                  <h4>Get tips instantly</h4>
                  <p>directly to your UPI or bank account.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="getWorkSection">
          <div className="container">
            <div className="content">
              <div className="flex items-center justify-between px-30">
                <h2>Ready to Get Your First Tip?</h2>
                <a target="_blank" href="https://www.youtube.com/watch?v=h9MbznbxlLc" className="acttionBtn">
                  <span className="videoBtnIcon text-2xl"><LuMousePointerClick /></span>
                  <span className="videoBtnBorder"></span>
                  <span className="videoBtnBorder"></span>
                  <span className="videoBtnBorder"></span>
                  <span className="videoBtnBorder"></span>
                </a>
              </div>
              <div className="shape">
                <svg className="shapeOne animateLeftRight" xmlns="http://www.w3.org/2000/svg" width="220" height="219" viewBox="0 0 220 219">
                  <path d="M98.5501 91.9998L75.0335 109.136L145.728 218.98L179 219L98.5501 91.9998Z"></path>
                  <path d="M164.16 42.9998H109.44L0.000289917 187H53.2803L164.16 42.9998Z"></path>
                  <path d="M179.69 -0.000244141L13.2502 219H52.6702L221.3 -0.000244141H179.69Z"></path>
                </svg>
                <svg className="shapeTwo" xmlns="http://www.w3.org/2000/svg" width="489" height="187" viewBox="0 0 489 187" fill="none">
                  <path d="M217.819 -96.2565L259.636 -150.636L166.952 -296L92.8061 -295.748L217.819 -96.2565Z"></path>
                  <path d="M164.679 91.4988H247.174L489 -225.925L405.049 -224.108L164.679 91.4988Z"></path>
                  <path d="M91.9444 187L459.611 -295.748H371.225L0 187H91.9444Z"></path>
                </svg>
                <svg className="shapeThree" xmlns="http://www.w3.org/2000/svg" width="489" height="219" viewBox="0 0 489 219" fill="none">
                  <path d="M217.819 199.743L259.636 145.364L166.952 0L92.8061 0.251557L217.819 199.743Z"></path>
                  <path d="M164.679 387.499H247.174L489 70.0753L405.049 71.8923L164.679 387.499Z"></path>
                  <path d="M91.9444 483L459.611 0.251669H371.225L0 483H91.9444Z"></path>
                </svg>
                <svg className="shapeFour animateLeftRightSlow" xmlns="http://www.w3.org/2000/svg" width="222" height="219" viewBox="0 0 222 219" fill="none">
                  <path d="M122.631 126.63L146.102 109.524L75.5552 -0.11417L42 -5.08002e-05L122.631 126.63Z"></path>
                  <path d="M57.14 175.676H111.86L221.3 31.6757H168.02L57.14 175.676Z"></path>
                  <path d="M41.6101 219L208 0H168L6.10352e-05 219H41.6101Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="firstUpiSection">
          <div className="container">
            <div className="content twoGrid items-center">
              <div className="rightSide">
                <div className="flex justify-center relative">
                  <div className="relative w-full max-w-lg floating">
                    <div className="rounded-2xl overflow-hidden relative border border-gray-200 bg-white">
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-8">
                          <div>
                            <p className="!text-sm !text-gray-400">YOUR {process.env.NEXT_PUBLIC_BRAND_NAME} PAGE</p>
                            <h3 className="text-xl font-bold text-gray-500">@YourHandle</h3>
                          </div>
                          <div className="bg-gray-100 border border-gray-300 p-2 rounded-sm">
                            <i className="fas fa-qrcode"></i>
                          </div>
                        </div>

                        <div className="mb-8">
                          <div className="bg-dark/50 border border-gray-300 rounded-lg p-4 mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-400">Recent Support</span>
                              <span className="text-xs">+ ₹2,450 this week</span>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 pinkHeart">
                                  <i className="fas fa-heart"></i>
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-white">"Love your work!"</p>
                                  <p className="text-xs text-gray-500">₹150 via UPI</p>
                                </div>
                                <div className="text-xs text-gray-400">2h ago</div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-cyber-blue/10 flex items-center justify-center text-cyber-blue mr-3 blueCoffe">
                                  <i className="fas fa-coffee"></i>
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-white">"Keep creating!"</p>
                                  <p className="text-xs text-gray-500">₹100 via Crypto</p>
                                </div>
                                <div className="text-xs text-gray-400">5h ago</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-dark/50 border border-gray-300 rounded-lg p-4 text-center">
                            <p className="text-sm text-gray-400 mb-1">Total Support</p>
                            <p className="text-xl font-bold text-cyber-teal">₹12,840</p>
                          </div>
                          <div className="bg-dark/50 border border-gray-300 rounded-lg p-4 text-center">
                            <p className="text-sm text-gray-400 mb-1">Supporters</p>
                            <p className="text-xl font-bold text-cyber-pink">184</p>
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-[var(--cyber-teal)] to-[rgb(var(--cyber-blue))] text-dark py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-cyber-teal/20">
                          Share Your Page <i className="fas fa-external-link-alt ml-1"></i>
                        </button>
                      </div>
                    </div>

                    <div className="absolute -bottom-12 -left-3 z-0">
                      <div className="cyber-card p-4 rounded-lg transform -rotate-6 bg-white border border-gray-300">
                        <div className="flex items-center space-x-3">
                          <div className="bg-cyber-purple/10 p-2 rounded-full">
                            <i className="fas fa-bolt text-cyber-purple"></i>
                          </div>
                          <div>
                            <p className="!text-xs font-medium">Instant Payouts</p>
                            <p className="!text-xs !text-gray-400">Direct to UPI/Bank</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="leftSide">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">UPI-First, Made for India</h2>
                <p className="mb-3">Unlike international platforms that charge <b>high fees and pay slowly</b>, {process.env.NEXT_PUBLIC_BRAND_NAME} is built for <b>Indian creators</b>. </p>
                <div className="flex gap-3 items-center mb-3">
                  <div style={{ height: '50px', width: '200px', position: 'relative' }}>
                    <Image
                      src="/img/upi-consulting.png"
                      alt="UPI Consulting"
                      fill={true}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <p className="mb-3">Your supporters can scan a QR code, choose how many cups of tea they’d like to offer, share their <b>heartfelt feedback</b>, and pay you directly through UPI <br />— <small>Paytm, PhonePe, Google Pay, BHIM, or any other UPI app.</small></p>
                </div>
                <p>No complicated payment gateways. <b>Just chai-fast</b> payments.</p>
              </div>
            </div>
          </div>
        </section>

        <PerfectSection />

        <GetStartSection />

        <section id="faqSection" className="bg-gray-950 py-15 text-white">
          <div className="container">
            <div className="content twoGrid">
              <div className="leftSide"></div>
              <div className="rightSide">
                <h2>Frequently Asked Questions</h2>
                <LandingPageFaq />
              </div>
            </div>
          </div>
        </section>

        <section id="growthSection" className="py-25">
          <div className="container">
            <div className="content twoGrid gap-5 items-center">
              <div className="leftSide">
                <h4 className="text-[var(--color-primary-800)] font-medium uppercase tracking-wide">Your Growth with {process.env.NEXT_PUBLIC_BRAND_NAME}</h4>
                <h2 className="!text-4xl !font-normal mb-4">Building stronger connections with your audience.</h2>
                <ul>
                  <li className="mb-2"><p><b>More Engagement </b> <br /> <span className="pl-2">Fans who tip are more likely to share your work</span></p></li>
                  <li className="mb-2"> <p><b>Loyal Community </b> <br /> <span className="pl-2">Supporters feel part of your journey</span></p></li>
                  <li className="mb-2"><p><b>Consistent Motivation </b> <br /> <span className="pl-2">Every tip is a reminder that your work matters</span></p></li>
                </ul>

                <div className="growhtFooter grid grid-cols-2 border-t border-gray-300 py-3 gap-3">
                  <div><p className="!text-gray-500">Support from fans across India and the world</p></div>
                  <div><p className="!text-gray-500">Instant cashflow — no 30-day waits</p></div>
                </div>
              </div>
              <div className="rightSide">
                <div className="imgArea">
                  <Image width={400} height={400} src={'/img/community.jpg'} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="action2Section">
          <div className="container">
            <div className="content text-center px-25 py-15 bg-gray-900 rounded-2xl ">
              <h2 className="text-4xl mb-4 text-white">Start Your {process.env.NEXT_PUBLIC_BRAND_NAME} Today</h2>
              <p className="text-xl !text-gray-300 mb-6 max-w-[700px] mx-auto">It takes less than a minute to set up your {process.env.NEXT_PUBLIC_BRAND_NAME} page. Share it with your fans today, and you might just wake up tomorrow with your first sip of love.</p>

              <Button asChild><Link target="_blank" href={process.env.NEXT_PUBLIC_SIGNUP as string}>Start My Page</Link></Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
