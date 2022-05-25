import express from "express";
import { SuitableNetworkLocations } from './service/network';

const PORT =   5000

console.log(PORT, 'PORT')

const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', SuitableNetworkLocations);

app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`);
})

export default app