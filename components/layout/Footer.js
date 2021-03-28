export default function Footer() {
  const d = new Date();
  return (
    <>
      <footer>
        <a
          href="https://www.chrisbeaumont.com?utm_source=still-life-with-riot&utm_medium=default-site&utm_campaign=still-life-with-riot"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; {d.getFullYear()} Published by
          <img src="/cb-site.png" alt="Site Logo" title="Chris Beaumont" />
          chrisbeaumont.com
        </a>
      </footer>
      <style jsx>{`
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
      `}</style>
    </>
  );
}
