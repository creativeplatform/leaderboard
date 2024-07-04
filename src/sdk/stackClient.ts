// stackClient.js
import { StackClient } from "@stackso/js-core";

const pointId = 2777;

// Initialize the client
const stack = new StackClient({
  apiKey: "473423a0-3af7-45d7-a776-6555ea93d108",
  pointSystemId: pointId,
});

export const getLeaderboard = async () => {
  try {
    const response = await stack.getLeaderboard();
    return response.leaderboard;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};

// Export the stack client if you need other methods as well
export default stack;
