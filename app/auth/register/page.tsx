import Image from 'next/image';
import Form from 'next/form'
import AsoCroMex from '@/public/aso_cro_mexicana_grayscale.svg';
import { submitSignup } from '@/app/actions/signup';

export default function Page() {
  return (

    <>
      {/* profile */}
      <section className="profile">
        <div className="container">
          <Form action={submitSignup}>
            <h1>¡Bienvenido a Moja Obitelj!</h1>
            <p className="subheading">Por favor ingresa la siguiente <br />información para configurar tu perfil.</p>
            <div className="grid gap-80">
              <div>
                <p>
                  <span className="blue-highlight">Moja Obitelj</span> es un proyecto de la <span className="blue-highlight">Asociación Croata Mexicana</span>, desarrollado con el fin de unir a la comunidad croata en México y ayudarles a explorar el alcance de sus raíces familiares.
                </p>
                <div className="input-field">
                  <label>Nombre:*</label>
                  <input type="text" name="name" />
                </div>
                <div className="input-field">
                  <label>Apellido paterno: *</label>
                  <input type="text" name="paternal"/>
                </div>
                <div className="input-field">
                  <label>Apellido materno:</label>
                  <input type="text" name ="maternal"/>
                </div>
                <div className="input-field">
                  <label>Fecha de nacimiento:*</label>
                  <div className="dob-group">
                    <input type="text" name="day" placeholder="DIA" />
                    <input type="text" name="month" placeholder="MES" />
                    <input type="text" name="year" placeholder="AÑO*" />
                  </div>
                </div>
                <div className="input-field mt-20">
                  <label>Género:*</label>
                  <div className="radio-group">
                    <label><input type="radio" name="gender" value="male" /> Hombre</label>
                    <label><input type="radio" name="gender" value="female" /> Mujer</label>
                  </div>
                </div>
                <hr />
                <div className="grid">
                  <a href="#">
                    <Image src={AsoCroMex}
                      width="180"
                      alt="Asociación Croata Mexicana" />
                  </a>
                  <div>
                    <label>¿Eres miembro de la <br />Asociación Croata Mexicana?: *</label>
                    <div className="radio-group mt-10">
                      <label><input type="radio" name="member" value="true" /> Si</label>
                      <label><input type="radio" name="member" value="false" /> No</label>
                    </div>
                  </div>
                </div>
                <div className="grid mt-25 mb-12">
                  <label>
                    Número de membresía<br />
                    Asociación Croata Mexicana:
                  </label>
                  <input type="text" name="membershipNumber" />
                </div>
                <p className="text-semibold m-0">
                  ¿Formas parte de la ACM y no tienes tu número? Continúa con tu registro y manda un correo a: <br /><a href="mailto:hola@asociacion-croata-mexicana.org" className="maroon-link">hola@asociacion-croata-mexicana.org</a> para solicitarlo.
                </p>
              </div>
              <div>
                <p><span className="blue-highlight">Último pariente directo nacido en Croacia: </span></p>
                <div className="input-field">
                  <label>Nombre:*</label>
                  <input type="text" name="relativeName" />
                </div>
                <div className="input-field">
                  <label>Apellido paterno:*</label>
                  <input type="text" name="relativePaternal" />
                </div>
                <div className="input-field">
                  <label>Apellido materno:</label>
                  <input type="text" name="relativeMaternal" />
                </div>
                <div className="input-field">
                  <label>Fecha de nacimiento:*</label>
                  <div className="dob-group">
                    <input type="text" name="rel_day" placeholder="DIA" />
                    <input type="text" name="rel_month" placeholder="MES" />
                    <input type="text" name="rel_year" placeholder="AÑO*" />
                  </div>
                </div>
                <div className="input-field mt-20">
                  <label>Género:*</label>
                  <div className="radio-group">
                    <label><input type="radio" name="rel_gender" value="male" /> Hombre</label>
                    <label><input type="radio" name="rel_gender" value="female" /> Mujer</label>
                  </div>
                </div>
                <div className="input-field">
                  <label>Grado de parentesco:*</label>
                  <select name="relativeRelationship" >
                    <option value="01">Padre</option>
                    <option value="02">Madre</option>
                    <option value="03">Abuelo paterno</option>
                    <option value="04">Abuela paterna</option>
                    <option value="05">Abuelo materno</option>
                    <option value="06">Abuela materna</option>
                    <option value="07">Bisabuelo PP (padre de abuelo paterno)</option>
                    <option value="08">Bisabuela PM (madre de abuelo paterno)</option>
                    <option value="09">Bisabuelo MP (padre de abuela paterna)</option>
                    <option value="10">Bisabuela MM (madre de abuela paterna)</option>
                    <option value="11">Bisabuelo (padre de abuelo materno)</option>
                    <option value="12">Bisabuela (madre de abuelo materno)</option>
                    <option value="13">Bisabuelo (padre de abuela materna)</option>
                    <option value="14">Bisabuela (madre de abuela materna)</option>
                    <option value="15">Tatarabuelo(a)</option>
                    <option value="16">Trastatarabuelo(a)</option>
                  </select>
                </div>
                <div className="input-field mt-20">
                  <label>¿Vive?:*</label>
                  <div className="radio-group">
                    <label><input type="radio" name="alive" value="true" /> Sí</label>
                    <label><input type="radio" name="alive" value="false" /> No</label>
                  </div>
                </div>
                <div className="input-field">
                  <label>Población de origen:</label>
                  <input type="text" name="relativeOrigin" />
                </div>
                <div className="input-field">
                  <label>Región:*</label>
                  <select name="relativeRegion" >
                    <option value="01">Croacia Central</option>
                    <option value="02">Dalmacia</option>
                    <option value="03">Eslavonia</option>
                    <option value="04">Istria</option>
                    <option value="05">Otra</option>
                    <option value="06">No sé</option>
                  </select>
                </div>
                <div className="grid mb-12">
                  <label>¿En qué década emigró de Croacia aproximadamente?:*</label>
                  <select name="relativeDecade" >
                    <option value ="01">Después de 2000</option>
                    <option value ="02">1990</option>
                    <option value ="03">1980</option>
                    <option value ="04">1970</option>
                    <option value ="05">1960</option>
                    <option value ="06">1950</option>
                    <option value ="07">1940</option>
                    <option value ="08">1930</option>
                    <option value ="09">1920</option>
                    <option value ="10">1910</option>
                    <option value ="11">1900</option>
                    <option value ="12">1890</option>
                    <option value ="13">1880</option>
                    <option value ="14">1870</option>
                    <option value ="15">1860</option>
                    <option value ="16">Antes de 1860</option>
                  </select>
                </div>
                <div className="grid">
                  <label>¿A qué país emigró como primer destino?:*</label>
                  <input type="text" name="relativeCountry" />
                </div>
              </div>
            </div>

            <hr />

            <p><span className="blue-highlight">Genera tu usuario. </span></p>
            <div className="grid gap-80">
              <div>
                <p className="mt-0">
                  Tu correo electrónico será tu clave de usuario en Moja Obitelj y funcionará como enlace para todos sus mensajes.
                </p>
                <div className="input-field">
                  <label>Correo electrónico: *</label>
                  <input type="email" name="email" />
                </div>
                <div className="input-field">
                  <label>Confirma tu correo: *</label>
                  <input type="email" name ="confirma_email" />
                </div>
                <p className="m-0 mb-12">
                  Tu contraseña debe contener mínimo 8 caracteres, considerando al menos una letra minúscula, una mayúscula, un número y un símbolo.
                </p>
                <div className="input-field">
                  <label>Contraseña: *</label>
                  <input type="password" name="password"/>
                </div>
                <div className="input-field">
                  <label>Confirma tu contraseña: *</label>
                  <input type="password" name="confirma_password" />
                </div>
              </div>
              <div>
                <p className="mt-0">Todos tus datos personales te pertenecen, y se mantendrán seguros en estricto apego a nuestra política de privacidad, <a href="#" className="maroon-link">conócela aquí.</a></p>
                <div className="checkbox-group">
                  <input type="checkbox" name="agreement" value="1"/>
                  <label>
                    Estoy de acuerdo con la
                    <a href="#" className="maroon-link">política de privacidad</a>,
                    <a href="#" className="maroon-link">términos y condiciones</a> de <span className="blue-highlight">Moja Obitelj</span>.*
                  </label>
                </div>
                <div className="captcha-block">
                  captcha
                  <p className="mb-0">* Información obligatoria.</p>
                </div>

                <div className="btn-group">
                  <button type="submit" className="btn-blue">Continuar</button>
                  <button type="reset" className="btn-blue-outline">Borrar Formulario</button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}