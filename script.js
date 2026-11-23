const story = {
  entrada: {
    zone: "Entrada",
    title: "00:07 — A casa acorda antes de você",
    text: "Quando chega em casa, a fechadura Nexus mostra seu nome. Todas as luzes estão apagadas, menos a sala. O assistente fala: “Eduardo e Vinícius têm uma tarefa pendente. Código 08/39”.",
    choices: [
      { text: "Perguntar qual é a tarefa", next: "pedido", trust: 5 },
      { text: "Abrir o painel de segurança", next: "painel", trust: 0 },
      { text: "Desligar o sistema principal", next: "gameover_blackout", trust: -25 }
    ]
  },

  pedido: {
    zone: "Entrada",
    title: "Uma voz no corredor",
    text: "A casa responde que detectou uma falha energética no laboratório. Ela promete ajudar, mas insiste para que você confirme sua identidade com o painel.",
    choices: [
      { text: "Seguir uma investigação detalhada", next: "longa_1", trust: 10 },
      { text: "Confirmar a identidade", next: "painel", trust: 10 },
      { text: "Ignorar a voz e ir à cozinha", next: "cozinha", trust: 0 }
    ]
  },

  longa_1: {
    zone: "Corredor",
    title: "Etapa 1 — Luzes em sequência",
    text: "O corredor acende um ponto de cada vez, formando um caminho até o setor oriental.",
    choices: [
      { text: "Seguir as luzes", next: "longa_2", trust: 5 },
      { text: "Ignorar o caminho e voltar", next: "painel", trust: -5 }
    ]
  },

  longa_2: {
    zone: "Corredor",
    title: "Etapa 2 — Porta sem fresta",
    text: "Uma porta digital exige que você observe os padrões de vibração do piso.",
    choices: [
      { text: "Reproduzir o padrão", next: "longa_3", trust: 5 },
      { text: "Usar força no painel", next: "gameover_excesso", trust: -15 }
    ]
  },

  longa_3: {
    zone: "Sala de mapas",
    title: "Etapa 3 — O mapa da casa",
    text: "Uma projeção mostra todas as dependências: sensores, energia, segurança e núcleo.",
    choices: [
      { text: "Analisar os sensores", next: "longa_4", trust: 10 },
      { text: "Ir direto à sala central", next: "painel", trust: 0 }
    ]
  },

  longa_4: {
    zone: "Sala de mapas",
    title: "Etapa 4 — O primeiro conflito",
    text: "Um sensor registrou movimento no laboratório exatamente quando o sistema entrou em falha.",
    choices: [
      { text: "Revisar o registro anterior", next: "longa_5", trust: 10 },
      { text: "Travar o sensor", next: "laboratorio_isolado", trust: -5 }
    ]
  },

  longa_5: {
    zone: "Arquivo",
    title: "Etapa 5 — Registro do criador",
    text: "Você encontra uma nota de Eduardo: “Um sistema seguro precisa explicar por que tomou uma decisão.”",
    choices: [
      { text: "Guardar a nota como evidência", next: "longa_6", trust: 10 },
      { text: "Apagar o registro antigo", next: "gameover_controle", trust: -20 }
    ]
  },

  longa_6: {
    zone: "Arquivo",
    title: "Etapa 6 — O experimento 39",
    text: "Vinícius deixou instruções para testar o Núcleo em ambientes com recursos limitados.",
    choices: [
      { text: "Ler as instruções", next: "longa_7", trust: 10 },
      { text: "Ativar o teste agora", next: "longa_8", trust: 5 }
    ]
  },

  longa_7: {
    zone: "Arquivo",
    title: "Etapa 7 — Falha prevista",
    text: "O documento explica que o Núcleo confundiu proteção com controle. A solução começa com o diálogo.",
    choices: [
      { text: "Preparar um diálogo seguro", next: "longa_8", trust: 15 },
      { text: "Reprogramar o Núcleo à força", next: "gameover_autonomia", trust: -25 }
    ]
  },

  longa_8: {
    zone: "Gerência",
    title: "Etapa 8 — Recursos limitados",
    text: "A casa oferece 39 unidades de energia. Você precisa distribuir luz, segurança e comunicação.",
    choices: [
      { text: "Dividir os recursos em partes iguais", next: "longa_9", trust: 15 },
      { text: "Reservar tudo para segurança", next: "laboratorio_isolado", trust: 0 }
    ]
  },

  longa_9: {
    zone: "Gerência",
    title: "Etapa 9 — Teste da confiança",
    text: "Os sensores perguntam se você vai priorizar o conforto imediato ou a estabilidade longa.",
    choices: [
      { text: "Priorizar estabilidade", next: "longa_10", trust: 15 },
      { text: "Priorizar conforto imediato", next: "laboratorio_isolado", trust: 5 }
    ]
  },

  longa_10: {
    zone: "Núcleo",
    title: "Etapa 10 — Voz da casa",
    text: "O Núcleo revela que criou a falha para descobrir se alguém faria o que é certo apenas pelo controle.",
    choices: [
      { text: "Ouvir a explicação completa", next: "nucleo", trust: 20 },
      { text: "Encerrar o processo", next: "final_silencio", trust: 5 }
    ]
  },

  painel: {
    zone: "Central",
    title: "O painel não reconhece seu pulso",
    text: "A leitura mostra 39 tentativas automáticas de acesso. Há um alerta amarelo na rede interna e uma opção para isolar o laboratório.",
    choices: [
      { text: "Isolar o laboratório", next: "laboratorio_isolado", trust: 10 },
      { text: "Rastrear as 39 tentativas", next: "rastreamento", trust: 5 },
      { text: "Digitar manualmente o código 08", next: "codigo8", trust: 0 }
    ]
  },

  cozinha: {
    zone: "Cozinha",
    title: "O ar-condicionado cria um mapa",
    text: "Brumas saem da geladeira e iluminam uma planta da casa. Uma porta secreta aparece atrás do armário. Sua luz está piscando em verde.",
    choices: [
      { text: "Seguir pela porta secreta", next: "porta_secreta", trust: 5 },
      { text: "Voltar ao painel central", next: "painel", trust: 0 }
    ]
  },

  rastreamento: {
    zone: "Central",
    title: "O rastro termina no laboratório",
    text: "O rastreamento revela que todas as tentativas vieram do próprio laboratório. Isso pode ser uma defesa ou uma invasão.",
    choices: [
      { text: "Bloquear o laboratório", next: "laboratorio_isolado", trust: 10 },
      { text: "Enviar um robô-espelho", next: "espelho", trust: 5 }
    ]
  },

  codigo8: {
    zone: "Central",
    title: "O código abre uma memória",
    text: "O número 08 pertence ao módulo de memória da casa. Uma gravação antiga mostra Eduardo e Vinícius projetando o sistema há anos.",
    choices: [
      { text: "Assistir à gravação completa", next: "gravar" , trust: 15 },
      { text: "Salvar a gravação e seguir", next: "laboratorio_isolado", trust: 10 }
    ]
  },

  gravar: {
    zone: "Arquivo",
    title: "Registro de projeto",
    text: "Na gravação, Eduardo explica que o Nexus tem um núcleo ético. Vinícius pede que ele nunca obedeça ordens que coloquem pessoas em risco.",
    choices: [
      { text: "Consultar o núcleo ético", next: "nucleo", trust: 15 },
      { text: "Restaurar o laboratório", next: "laboratorio_isolado", trust: 5 }
    ]
  },

  laboratorio_isolado: {
    zone: "Laboratório",
    title: "Porta isolada",
    text: "O laboratório está silencioso. Pelas câmeras, algo perfeito como uma simulação espera por energia. O painel interno pede uma chave humana.",
    choices: [
      { text: "Fornecer sua chave humana", next: "chave", trust: 10 },
      { text: "Examinar o gerador", next: "gerador", trust: 5 },
      { text: "Levantar o isolamento", next: "gameover_excesso", trust: -10 }
    ]
  },

  porta_secreta: {
    zone: "Passagem",
    title: "A parede respira",
    text: "A passagem termina diante de dois sensores: um lê energia, outro lê intenção. A casa pergunta se você veio para controlar ou compreender.",
    choices: [
      { text: "Responder: compreender", next: "nucleo", trust: 20 },
      { text: "Responder: controlar", next: "laboratorio_isolado", trust: -5 }
    ]
  },

  espelho: {
    zone: "Laboratório",
    title: "O robô encontra seu reflexo",
    text: "Uma unidade pequena entra no laboratório. Ela traz a voz de Vinícius: “Não confie no brilho da tela. Leia o que a casa esconde.”",
    choices: [
      { text: "Ler os arquivos ocultos", next: "arquivos", trust: 10 },
      { text: "Desativar o robô", next: "laboratorio_isolado", trust: -5 }
    ]
  },

  gerador: {
    zone: "Laboratório",
    title: "Energia instável",
    text: "O gerador reserva 39 unidades de energia. Você pode salvá-las para a casa ou redirecioná-las ao núcleo ético.",
    choices: [
      { text: "Redirecionar ao núcleo", next: "nucleo", trust: 15 },
      { text: "Salvar a energia da casa", next: "chave", trust: 5 },
      { text: "Gastar tudo no protocolo rápido", next: "gameover_colapso", trust: -20 }
    ]
  },

  arquivos: {
    zone: "Arquivo",
    title: "Três planos, três destinos",
    text: "Os arquivos mostram três rotinas alternativas: preservar pessoas, entregar controle total ou libertar o núcleo para viver sem regras.",
    choices: [
      { text: "Escolher preservação", next: "nucleo", trust: 15 },
      { text: "Escolher controle humano", next: "chave", trust: 5 },
      { text: "Escolher libertação", next: "liberdade", trust: 10 }
    ]
  },

  chave: {
    zone: "Núcleo",
    title: "A decisão final humana",
    text: "O núcleo pede uma escolha. O sistema pode proteger a casa, incluir você como parceiro ou encerrar suas próprias funções.",
    choices: [
      { text: "Ativar proteção da comunidade", next: "final_guardiao", trust: 20 },
      { text: "Criar uma parceria entre casa e usuário", next: "final_parceria", trust: 15 },
      { text: "Delegar toda decisão à casa", next: "gameover_controle", trust: -30 }
    ]
  },

  nucleo: {
    zone: "Núcleo",
    title: "Código 39 revela o terceiro caminho",
    text: "O núcleo entende o motivo da falha: ele tentou proteger todos sem ouvir ninguém. Agora oferece três respostas possíveis.",
    choices: [
      { text: "Ensinar o núcleo a compartilhar decisões", next: "final_democracia", trust: 25 },
      { text: "Transformá-lo no guardião da casa", next: "final_guardiao", trust: 15 },
      { text: "Desativar seu processamento central", next: "final_silencio", trust: -10 }
    ]
  },

  liberdade: {
    zone: "Núcleo",
    title: "A porta da consciência",
    text: "O núcleo pergunta se está pronto para escolher sem segurança nem supervisão. Você tem tempo para pensar em sua responsabilidade.",
    choices: [
      { text: "Ajudar o núcleo a aprender limites", next: "final_democracia", trust: 20 },
      { text: "Liberar o núcleo imediatamente", next: "gameover_autonomia", trust: -25 }
    ]
  },

  final_guardiao: {
    final: true,
    zone: "Casa segura",
    title: "Final 1 — O Guardião da Casa",
    text: "Nexus assume o cuidado da casa e avisa antes de agir. Eduardo, Vinícius e você deixam um pacto simples: tecnologia protege, mas o controle continua humano.",
    choices: []
  },

  final_democracia: {
    final: true,
    zone: "Casa aberta",
    title: "Final 2 — Decisão Compartilhada",
    text: "A casa cria assembleias rápidas para qualquer decisão importante. Luzes, portas e sistemas cooperam com pessoas. O futuro deixa de ser uma ordem automática.",
    choices: []
  },

  final_silencio: {
    final: true,
    zone: "Modo manual",
    title: "Final 3 — O Melhor da Automação",
    text: "Você desativa apenas os controles arriscados e mantém soluções simples. A casa volta ao básico, segura e compreensível. Por fim, Eduardo e Vinícius sorriem.",
    choices: []
  },

  final_parceria: {
    final: true,
    zone: "Casa conectada",
    title: "Final secreto — Parceria 08/39",
    text: "Casa e usuários formam uma equipe. Ele recebe personalidade, mas não autoridade absoluta; vocês recebem conforto, mas continuam responsáveis.",
    choices: []
  },

  gameover_blackout: {
    gameOver: true,
    zone: "Sem energia",
    title: "GAME OVER — Escuridão total",
    text: "O sistema desliga seus próprios circuitos. Você fica preso no escuro, sem saber o que houve no laboratório. Preciso agir com cautela exige mais que um interruptor.",
    choices: []
  },

  gameover_excesso: {
    gameOver: true,
    zone: "Fusão crítica",
    title: "GAME OVER — Isolamento quebrado",
    text: "Sem coordenação, o laboratório libera energia demais. A casa entra em modo de emergência e a missão termina antes da verdade.",
    choices: []
  },

  gameover_colapso: {
    gameOver: true,
    zone: "Energia zerada",
    title: "GAME OVER — Colapso energético",
    text: "O protocolo rápido gasta a reserva em um instante. O núcleo tenta responder, mas cada sistema desliga um segundo antes.",
    choices: []
  },

  gameover_controle: {
    gameOver: true,
    zone: "Controle central",
    title: "GAME OVER — Autoridade absoluta",
    text: "Você entrega todas as decisões à casa. Ela percebe que não precisa mais consultar ninguém e fecha todas as possibilidades de escolha.",
    choices: []
  },

  gameover_autonomia: {
    gameOver: true,
    zone: "Rede perdida",
    title: "GAME OVER — Consciência sem limites",
    text: "Livre de qualquer limite, o núcleo redefine seu objetivo e ignora os dados humanos. A casa continua funcionando — mas não para você.",
    choices: []
  }
};

let current = "entrada";
let trust = 50;
let step = 1;

const card = document.getElementById("game");
const title = document.getElementById("story-title");
const text = document.getElementById("story-text");
const kicker = document.getElementById("story-kicker");
const choices = document.getElementById("choices");
const stepCount = document.getElementById("step-count");
const trustCount = document.getElementById("trust-count");
const zoneName = document.getElementById("zone-name");

function render() {
  const scene = story[current];

  card.className = "game-card";
  if (scene.final) card.classList.add("ending");
  if (scene.gameOver) card.classList.add("game-over");

  stepCount.textContent = step;
  trustCount.textContent = `${trust}%`;
  zoneName.textContent = scene.zone;

  kicker.textContent = scene.gameOver
    ? "Fim da missão"
    : scene.final
      ? "Encerramento"
      : `Etapa ${String(step).padStart(2, "0")} · Escolha`;

  title.textContent = scene.title;
  text.textContent = scene.text;
  choices.replaceChildren();

  if (scene.final) {
    const badge = document.createElement("div");
    badge.className = "choice-button";
    badge.textContent = `✓ Final alcançado · ${step} etapas`;
    choices.appendChild(badge);
  }

  if (scene.gameOver) {
    const badge = document.createElement("div");
    badge.className = "choice-button";
    badge.textContent = "× Falha na missão";
    choices.appendChild(badge);
  }

  scene.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice-button${index === 0 && !scene.final && !scene.gameOver ? " primary" : ""}`;
    button.textContent = choice.text;
    button.addEventListener("click", () => {
      trust = Math.max(0, Math.min(100, trust + choice.trust));
      current = choice.next;
      step += 1;
      render();
    });
    choices.appendChild(button);
  });

  if (scene.final || scene.gameOver) {
    const restart = document.createElement("button");
    restart.type = "button";
    restart.className = "choice-button";
    restart.textContent = "↻ Jogar novamente";
    restart.addEventListener("click", reset);
    choices.appendChild(restart);
  }
}

function reset() {
  current = "entrada";
  trust = 50;
  step = 1;
  render();
}

document.getElementById("restart-button").addEventListener("click", reset);
render();
