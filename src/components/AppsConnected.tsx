import { icons } from "@/assets/icons";
import { Box, Image, Text } from "@chakra-ui/react";

const Apps = [
  {
    label: "Link in Bio",
    icon: icons.sidebarRing,
    description: "Manage your Link in Bio",
  },
  {
    label: "Store",
    icon: icons.sidebarFolder,
    description: "Manage your Store activities",
  },
  {
    label: "Media Kit",
    icon: icons.sidebarFile,
    description: "Manage your Media kit",
  },
  {
    label: "Invoicing",
    icon: icons.sidebarGlass,
    description: "Manage your invoices",
  },
  {
    label: "Bookings",
    icon: icons.sidebarGlass,
    description: "Manage your Bookings",
  },
];

function AppsConnected() {
  return (
    <Box display="flex" flexDirection="column" gap={6}>
      {Apps.map((app, i) => (
        <Box
          key={i}
          cursor="pointer"
          display="flex"
          alignItems="center"
          gap={3}
          transition="all 0.2s ease-in-out"
          _hover={{
            gap: 1,
          }}
        >
          <Image alt="Logo" boxSize="25px" objectFit="contain" src={app.icon} />
          <Box display="flex" flexDirection="column" gap={2}>
            <Text fontSize="sm" fontWeight="semibold">
              {app.label}
            </Text>
            <Text fontSize="xs">{app.description}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default AppsConnected;
