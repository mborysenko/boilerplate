import * as React from "react";
import {} from 'ramda'
import dom from '../utils/dom'

export default ({ slides }): any => {
    return (
        <div>
            <section className='slide-map'>
                {slides.map((column, i) => {
                    return (<span className='column'>
                {column.map((slide, j) => {
                    return (<span className={`slide-item ${slide.active ? 'active' : ''}`}/>)
                })}
                            <span className="clearfix"></span>
                </span>
                    )
                })
                }
            </section>
            <div className="clearfix"></div>
        </div>
    )
}
