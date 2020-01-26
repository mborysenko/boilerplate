import { apply, prepend, compose, reduce } from 'ramda';

// I :: a -> a
const I = (x) => x
const Identity = I
const S = (f) => (g) => (x) => f(x)(g(x))
const K = (x) => (y) => x
// tap :: Function -> a -> a
const tap = (f) => (x) => {
    f(x)
    return x
}

// trace :: a -> a
const trace = tap(console.log.bind(console));

(compose as any).log = compose(
    apply(compose), // apply is compose.apply
    prepend(trace),
    reduce((acc, fn) => acc.concat(fn, trace), []),
    Array
)

export {
    compose as default
}
