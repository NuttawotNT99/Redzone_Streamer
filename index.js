const keepAlive = require("./server.js")
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
const dotenv = require('dotenv');
const setting = require("./setting.json")
console.log(setting.Token)
const TOKEN = (setting.Token);
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

keepAlive()
client.login(TOKEN)
 
client.on("ready", () => {
    rpcGenerator.getRpcImage("CLIENT ID", "IMAGE")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("twitch")
        .setUrl("https://www.twitch.tv/nuttawot_nt")
        .setType("STREAMING")
        .setApplicationId("CLIENT ID")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("https://discord.gg/RedzoneShop")
        .setDetails("Discord Shop")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`[!] Token Logged In : ${client.user.username}
[!] Discord : Discord/Redzoneshop
[!] Credit : !𝐍𝟒𝟕.◡̈#0001`)
})
