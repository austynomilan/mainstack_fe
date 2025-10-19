import { useEffect, useRef, type ReactNode } from "react";
import { Box, Flex, Text,  CloseButton } from "@chakra-ui/react";
import gsap from "gsap";


interface ModalTypes {
  children: ReactNode;
  onClose: () => void;
  header: string;
}

const SideModal = ({ children, onClose, header }: ModalTypes) => {
  const contentSideRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.id === "chakra-side-modal-backdrop") {
        handleClose();
      }
    };

    document.addEventListener("click", handleBackdropClick);
    return () => document.removeEventListener("click", handleBackdropClick);
  }, []);


  useEffect(() => {
    if (contentSideRef.current) {
      gsap.fromTo(
        contentSideRef.current,
        { x: "50%", opacity: 0 },
        { duration: 1, x: "0%", opacity: 1, ease: "power3.out" }
      );
    }
  }, []);


  const handleClose = () => {
    if (contentSideRef.current) {
      gsap.to(contentSideRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: onClose,
      });
    }
  };

  return (
    <Box
      id="chakra-side-modal-backdrop"
      position="fixed"
      inset="0"
      bg="rgba(0, 0, 0, 0.4)"
      zIndex="51"
      display="flex"
      justifyContent="flex-end"
    >
      <Box
        ref={contentSideRef}
        w="456px"
        h="98vh"
        bg="white"
        borderRadius="16px"
        mt="1vh"
        mr="12px"
        zIndex="52"
        overflow="hidden"
      >
        <Flex
          w="full"
          bg="#FBFBFB"
          align="center"
          justify="space-between"
          py="15px"
          px="22px"
          borderTopRadius="16px"
        >
          <Text fontSize="2xl" fontWeight="bold" color="primary.black">
            {header}
          </Text>

          <Box
            as="button"
            onClick={(e) => {
              handleClose();
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <CloseButton />
          </Box>
        </Flex>

        <Box px="22px">{children}</Box>
      </Box>
    </Box>
  );
};

export default SideModal;
