const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setFooter('©️ CopyRight Para™️')
.addField('__STOCK__','__**STOCK COMMANDS**__\n\n`$Valorant`:7002 Stock !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
