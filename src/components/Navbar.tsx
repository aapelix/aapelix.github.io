import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div initial={{ y: -200 }} animate={{ y: 0 }}>
      <svg
        width="1244"
        height="425"
        viewBox="0 0 1244 425"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-52 h-min fixed top-3 left-4 duration-300 lg:left-12"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <rect
          x="87.1026"
          y="65"
          width="50.7936"
          height="301"
          rx="25.3968"
          transform="rotate(12.4911 87.1026 65)"
          fill="#DEECF6"
        />
        <rect
          x="245.364"
          y="65"
          width="50.7936"
          height="301"
          rx="25.3968"
          transform="rotate(14.5 245.364 65)"
          fill="#DEECF6"
        />
        <rect
          x="1195.14"
          y="67.0824"
          width="50.7936"
          height="302.053"
          rx="25.3968"
          transform="rotate(18.6683 1195.14 67.0824)"
          fill="#DEECF6"
        />
        <path
          d="M85.3306 107.256C81.8343 93.6728 90.0116 79.8269 103.595 76.3306C117.179 72.8343 131.025 81.0116 134.521 94.5951L156.353 179.415C159.849 192.999 151.672 206.844 138.088 210.341C124.505 213.837 110.659 205.66 107.163 192.076L85.3306 107.256Z"
          fill="#DEECF6"
        />
        <path
          d="M240.359 102.306C236.847 88.726 245.008 74.8707 258.588 71.3589C272.167 67.847 286.023 76.0084 289.535 89.5878L348.982 319.453C352.494 333.033 344.332 346.888 330.753 350.4C317.173 353.912 303.318 345.75 299.806 332.171L240.359 102.306Z"
          fill="#DEECF6"
        />
        <path
          d="M1109.86 105.685C1105.62 92.3149 1113.02 78.0389 1126.39 73.7983C1139.76 69.5578 1154.03 76.9586 1158.27 90.3285L1233.77 328.36C1238.01 341.73 1230.61 356.006 1217.24 360.246C1203.87 364.487 1189.59 357.086 1185.35 343.716L1109.86 105.685Z"
          fill="#DEECF6"
        />
        <path
          d="M395 98.3968C395 84.3706 406.371 73 420.397 73C434.423 73 445.794 84.3706 445.794 98.3968V348.603C445.794 362.629 434.423 374 420.397 374C406.371 374 395 362.63 395 348.603V98.3968Z"
          fill="#DEECF6"
        />
        <path
          d="M624 94.3968C624 80.3705 635.371 69 649.397 69C663.423 69 674.794 80.3705 674.794 94.3968V344.603C674.794 358.629 663.423 370 649.397 370C635.371 370 624 358.629 624 344.603V94.3968Z"
          fill="#DEECF6"
        />
        <path
          d="M848 94.3968C848 80.3705 859.371 69 873.397 69C887.423 69 898.794 80.3705 898.794 94.3968V344.603C898.794 358.629 887.423 370 873.397 370C859.371 370 848 358.629 848 344.603V94.3968Z"
          fill="#DEECF6"
        />
        <path
          d="M1028 94.3968C1028 80.3705 1039.37 69 1053.4 69C1067.42 69 1078.79 80.3705 1078.79 94.3968V344.603C1078.79 358.629 1067.42 370 1053.4 370C1039.37 370 1028 358.629 1028 344.603V94.3968Z"
          fill="#DEECF6"
        />
        <rect x="624" y="69" width="194" height="49" rx="24.5" fill="#DEECF6" />
        <rect
          x="635"
          y="201"
          width="150"
          height="49"
          rx="24.5"
          fill="#DEECF6"
        />
        <rect
          x="848"
          y="321"
          width="150"
          height="49"
          rx="24.5"
          fill="#DEECF6"
        />
        <rect
          x="635"
          y="321"
          width="183"
          height="49"
          rx="24.5"
          fill="#DEECF6"
        />
        <path
          d="M581.5 188.5C581.5 266 494.5 313.5 419.5 293.5C346.26 273.969 522.392 246.544 530.698 184.065C531.097 181.065 530.625 177.965 529.515 175.15C507.705 119.819 399.082 143.179 408.247 92.5648C410.363 80.874 422.449 74.3421 434.295 75.2508C500.835 80.3553 581.5 112.082 581.5 188.5Z"
          fill="#DEECF6"
        />
        <rect width="362" height="51" rx="25.5" fill="#DEECF6" />
        <rect y="374" width="362" height="51" rx="25.5" fill="#DEECF6" />
      </svg>
      <div className="relative overflow-hidden top-0 h-20 sm:hidden">
        <div className="float-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <a
            href=""
            className="float-left p-14 text-center text-3xl no-underline rounded duration-300 hover:-translate-y-3"
          >
            Home
          </a>
          <a
            href=""
            className="float-left p-14 text-center text-3xl no-underline rounded duration-300 hover:-translate-y-3"
          >
            Api
          </a>
          <a
            href=""
            className="float-left p-14 text-center text-3xl no-underline rounded duration-300 hover:-translate-y-3"
          >
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
