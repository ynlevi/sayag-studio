import { motion } from "framer-motion";
import BtnAction from "../../componets/BtnAction";
import BtnSocial from "../../componets/BtnSocial";
import { useEffect, useRef, useState } from "react";
// icons
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Footer from "../../componets/Footer";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div className="bg-slate-100 w-full flex flex-col divide-secondary divide-y-2 px-4 gap-10 md:px20 lg:px-32">
        <Section
          castomCompo={<Location address={t("contact.location.address")} />}
          hl={t("contact.location.hl")}
        />
        <Section
          castomCompo={<Action />}
          hl={t("contact.action.hl")}
          castomUl={"flex gap-4 md:gap-20"}
        />
        <Section
          castomCompo={<Social />}
          castomUl={"flex justify-between mb-8 max-w-md mx-auto"}
        />
      </motion.div>
      <Footer className={"mt-8"} />
    </>
  );
}
//section
const Section = ({ castomCompo, castomUl, hl }) => (
  <motion.div className="pt-8">
    <h2 className="text-3xl mt-2 mb-8">{hl}</h2>
    <ul className={castomUl}>{castomCompo}</ul>
  </motion.div>
);

const Location = ({ address }) => (
  <>
    <li>
      <a className="my-4 block" href="https://goo.gl/maps/afUhMGiEkC2MkXTDA">
        {address}
      </a>
    </li>
    <li>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.725213585983!2d35.20972969999999!3d31.7507006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7e38c84bedd%3A0x47566a60d23d6788!2sHaUman%20St%2014%2C%20Jerusalem%2C%20Israel!5e0!3m2!1sen!2sth!4v1692089826089!5m2!1sen!2sth"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[50vh]  border border-secondary"
      />
    </li>
  </>
);
const Action = () => (
  <>
    {actionLinks.map(({ href, icon }) => (
      <li className="flex-1">
        <BtnAction
          href={href}
          className={"w-full py-3 md:py-4"}
          field={<div className="text-center flex justify-center">{icon}</div>}
        />
      </li>
    ))}
  </>
);
const Social = ({ castomUl }) => (
  <>
    {socialLinks.map(({ href, icon, castomUl }) => (
      <li className="w-fit">
        <BtnSocial icon={icon} href={href} />
      </li>
    ))}
  </>
);
//arrs
const socialLinks = [
  { href: "http://www.tiktok.com/@ofeksayag1", icon: <FaTiktok /> },
  {
    href: "https://www.facebook.com/profile.php?id=100004453303973&mibextid=LQQJ4d",
    icon: <FaFacebook />,
  },
  {
    href: "https://instagram.com/ofeksayag1?igshid=MmIzYWVlNDQ5Yg==",
    icon: <FaInstagram />,
  },
  { href: "https://youtube.com/@-ofeksayag5286", icon: <FaYoutube /> },
  {
    href: "https://wa.me/message/JRZN7IIVDCYSM1",
    icon: <FaWhatsapp />,
  },
];
const actionLinks = [
  { href: "mailto:sayagofek058@gmail.com", icon: <TfiEmail size={27} /> },
  { href: "tel:0587005838", icon: <BsTelephone size={24} /> },
];

// const targetRef = useRef(null);
// const scrollTo = () =>
//   targetRef.current.scrollIntoView({ behavior: "smooth", top: 10 });

// return (
//   <motion.div className="">
//     <div className="h-screen w-3/4 bg-lime-500"></div>
//     <p>
//       {" "}
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vitae
//       fugiat aliquam fuga asperiores quaerat delectus cum architecto ut
//       assumenda pariatur hic consectetur, mollitia molestias? Atque illo
//       ducimus iure esse.
//     </p>
//     <div ref={targetRef} className=" w-2/5 h-52 bg-red-400"></div>
//     <div className="h-screen w-40 bg-lime-300"></div>

//     <button className="h-8 relative z-40" onClick={scrollTo}>
//       click
//     </button>
//   </motion.div>
// );
