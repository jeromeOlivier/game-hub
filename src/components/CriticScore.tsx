import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" padding={2} borderRadius="50%">
      {score}
    </Badge>
  );
};

export default CriticScore;
