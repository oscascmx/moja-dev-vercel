import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/styles.css";
import "@/app/common.css";
import Image from 'next/image';
import Link from "next/link";
import Konsulat from '@/public/l_konsulat.svg'
import Facebook from '@/public/fb.svg'
import Instagram from '@/public/ig.svg'
import KorovaGray from '@/public/l_korova_gray.svg'
import LmoImg from '@/public/L_m_o.svg'
import AsoCroMx from '@/public/l_aso_cro_mx.svg'
import LmojaObitelj from '@/public/L_moja_obitelj.svg'
import Home from '@/public/home.svg'

const monserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moja Obitelj",
  description: "Moja Obitelj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Moja Obitelj!</title>
      </head>
      <body className={`${monserrat.variable} antialiased`}>
        <article>
        <header className="top-header">
          <div className="container header-container">
            <nav>
              <Link href="#"><Image src={LmojaObitelj} className="moja-logo" alt="" /></Link>
              <div className="nav-right">
                <div className="nav-right-top">
                  <div className="language-menu">
                    <Link href="#" className="selected">ESP</Link>
                    <Link href="#">HRV</Link>
                    <Link href="#">ENG</Link>
                  </div>
                  <Link href="#"><Image src={Home} alt="Home" /></Link>
                  <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </div>
                </div>
                <div className="nav-right-bottom">
                  <Link href="#">ARBOL</Link>
                  <Link href="#">MENSAJES</Link>
                  <Link href="#">PERFIL</Link>
                  <Link href="#">BUSQUEDA</Link>
                  <Link href="#">DIASPORA</Link>
                  <Link href="#">INVESTIGACION</Link>
                  <Link href="#">¿COMO USAR MOJA OBITELJ?</Link>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {children}

        {/*FOOTER*/}
        <footer className="site-footer">
          <div className="footer">
            <div className="container footer-grid grid">
              <div className="page-link grid">
                <Link href="#">
                  <Image src={AsoCroMx}
                    alt="Asociación Croata Mexicana" /></Link>
                <ul>
                  <li><Link href="#">¿Cómo funciona Moja Obitelj?</Link></li>
                  <li><Link href="#">Donde encontrar más información <br />de mis antepasados</Link></li>
                  <li><Link href="#">Asociación Croata Mexicana</Link></li>
                  <li><Link href="#">Privacidad</Link></li>
                  <li><Link href="#">Términos y condiciones</Link></li>
                </ul>
              </div>
              <div className="footer-logo-block">
                <div className="social-logos">
                  <p>¡Síguenos!</p>
                  <Link href="#"><Image src={Facebook} alt="Facebook" /></Link>
                  <Link href="#"><Image src={Instagram} alt="Instagram" /></Link>
                </div>
                <div className="footer-logo">
                  <p>Este proyecto ha sido realizado <br />gracias al apoyo de:</p>
                  <Link href="#"><Image src={Konsulat} alt="Konsulat" className="img-konsulat" /></Link>
                  <Link href="#"><Image src={KorovaGray} alt="Korova" className="img-korova" /></Link>
                  <Link href="#"><Image src={LmoImg} alt="Moja Obitelj" className="img-moja-obi" /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">© 2025 Asociación Croata Mexicana, A.C. Todos los derechos reservados. </div>
          </div>
        </footer>
        </article>
      </body>
    </html>
  );
}
