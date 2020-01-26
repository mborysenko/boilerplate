import { IO } from '../containers'

// setItem :: (Str, *) -> IOContainer
export const setItem = (key, val) => {
  return IO.of(() => {
    localStorage.setItem(key, JSON.stringify(val))
  })
};


// getItem :: Str -> IOContainer
export const getItem = (itemKey) => IO
  .of(() => localStorage.getItem(itemKey));

