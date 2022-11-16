import { performPurchase } from "../src"
import { User } from "../src/Model/User"

describe("Teste da função de compra", () => {
    const user: User = {
        name: "Madson Richguy",
        balance: 100000
    }
    
    test("Teste com saldo positivo", () => {
        const result = performPurchase(user, 80000)
        expect(result).toEqual({name: "Madson Richguy", balance: 20000})
    })

    test("Teste com saldo zero", () => {
        const result = performPurchase(user, 100000)
        expect(result).toEqual({name: "Madson Richguy", balance: 0})
    })

    test("Teste com saldo negativo", () => {
        const result = performPurchase(user, 120000)
        expect(result).toEqual(undefined)
    })
})