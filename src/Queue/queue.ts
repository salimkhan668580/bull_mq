import { Queue } from 'bullmq';

export const mailQueue = new Queue('sendEmail');
