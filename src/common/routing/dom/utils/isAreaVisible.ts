import { RoutingArea, useRoutesForArea } from '@common';
import { takeLast } from 'ramda';

export const isAreaVisible = (area: RoutingArea, path: string): boolean => {
    const takeLastOne = takeLast(1);
    const parts = path.split('/');
    const routes = useRoutesForArea(area);
    const fr = routes.filter(({ path, exact }) => {
        let toFilter = false;
        if (Array.isArray(path)) {
            path.forEach(c => {
                if (takeLastOne(c.split('/')) === takeLastOne(parts)) {
                    toFilter = true;
                    return;
                }
            })
        } else {
            if(!exact) {
                toFilter = !exact;
            } else {
                toFilter = takeLastOne(parts) === takeLastOne(path.split('/'));
            }
        }

        return toFilter;
    });

    if (fr.length === 0) {
        return false;
    }

    return true;
}
