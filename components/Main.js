import {
  Flex,
  Input,
  Button,
  Text,
  useToast,
  Heading,
  Box,
  Divider,
  Tag,
  Code,
} from "@chakra-ui/react";

import { CgChevronRight } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

import FirstDFA from "./DFA/FirstDFA";
import SecondDFA from "./DFA/SecondDFA";

const Main = () => {
  class Node {
    constructor(nodeNumber, direction1, direction2) {
      this.nodeNumber = nodeNumber;
      this.direction = [direction1, direction2];
    }
  }

  class DFA {
    constructor(input, problem, language) {
      this.input = input;
      this.problem = problem;
      this.language = language;

      this.currentNode = 1;
      this.currentInputPos = -1;
      this.path = [1];

      this.node();
    }
    node() {
      this.currentInputPos += 1;
      if (this.currentInputPos == "T") {
        this.result = "Invalid";
        // console.log("Invalid String TRAP");
        // console.log("Path Taken:", this.path);
      } else {
        if (
          this.currentNode < this.problem.length &&
          this.input[this.currentInputPos] != undefined
        ) {
          let node = this.problem[this.currentNode - 1];
          // console.log(this.path, this.input[this.currentInputPos]);

          if (
            this.input[this.currentInputPos] == "a" ||
            this.input[this.currentInputPos] == "b" ||
            this.input[this.currentInputPos] == "0" ||
            this.input[this.currentInputPos] == "1"
          ) {
            this.currentNode =
              node.direction[
                this.language.indexOf(this.input[this.currentInputPos])
              ];

            // console.log(`currentNode: ${this.currentNode}`);
            // console.log(
            //   `node.direction[]: ${this.language.indexOf(
            //     this.input[this.currentInputPos]
            //   )}`
            // );
            this.currentNode != undefined && this.path.push(this.currentNode);
          } else {
            this.currentNode = "T";
            // console.log(
            //   "String contains a letter not in the language - ",
            //   this.language
            // );
          }
          this.node();
        } else {
          if (this.currentNode == this.problem.length) {
            this.result = "Valid";
            // console.log("Valid String");
            // console.log("Path Taken", this.path);
          } else {
            this.result = "Invalid";
            // console.log("Invalid String SHORT");
            this.path.push("eos");
            // console.log("Path Taken", this.path);
          }
        }
      }
    }
  }
  // (aba+bab)(a+b)*(bab)(a+b)*(a+b+ab+ba)(a+b)*
  const problem1 = [
    new Node(1, 2, 4),
    new Node(2, "T", 3),
    new Node(3, 6, "T"),
    new Node(4, 5, "T"),
    new Node(5, "T", 6),
    new Node(6, 6, 7),
    new Node(7, 8, 7),
    new Node(8, 6, 9),
    new Node(9, 10, 10),
    new Node(10, 10, 10),
  ];
  // ((101+111+101)+(1+0+11))(1+0+01)*(111+000+101)(1+0)*
  const problem2 = [
    new Node(1, 2, 2),
    new Node(2, 4, 3),
    new Node(3, 7, 5),
    new Node(4, 6, 3),
    new Node(5, 7, 8),
    new Node(6, 8, 3),
    new Node(7, 6, 8),
    new Node(8, 8, 8),
  ];

  const regex1 = "(aba+bab) (a+b)* (bab) (a+b)* (a+b+ab+ba) (a+b)*";
  const regex2 = "((101+111+101)+(1+0+11)) (1+0+01)* (111+000+101) (1+0)*";

  const language1 = ["a", "b"];
  const language2 = ["0", "1"];

  const [string, setString] = useState("");
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  const [prob2, setProb2] = useState(false);
  const [currentNode, setCurrentNode] = useState(0);
  const [simulating, setSimulating] = useState(false);

  const validString = useToast();
  const trapString = useToast();
  const shortString = useToast();
  const notInLanguageString = useToast();
  const closeToasts = useToast();

  let input = string;
  let results = "";

  const handleTextChange = (e) => {
    const stringValue = e.target.value;
    setString(stringValue);

    const countValue = e.target.value.length;
    setCount(countValue);
  };
  const handleReset = () => {
    setString("");
    setCount(0);
    setData("");
    closeAll();
  };
  const handleSwitch = () => {
    setProb2((prev) => !prev);
    setData("");
    closeAll();
  };

  function closeAll() {
    closeToasts.closeAll();
  }
  const validToast = () => {
    validString({
      title: "Valid String!",
      status: "success",
      isClosable: true,
    });
  };
  const trapToast = () => {
    trapString({
      title: "Invalid: Trapped",
      status: "error",
      isClosable: true,
    });
  };
  const shortToast = () => {
    shortString({
      title: "Invalid: Too Short",
      status: "error",
      isClosable: true,
    });
  };
  const notInLanguageToast = () => {
    notInLanguageString({
      title: "Empty/Invalid Input",
      status: "warning",
      isClosable: true,
    });
  };

  const handleValid = () => {
    // console.log("DONE OK");
    setSimulating(false);
    validToast();
    setData(results);
  };
  const handleTrapped = () => {
    // console.log("DONE TRAPPED");
    setSimulating(false);
    trapToast();
    setData(results);
  };
  const handleShort = () => {
    // console.log("DONE SHORT");
    setSimulating(false);
    shortToast();
    setData(results);
  };

  const handleInputString = () => {
    input = input.replace(/\s+/g, "").toLowerCase();
  };

  const handleTest = (e) => {
    e.preventDefault();
    handleInputString();

    if (!prob2) {
      if (input == "") {
        notInLanguageToast();
        // console.log("No valid configuration for input string/empty");
      } else if (input.includes("a") || input.includes("b")) {
        // console.log("PROB1");

        results = new DFA(input, problem1, language1);
        // console.log(results);
        setData(results);
      } else {
        notInLanguageToast();
        // console.log("No valid configuration for input string!!");
      }
    } else {
      if (input == "") {
        notInLanguageToast();
        // console.log("No valid configuration for input string/empty");
      } else if (input.includes("0") || input.includes("1")) {
        // console.log("PROB2");
        results = new DFA(input, problem2, language2);
        // console.log(results);
        setData(results);
      } else {
        notInLanguageToast();
        // console.log("No valid configuration for input string!!");
      }
    }
  };

  const handleSimulation = (e) => {
    e.preventDefault();
    handleInputString();

    if (!prob2) {
      if (input == "") {
        notInLanguageToast();
        // console.log("No valid configuration for input string/empty");
      } else if (input.includes("a") || input.includes("b")) {
        setSimulating(true);
        // console.log("PROB1");

        results = new DFA(input, problem1, language1);
        // console.log(results);

        const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
        // console.log(pathWithZeroes);

        pathWithZeroes.some((node, i) => {
          setTimeout(() => {
            setCurrentNode(node);
            node == pathWithZeroes[pathWithZeroes.length - 2] &&
            !pathWithZeroes.includes("T") &&
            !pathWithZeroes.includes("eos")
              ? handleValid()
              : node == "T" && pathWithZeroes.slice(-4)[0] == "T"
              ? handleTrapped()
              : pathWithZeroes.slice(-4)[3 - 1] == node &&
                !pathWithZeroes.includes("T") &&
                handleShort();
          }, i * 200);
        });
      } else {
        notInLanguageToast();
        // console.log("No valid configuration for input string!!");
      }
    } else {
      if (input == "") {
        notInLanguageToast();
        // console.log("No valid configuration for input string/empty");
      } else if (input.includes("0") || input.includes("1")) {
        setSimulating(true);
        // console.log("PROB2");

        results = new DFA(input, problem2, language2);
        // console.log(results);

        const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
        // console.log(pathWithZeroes);

        pathWithZeroes.some((node, i) => {
          setTimeout(() => {
            setCurrentNode(node);
            node == pathWithZeroes[pathWithZeroes.length - 2] &&
            !pathWithZeroes.includes("eos")
              ? handleValid()
              : pathWithZeroes.slice(-4)[3 - 1] == node && handleShort();
          }, i * 200);
        });
      } else {
        notInLanguageToast();
        // console.log("No valid configuration for input string!!");
      }
    }
  };

  return (
    <Flex
      direction={["column", "column", "column", "column", "column", "row"]}
      align="center"
    >
      <Box
        w={["20em", "20em", "40em", "40em", "40em", "30em"]}
        mr={[0, 0, 0, 0, 0, 24]}
        mt={[14, 14, 16, 16, 16, 0]}
      >
        <Flex align="flex-end" justify="space-between">
          <Heading variant="title">DFA Simulator</Heading>
          <Code fontSize={["0.5em", null, "0.6em", null, null, "0.6em"]}>
            BETA
          </Code>
        </Flex>

        <Divider mb="6" />

        <Box>
          <form onSubmit={handleTest}>
            <Flex align="center">
              <Heading>Input String:</Heading>
              <Flex align="center">
                {data && (
                  <Button
                    variant="data"
                    rightIcon={
                      data.result == "Valid" ? (
                        <Box color="teal.300">
                          <FaCheck />
                        </Box>
                      ) : (
                        data.result == "Invalid" && (
                          <Box color="pink.300">
                            <ImCross />
                          </Box>
                        )
                      )
                    }
                  >
                    {data.result}
                  </Button>
                )}
              </Flex>
            </Flex>
            <Input
              maxLength="500"
              fontSize={["0.7em", "0.7em", "0.9em"]}
              my={3}
              placeholder={!prob2 ? "e.g. babbabab" : "e.g. 0110101"}
              value={string}
              onChange={handleTextChange}
            />
            <Flex justify="space-between" align="center">
              <Flex>
                <Button type="submit" disabled={simulating}>
                  Test
                </Button>
                <Button onClick={handleSimulation} ml={2} disabled={simulating}>
                  Simulate
                </Button>
                <Button
                  variant="clear"
                  onClick={handleReset}
                  disabled={simulating}
                >
                  Clear
                </Button>
              </Flex>
              <Text
                fontWeight="semibold"
                fontSize={["0.7em", "0.7em", "0.9em"]}
              >
                Limit: {count}/500
              </Text>
            </Flex>
            <Divider my="6" />
            <Flex
              align="center"
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              // justify="space-between"
            >
              <Heading>Regular Expression:</Heading>
              <Tag my={1} fontSize={["0.7em", "0.7em", "0.9em"]}>
                {!prob2 ? regex1 : regex2}
              </Tag>
            </Flex>
            <Flex
              my={2}
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              align="center"
            >
              <Heading>Language Accepted:</Heading>
              <Tag my={1} fontSize={["0.7em", "0.7em", "0.9em"]}>
                {!prob2 ? "[a, b]" : "[0, 1]"}
              </Tag>
            </Flex>
            <Divider
              display={["block", null, "block", null, null, "none"]}
              mt="6"
              mb="2"
            />
          </form>
        </Box>
      </Box>

      <Flex
        direction="column"
        mb={[14, 14, 16, 16, 16, 0]}
        w={["20em", null, "40em", null, null, "60em"]}
      >
        <Flex
          h={["12em", null, "18em", null, null, "18em"]}
          pos="relative"
          // border="solid"
          borderBottom="solid 1px"
          borderColor="gray.200"
        >
          {!prob2 ? (
            <FirstDFA currentNode={currentNode} simulating={simulating} />
          ) : (
            <SecondDFA
              currentNodeVal={currentNode}
              simulatingStatus={simulating}
            />
          )}
        </Flex>
        <Flex
          align="center"
          my="3"
          direction="row"
          justify={["flex-end", null, "flex-end", null, null, "space-between"]}
        >
          <Heading display={["none", null, "none", null, null, "flex"]}>
            Regular Expression: <Tag as="span">{!prob2 ? regex1 : regex2}</Tag>
          </Heading>
          <Flex>
            <Button mx="2">Show CFL</Button>
            <Button
              disabled={simulating}
              onClick={handleSwitch}
              rightIcon={<CgChevronRight />}
            >
              Switch RegEx
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Main;
