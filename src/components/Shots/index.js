import React, { Components } from "react";
import "./styles.css";
import { TweenMax, Expo } from "gsap";
import popShoveItPopcorn from "./popShoveItPopcorn.png";
import popShoveIt from "./popShoveIt.png";
import futlusz from "./futlusz.png";
import VisibilitySensor from "react-visibility-sensor";

const shots = [
  {
    name: "Pop Shove It Popcorn",
    image: popShoveItPopcorn,
    link: "#"
  },
  {
    name: "Pop Shove It",
    image: popShoveIt,
    link: "#"
  },
  {
    name: "Fútlúsz",
    image: futlusz,
    link: "https://www.facebook.com/nemoverzlo/"
  }
];

const ease = Expo.easeOut;

class Shots extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
    this.animationNodes = [];
    this.animationDuration = 1;
  }

  componentDidMount() {
    this.animationNodes = this.componentRef.querySelectorAll("[data-animate]");
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState(
        {
          isVisible
        },
        () => this.handleAnimation()
      );
    }
  }

  handleAnimation() {
    TweenMax.staggerTo(
      this.animationNodes,
      2,
      {
        scale: 1,
        opacity: 1,
        delay: 0,
        ease
      },
      0.2
    );
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="Shots">
        <div className="Shots-container">
          <h2>Selected Shots</h2>
          <VisibilitySensor
            onChange={isVisible => this.onChange(isVisible)}
            active={!isVisible}
            intervalDelay={100}
            minTopValue={200}
            partialVisibility
          >
            <div
              className="Shots-list"
              ref={ref => {
                this.componentRef = ref;
              }}
            >
              {shots.map((shot, index) => (
                <a
                  href={`${shot.link}`}
                  target="_blank"
                  className="Shots-item"
                  key={index}
                  data-animate
                  style={{ backgroundImage: `url(${shot.image})` }}
                />
              ))}
            </div>
          </VisibilitySensor>
        </div>
      </div>
    );
  }
}

export default Shots;
