
//¿QUIERES ENCONTRAR UN CASO? GK HAY RAROS BRUHH

//MÁS ACEPTABLE COPIA Y PEGA GRACIAS :v

/* =========================================*/
//*THANKS TO*
// Darin (TEMAN GW)
// Mrf.zvx
// YOGIPW
// ITSMAZGH
// Ramlan ID
// Arya Manik
// MrG3P5
// MrHRTZ
// Nafiz
// Itsmeiky
// DuingZ
// Arga
// Nayla
// Fadhil
// Adiwajshing/baileys
// MhankBarBar
// SlavyanDesu
// Penyedia API
/* =========================================*/
const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
} = require('@adiwajshing/baileys');
//--
//--File js
const {bahasa} = require('./src/bahasa');
const {bottt} = require('./src/asw')
const {negara} = require('./src/kodenegara');
const {wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, clos } = require('./lib/functions');
const {fetchJson} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');
const {color, bgcolor} = require('./lib/color');
//--
//--Pakage Npm
const fs = require("fs") 
const moment = require('moment-timezone');
const {exec} = require('child_process');
const kagApi = require('@kagchi/kag-api');
const fetc = require('node-fetch');
const request = require('request');
const FormData = require('form-data');
const tiktod = require('tiktok-scraper');
const ffmpeg = require('fluent-ffmpeg');
const {removeBackgroundFromImageFile} = require('remove.bg');
const imgbb = require('imgbb-uploader');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const toMs = require('ms');
const f = '```'
const crypto = require('crypto');
const qrcode = require("qrcode-terminal")
const axios = require('axios');
const {ind} = require('./language')
const {antivirtexx} = require('./lib/antivirtex.js');
//--
//--File json bot
const {snk} = require('./lib/snk');
const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));
const up = JSON.parse(fs.readFileSync('./data/settings.json'));
const samih = JSON.parse(fs.readFileSync('./data/simi.json'));
//--
//--File json temp
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'));
const videonye = JSON.parse(fs.readFileSync('./temp/vid.json'));
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'));
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'));
//--File json user
const antilink = JSON.parse(fs.readFileSync('./datauser/antilink.json'));
const afk = JSON.parse(fs.readFileSync('./src/afk.json'));
const _leveling = JSON.parse(fs.readFileSync('./datauser/leveling.json'));
const event = JSON.parse(fs.readFileSync('./datauser/event.json'));
const _level = JSON.parse(fs.readFileSync('./datauser/level.json'));
const _limit = JSON.parse(fs.readFileSync('./datauser/limit.json'));
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));
const premium = JSON.parse(fs.readFileSync('./datauser/premium.json'));
const user = JSON.parse(fs.readFileSync('./datauser/registered.json'));
const nsfw = JSON.parse(fs.readFileSync('./datauser/nsfw.json'));
const antifirtex = JSON.parse(fs.readFileSync('./datauser/antifirtex.json'));
const antifirtex2 = JSON.parse(fs.readFileSync('./datauser/antifirtex2.json'));
const tebakgambar = JSON.parse(fs.readFileSync('./tebakgambar.json'));
const antifirtex3 = JSON.parse(fs.readFileSync('./datauser/antifirtex3.json'));
const antifirtex4 = JSON.parse(fs.readFileSync('./datauser/antifirtex4.json'));
const antifirtex5 = JSON.parse(fs.readFileSync('./datauser/antifirtex5.json'));
const antifirtex6 = JSON.parse(fs.readFileSync('./datauser/antifirtex6.json'));
const autosticker = JSON.parse(fs.readFileSync('./autosticker.json'));
//--
//--Setting
prefix = up.prefix
const limitawal = up.limit;
const memberlimit = up.memberlimit;
const cr = up.cr;
const hargalimit = up.hargalimit;
const NamaBot = up.NamaBot;
const botinfo = up.botinfo;
const numbernye = up.numbernye;
const Ig = up.Ig;
const fake = up.fake;
const Wa1 = up.Wa1;
const Wa2 = up.Wa2;
const Ovo = up.Ovo;
const Pulsa = up.Pulsa;
const Dana = up.Dana;
const blocked = [];
const ownerNumber = up.ownerNumber;
const ownername = up.ownername;
//--
//--Apikey
BarBarKey = up.BarBarKey
vKey = up.Vhtearkey
viKey = up.Vinzapi
meKey = up.Itsmeikyapi
lolKey = up.LolHumanKey
apikey = 'yogipwlolkey'
//--
 
//--Kontak bukan kontol
const vcard1 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + 'FN:FG98\n'
 + 'ORG:Dueño de DyLuxBot;\n' 
 + 'TEL;type=CELL;type=VOICE;waid=59172945992:+591 72945992\n'
 + 'END:VCARD'
      
const vcard2 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + 'FN:FG98-2\n'
 + 'ORG:OWNER DyLux Bot;\n' 
 + 'TEL;type=CELL;type=VOICE;waid=5493884725288:+54 9 388 472-5288\n'
 + 'END:VCARD'
  
ban = []
/*
]==>NO OLVIDES SUSCRIBIRTE AL CANAL <===[
*/    

/********** FUNCTION ***************/
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
]
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = { id: sender, xp: 1, level: 1 }
	_level.push(obj)
	fs.writeFileSync('./datauser/level.json', JSON.stringify(_level))
}
const getLimit = (sender) => {
  let position = false
  Object.keys(limit).forEach ((i) => {
if (limit[position].id === sender) {
  position = i
}
  })
  if (position !== false) {
return limit[position].limit
  }
}

const getuserRandomId = () => {
  return user[Math.floor(Math.random() * user.length)].id
}

const adduserUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  user.push(obj)
  fs.writeFileSync('./datauser/registered.json', JSON.stringify(user))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkuserUser = (sender) => {
  let status = false
  Object.keys(user).forEach((i) => {
if (user[i].id === sender) {
  status = true
}
  })
  return status
}


const addATM = (sender) => {
  const obj = {
id: sender, uang: 0
  }
  uang.push(obj)
  fs.writeFileSync('./datauser/uang.json',
JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
  }
}

const checkATMuser = (sender) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
return uang[position].uang
  }
}

const bayarLimit = (sender, amount) => {
  let position = false
  Object.keys(_limit).forEach((i) => {
if (_limit[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
_limit[position].limit -= amount
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
  }
}

const confirmATM = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
  }
}

const limitAdd = (sender) => {
  let position = false
  Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
  position = i
}
  })
  if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
  }
}
//--Waktu
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
//--
//--Whatsapp start connect
async function starts() {
	const Lxa = new WAConnection()
	Lxa.logger.level = 'warn'
	console.log(banner.string)
	Lxa.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el código qr de arriba'))
	})

	fs.existsSync('./Lexa.json') && Lxa.loadAuthInfo('./Lexa.json')
	Lxa.on('connecting', () => {
		start('2', 'Conectando...')
	})
	Lxa.on('open', () => {
		success('2', 'Conectado')
	})
await Lxa.connect({timeoutMs: 30*1000})
fs.writeFileSync('./Lexa.json', JSON.stringify(Lxa.base64EncodedAuthInfo(), null, '\t'))
	Lxa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Lxa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Lxa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hola @${num.split('@')[0]}👋\Bienvenido/a al Grupo *${mdata.subject}*\n\n ────────────────
┏━━━━━━━━━━━━━━━
┃────「 *_INTRO_* 」─────
┃━━━━━━━━━━━━━━━
┠⊷️ *Nombre* :
┠⊷️ *Edad* :
┠⊷️ *Genero* :
┠⊷️ *Pais* :
┗━━━━━━━━━━━━━━━
Para leer las reglas escribe *${prefix}reglas* `
				
				let buff = await getBuffer(ppimg)
				Lxa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await Lxa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 Promover detectado 」_*\n@${num.split('@')[0]} Nuevo admin`
				let buff = await getBuffer(ppimg)
				Lxa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await Lxa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 ᴅᴇᴍᴏᴛᴇ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\n@${num.split('@')[0]} ʏᴀɴɢ ᴜɴ ᴀᴅᴍɪɴ ꜱɪᴀᴘᴀ?, ᴅᴀʜ ɪᴢɪɴ ᴏᴡɴᴇʀ ɢʀᴜᴘ ʙᴇʟᴜᴍ!`
				let buff = await getBuffer(ppimg)
				Lxa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Lxa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Adios @${num.split('@')[0]} te extrañaremos 😔👋*
_Enterrare profundamente tus servicios_`
				let buff = await getBuffer(ppimg)
				Lxa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	})
		Lxa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
Lxa.on('message-update', async (mek) => {
		try {
const from = mek.key.remoteJid
const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
const sender = mek.key.fromMe ? Lxa.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
 if (messageStubType == 'REVOKE') {
console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
 if (!isRevoke) return
 if (!isCtRevoke) return
 if (!isBanCtRevoke) return
const from = mek.key.remoteJid
const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
let int
let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
const id_deleted = mek.key.id
const conts = mek.key.fromMe ? Lxa.user.jid : Lxa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Lxa.user.name : conts.notify || conts.vname || conts.name || '-'
const opt4tag = {
contextInfo: { mentionedJid: [sender] }
			}
 for (let i = 0; i < infoMSG.length; i++) {
 if (infoMSG[i].key.id == id_deleted) {
const dataInfo = infoMSG[i]
const type = Object.keys(infoMSG[i].message)[0]
const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
const index = Number(int.no)
const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
var itsme = `${numbernye}@s.whatsapp.net`
var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var selepbot72 = {
					contextInfo: {
						participant: itsme,
						  quotedMessage: {
							  extendedTextMessage: {
								  text: split,
							   }
						  }
					 }
			  }
if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
const strConversation = `╭──「 *ANTI-ELIMINAR-MENSAJES* 」

➸ ${f}Nombre :${f} ${f}${pushname}${f}
➸ ${f}Numero :${f} ${sender.replace('@s.whatsapp.net', '')}
➸ ${f}Tipo :${f} ${f}Text${f}
➸ ${f}Hora :${f} ${f}${moment.unix(int.timestamp).format('HH:mm:ss')}${f}
➸ ${f}Fecha :${f} ${f}${moment.unix(int.timestamp).format('DD/MM/YYYY')}${f}
➸ ${f}Mensaje :${f} ${f}${body ? body : '-'}${f}
╰─────「 *DyLux Bot* 」`
				Lxa.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
var itsme = `${numbernye}@s.whatsapp.net`
var split = `${fake}`
const pingbro23 = {
						contextInfo: {
							participant: itsme,
					  		quotedMessage: {
							  	extendedTextMessage: {
								  	text: split,
							  	}
						  	}
					  	}
				  	}
const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
const savedFilename = await Lxa.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
const strConversation = `╭──「 *ANTI-ELIMINAR-MENSAJES* 」

➸ ${f}Nombre :${f} ${f}${pushname}${f}
➸ ${f}Numero :${f} ${sender.replace('@s.whatsapp.net', '')}
➸ ${f}Tipo :${f} ${f}Sticker${f}
➸ ${f}Hora :${f} ${f}${moment.unix(int.timestamp).format('HH:mm:ss')}${f}
➸ ${f}Fecha :${f} ${f}${moment.unix(int.timestamp).format('DD/MM/YYYY')}${f}
╰─────「 *DyLux Bot* 」`

const buff = fs.readFileSync(savedFilename)
Lxa.sendMessage(from, strConversation, MessageType.text, opt4tag)
Lxa.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
var itsme = `${numbernye}@s.whatsapp.net`
var split = `${fake}`
const pingbro22 = {
						contextInfo: {
							participant: itsme,
							  quotedMessage: {
								  extendedTextMessage: {
									  text: split,
								  }
							  }
						  }
					  }
const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
const savedFilename = await Lxa.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
const buff = fs.readFileSync(savedFilename)
const strConversation = `╭──「 *ANTI-ELIMINAR-MENSAJES* 」

➸ ${f}Nombre :${f} ${f}${pushname}${f}
➸ ${f}Numero :${f} ${sender.replace('@s.whatsapp.net', '')}
➸ ${f}Tipo :${f} ${f}Image${f}
➸ ${f}Hora :${f} ${f}${moment.unix(int.timestamp).format('HH:mm:ss')}${f}
➸ ${f}Fecha :${f} ${f}${moment.unix(int.timestamp).format('DD/MM/YYYY')}${f}
➸ ${f}Mensaje :${f} ${body ? body : '-'}\`\`\`
╰─────「 *DyLux Bot* 」`
				Lxa.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

Lxa.on('message-new', async (mek) => {
	try {
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
infoMSG.push(JSON.parse(JSON.stringify(mek)))
fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
const urutan_pesan = infoMSG.length
if (urutan_pesan === 5000) {
infoMSG.splice(0, 4300)
fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const mentionuser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
mentionuser.push(mentionByReply)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
 const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
 const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
 const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
 const args = body.trim().split(/ +/).slice(1)
 const arg = chats.slice(command.length + 2, chats.length)
 const isCmd = body.startsWith(prefix)
 const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
 const totalchat = await Lxa.chats.all()
 const botNumber = Lxa.user.jid
 const ownerNumber = [`${up.ownerNumber}@s.whatsapp.net`]
 const isGroup = from.endsWith('@g.us')
 const sender = isGroup ? mek.participant : mek.key.remoteJid
const isAuto = isGroup ? autosticker.includes(from) : false
 const groupMetadata = isGroup ? await Lxa.groupMetadata(from) : ''
 const groupName = isGroup ? groupMetadata.subject : ''
 const groupId = isGroup ? groupMetadata.jid : ''
 const groupMembers = isGroup ? groupMetadata.participants : ''
 const groupDesc = isGroup ? groupMetadata.desc : ''
 const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
 const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
 const isGroupAdmins = groupAdmins.includes(sender) || false
 const isWelkom = isGroup ? welkom.includes(from) : false
 const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
 const isAntiFirtex2= isGroup ? antifirtex2.includes(from) : false
 const isAntiFirtex3= isGroup ? antifirtex3.includes(from) : false
 const isLevelingOn = isGroup ? _leveling.includes(from) : false
 const isAntiFirtex4= isGroup ? antifirtex4.includes(from) : false
 const isAntiFirtex5= isGroup ? antifirtex5.includes(from) : false
 const isEventon = isGroup ? event.includes(from) : false
 const isAntiFirtex6= isGroup ? antifirtex6.includes(from) : false
 const isNsfw = isGroup ? nsfw.includes(from) : false
 const isAntiLink = isGroup ? antilink.includes(from) : false
 const isOwner = ownerNumber.includes(sender)
 const isSimi = isGroup ? samih.includes(from) : false
 const isUser = user.includes(sender)
 const Rank = getLevelingLevel(sender)
 const isBanned = ban.includes(sender)
 const isPrem = premium.includes(sender) || isOwner
 const sendImage = (teks) => {
 Lxa.sendMessage(from, teks, image, {quoted:mek})}
 const q = args.join(' ')
 const tescuk = ["0@s.whatsapp.net"]
 let pushname = Lxa.contacts[sender] != undefined ? Lxa.contacts[sender].vname || Lxa.contacts[sender].notify: undefined
 const isUrl = (url) => {
  return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
mess = {
wait: '*「 ⌛ 」Espere un momento...*\n\nEspere porfavor ± 1 min! Si no aparece\nPosible ERROR No envíe spam.',
success: '✔ Exito',
ferr: 'Lo siento, la función es un error',
limitend: 'Lo siento, su límite ha expirado, repita la compra.',
error: {
stick: '✘ se produjo un error al convertir la imagen en sticker',
Iv: 'Enlace inválido'
     },
only: {
group: 'Este comando solo puede ser usado en grupos!',
ownerG: 'Este comando solo puede ser usado por el dueño del grupo!',
ownerB: 'Este comando solo puede ser usado por el dueño del bot!',
admin: 'Debes de ser admin para usar este comando!',
benned: '_*Lo siento, su numero ha sido bloqueado, comuniquese con el dueño del bot para el desbloqueo*_',
Badmin: 'El bot debe ser admin para este comando!',
daftarB: `──「 *NO VERIFICADO* 」\n*Hola ${pushname} Aún no estás verificado como usuario de bot*\n\n Escribe *${prefix}verify*`
  }
}
//--Respuesta bot
const reply = (teks) => {
Lxa.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
Lxa.sendMessage(hehe, teks, text)
}
const forwd = { forwardingScore: 1000, isForwarded: true }
const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync(`image/odc.jpeg`)}, "title": fake, "description": "ManikGanz", "currencyCode": "USD", "priceAmount1000": "5000000000", "retailerId": "FdL Fkyy", "productImageCount": 1}, "businessOwnerJid": `59172945992@s.whatsapp.net`}}}
const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, message: { documentMessage: { 'jpegThumbnail': fs.readFileSync('image/odc.jpeg'), mimetype: "application/octet-stream",title: "\n*DyLux • Verificado*", fileLength: "36", pageCount: 0, fileName: `*\nDyLux • Verificado*\n`}}, messageTimestamp: "1614069378", status: "PENDING"}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "\n*DyLux • Verificado*\n", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }
const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? Lxa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "\n*DyLux • Verificado*\n", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, contextInfo: {"mentionedJid": memberr}})
			}
const costum = (pesan, tipe, target, target2) => {
 Lxa.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {
  remoteJid: from
}: {})
  }, message: {
conversation: `${target2}`
  }}})
}
const sendPtt = (teks) => {
  Lxa.sendMessage(from, audio, mp3, {
quoted: mek
  })
}
//--MessageType
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	//TEBAK GAMBAR AUTO
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
const mentionManik = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
mentionByManik = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
mentionManik.push(mentionByManik)
// Adivina la imagen
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply("Genial, lograste responder correctamente\nFelicidades")
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
} else {
reply("No se pudo intenta de nuevo!")
}
}
//ANTI VIRTEX 
    if (mesejAnti.includes("๒๒")){
		if (!isGroup) return
		if (!isAntiFirtex) return
		if (isGroupAdmins) return reply('Grupo de admins libre😁')
		Lxa.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX DETECTADO!!! MAAF ${sender.split("@")[0]} Estaras expulsado del grupo dentro de 5s`)
		setTimeout( () => {
			Lxa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("ahi viene 🌪️")
		}, 4000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("2")
		}, 3000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("3")
		}, 2000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("4")
		}, 1000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("5")
		}, 0)
	}
		
		if (mesejAnti.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")){
		if (!isGroup) return
		if (!isAntiFirtex2) return
		if (isGroupAdmins) return reply('Grupo de admins libre😁')
		Lxa.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Virtex detectado!!! MAAF ${sender.split("@")[0]} Estaras expulsado del grupo dentro de 5s`)
		setTimeout( () => {
			Lxa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("cooorree🌪️")
		}, 4000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("2")
		}, 3000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("3")
		}, 2000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("4")
		}, 1000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("")
		}, 0)
	}
	
	    if (mesejAnti.includes("𝐗-𝐕𝐢𝐫𝐮𝐬")){
		if (!isGroup) return
		if (!isAntiFirtex3) return
		if (isGroupAdmins) return reply('Grupo de admins libre😁')
		Lxa.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Virtex detectado!!! MAAF ${sender.split("@")[0]} Estaras expulsado del grupo dentro de 5s`)
		setTimeout( () => {
			Lxa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("coorreee🌪️")
		}, 4000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("2")
		}, 3000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("3")
		}, 2000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("4")
		}, 1000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("5")
		}, 0)
	}
	
	    if (mesejAnti.includes("*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ")){
		if (!isGroup) return
		if (!isAntiFirtex4) return
		if (isGroupAdmins) return reply('Grupo de admins libre😁')
		Lxa.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Virtex detectado!!! MAAF ${sender.split("@")[0]} Estaras expulsado del grupo dentro de 5s`)
		setTimeout( () => {
			Lxa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("coorreee🌪️")
		}, 4000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("2")
		}, 3000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("3")
		}, 2000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("4")
		}, 1000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("5")
		}, 0)
	}
	
	    if (mesejAnti.includes("𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍")){
		if (!isGroup) return
		if (!isAntiFirtex5) return
		if (isGroupAdmins) return reply('Grupo de admins libre😁')
		Lxa.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Virtex detectado!!! MAAF ${sender.split("@")[0]} Estaras expulsado del grupo dentro de 5s`)
		setTimeout( () => {
			Lxa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("cooorreee")
		}, 4000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("2")
		}, 3000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("3")
		}, 2000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("4")
		}, 1000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("5")
		}, 0)
	}
	
	    if (mesejAnti.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
		if (!isGroup) return
		if (!isAntiFirtex6) return
		if (isGroupAdmins) return reply('Grupo de admins libre😁')
		Lxa.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Virtex detectado!!! MAAF ${sender.split("@")[0]} Estaras expulsado del grupo dentro de 5s`)
		setTimeout( () => {
			Lxa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("2")
		}, 3000)
		setTimeout( () => {
			lxa.updatePresence(from, Presence.composing)
			reply("3")
		}, 2000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("4")
		}, 1000)
		setTimeout( () => {
			Lxa.updatePresence(from, Presence.composing)
			reply("5")
		}, 0)
	}
// ANTI LINK GRUP
if (messagesC.includes("://chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('Admin del Grupo libre :v')
Lxa.updatePresence(from, Presence.composing)
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
reply('byee👋')
}, 1100)
setTimeout( () => {
Lxa.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 1000)
setTimeout( () => {
reply(`No permitimos links de otros grupos *${pushname}* seras expulsado del grupo`)
}, 0)
}
//kolor
colors = ['red','white','black','blue','yellow','green']

//--Console log grup
if (!isGroup && isCmd) console.log('\x1b[1;37m>', time, color(command), 'from', color(pushname), 'args :', (args.length))
			
//--Console log chat pribadi
if (isCmd && isGroup) console.log('\x1b[1;37m>', time, color(command), 'from', (groupName), 'args :', color(args.length))

//---Metadata stiker
let authorname = Lxa.contacts[from] != undefined ? Lxa.contacts[from].vname || Lxa.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }				function addMetadata(packname, author) {	

if (!packname) packname = 'DyLux-FG'; if (!author) author = 'DyLux-FG';	
author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
const json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

let len = JSON.stringify(json).length	
let last	

if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	

if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	

const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	

const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
return `./src/stickers/${name}.exif`	
})	
}
const fakestatus = (teks) => {
Lxa.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": `\n*DyLux • Verificado*\n`,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync('./image/odc.jpeg'),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}
            }
          }
       )
    }

var prema = 'Free'
			if (isPrem) {
				prema = 'Premium'
			}
			if (isOwner) {
				prema = 'JEFE'
			}
var role = 'Novato'
			if (Rank <= 3) {
				role = 'Bronze I'
			} else if (Rank <= 5) {
				role = 'Bronze II'
			} else if (Rank <= 7) {
				role = 'Bronze III'
			} else if (Rank <= 9) {
				role = 'Silver I'
			} else if (Rank <= 11) {
				role = 'Silver II'
			} else if (Rank <= 13) {
				role = 'Silver III'
			} else if (Rank <= 16) {
				role = 'Gold I'
			} else if (Rank <= 18) {
				role = 'Gold II'
			} else if (Rank <= 20) {
				role = 'Gold III'
			} else if (Rank <= 22) {
				role = 'Gold IV'
			} else if (Rank <= 25) {
				role = 'Platinum I'
			} else if (Rank <= 27) {
				role = 'Platinum II'
			} else if (Rank <= 29) {
				role = 'Platinum III'
			} else if (Rank <= 31) {
				role = 'Platinum IV'
			} else if (Rank <= 33) {
				role = 'Diamond I'
			} else if (Rank <= 35) {
				role = 'Diamomd II'
			} else if (Rank <= 37) {
				role = 'Diamond III'
			} else if (Rank <= 39) {
				role = 'Diamond IV'
			} else if (Rank <= 45) {
				role = 'Master'
			} else if (Rank <= 100) {
				role = 'Grand Master'
			}

	  //function leveling
			if (isGroup && isUser && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 10) + 500
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						bayarLimit(sender, 3)
						await reply(ind.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role))
					}
				} catch (err) {
					console.error(err)
				}
			}
//----limit
const isLimit = (sender) => {
  let position = false
  for (let i of _limit) {
if (i.id === sender) {
  let limits = i.limit
  if (limits >= limitawal) {
position = true
return true
  } else {
_limit
position = true
return false
  }
}
  }
  if (position === false) {
const obj = {
  id: sender,
  limit: 1
}
_limit.push(obj)
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
return false
  }
}

//--check limit user
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return Lxa.sendMessage(from, `*Lo siento ${pushname} El límite de hoy ha terminado*\n*Contáctenos* : wa.me/59172945992\n\n*Nota : e daremos un aleatorio del 1 al 10*`, text,{ quoted: mek})
Lxa.sendMessage(from, `*「 LIMITE 」*
El resto de tu límite : ${limitCounts}

NOTA : Llegar al límite. Puedes subir de nivel a través de grupos o límite de compra.`, text, { quoted : mek})
      found = true
      }
    }
if (found === false) {
let obj = { id: sender, limit: 1 }
_limit.push(obj)
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
Lxa.sendMessage(from, `*「 LIMITE 」*
El resto de tu límite : ${limitCounts}

NOTA : Llegar al límite. Puedes subir de nivel a través de grupos o límite de compra.`, text, { quoted : mek})
    }
  }
			// AFK
            for (let x of mentionuser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Lo siento, el usuario al que menciona esta afk. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Con razón " + afk[x.split('@')[0]]
                    }
                    Lxa.sendMessage(from, ini_txt, text, {quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("✔ Has salido del modo afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
            }
//--Balance
if (isUser && isGroup) {
  const checkATM = checkATMuser(sender)
  try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
  } catch (err) {
console.error(err)
  }
}

//--Member limit
if (isGroup) {
try {
const getmemex = groupMembers.length
if (getmemex <= memberlimit) {
reply(`Los miembros de este grupo son insuficientes ${memberlimit}, para usar este bot`)
setTimeout(() => {
Lxa.groupLeave(from)
}, 5000)
setTimeout(() => {
Lxa.updatePresence(from, Presence.composing)
reply("Nos vemos")
}, 4000)
setTimeout(() => {
Lxa.updatePresence(from, Presence.composing)
reply("Oh si, no me olvides:(")
}, 3000)
setTimeout(() => {
Lxa.updatePresence(from, Presence.composing)
reply("Solo invitame de nuevo:)")
}, 2000)
setTimeout(() => {
Lxa.updatePresence(from, Presence.composing)
reply("Los miembros agregan primero")
}, 1000)
setTimeout(() => {
Lxa.updatePresence(from, Presence.composing)
reply("Me despido :)")
}, 0)
}
} catch (err) { console.error(err) }
}

//--Other Function
const apakah = ['Ya',
  'Tidak',
  'Mungkin']
const bisakah = ['Bisa',
  'Tidak Bisa',
  'Mungkin']
const kapankah = ['Hari Lagi',
  'Minggu Lagi',
  'Bulan Lagi',
  'Tahun Lagi']

//--Auto respon
if(budy.match('sange')){
result = fs.readFileSync(`./temp/stick/ ah aha.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('Sange')){
result = fs.readFileSync(`./temp/stick/ ah aha.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('mastah')){
result = fs.readFileSync(`./temp/stick/mastah.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('Mastah')){
result = fs.readFileSync(`./temp/stick/mastah.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('loli')){
result = fs.readFileSync(`./temp/stick/loli.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('Loli')){
result = fs.readFileSync(`./temp/stick/loli.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('menggokil')){
result = fs.readFileSync(`./temp/stick/menggokil.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('Menggokil')){
result = fs.readFileSync(`./temp/stick/menggokil.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('fg')){
result = fs.readFileSync(`./temp/stick/fg.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('Owa')){
result = fs.readFileSync(`./temp/stick/fg.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('tehyung')){
result = fs.readFileSync(`./temp/stick/teh yung.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if(budy.match('Tehyung')){
result = fs.readFileSync(`./temp/stick/teh yung.webp`)
  Lxa.sendMessage(from, result, sticker, {
quoted: mek
  })
}
if (budy.includes("fg98")){
  reply(`*${pushname}*, ¿Por qué llamas a mi dueño?`)
  const fdl = fs.readFileSync('./temp/stick/fg.webp');
  Lxa.sendMessage(from, fdl, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "*Ngapain manggil² owner gw?*", 'jpegThumbnail': fs.readFileSync('./temp/stick/menggokil.webp')}}}})
     }
      if (budy.includes("reglas")){
		Lxa.updatePresence(from, Presence.composing)
	 const loli = fs.readFileSync('./mp3/rules.mp3')
   Lxa.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
   const d = fs.readFileSync('./temp/stick/rules.webp');
   Lxa.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : DJ FG98", 'jpegThumbnail': fs.readFileSync('./temp/stick/owa.webp')}}}})
        }
      if (budy.includes("Trkft")){
 Lxa.updatePresence(from, Presence.composing)
		const coli = fs.readFileSync('./mp3/rules.mp3')
 Lxa.sendMessage(from, coli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  const d = fs.readFileSync('./temp/stick/jget.webp');
 Lxa.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : DJ FG98 ", 'jpegThumbnail': fs.readFileSync('./temp/stick/owa.webp')}}}})
        }
//--End auto respon 1

		    
//--Auto respon 2
switch(is) {
    case 'bot':
buf = fs.readFileSync(`./mp3/tarde.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
    case '5cm':
buf = fs.readFileSync(`./mp3/5cm.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
    case 'abueno':
buf = fs.readFileSync(`./mp3/adiosma.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'botputo':
buf = fs.readFileSync(`./mp3/botputo.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'botculero':
buf = fs.readFileSync(`./mp3/culero.m4a`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'gay':
buf = fs.readFileSync(`./mp3/diagnostico.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'botdormimos':
buf = fs.readFileSync(`./mp3/dormimos.m4a`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'ellanomeama':
buf = fs.readFileSync(`./mp3/ellanomeama.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: _0x128f, ptt: true
})
break
  case 'estuche':
buf = fs.readFileSync(`./mp3/estuche.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'botgay':
buf = fs.readFileSync(`./mp3/gay.m4a`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'botgemime':
buf = fs.readFileSync(`./mp3/gime.m4a`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'lol':
buf = fs.readFileSync(`./mp3/gracioso.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'hola':
buf = fs.readFileSync(`./mp3/holamor.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'jueves':
buf = fs.readFileSync(`./mp3/jueves.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'onichan':
buf = fs.readFileSync(`./mp3/onichan.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'quetejodan':
buf = fs.readFileSync(`./mp3/puto.m4a`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'rezar':
buf = fs.readFileSync(`./mp3/rezar.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'sacamefoto':
buf = fs.readFileSync(`./mp3/sacamefoto.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'sad':
buf = fs.readFileSync(`./mp3/sad2.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'sad2':
buf = fs.readFileSync(`./mp3/sad.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'sexo':
buf = fs.readFileSync(`./mp3/sexo.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'tatas':
buf = fs.readFileSync(`./mp3/tetas.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'teamobot':
buf = fs.readFileSync(`./mp3/teamo.m4a`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
  case 'yamete':
buf = fs.readFileSync(`./mp3/yamate.mp3`)
Lxa.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
 
 
		
case '?help':
case '?menu':
case '-help':
case '.menu':
case '-menu':
case '.help':
case '!help':
case '!menu':
case '*menu':
case '*help':
case 'help' :
case 'menu':
hasil = `Hola ${pushname}, Escribe *${prefix}help* para ver el menu del bot`
reply(hasil)
   break
}
	switch(command) {
case 'help':
case 'menu':
const wew = fs.readFileSync(`image/eweom.jpg`)
const send = "62xxxxxx@s.whatsapp.net"
let a = []
let good = []
for (mem of totalchat){
a.push(mem.jid)
}
for (yaa of a){
if (yaa && yaa.includes('g.us')){
good.push(yaa)
  }
}
menu = fs.readFileSync(`./image/eweom.jpg`)
kntll = `━━━━ 「 *DyLux | Bot* 」 ━━━━

Hola *${pushname}*

‣ Prefijo: *${prefix}* 
‣ Nombre: *DyLux*
‣ Modo: *Enlinea*
‣ Usuarios : *${user.length}* 
‣ Grupo: https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA
‣ Grupo:  http://t.me/AndroidWorldfg

┏━━━━━━━━━━━━━━━━━━━━
┃────〘 *ACERCA DE* 〙───
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}donasi*
┠⊷️ *${prefix}owner*
┠⊷️ *${prefix}chat*
┃ _Comunicate con el desarrollador_
┠⊷️ *${prefix}bugreport*
┃ _Reporta un error al desarrollador_
┠⊷️ *${prefix}request*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *INTERACCION* 〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *bot*
┠⊷️ *teamobot*
┠⊷️ *5cm*
┠⊷️ *abueno*
┠⊷️ *botputo*
┠⊷️ *botculero*
┠⊷️ *gay*
┠⊷️ *botdormimos*
┠⊷️ *ellanomeama*
┠⊷️ *estuche*
┠⊷️ *botgay*
┠⊷️ *botgemime*
┠⊷️ *lol*
┠⊷️ *hola*
┠⊷️ *jueves*
┠⊷️ *onichan*
┠⊷️ *quetejodan*
┠⊷️ *rezar*
┠⊷️ *sacamefoto*
┠⊷️ *sad*
┠⊷️ *sad2*
┠⊷️ *sexo*
┠⊷️ *tetas*
┠⊷️ *yamete*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU GRUPO*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}reglas*
┃ _Envia las reglas_
┠⊷️ *${prefix}welcome*
┃ _Welcome 1/0_
┠⊷️ *${prefix}leveling*
┃ _Leveling 1/0_
┠⊷️ *${prefix}evento*
┠⊷️ *${prefix}antilink*
┠⊷️ *${prefix}antivirtex*
┠⊷️ *${prefix}antidelete*
┠⊷️ *${prefix}antixvirus*
┠⊷️ *${prefix}autosticker*
┠⊷️ *${prefix}infogp*
┃ _Envia info del grupo_
┠⊷️ *${prefix}add*
┃ _Añade a un miembro_
┠⊷️ *${prefix}kick*
┃ _Expulsa a un miembro_
┠⊷️ *${prefix}afk*
┠⊷️ *${prefix}okick*
┃ _expulsa a un miembro_
┠⊷️ *${prefix}link*
┃ _Envia el link del grupo_
┠⊷️ *${prefix}promote*
┃ _Dar Admin_
┠⊷️ *${prefix}demote*
┃ _Quitar Admin_
┠⊷️ *${prefix}setname*
┃ _Cambia el nombre del grupo_
┠⊷️ *${prefix}setdes*
┃ _Cambia la descrp del grupo_
┠⊷️ *${prefix}leave*
┃ _El bot deja el grupo_
┠⊷️ *${prefix}tagall*
┃ _Menciona a todos_
┠⊷️ *${prefix}tagall2*
┠⊷️ *${prefix}guapo*
┠⊷️ *${prefix}guapa*
┠⊷️ *${prefix}listonline*
┃ _Miembros en linea_
┠⊷️ *${prefix}staff*
┃ _Muestra todos los admis_
┠⊷️ *${prefix}del*
┃ _Borrar el mensaje del bot_
┠⊷️ *${prefix}ownergroup*
┃ _Creador del grupo_
┠⊷️ *${prefix}notify*
┃ _Envia una notificacion a todos_
┠⊷️ *${prefix}here*
┃ _Notificacion a todos_
┠⊷️ *${prefix}nivel*
┃ _Muestra tu nivel_
┠⊷️ *${prefix}perfil*
┃ _Muestra tu perfil_
┠⊷️ *${prefix}mining*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU FUN*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}alay*
┠⊷️ *${prefix}alay2*
┠⊷️ *${prefix}reverse*
┠⊷️ *${prefix}hilih*
┠⊷️ *${prefix}namae*
┠⊷️ *${prefix}pantun*
┠⊷️ *${prefix}bucin*
┠⊷️ *${prefix}katadoi*
┠⊷️ *${prefix}bijak*
┠⊷️ *${prefix}chatprank*
┠⊷️ *${prefix}itsme*
┠⊷️ *${prefix}fml*
┠⊷️ *${prefix}beban*
┠⊷️ *${prefix}tolol*
┠⊷️ *${prefix}next*
┠⊷️ *${prefix}shipping*
┠⊷️ *${prefix}ngewe*
┠⊷️ *${prefix}tagme*
┠⊷️ *${prefix}fitnah*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU MEDIA*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}listvn*
┠⊷️ *${prefix}listimg*
┠⊷️ *${prefix}liststik*
┠⊷️ *${prefix}listvid*
┠⊷️ *${prefix}darkjokes*
┠⊷️ *${prefix}tupai*
┠⊷️ *${prefix}slow*
┠⊷️ *${prefix}bass*
┠⊷️ *${prefix}gemuk*
┠⊷️ *${prefix}gemes*
┠⊷️ *${prefix}imut*
┠⊷️ *${prefix}trigger-a*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU ANIME*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}kusonime*
┠⊷️ *${prefix}kusonimesearch*
┠⊷️ *${prefix}neonime*
┠⊷️ *${prefix}waifu*
┠⊷️ *${prefix}animeboy*
┠⊷️ *${prefix}charnime*
┠⊷️ *${prefix}wait*
┠⊷️ *${prefix}anime*
┠⊷️ *${prefix}anime2*
┠⊷️ *${prefix}loli*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU ECONOMIA*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}limite*
┠⊷️ *${prefix}transfer*
┠⊷️ *${prefix}bal*
┠⊷️ *${prefix}buylimit*
┠⊷️ *${prefix}listapremium*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU KERANG*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}apakah*
┠⊷️ *${prefix}bisakah*
┠⊷️ *${prefix}kapankah*
┠⊷️ *${prefix}bagaimanakah*
┠⊷️ *${prefix}rate*
┠⊷️ *${prefix}hobby*
┠⊷️ *${prefix}gantengcek*
┠⊷️ *${prefix}cantikcek*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU DESCARGAS*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}ytmp3*
┠⊷️ *${prefix}ytmp4*
┠⊷️ *${prefix}fb*
┠⊷️ *${prefix}ig*
┠⊷️ *${prefix}scdl*
┠⊷️ *${prefix}tik*
┠⊷️ *${prefix}snack*
┠⊷️ *${prefix}pin*
┠⊷️ *${prefix}joox*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU EDICION*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}costumwp*
┠⊷️ *${prefix}bakar*
┠⊷️ *${prefix}facebookpage*
┠⊷️ *${prefix}pantaimalam*
┠⊷️ *${prefix}gtav*
┠⊷️ *${prefix}sketch*
┠⊷️ *${prefix}raindrop*
┠⊷️ *${prefix}nightbeach*
┠⊷️ *${prefix}wanted*
┠⊷️ *${prefix}drawing*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU JUEGOS*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}tebakgambar*
┠⊷️ *${prefix}caklontong*
┠⊷️ *${prefix}persengay*
┠⊷️ *${prefix}persenbucin*
┗━━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *TOD MENU*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}truth*
┠⊷️ *${prefix}dare*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU TOOLS*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}stiker*
┠⊷️ *${prefix}smoji*
┠⊷️ *${prefix}stickerwa*
┠⊷️ *${prefix}triggered*
┠⊷️ *${prefix}wasted*
┠⊷️ *${prefix}ttp*
┠⊷️ *${prefix}attp*
┠⊷️ *${prefix}toimg*
┠⊷️ *${prefix}tomp3*
┠⊷️ *${prefix}tts*
┠⊷️ *${prefix}igstalk*
┠⊷️ *${prefix}timer*
┠⊷️ *${prefix}nulis*
┠⊷️ *${prefix}nickff*
┠⊷️ *${prefix}ocr*
┠⊷️ *${prefix}ocr*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU TEXTOS*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}goodgirl*
┠⊷️ *${prefix}goodboy*
┠⊷️ *${prefix}badgirl*
┠⊷️ *${prefix}gayserti*
┠⊷️ *${prefix}bucinserti*
┠⊷️ *${prefix}sadboy*
┠⊷️ *${prefix}hekelserti*
┠⊷️ *${prefix}bocilepep*
┠⊷️ *${prefix}ffserti*
┠⊷️ *${prefix}babu*
┠⊷️ *${prefix}fucekboy*
┠⊷️ *${prefix}anakharam*
┠⊷️ *${prefix}tahta*
┠⊷️ *${prefix}googlesearch*
┠⊷️ *${prefix}hacercita*
┠⊷️ *${prefix}shadow*
┠⊷️ *${prefix}cup*
┠⊷️ *${prefix}cup1*
┠⊷️ *${prefix}smoke*
┠⊷️ *${prefix}burnpaper*
┠⊷️ *${prefix}lovemessage*
┠⊷️ *${prefix}undergrass*
┠⊷️ *${prefix}love*
┠⊷️ *${prefix}coffe*
┠⊷️ *${prefix}woodheart*
┠⊷️ *${prefix}woodenboard*
┠⊷️ *${prefix}summer3d*
┠⊷️ *${prefix}wolfmetal*
┠⊷️ *${prefix}nature3d*
┠⊷️ *${prefix}underwater*
┠⊷️ *${prefix}golderrose*
┠⊷️ *${prefix}letterleaves*
┠⊷️ *${prefix}summernature*
┠⊷️ *${prefix}romance*
┠⊷️ *${prefix}letterleaves*
┠⊷️ *${prefix}glowingneon*
┠⊷️ *${prefix}fallleaves*
┠⊷️ *${prefix}flamming*
┠⊷️ *${prefix}harrypotter*
┠⊷️ *${prefix}carvedwood*
┠⊷️ *${prefix}tiktok*
┠⊷️ *${prefix}arcade8bit*
┠⊷️ *${prefix}battlefield4*
┠⊷️ *${prefix}pubg*
┠⊷️ *${prefix}freefire*
┠⊷️ *${prefix}wetglass*
┠⊷️ *${prefix}multicolor3d*
┠⊷️ *${prefix}watercolor*
┠⊷️ *${prefix}luxurygold*
┠⊷️ *${prefix}galaxywallpaper*
┠⊷️ *${prefix}lighttext*
┠⊷️ *${prefix}beautifulflower*
┠⊷️ *${prefix}puppycute*
┠⊷️ *${prefix}royaltext*
┠⊷️ *${prefix}heartshaped*
┠⊷️ *${prefix}galaxystyle*
┠⊷️ *${prefix}hologram3d*
┠⊷️ *${prefix}greenneon*
┠⊷️ *${prefix}birthdaycake*
┠⊷️ *${prefix}glossychrome*
┠⊷️ *${prefix}greenbush*
┠⊷️ *${prefix}metallogo*
┠⊷️ *${prefix}noeltext*
┠⊷️ *${prefix}glittergold*
┠⊷️ *${prefix}textcake*
┠⊷️ *${prefix}starsnight*
┠⊷️ *${prefix}textbyname*
┠⊷️ *${prefix}wooden3d*
┠⊷️ *${prefix}writegalacy*
┠⊷️ *${prefix}galaxybat*
┠⊷️ *${prefix}snow3d*
┠⊷️ *${prefix}birthdayday*
┠⊷️ *${prefix}goldplaybutton*
┠⊷️ *${prefix}silverplaybutton*
┠⊷️ *${prefix}pornhub*
┠⊷️ *${prefix}glitch*
┠⊷️ *${prefix}avenger*
┠⊷️ *${prefix}space*
┠⊷️ *${prefix}ninjalogo*
┠⊷️ *${prefix}marvelstudio*
┠⊷️ *${prefix}lionlogo*
┠⊷️ *${prefix}wolflogo*
┠⊷️ *${prefix}steel3d*
┠⊷️ *${prefix}wallgravity*
┠⊷️ *${prefix}ktpmaker*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU IMAGEN*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}hamster*
┠⊷️ *${prefix}aesthetic*
┠⊷️ *${prefix}cogan*
┠⊷️ *${prefix}cecan*
┠⊷️ *${prefix}randombts*
┠⊷️ *${prefix}randomexo*
┠⊷️ *${prefix}blackpink*
┠⊷️ *${prefix}imageislamic*
┠⊷️ *${prefix}imagegame*
┠⊷️ *${prefix}meme*
┠⊷️ *${prefix}memeindo*
┠⊷️ *${prefix}twit*
┠⊷️ *${prefix}quoteskehidupan*
┠⊷️ *${prefix}citas*
┠⊷️ *${prefix}Wp*
┠⊷️ *${prefix}cyberpunk*
┠⊷️ *${prefix}img*
┠⊷️ *${prefix}ww2*
┠⊷️ *${prefix}anjing*
┠⊷️ *${prefix}kucing*
┠⊷️ *${prefix}kelinci*
┠⊷️ *${prefix}doraemon*
┠⊷️ *${prefix}google*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *HOROSCOPO*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}artinama*
┠⊷️ *${prefix}couple*
┠⊷️ *${prefix}weton*
┠⊷️ *${prefix}zodiak*
┠⊷️ *${prefix}artimimpi*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *EDUCACION*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}wiki*
┠⊷️ *${prefix}kbbi*
┠⊷️ *${prefix}trad*
┠⊷️ *${prefix}fakta*
┠⊷️ *${prefix}kodebahasa*
┠⊷️ *${prefix}kodenegara*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU DEL DUEÑO*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}clone*
┠⊷️ *${prefix}block*
┠⊷️ *${prefix}Unblock**
┠⊷️ *${prefix}bc*
┠⊷️ *${prefix}addprem*
┠⊷️ *${prefix}dellprem*
┠⊷️ *${prefix}sendkontak*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *TIEMPO*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}cuaca*
┠⊷️ *${prefix}infogempa*
┠⊷️ *${prefix}kodepos*
┠⊷️ *${prefix}covidindo*
┠⊷️ *${prefix}covidglobal*
┠⊷️ *${prefix}coronainfo*
┠⊷️ *${prefix}cal*
┗━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━━━━━━
┃──〘 *MENU NSFW*〙─
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}randombokep*
┠⊷️ *${prefix}randomhentai*
┠⊷️ *${prefix}pussy*
┠⊷️ *${prefix}nsfw*
┠⊷️ *${prefix}neko*
┠⊷️ *${prefix}nekopoi*
┠⊷️ *${prefix}femdom*
┠⊷️ *${prefix}cuddle*
┠⊷️ *${prefix}cum_jpg*
┠⊷️ *${prefix}wallpaper*
┠⊷️ *${prefix}kiss*
┠⊷️ *${prefix}erok*
┠⊷️ *${prefix}feetg*
┠⊷️ *${prefix}tits*
┠⊷️ *${prefix}anal*
┠⊷️ *${prefix}cum*
┠⊷️ *${prefix}erofeet*
┠⊷️ *${prefix}cuddle*
┠⊷️ *${prefix}bj*
┠⊷️ *${prefix}nekonime*
┠⊷️ *${prefix}blowjob*
┠⊷️ *${prefix}baka*
┠⊷️ *${prefix}lewd*
┠⊷️ *${prefix}solo*
┠⊷️ *${prefix}eroyuri*
┠⊷️ *${prefix}hug*
┠⊷️ *${prefix}hug2*
┠⊷️ *${prefix}dewabatch*
┠⊷️ *${prefix}cersex*
┗━━━━━━━━━━━━━━━━━━━━

━━ 「 *FG98 - DyLux* 」 ━━`

Lxa.sendMessage(from, menu, image, { quoted: freply, caption: kntll, contextInfo: {"mentionedJid": [send], forwardingScore: 1000, isForwarded: true }})

break
			
//REGLAS DE BOT

case 'reglasbot':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.daftarB)
mmklu = fs.readFileSync(`./image/mmk.jpeg`)
kntl = `╭ *〔REGLAS DEL BOT 〕*
┃ *➣ No llamar
┃ *➣ No spam por privado
┃ *➣ No ejecute muchos comandos por segundo
╰━━━━━━━━━━━━━━━━━`
Lxa.sendMessage(from, mmklu, image, { quoted: freply, caption: kntl })
break
	
//REGLAS DEL GRUPO ANDROID WORLD
			
case 'reglasgp':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.daftarB)
kntl = `╭ *〔REGLAS DEL GRUPO〕*

*📲💻ANDROID WORLD🎬🎮*


                 🔷Te ofrece🔶


➢ Todo para tu celular android! 📱
➢Juegos de todo tipo🎮👾
➢🛠 Herramientas para personalizar tu celular 🔧🔩
➢ Aplicaciones⚙🕋🎮
➢ Juegos PPSSPP
➢ Libros🗃📚
➢ Todo tipo de archivos apk
➢ Ayuda y aplicaciones para usuarios root 📱
➢ Fondos📱🖼
➢ Programas para pc
➢ Videos🎞🎥 (leer reglas) 
➢ Películas📽🍿
➢ Música 🎵🎶🎧
➢ Y mucho más ✅


💠Envía y descarga juegos, aplicaciones, herramientas y todo lo relacionado para tu android 
💠 si tienes problemas en tu android, cuéntanos y entre todos nos ayudaremos 


❢◥ ▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬ ◤❢


                 ❌ *REGLAS* ❌




🚫 ➭ *ADMINISTRADORES NO ANULAR EL LINK DEL GRUPO* (importante!). 
🚫 ➭No  enviar links de otros grupos, no importa el contenido del grupo. (pueden enviar links de otras redes sociales menos de whatsapp) 
🚫 ➭ No xxx, gore, filias o material explícito. 
🚫 ➭ No  incitar, crear o seguir peleas entre usuarios.
🚫 ➭ No pedir rango de administrador.
🚫 ➭ No hacer  spam.
🚫 ➭ No spamear con stickers
🚫 ➭ No pedir cosas sin pedir el favor.
🚫 ➭ No enviar cadenas molestas.
🚫 ➭ *No pedir sin aportar antes, muy importante.* 
🚫 ➭ No ser irrespetuoso con los miembros del grupo.
🚫 ➭ *Intercambiar, está totalmente prohibido.* 
🚫 ➭ No enviar aplicaciones maliciosas (virus, o con un fin no bueno para quien lo instala).


ツ📦Sólo se tomará como aporte los archivos que pesen 10 MB o más 
🚷 La gente inactiva se elimina cada vez que se llena el grupo o esta inactivo, siempre asegúrate tener más de 30 mensajes✍.
💠si envías música deberás mencionar su género, nombre y artista. 


    *Link del grupo -  Android World*
https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA


*Grupo Telegram*
 http://t.me/AndroidWorldfg


🚷 si  eres eliminado puedes apelar tu eliminación aquí:
https://chat.whatsapp.com/Hcvn72lEw9Y0nYqyR6TcBC


Para pedir desban deberás mostrar una captura del momento de tu eliminación y de la razón que fuiste eliminado 🚷 Si no fuiste eliminado del grupo y entras al de pedir desban, serás eliminado de ambos grupos. ❌


👨🏻‍💻 Siempre y cuando necesites ayuda pide en el grupo, los administradores y usuarios te ayudarán en lo que necesites. 


¡Gracias por ser parte de nuestra comunidad!. 


*Creado el 1 de Marzo de 2018.*`
Lxa.sendMessage(from, mmklu, image, { quoted: freply, caption: kntl })
break
			
			
//--Cek limit user
case 'limit':
			case 'limite':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.daftarB)
  checkLimit(sender)
  break

//---cek saldo user
case 'saldo':
			case 'bal':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
  uangkau = checkATMuser(sender)
  hasil = `╭◪ *「 BAL 」*
╰───────────────╮  
╭───────────────╯
├❏ *Nombre* : ${pushname}
├❏ *Numero* : ${sender.split("@")[0]}
├❏ *Saldo* :  *Rp.${uangkau}.-*
╰───────────────╯`
  reply(hasil)
	break
					case 'slow':
        if (isBanned) return reply(mess.only.benned)
       if (!isUser) return reply(mess.only.daftarB)
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await Lxa.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*SLOW*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
						fs.unlinkSync(ran)
					   })
				break
			case 'buggc':
				reply('ERROR DE GC ACTIVO')
				break
				case 'tupai':
         if (isBanned) return reply(mess.only.benned)
         if (!isUser) return reply(mess.only.daftarB)
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					tup = await Lxa.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "\n*TUPAI*\n\n*BOTZ*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
						fs.unlinkSync(ran)
					   })
				break
				case 'gemuk':
       if (isBanned) return reply(mess.only.benned)
       if (!isUser) return reply(mess.only.daftarB)
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					gem = await Lxa.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "\n*GEMUK*\n\n*BOTZ*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
						fs.unlinkSync(ran)
					   })
				break
		   case 'vibra-a': 
		  if (isBanned) return reply(mess.only.benned)
      if (!isUser) return reply(mess.only.daftarB)
      var req = args.join(' ')            
		bra = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		vi = await Lxa.downloadAndSaveMediaMessage(bra)
		ran = getRandom('.mp4')
		exec(`ffmpeg -i ${vi} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
		fs.unlinkSync(vi)
		if (err) return reply('Error!')
		hah = fs.readFileSync(ran)
		Lxa.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
         })
				break
							
		case 'gemes':
			if (isBanned) return reply(mess.only.benned)
      if (!isUser) return reply(mess.only.daftarB)
					gem = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					es = await Lxa.downloadAndSaveMediaMessage(gem)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${es} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(es)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'imut':
  	  if (isBanned) return reply(mess.only.benned)
      if (!isUser) return reply(mess.only.daftarB)
					im = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mut = await Lxa.downloadAndSaveMediaMessage(im)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mut} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mut)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break					
				case 'bass':   
         if (isBanned) return reply(mess.only.benned)
         if (!isUser) return reply(mess.only.daftarB)
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					bas = await Lxa.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=100:width_type=o:width=2:g=21 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Lxa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "\n*BASS*\n\n*BOTZ*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
						fs.unlinkSync(ran)
					   })
					break

//--Info bot
case 'info':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.daftarB)
mmklu = fs.readFileSync(`./image/mmk.jpeg`)
kntl = `╭ *〔 𝐈 𝐍 𝐅 𝐎 𝐁 𝐎 𝐓 〕*
┃ *➣ Name* :DyLux 𝖇𝖔𝖙
┃ *➣ Versi* : 10
┃ *➣ Owner* : ${ownername}
┃ *➣ Totaluser* : ${user.length}
┃ *➣ Prefix* : ${prefix}
┃ *➣ Bloqueados* : ${blocked.length}
╰━━━━━━━━━━━━━━━━━
「 *FG98 - DyLux* 」`
Lxa.sendMessage(from, mmklu, image, { quoted: freply, caption: kntl })
break
			
//PREMIUM
case 'premiumlist':
case 'premlist':
	case 'listapremium':		
Lxa.updatePresence(from, Presence.composing) 
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
teks = `*Usuarios Premium*\n`
no = 0
for (let premi of premium) {
no += 1
teks += `${no.toString()} @${premi.split('@')[0]}\n`
}
Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premi}})
break
case 'leveling':
if (isBanned) return reply(mess.only.benned)
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}leveling 1`)
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('Ya Activo')
_leveling.push(from)
fs.writeFileSync('./datauser/leveling.json', JSON.stringify(_leveling))
reply('「✔」Función de nivel habilitada')
} else if (Number(args[0]) === 0) {
_leveling.splice(from, 1)
fs.writeFileSync('./datauser/leveling.json', JSON.stringify(_leveling))
reply('「✔」Nivelacion deshabilitada')
} else {
reply('1 para activar, 0 para desactivar')
}
break
case 'event':
	case 'evento':
if (!isOwner) return reply('_*Fitur ini hanya bisa digunakan oleh owner Fadil*_')
if (args.length < 1) return reply('Boo :𝘃')
if (Number(args[0]) === 1) {
if (isEventon) return reply('*SUDAH AKTIF* !!!')
event.push(from)
fs.writeFileSync('./datauser/event.json', JSON.stringify(event))
reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
} else if (Number(args[0]) === 0) {
event.splice(from, 1)
fs.writeFileSync('./datauser/event.json', JSON.stringify(event))
reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
} else {
reply(ind.satukos())
}
break
case 'mining':
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner bot`)
if (isOwner | isPrem) {
const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
addLevelingXp(sender, one)
await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
}else{
const mining = Math.ceil(Math.random() * 1000000000000000000000000)
addLevelingXp(sender, mining)
await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
}
break
case 'level':
case 'lvl':
case 'nivel':
if (!isLevelingOn) return reply(ind.lvlnoon())
if (!isGroup) return reply(mess.only.group)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
coli = `┏━━━━━━♡ *NIVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ Nombre : ${pushname}\n┃│➸ Numero : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ NIVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
Lxa.sendMessage(from, coli, text, { quoted: freply})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break
case 'addprem':
	case 'añadirpremium':		
adprem = `${args[0].replace('@', '')}@s.whatsapp.net`
premium.push(adprem)
fs.writeFileSync('./datauser/prem.json', JSON.stringify(premium))
fakestatus(`✔ Se agrego al usuario a premium`)
break
case 'dellprem':
			case 'delprem':
			case 'quitarpremium':
delprem = `${args[0].replace('@', '')}@s.whatsapp.net`
delp = ban.indexOf(delprem)
premium.splice(delp, 1)
fs.writeFileSync('./datauser/prem.json', JSON.stringify(premium))
fakestatus(`✔ Se quito premium al usuario`)
break
//---Kecepatan respon
case 'speed':
case 'ping':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
const timestamp = speed();
const latensi = speed() - timestamp
fakestatus(`Speed: ${latensi.toFixed(4)} _ms_`)
break
case 'runtime':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
runtime = process.uptime()
runte = `「 *RUNTIME* 」\n${kyun(runtime)}`
fakestatus(`${runte}`)
break
//---donasi
case 'donasi':
			case 'donate':
 if (isBanned) return reply(mess.only.benned)
Lxa.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.userB)
hasil = `Ayude a donar para mantener el bot en funcionamiento.


*Pulsa :* _${Pulsa}_
*Dana :* _${Dana}_
*OVO :* _${Ovo}_`,
Lxa.sendMessage(from, hasil, text, {
  quoted: freply
})
 break 
//--arti nama
case 'artinama':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
if (args.length == 0) return reply(`Ejemplo: *${prefix + command}* LoL Human`)
ini_nama = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${apikey}&nama=${ini_nama}`)
reply(get_result.result)
break
break

//---couple pasangan
case 'couple':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
Lxa.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.userB)
if (!q.includes(' & ')) return  reply('Lo sentimos, el formato de texto es incorrecto')
const aku = q.substring(0, q.indexOf(' &') - 0)
const kamu = q.substring(q.lastIndexOf('& ') + 1)
try {
data = await fetchJson(`https://arugaz.herokuapp.com/api/jodohku?nama=${aku}&pasangan=${kamu}`, {
  method: 'get'
})
yoi = `‣ *Nombre* : ${aku}
‣ *Pareja* : ${kamu}
‣ *Positivo* : ${data.positif}
‣ *Negativo* : ${data.negatif}`
Lxa.sendMessage(from, yoi, text, {
  quoted: mek
})
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break

//---Zodiak harian
case 'zodiak':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.daftarB)
if (args.length < 1) return reply('*✘* Ingrese un nombre del zodíaco')
Lxa.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.userB)
teks = body.slice(8)
try {
data = await fetchJson(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${vKey}`)
hasil = `Zodiak : *${data.result.zodiak}*\nEl pronóstico de hoy : *${data.result.ramalan}*\n${data.result.inspirasi}`
reply(hasil)
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break

//--pencarian pinterest
  case 'img':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return reply('*✘* Que quieres que busque?')
tels = body.slice(5)
Lxa.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {
  method: 'get'
})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek, caption: `✔ Aqui tienes : *${tels}*`
})
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break

//--Pencarian pinterest
case 'pinterest':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
tels = body.slice(11)
if (args.length < 1) return reply('*✘* Que quieres que busque?')
Lxa.updatePresence(from, Presence.composing)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: freply, caption: `✔ Aqui tienes : *${tels}*`
})
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
	break
		case 'dewabatch':
	   if (isBanned) return reply(mess.only.benned)
     if (!isUser) return reply(mess.only.userB)
     teks = body.slice(11)
     anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
     thum = await getBuffer(anu.thumb)
     Lxa.sendMessage(from, thum, image, {quoted: mek, caption: `${anu.result}`})
    	break
//--pinterest anime neko
case 'neko':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
Lxa.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek, caption: `Ini ?`
})
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break
case 'nekopoi':
if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
ini_url = args[0]
get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${apikey}&url=${ini_url}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.anime}\n`
ini_txt += `Porducers : ${get_result.producers}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Size : ${get_result.size}\n`
ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
link = get_result.link
for (var x in link) {
ini_txt += `\n${link[x].name}\n`
link_dl = link[x].link
for (var y in link_dl) {
ini_txt += `${y} - ${link_dl[y]}\n`
 }
}
ini_buffer = await getBuffer(get_result.thumb)
Lxa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
break
//--Pinteres anime loli
  case 'loli':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
Lxa.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek, caption: `kyaa >_< o... onii - chan >///<`
})
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break
case 'waifu':
try {
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
Lxa.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
})})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('*ERROR*')
}
await limitAdd(sender) 
		break
//--Pinterest Twitter
  case 'twit':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
Lxa.updatePresence(from, Presence.composing)
tw = ["Twitter lucu Indonesia",
  "Twitter harian",
  "Recehkan Twitter",
  "twit lucu"]
nk = tw[Math.floor(Math.random() * tw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: mek
})
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break
  //
		case 'animegirl':
	anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
	var n = JSON.parse(JSON.stringify(anu));
  var nimek =  n[Math.floor(Math.random() * n.length)];
	pok = await getBuffer(nimek)
	Lxa.sendMessage(from, pok, image, { quoted: mek })
		break
	  case 'animeimg':
	anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
  var n = JSON.parse(JSON.stringify(anu));
	var nimek =  n[Math.floor(Math.random() * n.length)];
	pok = await getBuffer(nimek)
	Lxa.sendMessage(from, pok, image, { quoted: mek })
			break
  case 'anime':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
Lxa.updatePresence(from, Presence.composing)
am = ["anime tumblr",
  "wallpaper anime hd",
  "anime aestethic",
  "anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
Lxa.sendMessage(from, pok, image, {
  quoted: freply, caption: `wah wibu lu !`
})
await limitAdd(sender)
break
		case 'gay':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  owgi = await Lxa.downloadAndSaveMediaMessage(ger)
reply(mess.wait)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
Lxa.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Usa una foto!')
}
break
//--Pinterest wallpaper
  case 'wp':
case 'wallpaper':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (isLimit(sender)) return reply(mess.limitend)
  Lxa.updatePresence(from, Presence.composing)
  pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper"]
  nk = pw[Math.floor(Math.random() * pw.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: freply, caption: `genial o no ?`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
	case 'gambar':
	const items = ["anime high school dxd", "anime high school dxd hd", "karakter anime high school dxd", "anime high school dxd aesthetic", "wallpaper komputer high school dxd", "wallpaper android high school dxd"];
	const pepw = items[Math.floor(Math.random() * items.length)]
	tod = await getBuffer(`https://api.fdci.se/rep.php?gambar=${items}`)
	Lxa.sendMessage(from, tod, image, { quoted: mek, caption: 'tes'+pepw })
		break
//--Pinterest cecan
case 'cecan':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (isLimit(sender)) return reply(mess.limitend)
  tels = body.slice(5)
  Lxa.updatePresence(from, Presence.composing)
  ty = ["ulzhang girl",
"cewe jepan cantik"]
  nk = ty[Math.floor(Math.random() * ty.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: mek, caption: `No antojar!`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

//--Pinterest quotes
case 'quotes':
			case 'citas':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (isLimit(sender)) return reply(mess.limitend)
  tels = body.slice(5)
  Lxa.updatePresence(from, Presence.composing)
  qt = ["quotes galau",
"quotes aestethic Indonesia"]
  nk = qt[Math.floor(Math.random() * qt.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: freply, caption: `Pobre soltero`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
//--Pinterest cogan
case 'cogan':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
  Lxa.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","cowo ganteng","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: mek, caption: `Guau guapo, soy guapo`
  })
  await limitAdd(sender)
  } catch {
  }
   break
	case 'cersex': 
	if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
   reply(mess.wait)
		gatauda = body.slice(8)					
		anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=1BlnApiIkyPake`, {method: 'get'})
			reply(anu.result.cerita)
					break
		case 'lewd': 
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (isBanned) return reply(mess.only.benned)
   reply(mess.wait)
		anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=syahri2k21`)
		buffer = await getBuffer(anu.result.url)
		Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: 'o hagas ingredientes para mi tío'})
		break
		  case 'baka': 
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
 if (isBanned) return reply(mess.only.benned)
  reply(mess.wait)
	anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=syahri2k21`)
	buffer = await getBuffer(anu.result.url)
	Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ni anjim'})
		break
  case 'eroyuri': 
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (isBanned) return reply(mess.only.benned)
	anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=syahri2k21`)
  reply(mess.wait)
	buffer = await getBuffer(anu.result.url)
	Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
		break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                  if (!isNsfw) return reply(ind.nsfwoff())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`)
                    Lxa.sendMessage(from, ini_buffer, image, { quoted: mek })
		break
	 case 'nekonime': 
	if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
	if (isBanned) return reply(mess.only.benned)
	anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=syahri2k21`)
   reply(mess.wait)
	buffer = await getBuffer(anu.result.url)
	Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
		break
		     case 'hug': 
	if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
	if (isBanned) return reply(mess.only.benned)
  reply(mess.wait)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				break
		     case 'hug2':
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (isBanned) return reply(mess.only.benned)
  reply(mess.wait)
			anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=syahri2k21`)
				buffer = await getBuffer(anu.result.url)
				Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				break
       case 'randombokep':
  if (!isNsfw) return reply(ind.nsfwoff())
	if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
	if (isBanned) return reply(mess.only.benned)
   	 data = fs.readFileSync('./src/18.js');
     jsonData = JSON.parse(data);
     randIndex = Math.floor(Math.random() * jsonData.length);
     randKey = jsonData[randIndex];
     randBokep = await getBuffer(randKey.image)
     reply('*JANGAN SANGEAN YA!*')
     randTeks = randKey.teks
     Lxa.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
      break
			case 'amv':
	Lxa.updatePresence(from, Presence.composing)
  reply(mess.wait)
	data = fs.readFileSync('./src/amv.js');
  jsonData = JSON.parse(data);
  randIndex = Math.floor(Math.random() * jsonData.length);
	 randKey = jsonData[randIndex];
	 buffer = await getBuffer(randKey.result)
	 Lxa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
			break
			case 'solo':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (isLimit(sender)) return reply(mess.limitend)
		try {
   axios.get(`https://nekos.life/api/v2/img/solo`).then((res)=>{
		imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
	Lxa.sendMessage(from, buf, image, {quoted: mek,caption: "*RECUERDA QUE HAY UN DIOS*"})
		})})
	} catch (e) {
			console.log(`Error :`, color(e,'red'))
			reply('ERROR')
					}
					break
   case 'randomhentai':
 if (!isNsfw) return reply(ind.nsfwoff())
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (isLimit(sender)) return reply(mess.limitend)
    gatauda = body.slice(6)
    reply('[❗] SIENDO PROCESADO')
    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
    buffer = await getBuffer(anu.result)
    Lxa.sendMessage(from, buffer, image, {quoted: mek})
     await limitAdd(sender)
    break
//--Pinterest cyberpunk
case 'cyberpunk':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (isLimit(sender)) return reply(mess.limitend)
  Lxa.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  Lxa.sendMessage(from, pok, image, {
quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

case 'jadian':
			case 'shipping':
  if (isBanned) return reply(mess.only.benned)
  if (!isGroup) return reply(mess.only.group)
  if (!isUser) return reply(mess.only.daftarB)
  if (isLimit(sender)) return reply(mess.limitend)
   	jds = []
  	const jdii = groupMembers
  	const koss = groupMembers
		const akuu = jdii[Math.floor(Math.random() * jdii.length)]
		const diaa = koss[Math.floor(Math.random() * koss.length)]
			teks = `●❯────────────────❮●
  *La pareja del dia*\n@${akuu.jid.split('@')[0]}\n❤️\n@${diaa.jid.split('@')[0]}\n●❯────────────────❮●`
		jds.push(akuu.jid)
		jds.push(diaa.jid)
		mentions(teks, jds, true)
		await limitAdd(sender)
			break	
     case 'terganteng':
			case 'guapo':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Lo más hermoso de este grupo es @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					break	
    case 'tercantik':
			case 'guapa':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
		jds = []
  const jdiidr = groupMembers
 	const kosstr = groupMembers
 	const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
		teks = `La más bonita de este grupo es @${akuutr.jid.split('@')[0]}`
			jds.push(akuutr.jid)
			mentions(teks, jds, true)
		break	
case 'asupan':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
      get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${apikey}`)
       ini_buffer = await getBuffer(get_result.result)
      Lxa.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
      break
case 'weton':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (isLimit(sender)) return reply(mess.limitend)
 if (args.length < 1) return Lxa.sendMessage(from, `Masukan tanggal-bulan-tahun`, text, {
quoted: mek
  })
  if (!q.includes('-')) return  reply('Ingrese la fecha-mes-año correctamente\n*Contoh : 09-09-2009*')
  pc = body.slice(7)
  teks1 = pc.split("-")[0];
  teks2 = pc.split("-")[1];
  teks3 = pc.split("-")[2];
  reply(mess.wait)
  try {
  iya = await fetchJson(`http://lolhuman.herokuapp.com/api/weton/${teks1}/${teks2}/${teks3}?apikey=${lolKey}`, {
method: 'get'
  })
  hasil = `${iya.result.weton}\n\nKarakteristik: ${iya.result.karakter}\n Profesión : ${iya.result.pekerjaan}\n Fortuna : ${iya.result.rejeki}\nPartido : ${iya.result.jodoh}`
reply(hasil)
break
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

case 'persengay':
			case 'porsengay':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.daftarB)
  if (isLimit(sender)) return reply(mess.limitend)
	if (args.length < 1) return reply('Menciona a alguien!')
	rate = body.slice(11)
	persengayy = ["*4%*\n\n*Arrepentimiento:v*","*9%*\n\n*OTW de Penitencia:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Mierda que gay🤦*","*34%*\n\n *Víctima de Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
		const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
		Lxa.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nRespuesta : '+kl+'', text, { quoted: mek })
  await limitAdd(sender)
  break

case 'persenbucin':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.daftarB)
  if (args.length < 1) return reply('Mana Nama?')
	rate = body.slice(8)
	persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n Hadehhh🏃","74%\n\n bucen Teroosss","83%\n\n Sekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
		const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
		Lxa.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })

  break

//--searching lirik
case 'lirik':
			case 'lyrics':
			case 'letra':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
	anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${body.slice(7)}&apikey=BotWeA`)
	thum = await getBuffer(anu.result.thumb)
	teks = `*LAGU DI TEMUKAN*\n\n*Judul* : ${anu.result.judul}\n*Album* : ${anu.result.album}\n*Public in* : ${anu.result.dipublikasi}\n*Lyrics* : ${anu.result.lirik}`
	Lxa.sendMessage(from, thum, image, { quoted : mek, caption: teks })
	break
case 'namae':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (args.length < 1) return reply('*☒* Masukan nama')
Lxa.updatePresence(from, Presence.composing)
if (isLimit(sender)) return reply(mess.limitend)
teks = body.slice(7) 
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${teks}`)
hasil = `*Nama ninja kamu*\n*${data.result.ninja}*`
reply(hasil)
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break
case 'rules':
	case 'reglas':		
tuh = fs.readFileSync(`./image/mmk.jpeg`)
nehh = `┏━━━━━━━━━━━━━━━━━━━━
┃───〘 *⚠ REGLAS ⚠* 〙──
┃━━━━━━━━━━━━━━━━━━━━
┠⊷️ *${prefix}reglasbot*
┃ _Envia las reglas del bot_
┠⊷️ *${prefix}reglasgp* 
┃ _Envia las reglas del grupo_ 
┗━━━━━━━━━━━━━━━━━━━━`
Lxa.sendMessage(from, tuh, image, { quoted: freply, caption: nehh, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
break
case 'alay':
 if (isBanned) return reply(mess.only.benned) 
 if (!isUser) return reply(mess.only.daftarB)
 if (args.length < 1) return reply('* ✘* Ingrese el texto')
Lxa.updatePresence(from, Presence.composing)
if (isLimit(sender)) return reply(mess.limitend)
teks = body.slice(6)
try {
data = await fetchJson(`https://api.terhambar.com/bpk?kata=${teks}`)
reply(data.text)
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break


case 'gplaystore':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (isLimit(sender)) return reply(mess.limitend)
Lxa.updatePresence(from, Presence.composing)
goo = body.slice(12)
try {
data = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${viKey}&q=${goo}`, {
method: 'get'
  })

teks = '*Google Play Store*\n\n'
		for (let i of data.result) {
		teks += `        ────────────────\n\n‣ *Nombre* : ${i.title}\n‣ *Developer* : ${i.developer}\n‣ *Clasificación* : ${i.rating}\n‣ *Link* : ${i.url}\n\n`
				}
				teks += `        ────────────────`
reply(teks.trim())
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}

break
		case 'googlesearch':
				if (args.length < 1) return reply(`Que quieres buscar?\n*Ejemplo ${prefix}googlesearch Dappa|Ganz|Banget`)
				ct = body.slice(14)
				dap1 = ct.split("/")[0];
        dap2 = ct.split("/")[1];
				dap3 = ct.split("/")[2];
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${dap1}&text2=${dap2}&text3=${dap3}&theme=google-suggestion&apikey=dappabotwa`)
				buffer = await getBuffer(anu.result.url)
				Lxa.sendMessage(from, buffer, image, { quoted: mek, caption: 'Aquí Jan olvidó suscribirse a DappaUhuy & YOGI PW' })
				break
case 'dorking':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
	 reply(mess.wait)
	dork = `${body.slice(9)}`
	anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
	hasil = `${anu.result}`
	Lxa.sendMessage(from, hasil, text, {quoted: mek})
		break  
   case 'faktaunik':
   case 'katabijak':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
   get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
    reply(get_result.result)
   break
case 'pantun':
if (!isUser) return reply(mess.only.daftarB)  
const pantunn =['Plátano para tomates\nAlmacenado en un granero de arroz\nHuele a escozor\nesulta que aún no te has duchado','Caminos a Kolaka\nRealmente es sinuoso por el camino\nSyariat Islam jalan kita\nHadits Nabi sebagai petunjuknya','Kalau sauh di pohon randu\nNanti akan jadi benalu\nKalau jauh merasa rindu\Kalau dekat merasa malu','Bunga-bunga sangat indah\nSungguh indah ada lebah\nJangan mencampur amal ibadah\nDengan musyrik ataupun bid’ah','Naik delman\nMau ke taman\nDia tampan\nTapi sayang, jerawatan','Jalan-jalan ke Kenya\nTetap saja makan roti\nIbadah hanya kepada-Nya\nNiat bersih ikhlas hati','Beribu-ribu burung gelatik\nHanya satu berwarna lurik\nBeribu-ribu gadis yang cantik\nHanya kamu yang paling menarik','Pergi ke pantai bersama\nPulangnya berdua\nIbadah di dunia tiada lama\nAkan selesai saat ajal tiba','Bola pingpong\nDimakan gelatik\nBiar ompong\nYang penting cantik','Sangat lapar menjelang siang\nTerik sekali hingga ada bayang-bayang\nAgama tegak karena tiang\nTiangnya adalah sembayang','Jual tanah tak laku-laku\nTentu hati terasa pilu\nKalau saja engkau terima cintaku\nAh langsung saja ke penghulu','Mama baik pergi ke pasar\nSungguh senang tertawa lebar\nBangunlah di saat fajar\nTunaikan subuh dengan sabar','Pagi-pagi baca koran\nKurang nikmat kalau tanpa kopinya\nAku tak peduli banyak Tuhan\nTuhanku Tuhan Yang Maha Esa','Ajak pacar makan di restauran\nBertemu mantan yang sekarang teman\nHati bingung dan gak karuan\nTernayata mantan minta balikan','Ada lagu judul bang Thoyib\nGak pulang-pulang apakah mati syahid?\nDengar dentum adzan Maghrib\nSegeralah pergi ke Masjid','Pergi ke kota Tuban\nBuat beli buah rambutan\nMantan udah masuk pelaminan\Kenapa kamu masih sendirian','Kapal laut kapal selam\nKena ombak goyang-goyang.\nTidak siang tidak malam\nHanya wajahmu yang terbayang','Narok uang di dalam saku\nSakunya robek gara-gara kuku\nJangan sampai ko menghianatiku\nKarena hanya kau yang selalu ada di hatiku','Lintah datang dari kali\nKalau ke darat langsung mati\nTatapanmu tajam sekali\nSampai-sampai menusuk hati','Tanam mangga tanam kemangi\nSapu halaman hingga bersih\nIndahnya warna warni pelangi\nLebih indah wajahmu kekasih','Batik bukan sembarang baik\nBatik seperti kayu gelam\nCantik bukan sembarang cantik\nCantik dirimu luar dan dalam']
const pengirim = pantunn[Math.floor(Math.random() * pantunn.length)]
Lxa.sendMessage(from, pengirim, text, { quoted: mek })
break   
    case 'sayang':
			 case 'okick':
			 case 'oban':
  if (isBanned) return reply(mess.only.benned)
	if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona a quien quiere expulsar!')
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			if (mentioned.length > 1) {
		teks = 'Orden recibida :\n'
						for (let _ of mentioned) {
				teks += `@${_.split('@')[0]}\n`
						}
					mentions(teks, mentioned, true)
				Lxa.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`haii sayang... anu.. @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 Lxa.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 Lxa.sendMessage(from, '_no es así que es mejor si te mueres_', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 Lxa.sendMessage(from, '_por cierto tengo una sorpresa para ti👉👈_', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 Lxa.sendMessage(from, '_No quieres ser mi ??_', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 Lxa.sendMessage(from, `_Te quiero..@${mentioned[0].split('@')[0]}_`, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
   	break
		case 'kodepos': 
				Lxa.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`y la ciudad?`)
				reply(`[❕] Cargando`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kodepos?kota=${body.slice(8)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Provincia:* : ${i.province}\n*City* : ${i.city}\n*Distritos* : ${i.subdistrict}\n*Ciudad* : ${i.urban}\n*Código Postal* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				break
case 'charnime':
  if (isBanned) return reply(mess.only.benned)
  teks = body.slice(10)
  Lxa.updatePresence(from, Presence.composing)
  if (isLimit(sender)) return reply(mess.limitend)
  if (args.length < 1) return reply('*✘* Ingresa el nombre del personaje de anime')
  try {
  data = await fetchJson(`http://lolhuman.herokuapp.com/api/character?apikey=${lolKey}&query=${teks}`)
  buf = await getBuffer(data.result.image.large)
  hasil = `‣ *Nombre* : ${data.result.name.full} *(${data.result.name.native})*\n‣ *Descripción* : ${data.result.description}`
  Lxa.sendMessage(from, buf, image, {
caption: hasil, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
  
case 'textgen':
  if (!isUser) return reply(mess.only.daftarB)
  if (isBanned) return reply(mess.only.benned)
  teks = body.slice(9)
  if (args.length < 1) return reply('*✘* Ingrese texto')
  Lxa.updatePresence(from, Presence.composing)
  if (isLimit(sender)) return reply(mess.limitend)
  try {
  data = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${teks}`)
  reply(data.result)
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
  case 'hobby':
hobby = body.slice(1)
const hob =['Sibilancias en el juego','Ngocokin Doi','Su antiguo acoso en las redes sociales','No tienes un pasatiempo de Awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
Lxa.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "\n*DYAA*\n\n*BOTZ*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
case 'igstalk':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.daftarB)
hmm = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${body.slice(9)}`)
buffer = await getBuffer(hmm.data.profilehd)
hasil = `Nombre : ${hmm.data.fullname}\nSeguidores : ${hmm.data.follower}\nSeguir : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerificado : ${hmm.data.is_verified}\nbio : ${hmm.data.bio}`
Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
break
case 'apakah':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (args.length < 1) return reply('*✘* Ingrese una pregunta')
  Lxa.updatePresence(from, Presence.composing)
  random = apakah[Math.floor(Math.random() * (apakah.length))]
  hasil = `Apakah : *${body.slice(8)}*\n\nJawaban : *${random}*`
  reply(hasil)
  break

//bisakah
case 'bisakah':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (args.length < 1) return reply('*✘* Ingrese una pregunta')
  Lxa.updatePresence(from, Presence.composing)
  random = bisakah[Math.floor(Math.random() * (bisakah.length))]
  hasil = `Bisakah : *${body.slice(9)}*\n\nJawaban : *${random}*`
  reply(hasil)
  break

case 'rate':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (args.length < 1) return reply('*✘* Ingrese una pregunta')
  Lxa.updatePresence(from, Presence.composing)
  random = `${Math.floor(Math.random() * 100)}`
  hasil = `Rating : *${body.slice(6)}*\n\nJawaban : *${random}%*`
  reply(hasil)
  break

case 'kapankah':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (args.length < 1) return reply('*✘* Ingrese una pregunta')
  Lxa.updatePresence(from, Presence.composing)
  random = kapankah[Math.floor(Math.random() * (kapankah.length))]
  random2 = `${Math.floor(Math.random() * 8)}`
  hasil = `Kapankah : *${body.slice(10)}*\n\nJawaban : *${random2} ${random}*`
  reply(hasil)
  break
	case 'bagaimanakah':
if (!isUser) return reply(mess.only.daftarB)
if (isBanned) return reply(mess.only.benned)
	 bagaimanakah = body.slice(1)
		const bagai =['Sabemos?','Sigue preguntando','No lo sé','Intenta repetir','Solo encuentrate a ti mismo','No lo sé','Mana Saya Tahu, Saya kan ikan']
		const mana = bagai[Math.floor(Math.random() * bagai.length)]
		Lxa.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
		await limitAdd(sender)
	break
case 'kapan':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.daftarB)
 if (args.length < 1) return reply('*✘* Ingrese una pregunta')
  Lxa.updatePresence(from, Presence.composing)
  random = kapankah[Math.floor(Math.random() * (kapankah.length))]
  random2 = `${Math.floor(Math.random() * 8)}`
  hasil = `Kapankah : *${body.slice(7)}*\n\nJawaban : *${random2} ${random}*`
  reply(hasil)
  break

case 'setppgc':
			case 'setppgp':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
await Lxa.updateProfilePicture (from, media)
reply('*☉* Cambiar la foto de perfil del grupo')
  break
case 'comunism':
	  case 'trigger':
	    case 'rotate':
	      case 'delete':
	        case 'tobecontinue':
	          case 'thuglife':
var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  nikhmmp = await getBuffer(`http://zekais-api.herokuapp.com/${command}?url=${anu.display_url}`)
	 Lxa.sendMessage(from, nikhmmp, image, {quoted:mek})
	} else {
	  reply(`reply atau kirim gambar dengan caption ${prefix + command}`)
	}
	break  
case 'tourl':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
    var imgbb = require('imgbb-uploader')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
 reply(mess.wait)
 owgi = await Lxa.downloadAndSaveMediaMessage(ger)
 anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
 teks = `${anu.display_url}`
 reply(teks)
 }
break

//---stiker wasted
case 'wasted':
case 'was':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
ini_url = args[0]
ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/editor/wasted?apikey=${apikey}&img=${ini_url}`)
Lxa.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'drawing':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehqe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 Lxa.sendMessage(from, hehqe, image, {quoted:mek})
} else {
  reply('responde la imagen!')
}
break
	case 'quotemaker':
			case 'hacercita':
 if (isBanned) return reply(mess.only.benned)
     if (!isUser) return reply(mess.only.userB)
    var gh = body.slice(12)
	  var quote = gh.split("|")[0];
	  var wm = gh.split("|")[1];
	 	const pref = `Uso: \n${prefix}hacercita texto|filigrana\n\nEjm :\n${prefix}hacercita Mio Por derecho|FG98`
	if (args.length < 1) return reply(pref)
   reply(mess.wait)
	anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
	buffer = await getBuffer(anu.result)
	Lxa.sendMessage(from, buffer, image, {caption: 'aqui tienes', quoted: mek})
	await limitAdd(sender)
	break
case 'wanted':
   if (isBanned) return reply(mess.only.benned)
   if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 Lxa.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('No agregue nada al comando')
}
break
  	case 'nightbeach':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
   reply(mess.wait)
  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 Lxa.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('responde la imagen!')
}
break
case 'gtav':
   if (isBanned) return reply(mess.only.benned)
   if (!isUser) return reply(mess.only.userB)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
     reply(mess.wait)
	  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 Lxa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('responde la imagen!')
	}
	break
		case 'quoteskehidupan':
   if (isBanned) return reply(mess.only.benned)
     if (!isUser) return reply(mess.only.userB)
  const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
		const quo = quotes[Math.floor(Math.random() * quotes.length)]
		crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
		Lxa.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
		await limitAdd(sender)
		break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
txt1 = args[0]
txt2 = args[1]
ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`)
Lxa.sendMessage(from, ini_buffer, image, { quoted: mek })
   break		                
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${ini_txt}`)
Lxa.sendMessage(from, ini_buffer, image, { quoted: mek })
break
case 'tiktok':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
if (args.length == 0) return reply(`Example: ${prefix + command} DBOT CH`)
txt1 = args[0]
txt2 = args[1]
ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`)
Lxa.sendMessage(from, ini_buffer, image, { quoted: mek })
 break
  // Ephoto 360 //
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (args.length == 0) return reply(`Example: ${prefix + command} DBOT CH`)
  ini_txt = args.join(" ")
  ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${ini_txt}`)
  Lxa.sendMessage(from, ini_buffer, image, { quoted: mek })
     break
	case 'facebookpage':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
	  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 Lxa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('No agregue nada al comando')
	}
	break
case 'ktpmaker':
if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
get_args = args.join(" ").split("|")
nik = get_args[0]
prov = get_args[1]
kabu = get_args[2]
name = get_args[3]
ttl = get_args[4]
jk = get_args[5]
jl = get_args[6]
rtrw = get_args[7]
lurah = get_args[8]
camat = get_args[9]
agama = get_args[10]
nikah = get_args[11]
kerja = get_args[12]
warga = get_args[13]
until = get_args[14]
img = get_args[15]
ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
Lxa.sendMessage(from, ini_buffer, image, { quoted: mek })
break
	case 'costumwp':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
	  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 Lxa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('responde la imagen!')
	}
	break
		case 'sketch':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 Lxa.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('responde la imagen!')
}
break
	case 'raindrop':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 Lxa.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('responde la imagen!')
}
break
	case 'bakar':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
     reply(mess.wait)
	  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 Lxa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('responde la imagen!')
	}
	break
case 'pencil':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
	  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 Lxa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('responde la imagenk!')
	}
					break
case 'pantaimalam':
 if (isBanned) return reply(mess.only.benned)
	var imgbb = require('imgbb-uploader')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
	  owgi = await Lxa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 Lxa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('responde la imagen!')
	}
	break
	 case 'xnxxsearch':
    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
       query = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${apikey}&query=${query}`)
       get_result = get_result.result
       ini_txt = ""
       for (var x of get_result) {
       ini_txt += `Titulo : ${x.title}\n`
       ini_txt += `Views : ${x.views}\n`
       ini_txt += `Duracion : ${x.duration}\n`
       ini_txt += `Uploader : ${x.uploader}\n`
       ini_txt += `Link : ${x.link}\n`
       ini_txt += `Miniatura : ${x.thumbnail}\n\n`
         }
       reply(ini_txt)
       break
	case 'xnxx':
  if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
    query = args.join(" ")
    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${apikey}&url=${query}`)
    get_result = get_result.result
    ini_txt = `Titulo : ${get_result.title}\n`
    ini_txt += `Duracion : ${get_result.duration}\n`
    ini_txt += `View : ${get_result.view}\n`
    ini_txt += `Clasificación : ${get_result.rating}\n`
    ini_txt += `Like : ${get_result.like}\n`
    ini_txt += `Dislike : ${get_result.dislike}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
    ini_txt += `Descripcion : ${get_result.description}\n`
    ini_txt += "Link : \n"
    ini_link = get_result.link
    for (var x of ini_link) {
    ini_txt += `${x.type} - ${x.link}\n\n`
     }
   thumbnail = await getBuffer(get_result.thumbnail)
   Lxa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
      break
    case 'randomexo':
   if (isBanned) return reply(mess.only.benned)
     reply(mess.wait)
		anu = await fetchJson(`https://api.shizukaa.xyz/api/randomexo?apikey=itsmeiky633`, {method: 'get'})
		buffer = await getBuffer(anu.result)
		Lxa.sendMessage(from, buffer, image, {quoted: mek })
			break
     case 'blackpink':
   if (isBanned) return reply(mess.only.benned)
     reply(mess.wait)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Lxa.sendMessage(from, buffer, image, {quoted: mek })
					break
     case 'imageislamic':
   if (isBanned) return reply(mess.only.benned)
   if (!isUser) return reply(mess.only.userB)
     reply(mess.wait)
			anu = await fetchJson(`https://api.shizukaa.xyz/api/wpislamic?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Lxa.sendMessage(from, buffer, image, {quoted: mek })
					break
         case 'imagegame':
          if (!isUser) return reply(mess.only.userB)
          reply(mess.wait)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/wpgame?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Lxa.sendMessage(from, buffer, image, {quoted: mek })
					break
         case 'randombts':
        if (isBanned) return reply(mess.only.benned)
        if (!isUser) return reply(mess.only.daftarB)
          reply(mess.wait)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randombts?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					Lxa.sendMessage(from, buffer, image, {quoted: mek })
					break
				case 'ww2':
     if (isBanned) return reply(mess.only.benned)
     if (!isUser) return reply(mess.only.userB)
     reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=ww2`, {method: 'get'})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Lxa.sendMessage(from, pok, image, { quoted: mek })
					break
		case 'kelinci':
		    if (isBanned) return reply(mess.only.benned)
					Lxa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Lxa.sendMessage(from, pok, image, { quoted: mek })
					break
          case 'anjing':
          if (isBanned) return reply(mess.only.benned)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Lxa.sendMessage(from, pok, image, { quoted: mek })
					break
        case 'kucing':
          if (isBanned) return reply(mess.only.benned)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Lxa.sendMessage(from, pok, image, { quoted: mek })
					break
	     	case 'doraemon':
		    if (isBanned) return reply(mess.only.benned)
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=doraemon`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Lxa.sendMessage(from, pok, image, { quoted: mek })
					break
		case 'hamster':
   if (isBanned) return reply(mess.only.benned)
   if (!isUser) return reply(mess.only.userB)
					Lxa.updatePresence(from, Presence.composing) 
     reply(mess.wait)
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					Lxa.sendMessage(from, pok, image, { quoted: mek })
					break
		case 'aesthetic':
     if (isBanned) return reply(mess.only.benned) 
     if (!isUser) return reply(mess.only.userB)
				gatauda = body.slice(9)
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
         reply(mess.wait)
				buffer = await getBuffer(anu.result.result)
				Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih aestheticnya kak...'})
				break
 case 'nhentaipdf':
 if (!isNsfw) return reply(ind.nsfwoff())
 if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
 henid = args[0]
 get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${apikey}`)
 get_result = get_result.result
 ini_buffer = await getBuffer(get_result)
 Lxa.sendMessage(from, ini_buffer, document, { quoted: Lxa, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
       break
//--list kodebahasa
case 'kodebahasa':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
Lxa.sendMessage(from, bahasa(prefix, sender), text, {
  quoted: mek
})
break

//--list kode negara
case 'kodenegara':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
Lxa.sendMessage(from, negara(prefix, sender), text, {
  quoted: mek
})
	break

//---quoted fuck my life
case 'fml':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
  try {
data = await fetchJson(`https://api.zeks.xyz/api/fml`)

hasil = data.result
reply(hasil)
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
		break
//--translate semua bahasa
  case 'tl':
			case 'trad':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
 if (args.length < 1) return Lxa.sendMessage(from, 'Código de lenguaje???', text, {quoted: mek})
 if (args.length < 2) return Lxa.sendMessage(from, 'Texto que quieres traducir??', text, {quoted: mek})
		ts = body.slice(11)
	  kode = ts.split("/")[0]
		teks = ts.split("/")[1]
		anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
		reply(mess.wait)
	  translate = `Texto original: *${body.slice(11)}*\n\nResultado: *${anu.text}*`
	  Lxa.sendMessage(from, translate, text, {quoted: mek})
	await limitAdd(sender)  
	  break
//---membalikan kalimat
  case 'reverse':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return Lxa.sendMessage(from, '*✘* Ingrese texto', text, {
  quoted: mek
})
var pc = body.slice(9)
try {
data = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${pc}`)

hasil = data.result.kata
reply(hasil)
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break
case 'spamtext':
 if (!isOwner) return reply(mess.only.ownerB)
  reply('Otw spam 1x')
  if (args[0].startsWith('08')) return reply('Usar números de prefijo 8/n ex : *8796662*')
  if (args[0].startsWith('85648910195')) return reply('Error al no enviar spam al número de bot')
  if (args[0].startsWith('85876330812')) return reply('Error al no enviar spam al número de propietario')
    var data = body.slice(10)
   await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
   await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
   await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
   await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
   await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
      break 
//--fake reply
case 'fitnah':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Uso :\n${prefix}fitnah [@tag|mensaje|respuestabot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
var gh = body.slice(7)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
Lxa.sendMessage(from, `${bot}`, text, {
  quoted: {
key: {
  fromMe: false, participant: `${mentioned}`, ...(from ? {
remoteJid: from
  }: {})
}, message: {
  conversation: `${target}`
}}})
break

//--Kejujuran
				 	case 'truth':
     if (isBanned) return reply(mess.only.benned)
     if (!isUser) return reply(mess.only.userB)
     if (isLimit(sender)) return reply(mess.limitend)
				const trut =['¿Alguna vez te ha gustado alguien? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Lxa.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
       case 'dare':
     if (isBanned) return reply(mess.only.benned)
     if (!isUser) return reply(mess.only.userB)
     if (isLimit(sender)) return reply(mess.limitend)
			const dare =['Kirim pesan ke mantan kamu dan bilang "todavia me gustas','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Lxa.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
break
//--notifikasi grup
  case 'notif':
			case 'notify':
			
			
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (!isGroupAdmins) return reply(mess.only.admin)
Lxa.updatePresence(from, Presence.composing)

if (!isGroup) return reply(mess.only.group)
teks = `Anuncio de @${sender.split("@")[0]}\nMensaje : ${body.slice(7)}`
group = await Lxa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Lxa.sendMessage(from, options, text)
					   break
  //pencarian wiki
  case 'wiki':
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return reply('Ingrese una consulta')
tels = body.slice(6)
try {
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}&apikey=BotWeA`, {
  method: 'get'
})
reply(anu.result)
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break
	case 'nickff': 
	Lxa.updatePresence(from, Presence.composing) 
	data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
	teks = '=================\n'
	for (let i of data.result) {
	teks += `*Nick* : ${i}\n=================\n`
					}
	reply(teks.trim())
	break
//--Goolge Image

case 'google':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
  query = args.join(" ")
  get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${apikey}&query=${query}`)
  get_result = get_result.result
  ini_txt = 'Google Search : \n'
  for (var x of get_result) {
  ini_txt += `• Title : ${x.title}\n`
  ini_txt += `Link : ${x.link}\n`
  ini_txt += `Desc : ${x.desc}\n\n`
   }
 reply(ini_txt)
  break
case 'dadu':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
      hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(mess.error.stick)
			buffer = fs.readFileSync(rano)
			Lxa.sendMessage(from, buffer, sticker, {quoted: mek})
			fs.unlinkSync(rano)
			})
			break
			
		case 'husbu':
Lxa.updatePresence(from, Presence.composing) 
 data = fs.readFileSync('./src/husbu.js');
 jsonData = JSON.parse(data);
	 randIndex = Math.floor(Math.random() * jsonData.length);
	    randKey = jsonData[randIndex];
		    hasil = await getBuffer(randKey.image)
	      sendImage(hasil, mek, randKey.teks)
				break
  case 'chat':
if (args.length < 1) return reply(`Ejemplo ${prefix}chat hola admin como estas`)
const cet1 = body.slice(6)
if (cet1.length > 300) return Lxa.sendMessage(from, 'Lo siento texto demasiado largo, Máximo 300 textos', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
var nomor = mek.participant
const cet2 = `*[ CHAT DE USUARIO ]*\nDe ${pushname} \nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nMensaje : ${cet1}`
var optionsp = {
text: cet2,
contextInfo: {mentionedJid: [nomor]},
}
Lxa.sendMessage(`${up.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*CHAT DE USUARIOS*`} } } })     
reply(`Su mensaje se envio`)
  break
    case 'getpic':
    if (!isGroup) return reply(mess.only.group)
    if (isBanned) return reply(mess.only.benned)
		if (args.length < 1) return 
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
			 mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
					pp = await Lxa.getProfilePicture(mentioned)
					buffer = await getBuffer(pp)
						
					Lxa.sendMessage(from, buffer, image, {quoted:mek})
					} catch (e) {
					Lxa.sendMessage(from, buffer, image, {quoted:mek})
					}
					break
case 'alay2':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('*✘* Ingrese texto')
  goo = body.slice(7)
  try { 
  pint = await fetchJson(`http://lolhuman.herokuapp.com/api/upperlower?apikey=${lolKey}&text=${goo}`, {
method: 'get'
  })
  Lxa.updatePresence(from, Presence.composing)
  hasil = pint.result
  Lxa.sendMessage(from, hasil, text, {
quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

//---Neonime search
case 'neonime':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
Lxa.updatePresence(from, Presence.composing)
reply(mess.wait)
if (args.length < 1) return reply(`*✘* Ingresa un título de anime`)
teks = body.slice(9)
try {
data = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${teks}&apikey=${viKey}`, {
  method: 'get'
})
teks = '••••••••••••••••••••••\n'
for (let i of data.result) {
  teks += `‣ *Titulo* : ${i.title}\n‣ *link* : ${i.link}\n••••••••••••••••••••••\n`
}
reply(teks.trim())
if (data.message) return reply(`Lo siento información de anime *${teks} extraviado`)
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break

//---Ganti nama grup
case 'setname':
if (isBanned) return reply(mess.only.benned)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
let idgrup = `${from.split("@s.whatsapp.net")[0]}`;
Lxa.groupUpdateSubject(idgrup, `${body.slice(9)}`)
Lxa.sendMessage(from, '*☉* Cambiar el nombre del grupo', text, {
  quoted: mek
})
break
			case 'kurumi':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
	anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
		kur = JSON.parse(JSON.stringify(anu));
		imi =  kur[Math.floor(Math.random() * kur.length)];
		nye = await getBuffer(imi)
		Lxa.sendMessage(from, nye, image, { caption: 'KURUMI-CHAN', quoted: mek })
			break 
case 'kusonime':
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
 ini_url = args[0]
 get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${apikey}&url=${ini_url}`)
 get_result = get_result.result
 ini_txt = `Title : ${get_result.title}\n`
 ini_txt += `Japones : ${get_result.japanese}\n`
 ini_txt += `Genero : ${get_result.genre}\n`
 ini_txt += `Temporadas : ${get_result.seasons}\n`
 ini_txt += `Productores : ${get_result.producers}\n`
 ini_txt += `Type : ${get_result.type}\n`
 ini_txt += `Status : ${get_result.status}\n`
 ini_txt += `Total Episodios : ${get_result.total_episode}\n`
 ini_txt += `Puntaje : ${get_result.score}\n`
 ini_txt += `Duracion : ${get_result.duration}\n`
 ini_txt += `Publicado el : ${get_result.released_on}\n`
 ini_txt += `Desc : ${get_result.desc}\n`
 link_dl = get_result.link_dl
 for (var x in link_dl) {
 ini_txt += `\n${x}\n`
 for (var y in link_dl[x]) {
 ini_txt += `${y} - ${link_dl[x][y]}\n`
   }
  }
  ini_buffer = await getBuffer(get_result.thumbnail)
  Lxa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
   break
 case 'kusonimesearch':
 if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
  query = args.join(" ")
  get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${apikey}&query=${query}`)
  get_result = get_result.result
  ini_txt = `Title : ${get_result.title}\n`
  ini_txt += `Japanese : ${get_result.japanese}\n`
  ini_txt += `Genre : ${get_result.genre}\n`
  ini_txt += `Seasons : ${get_result.seasons}\n`
  ini_txt += `Producers : ${get_result.producers}\n`
  ini_txt += `Type : ${get_result.type}\n`
  ini_txt += `Status : ${get_result.status}\n`
  ini_txt += `Total Episode : ${get_result.total_episode}\n`
  ini_txt += `Score : ${get_result.score}\n`
  ini_txt += `Duration : ${get_result.duration}\n`
  ini_txt += `Released On : ${get_result.released_on}\n`
  ini_txt += `Desc : ${get_result.desc}\n`
 link_dl = get_result.link_dl
 for (var x in link_dl) {
 ini_txt += `\n${x}\n`
 for (var y in link_dl[x]) {
 ini_txt += `${y} - ${link_dl[x][y]}\n`
     }
    }
 ini_buffer = await getBuffer(get_result.thumbnail)
 Lxa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
   break
		case 'akira':
   if (isBanned) return reply(mess.only.benned)
   if (!isUser) return reply(mess.only.userB)
   if (isLimit(sender)) return reply(mess.limitend)
			anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
			ak = JSON.parse(JSON.stringify(anu));
			ara =  ak[Math.floor(Math.random() * ak.length)];
			nye = await getBuffer(ara)
			Lxa.sendMessage(from, nye, image, { caption: 'AKIRA-CHAN', quoted: mek })
         await limitAdd(sender)
		break 
			case 'tokyoghoul':
	if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
  	anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Tokyo+Ghoul`, {method: 'get'})
		tokyo = JSON.parse(JSON.stringify(anu));
		ghoul =  tokyo[Math.floor(Math.random() * tokyo.length)];
		dil = await getBuffer(ghoul)
		Lxa.sendMessage(from, dil, image, { caption: 'JANGAN LUPA SUBSCRIBE DIL CHANNEL', quoted: mek })
			await limitAdd(sender)
		break
		case 'itori':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
		anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
		it = JSON.parse(JSON.stringify(anu));
		ori =  it[Math.floor(Math.random() * it.length)];
		nye = await getBuffer(ori)
		Lxa.sendMessage(from, nye, image, { caption: 'ITORI-CHAN', quoted: mek })
     await limitAdd(sender)
	break
	case 'rem':
   if (isBanned) return reply(mess.only.benned)
   if (!isUser) return reply(mess.only.userB)
   if (isLimit(sender)) return reply(mess.limitend)
		anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
		sasu = JSON.parse(JSON.stringify(anu));
		ke =  sasu[Math.floor(Math.random() * sasu.length)];
		nye = await getBuffer(ke)
		Lxa.sendMessage(from, nye, image, { caption: '*REM-CHAN*', quoted: mek })
await limitAdd(sender)
			break
		case 'chika':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
		anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
		sasu = JSON.parse(JSON.stringify(anu));
		ke =  sasu[Math.floor(Math.random() * sasu.length)];
			nye = await getBuffer(ke)
			Lxa.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
           await limitAdd(sender)
				break
			case 'kaneki':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaneki`, {method: 'get'})
kan = JSON.parse(JSON.stringify(anu));
eki =  kan[Math.floor(Math.random() * kan.length)];
nye = await getBuffer(eki)
Lxa.sendMessage(from, nye, image, { caption: '*KANEKI*', quoted: mek })
await limitAdd(sender) 
			break 
		case 'touka':
   if (isBanned) return reply(mess.only.benned)
   if (!isUser) return reply(mess.only.userB)
   if (isLimit(sender)) return reply(mess.limitend)
		anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
		tou = JSON.parse(JSON.stringify(anu));
		ka =  tou[Math.floor(Math.random() * tou.length)];
		nye = await getBuffer(ka)
		Lxa.sendMessage(from, nye, image, { caption: '*TOUKA*', quoted: mek })
					await limitAdd(sender) 
					break 
		case 'rize':
   if (isBanned) return reply(mess.only.benned)
   if (!isUser) return reply(mess.only.userB)
   if (isLimit(sender)) return reply(mess.limitend)
		anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
	 	ri = JSON.parse(JSON.stringify(anu));
		ze =  ri[Math.floor(Math.random() * ri.length)];
		nye = await getBuffer(ze)
		Lxa.sendMessage(from, nye, image, { caption: '*RIZE-CHAN*', quoted: mek })
        await limitAdd(sender)
					break 
//--ganti desk
  case 'setdesk':
			case 'setdes':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Lxa.groupUpdateDescription(from, `${body.slice(9)}`)
Lxa.sendMessage(from, '*☉* Cambiar la descripción del grupo', text, {
  quoted: mek
})
					break
//--random meme
	case 'memeindo': 
	gatauda = body.slice(8)
  reply(mess.wait)
	anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
	buffer = await getBuffer(anu.result)
	Lxa.sendMessage(from, buffer, image, {quoted: mek})
	await limitAdd(sender)
	break
case 'meme':
if (isBanned) return reply('Lo siento, te atraparon!')
  Lxa.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
try {
  beh = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${viKey}`)
  pint = await getBuffer(beh.result)
  reply(mess.wait)
  Lxa.sendMessage(from, pint, image, {
quoted: mek
  })
  await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
  break
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)  
case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':
case 'gon': case 'killua': case 'sagiri': case 'rimuru': case 'natsu': case 'genos': case 'saitama': case 'miku':
Lxa.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://api.fdci.se/rep.php?gambar=karakter anime ${command} hd`, {method: 'get'})
fakestatus(`[❗] SEDANG DIPROSES`)
n = JSON.parse(JSON.stringify(data));
nimek =  n[Math.floor(Math.random() * n.length)];
kntl = await getBuffer(nimek)
Lxa.sendMessage(from, kntl, image, { quoted: mek})
break
//--tagme
case 'tagme':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
const tagme = {
  text: `@${sender.split("@")[0]} Hola`,
  contextInfo: {
mentionedJid: [sender]
  }
}
Lxa.sendMessage(from, tagme, text)
break

case 'kbbi':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}kbbi manusia`)
var bby = body.slice(6)
anu = await fetchJson(`https://videfikri.com/api/kbbi/?query=${bby}`)
reply('[WAIT] Sedang Searching...')
kabebei = `「 *KBBI* 」\nJawaban : ${anu.result.hasil}`
Lxa.sendMessage(from, kabebei, text, { quoted: mek })
  break
case 'babu':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`onde esta el texto?`)	
	ct = body.slice(5)
	reply(`*_WAIT_*`)
	buffer = await getBuffer(`http://rzky.net/docs/api/BabuSerti/img.php?nama=${ct}`)
	Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
		break
case 'fucekboy': 
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`¿Dónde está el texto?`)	
	ct = body.slice(9)
	reply(`*_WAIT_*`)
	buffer = await getBuffer(`http://rzky.net/docs/api/FucekBoySerti/img.php?nama=${ct}`)
	Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'bucinserti':
		  if (isBanned) return reply(mess.only.benned)
			if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`*_WAIT_*`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BucinSerti/img.php?nama=${ct}`)
				Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'bocilepep': 
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
		if (args.length < 1) return reply(`¿Dónde está el texto?`)	
		ct = body.slice(10)
		reply(`*_WAIT_*`)
		buffer = await getBuffer(`http://rzky.net/docs/api/CilEpepSerti/img.php?nama=${ct}`)
			Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'sadboy': 
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
	if (args.length < 1) return reply(`¿Dónde está el texto?`)	
	ct = body.slice(7)
	reply(`*_WAIT_*`)
	buffer = await getBuffer(`http://rzky.net/docs/api/SadBoySerti/img.php?nama=${ct}`)
	Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
		break
		case 'gayserti':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
	if (args.length < 1) return reply(`¿Dónde está el texto?`)	
	  	ct = body.slice(9)
			reply(`*_WAIT_*`)
			buffer = await getBuffer(`http://rzky.net/docs/api/GaySerti/img.php?nama=${ct}`)
			Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
  break
case 'test':
var value = (`El Prefijo del bot es = ${prefix}`)
var group = await Lxa.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Lxa.sendMessage(from, options, text, {quoted: freply, contextInfo: { forwardingScore: 1000, isForwarded: true }})
break  
 	case 'listonline': 
			case 'online':
			case 'enlinea':
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Lxa.chats.get(ido).presences), Lxa.user.jid]
Lxa.sendMessage(from, '*EN LINEA*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*©POWERED BY Dylux ┃ ᴮᴼᵀ*`, text, { quoted: mek,
 contextInfo: { mentionedJid: online }
})
break 
		case 'badgirl':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`¿Dónde está el texto?`)	
				ct = body.slice(8)
				reply(`*_WAIT_*`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BadGirlSerti/img.php?nama=${ct}`)
				Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
	case 'goodgirl':
        if (isBanned) return reply(mess.only.benned)
        if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`¿Dónde está el texto?`)	
				ct = body.slice(9)
				reply(`*_WAIT_*`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodGirlSerti/img.php?nama=${ct}`)
				Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
					break
		case 'goodboy':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`¿Dónde está el texto?`)	
				ct = body.slice(8)
				reply(`*_WAIT_*`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodBoySerti/img.php?nama=${ct}`)
				Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
				break
		case 'anakharam':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
		if (args.length < 1) return reply(`¿Dónde está el texto`)	
		ct = body.slice(11)
		reply(`*_WAIT_*`)
		buffer = await getBuffer(`http://rzky.net/docs/api/AnakHaramSerti/img.php?nama=${ct}`)
		Lxa.sendMessage(from, buffer, image, {quoted: freply, caption: 'Zzzzz'})
		break
  case 'chatprank':
if (isBanned) return reply(mess.only.benned)
Lxa.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return reply(`*✘* entrada de texto\nEjem : ${prefix}chatprank hola/que hacen`)
tels = body.slice(11)
var teks1 = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
Lxa.sendMessage(from, hasil, text, {
  quoted: mek
})
break

//--searching chord
case 'chord':
 if (isBanned) return reply(mess.only.benned)
 if (args.length < 1) return reply('Ingrese una consulta')
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
  Lxa.updatePresence(from, Presence.composing)
  tels = body.slice(7)
  try {
  anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=${tKey}`, {
method: 'get'
  })
  reply(anu.result)
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
	case 'kalkulator':
			case 'cal':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
 if (args.length < 1) return reply(`[❗] Enviar pedidos *${prefix}cal [ Números ]*\nEjm : ${prefix}cal 12*12\n*Nota* :\n• Para multiplicar usando *\n• Para uso adicional +\n• Para reducir el uso -\n• Para dividir usar /`)
		const Math_js = require('mathjs')
	 	mtk = body.slice(12)
  	if (typeof Math_js.evaluate(mtk) !== "number") {
		reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}cal [ Numeros ]*\nEjm : ${prefix}cal 12*12\n*Nota* :\n• Para multiplicar usando *\n• Para sumar +\n• Para restar -\n• Para dividir usar /`)
			} else {
			reply(`*「 MATEMÁTICAS 」*\n\n*Calculadora*\n${mtk} = ${Math_js.evaluate(mtk)}`)
			}
	  await limitAdd(sender)
		break
//--jadwaltv now
case 'jadwaltvnow':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
    if (isLimit(sender)) return reply(mess.limitend)
  Lxa.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {
method: 'get'
  })
  reply(anu.result.jadwalTV)
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

//--jadwaltv ch
case 'jadwaltv':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
  ch = body.slice(10)
  if (args.length < 1) return reply('*☒* Masukan nama channel')
  Lxa.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${ch}&apiKey=${BarBarKey}`, {
method: 'get'
  })
  n = JSON.parse(JSON.stringify(anu.result));
  hasil = `*Jadwal Tv* : ${ch} hari ini\n${n}`
  reply(hasil)
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
    case 'tolol':
   if (isBanned) return reply(mess.only.benned)
   if (!isGroup) return reply(mess.only.group)
   if (!isUser) return reply(mess.only.userB)
   if (!isGroup) return reply(mess.only.group)
			membr = []
	  	const nus = groupMembers
	  	const msl = groupMembers
		 	const siapss = nus[Math.floor(Math.random() * nus.length)]
			const sipss = pushname[Math.floor(Math.random() * msl.length)]
			teks = `*Yang Paling Tolol Disini Adalah :* @${siapss.jid.split('@')[0]}`
			 membr.push(siapss.jid)
		 	mentions(teks, membr, true)
				break
     case 'beban':
    if (isBanned) return reply(mess.only.benned)
    if (!isGroup) return reply(mess.only.group)
    if (!isUser) return reply(mess.only.userB)
    if (!isGroup) return reply(mess.only.group)
			membr = []
	  	const mes = groupMembers
	  	const msk = groupMembers
		  const siaps = mes[Math.floor(Math.random() * mes.length)]
			const sips = pushname[Math.floor(Math.random() * msk.length)]
			teks = `*Yang Paling Beban Disini Adalah :* @${siaps.jid.split('@')[0]}`
			membr.push(siaps.jid)
			mentions(teks, membr, true)
					break
//--mini map
case 'map':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return reply('*☒* Masukan nama daerah')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.gambar)
  Lxa.sendMessage(from, hasil, image, {
quoted: mek, caption: `Hasil Dari *${daerah}*`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

//--pencarian surah Al-Qur'an
case 'alquran':
 if (isBanned) return reply(mess.only.benned)
  Lxa.updatePresence(from, Presence.composing)
  if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
  if (args.length < 1) return reply('*☒* Masukan nomor surah 1-114')
  if (isNaN(args.length < 1)) return await reply('Gunakan nomor surah')
  tels = body.slice(9)
  try {
  data = await fetchJson(`https://onlydevcity.herokuapp.com/api/quran?surah=${ll1}&ayat=${ll2}&apikey=onlyonedeveloper`)
  teks = `
  〘  *${data.surah}*  〙
  Adalah surah ke ${data.no} dalam Al-Qur'an dengan jumlah ayat (${data.jumlah_ayat} ayat)
  ──────────────────────

  `
  for (let i of data.ayat) {
teks += `*(${i.number})* ${i.text}\n*(${i.number})* ${i.translation_id}\n••••••••••••••••••••••••••••••••••••••••••••••\n`
  }
  reply(teks.trim())
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
break
//--Cerpen
case 'cerpen':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
Lxa.updatePresence(from, Presence.composing)
if (isLimit(sender)) return reply(mess.limitend)
try {
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
hasil = `*CERPEN*\n‣ Judul : *${data.result.title}*\n‣ Pengarang : *${data.result.pengarang}}*\n${data.result.cerpen}`
reply(hasil)
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break

//---kontak pemilik bot
case 'owner':
  case 'creator':
			case 'creador':
 Lxa.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
 Lxa.sendMessage(from, {displayname: "jeff", vcard: vcard2}, MessageType.contact, { quoted: mek})
 Lxa.sendMessage(from, 'El numero de mi creador:)',MessageType.text, { quoted: mek} )
break
case 'infobot':
await costum(bottt(prefix), text, ownerNumber, botinfo)
 break
case 'antivirtexx':
await costum(antivirtexx(), text, ownerNumber, `Buset Dahh Adahekel🔥`)
break
			
			
			//---Random ayat Alquran
   case 'ayatkursi': 
 if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
	anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/muslim/ayatkursi?apikey=dappabotwa`)
	teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Interpretación :* ${anu.result.data.tafsir}`
	Lxa.sendMessage(from, teks, text, {quoted: mek})
	 await limitAdd(sender)
	break
 case 'doaharian': 
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
	Lxa.updatePresence(from, Presence.composing)
	asu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/muslim/doaharian?apikey=syahri2k21`, {method: 'get'})
	teks = '=================\n'
	for (let i of asu.result.data) {
teks += `*Nombre de la oración:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
		}
	reply(teks)
	 await limitAdd(sender)
		break
	 case 'niatsholat':  
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
		anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/muslim/niatshalat?apikey=syahri2k21`, {method: 'get'})
		teks = '=================\n'
		for (let i of anu.result) {
	teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
	reply(teks.trim())
	break
  case 'bacaansholat': 
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
	anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/muslim/bacaanshalat?apikey=syahri2k21`, {method: 'get'})
	teks = '=================\n'
	for (let i of anu.result) {
	teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
		}
	reply(teks.trim())
	break
   case 'kisahnabi':
   if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
      query = args.join(" ")
      get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${apikey}`)
      get_result = get_result.result
      ini_txt = `Name : ${get_result.name}\n`
      ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
      ini_txt += `Umur : ${get_result.age}\n`
      ini_txt += `Tempat : ${get_result.place}\n`
      ini_txt += `Story : \n${get_result.story}`
      reply(ini_txt)
       break
	case 'asmaul':
  get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/asmaulhusna?apikey=RiuApikey`)
   get_result = get_result.result
   txt = `Index : ${get_result.index}\n`
   txt += ` Latin: ${get_result.latin}\n`
   txt += `Limit : ${get_result.ar}\n`
   txt += `Type : ${get_result.en}\n\n`
    reply(txt)
   break
 case 'ngaji':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
  try {
  anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {
method: 'get'
  })
  quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
  Lxa.sendMessage(from, quran, text, {
quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
  case 'anime2':
  if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Gotoubun No Hanayome`)
    query = args.join(" ")
    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${apikey}&query=${query}`)
    get_result = get_result.result
    ini_txt = `Id : ${get_result.id}\n`
    ini_txt += `Id MAL : ${get_result.idMal}\n`
    ini_txt += `Titulo : ${get_result.title.romaji}\n`
    ini_txt += `English : ${get_result.title.english}\n`
    ini_txt += `Nativo : ${get_result.title.native}\n`
    ini_txt += `Formato : ${get_result.format}\n`
    ini_txt += `Episodios : ${get_result.episodes}\n`
    ini_txt += `Duracion : ${get_result.duration} mins.\n`
    ini_txt += `Estado : ${get_result.status}\n`
    ini_txt += `Temporada : ${get_result.season}\n`
    ini_txt += `Año de la temporada : ${get_result.seasonYear}\n`
    ini_txt += `Fuente : ${get_result.source}\n`
    ini_txt += `Fecha de inicio : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
    ini_txt += `Fecha final : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
    ini_txt += `Genero : ${get_result.genres.join(", ")}\n`
    ini_txt += `Sinónimos : ${get_result.synonyms.join(", ")}\n`
    ini_txt += `Puntaje : ${get_result.averageScore}%\n`
    ini_txt += `Caracteres : \n`
    ini_character = get_result.characters.nodes
    for (var x of ini_character) {
    ini_txt += `- ${x.name.full} (${x.name.native})\n`
    }
    ini_txt += `\nDescripcion : ${get_result.description}`
    thumbnail = await getBuffer(get_result.coverImage.large)
    Lxa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
     break
  case 'alquranaudio':
  if (args.length == 0) return reply(`Ejemplo: ${prefix + command} 18 o ${prefix + command} 18/10`)
    surah = args[0]
    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${apikey}`)
    Lxa.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
      break
//--tafsir Alquran
case 'tafsir':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
  if (args.length < 1) return reply('Ingrese una consulta')
  teks = body.slice(8)
  try {
  Lxa.updatePresence(from, Presence.composing)
  data = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/tafsir-quran?query=${teks}&apiKey=${Mkey}`)
  hasil = `*${data.result.query}*\n\n${data.result.ayat}\n\n*Traducir* :\n${data.result.terjemahan_ayat}\n\n*Interpretación* : ${data.result.tafsir_jalalayn}`
  reply(hasil)
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
case 'hekelserti': 
			case 'hekel': 
	//  Case by DappaUhuy&YogiPw
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Ingrese el texto\n*Ejemplo ${prefix}hekel FadilGanz*`)
  reply(mess.wait)
	ct = body.slice(11)
 buffer = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
	Lxa.sendMessage(from, buffer, image, { quoted: mek, caption: 'Unete al grupo' })
  await limitAdd(sender)
	break
case 'ffserti': 				
	//  Case by DappaUhuy&YogiPw
	if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
	if (isBanned) return reply(mess.only.benned)
	if (args.length < 1) return reply(`Escriba algo\n*Ejemplo ${prefix}ffserti AndroidWorld`)
  reply(mess.wait)
		ct = body.slice(8)
		buffer = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
		Lxa.sendMessage(from, buffer, image, { quoted: mek, caption: 'Unete al grupo' })
  await limitAdd(sender)
		break
//---Jadwal solat
case 'sholat':
  if (isBanned) return reply(mess.only.benned)
  loc = body.slice(7)
  if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
  if (args.length < 1) return reply('Ingrese el nombre de la región')
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${loc}&apiKey=${BarBarKey}`, {
method: 'get'
  })
  mbteks = `*Salat*\nDaerah : ${loc}\n‣ *Asr* : ${anu.Ashar}\n‣ *Dhuha* : ${anu.Dhuha}\n‣ *Dzuhur* : ${anu.Dzuhur}\n‣ *Imsyak* : ${anu.Imsyak}\n‣ *Isya* : ${anu.Isya}\n‣ *Maghrib* : ${anu.Maghrib}\n‣ *Subuh* : ${anu.Subuh}`
  Lxa.sendMessage(from, mbteks, text, {
quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

//--info cuaca
	case 'cuaca2':
	daerah = args.join(" ")
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
	if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Riu`)
	get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/cuaca/${daerah}?apikey=RiuApikey`)
	get_result = get_result.result
 txt = `*El lugar* : ${get_result.tempat}\n`
 txt += `*Latitud* : ${get_result.latitude}\n`
 txt += `*Tiempo* : ${get_result.cuaca}\n`
 txt += `*Viento* : ${get_result.angin}\n`
 txt += `*Des* : ${get_result.description}\n`
 txt += `*Humedad* : ${get_result.kelembapan}\n`
 txt += `*Temperatura* : ${get_result.kelembapan}\n`
 txt += `*Aire* : ${get_result.udara}\n`
 txt += `*Superficie* : ${get_result.permukaan_laut}`
   reply(txt)
   break
case 'cuaca':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
  if (args.length < 1) return reply('Ingrese el nombre de la región')
  tels = body.slice(7)
  try {
  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/cuaca?p=${tels}`, {
method: 'get'
  })
  hasil = `‣ *Lugar* : ${anu.hasil.Nama}\n‣ *Tiempo* : ${anu.hasil.Cuaca}\n‣ *Viento* : ${anu.hasil.Angin}\n‣ *Temperatura* : ${anu.hasil.Suhu}\n‣ *Humedad* : ${anu.hasil.Kelembaban}\n‣ *Keterangan* : ${anu.hasil.Keterangan}`
  Lxa.sendMessage(from, hasil, text, {
quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
 
//--info gempa
//informasi gempa terkini
 case 'infogempa':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
if (anu.error) return reply(anu.error)
buff = await getBuffer(anu.map)
reply(mess.wait)
gempa = `•Localizacion *${anu.lokasi}*\n• Hora: *${anu.waktu}* \n• Potencia: *${anu.potensi}*\n• Magnitud: *${anu.magnitude}*\n• Profundidad: *${anu.kedalaman}*\n• Koordinat: *${anu.koordinat}*`
Lxa.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
    await limitAdd(sender) 
  break

//---Buy limit
case 'buylimit':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
  if (args.length < 1) return reply(`¿Cuál es el límite que quieres comprar? Asegúrese de que tu saldo sea suficiente! \n\nCómo consultar el saldo : ${prefix}bal`)
  payout = body.slice(10)
  const koinPerlimit = hargalimit
  const total = koinPerlimit * payout
  if (checkATMuser(sender) <= total) return reply(`Lo siento, no tienes suficiente dinero. recoge tu dinero y comprar más tarde`)
  if (checkATMuser(sender) >= total) {
confirmATM(sender, total)
bayarLimit(sender, payout)
await reply(`〘  *NOTA DE PAGO*  〙\n\n‣ *Remitente* : Admin\n‣ *Receptor* : ${pushname}\n‣ *Compra nominal* : ${body.slice(10)} \n‣ *Precio límite* : ${koinPerlimit}/limit\n‣ *El balance restante* : ${checkATMuser(sender)}\n\nProceso exitoso con número de pago \n${createSerial(15)}`)
  }
  break
	case 'puisiimg':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
 pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=dappgzwabot`, {method: 'get'})
 Lxa.sendMessage(from, pus, image, {quoted: mek})
break 
//--transfer
case 'transfer':
  if (isBanned) return reply(mess.only.benned)
  if (!isGroup) return reply(mess.only.group)
  if (!isUser) return reply(mess.only.userB)
  if (args.length < 1) return reply(`Por favor repita con
*${prefix}Transfer @user|Monto de la transferencia*`)
 if (!q.includes('|')) return  reply('Lo sentimos, el formato de texto es incorrecto')
  const tujuan = q.substring(0, q.indexOf('|') - 1)
  const jumlah = q.substring(q.lastIndexOf('|') + 1)
 if (isNaN(jumlah)) return await reply('No agregue ningún signo !')
 if (jumlah < 5000) return reply(`minimal transfer Rp.5000`)
 if (checkATMuser(sender) <= jumlah) return reply(`Lo siento, no tienes suficiente dinero. por favor, recójalo y transfiéralo más tarde`)
  if (checkATMuser(sender) >= jumlah) {
const tujuantf = `${tujuan.replace("", '')}@s.whatsapp.net`
fee = 0.005 *  jumlah
hasiltf = jumlah - fee
addKoinUser(tujuantf, hasiltf)
confirmATM(sender, jumlah)
addKoinUser('59172945992@s.whatsapp.net', fee)
await reply(`〘  *TRANSFERENCIA*  〙
  La transferencia de saldo se realizó correctamente
  ‣ *De* : ${sender.split("@")[0]}
  ‣ *A* : ${tujuan}
  ‣ *Monto de la transferencia* : Rp.${jumlah},-
  ‣ *Interes* : Rp.${fee},-`)
  }
  await limitAdd(sender)
  break

case 'itsme':
	
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
  try {
ppimg = await Lxa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Nombre* : ${pushname}
  ‣ *Numero* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  Lxa.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
  await limitAdd(sender)
  break
case 'sendkontak':
			case 'contacto':
const took = body.slice(12)
const nama = took.split("|")[0]
const no = took.split("|")[1]
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + no + ':+' + no + '\n' + 'END:VCARD'
	Lxa.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
	break
case 'play':
if (!isPrem) return reply(ind.premium(prefix))
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return reply('Ingresa el título de una canción')
  reply(mess.wait)
  play = body.slice(6)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Musica encontrado*\n‣ *Título* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_Enviando archivos, espere si el audio no aparece, descargue aquí._\n‣ *Link* : ${anu.result.url_audio}
  `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  Lxa.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  Lxa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
  }
  break
case 'ytmp3':
if (!isPrem) return reply(ind.premium(prefix))
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
  reply(mess.wait)
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} https://www.youtube.com/watch?v=_aelrhBsIRE`)
  ini_link = args[0]
  get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${apikey}&url=${ini_link}`)
  get_result = get_result.result
  ini_txt = `Titulo : ${get_result.title}\n`
  ini_txt += `Subido : ${get_result.uploader}\n`
  ini_txt += `Duracion : ${get_result.duration}\n`
  ini_txt += `Vistas : ${get_result.view}\n`
  ini_txt += `Likes : ${get_result.like}\n`
  ini_txt += `Dislikes : ${get_result.dislike}\n`
  ini_txt += `Descripcion :\n ${get_result.description}`
  ini_buffer = await getBuffer(get_result.thumbnail)
  Lxa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
   get_audio = await getBuffer(get_result.link[3].link)
   Lxa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
  break
case 'ytmp4':
if (!isPrem) return reply(ind.premium(prefix))
if (isBanned) return reply(mess.only.benned)
if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return reply('Ingrese un link')
ini_link = args[0]
get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=LuckApikey&url=${ini_link}`)
get_result = get_result.result
txt = `Titulo : ${get_result.title}\n`
txt += `Subido : ${get_result.uploader}\n`
txt += `Duracion : ${get_result.duration}\n`
txt += `Vistas : ${get_result.view}\n`
txt += `Likes : ${get_result.like}\n`
txt += `Dislikes : ${get_result.dislike}\n`
txt += `Descripcion :\n ${get_result.description}`
buffer = await getBuffer(get_result.thumbnail)
Lxa.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
get_audio = await getBuffer(get_result.link[0].link)
Lxa.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
 break
//---Youtube search
  case 'ytsearch':
  if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Lil Peep`)
    query = args.join(" ")
    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${query}`)
     get_result = get_result.result
     ini_txt = ""
    for (var x of get_result) {
    ini_txt += `Titulo : ${x.title}\n`
    ini_txt += `Vistas : ${x.views}\n`
    ini_txt += `Publicado : ${x.published}\n`
    ini_txt += `Miniatura : ${x.thumbnail}\n`
    ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
          }
        reply(ini_txt)
       break
//--download pinterest
case 'pin':
  if (isBanned) return reply(mess.only.benned)
  if (isLimit(sender)) return reply(mess.limitend)
    if(!isUrl(args[0]) && !args[0].includes('pin')) return reply('Formato de enlace incorrecto, use el enlace de pinterest')
  reply(mess.wait)
  play = body.slice(5)
  try {
  anu = await fetchJson(`https://scrap.terhambar.com/pin?url=${play}`)
  if (anu.error) return reply(anu.error)
  n = JSON.parse(JSON.stringify(anu.result.data));
  lagu = await getBuffer(anu.result)
  Lxa.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result}.mp4`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
 	case 'joingc':
			case 'join':
codeInvite = body.slice(32)
response = await Lxa.acceptInvite(codeInvite)
reply('Hecho!!!')
console.log(response)
break 
case 'getpic':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return 
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Jefe listo')
	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		try {
	pp = await mek.getProfilePicture(mentioned)
	buffer = await getBuffer(pp)
	Lxa.sendMessage(from, buffer, image, {quoted: mek})
		} catch (e) {
	Lxa.sendMessage(from, buffer, image, {quoted:mek})
		}
	break
	   case 'stickerwa':
     if (args.length == 0) return reply(`Ejemplo: ${prefix + command} Koceng Imot`)
       query = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${apikey}&query=${query}`)
        get_result = get_result.result[0].stickers
        for (var x of get_result) {
        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${apikey}&img=${x}`)
        Lxa.sendMessage(from, ini_buffer, sticker)
          }
      break
case 'fb':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return reply('¿Dónde está la URL?')
if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(ind.error.Iv)
     reply(mess.wait)
	anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
if (anu.error) return reply(anu.error)
	Lxa.sendMessage(from, '[ ESPERE ] Procesando\n\nSi el enlace es solo de Google no se puede descargar.', text, {quoted: mek})
	efbe = `Titulo: *${anu.title}*\nTamaño: *${anu.filesize}\nPublicado en: *${anu.published}*`
	tefbe = await getBuffer(anu.thumb)
	Lxa.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
		buffer = await getBuffer(anu.result)
	Lxa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Aqui esta :)'})
  await limitAdd(sender)
  break
case 'ig':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (isLimit(sender)) return reply(mess.limitend)
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
ini_url = args[0]
ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${ini_url}`)
ini_url = ini_url.result
ini_type = image
if (ini_url.includes(".mp4")) ini_type = video
ini_buffer = await getBuffer(ini_url)
Lxa.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
  break
			case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return Lxa.sendMessage(from, `Uso de la función antidelete :\n\n*${prefix}antidelete [1/0]* (Para grupos)\n*${prefix}antidelete [f1/f0]* (para todos los contactos)\n*${prefix}antidelete banct 54938xxxxx* (contacto banlist)`, MessageType.text)
				if (argz[1] == '1') {
					if (isGroup) {
						if (isRevoke) return Lxa.sendMessage(from, `Antidelete estaba habilitado en este grupo!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						Lxa.sendMessage(from, `*✔ Activado grupo antidelete!*`, MessageType.text)
					} else if (!isGroup) {
						Lxa.sendMessage(from, `Para usar en contacto *${prefix}antidelete f1*`, MessageType.text)
					}
				} else if (argz[1] == 'f1') {
					if (!isGroup) {
						if (isCtRevoke) return Lxa.sendMessage(from, `Antidelete se ha habilitado en todos los contactos !`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						Lxa.sendMessage(from, `cAntidelete habilitado en todos los contactos!`, MessageType.text)
					} else if (isGroup) {
						Lxa.sendMessage(from, `Para el grupo use *${prefix}antidelete 1*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return Lxa.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return Lxa.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					Lxa.sendMessage(from, `Contacto ${argz[2]} se ha añadido a la lista de prohibición de antidelete de forma permanente!`, MessageType.text)
				} else if (argz[1] == '0') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						Lxa.sendMessage(from, `*✔ Se desactivo Antidelete en el grupo!*`, MessageType.text)
					} else if (!isGroup) {
						Lxa.sendMessage(from, `Para contactos use *${prefix}antidelete f0*`, MessageType.text)
					}
				} else if (argz[1] == 'f0') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						Lxa.sendMessage(from, `✔ Antidelete está deshabilitado en todos los contactos!`, MessageType.text)
					} else if (isGroup) {
						Lxa.sendMessage(from, `Para el grupo use *${prefix}antidelete 0*`, MessageType.text)
					}
				}
				break
			case 'snk':
		     case 'peraturan':
if (!isUser) return reply(mess.only.userB)
Lxa.sendMessage(from, freply, snk(), text)
		            break
        case 'darkjokes':
  if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/darkjokes.js');
   jsonData = JSON.parse(data);
   randIndex = Math.floor(Math.random() * jsonData.length);
       randKey = jsonData[randIndex];
   hasil = await getBuffer(randKey.result)
      sendImage(hasil, mek, '*Oscuro :V*')
				break										

//joox download
case 'joox':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (isLimit(sender)) return reply(mess.limitend)
  anu = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
  if (anu.error) return reply(anu.error)
  infomp3 = `╭─「 *JOOX DOWNLOADER* 」\n│\n│ *• Título* : ${anu.result.title}\n│ *• Album* : ${anu.result.album}\n│ *• Publicado* : ${anu.result.dipublikasi}\n│\n│ *Espera un momento para ser enviado*\n│ *POR FAVOR NO HAGA SPAM*\n╰─────────────────────`
  bufferddd = await getBuffer(anu.result.thumb)
  reply(mess.wait)
  buff = await getBuffer(anu.result.mp3)
  Lxa.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
  Lxa.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek})
  await limitAdd(sender) 
  break
break
case 'scdl':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
  if (isLimit(sender)) return reply(mess.limitend)
  if (args.length < 1) return reply('Ingrese al enlace de soundcloud')
  tels = body.slice(6)
  try {
  data = await fetchJson(`http://lolhuman.herokuapp.com/api/soundcloud?apikey=${lolKey}&url=${tels}`, {
method: 'get'
  })
  lagu = await getBuffer(data.result)
  Lxa.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${data.title}.mp3`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
case 'trigger-a':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)		
 tri = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 gger = await Lxa.downloadAndSaveMediaMessage(tri)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gger} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gger)
if (err) return reply('Error!')
kon = fs.readFileSync(ran)
Lxa.sendMessage(from, kon, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
break
case 'tik':
 if (isBanned) return reply(mess.only.benned)
if (args.length == 0) return reply(`Ejemplo: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_url = args[0]
ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
Lxa.sendMessage(from, ini_buffer, video, { quoted: mek })
break
   case 'snack':
 if (isBanned) return reply(mess.only.benned)
 if (!isUser) return reply(mess.only.userB)
 if (args.length < 1) return reply('¿Dónde está la URL?')
 if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
  anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
  if (anu.error) return reply(anu.error)
  sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Tamaño:* ${anu.size}\n\n*Enviando, porfavor espere*`
  bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
  reply(mess.wait)
  buff = await getBuffer(anu.result)
 Lxa.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
 Lxa.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
     break  
//--block user
case 'blocklist':
			case 'listanegra':
teks = 'Esta es la lista de números bloqueados :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
	break

//--read text on image
		case 'ocr':
  if (isBanned) return reply(mess.only.benned)
		if (!isUser) return reply(mess.only.userB)
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
			reply(mess.wait)
		await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
			.then(teks => {
			reply(teks.trim())
			fs.unlinkSync(media)
				})
			.catch(err => {
			reply(err.message)
	 	fs.unlinkSync(media)
							})
			} else {
			reply('Use una foto')
					}
			break
			
  case 'ngewe':
  if (isBanned) return reply(mess.only.benned)
  if (!isGroup) return reply(mess.only.group)
  if (!isUser) return reply(mess.only.userB)
	jds = []
  const jdiid = groupMembers
	const kosst = groupMembers
	const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
	const diaat = kosst[Math.floor(Math.random() * kosst.length)]
	teks = `El que ayer en este grub es @${akuut.jid.split('@')[0]} y @${diaat.jid.split('@')[0]} `
	jds.push(akuut.jid)
  jds.push(diaat.jid)
	mentions(teks, jds, true)
break
//ANTI VIRTEX BY AKIRA
				    case 'antivirtex':
          if (isBanned) return reply(mess.only.benned)
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.userB)
          if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Escriba 1 para activar')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex) return reply('Ya esta activo')
						antifirtex.push(from)
						fs.writeFileSync('./datauser/antifirtex.json', JSON.stringify(antifirtex))
						reply('ACTIVACIÓN EXITOSA ANTI VIRTEX EN EL GRUPO')
						Lxa.sendMessage(from,`Alerta!!! ¡¡NO ENVÍE VIRUS !! PORQUE ESTE GRUPO ES ANTI VIRUS !! SI ENVÍA VIRUS SERÁ EXPULSADO!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex) return reply('ya esta desactivado?')
						var ini = anti.botLangsexOf(from)
						antifirtex.splice(ini, 1)
						fs.writeFileSync('./datauser/antifirtex.json', JSON.stringify(antifirtex))
						reply('ANTI VIRTEX DESACTIVADO')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
					Lxa.sendMessage(from, { quoted: mek})
					break
					case 'antialakazam':
          if (isBanned) return reply(mess.only.benned)
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.userB)
          if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Escriba 1 para activar')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex2) return reply('Ya esta activo')
						antifirtex2.push(from)
						fs.writeFileSync('./datauser/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('ACTIVACIÓN EXITOSA ANTI VIRTEX EN EL GRUPO')
						Lxa.sendMessage(from,`Alerta!!! ¡¡NO ENVÍE VIRUS !! PORQUE ESTE GRUPO ES ANTI VIRUS !! SI ENVÍA VIRUS SERÁ EXPULSADO!!!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex2) return reply('ya esta desactivado')
						var ini = anti.botLangsexOf(from)
						antifirtex2.splice(ini, 1)
						fs.writeFileSync('./datauser/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('ANTI VIRTEX DESACTIVADO')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
					Lxa.sendMessage(from, { quoted: mek})
					break
					case 'antixvirus':
          if (isBanned) return reply(mess.only.benned)
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.userB)
          if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex3) return reply('UDAH NYALA KAK')
						antifirtex3.push(from)
						fs.writeFileSync('./datauser/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX 𝐗-𝐕𝐢𝐫𝐮𝐬 DI GROUP')
						Lxa.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex3) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex3.splice(ini, 1)
						fs.writeFileSync('./datauser/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('SUKSES MEMATIKAN ANTI VIRTEX 𝐗-𝐕𝐢𝐫𝐮𝐬 DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					Lxa.sendMessage(from, { quoted: mek})
					break
					case 'antivirustebel':
          if (isBanned) return reply(mess.only.benned)
          if (!isGroup) return reply(mess.only.group)
          if (!isUser) return reply(mess.only.userB)
          if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex4) return reply('UDAH NYALA KAK')
						antifirtex4.push(from)
						fs.writeFileSync('./datauser/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX *⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ DI GROUP')
						Lxa.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex4) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex4.splice(ini, 1)
						fs.writeFileSync('./datauser/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('SUKSES MEMATIKAN ANTI VIRTEX *⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					Lxa.sendMessage(from, { quoted: mek})
					break
					      case 'afk':
					        if (!isGroup) return reply(mess.only.group)
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    reply(ini_txt)
                    break
					case 'anticollosal':
        if (isBanned) return reply(mess.only.benned)
        if (!isGroup) return reply(mess.only.group)
        if (!isUser) return reply(mess.only.userB)
        if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex5) return reply('UDAH NYALA KAK')
						antifirtex5.push(from)
						fs.writeFileSync('./datauser/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX 𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍 DI GROUP')
						Lxa.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex5) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex5.splice(ini, 1)
						fs.writeFileSync('./datauser/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('SUKSES MEMATIKAN ANTI VIRTEX 𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍 DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					Lxa.sendMessage(from, { quoted: mek})
					break
					case 'antiviruschina':
        if (isBanned) return reply(mess.only.benned)
        if (!isGroup) return reply(mess.only.group)
        if (!isUser) return reply(mess.only.userB)
        if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex6) return reply('UDAH NYALA KAK')
						antifirtex6.push(from)
						fs.writeFileSync('./datauser/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX ♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚ DI GROUP')
						Lxa.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex6) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex6.splice(ini, 1)
						fs.writeFileSync('./datauser/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('SUKSES MEMATIKAN ANTI VIRTEX ♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚ DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					Lxa.sendMessage(from, { quoted: mek})
					break
case 'antilinkgrup':
			case 'antilink':
if (!isGroupAdmins) return reply(mess.only.admin)  
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Escriba 1 para activar')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('Ya esta activo!!')
antilink.push(from)
fs.writeFileSync('./datauser/antilink.json', JSON.stringify(antilink))
reply('✔ Antilink Activo')
Lxa.sendMessage(from,`ALERTA!!! Si no es administrador, no envíe el enlaces de grupos`, text)
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply('Desactivado')
var ini = anti.botLangsexOf(from)
antilink.splice(ini, 1)
fs.writeFileSync('./datauser/antilink.json', JSON.stringify(antilink))
reply('Anti link desactivado')
} else {
reply('1 para activar, 0 para desactivar')
					}
break
//--harta tahta
				case 'tahta':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('Donde esta el texto? >.<')
		teks = body.slice(7)
		if (teks.length > 9) return reply('El texto es largo, hasta 9 caracteres')
			bufferrty = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${teks}&apikey=FZVFZIBY`, {method: 'get'})
			Lxa.sendMessage(from, bufferrty, image, {quoted: mek, caption: 'Tesoro del trono '+teks})
			break

		
		case 'bugreport':
			case 'report':
if (args.length < 1) return reply(`Que quieres reportar?`)
const pesan = body.slice(11)
if (pesan.length > 600) return manik.sendMessage(from, 'Lo siento texto demasiado largo, máximo 600 texto', text, {quoted: mek})
var namar = mek.participant
const tekst1 = `*[BUG]*\nNumero : @${namar.split("@s.whatsapp.net")[0]}\nMensaje : ${pesan}`
var options = {
text: tekst1,
contextInfo: {mentionedJid: [namar]},
}
Lxa.sendMessage('59172945992@s.whatsapp.net', options, text, {quoted: mek})
reply('El problema ha sido informado al propietario de Dylux ┃ ᴮᴼᵀ, informes falsos/no será respondido.')
break

		
		case 'request':
			case 'solicitud':
if (args.length < 1) return reply(`Que quieres pedir?`)
const cfrr = body.slice(9)
if (cfrr.length > 300) return manik.sendMessage(from, 'Lo siento texto demasiado largo, máximo 300 texto', text, {quoted: mek})
var nimir = mek.participant
const ress = `*[REQ]*\nNumero : @${nimir.split("@s.whatsapp.net")[0]}\nMensaje : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nimir]},
}
Lxa.sendMessage('59172945992@s.whatsapp.net', options, text, {quoted: mek})
reply('SU SOLICITUD ha llegado al propietario de Dylux ┃ ᴮᴼᵀ, Las solicitudes que puedan sobrecargar al propietario no serán respondidas.')
break
//--stiker maker
				case 'gifstiker':
				case 'stiker':
				case 'sticker':
				case 's':
				case 'stickergif':
				case 'stickergift':
				case 'stikergif':
				case 'stikergift':
   if (isBanned) return reply(mess.only.benned)
		if (!isUser) return reply(mess.only.userB)
      if (isLimit(sender)) return reply(mess.limitend)
	 				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('DyLux-FG', 'fg98')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(` Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('DyLux-FG', 'fg98')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('〤 Se produjo un error, inténtelo de nuevo más tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('DyLux-FG', 'fg98')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									Lxa.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//Lxa.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envia una foto con *${prefix}sticker* o etiqueta una imagen que se haya enviado, video -9s`)
					}
      await limitAdd(sender)
					break
case 'triggered':
					case 'ger':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await Lxa.downloadAndSaveMediaMessage(ger)
anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
 fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
Lxa.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
                                    
} else {
reply('Usa una foto!')
}
break
//--q temp
			case 'gets':
   if (isBanned) return reply(mess.only.benned)
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(6)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Lxa.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
   case 'getstik':
   if (isBanned) return reply(mess.only.benned)
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Lxa.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Paquete no listado')
				}
				break
			
		case 'liststik':
       if (isBanned) return reply('Lo siento, estas baeneado!')
				teks = '*Lista de Sticker :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*\nUsar comandos\n*${prefix}getstik (Nombre de paquete)*\Para enviar el sticker`
				Lxa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break

		
		case 'doaharian': // Update By RzkyO & ItsmeikyXSec404	
				Lxa.updatePresence(from, Presence.composing)
       if (isBanned) return reply('Lo siento, estas baeneado!')
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/doaharian?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.hasil.doaharian) {
					teks += `*Nombre de la oración:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Traducción* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
			
		
		case 'totaluser':
			case 'totalusuarios':
					Lxa.updatePresence(from, Presence.composing) 
					teks = `╭────「 *USUARIO TOTAL Dylux ┃ ᴮᴼᵀ* 」\n`
					to = 0
					for (let hehehe of user) {
						to += 1
						teks += `[${to.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ USUARIO TOTAL : ${user.length}\n╰──────⎿ *Dylux ┃ ᴮᴼᵀ* ⏋────`
					Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
				break
        case 'addbucin':
      if (!isOwner) return reply(mess.only.ownerB)    
				huu = body.slice(10)
				bucinrandom.push(huu)
				fs.writeFileSync('./temp/bucin.json', JSON.stringify(bucinrandom))
				reply(`✔  Palabra \n*${huu}*\n Agregado a la base de datos`)
					break
				
		case 'bucin':
        if (!isUser) return reply(mess.only.userB)
				hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
				Lxa.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
					break
			
		case 'addstik':
			case 'addstick':
				if (!isQuotedSticker) return reply('Responde a un sticker')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(9)
				if (!svst) return reply('¿Cuál es el nombre de la pegatina?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Lxa.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				Lxa.sendMessage(from, `Sticker añadido\nCompruebe con ${prefix}liststik`, MessageType.text, { quoted: mek })
				break

			case 'addvn':
				if (!isQuotedAudio) return reply('Responde a un audio')
				svst = body.slice(7)
				if (!svst) return reply('¿Cuál es el nombre del audio?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Lxa.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Lxa.sendMessage(from, `Audio añadido\nRevisa con ${prefix}listvn`, MessageType.text, { quoted: mek })
				break

			case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Lxa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				} catch {
				  reply('El paquete no está registrado')
				}
				    break
			case 'listvn':
			case 'vnlist':
				teks = '*Lista de audios:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*\nUsar comandos\n*${prefix}getvn (nombre pack)*\para enviar el audio`
				Lxa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				break
			
			case 'addimg':
				if (!isQuotedImage) return reply('reponda a una imagen')
				svst = body.slice(8)
				if (!svst) return reply('nombre de la imagen')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Lxa.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Lxa.sendMessage(from, `imagen agregado\nRevise con ${prefix}listimg`, MessageType.text, { quoted: mek })
				break

			case 'getimg':
       if (isBanned) return reply('Lo siento estas baneado por el bot!')
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Lxa.sendMessage(from, buffer, image, { quoted: mek, caption: `*NI ${pushname}*` })
				} catch {
				  reply('El paquete no está registrado')
				}
				break
				
			case 'listimg':
				teks = '*Lista de Imagenes :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*\nUse comando\n*${prefix}getimg (nombre pack)*\para enviar la imagen`
				Lxa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
				break
        case 'faketoko':
      await faketoko(teks = "SEMPAK", wew = fs.readFileSync(`./image/mmk.jpeg`), title = "FBOT", code = "IDR", price = 10000000000000)   
       break
			case 'addvid':
			  if (!isOwner) return reply(mess.only.ownerB)
				if (!isQuotedVideo) return reply('responde a un video')
				svst = body.slice(8)
				if (!svst) return reply('nombre del video')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Lxa.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/vid.json', JSON.stringify(videonye))
				Lxa.sendMessage(from, `video agregado\nRevise con ${prefix}listvid`, MessageType.text, { quoted: mek })
				break

			case 'getvid':
       if (isBanned) return reply(mess.only.benned)
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Lxa.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break

			case 'listvid':
				teks = '*Lista de Videos :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*\nUse comando\n*${prefix}getvid (nombre pack)*\para que envie el video`
				Lxa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
				break


//----caklontong
  case 'caklontong':
		anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VthearApi}`, {method: 'get'})
		caklontong = `*${anu.result.soal}*`
		setTimeout( () => {
		Lxa.sendMessage(from, '*➸ Respuesta :* '+anu.result.jawaban+ '\n\n• Explicación: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
			}, 30000) // 1000 = 1s,
   		setTimeout( () => {
		Lxa.sendMessage(from, '_10 segundos…_', text) // ur cods
			}, 20000) // 1000 = 1s,
			setTimeout( () => {
		Lxa.sendMessage(from, '_20  segundos_…', text) // ur cods
			}, 10000) // 1000 = 1s,
			setTimeout( () => {
		Lxa.sendMessage(from, '_30 segundos_…', text) // ur cods
			}, 2500) // 1000 = 1s,
			setTimeout( () => {
		Lxa.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
			}, 0) // 1000 = 1s,
			break 
//--stiker to video
  case 'tovid':
			case 'tomp4':
 if (isBanned) return reply(mess.only.benned)
Lxa.updatePresence(from,
  Presence.composing)
if (!isUser) return reply(mess.only.userB)
if (!isQuotedSticker) return reply('Responde a un sticker')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Lxa.downloadAndSaveMediaMessage(anumedia)
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
  fs.unlinkSync(anum)
  if (err) return reply('Error al convertir la pegatina en vídeo')
  buffer = fs.readFileSync(ran)
  Lxa.sendMessage(from, buffer, video, {
quoted: mek, caption: 'Que demonios..'
  })
  fs.unlinkSync(ran)
})
break
//--mp4 to mp3
  case 'tomp3':
if (isBanned) return reply(mess.only.benned)
Lxa.updatePresence(from,
  Presence.composing)
if (!isUser) return reply(mess.only.userB)
if (!isQuotedVideo) return reply('Responde a un video')
reply(mess.wait)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await Lxa.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
  fs.unlinkSync(duh)
  if (err) return reply('Error al convertir video a mp3')
  buffer = fs.readFileSync(ran)
  Lxa.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', quoted: mek
  })
  fs.unlinkSync(ran)
})
break

//---random fakta
case 'fakta':
  if (isBanned) return reply(mess.only.benned)
  if (!isUser) return reply(mess.only.userB)
		anu = await fetchJson(`https://api.shizukaa.xyz/api/fakta?apikey=itsmeiky633`, {method: 'get'})
		fakta = `Faktanya: ${anu.result}`
		Lxa.sendMessage(from, fakta, text, {quoted: mek })
 break
		
		case 'animeboy':
   if (isBanned) return reply(mess.only.benned)
    if (isLimit(sender)) return reply(mess.limitend)
    if (!isUser) return reply(mess.only.userB)
		anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20boy`, {method: 'get'})
		var n = JSON.parse(JSON.stringify(anu));
		var nimek =  n[Math.floor(Math.random() * n.length)];
		pok = await getBuffer(nimek)
		Lxa.sendMessage(from, pok, image, { quoted: mek })
			break
 	
		case 'coronainfo': 
data = await fetchJson(`https://api.vhtear.com/corona&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
teks = '=================\n'
for (let i of data.result) {
teks += `*Actualizado* : ${i.updated}\n*País* : ${i.country}\n*CountryInfo* : \n*ID* : ${i.countryInfo._id}\n*iso2* : ${i.countryInfo.iso2}\n*iso3* : ${i.countryInfo.iso3}\n*Tarde* : ${i.countryInfo.lat}\n*Long* : ${i.countryInfo.long}\n*Cases* : ${i.cases}\n*TodayCases* : ${i.todayCases}\n*Deaths* : ${i.deaths}\n*TodayDeaths* : ${i.todayDeaths}\n*Recovered* : ${i.recovered}\n*TodayRecovered* : ${i.todayRecovered}\n*Active* : ${i.active}\n*Criitical* : ${i.critical}\n*CasesPerOneMillion* : ${i.casesPerOneMillion}\n*DeathsPerOneMillion* : ${i.deathsPerOneMillion}\n*Tests* : ${i.tests}\n*TestsPerOneMillion* : ${i.testsPerOneMillion}\n*Population* : ${i.population}\n*Continent* : ${i.continent}\n*OneCasePerPeople* : ${i.oneCasePerPeople}\n*OneDeathPerPeople* : ${i.oneDeathPerPeople}\n*OneTestPerPeople* : ${i.oneTestPerPeople}\n*ActivePerOneMillion* : ${i.activePerOneMillion}\n*RecoveredPerOneMillion* : ${i.recoveredPerOneMillion}\n*CriticalPerOneMillion* : ${i.criticalPerOneMillion}\n=================\n`
	}
	reply(teks.trim())
	break
	case 'slot':
if (isBanned) return reply(mess.only.benned)
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
manik.sendMessage(from, `[   | SLOTS ]\n-----------------\n :  : \n${somtoy}<=====\n :  : \n[   | SLOTS ]\n\nInformación : Si obtienes 3 piezas de lo mismo, significa que ganas.\n\nEjemplo :  :  : <=====`, text, { quoted: mek })
break
//--Tebak gambar
  case 'tebakgambar':// case by lord Manik
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Después del anterior puse")
get_result = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
result = get_result.result
ini_image = result.soal_gbr
jawaban = result.jawaban
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
console.log(jawaban)
ini_buffer = await getBuffer(ini_image)
Lxa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Responder respuesta respuestab" })
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
reply("Jawaban: " + jawaban)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
}
break
//--google voice
				
		case 'tts':
     if (isBanned) return reply(mess.only.benned)
     if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return Lxa.sendMessage(from, `¿Dónde está el código de idioma? Ejemplo : ${prefix}tts es Hola puercos`, text, { quoted: mek })
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Lxa.sendMessage(from, `¿Dónde está el texto | Ejemplo : ${prefix}tts es Hola puercos`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 900
						? reply('El texto es demasiado largo, tampoco de voy a leer la Biblia')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(ind.stikga())
								Lxa.sendMessage(from, buff, audio, { quoted: mek, ptt: true })
								fs.unlinkSync(rano)
							})
						})
					break
//-- Setting prefix
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
				  prefix = args[0]
					up.prefix = prefix
					fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
					reply(`El prefijo se ha cambiado correctamente a : ➣ ${prefix}`)
					break
			
case 'block':
  Lxa.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  Lxa.blockUser (`${body.slice(8)}@c.us`, "add")
  Lxa.sendMessage(from, `Recivido, Numero bloqueado`, text, {
quoted: mek
  })
  break
 case 'ownergrup':
 case 'ownergroup':
		case 'creadorgrupo':
 if (!isGroup) return reply(mess.only.group)
 Lxa.updatePresence(from, Presence.composing)
   options = {
    text: `Este es el Creador del grupo : wa.me/${from.split("-")[0]}`,
   contextInfo: { mentionedJid: [from] }
    }
   Lxa.sendMessage(from, options, text, { quoted: mek } )
				break	
//membuka blokir
case 'unblock':
  if (!isGroup) return reply(mess.only.group)
  if (!isOwner) return reply(mess.only.ownerB)
  Lxa.blockUser (`${body.slice(9)}@c.us`, "remove")
  Lxa.sendMessage(from, `Recivido, Desbloqueado`, text)
  break


//--Hilih maker
case 'hilih':
if (args.length < 1) return reply('Ingrese texto')
	try {
	anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
	reply(anu.result)
		} catch {
	reply(mess.ferr)
		}
	break
	    case 'smoji':
      if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
        emoji = args[0]
        try {
        emoji = encodeURI(emoji[0])
        } catch {
        emoji = encodeURI(emoji)
         }
        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${apikey}`)
        Lxa.sendMessage(from, ini_buffer, sticker, { quoted: mek })
       break
	case 'emoji':
	anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${args[0]}&type=aple`, {method: 'get'})
	jes = await getBuffer(anu)
	Lxa.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
		break
	
		
		case 'tiktokstalk':
 if (isBanned) return reply(mess.only.benned)
 try {
 if (args.length < 1) return Lxa.sendMessage(from, 'Ingrese Username', text, {quoted: mek})
	 let { user, stats } = await tiktod.getUserProfileInfo(args[0])
		reply(mess.wait)
		teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Siguiendo* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
			buffer = await getBuffer(user.avatarLarger)
			Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
			console.log(`Error :`, color(e,'red'))
			reply('Posible nombre de usuario no válido')
					}
		break
	case 'nulis':
	case 'tulis':
		case 'escribe':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply(`Que escribo? Ejemplo : ${prefix}escribe Hola puercos`)
	nul = body.slice(7)
	reply('✔ Espere, Lo estoy escribiendo')
	tak = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${nul}&apikey=apivinz`)
	Lxa.sendMessage(from, tak, image, {quoted: mek, caption: 'Es mejor de lo que escribas tú :V'})
		break
	case 'url2img':
tipelist = ['desktop','tablet','mobile']
if (args.length < 1) return reply('¿Qué tipo es?')
if (!tipelist.includes(args[0])) return reply('Tipo desktop|tablet|mobile')
if (args.length < 2) return reply('¿Dónde está la URL?')
if (!isUrl(args[1])) return reply(mess.error.Iv)
	reply(mess.wait)
	anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarKey}`, {method: 'get'})
 if (anu.error) return reply(anu.error)
	buff = await getBuffer(anu.result)
	Lxa.sendMessage(from, buff, image, {quoted: mek})
	break
case 'wame':
if (isBanned) return reply(mess.only.benned)
Lxa.updatePresence(from, Presence.composing)
options = {
text: `*Link WhatsApp :*\nhttps://wa.me/${sender.split("@s.whatsapp.net")[0]}?text=pap+dong+yank\n*O ( / )*\napi.whatsapp.com/send?phone=${sender.split("@")[0]}`,
contextInfo: {
mentionedJid: [sender]
}
}
Lxa.sendMessage(from, options, text, {quoted: mek})
break
//---Tagall member
		case 'tagall':
if (isBanned) return reply(mess.only.benned)
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.userB)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
  teks += `┃ @${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
}
mentions('▂▂▂▂▂〘  *TAGALL* 〙▂▂▂▂▂▂▂\n┏━━━━━━━━━━━━━━━━━━━━\n┠⊷'+teks+'┃━━━━━━━━━━━━━━━━━━━━\n┃────✪ Dylux ┃ ᴮᴼᵀ ✪────\n┗━━━━━━━━━━━━━━━━━━━━', members_id, true)
break
case 'tagall2':
if (isBanned) return reply(mess.only.benned)
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.userB)
if (!isGroupAdmins) return reply(mess.only.admin)
	 members_id = []
	 tekss = (args.length > 1) ? body.slice(8).trim() : ''
   tekss += '\n\n'
	 for (let mem of groupMembers) {
	 tekss += `🚀 @${mem.jid.split('@')[0]}\n`
	 members_id.push(mem.jid)
		}
 	 mentions(tekss, members_id, true)
	break
//clear all chat
		case 'clearall':
		if (!isOwner) return reply('siapa? owner kah?')
			anu = await Lxa.chats.all()
			Lxa.setMaxListeners(25)
			for (let _ of anu) {
			Lxa.deleteChat(_.jid)
					}
			reply('Elimine todos mis chats 🥺')
			break
      	case 'infogc':
				case 'groupinfo':
				case 'infogrupo':
        case 'grupoinfo':
         Lxa.updatePresence(from, Presence.composing)
        	if (!isGroup) return reply(mess.only.group)
              try {
           	ppUrl = await Lxa.getProfilePicture(from)
	         	} catch {
          	ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		     			}
              reply(mess.wait) // leave empty to get your own
             	buffer = await getBuffer(ppUrl)
           Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOMBRE* : ${groupName}\n*MIEMBROS* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESC* : ${groupDesc}`})
        break
				case 'bc':
					if (!isOwner) return reply('¿Quién es usted?')
					if (args.length < 1) return reply('Que quieres anunciar?')
					anu = await Lxa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Lxa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Lxa.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}`})
						}
						reply('Anuncio enviado')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply('Anuncio enviado')
					}
					break

//--menaikan jabatan
      case 'promote':
			case 'rol':
			case 'darrol':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Promovido\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
Lxa.groupRemove(from, mentioned)
} else {
mentions(`Ahora @${mentioned[0].split('@')[0]} es un admin del grupo!`, mentioned, true)
Lxa.groupMakeAdmin(from, mentioned)
}
break
  //ganti nama grup
		break
  case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
Lxa.groupUpdateSubject(idgrup, `${body.slice(9)}`)
Lxa.sendMessage(from, '*☉* Nombre de grupo cambiado', text, {
  quoted: mek
})
break

  //ganti desk
  case 'setdesk':
			case 'setdes':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Lxa.groupUpdateDescription(from, `${body.slice(9)}`)
Lxa.sendMessage(from, '*☉* Descripcion de grupo cambiado', text, {
  quoted: mek
})
break
case 'fdlgroup':
case 'grupobot':
case 'grupfdl':
case 'groupfdl':
reply('*https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA*\n*Grupo del bot Dylux ┃ ᴮᴼᵀ*')
break
//--menurunkan jabatan
				
		case 'demote':
			case 'delrol':
			case 'quitarrol':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Admin degradado\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupRemove(from, mentioned)
					} else {
						mentions(`Un admi menos @${mentioned[0].split('@')[0]} F en el chat!`, mentioned, true)
						Lxa.groupDemoteAdmin(from, mentioned)
					}
					break
          case 'kicktime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta al objetivo!!!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					Lxa.sendMessage(from, 'Yok Sama" Al-fatihah Buat Yang Keluar', text)
					}, 31000)
					setTimeout( () => {
					reply('Hecho Min:v')
					}, 30000)
					setTimeout( () => {
					Lxa.groupRemove(from, mentioned)
					}, 29000)
					setTimeout( () => {
					Lxa.sendMessage(from, `Patada a @${mentioned[0].split('@')[0]} awww`, text) // ur cods
					}, 24000)
					setTimeout( () => {
					Lxa.sendMessage(from, 'ban en', text)
					}, 18000)
					setTimeout( () => {
					Lxa.sendMessage(from, 'ban en', text)
                    }, 14000)
					setTimeout( () => {
					Lxa.sendMessage(from, `Listo para banear @${mentioned[0].split('@')[0]}`, text)
					}, 8000)
					setTimeout( () => {
					Lxa.sendMessage(from, 'ban en', text)
					}, 2500)
					setTimeout( () => {
					reply('Se acabo adios :D')
					}, 0)
					break
//--menambah member
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Ingrese el número')
					if (args[0].startsWith('08')) return reply('Utilice el código de país mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Lxa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar, tal vez porque es privado')
					}
					break

//--mengeluarkan member
				
		case 'kick':
			case 'ban':
			
          if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona al objetivo')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Órdenes recibidas, emitidas :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupRemove(from, mentioned)
					} else {
						mentions(`Órdenes recibidas, emitidas : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Lxa.groupRemove(from, mentioned)
					}
					break

//--list admin grup
case 'listadmins':
case 'listadmin':
case 'adminlist':
case 'staff':
			
if (!isGroup) return reply(mess.only.group)
teks = `STAFF DEL GRUPO *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
	no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
	break
//--ganti pp bot
case 'setppbot':
  if (!isOwner) return reply(mess.only.ownerB)
	   Lxa.updatePresence(from, Presence.composing) 
		if (!isQuotedImage) return reply(`Envia una imagen con *${prefix}setbotpp* o etiqueta una imagen que ya se ha enviado`)
		botpp = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		cuk = await Lxa.downloadAndSaveMediaMessage(botpp)
await Lxa.updateProfilePicture(botNumber, cuk)
		reply('Gracias por el nuevo perfil😗')
  break
//--Mengambil link grup
    case 'linkgroup':
    case 'linkgc':
	  case 'linkgrup':
	  case 'gruplink':
		case 'grouplink':
			case 'link':
   if (!isGroup) return reply(mess.only.group)
   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
      linkgc = await Lxa.groupInviteCode (from)
	   mmk = `https://chat.whatsapp.com/${linkgc}\n\nLink del Grupo *${groupName}*`
		 Lxa.sendMessage(from, mmk, text, {quoted: mek})
  break

//--Mengeluarkan bot
      case 'leave':
if (!isGroup) return reply(mess.only.group)
if (!isUser) return reply(mess.only.userB)
if (!isGroupAdmins) return reply(mess.only.admin)
anu = await Lxa.groupLeave(from, `Adiós a todos los miembros *${groupMetadata.subject}*`, groupId)
	  break
  
		case 'tostk':
   if (args.length == 0) return reply(`Usage: ${prefix + command} query\nEjemplo: ${prefix + command} 🗿`)
   emoji = args[0]
        try {
   emoji = encodeURI(emoji[0])
          } catch {
   emoji = encodeURI(emoji)
            }
   buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=RiuApikey`)
    Lxa.sendMessage(from, buffer, sticker, { quoted: mek })
      break 
	 case 'ttp':
if (args.length < 1) return reply('Envia el texto?\nEjemplo ${prefix}ttp FG98')
memeklu = body.slice(5)
kontollu = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${memeklu}`)
Lxa.sendMessage(from, kontollu, sticker, {quoted: freply})
break
		case 'attp':
if (isBanned) return reply(mess.only.benned)
 if (args.length < 1) return reply(`_Envie el texto_\n*Ejemplo ${prefix}attp DyLux*`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
Lxa.sendMessage(from, attp2, sticker, {quoted: mek})
	break
	case 'colorttp':
  if (args.length == 0) return reply(`Uso: ${prefix + command} Buenas\nEjm: ${prefix + command} FG`)
    txt = args.join(" ")
 buffer = await getBuffer(`http://api.lolhuman.xyz/api/ttp3?apikey=RiuApikey&text=${txt}`)
 Lxa.sendMessage(from, buffer, sticker, { quoted: mek })
  break
//--Convert stiker to image
	case 'toimg':
if (isBanned) return reply(mess.only.benned)
if (!isQuotedSticker) return reply('Responde a un sticker')
if (!isUser) return reply(mess.only.userB)
	reply(mess.wait)
	imgmed = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	medimg = await Lxa.downloadAndSaveMediaMessage(imgmed)
	ran = getRandom('.png')
	exec(`ffmpeg -i ${medimg} ${ran}`, (err) => {
	fs.unlinkSync(medimg)
	if (err) return reply('ha fallado')
	buffer = fs.readFileSync(ran)
	Lxa.sendMessage(from, buffer, image, {quoted: mek, caption: 'de nada'})
		fs.unlinkSync(ran)
			})
			break
	 	
		case 'covidglobal': 
	 if (isBanned) return reply(mess.only.benned)
 	anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=syahri2k21`)
	teks = `➸ *Total Cases* : ${anu.result.totalCases}\n*➸ Recovered :* ${anu.result.recovered}\n*➸ Deaths :* ${anu.result.deaths}\n*➸ Active Cases :* ${anu.result.activeCases}\n*➸ Closed Cases :* ${anu.result.closedCases}\n*➸ Last Update :* ${anu.result.lastUpdate}`
	 Lxa.sendMessage(from, teks, text, {quoted: mek, caption: '*NI YANK*'})
	break
  case 'covidindo':
   if (isBanned) return reply(mess.only.benned)
  	data = await fetchJson(`https://videfikri.com/api/covidindo/`)
		hasil = `Positif : ${data.result.positif}\nSembuh : ${data.result.sembuh}\nMeninggal : ${data.result.meninggal}\nDirawat : ${data.result.dalam_perawatan}`
			reply(hasil)
	    break
case 'kehidupan':
   if (isBanned) return reply(mess.only.benned)
	Lxa.updatePresence(from, Presence.composing) 
	data = await fetchJson(`https://api.fdci.se/rep.php?gambar=kata%20kata%20bijak%20kehidupan`, {method: 'get'})
  n = JSON.parse(JSON.stringify(data));
	nimek =  n[Math.floor(Math.random() * n.length)];
	pok = await getBuffer(nimek)
	Lxa.sendMessage(from, pok, image, { quoted: mek })
		break
//--arti mimpi
  case 'artimimpi':
 if (isBanned) return reply(mess.only.benned)
aruga = body.slice(11)
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Mimpi apa ?\nContoh: ${prefix}artimimpi ular`)
try {
anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${aruga}`, {
  method: 'get'
})
reply(anu.result.artimimpi)
await limitAdd(sender)
} catch {
  reply('Parece que la función tiene un error')
}
break

//--Simsimi talk
case 'simi'://UPDATE MR.108P ////UPDATE MR108P
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
anu = await fetchJson(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${body.slice(6)}`, {method: 'get'})
teks = `${anu.result}`
Lxa.sendMessage(from, teks, text, {quoted: mek})
break
	case 'simih'://UPDATE MR.108P // Update By RzkyO & ItsmeikyXSec404
    await Lxa.updatePresence(from, Presence.composing)
	   simi = await fetchJson(`http://api.lolhuman.xyz/api/simi?apikey=${apikey}&text=${body.slice(5)}`)
       reply(simi.result)
			break
//New Fitur Autosticker By Manik
case 'autosticker':
if (!isOwner) return reply('Solo el dueño')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAuto) return reply('Ya esta activo')
autosticker.push(from)
fs.writeFileSync('./autosticker.json', JSON.stringify(autosticker))
reply('La funcion d auto sticker esta activo en el grupó ')
} else if (Number(args[0]) === 0) {
autosticker.splice(from)
fs.writeFileSync('./autosticker.json', JSON.stringify(autosticker))
reply('Se desactivo la funcion de autosticker ')
} else {
reply('1 para activar, 0 para desactivar')
}
break
//--Verifkasi'
case 'verify':
 case 'r':
   case 'registered':
     case 'register':
Lxa.updatePresence(from, Presence.composing)
if (isUser) return reply('*Tu cuenta ya esta verificada -_-*')
user.push(sender)
fs.writeFileSync('./datauser/registered.json', JSON.stringify(user))
try {
ppimg = await Lxa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
captionnya = `╭◪ *「 VERIFICADO 」* 
╰───────────────╮  
╭───────────────╯
├━⊱Nombre: ${pushname}
├━⊱Num: wa.me/${sender.split("@")[0]}
├━⊱Hora: ${time}
├━⊱NS: ${createSerial(15)}
╰───────────────╯
verificación completa usa *${prefix}Help* para ver el Menu`
daftarimg = await getBuffer(ppimg)
Lxa.sendMessage(from, daftarimg, image, {quoted: freply, caption: captionnya})
break
     case 'profile':
			case 'perfil':
try {
ppimg = await Lxa.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}       
const reqXp = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const uangku = checkATMuser(sender)
const lvl = getLevelingLevel(sender)
tes = fs.readFileSync(`./image/eweom.jpg`)
mmknya = `╭◪ *「 PERFIL 」* 
╰───────────────╮  
╭───────────────╯
├━⊱Nombre: *${pushname}*
├━⊱Numero: *wa.me/${sender.split("@")[0]}*
├━⊱Rank : *${role}*
├━⊱Usuario : *${prema}*
├━⊱Dinero : *${uangku}*
├━⊱Nivel : *${lvl}*
├━⊱Xp : *${reqXp}*
╰───────────────╯`
mmkcan = await getBuffer(ppimg)
Lxa.sendMessage(from, mmkcan, image, {quoted: freply, caption: mmknya})
break
case 'nsfw':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Boo :𝘃')
if (Number(args[0]) === 1) {
if (isNsfw) return reply(' *Activado*  !!')
nsfw.push(from)
fs.writeFileSync('./datauser/nsfw.json', JSON.stringify(nsfw))
reply('✔  NSFW habilitado en el grupo')
} else if (Number(args[0]) === 0) {
nsfw.splice(from, 1)
fs.writeFileSync('./datauser/nsfw.json', JSON.stringify(nsfw))
reply('✔  NSFW Deshabilitado en el grupo')
} else {
reply(ind.satukos())
}
break
//--grup semua peserta
case 'closegc':
			case 'cerrargrupo':
			case 'cerrargp':
			case 'closegp':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
   Lxa.updatePresence(from, Presence.composing)
  var nomor = mek.participant
  const close = {
text: `Grupo cerrado por admin @${nomor.split("@s.whatsapp.net")[0]}\nahora *solo los admin* pueden escribir`,
contextInfo: {
  mentionedJid: [nomor]
}
  }
  Lxa.groupSettingChange (from, GroupSettingChange.messageSend, true);
  reply(close)
  break
//--grup hanya admin
case 'opengc':
  case 'bukagc':
			case 'abrirgp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Lxa.updatePresence(from, Presence.composing)
open = {
  text: `Grupos abierto por admin @${sender.split("@")[0]}\nahora *todos los participantes* pueden escribir`,
  contextInfo: {
mentionedJid: [sender]
  }
}
Lxa.groupSettingChange (from, GroupSettingChange.messageSend, false)
Lxa.sendMessage(from, open, text, {
  quoted: mek
})
break
case 'exif':
if (args.length < 1) return Lxa.reply(from, `Penggunaan ${prefix}exif nama|author`, mek)
if (!arg.split('|')) return aqul.reply(from, `Penggunaan ${prefix}exif nama|author`, mek)
exif.create(arg.split('|')[0], arg.split('|')[1])
	Lxa.reply(from, '✔', mek)
	break
 
		case 'block':
  if (!isOwner) return reply(mess.only.ownerB)
  if (args.length < 1) return
  Lxa.updatePresence(from, Presence.composing) 
		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	     ban = mentioned
		reply(`Se bloqueo : ${ban}`)
			break
		case 'unblock':
  if (!isOwner) return reply(mess.only.ownerB)
	bnnd = body.slice(8)
	ban.splice(`${bnnd}@s.whatsapp.net`, 1)
	reply(`Numero wa.me/${bnnd} desbloqueado!`)
		break
     case 'blocklist':
		ben = '```Lista de Bloqueados``` :\n'
		for (let banned of ban) {
		ben += `~> @${banned.split('@')[0]}\n`
			}
		ben += `Total : ${ban.length}`
  	Lxa.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break
//---mengahapus pesan bot
  case 'del':
  case 'd':
if (!isGroup)return reply(mess.only.group)
if (!isUser) return reply(mess.only.userB)
try {
Lxa.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Solo puedo borrar mensajes míos')
}
break

//--ganteng cekkkk
  case 'gantengcek':
if (args.length < 1) return reply('Menciona a alguien')
ganteng = body.slice(12)
const gan = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const teng = gan[Math.floor(Math.random() * gan.length)]
Lxa.sendMessage(from, 'Guapo : *'+ganteng+'*\n\nRespuesta : '+ teng+'%', text, {
  quoted: mek
})
break

//--Cantik cekk
  case 'cantikcek':
if (!isUser) return reply(mess.only.daftarB)
	cantik = body.slice(11)
	if (args.length < 1) return reply('¿A quién quieres comprobar quién es mi hermana??')
	const can =['10% lotes" cuidado:v\nCuidado de broma:v','30% El espíritu de Kaká se cuida a sí mismo><','20% El espíritu de Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
		const tik = can[Math.floor(Math.random() * can.length)]
	Lxa.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
break
				case 'hidetag':
			case 'here':
			case 'everyone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await Lxa.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					Lxa.sendMessage(from, options, text)
					break
				
		case 'welcome':
			case 'bv':
			case 'bienvenida':
		      if (!isUser) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya esta activo')
						welkom.push(from)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('✔ Activó con éxito la función de bienvenida en este grupo')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('✔ Desactivado la función de bienvenida en este grupo')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Tag target')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona a alguien')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Lxa.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Lxa.updateProfilePicture(botNumber, buffer)
						mentions(`La foto de perfil se actualizó correctamente con la foto de perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Fallo')
					}
					break
				case 'wait':
	       if (!isUser) return reply(mess.only.daftarB)
	  	   if (isBanned) return reply(mess.only.benned)
    			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
      const media = await Lxa.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							Lxa.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Solo una foto')
					}
        break
				default:
if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Lxa.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = mek
						const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`el tamaño es demasiado grande :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Falló, el video es demasiado grande`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								Lxa.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
          }
        		if (budy.includes(`Bang`)) {
                var value = (`Iya ngab, ada yg bisa dibantu?`)
                var group = await Lxa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                Lxa.sendMessage(from, options, text, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }
		if (budy.includes(`Pagi`)) {
                var value = (`Iya pagi sayang, udah senyum belum hari ini?`)
                var group = await Lxa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                Lxa.sendMessage(from, options, text, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }                     
		if (budy.includes(`Malem`)) {
                var value = (`Iya malem sayang, udah senyum belum hari ini?`)
                var group = await Lxa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                Lxa.sendMessage(from, options, text, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }          
		if (budy.includes(`Assalamualaikum`)) {
                var value = (`Waalaikumsalam`)
                var group = await Lxa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                Lxa.sendMessage(from, options, text, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }
		if (budy.includes(`assalamualaikum`)) {
                var value = (`Waalaikumsalam`)
                var group = await Lxa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                Lxa.sendMessage(from, options, text, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }     
		if (budy.includes(`Gracias`)) {
                var value = (`de nada 😊`)
                var group = await Lxa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                Lxa.sendMessage(from, options, text, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }
		if (budy.includes(`gracias`)) {
		      	     var value = (`no se preucupe 😊`)
                var group = await Lxa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                Lxa.sendMessage(from, options, text, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }
if (budy.includes(`@59172945992`)) {
       	     var value = (`Hekhem:v\nEso es lo que lleva la etiqueta de mi dueño, me gusta:v`)
                var group = await Lxa.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map( async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                Lxa.sendMessage(from, options, text, {quoted: mek, contextInfo: { forwardingScore: 1000, isForwarded: true }})
                  }
				if (body.startsWith(`${prefix}${command}`)) {
comd = `        ────────────────\nHola *${pushname}* !!!\nEse comando no esta mi lista : *${prefix}${command}*\nUsa esto para ver el menu *${prefix}Help*\n        ────────────────`
Lxa.sendMessage(from, comd, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "*Command Tidak Terdaftar*\n", 'jpegThumbnail': fs.readFileSync('./temp/stick/owa.webp')}}}})
				  }
           if (!isGroup && !isCmd) {
           await Lxa.updatePresence(from, Presence.composing)
           simi = await fetchJson(`http://api.lolhuman.xyz/api/simi?apikey=${apikey}&text=${budy}`)
               reply(simi.result)
               }
            }
        } catch (e) {
            e = String(e)
            if (!e.includes("mentionedJid")) {
                const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss')
            if (!e.includes("this.isZero")) {
                const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                console.log(color(time_error, "white"), color("[ Android World ]", "aqua"), color(e, 'blue'))}
            }
        }
    })
}
starts()
