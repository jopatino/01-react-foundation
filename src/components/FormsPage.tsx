import { useForm } from "react-hook-form"

type FormInputs = {
    email: string;
    password: string;
}

export const FormsPage = () => {

    // register registra los defaultvalues en el formulario, en los inputs
    const { register, handleSubmit, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'joseopatinoc@gmail.com',
            password: 'asb123'
        }
    });

    const onSubmit = ( myForm: FormInputs ) => {
        console.log({ myForm })
    }

    console.log(watch('email'));

    return (
        <>
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <h3>Formularios</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="text" placeholder="Email" { ...register('email', {required: true}) } />
                    <input type="text" placeholder="password" { ...register('password') } />
                    <button type="submit">Ingresar</button>
                </div>
            </form>      
        </>
    )

}

