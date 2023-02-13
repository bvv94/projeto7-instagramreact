import Post from "./Post"

export default function Posts() {

    const posts = [
        {
            nomeperfil: "meowed",
            imgperfil: "./assets/img/meowed.svg",
            imgpost: "./assets/img/gato-telefone.svg",
            imgcurtida: "assets/img/respondeai.svg",
            nomecurtida: "respondeai",
            curtidas: 101945,
            salvo: true,
            curtido: true
        },
        {
            nomeperfil: "barked",
            imgperfil: "assets/img/barked.svg",
            imgpost: "assets/img/dog.svg",
            imgcurtida: "assets/img/adorable_animals.svg",
            nomecurtida: "adorable_animals",
            curtidas: 157935,
            salvo: true,
            curtido: true
        },
        {
            nomeperfil: "meowed",
            imgperfil: "./assets/img/meowed.svg",
            imgpost: "./assets/img/gato-telefone.svg",
            imgcurtida: "assets/img/respondeai.svg",
            nomecurtida: "respondeai",
            curtidas: 101945,
            salvo: true,
            curtido: true
        }
    ]

    return (
        <div className="posts">
            {posts.map((p) => <Post key={p.nomeperfil} nome={p.nomeperfil} imgpf={p.imgperfil}
                imgp={p.imgpost} imgcurtida={p.imgcurtida} curtidas={p.curtidas}
                nomecurtida={p.nomecurtida} curtido={p.curtido} salvo={p.salvo} />)}
        </div>
    )
}