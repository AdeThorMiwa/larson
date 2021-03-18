export enum JobStatus {
  NEW = "NEW",
  EXECUTING = "EXECUTING",
  COMPLETED = "COMPLETED"
}

export interface JobConfig {
  interval: string;
  start_time: Date;
  end_time: Date;
}

export interface Job {
  _id: string;
  title: string;
  config: JobConfig;
  status: JobStatus;
  last_execution: Date;
  previous_execution_count: number;
  created_at: Date;
  updated_at: Date;
}
