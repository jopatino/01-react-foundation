export const BasicTypes = () => {

    const name: string = 'Jose';
    const age: number = 27;
    const isActive: boolean = true;
    const powers: string[] = ['React', 'ReacNative', 'Angular', 'Vue', 'Qwik']

    powers.push('Next')

    return (
        <>
            <h3>Tipos básicos</h3>
            {name} {age} {isActive ? 'Activo' : 'Inactivo'}

            <br />

            {powers.join(', ')}
        </>
    )
}