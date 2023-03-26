import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score >= 90 ? "green" : score >= 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" padding={2} borderRadius="50%">
      {score}
    </Badge>
  );
};

export default CriticScore;
