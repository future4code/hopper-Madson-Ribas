// Considere que a gente só possa fazer três operações com `string`: adicionar um caractere ao final dele, 
// remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma `string` é 'one edit' de outra se 
// ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma `string` é  'one edit' de outra.

// - Exemplos
    
//     `"banan"` é 'one edit' de `"banana"` (remoção de um caracter)
    
//     `"bananak"` é 'one edit' de `"banana"` (adição de um caracter)
    
//     `"panana"` é 'one edit' de `"banana"` (troca de um caracter)
    
//     `"bananaaa"` **não** é 'one edit' de `"banana"` (adição de dois caracteres)


const checkOneEdit = ( text1: string, text2: string ): boolean => {
    if (Math.abs(text1.length - text2.length) > 1 ) return false 
    if( text1.length > text2.length) return text1.includes(text2)
    if( text1.length < text2.length) return text2.includes(text1)
    let caracNotEqual = 0
    for (let i = 0; i < text1.length; i++) {
        if (text1[i] !== text2[i]) caracNotEqual ++        
    }
    return caracNotEqual === 1
}

console.log(`"banan" é 'one edit' de "banana", expect true, return:`, checkOneEdit("banan", "banana") );
console.log(`"bananak" é 'one edit' de "banana", expect true, return:`, checkOneEdit("bananak", "banana") );
console.log(`"panana" é 'one edit' de "banana", expect true, return:`, checkOneEdit("panana", "banana") );
console.log(`"bananaaa" **não** é 'one edit' de "banana", expect false, return:`, checkOneEdit("bananaaa", "banana") );
