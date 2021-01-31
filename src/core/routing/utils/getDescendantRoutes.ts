import { EnhancedAreaRoute, getRootRoutes, PATH_SEPARATOR } from '../../routing';

const getDescendantRoutes = (
    parentPath: string | string[],
    expand: boolean = false,
): EnhancedAreaRoute[] => {
    if (Array.isArray(parentPath)) {
        parentPath = parentPath[0]
    }

    const parts = parentPath
        .split(PATH_SEPARATOR)
        .filter(part => !!part)
        .map(part => `/${part}`)

    return retrieveRoutes(getRootRoutes(), parts);
};

const retrieveRoutes = (routes: EnhancedAreaRoute[] = [], parts: string[], prefix: string = ''): EnhancedAreaRoute[] => {
    let result = [];

    if(routes.length === 0) {
        return result;
    }

    const head = parts.shift();
    const route = routes.find(route => route.path === head)

    if (route === undefined) {
        return result;
    }
    const fullPath = [prefix, head].join(PATH_SEPARATOR).replace(RegExp(`\\${PATH_SEPARATOR}+`, 'gi'), PATH_SEPARATOR);

    if(parts.length === 0) {
        return route.routes!;
    } else {
        return retrieveRoutes(route.routes!, parts, fullPath);
    }
}

export {
    getDescendantRoutes
}
