import * as React from "react";
import dom from '../utils/dom'
import { Column } from './SlidesColumns'
import { propOr, map } from 'ramda'


export default ({ settings = {}, presentation = {}, slides = [] }) => {
    return (
        <div className={'column'}>
            {map((colSlides) => (
                <Column fullscreen={propOr(false, 'fullscreen', settings)}
                        slides={colSlides}/>
            ), slides)}
        </div>
    )
}
