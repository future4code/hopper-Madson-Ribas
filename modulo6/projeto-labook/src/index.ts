import { app } from "./controller/app"
import { friendsRouter } from "./controller/routes/friendsRouter"
import { postRouter } from "./controller/routes/postRouter"
import { userRouter } from "./controller/routes/userRouter"

app.use('/users', userRouter )
app.use('/posts', postRouter )
app.use('/friends', friendsRouter )