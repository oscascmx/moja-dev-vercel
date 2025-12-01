"use client"
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useState } from 'react'



export default function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter();
    const [error, setError] = useState<string | null>(null);


    const onSubmit = handleSubmit(async (data) => {
        console.log(data);

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        console.log("RES:" + res)

        if (res && res.error) {
            setError(res.error)
        } else if(res){
            router.push('/auth/profile')
            router.refresh()
        }
    });

    return (

        <section className="profile">
            <div className="container">
                <form onSubmit={onSubmit}>
                    {error && (
                        <p>{error}</p>
                    )}

                    <h1>Actualiza tu contraseña </h1>

                    <div className="grid gap-80">
                        <div>
                            <p>
                                Por favor completa la siguiente información para reactivar tu acceso.
                            </p>
                            <div className="input-field">
                                <label>Nombre:*</label>
                                <input type="text"
                                    {...register("nombres", {
                                        required: {
                                            value: true,
                                            message: "El nombre de pila es requerido"
                                        }
                                    })}
                                />
                            </div>
                            {errors.nombres && (
                                <span>{errors.nombres.message}</span>
                            )}
                            <div className="input-field">
                                <label>Apellido paterno: *</label>
                                <input type="text"
                                    {...register("apellidoPaterno", {
                                        required: {
                                            value: true,
                                            message: "El apellido es requerido"
                                        }
                                    })}
                                />
                                <div>

                                    {errors.apellidoPaterno && (
                                        <span>{errors.apellidoPaterno.message}</span>
                                    )}
                                </div>
                            </div>
                            <div className="input-field">
                                <label>Correo electrónico registrado: *</label>
                                <input type="email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "El correo electrónico, es requerido"
                                        }
                                    })
                                    }
                                />
                                {errors.email && (
                                    <span>{errors.email.message}</span>
                                )}
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

                        {/* Columna 2 */}
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
                            <div className="btn-group">
                                <button className="btn-blue">Continuar</button>
                                <button className="btn-blue-outline cancel" type="reset">Borrar Formulario</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    );


}