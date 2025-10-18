import { Box, Image, Text } from "@chakra-ui/react";

function ActionButton(props: {
  count?: number;
  title: string;
  icon: string;
  action?: () => void;
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="primary.100"
      borderRadius="full"
      width="139px"
      height="48px"
      gap={2}
      cursor="pointer"
      onClick={props.action}
    >
      <Text fontWeight="semibold" color="primary.black">
        {props.title}
      </Text>
      {props.count && (
        <Text
          height="20px"
          fontSize="12px"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="20px"
          borderRadius="full"
          bg="#131316"
        >
          {props.count}
        </Text>
      )}
      <Image width="20px" height="20px" src={props.icon} />
    </Box>
  );
}

export default ActionButton;
