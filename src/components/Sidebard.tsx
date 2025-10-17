import { icons } from "@/assets/icons";
import { Box, VStack, Image } from "@chakra-ui/react";
import { Tooltip } from "./ui/tooltip";

const menuItems = [
  { label: "Link in Bio", icon: icons.sidebarRing },
  { label: "Store", icon: icons.sidebarFolder },
  { label: "Media Kit", icon: icons.sidebarFile },
  { label: "Invoicing", icon: icons.sidebarGlass },
];

function Sidebar() {
  return (
    <Box
      position="fixed"
      left="2"
      top="40%"
      transform="translateY(-50%)"
      bg="white"
      boxShadow="md"
      borderRadius="full"
      p={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      height="192px"
      width="48px"
    >
      <VStack gap={4}>
        {menuItems.map((item) => (
          <Tooltip
            positioning={{ placement: "right" }}
            key={item.label}
            content={item.label}
            showArrow
          >
            <Image
              src={item.icon}
              alt="Logo"
              boxSize="30px"
              objectFit="contain"
              cursor="pointer"
            />
          </Tooltip>
        ))}
      </VStack>
    </Box>
  );
}

export default Sidebar;
