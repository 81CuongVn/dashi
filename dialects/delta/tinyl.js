const welc = "964361642668343376"
const cons = "939675214600605757"
const anno = "946442711936938034"
const voti = "939904807605514260"
const self = "963930001303015495"
const cour = "939675256765939863"
const semi = "965054741480636496"
const gove = "950196454880866314"
const logs = "955948174894325782"
const spec = "980961535826473033"

const imag = "948675276466958336"
const vide = "950419717779238993"
const argu = "951655268884820068"
const game = "940786577808969738"
const poli = "981347603167981609"
const role = "949118223805210674"
const funq = "964714582402826280"
const lear = "981647726129319976"
const fran = "973334244178919504"
const bots = "983507823965114378"
const hydr = "955689401688682526"

const vtts = "947301903186944020"
const mtts = "951345913627021354"
const ctts = "955599561869639710"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    callback: async (message, args) => {
        if(message.channel.id == welc || message.channel.id == cons || message.channel.id == anno || message.channel.id == voti || message.channel.id == self || message.channel.id == cour || message.channel.id == semi || message.channel.id == gove || message.channel.id == logs || message.channel.id == spec || message.channel.id == vtts || message.channel.id == mtts || message.channel.id == ctts || message.channel.id == imag || message.channel.id == vide || message.channel.id == argu || message.channel.id == game || message.channel.id == poli || message.channel.id == role || message.channel.id == funq || message.channel.id == lear || message.channel.id == fran || message.channel.id == bots || message.channel.id == hydr) return
        message.channel.sendTyping()
        await sleep(Math.floor(Math.random() * 0) + 1001)
        message.channel.send("delta airlines dialect")
    }
}