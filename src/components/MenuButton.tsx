import { Image, Text, Box } from "@chakra-ui/react";

interface MenuButtonProps {
  icon: string;
  label: string;
  path?: string | undefined;
  isActive?: boolean;
}

export function MenuButton({ icon, label, isActive }: MenuButtonProps) {
  return (
    <Box
      borderRadius="full"
      bg={isActive ? "black" : "transparent"}
      cursor="pointer"
      _hover={{
        bg: isActive ? "black" : "gray.100",
      }}
      transition="all 0.2s ease-in-out"
      display="flex"
      gap={2}
      key={label}
      p={3}
    >
      <Image src={icon} />
      <Text
        color={isActive ? "white" : "primary.400"}
        fontSize="xs"
        fontWeight="semibold"
      >
        {label}
      </Text>
    </Box>
  );
}
