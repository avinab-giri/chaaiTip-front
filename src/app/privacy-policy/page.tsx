import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const PrivacyPolicyPage = () => {
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
                <h4>Privacy Policy</h4>
                <p>ChaaiTip is a platform for creators to accept support (tips) from their audience in a quick, secure, and fun way. At ChaaiTip, your privacy is important to us, and we want you to feel confident that your personal information is safe when using our platform.</p>

                <p>The services are provided by Retrod Technologies Pvt. Ltd. (parent company, hereinafter referred to as “ChaaiTip”), registered in India. It is ChaaiTip’s policy to respect your privacy regarding any information we may collect while operating our website and services.</p>

                <hr />
                <h4>Website Visitors</h4>
                <p>Like most website operators, ChaaiTip collects non-personally-identifying information that web browsers and servers typically provide — such as the browser type, language preference, referring site, and the date and time of each visitor request. This helps us better understand how visitors use our website.</p>

                <p>From time to time, ChaaiTip may release non-personally-identifying information in the aggregate, e.g., publishing a report on usage trends.</p>
                <p>ChaaiTip also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged-in users. This information is used only as described in this policy and is never sold.</p>
                <hr />

                <h4>Payments</h4>
                <p>When a supporter sends a tip to a creator via ChaaiTip, payment is made directly to the creator’s UPI ID. ChaaiTip does not store full payment details such as bank account numbers, card details, or UPI PIN.</p>
                <p>For processing and displaying the tip on the creator’s page, ChaaiTip collects:</p>
                <ul>
                    <li>The supporter’s name</li>
                    <li>The supporter’s message/feedback</li>
                    <li>The amount tipped</li>
                </ul>
                <p>We do not have access to the supporter’s UPI PIN or sensitive bank details.</p>
                <hr />

                <h4>Gathering of Personally-Identifying Information</h4>
                <p>Certain visitors to ChaaiTip choose to interact with the platform in ways that require us to collect personally-identifying information. For example, creators who sign up are required to provide:</p>
                <ul>
                    <li>Name</li>
                </ul>
                <p>Supporters can optionally provide their name and message when tipping a creator.</p>
                <p>We collect only the information necessary to provide our services. Visitors may choose not to provide personal information, but it may limit access to certain features.</p>
                <hr />
                <h4>Aggregated Statistics</h4>
                <p>ChaaiTip may collect statistics about the behavior of visitors to the platform — such as the number of tips received by creators or total payment volume. This information may be shared publicly in an aggregated, non-identifiable form.</p>
                <hr />
                <h4>Protection of Personally-Identifying Information</h4>
                <p>ChaaiTip discloses potentially personally-identifying and personally-identifying information only to those employees, contractors, and affiliated organizations who:</p>
                <ul>
                    <li>Need to know that information to process it on ChaaiTip’s behalf or provide services, and</li>
                    <li>Have agreed not to disclose it to others.</li>
                </ul>
                <p>We do not rent or sell personal information to anyone. Information is disclosed only if required by law, court order, or in good faith to protect the property or rights of ChaaiTip, third parties, or the public.</p>
                <hr />

                <h4>Account Deletion</h4>
                <p>Creators may delete their ChaaiTip account at any time from their account settings. Once deleted, all associated data will be removed from our systems, except for payment-related records required by Indian law.</p>
                <p>Supporters who wish to have their tipping record removed can contact support@chaaitip.com (with proof of payment) and we will anonymize the record.</p>
                <hr />

                <h4>Cookies</h4>
                <p>ChaaiTip uses cookies to improve your browsing experience, maintain sessions, and analyze site usage.</p>
                <ul>
                    <li>Essential cookies – Required for site functionality (cannot be disabled)</li>
                    <li>Analytics cookies – Help us understand how users use our site (Google Analytics)</li>
                </ul>
                <p>You can disable cookies in your browser, but some features of the platform may not work correctly.</p>
                <hr />

                <h4>Business Transfers</h4>
                <p>If ChaaiTip or substantially all of its assets are acquired, user information may be transferred to the new owner under the same privacy terms.</p>
                <hr />

                <h4>Prohibited Content & Usage</h4>
                <p>ChaaiTip is meant for positive, safe, and respectful interactions. We do not allow:</p>
                <ul>
                    <li>Harassment, threats, or hate speech</li>
                    <li>Sharing of private/confidential information without consent</li>
                    <li>Impersonation of individuals or organizations</li>
                    <li>Misinformation intended to harm</li>
                    <li>Sexually explicit content or pornography</li>
                    <li>Promotion of illegal, dangerous, or violent activities</li>
                    <li>Content involving minors in any sexual context</li>
                    <li>Terrorist-related content or promotion of terrorism</li>
                </ul>
                <p>Violation of these rules may result in account suspension or permanent ban.</p>
                <hr />

                <h4>International Users</h4>
                <p>ChaaiTip is operated in India. If you access our services from outside India, your information will be transferred and processed in India under Indian privacy laws.</p>
                <hr />

                <h4>Privacy Policy Changes</h4>
                <p>ChaaiTip may update this Privacy Policy from time to time. We encourage visitors to review this page regularly. Continued use of the platform after any changes indicates acceptance of the updated policy.</p>
                <hr />

                <h4>Contact Us</h4>
                <p>If you have any questions about this Privacy Policy or how we handle your data, you can contact us at:</p>
                <ul>
                    <li>Email: support@chaaitip.com</li>
                </ul>
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}

export default PrivacyPolicyPage