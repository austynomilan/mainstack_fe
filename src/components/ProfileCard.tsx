import { Box, VStack, Text } from "@chakra-ui/react";

function ProfileCard(props: {
  profile: string;
  firstName: string;
  lastName: string;
  email: string;
}) {
  return (
    <VStack>
      <Box w="full" display="flex" gap={3}>
        <Box
          height="40px"
          width="40px"
          borderRadius="full"
          bg=" #31313cff"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {props.profile}
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <Text fontWeight="semibold">{`${props.firstName} ${props.lastName}`}</Text>
          <Text fontSize="xs" color="primary.400">{props.email}</Text>
        </Box>
      </Box>
    </VStack>
  );
}

export default ProfileCard;
