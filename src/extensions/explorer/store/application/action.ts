import { Action } from 'redux';

export interface ProgressAction extends Action {
    progress: boolean;
}
export const PROGRESS_ACTION = 'PROGRESS_ACTION';
export const progress = (progress: boolean = false) => {
    return {
        type: PROGRESS_ACTION,
        progress: progress,
    }
}
