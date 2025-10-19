import { Box, Button, VStack, Text } from "@chakra-ui/react";
import { Form, TreeSelect, type FormProps } from "antd";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

import { useState } from "react";
const filterTypes = ["Today", "Last 7 days", "This month", "Last 3 months"];
const transactionTypes = [
  { value: "store", label: "Store Transactions" },
  { value: "digital", label: "Digital Products" },
  { value: "wallet", label: "Wallet Funding" },
];

const transactionStatuses = [
  { value: "successful", label: "Successful" },
  { value: "pending", label: "Pending" },
  { value: "failed", label: "Failed" },
];

function FilterComponent(props: { close: () => void }) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [start, setStart] = useState<any>();
  const [end, setEnd] = useState<any>();
  const [componentVariant, setComponentVariant] =
    useState<FormProps["variant"]>("filled");

  const onFormVariantChange = ({
    variant,
  }: {
    variant: FormProps["variant"];
  }) => {
    setComponentVariant(variant);
  };
  const [filters, setFilters] = useState<{
    type: string[];
    status: string[];
    startDate: string;
    endDate: string;
  }>({
    type: [],
    status: [],
    startDate: "",
    endDate: "",
  });
 const handleSubmit = () => {
  const payload = {
    type: selectedValues,
    status: selectedStatus,
    startDate: start,
    endDate: end,
  };

  setFilters(payload);
  console.log(payload); 
  props.close();
};
  const handleChange = (values: string[]) => {
    setSelectedValues(values);
  };
  const handleChangeStatus = (values: string[]) => {
    setSelectedStatus(values);
  };
  const onChangeStart: DatePickerProps["onChange"] = (_, dateString) => {
    setStart(dateString);
  };
  const onChangeEnd: DatePickerProps["onChange"] = (_, dateString) => {
    setEnd(dateString);
  };
  return (
    <Box width="full" position="relative">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {filterTypes.map((filter, i) => (
          <Box
            key={i}
            fontSize="sm"
            fontWeight="semibold"
            border="1px solid"
            borderColor="primary.100"
            height="36px"
            w="auto"
            borderRadius="full"
            px={3}
            display="flex"
            alignItems="center"
          >
            {filter}
          </Box>
        ))}
      </Box>
      <Form
        onValuesChange={onFormVariantChange}
        variant={componentVariant}
        layout="vertical"
        style={{
          position: "relative",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <VStack align="stretch">
          <Text fontWeight="semibold" color="primary.black">
            Date Range
          </Text>
          <Box w="full" display="flex" gap={3}>
            <DatePicker
              style={{ width: "100%", height: 48 }}
              onChange={onChangeStart}
            />
            <DatePicker
              style={{ width: "100%", height: 48 }}
              onChange={onChangeEnd}
            />
          </Box>
        </VStack>
        <VStack align="stretch">
          <Text fontWeight="semibold" color="primary.black">
            Transaction Type
          </Text>
          <TreeSelect
            treeData={transactionTypes}
            value={selectedValues}
            onChange={handleChange}
            treeCheckable={true}
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            placeholder="Select transaction types"
            style={{ width: "100%", height: 48 }}
            allowClear
          />
        </VStack>
        <VStack align="stretch">
          <Text fontWeight="semibold" color="primary.black">
            Transaction Status
          </Text>
          <TreeSelect
            treeData={transactionStatuses}
            value={selectedStatus}
            onChange={handleChangeStatus}
            treeCheckable={true}
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            placeholder="Select transaction types"
            style={{ width: "100%", height: 48 }}
            allowClear
          />
        </VStack>
        <Box
          w="full"
          position="absolute"
          bottom="10px"
          display="flex"
          gap={3}
          mt={3}
        >
          <Button
            variant="outline"
            borderRadius="full"
            w="50%"
            px={3}
            onClick={() => {
              setFilters({
                type: [],
                status: [],
                startDate: "",
                endDate: "",
              });
              props.close();
            }}
          >
            Clear
          </Button>
          <Button
            onClick={handleSubmit}
            colorScheme="blackAlpha"
            borderRadius="full"
            w="50%"
            px={6}
          >
            Apply
          </Button>
        </Box>
      </Form>
    </Box>
  );
}

export default FilterComponent;
