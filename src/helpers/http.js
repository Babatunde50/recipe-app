export async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...data, returnSecureToken: true })
  });
  return await response.json();
}

export async function getData(url) {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}
