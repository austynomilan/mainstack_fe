import { icons } from "@/assets/icons";
import { decimalCurrency } from "@/utils/HelperFunctions";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

function DisplayCard(props: { title: string; value: number; showIcon?:boolean }) {
  return (
    <VStack align="stretch" gap={2}>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text color="primary.400" fontSize="14px" fontWeight="medium">
          {props.title}
        </Text>
        {!props.showIcon && <Image src={icons.InfoIcon} />}
      </Box>
      <Text color="#131316" fontSize="28px" fontWeight="bold">
        {decimalCurrency(Number(props.value))}
      </Text>
    </VStack>
  );
}

export default DisplayCard;
