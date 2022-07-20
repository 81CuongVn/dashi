module.exports = {
	name: "addSong",
	async execute(client, queue, song) {
		const songrequests = await client.channels.cache.get(
			"992630810186367016"
		)

		songrequests
			.send(
				`🎶 | Added ${song.name} — \`${song.formattedDuration}\` to the queue by ${song.user}`
			)
			.catch((err) => {
				console.log(err)
			})
			.then((message) => {
				setTimeout(() => message.delete().catch((err) => {}), 15000)
			})
	},
}
