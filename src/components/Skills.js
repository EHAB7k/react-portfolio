import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import bash from "../assets/skills/bash.svg";
import linux from "../assets/skills/linux.svg";
import python from "../assets/skills/python.svg";
import reactIcon from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import windows from "../assets/skills/windows.svg";
import cisco from "../assets/skills/cisco.svg";
import git from "../assets/skills/git.svg";
import swift from "../assets/skills/swift-vertical.svg";
import hr from "../assets/curve-hr.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const Skills = [
    {
      name: "linux",
      img: linux,
    },
    {
      name: "bash",
      img: bash,
    },
    {
      name: "python",
      img: python,
    },
    {
      name: "javascript",
      img: javascript,
    },
    {
      name: "react",
      img: reactIcon,
    },
    {
      name: "tailwind",
      img: tailwind,
    },
    {
      name: "swift",
      img: swift,
    },
    {
      name: "windows",
      img: windows,
    },
    {
      name: "cisco",
      img: cisco,
    },
    {
      name: "git",
      img: git,
    },
  ];

  return (
    <div id="skills" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          {Skills.map((item, i) => {
            return (
              <SkillCard
                key={i}
                name={item.name}
                experience="1 years"
                img={item.img}
              />
            );
          })}
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
