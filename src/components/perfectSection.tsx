import { CiYoutube } from "react-icons/ci";
import { MdOutlineDraw } from "react-icons/md";
import { BsPaintBucket } from "react-icons/bs";
import { PiApplePodcastsLogoFill } from "react-icons/pi";
import { LuGamepad2 } from "react-icons/lu";
import { PiChalkboardTeacher } from "react-icons/pi";

const PerfectSection = () => {
    return (
        <section id="perfectSection" className="py-15">
            <div className="container">
                <div className="title">
                    <h2>Perfect for Every Creator</h2>
                    <p>{process.env.NEXT_PUBLIC_BRAND_NAME} works for anyone who creates, teaches, or entertains.</p>
                </div>
                <div className="content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">

                    <div className="item">
                        <CiYoutube />
                        <h4>YouTubers</h4>
                    </div>

                    <div className="item">
                        <BsPaintBucket />
                        <h4>Artists & Designers</h4>
                    </div>

                    <div className="item">
                        <MdOutlineDraw />
                        <h4>Writers & Bloggers</h4>
                    </div>

                    <div className="item">
                        <PiApplePodcastsLogoFill />
                        <h4>Musicians & Podcasters</h4>
                    </div>

                    <div className="item">
                        <LuGamepad2 />
                        <h4>Gamers & Streamers</h4>
                    </div>

                    <div className="item">
                        <PiChalkboardTeacher />
                        <h4>Teachers & Trainers</h4>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default PerfectSection