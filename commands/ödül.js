const Discord = require("discord.js");
let cooldown = new Set();
let cdseconds = 86400;
exports.run = (client, message, args) => {
  if (cooldown.has(message.author.id)) {
    message.delete();
    const cooldown = new Discord.MessageEmbed()
      .setTitle("LignumCraft Ödül BOT")
      .setDescription(`Bir sonraki ödülü almak için 24 saat beklemelisiniz..`)
      .setColor("#ff0c0c");
    return message.channel.send(cooldown);
    return;
  }
 
  if (!args.length) {
    const usage = new Discord.MessageEmbed()
      .setTitle("LignumCraft Ödül BOT")
      .setDescription(`Kullanım: !ödül <Oyundaki Nick> <Oyundaki sunucu>`)
      .setFooter("Örnek kullanım: /ödül Cleaner07 Skyblock")
      .setColor("#fff50c");
    return message.channel.send(usage);
  }

  //--------------------------------------------------------------------------------------------------
  if (args[1].toLowerCase() === "skyblock") {
    var mysql = require("mysql");

    var con = mysql.createConnection({
      host: process.env.BOT_HOST,
      user: process.env.BOT_USERID,
      password: process.env.BOT_USERPASS,
      database: process.env.BOT_DATABASENAME,
      timestampStrings: true,
    });

    con.connect(function (err) {
      if (err) throw err;
      var sql =
        "REPLACE INTO mc_skyblock (skyblock_nick,skyblock_reward_taken_time,skyblock_reward_taken) VALUES (?, CURRENT_TIMESTAMP, ?)";
      var data = [String(args[0].toLowerCase()), true];
      con.query(sql, data, function (err, results) {
        if (err) throw err;
        console.log(results);
        con.end();
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, cdseconds * 1000);
        const skyblockmsg = new Discord.MessageEmbed()
          .setTitle("LignumCraft Ödül BOT")
          .setDescription(`Ödülünüz, Skyblock sunucusu envanterinize eklendi..`)
          .setColor("#0ea500");
        message.channel.send(skyblockmsg);
        return;
      });
    });
  } else if (args[1].toLowerCase() === "survival") {
    var mysql = require("mysql");

    var con = mysql.createConnection({
      host: process.env.BOT_HOST,
      user: process.env.BOT_USERID,
      password: process.env.BOT_USERPASS,
      database: process.env.BOT_DATABASENAME,
      timestampStrings: true,
    });

    con.connect(function (err) {
      if (err) throw err;
      var sql =
        "REPLACE INTO mc_survival (survival_nick,survival_reward_taken_time,survival_reward_taken) VALUES (?, CURRENT_TIMESTAMP, ?)";
      var data = [String(args[0].toLowerCase()), true];
      con.query(sql, data, function (err, results) {
        if (err) throw err;
        console.log(results);
        con.end();
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, cdseconds * 1000);
        const factionmsg = new Discord.MessageEmbed()
          .setTitle("LignumCraft Ödül BOT")
          .setDescription(`Ödülünüz, Faction sunucusu envanterinize eklendi..`)
          .setColor("#0ea500");
        message.channel.send(factionmsg);
        return;
      });
    });
  } else if (args[1].toLowerCase() === "faction") {
    var mysql = require("mysql");

    var con = mysql.createConnection({
      host: process.env.BOT_HOST,
      user: process.env.BOT_USERID,
      password: process.env.BOT_USERPASS,
      database: process.env.BOT_DATABASENAME,
      timestampStrings: true,
    });

    con.connect(function (err) {
      if (err) throw err;
      var sql =
        "REPLACE INTO mc_faction (faction_nick,faction_reward_taken_time,faction_reward_taken) VALUES (?, CURRENT_TIMESTAMP, ?)";
      var data = [String(args[0].toLowerCase()), true];
      con.query(sql, data, function (err, results) {
        if (err) throw err;
        console.log(results);
        con.end();
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, cdseconds * 1000);
        const survivalmsg = new Discord.MessageEmbed()
          .setTitle("LignumCraft Ödül BOT")
          .setDescription(`Ödülünüz, Survival sunucusu envanterinize eklendi..`)
          .setColor("#e1cc00");
        message.channel.send(survivalmsg);
        return;
      });
    });
  } else {
    const hatamsg = new Discord.MessageEmbed()
      .setTitle("LignumCraft Ödül BOT")
      .setDescription(
        `Yanlış sunucu değeri. Sunucular: <Skyblock, Faction, Survival>`
      )
      .setColor("#ff0c0c");
    message.channel.send(hatamsg);
    return;
  }

  //-------------------------------------------------------------------------------------------------
};
