module.exports = async ({ client }) => {
	client.on("messageCreate", async (message) => {
		if (message.channel.type == "DM") return
		if (message.channel.id !== "973334244178919504") return
		if (
			!message.member.roles.cache.some(
				(role) => role.id == "973334603253317702"
			)
		)
			return

		message.channel
			.send("https://c.tenor.com/tKcnhoT4No8AAAAC/of-to-gulag.gif")
			.catch((err) => {
				console.log(err)
			})
	})
}
