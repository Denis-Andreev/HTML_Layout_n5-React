import React, {useState} from "react";

import next from '../../media/other/right-controller.png'
import prev from '../../media/other/left-controller.png'

import classes from './carousel.module.css'

export const Carousel = ({children, ...props}) => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    if(!children) {
        return null;
    }
    if(!children.length) {
        return children;
    }

    const arrowsHandler = (direction) => {
        if(direction === 'next') {
            if(carouselIndex === children.length - 1) {
                setCarouselIndex(0);
            } else {
                setCarouselIndex(carouselIndex+1);
            }
        }
        if (direction === 'prev') {
            if(carouselIndex === 0) {
                setCarouselIndex(children.length-1);
            } else {
                setCarouselIndex(carouselIndex-1);
            }
        }
    }
    const CarouselItems = children.map((elem, index) => {
        return (
            <CarouselItem key={index} id={index} selectedIndex={carouselIndex} elem={elem}/>
        )
    })

    return (
        <div className={classes.carousel}>
            {CarouselItems}
            <div className={classes.wrap}>
                <CarouselControls count={children.length} color={props.color} controllersHandler={setCarouselIndex} selectedIndex={carouselIndex} />
                <CarouselArrows color={props.color}  arrowsHandler={arrowsHandler} />
            </div>
        </div>
    )
}

const CarouselItem = ({elem,id, selectedIndex}) => {
    if(selectedIndex === id) {
        return elem;
    } else {
        return null;
    }
}

const CarouselControls = ({count, controllersHandler, selectedIndex, ...props}) => {
    let Controls = [];
    for (let i = 0; i < count; i++) {
        let isActive = selectedIndex === i ? classes.active : "";
        Controls.push(
            <div key={i} style={{backgroundColor: props.color}} className={classes.carousel_controller +" " + isActive} onClick={() => controllersHandler(i)}/>
        )
    }
    return (
        <div className={classes.controllers_wrap}>
            {Controls}
        </div>
    )
}

const CarouselArrows = ({arrowsHandler, ...props}) => {
    return (
        <div className={classes.carousel_arrows}>
            <div onClick={() => arrowsHandler('prev')}
                 style={{
                     backgroundImage: `url(${prev}`,
                     backgroundColor: props.color,
                 }}
                 className={classes.carousel_arrow + " " + classes.prev}
            />
            <div onClick={() => arrowsHandler('next')}
                 style={{
                     backgroundImage: `url(${next}`,
                     backgroundColor: props.color,
                 }}
                 className={classes.carousel_arrow + " " + classes.next}
            />
        </div>
    )
}