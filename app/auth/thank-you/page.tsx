'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Page(){

    const searchParams = useSearchParams();
    const name  = searchParams.get('name') ?? "Ana";
    return (

    <>
      {/* thanks */}
      <section className="thanks">
        <div className="container">
           <h1>¡Hola <span className="blue-highlight">{name}</span>!</h1>
            <label>
 Estás a un paso de comenzar a construir tu árbol 
genealógico y conectar con tu historia familiar. 
<br />
Nos alegra que formes parte de esta comunidad dedicada a entender 
nuestras raíces y fortalecer la presencia de la comunidad croata en 
México.
<br />
 En Moja Obitelj la información que adjuntes a tu árbol es privada y 
solo será compartida con quien tu elijas hacerlo. Por ello, la 
información que ingreses sobre parientes vivos requerirá introducir 
un correo electrónico de la persona agregada. El o ella recibirá un 
correo automático solicitando su autorización para compartir sus 
datos y una invitación para participar en el sitio.
<br />
 Si ya es un miembro de Moja Obitelj recibirá un mensaje en su 
sección de mensajes invitándole a unirse a tu árbol. ¡Así de sencillo!
<br />
 Si tienes alguna duda, visita la sección ¿Cómo usar Moja Obitelj? 
Dónde encontrarás respuestas a las dudas más comunes.
 ¡Gracias por ser parte de este proyecto tan especial
            </label>
        </div>
      </section>
      {/* thanks */}
      <section className="continuar">
        <div className="thanks-box">
          <p>
           <span className="blue-highlight">Para iniciar, alimenta tu perfil con más información, esta servirá como 
    punto de partida de tu árbol. A partir de ahí, tu árbol familiar se abrirá, 
    todas las funciones de este sitio se activarán y podrás agregar más 
    familiares.</span>
    </p>
      <p>
        Verás un árbol con espacios punteados donde podrás agregar directamente a tus 
parientes desde el espacio que les corresponda, en el caso de tus ancestros, solo tienes que 
hacer click en el signo + que corresponda a su posición en el árbol, esto desplegará un 
formato que te ayudará a introducir su información. Para agregar descendientes, deberás 
hacer click en el signo + abajo de tu perfil, empezando por los hijos, hijos, para 
posteriormente poder agregar nietos. 
Al momento de agregar un nuevo familiar, la imagen del árbol se centrará en la persona 
seleccionada, volviéndolo el centro del árbol. Esta es la forma de poder navegar en él. Para 
regresar a ti, solo debes hacer click en tu posición
      </p>
          <h3>¿Todavía no estás registrado?</h3>
          <Link href="/auth/profile" className="btn-continue">Continúa a editar tu perfil</Link>
        </div>
      </section>
    </>
  );
}