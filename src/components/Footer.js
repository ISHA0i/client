import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="py-4 mt-auto">
      <Container className="text-center">
        <div className="mb-3 social-icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3 fs-4"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-4"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p className="mb-0 text-secondary">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;