import { set, over, lensIndex, dec, inc, o, flip, assoc, prop, not, is } from 'ramda';
import dom from '../utils/dom';
import SlideMap from './SlideMap';
import { existsObjAt } from '../utils/slide-utils';

const up = over(lensIndex(1), dec);
const down = over(lensIndex(1), inc);

const left = o(
    set(lensIndex(1), 0),
    over(lensIndex(0), dec) as any
);
const right = o(
    set(lensIndex(1), 0),
    over(lensIndex(0), inc) as any
);


export default (props) => {
    const {
        slides = [],
        slidePos = [0, 0],
        settings = {},
        dispatch
    } = props;

    const moveToSlide = o(
        dispatch,
        flip(assoc('value'))({ type: 'MOVE_TO_SLIDE' })
    );

    const changeSetting = (setting, value) => {
        dispatch({ type: 'CHANGE_SETTING', value: [setting, value] })
    };

    const slidesLoaded = !!(slides && slides.length)

    const buttons = [
        [left(slidePos), 'left'],
        [right(slidePos), 'right'],
        [' - '],
        [up(slidePos), 'up'],
        [down(slidePos), 'down'],
    ];

    return (
        <aside className='slide-controls'>

            <SlideMap slides={slides}/>

            {buttons.map(([btnFn, dir], index) => is(String, btnFn) ? <span>{btnFn}</span> : (
                    <button
                        className='btn btn-lg btn-info btn-outline'
                        onClick={() => moveToSlide(btnFn)}
                        disabled={not(existsObjAt(btnFn)(slides))}
                    >
                        <i className={`fa fa-arrow-${dir}`}></i>
                        <span className="hidden">{dir}</span>
                    </button>
                ))}

            <button
                className='btn btn-lg btn-info btn-outline'
                onClick={() => changeSetting(
                    'fullscreen', !prop('fullscreen', settings)
                )}
            >
                <i className={`fa fa-${
                    prop('fullscreen', settings) ? 'compress' : 'expand'}`
                }></i>
                <span className="hidden">Up</span>
            </button>

            &nbsp; - &nbsp;
            {!slidesLoaded ? null : (
                <button
                    onClick={() => moveToSlide([0, 0])}
                    className='btn btn-md btn-danger'
                >
                    <i className="fa fa-refresh"></i>
                    <span className="hidden">Restart</span>
                </button>)
            }


        </aside>
    )
}
