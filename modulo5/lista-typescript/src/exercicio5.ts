type Usuario = {
	name: string,
	email: string,
	role: string
}


let usuarios: Usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

function retornaAdmin(array: Usuario[]) : string[] {
    return array
    .filter(funcionario => funcionario.role === "admin")
    .map((funcionario) => {
        return funcionario.email
    })
}

console.log(retornaAdmin(usuarios));
