module.exports = (payload, webhookUrl) => {

    const msg = typeof payload === 'string' ? { content: payload } : payload
  
    return new Promise(async (resolve, reject) => {

        try {

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(msg),
            });

            resolve(response);

        } catch (error) { reject(error) };
        
    });

};