export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__name">Tariq Horan.</p>
        </div>

        <nav className="site-footer__links" aria-label="Social links">
          <a href="https://github.com/TariqH19" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tariq-horan/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:tariqhoran88@gmail.com">Email</a>
          <a href="#top">Back to top</a>
        </nav>
      </div>
    </footer>
  )
}
