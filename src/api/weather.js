const url = "https://vue-app-c7660.uc.r.appspot.com/weather";

const getWeather = async ({ city, state }) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ city: city.split(" ").join("+"), state }),
  });
  if (!response.ok) {
    throw new Error("network error");
  }
  return response.json();
};

export { getWeather };
