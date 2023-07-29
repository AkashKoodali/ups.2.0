import { View, Text } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders.tsx";

type Props = {
  userId: string;
  email: string;
  name: string;
};

const CustomerCard = ({ name, email, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <View>
      <Text>CustomerCard</Text>
    </View>
  );
};

export default CustomerCard;
