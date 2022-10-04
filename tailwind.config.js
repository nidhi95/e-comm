module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        red_800: "#cd2626",
        light_green_A700: "#5bc82c",
        blue_A200: "#4285f4",
        yellow_400: "#fff866",
        yellow_A400: "#fff200",
        light_green_800: "#38ae04",
        red_A700: "#ed0006",
        gray_600: "#767177",
        gray_400: "#c8c8c0",
        gray_802: "#3b3b3b",
        blue_700: "#1f72cd",
        gray_803: "#3c4043",
        amber_500: "#fbbc04",
        lime_700: "#b7ac00",
        gray_800: "#3f3f32",
        amber_501: "#dab810",
        gray_801: "#4a4944",
        amber_700: "#f9a000",
        lime_900: "#937206",
        gray_200: "#ecece6",
        gray_201: "#e8e8e8",
        blue_50: "#d6e4ff",
        indigo_400: "#6c6bbd",
        indigo_A700: "#254edb",
        lime_901: "#938900",
        white_A700: "#ffffff",
        blue_A100: "#84a9ff",
        light_blue_600: "#0099df",
        red_500: "#ea4335",
        green_600: "#34a853",
        light_blue_800: "#0079be",
        black_900_1e: "#0000001e",
        light_green_900: "#3e4804",
        black_900: "#000000",
        yellow_700: "#fabf35",
        gray_903: "#2a2a16",
        gray_904: "#261e27",
        yellow_100: "#fffdcc",
        black_900_bf: "#000000bf",
        gray_301: "#dfe0e0",
        gray_500: "#92928a",
        gray_901: "#242424",
        gray_902: "#060d27",
        orange_A700: "#ff5e00",
        gray_900: "#23230d",
        bluegray_100: "#d5d3e0",
        orange_500: "#ff9900",
        gray_101: "#f5f5f2",
        gray_300: "#dedede",
        gray_100: "#f3f2f8",
        bluegray_900: "#353522",
        gray_600_b2: "#6b6b6bb2",
        white_A700_00: "#ffffff00",
        bluegray_700: "#394376",
        bluegray_500: "#637282",
        bluegray_101: "#d9d9d9",
        indigo_900: "#091a7a",
        indigo_901: "#102693",
        bluegray_901: "#133240",
      },
      borderRadius: {
        radius2: "2px",
        radius3: "3px",
        radius4: "4px",
        radius6: "6px",
        radius8: "8px",
        radius10: "10px",
        radius12: "12px",
        radius16: "16px",
        radius24: "24px",
        radius32: "32px",
        radius35: "35px",
        radius48: "48px",
        radius50: "50%",
        radius64: "64px",
        radius348: "3.48px",
      },
      borderWidth: { bw11: "11px", bw15: "1.5px", bw139: "1.39px" },
      letterSpacing: { ls1: "1px", ls2: "2px", ls3: "3px" },
      fontFamily: {
        inter: "Inter",
        rubik: "Rubik",
        lato: "Lato",
        montserrat: "Montserrat",
      },
      boxShadow: {
        bs: "0px 1px  0px 0px #dedede",
        bs2: "1px 0px  0px 0px #dedede",
        bs1: "0px 2.5px  4px 0px #0000001e",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff00,#6b6b6bb2,#242424)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
