import { Image, Text, Box } from "@chakra-ui/react";

interface MenuButtonProps {
  icon: string;
  label: string;
}

export function MenuButton({ icon, label }: MenuButtonProps) {
  return (
    <Box display="flex" gap={2} key={label}>
      <Image src={icon} />
      <Text color="primary.400" fontSize={16} fontWeight="semibold">
        {label}
      </Text>
    </Box>
  );
}
