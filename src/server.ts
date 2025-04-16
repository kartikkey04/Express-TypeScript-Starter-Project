import express from 'express';
import { pingRouter } from './routers/ping.router';
import { serverConfig } from './config';

const app = express();

app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});