import Form from 'next/form'

export default function ResetPass() {
    return (

        <section className="update-password">
            <div className="container">
                <Form action="/">
                    <h1>Actualiza tu contraseña </h1>
                    <div className="grid gap-80">
                        <div>
                            <p>
                                Por favor completa la siguiente información para reactivar tu acceso.
                            </p>
                            <div className="input-field">
                                <label>Nombre:*</label>
                                <input type="text" name="name" />
                            </div>
                            <div className="input-field">
                                <label>Apellido paterno: *</label>
                                <input type="text" />
                            </div>
                            <div className="input-field">
                                <label>Correo electrónico registrado: *</label>
                                <input type="email" />
                            </div>
                            <div className="grid mt-15 mb-12">
                                <label>
                                    Introduce la clave de reinicio de contraseña recibida en tu correo electrónico: *
                                </label>
                                <input type="text" />
                            </div>
                            <p className="m-0">
                                * Información obligatoria.
                            </p>
                        </div>
                        <div>
                            <p>Tu contraseña debe contener mínimo 8 caracteres, considerando al menos una letra minúscula, una mayúscula, un número y un símbolo. </p>
                            <div className="input-field">
                                <label>Nueva contraseña: *</label>
                                <input type="password" />
                            </div>
                            <div className="input-field">
                                <label>Confirma tu contraseña: *</label>
                                <input type="password" />
                            </div>
                            <div className="btn-group mt-30">
                                <button className="btn-blue">Continuar</button>
                                <button className="btn-blue-outline cancel">Borrar Formulario</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </section>

    );
}