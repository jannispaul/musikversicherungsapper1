module.exports = {
  theme: {
    extend: {
      lineHeight: {
        tighter: "1.1"
      },
      colors: {
        light: "#F8F5FF",
        primary: "#6B46C1",
        "primary-light": "#F8F5FF",
        secondary: "#DB0086",
        "secondary-light": "#F7E9F9"
      },
      fontFamily: {
        sans: ["Space Grotesk", "Helvetica Neue", "Helvetica"],
        body: ["Space Grotesk", "Helvetica Neue", "Helvetica"]
      },
      fontSize: {
        x0p5: "min(max(14px, 1.5vw), 40px)",
        // x0p5: "1.5vw;",
        // x1: "calc(9.8px + (14 - 9.8) * ((100vw - 320px) / (2560 - 320)))",
        x1: "2vw;",
        // x1p5: "calc(12.8px + (23.60 - 12.8) * ((100vw - 320px) / (2560 - 320)))",
        x1p5: "3vw;",
        // x2: "calc(14.8px + (33.60 - 14.8) * ((100vw - 320px) / (2560 - 320)))",
        x2: "4vw;",
        // x3: "calc(17.8px + (56.88 - 17.8) * ((100vw - 320px) / (2560 - 320)))",
        x3: "6vw",
        // x4: "calc(18.8px + (85.32 - 18.8) * ((100vw - 320px) / (2560 - 320)))",
        x4: "8vw",
        x5: "calc(16px + (128 - 16) * ((100vw - 320px) / (2560 - 320)))",
        x6:
          "calc(24.32px + (194.56 - 24.32) * ((100vw - 320px) / (2560 - 320)))",
        x7:
          "calc(36.48px + (291.84 - 36.48) * ((100vw - 320px) / (2560 - 320)))",
        x8:
          "calc(54.72px + (437.76 - 54.72) * ((100vw - 320px) / (2560 - 320)))",
        x9:
          "calc(82.08px + (656.64 - 82.08) * ((100vw - 320px) / (2560 - 320)))"
      },
      spacing: {
        x0p25: "calc(100vw * 0.25/ 27)",
        x0p5: "calc(100vw * 0.5/ 27)",
        x1: "calc(100vw * 1/ 27)",
        x1p5: "calc(100vw * 1.5/ 27)",
        x2: "calc(100vw * 2 / 27)",
        x3: "calc(100vw * 3 / 27)",
        x4: "calc(100vw * 4 / 27)",
        x5: "calc(100vw * 5 / 27)",
        x6: "calc(100vw * 6 / 27)",
        x7: "calc(100vw * 7 / 27)",
        x8: "calc(100vw * 8 / 27)",
        x9: "calc(100vw * 9 / 27)",
        x10: "calc(100vw * 10 / 27)",
        x11: "calc(100vw * 11 / 27)",
        x12: "calc(100vw * 12 / 27)",
        x13: "calc(100vw * 13 / 27)",
        x14: "calc(100vw * 14 / 27)",
        x15: "calc(100vw * 15 / 27)",
        x16: "calc(100vw * 16 / 27)",
        x17: "calc(100vw * 17 / 27)",
        x18: "calc(100vw * 18 / 27)",
        x19: "calc(100vw * 19 / 27)",
        x20: "calc(100vw * 20 / 27)",
        x21: "calc(100vw * 21 / 27)",
        x22: "calc(100vw * 22 / 27)",
        x23: "calc(100vw * 23 / 27)",
        x24: "calc(100vw * 24 / 27)",
        x25: "calc(100vw * 25 / 27)",
        x26: "calc(100vw * 26 / 27)",
        x27: "calc(100vw * 27 / 27)"
      },
      margin: {
        "-2": "-2px"
      },
      flex: {
        half: "1 0 40%"
      },
      variants: {
        margin: ["responsive", "odd"]
      }
    }
  },
  variants: {},
  plugins: []
};
