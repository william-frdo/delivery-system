import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            <strong>Trabalho de Conclusão de Curso de Desenvolvimento de Sistemas ETEC 2021</strong> < br/>
            Camila S. M. A. Borges, Christiane N. Gozza, Wesley C. Davanzo, William Florido
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCc7rfCbP90qiw3BgT-Iqc7g" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/company/governosp/" target="_new">
                    <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/governosp/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;