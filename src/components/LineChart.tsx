import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

interface ChartData {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}

interface MyChartProps {
  data: ChartData[];
}

export const Linechart = ({ data }: MyChartProps) => {
  const filteredData = data
    ?.filter((item) => item.type === "deposit" && item.status === "successful")
    ?.map((item) => ({
      date: item.date,
      quantity: item.metadata?.quantity ?? 0,
    }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={filteredData}
        margin={{ top: 10, right: 48, bottom: 5, left: 48 }}
      >
        <XAxis dataKey="date" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="quantity"
          stroke="#FF5403"
          strokeWidth={1}
          dot={{ r: 4 }}
          name="Quantity"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
