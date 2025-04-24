import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="py-4 mt-auto">
      <Container className="text-center">
        <div className="mb-3 social-icons">
          <a
            href="https://github.com/ISHA0i?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3 fs-4"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/isha-chovatiya-4a6194289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-4"
          >
            <FontAwesomeIcon icon={faLinkedin} />
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
