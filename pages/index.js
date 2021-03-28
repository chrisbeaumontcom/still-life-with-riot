import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Still Life with Riot, 2021</title>
      </Head>

      <main>
        <div className="img-frame">
          <Image
            src="/images/beaumont_christopher_still-life-with-riot-800pxw.jpg"
            alt="Image of Still Life with Riot"
            width={800}
            height={641}
          />
        </div>
        <h1 className="title">
          <em>Still Life with Riot</em>
        </h1>
        <p className="description">
          Oil on linen, 61 x 76cm
          <br />
          Beaumont, Christopher, 2021
        </p>

        <div className="blurb">
          <p>2021 is off and racing... and started with a riot!</p>

          <p>
            Would there have been a riot at the US Capitol on the 6th January
            2021 without social media?
          </p>

          <p>
            This work is about time. Present time, historical time and the way
            time just seems to race at us. Unlike photographs which are records
            of an instant, paintings are painted over time. Both are images but
            paintings really are things, and the recording they make is of their
            own execution. This painting is an effort at History painting - even
            if it is a still life.
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
          <p>The original series:</p>
          <div className="img-frame">
            <Image
              src="/images/lemons-x3-2017.jpg"
              alt="3 paintings of lemons"
              width={800}
              height={210}
            />
          </div>
          <p>
            I wanted to play with the performance of an oil painting like a
            composer creating variations on a theme or a musician performing the
            same piece multiple times. I set out to take a previous composition
            and execute/perform it in three variations: the same still life
            subject arrangement with three completely different visual contexts.
          </p>

          <p>
            This picture uses the (very melbourne) neo-classical architecture in
            the upper left of Tiepolo's <em>The Banquet of Cleopatra</em>, a
            painting about an historical moment. When I saw the images on social
            media of the US Capitol riots of 6 January I knew I had to re-paint
            Tieplo's balconies. They had changed role from passive witness to
            active insurrection.
          </p>

          <p>
            History is a race to what happened next. The horse and jockey is
            borrowed from a past commission and surrealistically challenges the
            stasis of the still life of lemons. It is racing across the the
            canvas yet frozen in a photographic moment of history.
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
            href="https://en.wikipedia.org/wiki/The_Banquet_of_Cleopatra_(Tiepolo)"
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

      <style jsx>{`
        div.img-frame {
          border: 10px solid #5a989e;
          outline: 1px solid #eeeeee;
          padding: 0;
          font-size: 0px;
        }

        main {
          padding: 2rem 0;
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
        .blurb p {
          font-size: 1em;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2.5rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1em;
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
          align-items: stretch;
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
          box-shadow: 2px 2px 2px 2px #83aea3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.2rem;
        }

        .card p {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.2;
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
          .card h3 {
            font-size: 1rem;
          }
          .card p {
            margin: 0;
            font-size: 0.8rem;
            line-height: 1;
          }
          .blurb {
            font-size: 0.9em;
          }
        }
      `}</style>
    </Layout>
  );
}
