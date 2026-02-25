import { logger } from '../util/Looger';
import { Radisconnection } from './radisConnection';
import { Worker } from 'bullmq';

export const mailWorker = new Worker(
  'sendEmail',
  async job => {
    console.log(job.data);
    logger.success(job.data.email);
  },
  { connection:Radisconnection },
);

mailWorker.on('completed', job => {
  logger.success(`Job with id ${job.id} has been completed`);
});

mailWorker.on('failed', (job, err) => {
  logger.error(`Job with id ${job?.id} has failed with error: ${err.message}`);
});