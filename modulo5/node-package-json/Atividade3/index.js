let tarefas = [
    "Acordar cedo;",
    "Arrumar a cama;",
    "Montar caminhões;"
]

const novaTarefa = process.argv[2]

tarefas.push(novaTarefa)

console.log(tarefas);

