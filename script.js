const nomes = ["Ana", "Fernanda", "Marcelo", "Amanda", "Gabriel"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);

export const perguntas = [
    { // 0 — pergunta inicial
        caminho: "inicio",
        enunciado:
            "Ao entrar na nova casa inteligente, você encontra o painel central " +
            "aguardando a primeira configuração do sistema. " +
            "Por onde você decide começar?",
        alternativas: [
            {
                texto: "Configurar as rotinas de automação e economia de energia.",
                afirmacao: ["Decidiu focar na automação e na economia de energia da casa."],
                tipo: "entrada", proxima: 1
            },
            {
                texto: "Revisar as configurações de privacidade e segurança da rede.",
                afirmacao: ["Decidiu priorizar a segurança digital e a privacidade dos moradores."],
                tipo: "entrada", proxima: 2
            }
        ]
    },
    { // 1 — A1: início da automação e eficiência
        caminho: "A",
        enunciado:
            "Você acessa o módulo de automação residencial. A conta de luz " +
            "costuma ser alta e vários aparelhos ficam ligados sem necessidade. " +
            "Como você programa o sistema?",
        alternativas: [
            {
                texto: "Instalar sensores de presença para desligar luzes em cômodos vazios.",
                afirmacao: ["Programou sensores de presença para evitar desperdício de iluminação."],
                tipo: "avancar", proxima: 3
            },
            {
                texto: "Ativar o modo eco pré-configurado pelo fabricante e ajustar o termostato.",
                afirmacao: ["Ativou o modo eco de fábrica e otimizou o controle de temperatura."],
                tipo: "salto", proxima: 4
            },
            {
                texto: "Investigar um alerta de acesso desconhecido no roteador da casa.",
                afirmacao: ["Interrompeu a automação para investigar um acesso estranho na rede."],
                tipo: "trocar", proxima: 2, disponivel: true
            }
        ]
    },
    { // 2 — B1: início da segurança e privacidade
        caminho: "B",
        enunciado:
            "Ao abrir o painel de segurança, você nota que as câmeras internas, " +
            "fechaduras e assistentes de voz ainda usam a senha padrão de fábrica. " +
            "Qual é a sua primeira ação?",
        alternativas: [
            {
                texto: "Alterar todas as senhas e ativar a autenticação em dois fatores.",
                afirmacao: ["Substituiu as senhas padrão e ativou a autenticação em dois fatores."],
                tipo: "avancar", proxima: 7
            },
            {
                texto: "Isolar os aparelhos inteligentes em uma rede Wi-Fi separada.",
                afirmacao: ["Criou uma rede Wi-Fi exclusiva para isolar os dispositivos inteligentes."],
                tipo: "salto", proxima: 8
            },
            {
                texto: "Ajustar primeiro o consumo de energia dos aparelhos conectados.",
                afirmacao: ["Decidiu organizar o consumo energético antes de mexer na rede."],
                tipo: "trocar", proxima: 1, disponivel: true
            }
        ]
    },
    { // 3 — A2: gestão de climatização e horários
        caminho: "A",
        enunciado:
            "Os sensores de luz já estão funcionando, mas o ar-condicionado e o " +
            "aquecedor de água continuam ligando nos horários de tarifa mais cara. " +
            "O que você faz?",
        alternativas: [
            {
                texto: "Programar o funcionamento para horários de menor tarifa energética.",
                afirmacao: ["Agendou os aparelhos de alto consumo para horários econômicos."],
                tipo: "avancar", proxima: 4
            },
            {
                texto: "Voltar ao painel inicial e recalibrar a sensibilidade dos sensores.",
                afirmacao: ["Retornou ao painel para recalibrar os sensores de presença."],
                tipo: "salto", proxima: 1
            },
            {
                texto: "Desativar os disjuntores de segurança para impedir cortes automáticos.",
                afirmacao: ["Desativou os disjuntores de proteção do quadro elétrico."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Sem os disjuntores de proteção, uma sobrecarga queimou a central " +
                    "da casa inteligente. Você falhou na missão e precisa recomeçar."
            }
        ]
    },
    { // 4 — A3: assistente de voz e rotinas diárias
        caminho: "A",
        enunciado:
            "Agora você precisa configurar o assistente virtual para ajudar nas " +
            "tarefas diárias da família, como abrir persianas e preparar o café. " +
            "Como organizar essa rotina?",
        alternativas: [
            {
                texto: "Criar comandos personalizados de voz para manhã e noite.",
                afirmacao: ["Configurou rotinas personalizadas por comando de voz."],
                tipo: "avancar", proxima: 5
            },
            {
                texto: "Sincronizar a casa com a previsão do tempo para controle automático.",
                afirmacao: ["Integrou a previsão do tempo ao controle de persianas e clima."],
                tipo: "salto", proxima: 6
            },
            {
                texto: "Revisar as permissões de gravação de áudio do assistente virtual.",
                afirmacao: ["Decidiu auditar as permissões de áudio e privacidade do assistente."],
                tipo: "trocar", proxima: 8, disponivel: true
            }
        ]
    },
    { // 5 — A4: falha de conexão e modo offline
        caminho: "A",
        enunciado:
            "Durante um teste, a internet cai e alguns moradores ficam presos do " +
            "lado de fora porque a fechadura depende da nuvem. Como resolver?",
        alternativas: [
            {
                texto: "Habilitar o controle local via Bluetooth e chaves físicas de emergência.",
                afirmacao: ["Configurou o funcionamento offline e chaves físicas de reserva."],
                tipo: "avancar", proxima: 6
            },
            {
                texto: "Voltar à configuração de energia para revisar o nobreak do sistema.",
                afirmacao: ["Voltou à etapa anterior para verificar a autonomia do nobreak."],
                tipo: "salto", proxima: 3
            },
            {
                texto: "Deixar todas as portas destrancadas permanentemente para evitar bloqueios.",
                afirmacao: ["Deixou as fechaduras eletrônicas destrancadas o tempo todo."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Com as portas destrancadas, a residência ficou totalmente vulnerável " +
                    "a invasões. Você falhou na missão e precisa recomeçar."
            }
        ]
    },
    { // 6 — A5: integração final da automação
        caminho: "A",
        enunciado:
            "A automação está quase pronta, mas cada morador tem preferências " +
            "diferentes de iluminação e temperatura. Qual é a sua decisão final?",
        alternativas: [
            {
                texto: "Criar perfis individuais e um painel simples para toda a família.",
                afirmacao: ["Criou perfis individuais e um painel acessível para todos."],
                tipo: "avancar", proxima: 11
            },
            {
                texto: "Voltar à etapa de falhas para testar novamente o modo sem internet.",
                afirmacao: ["Refez os testes de contingência para quedas de energia e rede."],
                tipo: "salto", proxima: 5
            },
            {
                texto: "Aplicar políticas rígidas de privacidade nos perfis dos moradores.",
                afirmacao: ["Levou os perfis criados para uma revisão completa de privacidade."],
                tipo: "trocar", proxima: 10, disponivel: true
            }
        ]
    },
    { // 7 — B2: privacidade de câmeras e microfones
        caminho: "B",
        enunciado:
            "Você percebe que as câmeras internas e o assistente de voz enviam " +
            "gravações contínuas para servidores externos. Como agir?",
        alternativas: [
            {
                texto: "Configurar armazenamento local criptografado e desativar o envio contínuo.",
                afirmacao: ["Ativou o armazenamento local criptografado para câmeras e áudios."],
                tipo: "avancar", proxima: 8
            },
            {
                texto: "Retornar às configurações de rede para bloquear conexões externas suspeitas.",
                afirmacao: ["Voltou ao painel de rede para filtrar o tráfego externo."],
                tipo: "salto", proxima: 2
            },
            {
                texto: "Compartilhar o link ao vivo das câmeras em um grupo público para testar.",
                afirmacao: ["Publicou o link das câmeras internas em um grupo aberto."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "O vazamento das imagens expôs a intimidade dos moradores na internet. " +
                    "Você falhou na missão e precisa recomeçar."
            }
        ]
    },
    { // 8 — B3: atualizações e dispositivos antigos
        caminho: "B",
        enunciado:
            "O sistema alerta que uma lâmpada inteligente antiga não recebe mais " +
            "atualizações de segurança e apresenta falhas conhecidas. O que você faz?",
        alternativas: [
            {
                texto: "Atualizar os demais aparelhos e substituir o dispositivo obsoleto.",
                afirmacao: ["Atualizou o firmware da casa e substituiu o aparelho vulnerável."],
                tipo: "avancar", proxima: 9
            },
            {
                texto: "Aplicar bloqueio de firewall no aparelho e revisar as permissões gerais.",
                afirmacao: ["Isolou o dispositivo no firewall e avançou para a revisão geral."],
                tipo: "salto", proxima: 10
            },
            {
                texto: "Aproveitar a revisão para programar cenários inteligentes de iluminação.",
                afirmacao: ["Decidiu configurar cenários automáticos com as novas lâmpadas."],
                tipo: "trocar", proxima: 4, disponivel: true
            }
        ]
    },
    { // 9 — B4: controle de acesso para visitantes
        caminho: "B",
        enunciado:
            "Parentes e prestadores de serviço visitam a casa com frequência. " +
            "Como você libera o acesso deles aos recursos inteligentes?",
        alternativas: [
            {
                texto: "Gerar senhas temporárias para fechaduras e uma rede Wi-Fi de visitantes.",
                afirmacao: ["Criou acessos temporários e rede separada para visitantes."],
                tipo: "avancar", proxima: 10
            },
            {
                texto: "Voltar à auditoria de dispositivos para verificar se há aparelhos intrusos.",
                afirmacao: ["Retornou à lista de dispositivos para auditar conexões ativas."],
                tipo: "salto", proxima: 7
            },
            {
                texto: "Entregar a senha de administrador da casa para qualquer visitante.",
                afirmacao: ["Entregou o acesso total de administrador para pessoas externas."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Um terceiro alterou as configurações da central e bloqueou os donos " +
                    "da casa. Você falhou na missão e precisa recomeçar."
            }
        ]
    },
    { // 10 — B5: orientação e treinamento dos moradores
        caminho: "B",
        enunciado:
            "Toda a proteção técnica está configurada, mas os moradores ainda " +
            "podem cair em golpes digitais ou comandos falsos. Qual o passo final?",
        alternativas: [
            {
                texto: "Orientar todos sobre boas práticas de segurança e alertas de invasão.",
                afirmacao: ["Treinou os moradores sobre privacidade, alertas e uso seguro."],
                tipo: "avancar", proxima: 12
            },
            {
                texto: "Voltar à configuração de visitantes para testar as senhas temporárias.",
                afirmacao: ["Revisou os acessos temporários antes de concluir a segurança."],
                tipo: "salto", proxima: 9
            },
            {
                texto: "Desativar todos os alertas de segurança para não incomodar ninguém.",
                afirmacao: ["Desligou todas as notificações de tentativa de invasão."],
                tipo: "gameover",
                disponivel: true,
                mensagem:
                    "Sem alertas ativos, uma tentativa de invasão passou despercebida " +
                    "e comprometeu o sistema. Você falhou na missão e precisa recomeçar."
            }
        ]
    },
    { // 11 — Final da narrativa A (Vitória)
        caminho: "A",
        final: "vitoria",
        enunciado:
            "Você transformou a residência em um modelo de eficiência e conforto. " +
            "O consumo de energia caiu drasticamente, as rotinas funcionam mesmo " +
            "sem internet e todos os moradores aproveitam a tecnologia com facilidade. " +
            "A missão foi concluída com sucesso. Você venceu!",
        alternativas: []
    },
    { // 12 — Final da narrativa B (Vitória)
        caminho: "B",
        final: "vitoria",
        enunciado:
            "Você blindou a casa inteligente contra invasões e vazamentos de dados. " +
            "Os dispositivos operam com criptografia, os acessos são controlados " +
            "e os moradores sabem utilizar a tecnologia com segurança. " +
            "A missão foi concluída com sucesso. Você venceu!",
        alternativas: []
    }
]; 
import { perguntas } from "./perguntas.js";
import { aleatorio, nome } from "./aleatorio.js";

// 1. Elementos do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");

// Elementos da tela de créditos
const botaoCreditos = document.querySelector(".creditos-btn");
const telaCreditos = document.querySelector(".tela-creditos");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");

// 2. Estado da partida
let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";

// 3. Eventos dos botões
botaoIniciar.addEventListener("click", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);
botaoCreditos.addEventListener("click", mostraCreditos);
botaoVoltarInicio.addEventListener("click", reiniciaJogo);

function iniciaJogo() {
    reiniciaJogo();
    faseDaPartida = "jogando";
    telaInicial.style.display = "none";
    caixaPerguntas.style.display = "block";
    caixaAlternativas.style.display = "flex";
    mostraPergunta();
}

function reiniciaJogo() {
    atual = 0;
    historiaFinal = "";
    faseDaPartida = "inicio";
    caixaPerguntas.textContent = "";
    caixaAlternativas.replaceChildren();
    tituloResultado.textContent = "";
    textoResultado.textContent = "";
    caixaResultado.classList.remove("gameover");
    telaInicial.style.display = "block";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "none";
    telaCreditos.style.display = "none";
    botaoCreditos.style.display = "none";
    botaoJogarNovamente.style.display = "inline-block";
}

// 4. Exibe a pergunta da posição atual e cria seus botões
function mostraPergunta() {
    const perguntaAtual = perguntas[atual];

    if (perguntaAtual.final === "vitoria") {
        mostraVitoria(perguntaAtual.enunciado);
        return;
    }

    caixaPerguntas.textContent =
        perguntaAtual.enunciado.replace(/você/gi, nome);

    caixaAlternativas.replaceChildren();

    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.disabled = alternativa.disponivel === false;
        botao.addEventListener("click", function () {
            respostaSelecionada(alternativa);
        });
        caixaAlternativas.appendChild(botao);
    }
}

// 5. Lê a escolha e muda a posição atual
function respostaSelecionada(opcaoSelecionada) {
    if (faseDaPartida !== "jogando") {
        return;
    }

    if (opcaoSelecionada.disponivel === false) {
        return;
    }

    if (opcaoSelecionada.tipo === "gameover") {
        const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacao + " ";
        mostraGameOver(opcaoSelecionada.mensagem);
        return;
    }

    const destino = opcaoSelecionada.proxima;

    if (!Number.isInteger(destino) || perguntas[destino] === undefined) {
        console.error("Destino inválido:", destino);
        return;
    }

    const origem = perguntas[atual];
    const chegada = perguntas[destino];
    const mudouDeCaminho = origem.caminho !== chegada.caminho;

    if (atual !== 0 && mudouDeCaminho && opcaoSelecionada.tipo !== "trocar") {
        console.error("Mudança de caminho sem o tipo trocar.");
        return;
    }

    if (opcaoSelecionada.tipo === "trocar" && !mudouDeCaminho) {
        console.error("A troca deve levar a outro caminho.");
        return;
    }

    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacao + " ";
    atual = destino;
    mostraPergunta();
}

function mostraGameOver(mensagem) {
    faseDaPartida = "gameover";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.replaceChildren();
    caixaAlternativas.style.display = "none";
    caixaResultado.classList.add("gameover");
    caixaResultado.style.display = "block";
    tituloResultado.textContent = "GAME OVER";
    textoResultado.textContent =
        mensagem + "\n\nSuas escolhas nesta tentativa:\n" + historiaFinal;
    botaoJogarNovamente.textContent = "Recomeçar do início";
    botaoJogarNovamente.style.display = "inline-block";
    botaoCreditos.style.display = "none";
    telaCreditos.style.display = "none";
}

function mostraVitoria(mensagem) {
    if (faseDaPartida !== "jogando" || perguntas[atual].final !== "vitoria") {
        return;
    }

    faseDaPartida = "vitoria";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.replaceChildren();
    caixaAlternativas.style.display = "none";
    caixaResultado.classList.remove("gameover");
    caixaResultado.style.display = "block";
    tituloResultado.textContent = "THE END";
    textoResultado.textContent =
        mensagem + "\n\nSeu percurso nesta partida:\n" + historiaFinal;

    botaoJogarNovamente.style.display = "none";
    botaoCreditos.style.display = "inline-block";
    telaCreditos.style.display = "none";
}

function mostraCreditos() {
    if (faseDaPartida !== "vitoria") {
        return;
    }

    faseDaPartida = "creditos";
    telaInicial.style.display = "none";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "none";
    telaCreditos.style.display = "block";
}

// Estado inicial da página
reiniciaJogo();