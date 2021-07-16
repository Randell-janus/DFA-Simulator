import {
  Box,
  VStack,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const CFG = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="top">
        <PopoverTrigger>
          <Button mx="2">Show CFG</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "16em"]}
          _focus=""
          bg="gray.50"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold">
            Context-free Grammar
          </PopoverHeader>
          <PopoverBody align="center">
            {!prob2 ? (
              <VStack>
                <Text>{"S -> abaX | babX"}</Text>
                <Text>{"X -> aX | bX | babY"}</Text>
                <Text>{"Y -> aZ | bZ"}</Text>
                <Text>{"Z -> aZ | bZ | aaZ | ^"}</Text>
              </VStack>
            ) : (
              <VStack>
                <Text>{"S -> 1X | 0X"}</Text>
                <Text>{"X -> 1X | 0X | 111Y | 000Y | 101Y"}</Text>
                <Text>{"Y -> 1Y | 0X | ^"}</Text>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CFG;
