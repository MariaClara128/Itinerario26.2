import { useEffect, useState } from "react";
import "./index.css";

const estados = [
  { nome: "Alagoas", sigla: "AL", capital: "Maceió", cultura: "Renda filé, coco de roda, maracatu e tradições ligadas às lagoas." },
  { nome: "Bahia", sigla: "BA", capital: "Salvador", cultura: "Samba de roda, capoeira, acarajé, festas populares e heranças afro-brasileiras." },
  { nome: "Ceará", sigla: "CE", capital: "Fortaleza", cultura: "Literatura de cordel, repente, reisado, humor e mestres da cultura." },
  { nome: "Maranhão", sigla: "MA", capital: "São Luís", cultura: "Bumba meu boi, tambor de crioula, reggae e azulejaria histórica." },
  { nome: "Paraíba", sigla: "PB", capital: "João Pessoa", cultura: "Xilogravura, repente, ciranda, artesanato e festas juninas." },
  { nome: "Pernambuco", sigla: "PE", capital: "Recife", cultura: "Frevo, maracatu, ciranda, carnaval e tradições populares." },
  { nome: "Piauí", sigla: "PI", capital: "Teresina", cultura: "Arte santeira, tradições orais, artesanato e patrimônio arqueológico." },
  { nome: "Rio Grande do Norte", sigla: "RN", capital: "Natal", cultura: "Forró, festas populares, renda de bilro e tradição artesanal." },
  { nome: "Sergipe", sigla: "SE", capital: "Aracaju", cultura: "São João, cacumbi, lambe-sujo, caboclinhos e artesanato." },
];

const imagens = {
  hero: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90",
  cultura: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
  sociedade: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
  aprender: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
  apoio: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=85",
};

const temas = [
  {
    id: "cultura",
    numero: "01",
    titulo: "Cultura viva",
    categoria: "MEMÓRIA · IDENTIDADE · ARTE",
    descricao: "Conheça as manifestações, os saberes e as histórias que tornam a cultura nordestina tão diversa.",
    imagem: imagens.cultura,
  },
  {
    id: "sociedade",
    numero: "02",
    titulo: "Sociedade em foco",
    categoria: "DIREITOS · EQUIDADE · CIDADANIA",
    descricao: "Reflita sobre desigualdade, preconceito, direitos humanos e participação social.",
    imagem: imagens.sociedade,
  },
  {
    id: "aprender",
    numero: "03",
    titulo: "Aprender para agir",
    categoria: "EDUCAÇÃO · PESQUISA · EXTENSÃO",
    descricao: "Aproxime conhecimento, experiências comunitárias e possibilidades de transformação.",
    imagem: imagens.aprender,
  },
  {
    id: "apoio",
    numero: "04",
    titulo: "Rede de apoio",
    categoria: "ACESSO · CUIDADO · ORIENTAÇÃO",
    descricao: "Encontre caminhos para serviços públicos e informações úteis para quem precisa de orientação.",
    imagem: imagens.apoio,
  },
];

const videos = [
  {
    titulo: "Cordel e xilogravura",
    categoria: "LITERATURA POPULAR",
    busca: "literatura de cordel xilogravura Nordeste documentário",
  },
  {
    titulo: "Bumba meu boi",
    categoria: "MARANHÃO",
    busca: "Bumba meu boi Maranhão documentário cultura popular",
  },
  {
    titulo: "Frevo e maracatu",
    categoria: "PERNAMBUCO",
    busca: "frevo maracatu Pernambuco documentário cultura",
  },
  {
    titulo: "Samba de roda",
    categoria: "BAHIA",
    busca: "samba de roda Recôncavo Baiano documentário",
  },
  {
    titulo: "Saberes da Caatinga",
    categoria: "TERRITÓRIO E NATUREZA",
    busca: "Caatinga saberes tradicionais comunidades documentário",
  },
  {
    titulo: "Mestres e mestras",
    categoria: "MEMÓRIA VIVA",
    busca: "mestres mestras cultura popular Nordeste Brasil",
  },
];

const servicos = [
  {
    titulo: "CRAS — Assistência Social",
    categoria: "PROTEÇÃO SOCIAL",
    descricao: "Procure o CRAS do seu município para orientação sobre serviços socioassistenciais, benefícios e Cadastro Único.",
    link: "https://www.gov.br/pt-br/servicos/acessar-o-cras-centro-de-referencia-da-assistencia-social",
    botao: "Consultar serviço oficial",
  },
  {
    titulo: "Disque 100",
    categoria: "DIREITOS HUMANOS",
    descricao: "Canal oficial para comunicar violações de direitos humanos e buscar orientações.",
    link: "https://www.gov.br/mdh/pt-br/assuntos/noticias/2024/abril/disque-100",
    botao: "Conhecer o serviço",
  },
  {
    titulo: "Ligue 180",
    categoria: "PROTEÇÃO À MULHER",
    descricao: "Central de atendimento à mulher para informações, orientações e denúncias de violência.",
    link: "https://www.gov.br/mulheres/pt-br/ligue180",
    botao: "Acessar o Ligue 180",
  },
  {
    titulo: "SAMU — 192",
    categoria: "URGÊNCIA MÉDICA",
    descricao: "Serviço gratuito de atendimento móvel para situações médicas de urgência e emergência.",
    link: "https://www.gov.br/saude/pt-br/composicao/saes/samu-192",
    botao: "Ver informações oficiais",
  },
];

function Icone({ tipo = "sol", tamanho = 20 }) {
  const desenhos = {
    sol: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m12.8-12.8 1.4-1.4" />
      </>
    ),
    seta: (
      <>
        <path d="M4 12h15" />
        <path d="m13 5 7 7-7 7" />
      </>
    ),
    play: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8 6 4-6 4z" fill="currentColor" stroke="none" />
      </>
    ),
    coracao: (
      <path d="M20.8 8.8c0 5.1-8.8 11-8.8 11s-8.8-5.9-8.8-11A4.8 4.8 0 0 1 12 6.3a4.8 4.8 0 0 1 8.8 2.5Z" />
    ),
  };

  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {desenhos[tipo] || desenhos.sol}
    </svg>
  );
}

function Etiqueta({ children }) {
  return (
    <div className="etiqueta">
      <span />
      {children}
    </div>
  );
}

function Cabecalho({ pagina, navegar }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    ["Início", "inicio"],
    ["Cultura", "cultura"],
    ["Sociedade", "sociedade"],
    ["Aprender", "aprender"],
    ["Apoio", "apoio"],
    ["Territórios", "territorios"],
  ];

  return (
    <header className="cabecalho">
      <button className="marca" onClick={() => navegar("inicio")}>
        <span className="marca-simbolo">
          <Icone tamanho={27} />
        </span>

        <span className="marca-texto">
          <strong>ENTRELAÇOS</strong>
          <small>CULTURA QUE TRANSFORMA</small>
        </span>
      </button>

      <button
        className="menu-mobile"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      <nav className={menuAberto ? "navegacao aberta" : "navegacao"}>
        {links.map(([nome, destino]) => (
          <button
            key={destino}
            className={pagina === destino ? "link-nav ativo" : "link-nav"}
            onClick={() => {
              navegar(destino);
              setMenuAberto(false);
            }}
          >
            {nome}
          </button>
        ))}

        <button
          className="botao-nav"
          onClick={() => {
            navegar("participar");
            setMenuAberto(false);
          }}
        >
          FAÇA PARTE <Icone tipo="seta" tamanho={15} />
        </button>
      </nav>
    </header>
  );
}

function HeroInterno({ etiqueta, titulo, texto }) {
  return (
    <section className="hero-interno">
      <div className="paisagem">
        <div className="sol-paisagem" />
        <div className="montanha montanha-um" />
        <div className="montanha montanha-dois" />
        <div className="cacto-paisagem"><i /><b /></div>
      </div>

      <div className="hero-interno-conteudo">
        <Etiqueta>{etiqueta}</Etiqueta>
        <h1>{titulo}</h1>
        <p>{texto}</p>
      </div>
    </section>
  );
}

function Inicio({ navegar }) {
  const [slide, setSlide] = useState(0);

  const destaques = [
    {
      etiqueta: "NORDESTE VIVO · GENTE QUE TRANSFORMA",
      titulo: <>CULTURA, SOCIEDADE<br />E <em>FUTUROS POSSÍVEIS.</em></>,
      texto: "Uma jornada pela riqueza cultural nordestina, pelas histórias de seu povo e pelas possibilidades de construir uma sociedade mais justa.",
      imagem: imagens.hero,
    },
    {
      etiqueta: "TERRITÓRIO DE SABERES E RESISTÊNCIA",
      titulo: <>UMA REGIÃO.<br />MILHARES DE <em>HISTÓRIAS.</em></>,
      texto: "Do litoral ao sertão, das tradições ancestrais às novas ideias: conheça a diversidade de uma região que nunca deixa de criar.",
      imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=90",
    },
    {
      etiqueta: "CONHECIMENTO QUE VIRA AÇÃO",
      titulo: <>PERTENCER É O COMEÇO.<br /><em>TRANSFORMAR É O CAMINHO.</em></>,
      texto: "Conectamos cultura, educação e participação social para ampliar horizontes e fortalecer comunidades.",
      imagem: imagens.sociedade,
    },
  ];

  const atual = destaques[slide];

  return (
    <>
      <section
        className="hero-principal"
        style={{ "--imagem-hero": `url("${atual.imagem}")` }}
      >
        <div className="hero-lateral">
          <span>✳</span>
          <i />
          <small>0{slide + 1} / 03</small>
        </div>

        <div className="hero-principal-conteudo" key={slide}>
          <Etiqueta>{atual.etiqueta}</Etiqueta>
          <h1>{atual.titulo}</h1>
          <p>{atual.texto}</p>

          <div className="acoes-hero">
            <button className="botao botao-cobre" onClick={() => navegar("cultura")}>
              EXPLORAR O NORDESTE <Icone tipo="seta" tamanho={17} />
            </button>

            <button className="botao botao-transparente" onClick={() => navegar("aprender")}>
              <Icone tipo="play" tamanho={17} /> ASSISTIR AOS VÍDEOS
            </button>
          </div>

          <div className="controles-slide">
            {destaques.map((item, i) => (
              <button
                key={item.etiqueta}
                className={slide === i ? "controle-slide selecionado" : "controle-slide"}
                onClick={() => setSlide(i)}
              >
                <span>0{i + 1}</span><i />
              </button>
            ))}
          </div>
        </div>

        <div className="assinatura-hero">
          NOSSO POVO<br />NOSSA TERRA<br />NOSSA FORÇA
        </div>

        <div className="legenda-hero">
          <span /> MAIS QUE UM TERRITÓRIO.<br /> UMA HISTÓRIA QUE INSPIRA.
        </div>

        <button className="botao-play-flutuante" onClick={() => navegar("aprender")}>
          <span>OUÇA O NORDESTE</span>
          <b><Icone tipo="play" tamanho={21} /></b>
          <span>SINTA ESSA CULTURA</span>
        </button>
      </section>

      <section className="introducao container">
        <div className="titulo-secao">
          <Etiqueta>UM UNIVERSO DE POSSIBILIDADES</Etiqueta>
          <h2>Conheça. Compreenda.<br /><em>Faça parte.</em></h2>
          <p>
            Uma plataforma para descobrir a riqueza cultural nordestina e
            transformar conhecimento em participação social.
          </p>
        </div>

        <div className="grade-destaques">
          {temas.map((tema) => (
            <button
              key={tema.id}
              className="cartao-destaque"
              style={{ "--imagem-cartao": `url("${tema.imagem}")` }}
              onClick={() => navegar(tema.id)}
            >
              <span className="numero-cartao">{tema.numero}</span>
              <div className="conteudo-cartao">
                <small>{tema.categoria}</small>
                <h3>{tema.titulo}</h3>
                <p>{tema.descricao}</p>
                <span className="link-cartao">
                  EXPLORAR <Icone tipo="seta" tamanho={16} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="faixa-territorio">
        <div className="arte-territorio">
          <div className="sol-paisagem" />
          <div className="serra serra-um" />
          <div className="serra serra-dois" />
          <div className="cacto-grande"><i /><b /></div>
          <div className="selo-territorio">
            NORDESTE
            <strong>BRASIL</strong>
            <small>09 ESTADOS · MUITAS VOZES</small>
          </div>
        </div>

        <div className="texto-territorio">
          <Etiqueta>UM NORDESTE, MUITOS NORDESTES</Etiqueta>
          <h2>Uma região impossível de resumir. <em>Uma cultura para descobrir.</em></h2>
          <p>
            Nove estados, múltiplas identidades, conhecimentos tradicionais,
            movimentos artísticos e comunidades que reinventam o presente.
          </p>
          <button className="link-elegante" onClick={() => navegar("territorios")}>
            EXPLORE OS NOVE ESTADOS <Icone tipo="seta" tamanho={16} />
          </button>
        </div>
      </section>

      <section className="faixa-reflexao">
        <div className="reflexao-lateral">
          <Icone tamanho={39} />
          <span>VOZES DO<br />TERRITÓRIO</span>
        </div>

        <div className="citacao">
          <span>“</span>
          <blockquote>
            A cultura não é apenas aquilo que herdamos. É também aquilo que
            escolhemos preservar, compartilhar e transformar juntos.
          </blockquote>
          <small>ENTRELAÇOS <i>— cultura, sociedade e futuro</i></small>
        </div>

        <div className="numeros-projeto">
          <Etiqueta>O QUE NOS MOVE</Etiqueta>
          <div><strong>09</strong><span>estados para explorar</span></div>
          <div><strong>∞</strong><span>histórias para conhecer</span></div>
          <p>Um convite à descoberta, ao diálogo e à participação.</p>
        </div>
      </section>

      <section className="chamada-final container">
        <div>
          <Etiqueta>O PRÓXIMO CAPÍTULO É COLETIVO</Etiqueta>
          <h2>Conhecimento que encontra pessoas.<br /><em>Ideias que viram ação.</em></h2>
        </div>

        <button className="botao botao-cobre" onClick={() => navegar("participar")}>
          PARTICIPE DO ENTRELAÇOS <Icone tipo="seta" tamanho={16} />
        </button>
      </section>
    </>
  );
}

function Cultura() {
  const [filtro, setFiltro] = useState("Todas");
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState([]);
  const [detalhe, setDetalhe] = useState(null);

  const culturas = [
    {
      titulo: "Música e dança", tipo: "Música", numero: "01",
      texto: "Forró, frevo, maracatu, coco, ciranda e outras expressões que ocupam ruas, terreiros, palcos e festas.",
      curiosidade: "A música e a dança carregam histórias de encontro, resistência e celebração. Cada ritmo tem seus instrumentos, passos e comunidades que mantêm essa tradição viva.",
      exemplos: "Forró pé de serra · Frevo · Maracatu · Coco · Ciranda"
    },
    {
      titulo: "Festas e celebrações", tipo: "Festas", numero: "02",
      texto: "São João, Bumba meu boi e celebrações que conectam gerações e fortalecem identidades.",
      curiosidade: "As festas populares misturam música, dança, comidas, artesanato e memórias familiares. Elas também movimentam a economia e o trabalho de artistas e produtores locais.",
      exemplos: "Festas juninas · Bumba meu boi · Lavagem do Bonfim · Reisado"
    },
    {
      titulo: "Literatura e imagem", tipo: "Artes", numero: "03",
      texto: "Cordel, repente, xilogravura e narrativas que registram a memória coletiva.",
      curiosidade: "A literatura de cordel combina poesia, oralidade e impressão. A xilogravura, frequentemente usada nas capas, transforma madeira entalhada em imagens cheias de personalidade.",
      exemplos: "Literatura de cordel · Repente · Xilogravura · Contação de histórias"
    },
    {
      titulo: "Saberes e ofícios", tipo: "Saberes", numero: "04",
      texto: "Rendas, cerâmica, trançados, culinária e conhecimentos transmitidos entre gerações.",
      curiosidade: "Muitos saberes são aprendidos na prática, dentro das famílias e comunidades. Reconhecer esses ofícios significa valorizar quem cria, ensina e preserva técnicas tradicionais.",
      exemplos: "Renda de bilro · Cerâmica · Trançados · Culinária regional"
    },
    {
      titulo: "Patrimônio e memória", tipo: "Memória", numero: "05",
      texto: "Centros históricos, comunidades tradicionais, mestres e mestras da cultura.",
      curiosidade: "O patrimônio não é apenas formado por prédios e monumentos: inclui celebrações, conhecimentos, modos de fazer e lembranças que uma comunidade considera importantes.",
      exemplos: "Centros históricos · Patrimônio imaterial · Mestres da cultura · Memória oral"
    },
    {
      titulo: "Território e natureza", tipo: "Território", numero: "06",
      texto: "Caatinga, litoral, rios e modos de vida ligados a paisagens diversas.",
      curiosidade: "As culturas se relacionam com os lugares onde florescem. Paisagens, clima, rios e mar influenciam alimentação, trabalho, arquitetura e formas de celebrar.",
      exemplos: "Caatinga · Litoral · Comunidades ribeirinhas · Saberes ambientais"
    },
  ];
  const filtros = ["Todas", "Música", "Festas", "Artes", "Saberes", "Memória", "Território"];
  const resultados = culturas.filter((c) =>
    (filtro === "Todas" || c.tipo === filtro) &&
    `${c.titulo} ${c.tipo} ${c.texto} ${c.exemplos}`.toLowerCase().includes(busca.toLowerCase().trim())
  );
  const alternarFavorito = (titulo) => setFavoritos((atuais) =>
    atuais.includes(titulo) ? atuais.filter((item) => item !== titulo) : [...atuais, titulo]
  );

  return (
    <>
      <HeroInterno
        etiqueta="CULTURA VIVA · IDENTIDADE EM MOVIMENTO"
        titulo={<>O Nordeste não cabe em um clichê. <em>E ainda bem.</em></>}
        texto="Uma região de muitas vozes, linguagens e experiências. Explore expressões culturais sem reduzir a diversidade nordestina a uma única paisagem ou história."
      />

      <section className="secao-conteudo container">
        <div className="titulo-secao">
          <Etiqueta>EXPLORE POR EXPRESSÃO</Etiqueta>
          <h2>Tradições que continuam <em>criando o futuro.</em></h2>
          <p>Filtre os temas, pesquise o que desperta sua curiosidade e guarde seus favoritos.</p>
        </div>

        <label style={{ display: "block", maxWidth: 520, margin: "24px 0 8px", color: "var(--texto-secundario)", fontSize: 12 }} htmlFor="busca-cultura">
          BUSCAR UMA EXPRESSÃO CULTURAL
        </label>
        <input
          id="busca-cultura"
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Ex.: cordel, música, festas..."
          style={{ width: "100%", maxWidth: 520, padding: "13px 15px", background: "var(--painel)", color: "var(--creme)", border: "1px solid var(--linha)", outlineColor: "var(--dourado)" }}
        />

        <div className="filtros" aria-label="Filtrar expressões culturais">
          {filtros.map((f) => (
            <button key={f} type="button" className={filtro === f ? "filtro ativo" : "filtro"} onClick={() => setFiltro(f)} aria-pressed={filtro === f}>
              {f}
            </button>
          ))}
          <button type="button" className={filtro === "Favoritos" ? "filtro ativo" : "filtro"} onClick={() => setFiltro("Favoritos")} aria-pressed={filtro === "Favoritos"}>
            ♥ Favoritos ({favoritos.length})
          </button>
        </div>

        {filtro === "Favoritos" && (
          <p style={{ color: "var(--texto-secundario)", fontSize: 13, marginBottom: 20 }}>Você pode guardar ou retirar itens tocando no coração de cada cartão.</p>
        )}

        <div className="grade-cultura">
          {(filtro === "Favoritos" ? culturas.filter((c) => favoritos.includes(c.titulo) && `${c.titulo} ${c.tipo} ${c.texto}`.toLowerCase().includes(busca.toLowerCase().trim())) : resultados).map((c) => (
            <article className="cartao-cultura" key={c.titulo}>
              <span className="indice-cultura">{c.numero}</span>
              <small>{c.tipo}</small>
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", marginTop: 20 }}>
                <button type="button" className="botao botao-transparente" onClick={() => setDetalhe(detalhe === c.titulo ? null : c.titulo)} aria-expanded={detalhe === c.titulo}>
                  {detalhe === c.titulo ? "Fechar detalhes" : "Descobrir mais"} <Icone tipo="seta" tamanho={14} />
                </button>
                <button type="button" className="botao botao-transparente" onClick={() => alternarFavorito(c.titulo)} aria-pressed={favoritos.includes(c.titulo)} aria-label={favoritos.includes(c.titulo) ? `Remover ${c.titulo} dos favoritos` : `Adicionar ${c.titulo} aos favoritos`}>
                  {favoritos.includes(c.titulo) ? "♥ Salvo" : "♡ Favoritar"}
                </button>
              </div>
              {detalhe === c.titulo && (
                <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--linha)" }}>
                  <p>{c.curiosidade}</p>
                  <small style={{ display: "block", marginTop: 12, color: "var(--dourado)" }}>PARA EXPLORAR</small>
                  <p style={{ fontSize: 12 }}>{c.exemplos}</p>
                  <a className="link-cartao" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(c.titulo + " cultura nordestina documentário")}`} target="_blank" rel="noreferrer">
                    Ver vídeos e documentários ↗
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {((filtro === "Favoritos" && culturas.filter((c) => favoritos.includes(c.titulo)).length === 0) || (filtro !== "Favoritos" && resultados.length === 0)) && (
          <div style={{ marginTop: 25, padding: 24, border: "1px solid var(--linha)", color: "var(--texto-secundario)" }}>
            <p>Nenhuma expressão encontrada. Tente outra palavra ou escolha outra categoria.</p>
            <button type="button" className="botao botao-cobre" onClick={() => { setBusca(""); setFiltro("Todas"); }}>Limpar busca</button>
          </div>
        )}
      </section>

      <section className="faixa-chamada">
        <div>
          <Etiqueta>RESPEITO À DIVERSIDADE</Etiqueta>
          <h2>Cultura viva não é peça de museu.</h2>
          <p>É criação, trabalho, identidade, afeto e transformação. Conhecer uma tradição também significa reconhecer as pessoas que a mantêm viva.</p>
        </div>
        <div className="selo-redondo"><Icone tamanho={39} /><span>MEMÓRIA<br />E FUTURO</span></div>
      </section>
    </>
  );
}


function Sociedade() {
  const [filtro, setFiltro] = useState("Todos");
  const [aberto, setAberto] = useState(null);

  const temasSociais = [
    {
      categoria: "Desigualdade",
      titulo: "Desigualdade social",
      resumo: "Por que as oportunidades não são iguais para todos?",
      causas: "A concentração de renda, as diferenças no acesso à educação, a discriminação e a distribuição desigual de serviços públicos contribuem para a desigualdade.",
      efeitos: "Pode dificultar o acesso à moradia, alimentação, saúde, educação e trabalho digno.",
      solucoes: [
        "Fortalecer políticas públicas de combate à pobreza.",
        "Ampliar o acesso à educação de qualidade.",
        "Defender oportunidades justas de emprego e renda.",
        "Participar de iniciativas comunitárias."
      ]
    },
    {
      categoria: "Direitos",
      titulo: "Racismo e discriminação",
      resumo: "Respeito e igualdade são direitos de todos.",
      causas: "O racismo tem raízes históricas e estruturais. Preconceitos também podem estar relacionados à origem, ao gênero, à deficiência e à condição social.",
      efeitos: "A discriminação pode limitar oportunidades, prejudicar a convivência e dificultar o acesso a direitos.",
      solucoes: [
        "Denunciar violações de direitos humanos.",
        "Valorizar a história e a cultura afro-brasileira e indígena.",
        "Combater estereótipos e atitudes discriminatórias.",
        "Promover ambientes inclusivos nas escolas e no trabalho."
      ]
    },
    {
      categoria: "Educação",
      titulo: "Acesso à educação",
      resumo: "Aprender é um direito e uma oportunidade de transformação.",
      causas: "A falta de recursos, as dificuldades de transporte, a necessidade de trabalhar e a desigualdade de acesso à tecnologia podem prejudicar a trajetória escolar.",
      efeitos: "A interrupção dos estudos pode reduzir oportunidades profissionais e dificultar o acesso à informação.",
      solucoes: [
        "Procurar escolas e programas públicos de educação.",
        "Incentivar a permanência dos estudantes na escola.",
        "Divulgar cursos gratuitos e oportunidades de formação.",
        "Criar grupos de estudo e apoio à aprendizagem."
      ]
    },
    {
      categoria: "Trabalho",
      titulo: "Desemprego e trabalho informal",
      resumo: "Trabalho digno significa renda, segurança e direitos.",
      causas: "A falta de oportunidades, as diferenças na formação profissional e as desigualdades regionais podem dificultar o acesso ao emprego.",
      efeitos: "A instabilidade financeira pode comprometer a alimentação, a moradia e o bem-estar das famílias.",
      solucoes: [
        "Buscar cursos de qualificação profissional gratuitos.",
        "Consultar os serviços públicos de emprego.",
        "Conhecer os direitos trabalhistas.",
        "Valorizar iniciativas de economia solidária e empreendedorismo responsável."
      ]
    },
    {
      categoria: "Qualidade de vida",
      titulo: "Fome e insegurança alimentar",
      resumo: "Todas as pessoas devem ter acesso regular a alimentos adequados.",
      causas: "A pobreza, a falta de renda, o desemprego e as dificuldades de acesso a alimentos contribuem para a insegurança alimentar.",
      efeitos: "A alimentação insuficiente pode prejudicar a saúde, o desenvolvimento e a aprendizagem.",
      solucoes: [
        "Procurar o CRAS para orientação sobre assistência social.",
        "Consultar a prefeitura sobre restaurantes populares e cozinhas solidárias.",
        "Apoiar bancos de alimentos e iniciativas comunitárias confiáveis.",
        "Defender políticas públicas de segurança alimentar."
      ]
    },
    {
      categoria: "Qualidade de vida",
      titulo: "Saneamento básico",
      resumo: "Água tratada, coleta de esgoto e limpeza urbana são essenciais.",
      causas: "A ausência de infraestrutura e as desigualdades no investimento público podem deixar comunidades sem serviços adequados.",
      efeitos: "A falta de saneamento aumenta os riscos à saúde e prejudica as condições de vida e o meio ambiente.",
      solucoes: [
        "Registrar problemas nos canais oficiais do município.",
        "Participar de reuniões e conselhos comunitários.",
        "Evitar o descarte inadequado de resíduos.",
        "Cobrar investimentos e melhorias nos serviços públicos."
      ]
    },
    {
      categoria: "Direitos",
      titulo: "Acesso à saúde",
      resumo: "O atendimento à saúde é um direito de toda a população.",
      causas: "Distâncias, falta de informação, dificuldades de transporte e limitações na oferta de serviços podem dificultar o atendimento.",
      efeitos: "A demora na assistência pode agravar problemas de saúde e aumentar as desigualdades.",
      solucoes: [
        "Procurar uma Unidade Básica de Saúde (UBS).",
        "Consultar a Secretaria de Saúde do município.",
        "Buscar informações pelos canais oficiais do SUS.",
        "Em uma emergência médica, ligar para o SAMU (192)."
      ]
    },
    {
      categoria: "Comunidade",
      titulo: "Participação cidadã",
      resumo: "A comunidade também pode participar das decisões públicas.",
      causas: "A falta de informação, o pouco acesso aos espaços de decisão e a descrença nas instituições podem dificultar a participação.",
      efeitos: "As necessidades de determinados grupos podem deixar de ser consideradas nas políticas públicas.",
      solucoes: [
        "Participar de associações e reuniões comunitárias.",
        "Conhecer os conselhos municipais de políticas públicas.",
        "Acompanhar consultas públicas e audiências.",
        "Compartilhar informações verificadas sobre direitos e serviços."
      ]
    }
  ];

  const categorias = [
    "Todos",
    "Desigualdade",
    "Direitos",
    "Educação",
    "Trabalho",
    "Qualidade de vida",
    "Comunidade"
  ];

  const temasFiltrados = temasSociais.filter(
    (tema) => filtro === "Todos" || tema.categoria === filtro
  );

  return (
    <>
      <HeroInterno
        etiqueta="SOCIEDADE · DIREITOS · EQUIDADE"
        titulo={
          <>
            Compreender as estruturas.{" "}
            <em>Transformar realidades.</em>
          </>
        }
        texto="Conheça desafios sociais, entenda suas causas e descubra caminhos para construir uma sociedade mais justa, solidária e participativa."
      />

      <section className="secao-conteudo container">
        <div className="titulo-secao">
          <Etiqueta>CONHECER PARA TRANSFORMAR</Etiqueta>
          <h2>
            Problemas reais. <em>Possibilidades de mudança.</em>
          </h2>
          <p>
            Escolha um tema para conhecer suas causas, seus impactos e
            algumas formas de agir.
          </p>
        </div>

        <div className="filtros">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={filtro === categoria ? "filtro ativo" : "filtro"}
              onClick={() => {
                setFiltro(categoria);
                setAberto(null);
              }}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className="grade-sociedade">
          {temasFiltrados.map((tema, i) => {
            const expandido = aberto === tema.titulo;

            return (
              <article className="cartao-sociedade" key={tema.titulo}>
                <span>
                  {String(i + 1).padStart(2, "0")} / {tema.categoria.toUpperCase()}
                </span>

                <h3>{tema.titulo}</h3>
                <p>{tema.resumo}</p>

                <button
                  className="link-elegante"
                  onClick={() =>
                    setAberto(expandido ? null : tema.titulo)
                  }
                  aria-expanded={expandido}
                >
                  {expandido ? "FECHAR EXPLICAÇÃO" : "ENTENDER E AGIR"}
                  <Icone tipo="seta" tamanho={15} />
                </button>

                {expandido && (
                  <div className="detalhe-social">
                    <h4>Principais causas</h4>
                    <p>{tema.causas}</p>

                    <h4>Consequências</h4>
                    <p>{tema.efeitos}</p>

                    <h4>O que podemos fazer?</h4>
                    <ul>
                      {tema.solucoes.map((solucao) => (
                        <li key={solucao}>{solucao}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="painel-nota">
          <strong>Uma pergunta para refletir</strong>
          <p>
            Quais problemas sociais afetam mais a sua comunidade? Quem
            pode ajudar a enfrentá-los?
          </p>
          <small>
            Converse com outras pessoas, pesquise fontes confiáveis e
            transforme suas observações em propostas de ação.
          </small>
        </div>
      </section>
    </>
  );
}

function Aprender() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [aberto, setAberto] = useState(null);
  const [respostas, setRespostas] = useState({});
  const [buscaAprender, setBuscaAprender] = useState("");

  const trilhas = [
    { id: "cultura", categoria: "Cultura", nivel: "Iniciante", tempo: "20 min", titulo: "Cultura e identidade nordestina", resumo: "Entenda como festas, músicas, artes, culinária e memória formam identidades diversas.", passos: ["Escolha uma manifestação cultural da sua cidade.", "Pesquise sua origem e quem mantém essa tradição viva.", "Registre o que aprendeu em um pequeno texto, áudio ou desenho."], atividade: "Entreviste alguém da família ou da comunidade sobre uma tradição que considera importante." },
    { id: "sociedade", categoria: "Sociedade", nivel: "Iniciante", tempo: "25 min", titulo: "Direitos humanos no cotidiano", resumo: "Conheça direitos, respeito às diferenças, dignidade e formas de participação cidadã.", passos: ["Escolha um direito: educação, saúde, moradia, cultura ou segurança.", "Descubra qual serviço público se relaciona a esse direito.", "Pense em uma forma respeitosa de divulgar essa informação."], atividade: "Crie um cartaz com um direito e uma informação confiável sobre como acessá-lo." },
    { id: "territorio", categoria: "Território", nivel: "Intermediário", tempo: "30 min", titulo: "Meu território, muitas histórias", resumo: "Observe o bairro, os espaços de convivência, as necessidades e as potencialidades locais.", passos: ["Faça uma lista de lugares importantes do bairro.", "Identifique um ponto forte e um desafio da comunidade.", "Converse com alguém sobre uma possível melhoria."], atividade: "Desenhe um mapa afetivo do bairro com lugares, memórias e espaços de encontro." },
    { id: "ambiente", categoria: "Meio ambiente", nivel: "Intermediário", tempo: "25 min", titulo: "Caatinga, água e sustentabilidade", resumo: "Aprenda sobre biodiversidade, convivência com o semiárido e cuidado com os recursos naturais.", passos: ["Pesquise uma espécie nativa da Caatinga.", "Descubra uma adaptação dela ao clima semiárido.", "Relacione preservação ambiental e qualidade de vida."], atividade: "Monte uma lista de cinco atitudes possíveis para economizar água na sua rotina." },
    { id: "pesquisa", categoria: "Pesquisa", nivel: "Iniciante", tempo: "15 min", titulo: "Como pesquisar sem cair em desinformação", resumo: "Aprenda a conferir autoria, data, evidências e confiabilidade de uma informação.", passos: ["Veja quem publicou o conteúdo e quando.", "Procure a mesma informação em outras fontes confiáveis.", "Separe fatos, opiniões e publicidade."], atividade: "Escolha uma notícia e confira se duas fontes independentes confirmam a informação." },
    { id: "comunidade", categoria: "Participação", nivel: "Avançado", tempo: "35 min", titulo: "Da ideia à ação comunitária", resumo: "Transforme uma questão observada em uma proposta coletiva, viável e respeitosa.", passos: ["Descreva o problema sem culpar pessoas.", "Ouça quem é afetado e identifique possíveis parceiros.", "Defina uma ação pequena, um prazo e como avaliar o resultado."], atividade: "Escreva uma proposta de ação em quatro partes: problema, objetivo, parceiros e primeiro passo." },
  ];

  const materiais = [
    { tipo: "Leitura", titulo: "Literatura de cordel", descricao: "Conheça a poesia popular, a oralidade, a rima e a xilogravura.", busca: "literatura de cordel Nordeste educação acervo" },
    { tipo: "Cultura", titulo: "Patrimônio cultural imaterial", descricao: "Entenda por que práticas, celebrações e saberes são importantes para a memória coletiva.", busca: "IPHAN patrimônio cultural imaterial Brasil" },
    { tipo: "Natureza", titulo: "Biodiversidade da Caatinga", descricao: "Explore espécies, ecossistemas e conhecimentos sobre a convivência com o semiárido.", busca: "Caatinga biodiversidade site:gov.br OR site:edu.br" },
    { tipo: "Cidadania", titulo: "Participação social", descricao: "Descubra maneiras de acompanhar políticas públicas e participar das decisões locais.", busca: "participação social conselhos conferências Brasil gov.br" },
    { tipo: "Pesquisa", titulo: "Checagem de informações", descricao: "Aprenda a verificar imagens, fontes, datas e afirmações antes de compartilhar.", busca: "guia educação midiática checagem de fatos Brasil" },
    { tipo: "Comunidade", titulo: "Educação e transformação social", descricao: "Reflita sobre projetos comunitários, colaboração e aprendizagem ao longo da vida.", busca: "educação popular projetos comunitários Brasil universidade" },
  ];

  const perguntas = [
    { pergunta: "Qual é uma boa prática ao pesquisar uma informação na internet?", opcoes: ["Compartilhar assim que receber", "Conferir autoria, data e outras fontes", "Confiar apenas no título"], correta: 1, explicacao: "Verificar autoria, data e outras fontes ajuda a avaliar a confiabilidade da informação." },
    { pergunta: "O patrimônio cultural de uma comunidade inclui...", opcoes: ["Somente prédios antigos", "Apenas festas famosas", "Saberes, celebrações, expressões e lugares de memória"], correta: 2, explicacao: "O patrimônio cultural pode incluir bens materiais e imateriais, como saberes, celebrações e expressões." },
    { pergunta: "Uma ação comunitária começa melhor quando...", opcoes: ["As pessoas afetadas são ouvidas", "Uma pessoa decide tudo sozinha", "O problema é ignorado"], correta: 0, explicacao: "Ouvir a comunidade ajuda a compreender necessidades e criar soluções mais adequadas." },
  ];

  const categorias = ["Todos", "Cultura", "Sociedade", "Território", "Meio ambiente", "Pesquisa", "Participação"];
  const trilhasVisiveis = trilhas.filter((trilha) =>
    (categoriaAtiva === "Todos" || trilha.categoria === categoriaAtiva) &&
    `${trilha.titulo} ${trilha.resumo} ${trilha.categoria}`.toLowerCase().includes(buscaAprender.toLowerCase())
  );
  const totalAcertos = perguntas.reduce((total, pergunta, i) => total + (respostas[i] === pergunta.correta ? 1 : 0), 0);

  return (
    <>
      <HeroInterno
        etiqueta="APRENDER · PESQUISAR · COMPARTILHAR"
        titulo={<>Conhecimento com raízes. <em>Aprendizagem com propósito.</em></>}
        texto="Um espaço para descobrir a cultura nordestina, compreender a sociedade, pesquisar com responsabilidade e transformar conhecimento em pequenas ações no território."
      />

      <section className="secao-conteudo container aprender-boas-vindas">
        <div className="aprender-intro-texto">
          <Etiqueta>UM ESPAÇO PARA DESCOBRIR</Etiqueta>
          <h2>Aprender começa com <em>uma pergunta.</em></h2>
          <p>Explore conteúdos no seu ritmo. Você pode estudar um tema, realizar uma atividade prática, consultar materiais de referência e compartilhar o que descobriu com outras pessoas.</p>
        </div>
        <div className="aprender-numeros">
          <article><strong>06</strong><span>trilhas de aprendizagem</span></article>
          <article><strong>06</strong><span>temas para explorar</span></article>
          <article><strong>03</strong><span>perguntas para testar seus conhecimentos</span></article>
        </div>
      </section>

      <section className="secao-conteudo container aprender-trilhas">
        <div className="titulo-secao">
          <Etiqueta>APRENDIZAGEM POR TEMAS</Etiqueta>
          <h2>Escolha sua próxima <em>trilha.</em></h2>
          <p>Cada trilha tem uma explicação, passos simples e uma atividade para conectar o conteúdo à vida real.</p>
        </div>
        <div className="aprender-filtros">
          <label className="aprender-busca"><span>⌕</span><input value={buscaAprender} onChange={(e) => setBuscaAprender(e.target.value)} placeholder="Buscar tema ou palavra..." aria-label="Buscar trilhas de aprendizagem" /></label>
          <div className="aprender-categorias" aria-label="Filtrar trilhas por categoria">
            {categorias.map((categoria) => <button key={categoria} className={categoriaAtiva === categoria ? "ativo" : ""} onClick={() => setCategoriaAtiva(categoria)}>{categoria}</button>)}
          </div>
        </div>
        <div className="aprender-grade-trilhas">
          {trilhasVisiveis.map((trilha) => (
            <article className={`aprender-trilha-card ${aberto === trilha.id ? "expandido" : ""}`} key={trilha.id}>
              <div className="aprender-trilha-topo"><span>{trilha.categoria}</span><span>{trilha.tempo}</span></div>
              <h3>{trilha.titulo}</h3><p>{trilha.resumo}</p>
              <div className="aprender-tags"><span>{trilha.nivel}</span><span>Atividade prática</span></div>
              <button className="aprender-abrir" onClick={() => setAberto(aberto === trilha.id ? null : trilha.id)} aria-expanded={aberto === trilha.id}>{aberto === trilha.id ? "Fechar trilha −" : "Explorar trilha +"}</button>
              {aberto === trilha.id && <div className="aprender-detalhes"><h4>Seu caminho de aprendizagem</h4><ol>{trilha.passos.map((passo) => <li key={passo}>{passo}</li>)}</ol><div className="aprender-atividade"><strong>DESAFIO PRÁTICO</strong><p>{trilha.atividade}</p></div></div>}
            </article>
          ))}
          {trilhasVisiveis.length === 0 && <p className="aprender-sem-resultados">Nenhuma trilha encontrada. Tente outra palavra ou categoria.</p>}
        </div>
      </section>

      <section className="faixa-aprendizado aprender-faixa-metodos">
        <div><Etiqueta>ENSINO · PESQUISA · EXTENSÃO</Etiqueta><h2>Aprender é também <em>construir junto.</em></h2><p>O conhecimento cresce quando encontra a experiência das pessoas e as perguntas do território.</p></div>
        <div className="lista-metodos">
          {[["01", "Ensino", "Compartilhar conhecimentos, desenvolver pensamento crítico e criar oportunidades de aprendizagem."], ["02", "Pesquisa", "Investigar questões reais, comparar fontes e produzir conhecimento com responsabilidade."], ["03", "Extensão", "Construir diálogo entre instituições de ensino e sociedade, respeitando os saberes comunitários."]].map(([numero, titulo, texto]) => <article key={titulo}><span>{numero}</span><div><h3>{titulo}</h3><p>{texto}</p></div></article>)}
        </div>
      </section>

      <section className="secao-conteudo container aprender-materiais">
        <div className="titulo-secao"><Etiqueta>BIBLIOTECA DE DESCOBERTAS</Etiqueta><h2>Materiais para <em>ir mais longe.</em></h2><p>Use estes temas como ponto de partida para encontrar vídeos, artigos, acervos e materiais educativos. Os links abrem buscas temáticas; confira sempre a instituição responsável pelo conteúdo.</p></div>
        <div className="aprender-grade-materiais">
          {materiais.map((material) => <article className="aprender-material-card" key={material.titulo}><span className="aprender-material-icone">{material.icone}</span><small>{material.tipo}</small><h3>{material.titulo}</h3><p>{material.descricao}</p><a href={`https://www.google.com/search?q=${encodeURIComponent(material.busca)}`} target="_blank" rel="noreferrer">Pesquisar materiais ↗</a></article>)}
        </div>
      </section>

      <section className="secao-conteudo container aprender-videoteca">
        <div className="titulo-secao"><Etiqueta>VIDEOTECA CULTURAL</Etiqueta><h2>Assista. Descubra. <em>Continue explorando.</em></h2><p>Buscas temáticas para encontrar documentários e materiais educativos sobre manifestações e saberes do Nordeste.</p></div>
        <div className="grade-videos">
          {videos.map((video, i) => <a className="cartao-video" key={video.titulo} href={`https://www.youtube.com/results?search_query=${encodeURIComponent(video.busca)}`} target="_blank" rel="noreferrer"><div className={`arte-video video-${i + 1}`}><span className="botao-play">▶</span><small>FILME / {String(i + 1).padStart(2, "0")}</small></div><div className="texto-video"><small>{video.categoria}</small><h3>{video.titulo}</h3><span>ENCONTRAR VÍDEOS ↗</span></div></a>)}
        </div>
      </section>

      <section className="secao-conteudo container aprender-pesquisa">
        <div className="titulo-secao"><Etiqueta>FERRAMENTAS DE ESTUDO</Etiqueta><h2>Pesquise com curiosidade <em>e cuidado.</em></h2><p>Um roteiro rápido para estudar um assunto sem perder de vista a qualidade das informações.</p></div>
        <div className="aprender-passos-pesquisa">
          {[["01", "Faça uma boa pergunta", "Delimite o assunto. Em vez de pesquisar apenas “cultura”, tente “como o cordel preserva histórias locais?”."], ["02", "Confira a fonte", "Veja quem publicou, qual instituição está por trás do conteúdo e quando ele foi atualizado."], ["03", "Compare informações", "Procure outras fontes independentes. Se houver números ou afirmações importantes, busque a origem dos dados."], ["04", "Registre o que aprendeu", "Anote as ideias principais com suas palavras e guarde os dados necessários para citar a fonte."], ["05", "Compartilhe com responsabilidade", "Diferencie fatos de opiniões, respeite os autores e não compartilhe algo que você não conseguiu verificar."]].map(([numero, titulo, texto]) => <article key={numero}><span>{numero}</span><div><h3>{titulo}</h3><p>{texto}</p></div></article>)}
        </div>
      </section>

      <section className="secao-conteudo container aprender-quiz">
        <div className="titulo-secao"><Etiqueta>DESAFIO RÁPIDO</Etiqueta><h2>O que ficou <em>na memória?</em></h2><p>Responda às perguntas e veja uma explicação para cada resposta.</p></div>
        <div className="aprender-quiz-lista">
          {perguntas.map((item, i) => <article className="aprender-pergunta" key={item.pergunta}><span className="aprender-pergunta-numero">PERGUNTA 0{i + 1}</span><h3>{item.pergunta}</h3><div className="aprender-opcoes">{item.opcoes.map((opcao, j) => <button key={opcao} className={respostas[i] === j ? (j === item.correta ? "correta" : "incorreta") : ""} onClick={() => setRespostas((anterior) => ({ ...anterior, [i]: j }))}>{String.fromCharCode(65 + j)}. {opcao}</button>)}</div>{respostas[i] !== undefined && <p className={`aprender-explicacao ${respostas[i] === item.correta ? "certa" : ""}`}>{respostas[i] === item.correta ? "Muito bem! " : "Quase! "}{item.explicacao}</p>}</article>)}
          <div className="aprender-resultado"><div><small>SEU RESULTADO</small><strong>{Object.keys(respostas).length === perguntas.length ? `${totalAcertos} de ${perguntas.length}` : `${Object.keys(respostas).length} de ${perguntas.length} respondidas`}</strong><p>{Object.keys(respostas).length === perguntas.length ? (totalAcertos === perguntas.length ? "Excelente! Você acertou todas." : "Revise as explicações e tente novamente.") : "Responda às três perguntas para conferir seu resultado."}</p></div><button onClick={() => setRespostas({})}>Refazer desafio ↻</button></div>
        </div>
      </section>

      <section className="aprender-chamada-final"><div><Etiqueta>CONHECIMENTO EM MOVIMENTO</Etiqueta><h2>Uma descoberta pode ser o começo <em>de uma mudança.</em></h2><p>Escolha uma ideia que aprendeu aqui e compartilhe com alguém, investigue mais ou transforme-a em uma pequena ação no seu território.</p></div><a href="#topo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Voltar ao início ↑</a></section>
    </>
  );
}


function Apoio() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const servicos = [
    {
      titulo: "CRAS — Assistência Social",
      categoria: "Assistência social",
      descricao:
        "Oferece orientação social, atendimento às famílias e informações sobre benefícios e programas sociais.",
      quando:
        "Quando você precisa de orientação sobre benefícios sociais, Cadastro Único ou serviços de assistência social.",
      como:
        "Procure o CRAS responsável pela região onde você mora. Se não souber qual é, entre em contato com a prefeitura.",
      link: "https://www.gov.br/pt-br/servicos/acessar-o-cras-centro-de-referencia-da-assistencia-social",
      botao: "Encontrar informações"
    },
    {
      titulo: "Cadastro Único",
      categoria: "Assistência social",
      descricao:
        "É um registro utilizado pelo governo para identificar famílias de baixa renda e possibilitar o acesso a programas sociais, conforme os critérios de cada programa.",
      quando:
        "Quando sua família precisa se cadastrar ou atualizar os dados para verificar a possibilidade de participar de programas sociais.",
      como:
        "Procure o CRAS ou o posto do Cadastro Único do seu município e pergunte quais documentos levar.",
      link: "https://www.gov.br/mds/pt-br/acoes-e-programas/cadastro-unico",
      botao: "Consultar Cadastro Único"
    },
    {
      titulo: "Disque 100",
      categoria: "Direitos humanos",
      descricao:
        "Canal para comunicar violações de direitos humanos, incluindo situações que atingem crianças, idosos, pessoas com deficiência e outros grupos vulneráveis.",
      quando:
        "Quando você presencia, sofre ou tem informações sobre possíveis violações de direitos humanos.",
      como:
        "Acesse os canais oficiais para conferir as formas de atendimento e registrar a situação. Em perigo imediato, procure também os serviços de emergência.",
      link: "https://www.gov.br/mdh/pt-br/ondh",
      botao: "Acessar canal oficial"
    },
    {
      titulo: "Ligue 180",
      categoria: "Proteção à mulher",
      descricao:
        "Central de Atendimento à Mulher que oferece informações sobre direitos e orientações sobre serviços de atendimento a mulheres em situação de violência.",
      quando:
        "Quando uma mulher precisa de orientação, quer conhecer a rede de atendimento ou deseja comunicar uma situação de violência.",
      como:
        "Entre em contato pelos canais oficiais do Ligue 180. Em uma emergência ou diante de perigo imediato, ligue 190.",
      link: "https://www.gov.br/mulheres/pt-br/ligue180",
      botao: "Acessar Ligue 180"
    },
    {
      titulo: "SAMU — 192",
      categoria: "Saúde",
      descricao:
        "Serviço de atendimento móvel de urgência para situações que necessitam de assistência médica imediata.",
      quando:
        "Em emergências médicas, como situações graves com risco à vida.",
      como:
        "Ligue 192 e informe o que aconteceu, onde a pessoa está e quais são as condições observadas. Siga as orientações da equipe.",
      link: "https://www.gov.br/saude/pt-br/composicao/saes/samu-192",
      botao: "Consultar informações"
    },
    {
      titulo: "Sistema Único de Saúde (SUS)",
      categoria: "Saúde",
      descricao:
        "O SUS oferece serviços públicos de saúde, como vacinação, consultas, acompanhamento e atendimento em unidades de saúde.",
      quando:
        "Quando você precisa de atendimento de saúde, informações sobre vacinação ou acompanhamento preventivo.",
      como:
        "Procure a Unidade Básica de Saúde (UBS) da sua região ou consulte a Secretaria de Saúde do município.",
      link: "https://www.gov.br/saude/pt-br",
      botao: "Acessar Ministério da Saúde"
    },
    {
      titulo: "Defensoria Pública",
      categoria: "Direitos humanos",
      descricao:
        "Pode oferecer orientação jurídica e assistência gratuita a pessoas que atendam aos critérios de atendimento da instituição.",
      quando:
        "Quando você precisa de orientação jurídica e não tem condições de contratar um advogado.",
      como:
        "Consulte a Defensoria Pública do seu estado ou a Defensoria Pública da União, conforme o assunto. Verifique os critérios de atendimento.",
      link: "https://www.dpu.def.br/",
      botao: "Consultar Defensoria Pública"
    },
    {
      titulo: "SINE — Trabalho e emprego",
      categoria: "Trabalho",
      descricao:
        "A rede pública de atendimento ao trabalhador oferece serviços relacionados à busca por emprego e à orientação profissional.",
      quando:
        "Quando você está procurando trabalho ou precisa de informações sobre serviços públicos de emprego.",
      como:
        "Consulte os canais oficiais e verifique quais serviços estão disponíveis no seu município.",
      link: "https://www.gov.br/trabalho-e-emprego/pt-br",
      botao: "Consultar serviços de emprego"
    },
    {
      titulo: "Direitos da criança e do adolescente",
      categoria: "Direitos humanos",
      descricao:
        "Crianças e adolescentes têm direito à proteção, educação, saúde, convivência familiar e comunitária.",
      quando:
        "Quando há suspeita de violência, negligência, exploração ou outra situação que ameace os direitos de crianças e adolescentes.",
      como:
        "Procure o Conselho Tutelar do município ou utilize os canais oficiais de denúncia. Em perigo imediato, ligue 190.",
      link: "https://www.gov.br/mdh/pt-br",
      botao: "Consultar canal oficial"
    },
    {
      titulo: "Assistência alimentar",
      categoria: "Alimentação",
      descricao:
        "Os municípios podem oferecer serviços e programas de segurança alimentar, como restaurantes populares, cozinhas comunitárias e outras iniciativas.",
      quando:
        "Quando uma pessoa ou família está enfrentando dificuldades para conseguir alimentos.",
      como:
        "Procure o CRAS, a prefeitura ou a Secretaria de Assistência Social para conhecer os serviços disponíveis na sua região.",
      link: "https://www.gov.br/mds/pt-br",
      botao: "Consultar assistência social"
    }
  ];

  const categorias = [
    "Todos",
    "Assistência social",
    "Direitos humanos",
    "Proteção à mulher",
    "Saúde",
    "Trabalho",
    "Alimentação"
  ];

  const servicosFiltrados = servicos.filter((servico) => {
    const correspondeCategoria =
      categoria === "Todos" || servico.categoria === categoria;

    const textoPesquisa =
      `${servico.titulo} ${servico.descricao} ${servico.categoria}`.toLowerCase();

    const correspondeBusca = textoPesquisa.includes(busca.toLowerCase());

    return correspondeCategoria && correspondeBusca;
  });

  return (
    <>
      <HeroInterno
        etiqueta="CUIDADO · ORIENTAÇÃO · DIREITOS"
        titulo={
          <>
            Você não precisa enfrentar tudo sozinho.
          </>
        }
        texto="Conheça serviços públicos, encontre informações confiáveis e descubra caminhos para buscar apoio. Informação acessível também é uma forma de cuidado."
      />

      <section className="secao-conteudo container">
        <div className="titulo-secao">
          <Etiqueta>CAMINHOS DE APOIO</Etiqueta>

          <h2>
            Encontre o serviço <em>certo para sua necessidade.</em>
          </h2>

          <p>
            Pesquise por um serviço ou escolha uma categoria para encontrar
            informações sobre onde buscar ajuda.
          </p>
        </div>

        <div className="filtros">
          {categorias.map((item) => (
            <button
              key={item}
              className={categoria === item ? "filtro ativo" : "filtro"}
              onClick={() => setCategoria(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div style={{ maxWidth: "650px", margin: "0 auto 35px" }}>
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Ex.: alimentação, emprego, saúde..."
            aria-label="Pesquisar serviços de apoio"
            style={{
              width: "100%",
              padding: "16px 18px",
              borderRadius: "8px",
              border: "1px solid rgba(216, 173, 105, 0.4)",
              background: "#10251d",
              color: "#f0e7d7",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
          />
        </div>

        <div className="grade-apoio">
          {servicosFiltrados.map((servico, i) => (
            <article className="cartao-apoio" key={servico.titulo}>
              <div className="topo-apoio">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <Icone tipo="coracao" tamanho={22} />
              </div>

              <small>{servico.categoria.toUpperCase()}</small>

              <h3>{servico.titulo}</h3>

              <p>{servico.descricao}</p>

              <details style={{ margin: "18px 0" }}>
                <summary
                  style={{
                    cursor: "pointer",
                    color: "#d8ad69",
                    fontWeight: "600",
                    marginBottom: "12px"
                  }}
                >
                  Como conseguir atendimento?
                </summary>

                <div style={{ paddingTop: "8px" }}>
                  <h4>Quando procurar</h4>
                  <p>{servico.quando}</p>

                  <h4>Como buscar ajuda</h4>
                  <p>{servico.como}</p>
                </div>
              </details>

              <a
                className="botao botao-contorno"
                href={servico.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {servico.botao} <Icone tipo="seta" tamanho={15} />
              </a>
            </article>
          ))}

          {servicosFiltrados.length === 0 && (
            <p>
              Não encontramos serviços com essa pesquisa. Tente outra palavra
              ou escolha a categoria "Todos".
            </p>
          )}
        </div>

        <div className="alerta-urgencia">
          <strong>Precisa de ajuda imediata?</strong>

          <p>
            <b>SAMU: 192</b> — emergências médicas.
            <br />
            <b>Polícia: 190</b> — situações de perigo imediato.
            <br />
            <b>Violência contra a mulher: 180</b> — orientação e atendimento.
            <br />
            <b>Violações de direitos humanos: 100</b> — denúncias e orientações.
          </p>

          <small>
            Em caso de risco imediato, procure um local seguro e acione o
            serviço de emergência adequado.
          </small>
        </div>

        <div className="painel-nota">
          <strong>Não sabe por onde começar?</strong>

          <p>
            O CRAS pode orientar famílias sobre assistência social e programas
            disponíveis. Para questões de saúde, procure uma UBS. Para
            orientação jurídica gratuita, consulte a Defensoria Pública.
          </p>

          <small>
            A disponibilidade dos serviços e os critérios de atendimento
            variam. Consulte os canais oficiais para confirmar informações
            atualizadas e localizar unidades próximas.
          </small>
        </div>
      </section>
    </>
  );
}

function Territorios() {
  const territorios = [
    {
      nome: "Alagoas",
      sigla: "AL",
      capital: "Maceió",
      frase: "Entre o azul do mar e a força das tradições.",
      descricao:
        "Alagoas reúne praias, lagoas, comunidades pesqueiras e expressões culturais transmitidas entre gerações.",
      imagem:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
      cores: ["Mar azul", "Artesanato", "Cultura popular"],
      musica: "Coco de roda, guerreiro e forró.",
      comida: "Sururu, tapioca e peixadas.",
      lugares: [
        "São Miguel dos Milagres",
        "Penedo",
        "Lagoa Mundaú",
      ],
      tradicao:
        "O filé alagoano é uma técnica artesanal de bordado associada à identidade cultural do estado.",
      desafio:
        "Desigualdade social, acesso a oportunidades e preservação dos ecossistemas costeiros.",
      acao:
        "Valorizar artesãos locais, apoiar iniciativas comunitárias e respeitar os ambientes naturais.",
    },
    {
      nome: "Bahia",
      sigla: "BA",
      capital: "Salvador",
      frase: "Memória, ancestralidade e criatividade em movimento.",
      descricao:
        "A Bahia tem uma história profundamente ligada às culturas indígenas e africanas, além de uma grande diversidade de manifestações artísticas.",
      imagem:
        "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1200&q=85",
      cores: ["Capoeira", "Axé", "Candomblé"],
      musica: "Samba de roda, axé, ijexá e pagode baiano.",
      comida: "Acarajé, moqueca e abará.",
      lugares: [
        "Pelourinho",
        "Chapada Diamantina",
        "Porto Seguro",
      ],
      tradicao:
        "A capoeira combina música, movimento, história e resistência, sendo reconhecida como patrimônio cultural.",
      desafio:
        "Enfrentamento das desigualdades, do racismo e das dificuldades de acesso a serviços e oportunidades.",
      acao:
        "Prestigiar artistas negros, apoiar projetos culturais comunitários e combater a discriminação.",
    },
    {
      nome: "Ceará",
      sigla: "CE",
      capital: "Fortaleza",
      frase: "Criatividade que transforma histórias em arte.",
      descricao:
        "O Ceará conecta litoral, sertão, literatura popular, humor, artesanato e manifestações culturais que atravessam gerações.",
      imagem:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
      cores: ["Cordel", "Humor", "Artesanato"],
      musica: "Forró, repente e tradição dos cantadores.",
      comida: "Baião de dois, cuscuz e peixada.",
      lugares: [
        "Jericoacoara",
        "Centro Dragão do Mar",
        "Serra da Ibiapaba",
      ],
      tradicao:
        "A literatura de cordel utiliza versos, narrativas populares e, muitas vezes, capas ilustradas com xilogravuras.",
      desafio:
        "Convivência com períodos de seca, desigualdade territorial e acesso à água em algumas comunidades.",
      acao:
        "Apoiar iniciativas de convivência com o semiárido, educação ambiental e valorização dos artistas locais.",
    },
    {
      nome: "Maranhão",
      sigla: "MA",
      capital: "São Luís",
      frase: "Festas, ritmos e saberes que ocupam as ruas.",
      descricao:
        "O Maranhão possui patrimônio histórico, comunidades tradicionais, paisagens singulares e manifestações culturais próprias.",
      imagem:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
      cores: ["Bumba meu boi", "Tambor de crioula", "Patrimônio"],
      musica: "Toadas de bumba meu boi e tambor de crioula.",
      comida: "Arroz de cuxá, torta de camarão e juçara.",
      lugares: [
        "Centro histórico de São Luís",
        "Lençóis Maranhenses",
        "Alcântara",
      ],
      tradicao:
        "O bumba meu boi reúne música, dança, teatro e personagens em uma celebração de grande importância cultural.",
      desafio:
        "Desigualdades sociais, proteção dos territórios e acesso a serviços públicos em comunidades distantes.",
      acao:
        "Valorizar mestres e grupos tradicionais e apoiar ações de preservação ambiental e cultural.",
    },
    {
      nome: "Paraíba",
      sigla: "PB",
      capital: "João Pessoa",
      frase: "Do litoral ao sertão, muitas formas de criar e pertencer.",
      descricao:
        "A Paraíba reúne praias, patrimônio histórico, literatura, música, artesanato e tradições que expressam a diversidade do estado.",
      imagem:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
      cores: ["Forró", "Literatura de cordel", "Artesanato"],
      musica: "Forró, coco de roda e repente.",
      comida: "Rubacão, carne de sol e macaxeira.",
      lugares: [
        "Centro histórico de João Pessoa",
        "Litoral sul",
        "Vale dos Dinossauros",
      ],
      tradicao:
        "A literatura de cordel e o repente mantêm viva a arte de contar histórias por meio de versos, improviso e memória popular.",
      desafio:
        "Ampliar oportunidades para jovens, fortalecer a economia local e reduzir desigualdades entre territórios.",
      acao:
        "Prestigiar artistas paraibanos, divulgar projetos locais e participar de iniciativas culturais e educativas.",
    },
    {
      nome: "Pernambuco",
      sigla: "PE",
      capital: "Recife",
      frase: "Uma cultura que pulsa nas ruas, nos palcos e nas comunidades.",
      descricao:
        "Pernambuco é marcado pela diversidade musical, pelas manifestações populares, pela produção artística e pela riqueza de seu patrimônio.",
      imagem:
        "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=1200&q=85",
      cores: ["Frevo", "Maracatu", "Manguebeat"],
      musica: "Frevo, maracatu, ciranda e manguebeat.",
      comida: "Bolo de rolo, cartola e carne de sol.",
      lugares: [
        "Recife Antigo",
        "Olinda",
        "Fernando de Noronha",
      ],
      tradicao:
        "O frevo é uma manifestação cultural que combina música acelerada, dança e sombrinhas coloridas, especialmente presente no Carnaval.",
      desafio:
        "Desigualdade urbana, mobilidade, acesso à cultura e preservação de áreas naturais.",
      acao:
        "Frequentar espaços culturais, apoiar artistas independentes e fortalecer projetos comunitários.",
    },
    {
      nome: "Piauí",
      sigla: "PI",
      capital: "Teresina",
      frase: "Paisagens, memória e conhecimento que atravessam o tempo.",
      descricao:
        "O Piauí possui patrimônio arqueológico, paisagens do semiárido, comunidades tradicionais e manifestações culturais diversas.",
      imagem:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
      cores: ["Arqueologia", "Caatinga", "Artesanato"],
      musica: "Forró, reisado e manifestações populares.",
      comida: "Maria-isabel, paçoca e capote.",
      lugares: [
        "Parque Nacional Serra da Capivara",
        "Delta do Parnaíba",
        "Sete Cidades",
      ],
      tradicao:
        "A Serra da Capivara abriga importantes sítios arqueológicos que contribuem para o estudo da presença humana nas Américas.",
      desafio:
        "Acesso a serviços em áreas rurais, oportunidades de trabalho e convivência com as condições do semiárido.",
      acao:
        "Valorizar a pesquisa, apoiar o turismo responsável e incentivar projetos de educação e conservação.",
    },
    {
      nome: "Rio Grande do Norte",
      sigla: "RN",
      capital: "Natal",
      frase: "O encontro entre litoral, sertão e cultura popular.",
      descricao:
        "O estado reúne praias, dunas, comunidades pesqueiras, festas populares e expressões culturais do litoral ao interior.",
      imagem:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      cores: ["Dunas", "Festas populares", "Artesanato"],
      musica: "Forró, repente e manifestações tradicionais.",
      comida: "Ginga com tapioca, carne de sol e cuscuz.",
      lugares: [
        "Dunas de Genipabu",
        "Forte dos Reis Magos",
        "Praia da Pipa",
      ],
      tradicao:
        "O artesanato, as festas populares e as práticas de comunidades pesqueiras integram a diversidade cultural potiguar.",
      desafio:
        "Preservação costeira, desigualdade social e ampliação de oportunidades para comunidades locais.",
      acao:
        "Apoiar pequenos empreendedores, respeitar as comunidades e incentivar o turismo sustentável.",
    },
    {
      nome: "Sergipe",
      sigla: "SE",
      capital: "Aracaju",
      frase: "Tradições que conectam o rio, o mar e a comunidade.",
      descricao:
        "Sergipe combina patrimônio histórico, culinária, festas juninas, artesanato e paisagens ligadas ao litoral e aos rios.",
      imagem:
        "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=85",
      cores: ["São João", "Artesanato", "Patrimônio"],
      musica: "Forró, quadrilhas juninas e reisado.",
      comida: "Caranguejo, moqueca e mangaba.",
      lugares: [
        "Orla de Atalaia",
        "Cânion do Xingó",
        "São Cristóvão",
      ],
      tradicao:
        "As festas juninas reúnem música, dança, comidas tradicionais e encontros comunitários em diferentes municípios.",
      desafio:
        "Preservação dos ambientes costeiros, acesso a oportunidades e valorização das tradições locais.",
      acao:
        "Participar de eventos locais, apoiar artesãos e produtores e contribuir para a conservação dos rios e praias.",
    },
  ];

  const [selecionado, setSelecionado] = useState(territorios[4]);
  const [busca, setBusca] = useState("");
  const [aba, setAba] = useState("Cultura");

  const encontrados = territorios.filter((estado) =>
    [
      estado.nome,
      estado.sigla,
      estado.capital,
      estado.frase,
      estado.descricao,
      estado.musica,
      estado.comida,
      estado.tradicao,
      ...estado.lugares,
    ]
      .join(" ")
      .toLowerCase()
      .includes(busca.toLowerCase())
  );

  function selecionarEstado(estado) {
    setSelecionado(estado);
    setAba("Cultura");
  }

  function pesquisarLink(texto) {
    return `https://www.google.com/search?q=${encodeURIComponent(texto)}`;
  }

  const abas = [
    "Cultura",
    "Música",
    "Gastronomia",
    "Turismo",
    "Tradições",
    "Transformação social",
  ];

  return (
    <>
      <HeroInterno
        etiqueta="TERRITÓRIOS · IDENTIDADE · DIVERSIDADE"
        titulo={
          <>
            Nove estados.
            <em> Incontáveis formas de pertencer.</em>
          </>
        }
        texto="Explore o Nordeste por meio de suas histórias, músicas, sabores, paisagens e tradições. Cada território tem suas próprias vozes e desafios."
      />

      <section className="secao-conteudo container">
        <div className="titulo-secao">
          <Etiqueta>UM NORDESTE DE MUITAS IDENTIDADES</Etiqueta>
          <h2>
            Escolha um território e <em>comece a explorar.</em>
          </h2>
          <p>
            Selecione um estado para descobrir expressões culturais, lugares,
            tradições e iniciativas que ajudam a transformar comunidades.
          </p>
        </div>

        <div style={{ maxWidth: 600, margin: "0 auto 32px" }}>
          <input
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquise um estado, ritmo, comida ou lugar..."
            aria-label="Pesquisar territórios do Nordeste"
            style={{
              width: "100%",
              padding: "16px 18px",
              borderRadius: 12,
              border: "1px solid rgba(216,173,105,0.45)",
              background: "#10251d",
              color: "#f0e7d7",
              fontSize: 15,
              outlineOffset: 3,
            }}
          />
          <small style={{ display: "block", marginTop: 8, opacity: 0.7 }}>
            {encontrados.length} de 9 estados disponíveis
          </small>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(135px, 1fr))",
            gap: 12,
            marginBottom: 38,
          }}
        >
          {encontrados.map((estado) => (
            <button
              key={estado.sigla}
              onClick={() => selecionarEstado(estado)}
              aria-pressed={selecionado.sigla === estado.sigla}
              style={{
                padding: "18px 12px",
                borderRadius: 12,
                border:
                  selecionado.sigla === estado.sigla
                    ? "1px solid #d8ad69"
                    : "1px solid rgba(216,173,105,0.2)",
                background:
                  selecionado.sigla === estado.sigla
                    ? "#234334"
                    : "#10251d",
                color: "#f0e7d7",
                cursor: "pointer",
                textAlign: "left",
                transition: "0.2s ease",
              }}
            >
              <strong
                style={{
                  display: "block",
                  fontSize: 23,
                  color: "#d8ad69",
                  marginBottom: 6,
                }}
              >
                {estado.sigla}
              </strong>
              <span style={{ fontSize: 14 }}>{estado.nome}</span>
            </button>
          ))}

          {encontrados.length === 0 && (
            <p>Nenhum resultado encontrado. Tente outra palavra.</p>
          )}
        </div>

        {encontrados.length > 0 && (
          <>
            <article
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                overflow: "hidden",
                borderRadius: 18,
                background: "#10251d",
                border: "1px solid rgba(216,173,105,0.22)",
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  minHeight: 340,
                  backgroundImage: `linear-gradient(0deg, rgba(7,19,15,0.7), transparent 65%), url("${selecionado.imagem}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 28,
                }}
              >
                <div>
                  <span
                    style={{
                      color: "#d8ad69",
                      fontSize: 13,
                      letterSpacing: 2,
                    }}
                  >
                    TERRITÓRIO SELECIONADO
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(32px, 5vw, 48px)",
                      color: "#fff",
                      margin: "8px 0",
                    }}
                  >
                    {selecionado.nome}
                  </h2>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Capital: {selecionado.capital}
                  </p>
                </div>
              </div>

              <div style={{ padding: "clamp(22px, 4vw, 38px)" }}>
                <Etiqueta>{selecionado.sigla} · NORDESTE DO BRASIL</Etiqueta>
                <h2 style={{ marginTop: 18, lineHeight: 1.3 }}>
                  {selecionado.frase}
                </h2>
                <p style={{ lineHeight: 1.9, opacity: 0.85 }}>
                  {selecionado.descricao}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginTop: 22,
                  }}
                >
                  {selecionado.cores.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "8px 11px",
                        borderRadius: 30,
                        border: "1px solid rgba(216,173,105,0.4)",
                        color: "#d8ad69",
                        fontSize: 12,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <div
              style={{
                display: "flex",
                gap: 9,
                overflowX: "auto",
                paddingBottom: 12,
                marginBottom: 25,
              }}
            >
              {abas.map((item) => (
                <button
                  key={item}
                  onClick={() => setAba(item)}
                  style={{
                    flex: "0 0 auto",
                    padding: "12px 16px",
                    borderRadius: 30,
                    border:
                      aba === item
                        ? "1px solid #d8ad69"
                        : "1px solid rgba(216,173,105,0.2)",
                    background: aba === item ? "#234334" : "transparent",
                    color: aba === item ? "#d8ad69" : "#f0e7d7",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            <article
              style={{
                padding: "clamp(22px, 4vw, 36px)",
                borderRadius: 16,
                background: "#10251d",
                border: "1px solid rgba(216,173,105,0.2)",
                marginBottom: 55,
              }}
            >
              {aba === "Cultura" && (
                <>
                  <Etiqueta>IDENTIDADE E EXPRESSÃO</Etiqueta>
                  <h2>
                    Uma cultura que <em>continua viva.</em>
                  </h2>
                  <p style={{ lineHeight: 1.9 }}>
                    {selecionado.descricao}
                  </p>
                  <h3>Expressões em destaque</h3>
                  <p style={{ lineHeight: 1.9 }}>
                    {selecionado.musica} A cultura também aparece na culinária,
                    no artesanato, nas festas populares e nos saberes transmitidos
                    entre gerações.
                  </p>
                </>
              )}

              {aba === "Música" && (
                <>
                  <Etiqueta>SONS DO TERRITÓRIO</Etiqueta>
                  <h2>Ritmos que contam histórias.</h2>
                  <p style={{ lineHeight: 1.9 }}>
                    {selecionado.musica}
                  </p>
                  <p style={{ lineHeight: 1.9 }}>
                    A música é uma forma de preservar memórias, criar vínculos
                    comunitários e expressar mudanças sociais.
                  </p>
                  <a
                    className="botao botao-contorno"
                    href={pesquisarLink(
                      `${selecionado.nome} músicas artistas ritmos tradicionais`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explorar músicas e artistas ↗
                  </a>
                </>
              )}

              {aba === "Gastronomia" && (
                <>
                  <Etiqueta>SABORES E MEMÓRIAS</Etiqueta>
                  <h2>Receitas que aproximam gerações.</h2>
                  <p style={{ lineHeight: 1.9 }}>
                    {selecionado.comida}
                  </p>
                  <p style={{ lineHeight: 1.9 }}>
                    Os hábitos alimentares de cada região refletem ingredientes
                    locais, trocas culturais e conhecimentos transmitidos em
                    família e na comunidade.
                  </p>
                  <a
                    className="botao botao-contorno"
                    href={pesquisarLink(
                      `culinária tradicional ${selecionado.nome} receitas história`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Descobrir pratos e receitas ↗
                  </a>
                </>
              )}

              {aba === "Turismo" && (
                <>
                  <Etiqueta>LUGARES PARA CONHECER</Etiqueta>
                  <h2>Descubra o território.</h2>
                  <p style={{ lineHeight: 1.9 }}>
                    Conhecer um lugar também é aprender sobre sua história,
                    respeitar seus moradores e valorizar a economia local.
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(190px, 1fr))",
                      gap: 14,
                      marginTop: 24,
                    }}
                  >
                    {selecionado.lugares.map((lugar, i) => (
                      <a
                        key={lugar}
                        href={pesquisarLink(`${lugar} ${selecionado.nome}`)}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          padding: 20,
                          borderRadius: 12,
                          border: "1px solid rgba(216,173,105,0.25)",
                          color: "#f0e7d7",
                          textDecoration: "none",
                        }}
                      >
                        <small style={{ color: "#d8ad69" }}>
                          DESTINO 0{i + 1}
                        </small>
                        <h3>{lugar}</h3>
                        <span style={{ fontSize: 13 }}>
                          Pesquisar sobre o lugar ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </>
              )}

              {aba === "Tradições" && (
                <>
                  <Etiqueta>MEMÓRIA E PATRIMÔNIO</Etiqueta>
                  <h2>Saberes que atravessam gerações.</h2>
                  <p style={{ lineHeight: 1.9 }}>
                    {selecionado.tradicao}
                  </p>
                  <p style={{ lineHeight: 1.9 }}>
                    Valorizar essas práticas significa reconhecer as pessoas
                    que mantêm os saberes vivos, respeitar suas origens e
                    criar condições para que sejam transmitidos às próximas
                    gerações.
                  </p>
                  <a
                    className="botao botao-contorno"
                    href={pesquisarLink(
                      `patrimônio cultural tradições ${selecionado.nome}`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Conhecer mais tradições ↗
                  </a>
                </>
              )}

              {aba === "Transformação social" && (
                <>
                  <Etiqueta>CULTURA E DESENVOLVIMENTO SOCIAL</Etiqueta>
                  <h2>
                    Conhecer os desafios é o primeiro passo para transformar.
                  </h2>
                  <h3>Desafios do território</h3>
                  <p style={{ lineHeight: 1.9 }}>
                    {selecionado.desafio}
                  </p>

                  <div
                    style={{
                      padding: 22,
                      borderRadius: 12,
                      background: "rgba(216,173,105,0.08)",
                      borderLeft: "3px solid #d8ad69",
                      marginTop: 22,
                    }}
                  >
                    <h3>Como contribuir?</h3>
                    <p style={{ lineHeight: 1.9 }}>
                      {selecionado.acao}
                    </p>
                  </div>

                  <button
                    className="botao botao-cobre"
                    onClick={() => {
                      document
                        .getElementById("contato-territorios")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{ marginTop: 22 }}
                  >
                    Quero participar ↓
                  </button>
                </>
              )}
            </article>
          </>
        )}

        <section
          id="contato-territorios"
          style={{
            padding: "clamp(25px, 5vw, 48px)",
            borderRadius: 18,
            background: "#10251d",
            border: "1px solid rgba(216,173,105,0.25)",
            marginBottom: 35,
          }}
        >
          <Etiqueta>CULTURA QUE TRANSFORMA</Etiqueta>
          <h2 style={{ marginTop: 16 }}>
            O território também é feito por <em>quem participa.</em>
          </h2>
          <p style={{ lineHeight: 1.9, maxWidth: 720 }}>
            Projetos culturais, iniciativas educativas, coletivos comunitários
            e ações de preservação podem fortalecer vínculos e ampliar
            oportunidades. A transformação começa com escuta, colaboração e
            valorização de quem vive no território.
          </p>
          <p style={{ lineHeight: 1.9 }}>
            Quer contribuir com uma ideia, projeto ou iniciativa cultural?
            Acesse a área de participação do Entrelaços.
          </p>
          <a
            className="botao botao-cobre"
            href="#topo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Voltar ao início ↑
          </a>
        </section>
      </section>
    </>
  );
}
         

function Participar() {
  const [formulario, setFormulario] = useState({
    nome: "",
    interesse: "Cultura e memória",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  function atualizar(campo, valor) {
    setFormulario({ ...formulario, [campo]: valor });
  }

  return (
    <>
      <HeroInterno
        etiqueta="PARTICIPAÇÃO · COMUNIDADE · COLABORAÇÃO"
        titulo={<>Toda transformação começa com alguém que decide participar.</>}
        texto="Contribua compartilhando conhecimentos, sugerindo iniciativas locais ou ajudando a tornar a informação mais acessível."
      />

      <section className="secao-conteudo container grade-participar">
        <div>
          <Etiqueta>ENCONTRE SEU JEITO DE CONTRIBUIR</Etiqueta>
          <h2>O Nordeste se fortalece <em>quando a gente se conecta.</em></h2>

          {[
            ["Compartilhe conhecimento", "Indique materiais, registros culturais e fontes confiáveis."],
            ["Valorize iniciativas locais", "Ajude a divulgar projetos comunitários e ações reconhecidas."],
            ["Traga outras perspectivas", "Sugira temas e histórias que merecem ser ouvidos."],
          ].map(([titulo, texto], i) => (
            <article className="opcao-participar" key={titulo}>
              <Icone tipo={i === 1 ? "coracao" : "sol"} tamanho={23} />
              <div><h3>{titulo}</h3><p>{texto}</p></div>
            </article>
          ))}
        </div>

        <form
          className="formulario"
          onSubmit={(e) => {
            e.preventDefault();
            setEnviado(true);
          }}
        >
          <small>ESPAÇO DE IDEIAS</small>
          <h3>Conte sua ideia</h3>
          <p>Protótipo demonstrativo: os dados não são enviados a um servidor.</p>

          <label htmlFor="nome">Como podemos chamar você?</label>
          <input
            id="nome"
            required
            value={formulario.nome}
            onChange={(e) => atualizar("nome", e.target.value)}
            placeholder="Seu nome"
          />

          <label htmlFor="interesse">O que te interessa?</label>
          <select
            id="interesse"
            value={formulario.interesse}
            onChange={(e) => atualizar("interesse", e.target.value)}
          >
            <option>Cultura e memória</option>
            <option>Educação e pesquisa</option>
            <option>Direitos e cidadania</option>
            <option>Iniciativas comunitárias</option>
            <option>Rede de apoio</option>
          </select>

          <label htmlFor="mensagem">Sua sugestão</label>
          <textarea
            id="mensagem"
            required
            rows="4"
            value={formulario.mensagem}
            onChange={(e) => atualizar("mensagem", e.target.value)}
            placeholder="Conte um pouco da sua ideia..."
          />

          <button className="botao botao-cobre" type="submit">
            REGISTRAR IDEIA <Icone tipo="seta" tamanho={15} />
          </button>

          {enviado && (
            <p className="mensagem-sucesso">
              Obrigada, {formulario.nome}! Esta é uma demonstração: nada foi enviado ou armazenado.
            </p>
          )}
        </form>
      </section>
    </>
  );
}

function Sobre() {
  return (
    <>
      <HeroInterno
        etiqueta="SOBRE O PROJETO"
        titulo={<>Entrelaços: cultura que aproxima, conhecimento que transforma.</>}
        texto="Uma plataforma educativa e social dedicada à cultura nordestina, à reflexão crítica sobre desigualdades e à divulgação de caminhos de participação e apoio."
      />

      <section className="secao-conteudo container grade-sobre">
        <div>
          <Etiqueta>NOSSA INTENÇÃO</Etiqueta>
          <h2>Conectar saberes, pessoas e <em>possibilidades.</em></h2>
        </div>

        <div>
          <p>
            O Entrelaços nasce da ideia de que cultura e desenvolvimento social
            precisam caminhar juntos. Valorizar identidades regionais,
            compreender desigualdades e facilitar o acesso à informação são
            formas de fortalecer a cidadania.
          </p>
          <p>
            A plataforma também dialoga com o papel da extensão: aproximar
            conhecimento acadêmico e comunidade por meio da escuta, da troca
            e da construção coletiva.
          </p>
          <p>
            Este projeto é educativo e informativo. Não substitui serviços
            públicos, profissionais especializados nem organizações locais.
          </p>
        </div>
      </section>
    </>
  );
}

function Rodape({ navegar }) {
  return (
    <footer className="rodape">
      <div className="conteudo-rodape">
        <div className="sobre-rodape">
          <div className="marca marca-rodape">
            <span className="marca-simbolo"><Icone tamanho={27} /></span>
            <span className="marca-texto">
              <strong>ENTRELAÇOS</strong>
              <small>CULTURA QUE TRANSFORMA</small>
            </span>
          </div>
          <p>
            Uma plataforma de cultura, conhecimento e participação social,
            com o Nordeste como ponto de encontro.
          </p>
        </div>

        <div className="coluna-rodape">
          <strong>EXPLORE</strong>
          <button onClick={() => navegar("cultura")}>Cultura viva</button>
          <button onClick={() => navegar("territorios")}>Os nove estados</button>
          <button onClick={() => navegar("aprender")}>Aprender</button>
        </div>

        <div className="coluna-rodape">
          <strong>PARTICIPE</strong>
          <button onClick={() => navegar("sociedade")}>Sociedade</button>
          <button onClick={() => navegar("apoio")}>Rede de apoio</button>
          <button onClick={() => navegar("participar")}>Faça parte</button>
          <button onClick={() => navegar("sobre")}>Sobre o projeto</button>
        </div>
      </div>

      <div className="rodape-final">
        <span>© 2026 ENTRELAÇOS · PROJETO EDUCATIVO</span>
        <span>FEITO COM RESPEITO À DIVERSIDADE DO NORDESTE.</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [pagina, setPagina] = useState("inicio");

  function navegar(destino) {
    setPagina(destino);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pagina]);

  const paginas = {
    inicio: <Inicio navegar={navegar} />,
    cultura: <Cultura />,
    sociedade: <Sociedade />,
    aprender: <Aprender />,
    apoio: <Apoio />,
    territorios: <Territorios />,
    participar: <Participar />,
    sobre: <Sobre />,
  };

  return (
    <div className="aplicacao">
      <Cabecalho pagina={pagina} navegar={navegar} />
      <main key={pagina} className="transicao-pagina">
        {paginas[pagina] || paginas.inicio}
      </main>
      <Rodape navegar={navegar} />

      <button
        className="voltar-topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </div>
  );
}