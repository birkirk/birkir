import React, { Components } from "react";
import "./styles.css";
import { TweenMax, Expo } from "gsap";
import VisibilitySensor from "react-visibility-sensor";
import aranja from "./aranja.svg";
// import nfSports from "./nfSports.svg";
// import foodco from "./foodco.svg";
// import nfvi from "./nfvi.svg";

const coops = [
  {
    name: "Aranja",
    image: aranja,
    link: "#"
  },
  {
    name: "NFSports",
    image: "",
    link: "#"
  },
  {
    name: "Foodco",
    image: "",
    link: "#"
  },
  {
    name: "NFVÍ",
    image: "",
    link: "#"
  }
];

const ease = Expo.easeOut;

class Coop extends React.Component {
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
      1,
      {
        y: 0,
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
      <div className="Coop">
        <div className="Coop-container">
          <h2>Co-op</h2>
          <VisibilitySensor
            onChange={isVisible => this.onChange(isVisible)}
            active={!isVisible}
            intervalDelay={100}
            minTopValue={100}
            partialVisibility
          >
            <div
              className="Coop-list"
              ref={ref => {
                this.componentRef = ref;
              }}
            >
              {coops.map((coop, index) => (
                <a
                  href={`${coop.link}`}
                  target="_blank"
                  className="Coop-item"
                  key={index}
                  data-animate
                >
                  <img
                    className="Coop-image"
                    src={coop.image}
                    alt={coop.name}
                  />
                </a>
              ))}
            </div>
          </VisibilitySensor>
        </div>
      </div>
    );
  }
}

export default Coop;
