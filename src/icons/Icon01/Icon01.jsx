/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Icon01 = ({ className }) => {
  return (
    <svg
      className={`icon-01 ${className}`}
      fill="none"
      height="100"
      viewBox="0 0 100 100"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="white" height="100" width="100" />
      <path
        className="path"
        clipRule="evenodd"
        d="M36.2622 39.2071L36.2633 39.2048L36.2674 39.1969L36.2694 39.1931L36.2744 39.1834C36.3312 39.0729 36.3902 38.9579 36.4513 38.8394C36.8032 38.1564 37.2272 37.3422 37.6638 36.56C38.1017 35.7756 38.5466 35.0339 38.9399 34.4917C39.1373 34.2195 39.313 34.01 39.4604 33.8722C39.534 33.8034 39.592 33.7606 39.6342 33.7367C39.6527 33.7261 39.6646 33.7213 39.6705 33.7192C39.7079 33.7222 39.8051 33.7425 39.9801 33.8078C40.1582 33.8742 40.3811 33.9731 40.6412 34.1C41.1605 34.3533 41.8044 34.7069 42.4901 35.1035C43.8601 35.8959 45.3765 36.8481 46.3543 37.4832L46.3691 37.4928L46.3849 37.501L46.9188 37.778L44.3642 39.7144C44.1537 39.874 44.1122 40.1718 44.2712 40.3819C44.432 40.5943 44.7364 40.6367 44.9501 40.4764L47.8819 38.2769C49.0349 38.8737 50.3034 39.5285 51.639 40.2157L49.1216 42.124C48.911 42.2836 48.8695 42.5814 49.0285 42.7915C49.1893 43.0039 49.4938 43.0463 49.7074 42.886L52.6048 40.7123C53.5774 41.2121 54.5783 41.7251 55.5897 42.2423L53.1283 44.1081C52.9178 44.2677 52.8763 44.5655 53.0353 44.7756C53.196 44.988 53.5005 45.0304 53.7141 44.8701L56.5577 42.7368C57.4988 43.2172 58.4443 43.6986 59.3801 44.1736L56.8489 46.0923C56.6383 46.2519 56.5968 46.5497 56.7558 46.7599C56.9165 46.9722 57.2211 47.0146 57.4346 46.8544L60.3515 44.6661C60.9439 44.966 61.5302 45.2623 62.1071 45.5529C62.5289 45.7655 62.9457 45.9752 63.356 46.1811L60.8555 48.0766C60.6449 48.2362 60.6034 48.5339 60.7624 48.7441C60.9231 48.9565 61.2277 48.9989 61.4413 48.8386L64.332 46.6699C65.4047 47.2061 66.4218 47.7111 67.3563 48.1701L64.862 50.0607C64.6516 50.2203 64.6101 50.5181 64.7694 50.7282C64.9301 50.9406 65.2344 50.983 65.4482 50.8227L68.3411 48.6521C68.6409 48.798 68.9295 48.9379 69.2064 49.0711C70.161 49.5309 70.9733 49.9123 71.5946 50.1899C72.1992 50.4601 72.6609 50.6495 72.8909 50.7018C73.8416 50.9182 75.7626 51.2038 77.6746 51.4857L77.8822 51.5164C79.739 51.7902 81.5606 52.0587 82.5158 52.2606C82.6392 52.2867 82.7731 52.3141 82.9149 52.3434C83.9494 52.5561 85.4422 52.8632 86.7982 53.4101C88.2681 54.0033 89.4477 54.8273 89.7904 55.9982C89.6592 56.0731 89.4901 56.1521 89.2807 56.2336C88.9586 56.3591 88.5639 56.4824 88.1134 56.602C87.2113 56.8412 86.1065 57.0603 84.9537 57.2542C82.6498 57.6417 80.1817 57.924 78.8207 58.0653C76.112 58.3465 59.0413 58.9129 56.0296 58.9129C54.5277 58.9129 45.3099 58.7007 36.2781 58.4882C34.6243 58.4493 32.9768 58.4104 31.3842 58.3728L31.3784 58.3726L31.3721 58.3725L31.3691 58.3724L31.3655 58.3723L31.3646 58.3723C24.2774 58.2049 18.2843 58.0633 17.6939 58.0633C16.6173 58.0633 12.9977 57.7201 11.0856 57.5242C10.8133 56.4723 10.4572 54.1054 10.8731 51.5413C11.4068 48.2516 11.8121 47.1947 12.2099 46.157C12.2367 46.0872 12.2635 46.0172 12.2903 45.9469C12.4988 45.3985 13.0288 44.2824 13.5524 43.1962C13.6474 42.9991 13.7423 42.8028 13.8348 42.6114C14.2438 41.7654 14.6065 41.0152 14.7282 40.715C14.7727 40.6052 14.8266 40.4611 14.8893 40.2929C15.047 39.8705 15.2614 39.2963 15.5277 38.7334C15.7117 38.3447 15.9107 37.984 16.1167 37.7084C16.2959 37.4686 16.452 37.3322 16.5751 37.2721C17.164 37.392 18.0279 37.5991 18.8202 37.8537C19.2399 37.9886 19.6317 38.1344 19.9492 38.2844C20.2786 38.4402 20.4838 38.5806 20.5743 38.6877C20.7356 38.8786 20.9477 39.1948 21.2004 39.593C21.3168 39.7764 21.4392 39.9731 21.5666 40.1778L21.5936 40.2212C21.7304 40.441 21.8726 40.6692 22.0172 40.8966C22.3058 41.3502 22.6083 41.8071 22.9046 42.1975C23.1959 42.5813 23.5017 42.9287 23.801 43.1395C24.3229 43.5072 25.3969 44.1648 26.6983 44.5865C27.9965 45.0073 29.5666 45.2073 31.0434 44.5941C33.2446 43.6801 34.7708 42.7811 35.2744 42.4335L35.4873 42.2866L35.4157 42.0395C35.3398 41.7775 35.2699 41.0236 35.6688 40.3351C35.7901 40.1257 36.0009 39.7155 36.2622 39.2071ZM89.5465 56.9025C89.8211 56.7955 90.0695 56.6789 90.2705 56.5496L90.2744 56.5524L90.2778 56.555C90.3202 56.5873 90.385 56.6573 90.424 56.8111C90.476 57.0169 90.6284 57.9374 90.8014 59.0373C90.9695 60.1085 91.1531 61.3197 91.2732 62.122C91.2564 62.2525 91.0733 62.7896 90.0673 63.1865C89.9395 63.2367 89.7904 63.2993 89.6174 63.3723L89.6168 63.3725C88.7928 63.7186 87.4178 64.2966 85.1725 64.89C82.4527 65.6088 78.4567 66.3489 72.6626 66.7016C63.372 67.2672 48.6132 67.3146 42.3923 67.2674H42.3895H17.2631C15.6803 67.2674 13.7215 66.7201 12.1658 66.0576C11.3902 65.7273 10.7325 65.3758 10.2841 65.0629C10.0583 64.9053 9.89999 64.7675 9.80597 64.6573C9.75282 64.595 9.73446 64.5587 9.72841 64.5448C9.77536 64.2575 9.83662 63.734 9.91096 63.0986C9.95302 62.7391 9.99927 62.3438 10.0495 61.9354C10.1927 60.7699 10.3701 59.4781 10.5809 58.5053C10.596 58.449 10.6334 58.36 10.6879 58.2921C10.7338 58.2348 10.7676 58.2197 10.7907 58.2165C12.6106 58.4051 16.5269 58.7821 17.6939 58.7821C18.2753 58.7821 24.2628 58.9235 31.3575 59.0911L31.3897 59.0919L31.4241 59.0927C32.9982 59.1299 34.6261 59.1683 36.2608 59.2068C45.2841 59.4191 54.5163 59.6317 56.0296 59.6317C59.0482 59.6317 76.1494 59.0654 78.8966 58.7802C80.2632 58.6382 82.7491 58.3542 85.0754 57.9628C86.2382 57.7673 87.3676 57.5439 88.301 57.2964C88.7671 57.1726 89.1903 57.0414 89.5465 56.9025ZM10.1566 51.4272C9.73301 54.0382 10.0718 56.4522 10.3629 57.6247C10.2623 57.6884 10.1812 57.7681 10.1193 57.8454C9.98633 58.0114 9.90947 58.2023 9.87577 58.3352L9.87427 58.3412L9.87297 58.3471C9.65377 59.3559 9.47265 60.6804 9.32906 61.8485C9.27608 62.2796 9.22844 62.687 9.18589 63.0509C9.1116 63.6861 9.05284 64.1887 9.00831 64.4522C8.96233 64.7243 9.11602 64.9623 9.25172 65.1214C9.40224 65.2977 9.61631 65.4762 9.86613 65.6505C10.369 66.0014 11.0753 66.3756 11.8791 66.7179C13.4821 67.4006 15.5435 67.9862 17.2631 67.9862H42.3881C48.6115 68.0333 63.3902 67.9863 72.7072 67.4191C78.5427 67.0638 82.5872 66.3171 85.3595 65.5845C87.659 64.9767 89.0837 64.3777 89.9037 64.0327L89.9043 64.0326C90.0729 63.9617 90.2158 63.9015 90.3358 63.8542C91.5718 63.3666 92 62.582 92 62.1043V62.0779L91.9961 62.0518C91.8766 61.2488 91.6896 60.0159 91.5182 58.9267C91.3491 57.8508 91.1905 56.8832 91.1274 56.636C91.018 56.2035 90.7573 55.9652 90.505 55.8615C90.0891 54.315 88.5941 53.3586 87.0717 52.7445C85.6493 52.1705 84.0867 51.8497 83.0573 51.6384C82.9166 51.6095 82.7865 51.5827 82.6676 51.5576C81.689 51.3509 79.8501 51.0798 78.0123 50.8089L77.7812 50.7748C75.853 50.4904 73.9689 50.2096 73.0533 50.0012C72.9093 49.9685 72.5213 49.8154 71.8927 49.5346C71.2809 49.2613 70.4759 48.8834 69.5235 48.4247C67.6193 47.5074 65.1328 46.2714 62.4362 44.9123C57.0498 42.1979 50.8289 38.9961 46.7374 36.8724C45.7525 36.2331 44.2333 35.2793 42.856 34.4827C42.1645 34.0828 41.5037 33.7195 40.9619 33.4552C40.6915 33.3232 40.4449 33.213 40.2358 33.1351C40.0401 33.0621 39.8336 33 39.6614 33C39.5125 33 39.3797 33.0527 39.2733 33.113C39.1649 33.1746 39.0606 33.2575 38.9623 33.3494C38.7659 33.533 38.5591 33.7848 38.3505 34.0723C37.9316 34.6497 37.4702 35.4213 37.0287 36.2122C36.5859 37.0054 36.1574 37.8284 35.8048 38.5127C35.7371 38.6443 35.6723 38.7702 35.611 38.8896L35.6103 38.8909C35.3496 39.3981 35.1508 39.7851 35.0393 39.9773C34.6123 40.7145 34.5921 41.4966 34.6625 41.9735C34.0562 42.3589 32.6774 43.1362 30.7628 43.9312C29.5115 44.4508 28.1383 44.2969 26.9239 43.9034C25.7127 43.5109 24.7047 42.894 24.2216 42.5538C24.0184 42.4106 23.7678 42.1385 23.4847 41.7656C23.2067 41.3993 22.9169 40.9624 22.6313 40.5133C22.4887 40.2893 22.3483 40.0639 22.2114 39.844L22.1839 39.7998C22.057 39.596 21.9329 39.3966 21.8149 39.2105C21.565 38.8167 21.3285 38.4602 21.1308 38.2264C20.9342 37.9936 20.6069 37.7989 20.2618 37.6357C19.9047 37.4669 19.4799 37.31 19.0442 37.17C18.172 36.8897 17.2245 36.6669 16.616 36.5469L16.5301 36.53L16.4459 36.5537C16.0747 36.6583 15.7717 36.962 15.5334 37.2807C15.2862 37.6114 15.0635 38.0207 14.8705 38.4284C14.5899 39.0215 14.3514 39.6601 14.1929 40.0846C14.136 40.237 14.0894 40.3619 14.0548 40.4471C13.9427 40.7233 13.5958 41.4411 13.1874 42.286L13.187 42.2869C13.093 42.4813 12.9958 42.6825 12.8975 42.8865C12.3801 43.9597 11.8333 45.1093 11.6111 45.6936C11.5852 45.7617 11.5593 45.8293 11.5334 45.897C11.1214 46.9727 10.7013 48.0697 10.1566 51.4272ZM41.7418 62.6643C41.4335 62.6643 41.1836 62.9118 41.1836 63.2172C41.1836 63.5226 41.4335 63.7701 41.7418 63.7701C42.0502 63.7701 42.3001 63.5226 42.3001 63.2172C42.3001 62.9118 42.0502 62.6643 41.7418 62.6643ZM42.8583 63.2172C42.8583 62.9118 43.1083 62.6643 43.4166 62.6643C43.7249 62.6643 43.9749 62.9118 43.9749 63.2172C43.9749 63.5226 43.7249 63.7701 43.4166 63.7701C43.1083 63.7701 42.8583 63.5226 42.8583 63.2172ZM45.0914 62.6643C44.783 62.6643 44.5331 62.9118 44.5331 63.2172C44.5331 63.5226 44.783 63.7701 45.0914 63.7701C45.3997 63.7701 45.6496 63.5226 45.6496 63.2172C45.6496 62.9118 45.3997 62.6643 45.0914 62.6643ZM46.2079 63.2172C46.2079 62.9118 46.4578 62.6643 46.7661 62.6643C47.0745 62.6643 47.3244 62.9118 47.3244 63.2172C47.3244 63.5226 47.0745 63.7701 46.7661 63.7701C46.4578 63.7701 46.2079 63.5226 46.2079 63.2172ZM48.4409 62.6643C48.1326 62.6643 47.8827 62.9118 47.8827 63.2172C47.8827 63.5226 48.1326 63.7701 48.4409 63.7701C48.7492 63.7701 48.9992 63.5226 48.9992 63.2172C48.9992 62.9118 48.7492 62.6643 48.4409 62.6643Z"
        fill="#02021D"
        fillRule="evenodd"
      />
    </svg>
  );
};
