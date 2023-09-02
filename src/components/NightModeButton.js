import React from "react";
import { useColorMode, Button, Box } from "@chakra-ui/react";

const NightModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
     <Box textAlign="center" marginRight={2}>
      <Button onClick={toggleColorMode} border={"none"} backgroundColor={"transparent"}>
        {colorMode === "light" ? (
          <i class="fa-solid fa-moon"></i>
        ) : (
          <i class="fa-solid fa-sun"></i>
        )}
      </Button>
    </Box>
  );
};
export default NightModeButton;
