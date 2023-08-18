import { useTranslation } from "react-i18next";
export default function Footer({ className }) {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-fit">
      <a
        href="https://ynlevi.github.io/CV/"
        className={`w-fit text-xs sm:text-sm  text-primary py-1 ${className}`}
      >
        {t("footer.a") + " " + currentYear}
      </a>
    </div>
  );
}
const currentYear = new Date().getFullYear();
