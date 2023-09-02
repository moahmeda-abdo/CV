import { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  let scrollToTop;
  //browser code
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
    scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }

  return (
    <Box>
      <IconButton
        background={"yellow"}
        backgroundColor={"blue.400"}
        aria-label="scroll to top button"
        colorScheme={"blue"}
        fontSize="20px"
        pos={"fixed"}
        bottom={"40px"}
        right={"10px"}
        display={visible ? "inline" : "none"}
        icon={<ArrowUpIcon />}
        bg={"brand.blue.light"}
        color="black"
        onClick={scrollToTop}
      />
    </Box>
  );
}
