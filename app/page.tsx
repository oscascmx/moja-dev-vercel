'use client'
import Image from 'next/image';
import Form from 'next/form';
import Link from 'next/link';

import YoungCroata from '@/public/f_young_croatian2.png'
import Chome from '@/public/c_home.png'
import Home1 from '@/public/f_home1.png'
import Home2 from '@/public/f_home2.png'
import Home3 from '@/public/f_home3.png'
import MojaObiteljLogo from '@/public/L_moja_obitelj.svg'

export default function Home() {
  return (
    <>

      {/* Cenefa Principal */}
      <section className="hero">
        <Image src={Chome}
          alt="Cenefa principal"
          className="hero-image" />
      </section>

      {/*BLOQUE DE ENTRADA Y LOGIN*/}
      <main className="main-content container">
        <div className="intro-column">
          <Image src={MojaObiteljLogo}
            alt="Moja Obitelj"
            className="intro-logo" />

          <h1>¡Conecta con tu familia!</h1>
          <p className="subheading">Construye tu árbol genealógico y descubre los<br /> momentos más importantes de tu historia.</p>
          <p><span className="blue-highlight">Moja Obitelj</span> <em>(Moya Obiteli: Nuestra Familia, en lengua croata)</em> es un espacio creado para reunir a las familias de origen croata y sus descendientes en México. Nuestra intención es preservar la memoria de nuestras familias y fortalecer sus lazos con nuestra comunidad y nuestros parientes en todas partes del mundo.</p>
          <p>En este sitio podrás registrar tu historia, invitar a tus familiares, encontrar parientes y descubrir relaciones que no conocías y así formar parte de un legado vivo que une pasado, presente y futuro.</p>
        </div>

        <div className="login-column" />
        <div className="login-box">
          <h3>¡Hola! Inicia tu sesión</h3>
          <Form action="/auth/signin">
            <input type="text" id="usuario" name="usuario" placeholder="Usuario:" />
            <input type="password" id="password" name="password" placeholder="Contraseña:" />
            <p className="forgot-pwd"><Link href="/auth/resetpass">¿Olvidaste tu usuario o contraseña?</Link></p>
            <div className="re-captcha">
            </div>
            <button type="submit">Ingresar</button>
          </Form>
        </div>
        <div className="not-registered-block">
          <p className="not-registered">¿Todavía no estás registrado?</p>
          <Link href="/auth/register" className="btn-join">¡ Da click aquí y únete!</Link>
          <p className="share-prompt">
            Disfruta tu origen y vive la historia. <br />
            Compártelo con los miembros de tu familia.
          </p>
        </div>
      </main>


      {/* BLOQUE DE TRES COLUMNAS CON IMÁGENES*/}
      <section className="profile">
        <div className="container info-grid grid">
          <div className="info-item">
            <Image src={Home1}
              alt="home photo"
              width={203}
              height={203}
            />
            <h2>¡Solo necesitas empezar!</h2>
            <p className="m-0">Es muy sencillo, ingresa primero tus datos y después podrás añadir a tus padres, abuelos,
              hermanos, hijos y demás familiares. Una vez agregados podrás invitarlos a participar en tu árbol y
              compartir información, imágenes y documentos de su historia.</p>
          </div>
          <div className="info-item">
            <Image src={Home2}
              alt=""
              width={206}
              height={206}
            />
            <h2>¿Tienes un árbol en otro sitio?</h2>
            <p className="m-0">¡Tráelo para acá! Esta plataforma trabaja con datos de clasificación Gedcom, el estándar
              compartido de las principales bases de datos genealógicas, así que si tienes registros en otras
              plataformas, puedes importar su información facilmente a <span
                className="blue-highlight">Moja Obitelj</span>.</p>
          </div>
          <div className="info-item">
            <Image src={Home3}
              alt=""
              width={203}
              height={203} />
            <h2>Tú eliges con quien compartir.</h2>
            <p className="m-0">Tu información es tuya y no saldrá de este sitio. Podrás elegir compartirlo con tu familia y
              la comunidad croata mexicana. Solo podrán consultarla quienes tu autorices. </p>
          </div>
        </div>
      </section>

      {/*BLOQUE CON FOTO E INFORMACIÓN*/}
      <section className="cta-section">
        <div className="container cta-grid grid">
          <div className="cta-text">
            <h2>Moja Obitelj es de uso libre.</h2>
            <p>
              El ingreso y uso de <span className="blue-highlight">Moja Obitelj</span> es gratuito para todos los miembros de la diáspora croata y sus familiares, impulsado por la <span className="blue-highlight">Asociación Croata Mexicana</span>. ¿Aún no estás afliado?
            </p>
            <p>
              ¡Únete! Si todavía no eres miembro, y eres croata o descendiente croata ingresa a <a href="www.asociacion-croata-mexicana.org/miembros" target="_blank">www.asociacion-croata-mexicana.org/miembros</a> y afiliate, la membresía básica incluye a tu familia inmediata (padre, madre y hasta dos hijos menores de 21 años). Aprovecha todas las oportunidades que te brinda pertenecer, apoya tu comunidad y participa con nosotros en sus eventos y proyectos ¡te esperamos!
            </p>
          </div>
          <div className="cta-image">
            <Image src={YoungCroata}
              alt="Joven croata"
              width={575}
              height={335} />
          </div>
        </div>
      </section>

    </>
  );
}
