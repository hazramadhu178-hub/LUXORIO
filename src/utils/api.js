const defaultApiUrl = import.meta.env.PROD ? "" : "http://localhost:5001";
const API_URL = (import.meta.env.VITE_API_URL || defaultApiUrl).replace(/\/$/, "");

export async function submitForm(endpoint, values) {
  let response;

  try {
    response = await fetch(`${API_URL}/api/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Could not connect to Luxorio. Please try again shortly.", { cause: error });
    }
    throw error;
  }

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Your request could not be sent. Please try again.");
  }

  return result;
}
