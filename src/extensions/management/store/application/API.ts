import { ApplicationRootState } from '@dhampirjs/core';
import { UIState } from '@extensions/management/store/application/ui/API';
import { GitState } from '@extensions/management/store/application/git/API';

export interface ExplorerState /*extends ApplicationRootState*/ {
    ui: UIState;
    git: GitState;
}
