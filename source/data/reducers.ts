import { add, fromPairs, lensProp, merge, over } from 'ramda';
import compose from '../utils/compose';
import { setupSlides, activeSlide } from '../utils/slide-utils';


// mainReducer :: (Object, Object) -> Object
function mainReducer (state: any, action: any = {}) {
  const { settings = {} } = state;
  const { type, value } = action;

  switch (type) {
    case 'SETUP_SLIDES':
        const presentation = { ...state.presentation, slides: setupSlides(action.value) };
      return { ...state, presentation };

    case 'MOVE_TO_SLIDE':
      const slidePos = value;
      const slides = state.slides || [];
      return { ...state, slides: activeSlide(slidePos)(slides), slidePos }
;
    case 'TEST_ACTION':
      return merge(state, { title: 'Packt Pub Presentation App' });

    case 'CUSTOM_TITLE':
      const title = value;
      return { ...state, title }; // same as Object.assign({}, state, { title })

    case 'CHANGE_SETTING':
      return { ...state, settings: merge(settings, fromPairs([value]))};

    case 'DEPOSIT':
      return over(
        lensProp('money'), add(action.value), state
      );
    case 'WITHDRAW':
      const money = state.money - action.value;
      return { ...state, money };

    default:
      // We don't know how to handle this action
      return state
  }
}

export default mainReducer
