import { Link } from 'react-router-dom';
import SEO from './SEO';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="Apie Mus - Tavo Skriptas"
        description="Sužinokite apie Tavo Skriptas misiją, vertybes ir kaip padedame verslams dominuoti skaitmeninėje erdvėje."
        keywords="apie mus, Tavo Skriptas, web kūrimo misija, IT sprendimai, verslo skaitmeninimas"
      />
      <main className="about-page">
      <div className="about-card uiverse-card">
        <div className="card__border" aria-hidden="true" />
        <div className="card_title__container">
          <h1 className="card_title">Ką reiškia Tavo Skriptas?</h1>
          <p className="card_paragraph">
            Tavo Skriptas gimė iš idėjos, kad kiekvienas sėkmingas verslas turi savo
            unikalų veikimo scenarijų (logiką, ritmą ir istoriją), o mūsų misija –
            paversti šį scenarijų nepriekaištingai veikiančiu skaitmeniniu organizmu.
          </p>
        </div>
        <hr className="line" />
        <h2 className="about-subtitle">Misija</h2>
        <h3 className="about-heading">
          Padėti verslams dominuoti skaitmeninėje erdvėje
        </h3>
        <p className="about-text">
          Tai daugiau nei kodas: tai užrašyta jūsų verslo sėkmės formulė, kurią mes
          paverčiame galingomis sistemomis.
        </p>
        <ul className="card__list">
          <li className="card__list_item">
            <span className="check" aria-hidden="true">
              <svg viewBox="0 0 16 16" className="check_svg">
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="list_text">Centralizuotos verslo sistemos</span>
          </li>
          <li className="card__list_item">
            <span className="check" aria-hidden="true">
              <svg viewBox="0 0 16 16" className="check_svg">
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="list_text">Patikimas veikimas 24/7</span>
          </li>
          <li className="card__list_item">
            <span className="check" aria-hidden="true">
              <svg viewBox="0 0 16 16" className="check_svg">
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="list_text">Estetiškai išbaigtas UX</span>
          </li>
          <li className="card__list_item">
            <span className="check" aria-hidden="true">
              <svg viewBox="0 0 16 16" className="check_svg">
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="list_text">Skalė augimui ir automatizacijai</span>
          </li>
        </ul>
        <Link to="/booking" className="card-button">
          Susiskambinam
        </Link>
      </div>
    </main>
    </>
  );
}

