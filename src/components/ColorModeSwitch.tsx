import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      {colorMode === "dark" ? (
        <IconButton
          aria-label="dark"
          bg="transparent"
          _hover={{ bg: "none" }}
          borderRadius="50%"
          icon={<BsSun />}
          fontSize="28px"
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          aria-label="light"
          bg="transparent"
          _hover={{ bg: "none" }}
          borderRadius="50%"
          icon={<BsMoon />}
          fontSize="28px"
          onClick={toggleColorMode}
        />
      )}
    </Box>
  );
};

export default ColorModeSwitch;
