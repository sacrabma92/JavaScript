const cliente = {
    nombre: 'Carlos Ramirez',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () =>{
    test('Es Carlos Ramirez', () => {
        expect(cliente).toMatchSnapshot();
    })
})