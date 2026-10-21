"use strict";

async function carregarProjeto() {
    const status = document.getElementById("status");
    try {
        const resposta = await fetch(
            "https://api.github.com/repos/gianluca-berria/CheckorKaput",
            { headers: { Accept: "application/vnd.github+json" }, signal: AbortSignal.timeout(10000) }
        );
        if (!resposta.ok) throw new Error("Falha ao consultar o GitHub.");
        const projeto = await resposta.json();
        if (typeof projeto.description === "string" && projeto.description.trim()) {
            document.getElementById("descricao").textContent = " — " + projeto.description;
        }
        status.textContent = "Projeto integrado ao GitHub. Consulte o código e seu histórico pelo link abaixo.";
    } catch {
        status.textContent = "Consulta ao GitHub indisponível. O link do projeto continua disponível.";
    }
}

carregarProjeto();
