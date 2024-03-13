import Link from "next/link";

import ImageSlideshow from "@/components/images/image-slideshow";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>FishTrackr</h1>
            <p>Add your personal catch </p>
          </div>
          <div className={classes.cta}>
            <Link href="/catches/share">Add new catch</Link>
            <Link href="/catches">Check your catches</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Hello Anglers! </h2>
          <p>
            Embark on a seamless fishing adventure with our revolutionary app –
            FishTrackr! Say goodbye to the hassle of manually recording your
            catches and dive into a new era of angling excitement.
          </p>
        </section>
        <div className={classes.grid}>
          <section className={classes.section}>
            <h2>🌊 Explore Effortlessly</h2>
            <p>
              Whether you&apos;re a seasoned pro or a weekend warrior,
              FishTrackr makes tracking your fishing escapades a breeze. Log
              each exhilarating catch with just a few taps.
            </p>
          </section>

          <section className={classes.section}>
            <h2>📸 Capture the Moment</h2>
            <p>
              Snap photos of your prized catches and document the details right
              on the spot. Our app preserves the memories of your biggest
              triumphs, ensuring that each fish tale is told accurately.
            </p>
          </section>

          <section className={classes.section}>
            <h2>📍 Location Intelligence</h2>
            <p>
              Pinpoint the exact locations of your catches with our advanced GPS
              tracking. Keep a personal fishing journal, and discover the
              hottest spots where the big ones bite.
            </p>
          </section>

          <section className={classes.section}>
            <h2>📊 Statistical Insights</h2>
            <p>
              Gain valuable insights into your angling prowess with our
              comprehensive statistics. Track your success rates, favorite
              fishing spots, and preferred bait choices to enhance your future
              fishing strategies.
            </p>
          </section>

          <section className={classes.section}>
            <h2>📱 User-Friendly Interface</h2>
            <p>
              No need for a degree in technology! FishTrackr boasts a
              user-friendly interface designed with anglers in mind. It&apos;s
              as easy as casting a line – just open the app and start reeling in
              your data.
            </p>
          </section>

          <section className={classes.section}>
            <h2>🔒 Privacy and Security</h2>
            <p>
              Rest easy knowing that your fishing secrets are safe with us.
              FishTrackr prioritizes your privacy and ensures that your fishing
              data is accessible only to you.
            </p>
          </section>
        </div>

        <section className={classes.section}>
          <h2>🌟 Join the Fishing Revolution</h2>
          <p>
            Become part of a vibrant community of anglers sharing their passion
            on FishTrackr. Connect with fellow fishing enthusiasts, exchange
            tips, and celebrate each other&apos;s fishing triumphs.
          </p>
        </section>
        <section className={classes.section}>
          <p>
            Ready to elevate your fishing experience? Download FishTrackr now
            and turn every fishing trip into an unforgettable story. Your
            catches, your adventure, and your legacy – all in the palm of your
            hand!
          </p>
          <br></br>
          <p>Happy fishing! 🎣📱 #FishTrackr #ReelInSuccess</p>
        </section>
      </main>
    </>
  );
}
