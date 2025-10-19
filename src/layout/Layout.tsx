import { icons } from "@/assets/icons";
import AppsConnected from "@/components/AppsConnected";
import { MenuButton } from "@/components/MenuButton";
import ProfileCard from "@/components/ProfileCard";
import Sidebar from "@/components/Sidebard";
import { useApiCall } from "@/services/endPointCaller";
import { apiEndPoint } from "@/services/endpoints";
import { Box, Flex, Image, Popover, Portal, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [showApps, setShowApps] = useState(false);
  const menus = [
    { menu: "Home", icon: icons.homeIcon, path: "/home" },
    { menu: "Analytics", icon: icons.analyticsIcon, path: "/analytics" },
    { menu: "Revenue", icon: icons.cashIcon, path: "/" },
    { menu: "CRM", icon: icons.crmIcon, path: "/crm" },
  ];
  const { queryResult } = useApiCall(
    `${apiEndPoint.users}`,
    "get",
    {},
    true,
    60 * 120 * 1000
  );
  const { data } = queryResult || {};
  const profile = `${data?.first_name?.[0] || ""}${
    data?.last_name?.[0] || ""
  }`.toUpperCase();

  return (
    <Flex minH="100vh" bg="gray.50">
      <Sidebar />
      <Box flex="1" p={2}>
        <Box
          width="full"
          position="fixed"
          top={0}
          right={0}
          zIndex={10}
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
          <Flex width="auto" justifyContent="space-between">
            {menus.map((menu) => (
              <MenuButton
                key={menu.menu}
                icon={menu.icon}
                label={menu.menu}
                path={menu.path}
                isActive={
                  location.pathname === menu.path ||
                  (location.pathname === "/" && menu.path === "/revenue")
                }
              />
            ))}
            <Popover.Root
              open={showApps}
              onOpenChange={(details) =>
                setShowApps(
                  typeof details === "boolean" ? details : !!details?.open
                )
              }
              positioning={{ offset: { crossAxis: 0, mainAxis: 0 } }}
            >
              <Popover.Trigger asChild>
                <Box
                  _hover={{
                    bg: showApps ? "primary.black" : "gray.100",
                  }}
                  bg={showApps ? "primary.black" : "transparent"}
                  display="flex"
                  cursor="pointer"
                  gap={2}
                  borderRadius="full"
                  p={3}
                  onClick={() => setShowApps(!showApps)}
                >
                  <Image src={icons.appIcon} />
                  <Text
                    fontSize="xs"
                    fontWeight="medium"
                    color={showApps ? "white" : "primary.400"}
                  >
                    Apps
                  </Text>
                  {showApps && (
                    <Box
                      borderLeft="1px solid white"
                      pl="6px"
                      display="flex"
                      gap={1.5}
                    >
                      <Text
                        fontSize="xs"
                        whiteSpace="nowrap"
                        fontWeight="medium"
                        color={showApps ? "white" : "primary.100"}
                      >
                        Link in Bio
                      </Text>
                      <Image src={icons.downIcon} />
                    </Box>
                  )}
                </Box>
              </Popover.Trigger>
              <Portal>
                <Popover.Positioner marginTop={6}>
                  <Popover.Content>
                    <Popover.Body>
                      <AppsConnected />
                    </Popover.Body>
                  </Popover.Content>
                </Popover.Positioner>
              </Portal>
            </Popover.Root>
          </Flex>
          <Flex width="auto">
            <Image src={icons.notificationIcon} />
            <Image src={icons.textIcon} />
            <Popover.Root
              positioning={{ offset: { crossAxis: 0, mainAxis: 0 } }}
            >
              <Popover.Trigger asChild>
                <Flex
                  width="81px"
                  height="40px"
                  borderRadius="full"
                  alignItems="center"
                  p={2}
                  bg="primary.100"
                  cursor="pointer"
                >
                  <Box
                    height="32px"
                    width="32px"
                    borderRadius="full"
                    bg=" #31313cff"
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {profile}
                  </Box>
                  <Image src={icons.hamburgerIcon} />
                </Flex>
              </Popover.Trigger>
              <Portal>
                <Popover.Positioner marginTop={6}>
                  <Popover.Content>
                    <Popover.Body>
                      <ProfileCard
                        firstName={data?.first_name}
                        lastName={data?.last_name}
                        email={data?.email}
                        profile={profile}
                      />
                    </Popover.Body>
                  </Popover.Content>
                </Popover.Positioner>
              </Portal>
            </Popover.Root>
          </Flex>
        </Box>
        <Box px="96px" pt="100px">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
}
