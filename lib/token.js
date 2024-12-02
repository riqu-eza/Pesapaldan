import fetch from "node-fetch";

export const fetchToken = async (consumerKey, consumerSecret) => {
  const body = { consumer_key: consumerKey, consumer_secret: consumerSecret };
  try {
    const response = await fetch(
      "https://pay.pesapal.com/v3/api/Auth/RequestToken",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    if (response.ok) {
      console.log("Token fetched successfully:", data);
      return data.token;
    } else {
      console.error("Error fetching token:", data.message);
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error during fetchToken:", error);
    throw error;
  }
};
