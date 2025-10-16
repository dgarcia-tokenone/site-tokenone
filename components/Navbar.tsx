import Link from "next/link";
import Image from "next/image";

const APP_URL = "https://app.tokenone.com.br/authentication?organizationId=5rSaRhby9TbL7nmJa6rp";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-secondary sticky-top navbar-tokenone" aria-label="Menu principal">
      <div className="container">
        <div className="row w-100 align-items-center g-0">
          {/* Coluna 1: Logo */}
          <div className="col-auto">
            <Link className="navbar-brand d-flex align-items-center" href="/" aria-label="Página inicial">
              <Image
                src="/logos/LogoWhiteTransparent.webp"
                alt="TokenOne"
                width={233}
                height={70}
                className="navbar-logo"
              />
            </Link>
          </div>

          {/* Coluna 2: Menu de navegação (futuramente) */}
          <div className="col">
            {/* Espaço reservado para menus de navegação */}
          </div>

          {/* Coluna 3: Botões de ação */}
          <div className="col-auto">
            <div className="d-flex gap-2">
              <a className="btn btn-outline-dark" href={APP_URL}>
                Entrar
              </a>
              <a className="btn btn-dark" href={APP_URL}>
                Cadastre-se
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

