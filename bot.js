const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = `!`;
let cooldown = new Set();
let cdseconds = 43200;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`!ödül`);
});





client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (cooldown.has(message.author.id)){
    message.delete();
    const cooldown = new Discord.MessageEmbed()
    	.setTitle("LignumCraft Ödül BOT")
    	.setDescription("Bir sonraki ödülü almak için 12 saat beklemelisiniz.")
    	.setColor('#0099ff')
    message.channel.sendEmbed(cooldown);
    message.reply("Bir sonraki ödülü almak için 12 saat beklemelisiniz.");
    return;
  }
  
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  if (command === 'ödül') {

  	if (!args.length) {
  		return message.channel.send(`Kullanım: !ödül <Oyundaki Nick> <Oyundaki sunucu>  Örnek kullanım: /ödül Cleaner07 skyblock, ${message.author}!`);
	  }



//--------------------------------------------------------------------------------------------------
    if(args[1].toLowerCase() === "skyblock"){
      var mysql = require('mysql');

      var con = mysql.createConnection({
        host: process.env.BOT_HOST,
        user: process.env.BOT_USERID,
        password: process.env.BOT_USERPASS,
        database: process.env.BOT_DATABASENAME,
        timestampStrings: true
      });

      con.connect(function (err){
        if(err) throw err;
        var sql = "REPLACE INTO mc_skyblock (skyblock_nick,skyblock_reward_taken_time,skyblock_reward_taken) VALUES (?, CURRENT_TIMESTAMP, ?)";
        var data = [String(args[0].toLowerCase()),true];
        con.query(sql,data,function(err,results){
          if (err) throw err;
          console.log(results);
	  cooldown.add(message.author.id);
          message.reply("Ödülünüz oyunda envanterinize eklendi..");
          return;
        });
      });
    }

    else if(args[1].toLowerCase() === "survival"){
      var mysql = require('mysql');

      var con = mysql.createConnection({
        host: process.env.BOT_HOST,
        user: process.env.BOT_USERID,
        password: process.env.BOT_USERPASS,
        database: process.env.BOT_DATABASENAME,
        timestampStrings: true
      });

      con.connect(function (err){
        if(err) throw err;
        var sql = "REPLACE INTO mc_survival (survival_nick,survival_reward_taken_time,survival_reward_taken) VALUES (?, CURRENT_TIMESTAMP, ?)";
        var data = [String(args[0].toLowerCase()),true];
        con.query(sql,data,function(err,results){
          if (err) throw err;
          console.log(results);
	  cooldown.add(message.author.id);
          message.reply("Ödülünüz oyunda envanterinize eklendi..");
          return;
        });
      });
    }

    else if(args[1].toLowerCase() === "faction"){
      var mysql = require('mysql');

      var con = mysql.createConnection({
        host: process.env.BOT_HOST,
        user: process.env.BOT_USERID,
        password: process.env.BOT_USERPASS,
        database: process.env.BOT_DATABASENAME,
        timestampStrings: true
      });

      con.connect(function (err){
        if(err) throw err;
        var sql = "REPLACE INTO mc_faction (faction_nick,faction_reward_taken_time,faction_reward_taken) VALUES (?, CURRENT_TIMESTAMP, ?)";
        var data = [String(args[0].toLowerCase()),true];
        con.query(sql,data,function(err,results){
          if (err) throw err;
          console.log(results);
  	  cooldown.add(message.author.id);
          message.reply("Ödülünüz oyunda envanterinize eklendi..");
          return;
        });
      });
    }

//-------------------------------------------------------------------------------------------------





  }


});








client.login(process.env.BOT_TOKEN);


