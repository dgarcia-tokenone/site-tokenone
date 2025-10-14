import Link from "next/link";
import Image from "next/image";

const APP_URL = "https://app.tokenone.com.br/authentication?organizationId=5rSaRhby9TbL7nmJa6rp";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-secondary sticky-top navbar-tokenone" aria-label="Menu principal">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/" aria-label="Página inicial">
          <Image
            src="/logos/LogoWhiteTransparent.png"
            alt="TokenOne"
            width={200}
            height={60}
            priority
            className="navbar-logo"
          />
        </Link>
        <div className="ms-auto d-flex gap-2">
          <a className="btn btn-outline-light" href={APP_URL}>
            Entrar
          </a>
          <a className="btn btn-light" href={APP_URL}>
            Cadastre-se
          </a>
        </div>
      </div>
    </nav>
  );
}

