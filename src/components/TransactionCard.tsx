import { icons } from "@/assets/icons";
import { formatCurrency } from "@/utils/HelperFunctions";
import { Box, Image, Flex, Text } from "@chakra-ui/react";

function TransactionCard(props: {
  item: string;
  buyerName: string;
  amount: number;
  dateOfPurchase: number;
  transactionType: string;
  status?: string;
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="full"
      justifyContent="space-between"
    >
      <Flex gap={3}>
        <Image
          src={
            props.transactionType === "deposit"
              ? icons.inflowTransaction
              : icons.outflowTransaction
          }
        />
        <Box gap={3}>
          {props.transactionType === "withdrawal" ? (
            <>
              <Text color="primary.400" fontWeight="medium">
                Withdrawal
              </Text>
              <Text
                color={props.status === "successful" ? "green.500" : "red.500"}
                fontWeight="medium"
              >
                {props.status}
              </Text>
            </>
          ) : (
            <>
              <Text color="primary.black">{props.item}</Text>
              <Text color="primary.400" fontWeight="medium">
                {props.buyerName}
              </Text>
            </>
          )}
        </Box>
      </Flex>
      <Box gap={3}>
        <Text fontWeight="bold" color="primary.black">
          {formatCurrency(props.amount)}
        </Text>
        <Text color="primary.400" fontWeight="medium">
          {props.dateOfPurchase}
        </Text>
      </Box>
    </Box>
  );
}

export default TransactionCard;
