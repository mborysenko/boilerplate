import { ApplicationRootState } from '@core/store';
import { UIState } from '@extensions/management/store/application/ui/API';
import { GitState } from '@extensions/management/store/application/git/API';

export interface ExplorerState extends ApplicationRootState {
    ui: UIState;
    git: GitState;
}
