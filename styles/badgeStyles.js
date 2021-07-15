export const Badge = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    node: {
      bg: "gray.700",
      color: ["gray.200", null, "gray.200"],

      // h: ["2em", "2em", "3.5em", "3.5em"],
      h: "3.5em",
      w: "3.5em",
      // w: ["2em", "2em", "3.5em", "3.5em"],

      boxShadow: "xl",
      border: "2px",
      rounded: "50%",

      pos: "absolute",
      transform: "auto",
      translateX: "-50%",
      translateY: "-50%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textTransform: "none",
      fontSize: ["0.6em", "0.6em", "1em", "1em", "1em", "1.1em"],
      fontWeight: "500",
    },
  },
  variants: {
    q1: {
      top: "50%",
      left: "10%",

      borderColor: "blue.300",
    },
    q2: {
      top: "20%",
      left: "20%",

      borderColor: "orange.300",
    },
    q3: {
      top: "20%",
      left: "40%",

      borderColor: "purple.300",
    },
    q4: {
      top: "80%",
      left: "20%",

      borderColor: "orange.300",
    },
    q5: {
      top: "80%",
      left: "40%",

      borderColor: "purple.300",
    },
    q6: {
      top: "50%",
      left: "50%",

      borderColor: "orange.300",
    },
    q7: {
      top: "20%",
      left: "60%",

      borderColor: "orange.300",
    },
    q8: {
      top: "80%",
      left: "60%",

      borderColor: "orange.300",
    },
    q9: {
      top: "50%",
      left: "70%",

      borderColor: "purple.300",
    },
    q10: {
      top: "50%",
      left: "90%",

      borderColor: "teal.300",
    },
    T: {
      top: "50%",
      left: "30%",

      borderColor: "pink.300",
    },
    1: {
      top: "15%",
      left: "70%",

      borderColor: "orange.300",
    },
    2: {
      top: "50%",
      left: "70%",

      borderColor: "purple.300",
    },
    3: {
      top: "85%",
      left: "70%",

      borderColor: "orange.300",
    },
    4: {
      top: "50%",
      left: "50%",

      borderColor: "orange.300",
    },
    5: {
      top: "50%",
      left: "90%",

      borderColor: "teal.300",
    },
    6: {
      top: "85%",
      left: "50%",

      borderColor: "purple.300",
    },
    7: {
      top: "50%",
      left: "30%",

      borderColor: "purple.300",
    },
    8: {
      top: "50%",
      left: "10%",

      borderColor: "blue.300",
    },
  },
  defaultProps: {
    size: "node",
  },
};
