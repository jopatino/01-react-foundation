export const BasicFunctions = () => {

    const addTwoNumber = ( a: number, b: number ): string => {
        return (a + b).toString();
    }

    return (
        <>
            <h3>Funciones básicas</h3>
            <span>El resultado de sumar: { addTwoNumber(2, 4) }</span>
        </>
    )
}