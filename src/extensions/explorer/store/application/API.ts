import { ApplicationRootState } from '@core/store';
import { UIState } from '@extensions/explorer/store/application/ui/API';
import { GitState } from '@extensions/explorer/store/application/git/API';

export interface ExplorerState extends ApplicationRootState {
    ui: UIState;
    git: GitState;
}
