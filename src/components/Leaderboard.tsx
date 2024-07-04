import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import { getLeaderboard } from "../sdk/stackClient";

interface LeaderboardEntry {
  address: string;
  points: number;
  identities: object; // Consider specifying a more precise type than 'any' if possible.
}

const LeaderboardComponent: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const leaderboardData = await getLeaderboard();
        setLeaderboard(leaderboardData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <Box width="100%" overflowX="auto" p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Leaderboard
      </Heading>
      <Table variant="simple">
        <TableCaption>Points Leaderboard</TableCaption>
        <Thead>
          <Tr>
            <Th>Address</Th>
            <Th>Points</Th>
          </Tr>
        </Thead>
        <Tbody>
          {leaderboard.map((entry, index) => (
            <Tr key={index}>
              <Td>{entry.address}</Td>
              <Td>{entry.points}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default LeaderboardComponent;
