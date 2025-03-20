import fetch from "node-fetch";

const url = "http://20.244.56.144/test/auth";

const payload = {
  companyName: "Afford Medicals",
  ownerName: "Barnam Das",
  rollNo: "RA221103011506",
  ownerEmail: "bd2251@srmist.edu.in",
  accessCode: "SUfGJv"
};

const headers = {
  "Content-Type": "application/json",
};

async function getAuthToken() {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Authorization Token Received!", data);
    } else {
      console.error("Failed to Get Token!", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

getAuthToken();