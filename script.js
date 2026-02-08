// ZegoCloud Settings
const appID = 973598261;
const serverSecret = "7da37e0856e7190a47313653199e8d468160241076b131f478546b142416b22b";
const ownerID = "1649554599"; // Aapki ID

function login() {
    const userID = document.getElementById('user-id').value;
    if (!userID) { alert("ID bhool gaye bhai!"); return; }

    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('room-screen').style.display = 'block';

    // Admin Panel Check
    if (userID === ownerID) {
        document.getElementById('admin-btn').style.display = 'block';
    }

    startLive(userID);
}

function startLive(userID) {
    const roomID = "Star_Club_Majlis";
    const userName = "User_" + userID;
    
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
        container: document.querySelector("#video-container"),
        scenario: { mode: ZegoUIKitPrebuilt.LiveStreaming },
        showUserHideUserListButton: true,
    });
}

function openAdmin() {
    const gift = prompt("Kya gift bhejna hai?\n1: Tiger 🐅\n2: Sports Car 🏎️\n3: VIP Entry");
    const layer = document.getElementById('gift-layer');
    
    let text = "";
    if(gift == "1") text = "🐅 OWNER SENT TIGER!";
    if(gift == "2") text = "🏎️ OWNER SENT SPORTS CAR!";
    if(gift == "3") text = "✨ VIP OWNER JOINED!";

    if(text !== "") {
        layer.innerHTML = `<div class="gift-text">${text}</div>`;
        setTimeout(() => { layer.innerHTML = ""; }, 4000);
    }
}
