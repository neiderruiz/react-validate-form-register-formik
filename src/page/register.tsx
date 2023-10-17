import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../components/button';


type TypeInitialValues = {
    email: string
    password: string
    passwordConfirmation: string
}

const initialValues: TypeInitialValues = {
    email: '',
    password: '',
    passwordConfirmation: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Correo no valido').required('Campo requerido'),
    password: Yup.string().min(5, 'Minimo 5 caracteres').max(20, 'Maximo 20 caracteres').required('Campo requerido'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), undefined], 'Las contraseñas no coinciden').required('Campo requerido')
})

const Register = () => {

    const onSubmit = (values: TypeInitialValues) => {
        //fetch('api/register') 
        console.log('formulario validado', values)
    }

    const { handleChange, errors, handleSubmit } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log(errors)

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Crear una cuenta
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    onChange={handleChange}
                                />
                                <small className='text-red-500'>{errors?.email}</small>
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={handleChange}
                                />
                                <small className='text-red-500'>{errors?.password}</small>
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Confirmar contraseña
                                </label>
                                <input
                                    type="password"
                                    name="passwordConfirmation"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={handleChange}
                                />
                                <small className='text-red-500'>{errors?.passwordConfirmation}</small>
                            </div>
                            <Button type="submit" text="Crear Cuenta" />
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Ya tienes una cuenta?{" "}
                                <Link
                                    to="/login"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Iniciar sesión
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register