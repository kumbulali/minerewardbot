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
    message.reply("Bir sonraki ödülü almak için 12 saat beklemelisiniz.");
    return;
  }
  cooldown.add(message.author.id);
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  if (command === 'ödül') {

  	if (!args.length) {
  		return message.channel.send(`Kullanım: !ödöl <Oyundaki Nick> <Oyundaki sunucu>  Örnek kullanım: /ödül Cleaner07 skyblock, ${message.author}!`);
	  }



//--------------------------------------------------------------------------------------------------
    if(args[1].toLowerCase() === "skyblock"){
      var mysql = require('mysql');

      var con = mysql.createConnection({
        host: "denememcsql.000webhostapp.com",
        user: "id13425323_alikumbul",
        password: "#CWJbqHg9>utlYc-",
        database: "id13425323_mc_sv_online",
        timestampStrings: true
      });

      con.connect(function (err){
        if(err) throw err;
        var sql = "REPLACE INTO mc_skyblock (skyblock_nick,skyblock_reward_taken_time,skyblock_reward_taken) VALUES (?, CURRENT_TIMESTAMP, ?)";
        var data = [String(args[0].toLowerCase()),true];
        con.query(sql,data,function(err,results){
          if (err) throw err;
          console.log(results);
          message.reply("Ödülünüz oyunda envanterinize eklendi..");
          return;
        });
      });
    }

    else if(args[1].toLowerCase() === "survival"){
      var mysql = require('mysql');

      var con = mysql.createConnection({
        host: "databases.000webhost.com",
        user: "id13425323_alikumbul",
        password: "#CWJbqHg9>utlYc-",
        database: "id13425323_mc_sv_online",
        timestampStrings: true
      });

      con.connect(function (err){
        if(err) throw err;
        var sql = "REPLACE INTO mc_survival (survival_nick,survival_reward_taken_time,survival_reward_taken) VALUES (?, CURRENT_TIMESTAMP, ?)";
        var data = [String(args[0].toLowerCase()),true];
        con.query(sql,data,function(err,results){
          if (err) throw err;
          console.log(results);
          message.reply("Ödülünüz oyunda envanterinize eklendi..");
          return;
        });
      });
    }

    else if(args[1].toLowerCase() === "faction"){
      var mysql = require('mysql');

      var con = mysql.createConnection({
        host: "databases.000webhost.com",
        user: "id13425323_alikumbul",
        password: "#CWJbqHg9>utlYc-",
        database: "id13425323_mc_sv_online",
        timestampStrings: true
      });

      con.connect(function (err){
        if(err) throw err;
        var sql = "REPLACE INTO mc_faction (faction_nick,faction_reward_taken_time,faction_reward_taken) VALUES (?, CURRENT_TIMESTAMP, ?)";
        var data = [String(args[0].toLowerCase()),true];
        con.query(sql,data,function(err,results){
          if (err) throw err;
          console.log(results);
          message.reply("Ödülünüz oyunda envanterinize eklendi..");
          return;
        });
      });
    }

//-------------------------------------------------------------------------------------------------





  }


});










client.login('NzAyNjgwODE4MzQ2MjI5ODcx.XqFmmg.iH_BehB58zh_qeI7IPGKxvUGhZc');
