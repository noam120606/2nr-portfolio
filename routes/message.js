const sendMessage = require('../functions/sendMessage');

module.exports = {
    url: "/message",
    method: "POST",

    run: async (app, req, res) => {

        const data = req.body;
        if (!data.nom || !data.prenom || !data.email || !data.message) return res.redirect('/contact?success=0');

        console.log(`[MESSAGE] : ${data.nom} ${data.prenom} (${data.email})`);
        console.log("agent:" , req.headers['user-agent']);
        
        const message = {
            content: `||<@457926967661035522>, <@295119133530652672>||`,
            embeds: [
                {
                    title: "Nouveau message",
                    color: 0x00ff00,
                    fields: [
                        {
                            name: "Nom",
                            value: `\`${data.nom}\``,
                            inline: true,
                        },
                        {
                            name: "Prénom",
                            value: `\`${data.prenom}\``,
                            inline: true,
                        },
                        {
                            name: "Email",
                            value: `\`${data.email}\``,
                            inline: true,
                        },
                        {
                            name: "Message",
                            value: `\`\`\`\n${data.message}\n\`\`\``,
                        },
                    ],
                    timestamp: new Date(),
                },
            ],
        };

        try {
            await sendMessage(message, process.env.WEBHOOK_CONTACT);
            res.redirect('/contact?success=1');
        } catch (error) {
            console.error(error);
            res.redirect('/contact?success=0');
        }
        
    },
};