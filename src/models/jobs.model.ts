import { model, Schema, Document } from 'mongoose';
import { Job, JobStatus } from '../interfaces/jobs.interface';

const jobSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  config: {
    interval: String,
  start_time: Date,
  end_time: Date
  },
  status: {
    type: String,
    enum: [JobStatus.NEW, JobStatus.EXECUTING, JobStatus.COMPLETED]
  },
  last_execution: Date,
  previous_execution_count: Number,
  created_at: Date,
  updated_at: Date
});

const jobModel = model<Job & Document>('Job', jobSchema);

export default jobModel;
