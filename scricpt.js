document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'registration.html';
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'dashboard.html';
});
function transferToMoneyPoint() {
    console.log("Transfer to MoneyPoint Account");
}

function fundWallet() {
    
    console.log("Fund Wallet");
}

function transferToBank() {
    console.log("Transfer to Bank Account");
}

function showMoreBanks() {
    
    console.log("More Bank Services");
}
