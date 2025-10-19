import { icons } from "@/assets/icons";
import ActionButton from "@/components/ActionButton";
import DisplayCard from "@/components/DisplayCard";
import SideModal from "@/components/SideModal";
import TransactionCard from "@/components/TransactionCard";
import { useApiCall } from "@/services/endPointCaller";
import { apiEndPoint } from "@/services/endpoints";
import { Box, Button, Flex, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

function Dashboard() {
  const [filter, setFilter] = useState(false);
  const { queryResult } = useApiCall(
    `${apiEndPoint.wallet}`,
    "get",
    {},
    true,
    60 * 120 * 1000
  );
  const { queryResult: transactionResults } = useApiCall(
    `${apiEndPoint.transaction}`,
    "get",
    {},
    true,
    60 * 120 * 1000
  );
  const { data } = queryResult || {};
  const { data: transactionData } = transactionResults || {};
  console.log("----t", transactionData);
  return (
    <VStack align="stretch" gap={2}>
      <Box>
        <Flex>
          <Box flex="5" p={2}>
            <Box display="flex" alignItems="center" gap={16}>
              <DisplayCard
                showIcon
                title="Available Balance"
                value={data?.balance}
              />
              <Button
                width="167px"
                height="52px"
                fontWeight="semibold"
                borderRadius="full"
              >
                Withdraw
              </Button>
            </Box>
          </Box>
          <Box flexDirection="column" spaceY={5} flex="2" p={2}>
            <DisplayCard value={data?.ledger_balance} title="Ledger Balance" />
            <DisplayCard value={data?.total_payout} title="Total Payout" />
            <DisplayCard value={data?.total_revenue} title="Total Revenue" />
            <DisplayCard value={data?.pending_payout} title="Pending Payout" />
          </Box>
        </Flex>
      </Box>

      <Box
        borderBottom="1px solid #EFF1F6"
        display="flex"
        justifyContent="space-between"
        py={4}
      >
        <Box>
          <Text fontSize="24px" color="#131316" fontWeight="bold">
            {transactionData?.length} Transactions
          </Text>
          <Text color="primary.400" fontSize="14px" fontWeight="medium">
            Your transactions for the last 7 days
          </Text>
        </Box>
        <Box display="flex" gap={3}>
          <ActionButton
            action={() => setFilter(true)}
            title="Filter"
            count={2}
            icon={icons.downIcon}
          />
          <ActionButton title="Export List" icon={icons.importIcon} />
        </Box>
      </Box>
      <VStack gap={4}>
        {transactionData?.map((transactions: any) => (
          <TransactionCard
            key={transactions?.payment_reference}
            buyerName={transactions?.metadata?.name}
            item={transactions?.metadata?.product_name}
            amount={transactions?.amount}
            dateOfPurchase={transactions?.date}
            transactionType={transactions?.type}
            status={transactions?.status}
          />
        ))}
      </VStack>
      {filter && (
        <SideModal onClose={() => setFilter(false)} header="Filter">
          Filter
        </SideModal>
      )}
    </VStack>
  );
}

export default Dashboard;
