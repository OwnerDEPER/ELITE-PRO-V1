require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '';
global.ytname = process.env.YT_NAME || "YT: 𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂✓";
global.socialm = process.env.SOCIAL_M || "GitHub: 𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂✓";
global.location = process.env.LOCATION || "America/Lima";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '51941847465';
global.ownername = process.env.OWNER_NAME || '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂✓';
global.botname = process.env.BOT_NAME || '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂✓';

// Default settings 
global.prefix = process.env.PREFIX || '#';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'true'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'false';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'false';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂✓';
global.author = process.env.AUTHOR || '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂✓\n\nContact: +51941847465';
// Default settings 2
global.wm = process.env.WM || "Youtube : 𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂✓";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '[✔] Task executed successfully.',
    prem: '[403] Access denied. Premium user required.',
    admin: '[401] Admin privileges required.',
    botAdmin: '[401] Bot must be an admin to run this command.',
    owner: '[403] Command restricted to bot owner.',
    group: '[400] Command available only in group chats.',
    private: '[400] Command available only in private chats.',
    wait: '[⏳] Processing... Please wait.',
    error: '[500] Unexpected error occurred.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
