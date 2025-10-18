import { icons } from "@/assets/icons";
import ActionButton from "@/components/ActionButton";
import DisplayCard from "@/components/DisplayCard";
import SideModal from "@/components/SideModal";
import { useApiCall } from "@/services/endPointCaller";
import { apiEndPoint } from "@/services/endpoints";
import { Box, Button, Flex, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

function Dashboard() {
  const [filter, setFilter] = useState(false);
  const { queryResult } = useApiCall(
    `${apiEndPoint.users}`,
    "get",
    {},
    true,
    60 * 120 * 1000
  );
  const { data } = queryResult || {};
  console.log("----", data)
  return (
    <VStack align="stretch" gap={2}>
      <Box>
        <Flex>
          <Box flex="5" p={2}>
            <Box display="flex" alignItems="center" gap={16}>
              <DisplayCard showIcon title="Available Balance" value={120500} />
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
            <DisplayCard value={0} title="Ledger Balance" />
            <DisplayCard value={55080} title="Total Payout" />
            <DisplayCard value={175580} title="Total Revenue" />
            <DisplayCard value={0} title="Pending Payout" />
          </Box>
        </Flex>
      </Box>

      <Box display="flex" justifyContent="space-between" py={4}>
        <Box>
          <Text fontSize="24px" color="#131316" fontWeight="bold">
            24 Transactions
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
      {filter && (
        <SideModal onClose={() => setFilter(false)} header="Filter">
          Filter
        </SideModal>
      )}
    </VStack>
  );
}

export default Dashboard;
