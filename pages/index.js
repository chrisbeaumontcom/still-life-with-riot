import Head from 'next/head';

//&rarr;
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Still Life with Riot, 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <img
            className="resp"
            src="https://res.cloudinary.com/web-school/image/upload/w_800,q_auto:best/still-life-with-riot/still-life-with-riot-ed_amku5w.jpg"
            alt="Still Life with Riot"
          />
          <br />
          <em>Still Life with Riot</em>
        </h1>

        <p className="description">Oil on linen, 61 x 76cm, 2021</p>
        <div className="blurb">
          <p>2021 is off and racing... and started with a riot!</p>

          <p>
            This painting is an effort at History painting - even if it is a
            still life.{' '}
          </p>

          <p>
            When I was setting prices with the gallery for a recent exhibition,
            the gallery told me we could only ask so much for still life
            paintings because that's what the market will bear. So I'm getting
            all genre-d up here and going for some HISTORY genre stuff. (FYI:
            Paintings are also priced by square centimeter like wall-paper or
            pizza.)
          </p>

          <p>
            This work is about time. Paintings are painted over time unlike
            photographs which are records of an instant. Both are images but
            paintings really are things, and the recording they really make is
            of their own execution.
          </p>

          <p>
            I wanted to play with the performance of an oil painting like a
            composer creating variations on a theme and a musician performing
            the same piece multiple times. I set out to take a previous
            composition and execute/perform it in three variations: the same
            still life subject arrangement with three completely different
            visual contexts.
          </p>

          <p>
            This one is the third in a series of three identical still life
            arrangements of lemons on a marble ledge. The first has an entirely
            black background with hints of geometry. The second has a colourful
            geometric field as a background. This third one jumps the shark
            (relatively) into history and was originally painted as a grisaille
            with no reference to riots. That version is now history because I
            have completely over-painted it in glorious technicolor including a
            social media driven riot that will certainly go down in US and world
            history.
          </p>

          <p>
            History is a race to what happened next. The horse and jockey is
            borrowed from a past commission and surrealistically challenges the
            stasis of the still life of lemons.
          </p>

          <p>
            This picture uses the (very melbourne) neo-classical architecture in
            the upper left of Tiepolo's The Banquet of Cleopatra, a painting
            about an historical moment. When I saw the images on social media of
            the US Capitol riots of 6 January I knew I had to re-paint Tieplo's
            balconies. They had changed role from passive witness to active
            insurrection.
          </p>
        </div>

        <div className="grid">
          <a
            href="https://www.chrisbeaumont.com/detail/still-life-with-lemons-i"
            className="card"
          >
            <h3>Still Life with Lemons I</h3>
            <p>Oil on Linen 61 x 76cm 2017</p>
          </a>
          <a
            href="https://www.ngv.vic.gov.au/explore/collection/work/4409/"
            className="card"
          >
            <h3>The Banquet of Cleopatra</h3>
            <p>National Gallery of Victoria</p>
          </a>

          <a
            href="https://www.buzzfeednews.com/article/elaminabdelmahmoud/trump-mob-social-media-insurrection"
            className="card"
          >
            <h3>The Pro-Trump Mob Was Doing It For The ’Gram</h3>
            <p>
              Elamin Abdelmahmoud
              <br />
              Buzzfeed
            </p>
          </a>

          <a
            href="https://www.theatlantic.com/magazine/archive/2021/04/the-internet-doesnt-have-to-be-awful/618079/"
            className="card"
          >
            <h3>How to Put Out Democracy's Dumpster Fire</h3>
            <p>Anne Applebaum and Peter Pomerantsev - The Atlantic</p>
          </a>

          <a
            href="https://onezero.medium.com/how-to-destroy-surveillance-capitalism-8135e6744d59"
            className="card"
          >
            <h3>How to Destroy 'Surveillance Capitalism'</h3>
            <p>
              Cory Doctorow
              <br /> Medium
            </p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=-6rWqJhDv7M"
            className="card"
          >
            <h3>The Physics and Philosophy of Time</h3>
            <p>
              Carlo Rovelli
              <br /> YouTube
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://www.chrisbeaumont.com?utm_source=still-life-with-riot&utm_medium=default-site&utm_campaign=still-life-with-riot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Published by
          <img src="/cb-site.png" alt="Site Logo" title="Chris Beaumont" />
          chrisbeaumont.com
        </a>
      </footer>

      <style jsx>{`
        img.resp {
          width: 100%;
          height: auto;
          border: 10px solid #5a989e;
          outline: 1px solid #eeeeee;
        }
        .container {
          background-color: #9dc6c2;
          color: #ffffff;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .blurb {
          display: flex;
          align-items: left;
          justify-content: left;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          box-shadow: 3px 3px 3px 3px #83aea3;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .title {
            font-size: 2rem;
          }
          .description {
            line-height: 1;
            font-size: 1.1rem;
          }
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
