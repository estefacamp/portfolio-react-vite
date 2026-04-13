function Footer({ profile }) {
    return (
      <footer className="footer">
        <div className="container-custom footer-inner">
          <p>© 2026 {profile.name} • Portfolio React</p>
  
          <div className="footer-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="#inicio">
              <i className="bi bi-arrow-up-circle"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;