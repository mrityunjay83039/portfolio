import React from "react";
import SkillCard from "./SkillCard";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReduxsaga,
  SiJest,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiCss3
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { FaGitSquare, FaGithub, FaHtml5 } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="min-h-[90vh] flex flex-wrap gap-8">
      <SkillCard skillIcon={<SiNodedotjs />} skillName="Node JS" />
      <SkillCard skillIcon={<SiExpress />} skillName="Express" />
      <SkillCard skillIcon={<SiMongodb />} skillName="Mongo DB" />
      <SkillCard skillIcon={<SiReact />} skillName="React JS" />
      <SkillCard skillIcon={<SiReduxsaga />} skillName="Redux" />
      <SkillCard skillIcon={<SiJest />} skillName="Jest" />
      <SkillCard skillIcon={<SiJavascript />} skillName="JavaScript" />
      <SkillCard skillIcon={<PiFileSql />} skillName="SQL" />
      <SkillCard skillIcon={<FaGitSquare />} skillName="GIT" />
      <SkillCard skillIcon={<FaGithub />} skillName="GitHub" />
      <SkillCard skillIcon={<SiTailwindcss />} skillName="Tailwind" />
      <SkillCard skillIcon={<SiBootstrap />} skillName="Bootstrap" />
      <SkillCard skillIcon={<FaHtml5 />} skillName="HTML" />
      <SkillCard skillIcon={<SiCss3 />} skillName="CSS" />
    </div>
  );
};

export default Skills;
