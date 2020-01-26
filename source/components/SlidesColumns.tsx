import dom, { fromHTML } from '../utils/dom';
import { map, ifElse, equals } from 'ramda';
import { K } from '../containers';

// slideClass :: Slide -> String
const slideClass = (slide: any) => `slide ${!slide.active ? '' : 'active'}`

const columnClass = ifElse(
    equals(true),
    K('fulscreen presentation column'),
    K('presentation column'),
)

// Img :: Obj -> VNode
const Img: (props: any) => any = ({ src, alt = '' }) => <img src={src} alt={alt}/>


// Slide :: [Slide] -> VNode
const Slide = (slide: any) => (
    <div style={slide.style} className={slideClass(slide)}>
        <div className='header'>
            <div className='header title'>
                <h1 className='display-4'>
                    <strong className='lead'>
                    </strong> {slide.title || ''}
                </h1>
            </div>
        </div>
        <div className='body'>
            {slide.html ? fromHTML(slide.html) : null}
        </div>
        <div className='img img-responsive'>
            {slide.img ? Img(slide.img) : null}
        </div>
        <footer className='footer'>
            {slide.text ? <blockquote>{slide.text}</blockquote> : null}
        </footer>
    </div>
)


// Column :: [Slide] -> VNode
export const Column: (props: any) => any = ({ slides, fullscreen = true }): any => {
    return (<div className={columnClass(fullscreen)}>
        {map(Slide, slides)}
    </div>);
}
