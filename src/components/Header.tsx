import React from "react";
import Button from "./buttuns";
import Lottie from "react-lottie";
import animationData from "../animation/Animation.json";
import Container from "./container";
import { GoArrowRight } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";

function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const typeanimation = [
    "The enjoy cooking for Pastas",
    1000,
    "The enjoy cooking for Pizza",
    1000,
    "The enjoy cooking for Salad",
    1000,
    "The enjoy cooking for kebab",
    1000,
    "The enjoy cooking for Fastfood",
    1000,
  ];
  return (
    <Container>
      <div className="flex items-center justify-between gap-5 flex-wrap xl:h-[80vh]">
        <div className="flex flex-col items-start justify-center">
          <div className="p-2">
            <h1 className="font-bold xl:text-[1.7rem] text-xl mb-5 mt-4">
              <TypeAnimation
                sequence={typeanimation}
                speed={50}
                repeat={Infinity}
              />
            </h1>
              <p className="2xl:text-[1.5rem] text-[1rem] mb-8">
                More than 100 cooking lessons of different
                <br /> cuisines from different races Spend
                <br /> the experience of cooking differentdishes
              </p>
              <div className="flex items-center gap-4">
                <Button variant="login" className="p-3 text-xl">
                  Popular
                </Button>
                <Button variant="login" className="p-3 text-xl">
                  Veggie
                </Button>
                <GoArrowRight size={40} />
              </div>
          </div>
        </div>
        <div className="max-xl:hidden">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </Container>
  );
}

export default Header;
