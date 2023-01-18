const prompt = require('prompt');

const badges = [
    { name: "STAFF", count: 1 },
    { name: "PARTNER", count: 2 },
    { name: "HYPESQUAD", count: 4 },
    { name: "BUG_HUNTER_LEVEL_1", count: 8 },
    { name: "MFA_SMS", count: 16 },
    { name: "PREMIUM_PROMO_DISMISSED", count: 32 },
    { name: "HYPESQUAD_ONLINE_HOUSE_1", count: 64 },
    { name: "HYPESQUAD_ONLINE_HOUSE_2", count: 128 },
    { name: "HYPESQUAD_ONLINE_HOUSE_3", count: 256 },
    { name: "PREMIUM_EARLY_SUPPORTER", count: 512 },
    { name: "TEAM_USER", count: 1024 },
    { name: "", count: 2048 },
    { name: "SYSTEM", count: 4096 },
    { name: "HAS_UNREAD_URGENT_MESSAGES", count: 8192 },
    { name: "BUG_HUNTER_LEVEL_2", count: 16384 },
    { name: "UNDERAGE_DELETED", count: 32768 },
    { name: "VERIFIED_BOT", count: 65536 },
    { name: "VERIFIED_DEVELOPER", count: 131072 },
    { name: "CERTIFIED_MODERATOR", count: 262144 },
    { name: "BOT_HTTP_INTERACTIONS", count: 524288 },
    { name: "SPAMMER", count: 1048576 },
    { name: "DISABLE_PREMIUM", count: 2097152 },
    { name: "ACTIVE_DEVELOPER", count: 4194304 }
];

let selectedBadges = [];


console.clear();

console.log('');
console.log('Generate Discord Badge!');
console.log('');
console.log('Available Badges:');


// list all available badges
badges.forEach(badge => {
    if (badge.name == "") {

    } else {
        console.log(badge.name);
    }
})

prompt.start();
prompt.get(['badges'], function (err, result) {
    selectedBadges = result.badges.split(',');
    console.clear();
    console.log('put this into your public flags: ' + calculateBadges(selectedBadges));

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Press any key to exit...', (answer) => {
        rl.close();
    });
});

function calculateBadges(arr) {
    let final = 0;
    selectedBadges.forEach(badge => {
        const badgeIndex = badges.findIndex(b => b.name === badge);
        if (badgeIndex !== -1) {
            final += badges[badgeIndex].count;
        }
    });
    return final;
}
