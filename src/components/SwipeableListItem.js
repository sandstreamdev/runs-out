import React, { PureComponent } from 'react';

import './SwipeableListItem.css';

class SwipeableListItem extends PureComponent {
  constructor(props) {
    super(props);

    this.listElement = null;
    this.wrapper = null;
    this.backgroundLeft = null;
    this.backgroundRight = null;

    // Drag & Drop
    this.dragStartX = 0;
    this.left = 0;
    this.dragged = false;

    // FPS Limit
    this.startTime = null;
    this.fpsInterval = 1000 / 60;
  }

  componentDidMount() {
    window.addEventListener("mouseup", this.onDragEndMouse);
    window.addEventListener("touchend", this.onDragEndTouch);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this.onDragEndMouse);
    window.removeEventListener("touchend", this.onDragEndTouch);
  }

  onDragStartMouse = (evt) => {
    this.onDragStart(evt.clientX);
    window.addEventListener("mousemove", this.onMouseMove);
  }

  onDragStartTouch = (evt) => {
    const touch = evt.targetTouches[0];
    this.onDragStart(touch.clientX);
    window.addEventListener("touchmove", this.onTouchMove);
  }

  onDragStart = (clientX) => {
    this.dragged = true;
    this.dragStartX = clientX;
    this.listElement.className = "ListItem";
    this.startTime = Date.now();
    requestAnimationFrame(this.updatePosition);
  }

  onDragEndMouse = (evt) => {
    window.removeEventListener("mousemove", this.onMouseMove);
    this.onDragEnd();
  }

  onDragEndTouch = (evt) => {
    window.removeEventListener("touchmove", this.onTouchMove);
    this.onDragEnd();
  }

  onDragEnd = () => {
    if (this.dragged) {
      this.dragged = false;

      const threshold = this.props.threshold || 0.5;

      if (this.left < this.listElement.offsetWidth * threshold * -1) {
        // this.left = -this.listElement.offsetWidth * 2;
        // this.wrapper.style.maxHeight = 0;
        // this.left = 0;
        this.onSwipedLeft();
      } else if (this.left > this.listElement.offsetWidth * threshold) {
        // this.left = 0;
        this.onSwipedRight();
      }

      // for deletion we should remove item
      this.left = 0;
      this.listElement.className = "BouncingListItem";
      this.listElement.style.transform = `translateX(${this.left}px)`;
    }
  }

  shouldMoveItem = (delta) => {
    const { backgroundLeft, backgroundRight } = this.props;
    const swipingLeft = delta < 0;
    const swipingRight = delta > 0;

    return (swipingLeft && backgroundLeft) || (swipingRight && backgroundRight)
  }

  onMouseMove = (evt) => {
    const delta = evt.clientX - this.dragStartX;
    if (this.shouldMoveItem(delta)) {
      this.left = delta;
    }
  }

  onTouchMove = (evt) => {
    const touch = evt.targetTouches[0];
    const delta = touch.clientX - this.dragStartX;
    if (this.shouldMoveItem(delta)) {
      this.left = delta;
    }
  }

  updatePosition = () => {
    if (this.dragged) requestAnimationFrame(this.updatePosition);

    const now = Date.now();
    const elapsed = now - this.startTime;

    if (this.dragged && elapsed > this.fpsInterval) {
      this.listElement.style.transform = `translateX(${this.left}px)`;

      const opacity = (Math.abs(this.left) / 100).toFixed(2);

      let backgroundToShow = this.left < 0 ? this.backgroundLeft : this.backgroundRight;
      let backgroundToHide = this.left < 0 ? this.backgroundRight : this.backgroundLeft;

      if (!backgroundToShow) {
        return;
      }

      if (opacity < 1 && opacity.toString() !== backgroundToShow.style.opacity) {
        backgroundToShow.style.opacity = opacity.toString();
        if (backgroundToHide) {
          backgroundToHide.style.opacity = "0";
        }
      }

      if (opacity >= 1) {
        backgroundToShow.style.opacity = "1";
      }
  
      this.startTime = Date.now();
    }
  }

  onSwipedLeft = () => {
    const { onSwipeLeft } = this.props;

    if (onSwipeLeft) {
      onSwipeLeft();
    }
  }

  onSwipedRight = () => {
    const { onSwipeRight } = this.props;

    if (onSwipeRight) {
      onSwipeRight();
    }
  }

  render() {
    const { backgroundLeft, backgroundRight, children } = this.props;

    return (
      <div className="Wrapper" ref={div => (this.wrapper = div)}>
        {backgroundRight && <div ref={div => (this.backgroundRight = div)} className="Background">
          {backgroundRight}
        </div>}
        {backgroundLeft && <div ref={div => (this.backgroundLeft = div)} className="Background">
          {backgroundLeft}
        </div>}
        <div
          ref={div => (this.listElement = div)}
          onMouseDown={this.onDragStartMouse}
          onTouchStart={this.onDragStartTouch}
          className="ListItem"
        >
          {children}
        </div>
      </div>
    );
  }
}

export default SwipeableListItem;
