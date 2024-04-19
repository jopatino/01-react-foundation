
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address; /*Puedo anidar otras interfaces para organizar todo mejor*/
    isAlive?: boolean; /*Opcional*/
}

interface Address {
    country: string;
    houseNo: number;
}

export const ObjectLiterals = () => {

    const person: Person = {
        age: 27,
        firstName: "Jose",
        lastName: "Patiño",
        isAlive: true,
        address: {
            country: 'Colombia',
            houseNo: 123
        }
    }



    return (
        <>
            <h3>Objetos literales</h3>
            <pre>
                { JSON.stringify( person, null, 2) }
            </pre>

        </>
    )
}