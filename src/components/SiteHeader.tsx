export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="brand" aria-label="Tariq Horan home">
          TARIQ HORAN
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#top">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>

          <a href="/Tariq_Horan_CV.docx" className="site-nav__cv" download>
            Download CV
          </a>

          <div className="site-nav__social" aria-label="Social links">
            <a
              href="https://github.com/TariqH19"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="site-nav__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.56 2.26 3.56 2.26.7 0 1.28-.11 1.72-.3.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.7 10.7 0 0 1 5.57 0c2.12-1.44 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/tariq-horan/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="site-nav__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M5.2 7.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.5 9.3h3.4v11.2H3.5V9.3Zm5.5 0h3.3v1.5h.05c.46-.87 1.59-1.79 3.28-1.79 3.5 0 4.15 2.3 4.15 5.29v6.2h-3.45V15c0-1.3-.02-2.97-1.8-2.97-1.81 0-2.09 1.41-2.09 2.87v5.6H9V9.3Z"
                />
              </svg>
            </a>
            <a
              href="mailto:tariqhoran88@gmail.com"
              aria-label="Email"
              className="site-nav__icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5.5h18v13H3z" />
                <path d="m3.5 6 8.5 7 8.5-7" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
