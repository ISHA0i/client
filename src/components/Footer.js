import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="py-4 mt-auto">
      <Container className="text-center">
        <div className="mb-4 social-icons d-flex justify-content-center align-items-center gap-4">
          <a
            href="https://github.com/ISHA0i"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/isha-chovatiya-4a6194289"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:ishachovatiya9192@gmail.com"
            className="social-link"
            title="Email Me"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <p className="mb-0 text-secondary">
          © {new Date().getFullYear()} ISHA CHOVATIYA. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
