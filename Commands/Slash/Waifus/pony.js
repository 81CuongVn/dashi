const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")

function RandArray(array) {
	var rand = (Math.random() * array.length) | 0
	var rValue = array[rand]
	return rValue
}

module.exports.data = new SlashCommandBuilder()
	.setName("pony")
	.setDescription("Gives a random My Little Pony!")

module.exports.run = async ({
	client,
	interaction,
	Systems,
	Waifus,
	defaultColor,
}) => {
	const getWaifus = await Systems.findOne({
		where: { system: "Waifus" },
	})

	if (getWaifus.online === false) {
		return await interaction
			.editReply({
				content: "The Waifus system is currently disabled",
			})
			.catch((err) => {})
	}

	const ponies = [
		"Twilight Sparkle",
		"Rainbow Dash",
		"Applejack",
		"Fluttershy",
		"Rarity",
		"Pinkie Pie",
		"Princess Celestia",
		"Princess Luna",
		"Princess Cadance",
		"Starlight Glimmer",
		"Sweetie Belle",
		"Scootaloo",
		"Apple Bloom",
		"Shining Armor",
		"Derpy Hooves",
		"Big Macintosh",
		"Trixie",
	]
	const randompony = RandArray(ponies)

	const Embed = new EmbedBuilder()

	if (randompony === "Twilight Sparkle") {
		Embed.setColor("#CC9CDF")
			.setTitle("Twilight Sparkle")
			.setDescription("book horse")
			.setImage(
				"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea656545-c0c2-426c-bc41-e47ce5c7a0c9/ddx441e-7ec94165-cf65-48f7-a15b-14ae1f30c8df.png/v1/fill/w_1280,h_1716,strp/twilight_sparkle_a_true_princess_by_andoanimalia_ddx441e-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxNiIsInBhdGgiOiJcL2ZcL2VhNjU2NTQ1LWMwYzItNDI2Yy1iYzQxLWU0N2NlNWM3YTBjOVwvZGR4NDQxZS03ZWM5NDE2NS1jZjY1LTQ4ZjctYTE1Yi0xNGFlMWYzMGM4ZGYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.N96lZelDRuUdr6NzE8OSTIU8tocBI3MQVAHsgqoQAEI"
			)
	} else if (randompony === "Rainbow Dash") {
		Embed.setColor(defaultColor)
			.setTitle("Rainbow Dash")
			.setDescription("fast pone")
			.setImage(
				"https://i.pinimg.com/originals/06/05/2b/06052b46e6d6395abd5630764a644b7b.png"
			)
	} else if (randompony === "Applejack") {
		Embed.setColor("#FABA62")
			.setTitle("Applejack")
			.setDescription("work horse")
			.setImage(
				"https://static.tvtropes.org/pmwiki/pub/images/mlp_applejack.png"
			)
	} else if (randompony === "Fluttershy") {
		Embed.setColor("#FAF5AB")
			.setTitle("Fluttershy")
			.setDescription("quiet pony")
			.setImage(
				"https://static.wikia.nocookie.net/characterprofile/images/2/29/Fluttershy.png/revision/latest/scale-to-width-down/1600?cb=20200722005905"
			)
	} else if (randompony === "Rarity") {
		Embed.setColor("#EAEEF0")
			.setTitle("Rarity")
			.setDescription("fashion expert")
			.setImage(
				"https://static.wikia.nocookie.net/in-a-locked-room/images/a/af/Rarity.png/revision/latest?cb=20180419140244"
			)
	} else if (randompony === "Pinkie Pie") {
		Embed.setColor("#F5B7D0")
			.setTitle("Pinkie Pie")
			.setDescription("always high on sugar")
			.setImage(
				"https://static.wikia.nocookie.net/heroes-and-villain/images/8/8c/Pinke_Pie.png/revision/latest?cb=20190127191309"
			)
	} else if (randompony === "Princess Celestia") {
		Embed.setColor("#FEF7FB")
			.setTitle("Princess Celestia")
			.setDescription("dayshift royal ruler")
			.setImage(
				"https://static.wikia.nocookie.net/heroes-and-villain/images/c/cc/Princess_celestia.png/revision/latest?cb=20190127203437"
			)
	} else if (randompony === "Princess Luna") {
		Embed.setColor("#363E7A")
			.setTitle("Princess Luna")
			.setDescription("nightshift royal ruler")
			.setImage(
				"https://static.wikia.nocookie.net/p__/images/1/13/Luna.png/revision/latest?cb=20161122231248&path-prefix=protagonist"
			)
	} else if (randompony === "Princess Cadance") {
		Embed.setColor("#FFCBE4")
			.setTitle("Princess Cadance")
			.setDescription("supporting-role royal leader")
			.setImage(
				"https://static.wikia.nocookie.net/pure-good-wiki/images/7/74/Princess_Cadance_Vector.png/revision/latest?cb=20200709215552"
			)
	} else if (randompony === "Starlight Glimmer") {
		Embed.setColor("#F2C7F8")
			.setTitle("Starlight Glimmer")
			.setDescription("reformed pony")
			.setImage(
				"https://static.wikia.nocookie.net/sexypedia/images/1/15/Starlight.png/revision/latest?cb=20210515185452"
			)
	} else if (randompony === "Sweetie Belle") {
		Embed.setColor("#EFEDED")
			.setTitle("Sweetie Belle")
			.setDescription("cute cutie mark crusader")
			.setImage(
				"https://static.wikia.nocookie.net/mlpfanart/images/e/e6/Sweetie_belle_vector_by_tigersoul96.png/revision/latest?cb=20120516042820"
			)
	} else if (randompony === "Scootaloo") {
		Embed.setColor("#F9B764")
			.setTitle("Scootaloo")
			.setDescription("chicken cutie mark crusader")
			.setImage(
				"https://static.wikia.nocookie.net/my-little-pony-in-madagascar/images/b/b5/Determined_Scootaloo.png/revision/latest?cb=20180329153302"
			)
	} else if (randompony === "Apple Bloom") {
		Embed.setColor("#F3F49B")
			.setTitle("Apple Bloom")
			.setDescription("farmer cutie mark crusader")
			.setImage(
				"https://static.wikia.nocookie.net/my-little-universe/images/2/24/Applebloom.png/revision/latest?cb=20200615103110"
			)
	} else if (randompony === "Shining Armor") {
		Embed.setColor("#FFFFFF")
			.setTitle("Shining Armor")
			.setDescription("cadence's husbando")
			.setImage(
				"https://static.wikia.nocookie.net/heroes-and-villain/images/f/f6/Shining_Armor.png/revision/latest?cb=20190131181012"
			)
	} else if (randompony === "Derpy Hooves") {
		Embed.setColor("#C2C5D5")
			.setTitle("Derpy Hooves")
			.setDescription("the community's favorite background pony")
			.setImage(
				"https://static.wikia.nocookie.net/smashbroslawlorigins/images/5/51/Derpy_hooves_vector_by_durpy-d4bwgwf.png/revision/latest?cb=20140519002319"
			)
	} else if (randompony === "Big Macintosh") {
		Embed.setColor("#E64A57")
			.setTitle("Big Macintosh")
			.setDescription('"yep"')
			.setImage(
				"https://static.wikia.nocookie.net/mlpfanart/images/e/e6/Vector_Big_Macintosh_by_dey-chan.png/revision/latest?cb=20130605202825"
			)
	} else if (randompony === "Trixie") {
		Embed.setColor("#338FCC")
			.setTitle("Trixie")
			.setDescription("the great and powerful trixie")
			.setImage(
				"https://static.wikia.nocookie.net/mlpfimroleplay/images/9/92/Trixie.png/revision/latest?cb=20160812001149"
			)
	}

	const sentInteraction = await interaction
		.editReply({
			embeds: [Embed],
		})
		.catch((err) => {})

	sentInteraction.react("❤️").catch((err) => {})

	const filter = (reaction, user) => {
		return reaction.emoji.name === "❤️" && user.id === interaction.member.id
	}

	const collector = await sentInteraction.createReactionCollector({
		filter,
		max: 1,
		time: 20000,
	})

	collector.on("collect", async (reaction) => {
		const getUser = await Waifus.findOne({
			where: { id: interaction.member.id },
		})

		if (!getUser) {
			await Waifus.create({
				id: interaction.member.id,
				waifu: randompony,
			})

			return await interaction
				.editReply({
					content: `Aww, your new waifu is **${randompony}**!`,
				})
				.catch((err) => {})
		} else if (getUser) {
			const existingwaifu = getUser.waifu

			return await interaction
				.editReply({
					content:
						`You already have a waifu—**${existingwaifu}**! Use ` +
						"`/breakup`" +
						` to break up with ${existingwaifu}`,
				})
				.catch((err) => {})
		}

		// console.log(
		// 	`${interaction.member.username} collected a new ${reaction.emoji.name} reaction`
		// )
	})

	collector.on("end", (collected, reason) => {
		return

		// if (reason === "limit") return console.log("limit reached")
		// else {
		// 	console.log("time expired")
		// }
	})
}
