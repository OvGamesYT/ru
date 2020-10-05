const discord = require("discord.js"),createPrivateRoom = require("./events/createPrivateRoom.js");

var client = new discord.Client();

client.on("ready",()=>{
    console.log(`Бот запущен.`);
})

client.on("voiceStateUpdate",(oldMember,newMember)=>{
    createPrivateRoom(oldMember,newMember)
})

client.login("NzE3Nzc2MzAxMDE2MjE5NzQ5.XtfPRQ.r7Kdxbp5X8lanZImST78AFrhhCA");

// node index.js