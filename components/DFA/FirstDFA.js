import { Badge, Box, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowHead, ArrowLoop, ArrowBody } from "./Arrows";
import Arrow from "@elsdoerfer/react-arrow";

const RArrow = chakra(Arrow);
const Atom = motion(Badge);

const variants = {
  initial: { y: "-50%", x: "-50%" },
  pulse: { scale: 5, transition: { duration: 0.6 } },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};

const FirstDFA = ({ currentNode, simulating }) => {
  return (
    <>
      {/* LETTERS */}
      {/* q2 q3 */}
      <Text size="label" top="15%" left="30%">
        b
      </Text>
      {/* q1 q2 */}
      <Text top="31%" left="14%" size="label">
        a
      </Text>
      {/* q2 t */}
      <Text top="31%" left="26%" size="label">
        a
      </Text>
      {/* q4 t */}
      <Text top="69%" left="26%" size="label">
        b
      </Text>
      {/* q5 t */}
      <Text top="69%" left="34%" size="label">
        a
      </Text>
      {/* q3 t */}
      <Text top="31%" left="34%" size="label">
        b
      </Text>
      {/* q1 q4 */}
      <Text top="69%" left="14%" size="label">
        b
      </Text>
      {/* q4 q5 */}
      <Text top="83%" left="30%" size="label">
        a
      </Text>
      {/* q5 q6 */}
      <Text top="69%" left="46%" size="label">
        b
      </Text>
      {/* q8 q6 */}
      <Text top="69%" left="54%" size="label">
        a
      </Text>
      {/* q8 q9 */}
      <Text top="69%" left="66%" size="label">
        b
      </Text>
      {/* q3 q6 */}
      <Text top="31%" left="46%" size="label">
        a
      </Text>
      {/* q6 q7 */}
      <Text top="31%" left="54%" size="label">
        b
      </Text>
      {/* q6 q6 */}
      <Text
        top={["45%", "45%", "50%", "50%", "50%", "50%"]}
        left={["40%", "40%", "42%", null, null, "44%"]}
        size="label"
      >
        a
      </Text>
      {/* q9 q10 */}
      <Text top="45%" left="80%" size="label">
        a,b
      </Text>
      {/* q7 q7 */}
      <Text
        top="19.5%"
        left={["71%", "71%", "68%", null, null, "66%"]}
        size="label"
      >
        b
      </Text>
      {/* q7 q8 */}
      <Text
        top="50%"
        left={["58.5%", "58.5%", "59%", null, null, "59%"]}
        size="label"
      >
        a
      </Text>
      {/* ARROW BODY */}
      {/* q2 q3 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["27%", "27%", "25%", "25%", "25%", "25%"]}
        left="30%"
        rotate="0"
      />
      {/* q9 q10 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="80%"
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["3em", "3em", "9em", "9em", "9em", "9em"]}
        top={["87%", "87%", "85%", "85%", "85%", "85%"]}
        left="30%"
      />
      {/* q7 q8 */}
      <ArrowBody
        w={["7em", "7em", "9em", "9em", "9em", "9em"]}
        top="50%"
        left={["55.5%", "55.5%", "58%", "58%", "58%", "58.5%"]}
        rotate="90"
      />
      {/* trap ul */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="58%"
        left={["27.5%", "27.5%", "30%", "30%", "30%", "30%"]}
        rotate={["60", "60", "50", "50", "50", "42"]}
      />
      {/* q6 ul */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="58%"
        left={["47%", "47%", "50%", "50%", "50%", "50%"]}
        rotate={["60", "60", "50", "50", "50", "42"]}
      />
      {/* trap ur */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="43%"
        left={["27.5%", "27.5%", "30%", "30%", "30%", "30%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q6 ur */}
      <ArrowBody
        w={["8em", "8em", "13em", "13em", "13em", "15em"]}
        top="43%"
        left={["47.5%", "47.5%", "50%", "50%", "50%", "50%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q1 q2 */}
      <ArrowBody
        w={["5em", "5em", "8em", "8em", "8em", "8em"]}
        top="31%"
        left={["11%", "11%", "14%", "14%", "14%", "14%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q8 q9 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["65%", "65%", "63%", "63%", "63%", "65%"]}
        left={["60%", "60%", "63%", "63%", "63%", "63%"]}
        rotate={["120", "120", "128", "128", "128", "136"]}
      />
      {/* q1 q4 */}
      <ArrowBody
        w={["5em", "5em", "8em", "8em", "8em", "8em"]}
        top="71%"
        left={["12%", "12%", "14%", "14%", "14%", "14%"]}
        rotate={["60", "60", "50", "50", "50", "42"]}
      />

      {/* ARROWS */}
      {/* q6 q6 */}
      <ArrowLoop
        top={["50%", "50%", "50%", null, null, "50%"]}
        left={["42.5%", "42.5%", "44.4%", null, null, "46%"]}
        rotate="360"
      />
      {/* q7 q7 */}
      <ArrowLoop
        top={["20%", "20%", "20%", null, null, "20%"]}
        left={["67.3%", "67.3%", "65.6%", null, null, "64%"]}
        rotate="180"
      />
      {/* q2 q3 */}
      <ArrowHead
        top={["19.6%", "19.6%", "20%", "20%", "20%", "20%"]}
        left={["34.3%", "34.3%", "35.3%", "35.3%", "35.3%", "36.6%"]}
      />
      {/* q4 q5 */}
      <ArrowHead
        top={["79.3%", "79.3%", "79.9%", "79.9%", "79.9%", "79.9%"]}
        left={["34.3%", "34.3%", "35.3%", "35.3%", "35.3%", "36.6%"]}
      />
      {/* q1 q2 */}
      <ArrowHead
        top={["29%", "29%", "29.2%", "29.2%", "29.2%", "27.7%"]}
        left={["17.2%", "17.2%", "17.6%", "17.6%", "17.6%", "17.3%"]}
        rotate={["-57", "-57", "-50", "-50", "-50", "-48"]}
      />
      {/* q1 q4 */}
      <ArrowHead
        top={["71%", "71%", "71.7%", "71.7%", "71.7%", "73.5%"]}
        left={["17.4%", "17.4%", "17.3%", "17.3%", "17.3%", "17.1%"]}
        rotate={["47", "47", "40", "40", "40", "40"]}
      />
      {/* q2 t */}
      <ArrowHead
        top={["41.6%", "41.6%", "41.7%", "41.7%", "41.7%", "42.6%"]}
        left={["27.3%", "27.3%", "27.1%", "27.1%", "27.1%", "27.3%"]}
        rotate={["47", "47", "40", "40", "40", "40"]}
      />
      {/* q4 t */}
      <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "59.3%", "59.3%", "58.5%"]}
        left={["27.4%", "27.4%", "27.3%", "27.3%", "27.3%", "27.5%"]}
        rotate={["-59", "-59", "-50", "-50", "-50", "-48"]}
      />
      {/* q5 t */}
      <ArrowHead
        top={["58.4%", "58.4%", "58.2%", "58.2%", "58.2%", "58.2%"]}
        left={["33.1%", "33.1%", "33.3%", "33.3%", "33.3%", "32.5%"]}
        rotate={["235", "235", "230", "230", "230", "230"]}
      />
      {/* q3 t */}
      <ArrowHead
        top={["42%", "42%", "42%", "42%", "42%", "42%"]}
        left={["33.2%", "33.2%", "33.2%", "33.2%", "33.2%", "32.5%"]}
        rotate={["130", "130", "130", "130", "130", "130"]}
      />
      {/* q3 q6 */}
      <ArrowHead
        top={["41.8%", "41.8%", "41.7%", "41.7%", "41.7%", "42.8%"]}
        left={["46.6%", "46.6%", "47.1%", "47.1%", "47.1%", "47.3%"]}
        rotate={["50", "50", "40", "40", "40", "40"]}
      />
      {/* q5 q6 */}
      <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "59.3%", "59.3%", "58.5%"]}
        left={["47.2%", "47.2%", "47.4%", "47.4%", "47.4%", "47.5%"]}
        rotate={["-59", "-59", "-50", "-50", "-50", "-48"]}
      />
      {/* q6 q7 */}
      <ArrowHead
        top={["29.6%", "29.6%", "29.2%", "29.2%", "29.2%", "27%"]}
        left={["57.8%", "57.8%", "57.9%", null, null, "57.3%"]}
        rotate={["-59", "-59", "-50", "-50", "-50", "-48"]}
      />
      {/* q7 q8 */}
      <ArrowHead
        top={["70%", "70%", "69.6%", null, null, "68.7%"]}
        left={["60.2%", "60.2%", "60.3%", null, null, "60.1%"]}
        rotate="90"
      />
      {/* q8 q6 */}
      <ArrowHead
        top={["59.3%", "59.3%", "58.3%", null, null, "58.3%"]}
        left={["52.8%", "52.8%", "53.3%", null, null, "52.5%"]}
        rotate={["240", "240", "230", "230", "230", "230"]}
      />
      {/* q8 q9 */}
      <ArrowHead
        top={["59.3%", "59.3%", "59.3%", "59.3%", "59.3%", "58.3%"]}
        left={["67.6%", "67.6%", "67.4%", null, null, "67.4%"]}
        rotate={["-64", "-64", "-50", "-50", "-50", "-48"]}
      />
      {/* q9 q10 */}
      <ArrowHead
        top={["50%", "50%", "49.7%", null, null, "49.7%"]}
        left={["84%", "84%", "85.2%", null, null, "86.6%"]}
      />
      <Atom
        variant="q1"
        variants={variants}
        initial="initial"
        animate={currentNode == 1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q1
      </Atom>
      <Atom
        variant="q2"
        variants={variants}
        initial="initial"
        animate={currentNode == 2 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q2
      </Atom>
      <Atom
        variant="q3"
        variants={variants}
        initial="initial"
        animate={currentNode == 3 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q3
      </Atom>
      <Atom
        variant="q4"
        variants={variants}
        initial="initial"
        animate={currentNode == 4 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q4
      </Atom>
      <Atom
        variant="q5"
        variants={variants}
        initial="initial"
        animate={currentNode == 5 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q5
      </Atom>
      <Atom
        variant="q6"
        variants={variants}
        initial="initial"
        animate={currentNode == 6 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q6
      </Atom>
      <Atom
        variant="q7"
        variants={variants}
        initial="initial"
        animate={currentNode == 7 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q7
      </Atom>
      <Atom
        variant="q8"
        variants={variants}
        initial="initial"
        animate={currentNode == 8 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q8
      </Atom>
      <Atom
        variant="q9"
        variants={variants}
        initial="initial"
        animate={currentNode == 9 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q9
      </Atom>
      <Atom
        variant="q10"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q10
      </Atom>
      <Atom
        variant="T"
        variants={variants}
        initial="initial"
        animate={currentNode == "T" ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        T
      </Atom>
    </>
  );
};

export default FirstDFA;
