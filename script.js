//on donne l'url du site à appeller
fetch('https://fakestoreapi.com/products')
    .then((rep) => {
        //js reçoit une donnée de l'api et on le transforme en json
        return rep.json()
    })
    .then(donnee => {
        //ensuite j'ai accès à ma donnée
        console.log(donnee)
        //ici j'ai une liste de produits
        //je boucle sur le tableau de données
        donnee.forEach(prod => {
            affiche(prod)
        });
    })
// Rôle : Afficher un produit dans la page HTML sous forme de cartes
// Paramètre : "product",  un objet représentant un produit contenant les informations du produit
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)
function affiche(prod) {
    //afficher dans le dom les petites cartes
    let tag = produit.category
    let description = prod.description
    let img = prod.image
    let price = prod.price
    let rate = prod.rate
    let count = prod.count
    let title = prod.title

    let card = document.querySelector(".card")
    card.innerHTML += `
<div>
                <div>
                    <p class="cardTop flex spaceBetween">${tag}</p>
                    <img src="${img}" class="card-img center" alt="">
                </div>
                <div class="card-body">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-text">${description}</p> <!-- Description -->
                    <div>
                        <div class="flex paddingCard">
                            <p class="flex"><a href="" title="">${rate}</a></p> <!-- Note -->
                            <p>${price}</p> <!-- Prix -->
                        </div>
                        <a href="" title="" class="btn marginAuto">Ajouter au panier</a>
                        <!-- bouton Ajouter au panier -->
                    </div>
                </div>
            </div>
    `

}