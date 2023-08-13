import { Link } from "react-router-dom";
import profileImg from "../../data/media/images/profile.jpg";
import Header from "../../componets/Header";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
export default function About() {
  <div className=" relative -z-10">
    <div className="p-4 bg-slate-100">
      <img src={profileImg} alt="profile-img " />
    </div>
    <div className="p-8">
      <h2 className="text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exerci
      </h2>
      <p className="text-gray-400 my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti
        perspiciatis obcaecati maxime vitae totam necessitatibus nemo, et
        maiores facere alias, sunt sequi commodi quod dicta delectus ipsum?
        Excepturi, quae. Rem libero excepturi atque corporis itaque sapiente vel
        earum, quis saepe, quibusdam laborum fugiat ipsa inventore nobis quas
        quisquam nemo blanditiis? Sed dolore, assumenda
      </p>
      <div>
        <Link to={"contact-as"}>contact</Link>
      </div>
    </div>
  </div>;
}
