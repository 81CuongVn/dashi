const { MessageEmbed, MessageSelectMenu } = require("discord.js")

module.exports = {
	name: "guildMemberUpdate",
	async execute(client, oldMember, newMember) {
		const logs = await client.channels.cache.get("955948174894325782")

		if (oldMember.nickname !== newMember.nickname) {
			let oldnickname = oldMember.nickname
			let newnickname = newMember.nickname

			if (!oldnickname) {
				oldnickname = oldMember.user.username
			}

			if (!newnickname) {
				newnickname = newMember.user.username
			}

			const nicknameEmbed = new MessageEmbed()
				.setTitle(`${newMember.user.tag}`)
				.setDescription(`<@${newMember.user.id}>`)
				.addField(
					"📝 Member Nickname Changed",
					`**${oldnickname}** -> **${newnickname}**`
				)
				.setColor("#9BDBF5")
				.setTimestamp()
				.setThumbnail(`${newMember.displayAvatarURL()}`)

			logs.send({
				embeds: [nicknameEmbed],
			}).catch((err) => {
				console.log(err)
			})
		}

		// else if(oldMember.displayAvatarURL() !== newMember.displayAvatarURL()){
		//     console.log("new displayavatar")
		//     // const avatarEmbed = new MessageEmbed()
		//     // .setTitle(`${newMember.user.tag}`)
		//     // .setDescription(`<@${newMember.user.id}>`)
		//     // .addField("✈️ Member Avatar Changed", `${oldMember.displayAvatarURL()} -> ${newMember.displayAvatarURL()}`)
		//     // .setColor("#9BDBF5")
		//     // .setTimestamp()
		//     // .setThumbnail(`${newMember.displayAvatarURL()}`)

		//     // logs.send({
		//     //     embeds: [avatarEmbed]
		//     // })
		//     // .catch((err) => {
		//     //     console.log(err)
		//     // })
		// }
	},
}
