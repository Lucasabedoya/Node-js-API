import Express  from "express";
import morgan from "morgan";
import PersonasRoutes from './routes/personas.routes'

const app = Express();

const port = process.env.PORT || "";

//setings
app.set("port", port)

//Middlewares
app.use(morgan("dev"));
app.use(Express.json());

//Routes
app.use( "/api/personas", PersonasRoutes );

export default app