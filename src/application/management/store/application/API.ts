import { ApplicationRootState } from '@dhampir/core';
import { UIState } from '../../../management/store/application/ui/API';
import { GitState } from '../../../management/store/application/git/API';

export interface ExplorerState extends ApplicationRootState {
    ui: UIState;
    git: GitState;
}
