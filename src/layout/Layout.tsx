import { icons } from "@/assets/icons";
import { MenuButton } from "@/components/MenuButton";
import Sidebar from "@/components/Sidebard";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const menus = [
    { menu: "Home", icon: icons.homeIcon },
    { menu: "Analytics", icon: icons.analyticsIcon },
    { menu: "Analytic", icon: icons.analyticsIcon },
    { menu: "CRM", icon: icons.crmIcon },
    { menu: "Apps", icon: icons.appIcon },
  ];

  return (
    <Flex minH="100vh" bg="gray.50">
      <Sidebar />
      <Box flex="1" p={2}>
        <Box
          boxShadow="md"
          borderRadius="full"
          bg="white"
          height="64px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          paddingX={6}
        >
          <Image src={icons.brnadIcon} />
          <Flex width="581px" justifyContent="space-between">
            {menus.map((menu) => (
              <MenuButton key={menu.menu} icon={menu.icon} label={menu.menu} />
            ))}
          </Flex>
          <Flex width="177px">
            <Image src={icons.notificationIcon} />
            <Image src={icons.textIcon} />
            <Flex
              width="81px"
              height="40px"
              borderRadius="full"
              alignItems="center"
              p={2}
              bg="primary.100"
            >
              <Box
                height="32px"
                width="32px"
                borderRadius="full"
                bg=" #31313cff"
              ></Box>
              <Image src={icons.hamburgerIcon} />
            </Flex>
          </Flex>
        </Box>
        <Box px="96px" pt="50px">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
}
