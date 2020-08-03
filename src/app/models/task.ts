import { TaskState} from './task-state.enum';

export class Task {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    finishedAt: Date;
    projectId: number;
    performerId: number;
    state: TaskState;
}
