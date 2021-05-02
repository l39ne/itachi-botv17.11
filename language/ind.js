const d = '*'
exports.lvlon = () => {
	return`*❗┃ Niveles Activo*`
}

exports.lvloff = () => {
	return`*❗┃ Niveles Desactivado*`
}

exports.lvlnul = () => {
	return`*❗┃ Tu Nivel aun esta vacio*`
}

exports.lvlnoon = () => {
	return`*✘┃ El Grupo no activo la nivelacion*`
}

exports.premium = (prefix) => {
	return`💎 *Esta funcion es solo para usuarios premium, si le interesa comuniquese con mi creador*
escriba : ${prefix}owner`
}

exports.stikga = () => {
	return`*✘┃Intenta responder/o volver a etiquetar*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
╭◪ *「 ⇮ FELICITACIONES ⇮  」* 
╰───────────────╮ 
┠⊷ Subiste de Nivel
╭───────────────╯
├⊱► Nombre : ${pushname}
├⊱► Numero : ${sender.split("@")[0]}
├⊱► Xp : ${getLevelingXp(sender)}
├⊱► Limite :  +3
├⊱► Nivel : ${getLevel} ➪ ${getLevelingLevel(sender)}
╰───────────────╯`
}

exports.nsfwoff = () => {
	return`${d}El grupo no activo NSFW${d}`
}
exports.satukos = () => {
	return`*Escriba 1/habilitar  0/desabilitar`
}
