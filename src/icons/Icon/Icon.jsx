/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Icon = ({ className }) => {
  return (
    <svg
      className={`icon ${className}`}
      fill="none"
      height="150"
      viewBox="0 0 150 150"
      width="150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="white" height="150" width="150" />
      <path
        className="path"
        clipRule="evenodd"
        d="M54.3932 58.8107L54.395 58.8073L54.4011 58.7954L54.404 58.7896L54.4116 58.7751C54.4967 58.6093 54.5853 58.4369 54.6769 58.2591C55.2047 57.2346 55.8407 56.0133 56.4957 54.84C57.1526 53.6634 57.8199 52.5508 58.4098 51.7376C58.706 51.3293 58.9695 51.015 59.1906 50.8083C59.3011 50.7051 59.3881 50.6409 59.4513 50.605C59.4791 50.5892 59.4969 50.5819 59.5057 50.5788C59.5619 50.5833 59.7077 50.6138 59.9701 50.7116C60.2373 50.8112 60.5717 50.9596 60.9618 51.1499C61.7407 51.53 62.7066 52.0604 63.7351 52.6552C65.7902 53.8438 68.0648 55.2722 69.5315 56.2247L69.5537 56.2392L69.5773 56.2514L70.3782 56.6669L66.5464 59.5716C66.2306 59.8111 66.1683 60.2577 66.4069 60.5728C66.6479 60.8915 67.1047 60.9551 67.4251 60.7147L71.8229 57.4153C73.5523 58.3105 75.4551 59.2928 77.4585 60.3235L73.6824 63.186C73.3665 63.4254 73.3043 63.8721 73.5428 64.1872C73.7839 64.5059 74.2407 64.5695 74.5611 64.329L78.9072 61.0685C80.3661 61.8181 81.8674 62.5877 83.3845 63.3634L79.6925 66.1622C79.3767 66.4015 79.3144 66.8482 79.5529 67.1634C79.794 67.482 80.2508 67.5456 80.5712 67.3052L84.8365 64.1052C86.2483 64.8258 87.6665 65.5479 89.0702 66.2604L85.2733 69.1385C84.9574 69.3779 84.8952 69.8245 85.1337 70.1398C85.3748 70.4584 85.8316 70.522 86.152 70.2816L90.5273 66.9991C91.4158 67.4489 92.2954 67.8934 93.1606 68.3294C93.7934 68.6483 94.4186 68.9627 95.034 69.2716L91.2832 72.1149C90.9674 72.3542 90.9051 72.8009 91.1436 73.1161C91.3847 73.4348 91.8415 73.4984 92.1619 73.2579L96.4979 70.0049C98.107 70.8092 99.6327 71.5667 101.034 72.2552L97.293 75.091C96.9774 75.3304 96.9152 75.7771 97.154 76.0923C97.3952 76.4109 97.8516 76.4745 98.1723 76.2341L102.512 72.9782C102.961 73.1971 103.394 73.4068 103.81 73.6066C105.242 74.2964 106.46 74.8685 107.392 75.2849C108.299 75.6901 108.991 75.9743 109.336 76.0526C110.762 76.3773 113.644 76.8056 116.512 77.2286L116.823 77.2746C119.609 77.6853 122.341 78.088 123.774 78.3908C123.959 78.43 124.16 78.4712 124.372 78.5151C125.924 78.8341 128.163 79.2948 130.197 80.1152C132.402 81.0049 134.171 82.241 134.686 83.9973C134.489 84.1096 134.235 84.2282 133.921 84.3505C133.438 84.5387 132.846 84.7236 132.17 84.903C130.817 85.2619 129.16 85.5905 127.431 85.8812C123.975 86.4626 120.273 86.886 118.231 87.098C114.168 87.5197 88.562 88.3694 84.0444 88.3694C81.7915 88.3694 67.9648 88.0511 54.4171 87.7323C51.9364 87.674 49.4651 87.6156 47.0762 87.5592L47.0676 87.5589L47.0582 87.5587L47.0536 87.5586L47.0483 87.5585L47.0469 87.5584C36.4161 87.3073 27.4264 87.095 26.5408 87.095C24.926 87.095 19.4965 86.5802 16.6284 86.2863C16.22 84.7084 15.6857 81.1581 16.3097 77.312C17.1103 72.3775 17.7181 70.7921 18.3149 69.2355C18.355 69.1308 18.3953 69.0258 18.4354 68.9203C18.7482 68.0977 19.5432 66.4236 20.3286 64.7943C20.4711 64.4987 20.6135 64.2042 20.7523 63.9171C21.3657 62.6481 21.9097 61.5227 22.0924 61.0725C22.1591 60.9078 22.2398 60.6917 22.3339 60.4394C22.5705 59.8058 22.8921 58.9444 23.2915 58.1001C23.5675 57.517 23.866 56.976 24.175 56.5627C24.4439 56.2029 24.678 55.9983 24.8627 55.9082C25.746 56.088 27.0418 56.3986 28.2303 56.7805C28.8599 56.9829 29.4476 57.2016 29.9238 57.4267C30.4179 57.6603 30.7256 57.8709 30.8615 58.0315C31.1035 58.3179 31.4216 58.7922 31.8006 59.3895C31.9752 59.6647 32.1587 59.9596 32.3498 60.2666L32.3904 60.3318C32.5956 60.6615 32.8089 61.0038 33.0258 61.3448C33.4588 62.0253 33.9125 62.7107 34.357 63.2963C34.7938 63.8719 35.2526 64.3931 35.7015 64.7093C36.4844 65.2609 38.0953 66.2472 40.0474 66.8798C41.9948 67.5109 44.35 67.811 46.5651 66.8912C49.8668 65.5201 52.1562 64.1717 52.9116 63.6502L53.2309 63.4298L53.1236 63.0593C53.0097 62.6662 52.9049 61.5353 53.5032 60.5027C53.6852 60.1885 54.0014 59.5732 54.3932 58.8107ZM134.32 85.3538C134.732 85.1933 135.104 85.0183 135.406 84.8244L135.412 84.8286L135.417 84.8326C135.48 84.881 135.577 84.986 135.636 85.2166C135.714 85.5254 135.943 86.906 136.202 88.556C136.454 90.1628 136.73 91.9795 136.91 93.1831C136.885 93.3787 136.61 94.1845 135.101 94.7797C134.909 94.8551 134.686 94.949 134.426 95.0584L134.425 95.0588C133.189 95.5779 131.127 96.4449 127.759 97.335C123.679 98.4132 117.685 99.5234 108.994 100.052C95.058 100.901 72.9199 100.972 63.5884 100.901H63.5842H25.8946C23.5204 100.901 20.5823 100.08 18.2486 99.0864C17.0853 98.591 16.0987 98.0637 15.4262 97.5944C15.0875 97.358 14.85 97.1512 14.709 96.986C14.6292 96.8926 14.6017 96.8381 14.5926 96.8173C14.663 96.3863 14.7549 95.601 14.8664 94.6478C14.9295 94.1087 14.9989 93.5157 15.0742 92.9031C15.2891 91.1549 15.5551 89.2171 15.8714 87.7579C15.8941 87.6735 15.9502 87.54 16.0318 87.4382C16.1006 87.3522 16.1514 87.3296 16.186 87.3248C18.9159 87.6077 24.7903 88.1732 26.5408 88.1732C27.4129 88.1732 36.3942 88.3853 47.0363 88.6367L47.0845 88.6379L47.1361 88.6391C49.4973 88.6949 51.9391 88.7525 54.3912 88.8102C67.9261 89.1287 81.7744 89.4476 84.0444 89.4476C88.5723 89.4476 114.224 88.5981 118.345 88.1703C120.395 87.9574 124.124 87.5312 127.613 86.9443C129.357 86.6509 131.051 86.3158 132.451 85.9445C133.151 85.7589 133.785 85.5621 134.32 85.3538ZM15.2349 77.1409C14.5995 81.0573 15.1077 84.6783 15.5444 86.4371C15.3934 86.5326 15.2718 86.6521 15.179 86.768C14.9795 87.0171 14.8642 87.3034 14.8137 87.5028L14.8114 87.5117L14.8094 87.5207C14.4807 89.0339 14.209 91.0205 13.9936 92.7728C13.9141 93.4194 13.8427 94.0305 13.7788 94.5763C13.6674 95.5292 13.5793 96.2831 13.5125 96.6783C13.4435 97.0865 13.674 97.4435 13.8776 97.6821C14.1034 97.9465 14.4245 98.2144 14.7992 98.4758C15.5535 99.0021 16.6129 99.5634 17.8186 100.077C20.2231 101.101 23.3153 101.979 25.8946 101.979H63.5821C72.9172 102.05 95.0854 101.979 109.061 101.129C117.814 100.596 123.881 99.4757 128.039 98.3767C131.489 97.4651 133.626 96.5665 134.856 96.0491L134.856 96.0488C135.109 95.9425 135.324 95.8523 135.504 95.7814C137.358 95.0499 138 93.873 138 93.1565V93.1169L137.994 93.0777C137.815 91.8732 137.534 90.0239 137.277 88.3901C137.024 86.7762 136.786 85.3248 136.691 84.954C136.527 84.3053 136.136 83.9478 135.757 83.7923C135.134 81.4725 132.891 80.0379 130.608 79.1167C128.474 78.2558 126.13 77.7745 124.586 77.4575C124.375 77.4142 124.18 77.3741 124.001 77.3364C122.534 77.0263 119.775 76.6197 117.018 76.2133L116.672 76.1622C113.779 75.7356 110.953 75.3144 109.58 75.0018C109.364 74.9527 108.782 74.7231 107.839 74.302C106.921 73.8919 105.714 73.325 104.285 72.637C101.429 71.2611 97.6992 69.407 93.6543 67.3684C85.5748 63.2969 76.2433 58.4942 70.1061 55.3087C68.6287 54.3496 66.35 52.919 64.284 51.7241C63.2467 51.1242 62.2555 50.5793 61.4429 50.1828C61.0372 49.9848 60.6674 49.8195 60.3537 49.7026C60.0602 49.5931 59.7504 49.5 59.4921 49.5C59.2688 49.5 59.0695 49.579 58.91 49.6695C58.7473 49.7619 58.591 49.8863 58.4435 50.0241C58.1489 50.2995 57.8386 50.6771 57.5257 51.1085C56.8974 51.9746 56.2053 53.132 55.543 54.3183C54.8788 55.5081 54.2361 56.7426 53.7072 57.769C53.6056 57.9665 53.5084 58.1554 53.4165 58.3343L53.4155 58.3363C53.0244 59.0972 52.7262 59.6776 52.559 59.966C51.9184 61.0717 51.8882 62.2449 51.9938 62.9602C51.0843 63.5383 49.0161 64.7043 46.1442 65.8968C44.2673 66.6762 42.2074 66.4453 40.3859 65.855C38.5691 65.2663 37.057 64.3411 36.3324 63.8307C36.0275 63.6159 35.6517 63.2078 35.2271 62.6484C34.8101 62.0989 34.3754 61.4435 33.9469 60.77C33.7331 60.434 33.5224 60.0959 33.3171 59.766L33.2758 59.6998C33.0856 59.394 32.8994 59.095 32.7223 58.8158C32.3475 58.225 31.9927 57.6903 31.6962 57.3395C31.4012 56.9905 30.9104 56.6983 30.3927 56.4536C29.857 56.2004 29.2198 55.965 28.5663 55.755C27.258 55.3345 25.8367 55.0004 24.9241 54.8204L24.7952 54.795L24.6688 54.8306C24.1121 54.9875 23.6575 55.4429 23.3 55.9211C22.9292 56.4171 22.5952 57.031 22.3058 57.6426C21.8849 58.5323 21.5271 59.4902 21.2893 60.127C21.204 60.3556 21.134 60.5428 21.0822 60.6706C20.9141 61.085 20.3937 62.1617 19.7812 63.429L19.7805 63.4304C19.6396 63.722 19.4937 64.0238 19.3462 64.3297C18.5702 65.9395 17.7499 67.6639 17.4166 68.5404C17.3778 68.6425 17.3389 68.7439 17.3001 68.8455C16.6821 70.4591 16.052 72.1046 15.2349 77.1409ZM62.6128 93.9964C62.1503 93.9964 61.7754 94.3678 61.7754 94.8258C61.7754 95.2839 62.1503 95.6552 62.6128 95.6552C63.0752 95.6552 63.4501 95.2839 63.4501 94.8258C63.4501 94.3678 63.0752 93.9964 62.6128 93.9964ZM64.2875 94.8258C64.2875 94.3678 64.6624 93.9964 65.1249 93.9964C65.5874 93.9964 65.9623 94.3678 65.9623 94.8258C65.9623 95.2839 65.5874 95.6552 65.1249 95.6552C64.6624 95.6552 64.2875 95.2839 64.2875 94.8258ZM67.6371 93.9964C67.1746 93.9964 66.7997 94.3678 66.7997 94.8258C66.7997 95.2839 67.1746 95.6552 67.6371 95.6552C68.0995 95.6552 68.4744 95.2839 68.4744 94.8258C68.4744 94.3678 68.0995 93.9964 67.6371 93.9964ZM69.3118 94.8258C69.3118 94.3678 69.6867 93.9964 70.1492 93.9964C70.6117 93.9964 70.9866 94.3678 70.9866 94.8258C70.9866 95.2839 70.6117 95.6552 70.1492 95.6552C69.6867 95.6552 69.3118 95.2839 69.3118 94.8258ZM72.6614 93.9964C72.1989 93.9964 71.824 94.3678 71.824 94.8258C71.824 95.2839 72.1989 95.6552 72.6614 95.6552C73.1239 95.6552 73.4988 95.2839 73.4988 94.8258C73.4988 94.3678 73.1239 93.9964 72.6614 93.9964Z"
        fill="#02021D"
        fillRule="evenodd"
      />
    </svg>
  );
};