import { Link } from "react-router-dom";
import profileImg from "../../data/media/images/profile.jpg";
import Header from "../../componets/Header";
import BtnAction from "../../componets/BtnAction";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
export default function About() {
  return (
    <div className="bg-slate-100 absolute md:static">
      <div className="flex flex-col lg:flex-row-reverse min-h-screen ">
        <div className="p-4 h-90vh md:h-screen mx-auto my-auto">
          <img
            className="max-h-full w-ful mx-auto object-cover"
            src={profileImg}
            alt="profile-img"
          />
        </div>
        <div className="p-4 max-w-lg mx-auto lg:w-1/2 lg:my-auto">
          <h2 className="text-2xl lg:text-4xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exerci
          </h2>
          <p className="py-8 text-gray-400 y-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            corrupti perspiciatis obcaecati maxime vitae totam necessitatibus
            nemo, et maiores facere alias, sunt sequi commodi quod dicta
            delectus ipsum? Excepturi, quae. Rem libero excepturi atque corporis
            itaque sapiente vel earum, quis saepe, quibusdam laborum fugiat ipsa
            inventore nobis quas quisquam nemo blanditiis? Sed dolore, assumenda
          </p>
          <div>
            <Link to={"/contact-us"}>
              <BtnAction field={"Contact Us"} className={"my-4"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
