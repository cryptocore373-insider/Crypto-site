console.log("Crypto Insider System Loaded");

function captureLead() {
    const input = document.getElementById("leadInput").value;

    if (!input) {
        alert("Enter email or Telegram handle");
        return;
    }

    // store locally (basic tracking)
    let leads = JSON.parse(localStorage.getItem("leads") || "[]");
    leads.push({
        value: input,
        time: new Date().toISOString()
    });

    localStorage.setItem("leads", JSON.stringify(leads));

    alert("Access Granted. Join Telegram for full system.");
}
