const URL = "https://royale-flush.herokuapp.com/api";

export const getMe = async (token) => {
  try {
    const response = await fetch(`${URL}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
