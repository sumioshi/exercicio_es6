function funcaoMuitoPesada() { 
    return new Promise((resolve, reject) => {
        try {
            let execucoes = 0;
            for (let i = 0; i < 1000000000; i++) {
                execucoes++;
            }
            resolve(execucoes); // Retorna o resultado na Promise
        } catch (error) {
            reject(error);
        }
    });
}

async function execucaoPrincipal() {
    console.log("inicio");

    try {
        const result = await funcaoMuitoPesada(); // Aguarda o resultado da Promise
        console.log(result); 
        console.log("fim");
    } catch (error) {
        console.error("Erro:", error);
    }
}

