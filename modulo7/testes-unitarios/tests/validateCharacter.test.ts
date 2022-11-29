import { Character } from "../src/Models/Character"
import { validateCharacter } from "../src/validateCharacter"

describe("Testte da função validateCharacter", () => {
    test("Personagem com nome vazio", () => {
        const zeNinguem: Character = {
            name: "",
            life: 1500,
            strength: 100,
            defense: 100
        }

        const result = validateCharacter(zeNinguem)

        expect(result).toBe(false)
    })

    test("Personagem com vida igual a zero", () => {
        const rodolfo: Character = {
            name: "No respira, está muerto?",
            life: 0,
            strength: 100,
            defense: 100
        }

        const result = validateCharacter(rodolfo)

        expect(result).toBe(false)
    })
    
    test("Personagem com força igual a zero", () => {
        const rodolfo: Character = {
            name: "Estava dormindo",
            life: 1500,
            strength: 0,
            defense: 100
        }

        const result = validateCharacter(rodolfo)

        expect(result).toBe(false)
    })

    test("Personagem com defesa igual a zero", () => {
        const rodolfo: Character = {
            name: "Ai que susto!!",
            life: 1500,
            strength: 100,
            defense: 0
        }

        const result = validateCharacter(rodolfo)

        expect(result).toBe(false)
    })

    test("Personagem com valores negativos", () => {
        const rodolfo: Character = {
            name: "Que susto!!",
            life: -100,
            strength: -50,
            defense: 100
        }

        const result = validateCharacter(rodolfo)

        expect(result).toBe(false)
    })

    test("Personagem com informações validas", () => {
        const rodolfo: Character = {
            name: "Rodolfin",
            life: 1500,
            strength: 100,
            defense: 150
        }

        const result = validateCharacter(rodolfo)

        expect(result).toBe(true)
    })
})