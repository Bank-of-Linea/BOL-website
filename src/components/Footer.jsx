import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col w-full`}>
    <div
      className={`${styles.flexStart} md:flex-row flex-col mb-6 w-full pt-4 border-t-[6px] border-t-[#3F3E45]`}
    >
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <img
          src={logo}
          alt="Bank of Linea"
          className="w-full max-w-[50px] sm:max-w-[100px] h-auto object-contain"
          loading="lazy"
        />
        <p
          className={`${styles.paragraph} mt-3 max-w-[90%] sm:max-w-[600px] text-base sm:text-lg md:text-xl text-white`}
        >
          The Dawn of Something Epic!
        </p>
      </div>

      {/* Uncomment and make responsive if needed */}
      {/* <div className="flex-[1.5] w-full flex flex-row justify-center flex-wrap md:mt-0 mt-8 px-4 gap-4">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="flex flex-col my-4 min-w-[120px] px-2">
            <h4 className="font-poppins font-medium text-sm sm:text-base md:text-lg leading-[1.5] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-3">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-xs sm:text-sm md:text-base leading-[1.5] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-2 sm:mb-3" : "mb-0"
                  }`}
                >
                  <a href={link.href || "#"}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-4 border-t-[1px] border-t-[#3F3E45] px-4">
      <p className="font-poppins font-normal text-center text-sm sm:text-base md:text-lg leading-[1.5] text-white">
        Copyright Ⓒ {new Date().getFullYear()} Bank of Linea. All Rights Reserved.
      </p>

      <p className="font-poppins font-normal text-center text-sm sm:text-base md:text-lg leading-[1.5] text-white">
        Contact: <a href="mailto:devs@bankoflinea.build">devs@bankoflinea.build</a>
      </p>

      <div className="flex flex-row md:mt-0 mt-4 gap-3 sm:gap-4">
        {socialMedia.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <img
              src={social.icon}
              alt={`${social.id} icon`}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;