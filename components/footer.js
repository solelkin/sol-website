export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer__content">
          <div className="footer__left">
            <a aria-label="Credits" href="https://twitter.com/pmndrs" target="_blank" rel="noopener">
              <div>
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#fff" d="M0 0h15v15H0z" />
                </svg>
              </div>
            </a>
          </div>
          <div className="footer__center">
            <a className="link" href="https://www.linkedin.com/in/sol-%E2%98%BC-elkin-782051181/" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a className="link" href="https://twitter.com/solelkin_" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a className="link" href="https://github.com/solelkin" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="link" href="https://www.instagram.com/sol.elkin/?next=%2F" target="_blank" rel="noopener noreferrer">
              instagram
            </a>
          </div>
          <div className="footer__right">
            <a href="https://vercel.com?utm_source=pmndrs&utm_campaign=oss" target="_blank" rel="noopener">
              <div className="vercel">
                <svg width="18" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.78 0l8.779 15H0L8.78 0z" fill="#fff" />
                </svg>
                <span className="vercel__title">Powered by Vercel</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
