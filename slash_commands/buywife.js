const {SlashCommandBuilder} = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports.data = new SlashCommandBuilder()
.setName("buywife")
.setDescription("Buy wife")

module.exports.run = async (client, interaction, options, Economy) => {

    let getUser = await Economy.findOne({where: {id: interaction.member.id}})
    if(!getUser) {
        getUser = await Economy.create({id: interaction.member.id, wallet: 0, bank: 0, debitcard: false, motorcycle: false, superbike: false, wife: false, bailbonds: false})
    }
    
    if(getUser.wife == false){
        if(getUser.debitcard == true){
            if(getUser.bank >= 1000){
                const newBank = getUser.bank - 1000
                await Economy.update({bank: newBank}, {where: {id: interaction.member.id}})
                await Economy.update({wife: true}, {where: {id: interaction.member.id}})
    
                const embed = new MessageEmbed()
                .setTitle(`💸 Purchase Complete 💸`)
                .setDescription(`You just purchased **wife** for 1000 Dashcoins:tm: from your bank! Your new bank balance is ${newBank} Dashcoins:tm:.`)
                .setColor("#9BDBF5")
                .setThumbnail(interaction.member.user.avatarURL())
            
                return interaction.editReply({
                    embeds: [embed]
                })
            }

            else if(getUser.bank < 1000 && getUser.wallet >= 1000){
                const newWallet = getUser.wallet - 1000
                await Economy.update({wallet: newWallet}, {where: {id: interaction.member.id}})
                await Economy.update({wife: true}, {where: {id: interaction.member.id}})
    
                const embed = new MessageEmbed()
                .setTitle(`💸 Purchase Complete 💸`)
                .setDescription(`You just purchased **wife** for 1000 Dashcoins:tm: from your wallet! Your new wallet balance is ${newWallet} Dashcoins:tm:.`)
                .setColor("#9BDBF5")
                .setThumbnail(interaction.member.user.avatarURL())
            
                return interaction.editReply({
                    embeds: [embed]
                })
            }

            else if(getUser.bank < 1000 && getUser.wallet < 1000){
                const walletcoinstogo = 1000 - getUser.wallet
                const bankcoinstogo = 1000 - getUser.bank
    
                const embed = new MessageEmbed()
                .setTitle(`⚠️ Insufficient Funds ❌`)
                .setDescription(`You don't have enough Dashcoins:tm: in your wallet or bank! You need **${walletcoinstogo}** Dashcoins:tm: more in your wallet **or** **${bankcoinstogo}** Dashcoins:tm: more in your bank.`)
                .setColor("#9BDBF5")
                .setThumbnail(interaction.member.user.avatarURL())
            
                return interaction.editReply({
                    embeds: [embed]
                })
            }
        }
        else if(getUser.debitcard == false){
            if(getUser.wallet >= 1000){
                const newWallet = getUser.wallet - 1000
                await Economy.update({wallet: newWallet}, {where: {id: interaction.member.id}})
                await Economy.update({wife: true}, {where: {id: interaction.member.id}})
    
                const embed = new MessageEmbed()
                .setTitle(`💸 Purchase Complete 💸`)
                .setDescription(`You just purchased **wife** for 1000 Dashcoins:tm: from your wallet! Your new wallet balance is ${newWallet} Dashcoins:tm:.`)
                .setColor("#9BDBF5")
                .setThumbnail(interaction.member.user.avatarURL())
            
                return interaction.editReply({
                    embeds: [embed]
                })
            }
    
            else if(getUser.wallet < 1000){
                const coinstogo = 1000 - getUser.wallet
    
                const embed = new MessageEmbed()
                .setTitle(`⚠️ Insufficient Funds ❌`)
                .setDescription(`You don't have enough Dashcoins:tm: in your wallet! You need **${coinstogo}** Dashcoins:tm: more.`)
                .setColor("#9BDBF5")
                .setThumbnail(interaction.member.user.avatarURL())
            
                return interaction.editReply({
                    embeds: [embed]
                })
            }
        }
    }

    else if(getUser.wife == true){
        interaction.editReply({ 
            content: "You already own **wife**!"
        })
    }
}