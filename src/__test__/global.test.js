const text = "Hola Mundo"

test('debe tener un texto', () => {
    expect(text).toMatch(/Mundo/)
})