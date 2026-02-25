import { Worker } from 'bullmq';
import IORedis from 'ioredis';

export const Radisconnection = new IORedis({
    maxRetriesPerRequest: null,

});


