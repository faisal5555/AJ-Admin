const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : AJ`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : AJ ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "+";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });

client.on('message', function(message) {
    if (message.content == "مسح") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

});
	
  client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 25,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يوم
دد استخدامات الرابط : 25**`)

    }
});


client.on('message', message => {

    if (message.content === "+mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ? ")
           });
             }
if (message.content === "+umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات?")
           });
             }



});






client.on('message', message => {

              if (!message.channel.guild) return;

      if(message.content =='+members')

      var IzRo = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)

      .setFooter(message.author.username, message.author.avatarURL)

      .setTitle(':tulip:| Members info')

      .addBlankField(true)

      .addField(':green_book:| الاونلاين ',

      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)

      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)

      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)

      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)

      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)

      message.channel.send(IzRo);

    });






client.on('message', (message) => {

    if (message.content.startsWith('كيك')) {

        var member= message.mentions.members.first();

        member.kick().then((member) => {

            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');

        }).catch(() => {

            message.channel.send(":x:");

        });

    }

});




client.on('message', (message) => {

    if (message.content.startsWith('باند ')) {

      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');

        var member= message.mentions.members.first();

        member.ban().then((member) => {

         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');

        }).catch(() => {

            message.channel.send('Error :_:');

        });

    }

});







client.on("message", message => {
      if (message.guild) {
      let embed = new Discord.RichEmbed()
      let args = message.content.split(' ').slice(1).join(' ');
      if(message.content.split(' ')[0] ==prefix + "bc") {
      if (message.author.bot) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
      if (!args[1]) {
              message.channel.send(`${prefix}bc <message>`);
return;
          
  }
const client = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle(' جاري ارسال رسالتك ') 
             .addBlankField(true)
             .addField(':two_men_holding_hands: | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
             .addField(':incoming_envelope: | الرسالة ', args)
             .setColor('RANDOM')  
              message.channel.sendEmbed(client);  
                 message.channel.send('لتأكيد الرسالة(نعم/لا)');

      let user = message.author;
const collector = new Discord.MessageCollector(message.channel, m => user === user, { time: 10000 }) 
     collector.on('collect', message => {
      if (message.content == "نعم") {
              message.guild.members.forEach(m => {
      var bc = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .addField(' الـسيرفر', `${message.guild.name}`,true)
             .addField(' الـمرسل ', `${message.author.username}#${message.author.discriminator}`,true)
             .addField(' الرسالة ', args)
             .setThumbnail(message.guild.iconURL)
             .setColor('RANDOM')
             m.send(`${m}`,{embed: bc});
 })                
  } else if (message.content == "لا") {
return message.reply('لن يتم ارسال الرسالة');
  }                          
});
  }
  } else {
return;
  }        
});






client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "AJ Gaming")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'chat');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "AJ Gaming")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(`  **تم دعوته من قبل ${Invite.inviter} ** 
 :link:  https://discord.gg/${Invite.code}`)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});




client.on('message', message => {
var prefix = "+";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;
if (message.content.startsWith(prefix + 'مشغول')) {
  if (message.author.id !== '400955088052420610') return message.react('⚠')
client.user.setStatus('dnd');  
message.react("✅")
}
                        
 });


client.on('message', message => {
var prefix = "+";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;


if (message.content.startsWith(prefix + 'متصل')) {
  if (message.author.id !== '400955088052420610') return message.react('⚠')
  client.user.setStatus('online');  
message.react("✅")
}
                        
 });


client.on('message', message => {
var prefix = "+";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;
if (message.content.startsWith(prefix + 'فلخارج')) {
   if (message.author.id !== '400955088052420610') return message.react('⚠')
client.user.setStatus('idle');  
message.react("✅")
}
                        
 });


client.on('message', message => {
var prefix = "+";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;


if (message.content.startsWith(prefix + 'مخفي')) {
    if (message.author.id !== '400955088052420610') return message.react('⚠')
client.user.setStatus('invisible');  
message.react("✔")
}
                        
 });





 const adminprefix = "+";
const devs = ['400955088052420610'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'playing')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`);
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then;
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`);
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'streaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`);
}

});







client.login(process.env.BOT_TOKEN);
