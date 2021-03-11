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
            src="https://res.cloudinary.com/web-school/image/upload/w_600,q_auto:best/still-life-with-riot/still-life-with-riot-ed_zyejwy.jpg"
            alt="Still Life with Riot"
          />
          <br />
          <em>Still Life with Riot</em>
        </h1>

        <p className="description">Oil on linen, 61 x 76cm, 2021</p>

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
            href="https://www.theatlantic.com/magazine/archive/2021/04/the-internet-doesnt-have-to-be-awful/618079/"
            className="card"
          >
            <h3>How to Put Out Democracy’s Dumpster Fire</h3>
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
        </div>
      </main>

      <footer>
        <a
          href="https://www.chrisbeaumont.com?utm_source=still-life-with-riot&utm_medium=default-site&utm_campaign=still-life-with-riot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Published by{' '}
          <img src="/cb-site.png" alt="Site Logo" title="Chris Beaumont" />
        </a>
      </footer>

      <style jsx>{`
        img.resp {
          width: 100%;
          height: auto;
        }
        .container {
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
          font-size: 4rem;
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
