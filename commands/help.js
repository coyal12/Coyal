const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")       
.setThumbnail('')
.setFooter('©️ CopyRight Para™️')
.addField('__Help__','__**GENERATOR COMMANDS**__\n\n`$Valorant` To Get A Valorant Account !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
