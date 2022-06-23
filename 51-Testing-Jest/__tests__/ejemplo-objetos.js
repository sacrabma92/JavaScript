const cliente = {
    nombre: 'Carlos Ramirez',
    balance: 500
};

describe('Testing al Cliente', () =>{
    test('El cliente es premium', () =>{
        expect( cliente.balance ).toBeGreaterThan(400);
    });

    test(' Es Carlos Ramirez', () => {
        expect(cliente.nombre).toBe('Carlos Ramirez');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Juan');
    });
});