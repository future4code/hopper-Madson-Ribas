import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './usersData' // Exercicio 3
import { posts } from './postsData' // Exercício 6, por questão de organização, criei dos arrays separados para melhor intendimento do código.

const app = express()

app.use(express.json())
app.use(cors())


// Exercício 1
app.get("/test", (req: Request, res: Response) => {
    console.log("Hello!");
    
    res.send("Hello from Express")
})

// Exercício 4

app.get("/users", (req: Request, res: Response) => {    
    res.send(users)
})

// Exercício 7

app.get("/posts", (req: Request, res: Response) => {    
    res.send(posts)
})

// Exercício 8 

app.get("/userPosts", (req: Request, res: Response) => {
    let userId: number = Number(req.query.id)

    console.log(userId);

    const usersPosts = posts.filter( post  => userId === post.userId )    

    res.send(usersPosts)
})

app.listen(3000, () => {
    console.log("Server is running in http://localhost:3000");
   });