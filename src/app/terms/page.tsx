import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const TermsPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <section id='pageHeader'>
                    <div className="container">
                        <h1>Privacy Policy</h1>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <ol>
                            <li id="creating-an-account">
                                <h2>1. Creating an Account</h2>
                                <ul>
                                    <li>You must be 18 years or older to create an account on ChaaiTip.</li>
                                    <li>You’re responsible for all activity on your account, including keeping your password secure.</li>
                                    <li>You can browse ChaaiTip without an account, but to tip creators or receive tips, you’ll need to register with your name, email, and UPI ID or payout details.</li>
                                    <li>Information you provide must be accurate and complete. Don’t impersonate anyone or use offensive usernames.</li>
                                    <li>If you suspect your account is being used without permission, email <a href="mailto:support@chaaitip.com">support@chaaitip.com</a> immediately.</li>
                                </ul>
                            </li>

                            <li id="prohibited-conduct">
                                <h2>2. Things You Must Not Do</h2>
                                <p>To keep ChaaiTip safe and friendly, you must NOT:</p>
                                <ul>
                                    <li>Break the law or infringe on anyone’s rights.</li>
                                    <li>Post false, misleading, or fraudulent information.</li>
                                    <li>Offer illegal content or items.</li>
                                    <li>Harass, threaten, or abuse others.</li>
                                    <li>Post obscene, pornographic, or sexually explicit material.</li>
                                    <li>Spam or send unsolicited promotions.</li>
                                    <li>Misuse others’ personal information (like UPI IDs or email addresses).</li>
                                    <li>Post anything involving minors in a sexual context, hate speech, extremism, or anything else we deem inappropriate.</li>
                                </ul>
                            </li>

                            <li id="our-responsibility">
                                <h2>3. Our Responsibility</h2>
                                <p>ChaaiTip is a platform — we connect supporters and creators but are not responsible for:</p>
                                <ul>
                                    <li>Disputes between users.</li>
                                    <li>The accuracy of content posted by creators.</li>
                                    <li>The performance or quality of any service offered by creators.</li>
                                </ul>
                                <p>You use ChaaiTip at your own risk.</p>
                            </li>

                            <li id="payments-and-fees">
                                <h2>4. Payments &amp; Fees</h2>
                                <ul>
                                    <li>Creating a ChaaiTip account is free.</li>
                                    <li>When you receive a tip, ChaaiTip may deduct a small platform fee plus any applicable payment processing charges (from UPI or your payment provider).</li>
                                    <li>You’re responsible for paying any taxes on your earnings.</li>
                                    <li>Payments are processed through UPI and other Indian payment gateways. ChaaiTip is not responsible for delays or issues caused by your payment provider.</li>
                                </ul>
                            </li>

                            <li id="links">
                                <h2>5. Links to Other Sites</h2>
                                <p>ChaaiTip may contain links to third-party websites. We are not responsible for their content, privacy policies, or services.</p>
                            </li>

                            <li id="intellectual-property">
                                <h2>6. Intellectual Property</h2>
                                <h3>Our Content</h3>
                                <ul>
                                    <li>ChaaiTip’s name, logo, and platform content are protected under copyright and trademark laws.</li>
                                    <li>We grant you a limited, non-exclusive, non-transferable license to use ChaaiTip for personal or creator purposes only.</li>
                                    <li>You cannot copy, modify, or redistribute ChaaiTip’s content without written permission.</li>
                                </ul>
                                <h3>Your Content</h3>
                                <ul>
                                    <li>You own the content you post on ChaaiTip.</li>
                                    <li>By posting it, you give ChaaiTip a license to display and distribute it on our platform.</li>
                                    <li>You are responsible for ensuring your content does not violate any laws or rights.</li>
                                </ul>
                            </li>

                            <li id="account-deletion">
                                <h2>7. Account Deletion</h2>
                                <ul>
                                    <li>You can delete your account anytime by emailing <a href="mailto:support@chaaitip.com">support@chaaitip.com</a>.</li>
                                    <li>We may retain some information if required by law.</li>
                                    <li>Deleting your account will not automatically remove any public tips or content already posted.</li>
                                </ul>
                            </li>

                            <li id="indemnity">
                                <h2>8. Indemnity</h2>
                                <p>You agree to defend and protect ChaaiTip from any claims, damages, or expenses that arise from:</p>
                                <ul>
                                    <li>Your violation of these Terms.</li>
                                    <li>Your illegal activities.</li>
                                    <li>Your infringement of others’ rights.</li>
                                </ul>
                            </li>

                            <li id="dispute-resolution">
                                <h2>9. Dispute Resolution</h2>
                                <ul>
                                    <li>We encourage you to contact us before taking legal action.</li>
                                    <li>These Terms are governed by the laws of India.</li>
                                    <li>Any disputes will be handled in the courts of Bhubaneswar, Odisha.</li>
                                </ul>
                            </li>

                            <li id="copyright">
                                <h2>10. Copyright</h2>
                                <p>If you believe your copyrighted material has been used without permission, contact us at <a href="mailto:support@chaaitip.com">support@chaaitip.com</a> with proof of ownership and we will review your claim.</p>
                            </li>

                            <li id="entire-agreement">
                                <h2>11. Entire Agreement</h2>
                                <p>These Terms are the full agreement between you and ChaaiTip. If any part is found invalid, the rest still applies.</p>
                            </li>

                            <li id="changes">
                                <h2>12. Changes to the Terms</h2>
                                <p>We may update these Terms occasionally. By continuing to use ChaaiTip after changes, you accept the new Terms.</p>
                            </li>
                        </ol>

                        <section id="contact">
                            <h2>📧 Contact Us</h2>
                            <p>For questions about these Terms, email: <a href="mailto:support@chaaitip.com">support@chaaitip.com</a></p>
                            <address>
                                🏢 Retrod Technologies Pvt. Ltd., Bhubaneswar, Odisha, India
                            </address>
                        </section>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default TermsPage