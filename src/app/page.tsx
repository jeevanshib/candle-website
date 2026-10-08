import Image from "next/image";
import logoImage from "./511594151_17846860284509874_5756122508131916742_n.jpg";

export default function Home() {
  return (
    <>
      <div className="announcement">A little warmth, poured by hand <span>✳</span> Made in India</div>
      <header className="site-header wrap" id="top">
        <a className="wordmark" href="#top" aria-label="Aavé Candlès home"><Image src={logoImage} alt="Aavé Candlès" priority /></a>
        <nav aria-label="Main navigation">
          <a href="#range">The collection</a>
          <a href="#gifting">Gifting</a>
          <a href="#custom">Custom</a>
        </nav>
        <a className="header-order" href="#order">Let’s talk <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> SMALL-BATCH, BIG-HEARTED</p>
            <h1>Small candles.<br /><em>Big moods.</em></h1>
            <p className="hero-intro">A little glow goes a long way. Hand-poured candles made to make the everyday feel like something.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#range">Find your glow <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#custom">Made just for you <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-note"><span className="note-sparkle">✳</span><span>POURED SLOWLY<br /><b>LOVED A LONG TIME</b></span></div>
          </div>
          <div className="hero-art" role="img" aria-label="Sculptural handmade candles in warm afternoon light">
            <div className="hero-photo" />
            <div className="hero-stamp"><span>MADE BY</span><b>hand</b><span>IN SMALL BATCHES</span></div>
            <div className="image-caption"><span>01 / 04</span><span>THE LITTLE THINGS COLLECTION</span></div>
          </div>
          <a className="scroll-cue" href="#range" aria-label="Scroll to the candle collection">↓</a>
        </section>

        <section className="collection section-pad" id="range">
          <div className="wrap">
            <div className="section-heading">
              <div><p className="eyebrow">THE AAVÉ EDIT</p><h2>Made to <em>make a moment.</em></h2></div>
              <p>Every piece is poured and finished by hand. Keep one for your shelf, or pass the feeling on.</p>
            </div>
            <div className="product-grid">
              <article className="product product-one">
                <div className="product-image image-petals" role="img" aria-label="Tiered candle with dried petals" />
                <div className="product-meta"><span>01 / THE CENTREPIECE</span><span>↗</span></div>
                <h3>Petal by petal</h3><p>Tiered petal candles</p>
              </article>
              <article className="product product-two">
                <div className="product-image image-diya" role="img" aria-label="Festive diya candles on brass-toned stands" />
                <div className="product-meta"><span>02 / THE FESTIVE ONE</span><span>↗</span></div>
                <h3>A little light</h3><p>Festive diya sets</p>
              </article>
              <article className="product product-three">
                <div className="product-image image-rose" role="img" aria-label="Blush sculpted rose candle" />
                <div className="product-meta"><span>03 / THE KEEPSAKE</span><span>↗</span></div>
                <h3>Forever in bloom</h3><p>Sculpted rose candles</p>
              </article>
              <article className="product product-four">
                <div className="product-image image-jar" role="img" aria-label="Scented candle in a handcrafted jar" />
                <div className="product-meta"><span>04 / THE EVERYDAY</span><span>↗</span></div>
                <h3>Stay a little</h3><p>Scented jar candles</p>
              </article>
            </div>
          </div>
        </section>

        <section className="gift-band" id="gifting">
          <div className="gift-image" role="img" aria-label="Thoughtfully wrapped candle gift" />
          <div className="gift-copy">
            <p className="eyebrow">FOR YOUR FAVOURITE PEOPLE</p>
            <h2>Good things<br />come <em>wrapped.</em></h2>
            <p>Birthdays, new keys, big days, just-because days. We’ll make it lovely, wrap it up, and add a little note from you.</p>
            <div className="gift-links"><a href="#order">Curated gift sets <span>↗</span></a><a href="#order">Return gifts & little gatherings <span>↗</span></a></div>
          </div>
        </section>

        <section className="custom section-pad wrap" id="custom">
          <div className="custom-title"><p className="eyebrow">DREAM IT, WE’LL POUR IT</p><h2>A candle that’s<br /><em>only yours.</em></h2></div>
          <div className="custom-details"><p className="custom-intro">A colour you love. A scent that takes you somewhere. A little something for the day you’ll always remember. Tell us what you’re imagining.</p>
            <ol className="steps">
              <li><span>01</span><div><b>Tell us the story</b><p>Share the occasion, quantity and when you need it.</p></div></li>
              <li><span>02</span><div><b>Make it yours</b><p>Choose your colours, scent and finishing touches together.</p></div></li>
              <li><span>03</span><div><b>We make the magic</b><p>We pour, pack and get your candles on their way.</p></div></li>
            </ol>
            <a className="button button-outline" href="https://ig.me/m/aave_candles" target="_blank" rel="noreferrer">Start a custom order <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="order" id="order">
          <div className="order-inner wrap">
            <p className="eyebrow">YOUR NEXT FAVOURITE GLOW IS A DM AWAY</p>
            <h2>Ready to light <em>one?</em></h2>
            <p>Ask us about scents, make a custom piece, or just say hello. We’d love to hear what you have in mind.</p>
            <a className="button button-light" href="https://ig.me/m/aave_candles" target="_blank" rel="noreferrer">Message @aave_candles <span aria-hidden="true">↗</span></a>
            <span className="order-doodle" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer wrap">
        <a className="wordmark" href="#top" aria-label="Aavé Candlès home"><Image src={logoImage} alt="Aavé Candlès" /></a>
        <span>Made with love in India <b>✳</b> © Aavé Candlès</span>
        <a href="https://www.instagram.com/aave_candles/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </footer>
    </>
  );
}
