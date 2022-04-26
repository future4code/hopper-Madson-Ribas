```javascript
function retornaVogais(string) {
    let arr = [...string]

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
            console.log(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (element !== "a" && element !== "e" && element !== "i" && element !== "o" && element !== "u") {
            console.log(arr[i]);
        }
    }

}

retornaVogais("caramelo")

```