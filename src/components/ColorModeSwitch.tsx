import {
  Box,
  HStack,
  Icon,
  IconButton,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      {colorMode === "dark" ? (
        <IconButton
          aria-label="dark"
          bg="transparent"
          fontSize="20px"
          icon={<BsSun />}
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          aria-label="light"
          bg="transparent"
          icon={<BsMoon />}
          onClick={toggleColorMode}
          fontSize="20px"
        />
      )}
    </Box>
  );
};

export default ColorModeSwitch;
