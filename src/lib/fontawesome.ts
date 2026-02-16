import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowRight,
  faEnvelope,
  faPhone,
  faLocationDot,
  faHeart,
  faShieldHalved,
  faPeopleGroup,
  faGraduationCap,
  faCalendarCheck,
  faPaperPlane,
  faCheck,
  faQuoteLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Prevent FA from adding its CSS since we import it manually above
config.autoAddCss = false;

library.add(
  faArrowRight,
  faEnvelope,
  faPhone,
  faLocationDot,
  faHeart,
  faShieldHalved,
  faPeopleGroup,
  faGraduationCap,
  faCalendarCheck,
  faPaperPlane,
  faCheck,
  faQuoteLeft,
  faStar,
  faWhatsapp
);
