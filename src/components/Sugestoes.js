export default function Sugestoes() {

    const sug = [
        { img: "./assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", segue: "Segue você" },
        { img: "./assets/img/chibirdart.svg", nome: "chibirdart", segue: "Segue você" },
        { img: "./assets/img/razoesparaacreditar.svg", nome: "razoesparacreditar", segue: "Novo no Instagram" },
        { img: "./assets/img/adorable_animals.svg", nome: "adorable_animals", segue: "Segue você" },
        { img: "./assets/img/smallcutecats.svg", nome: "smallcutecats", segue: "Segue você" },
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sug.map(s => <Sugestao key={s.img} img={s.img} nome={s.nome} seg={s.segue}/>)}
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt={props.nome} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.seg}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}