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
        donnee.forEach(produit => {
            affiche(produit)
        });
    })
// Rôle : Afficher un produit dans la page HTML sous forme de cartes
// Paramètre : "product",  un objet représentant un produit contenant les informations du produit
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)
function affiche(prod) {
    //afficher dans le dom les petites cartes
    let tag = prod.category
    let description = prod.description
    let img = prod.image
    let price = prod.price
    let rate = prod.rating.rate
    let count = prod.rating.count
    let title = prod.title

    document.querySelector(".carte").innerHTML += 
    `
            <div class="card flex">
                <div class="flex cardTop">
                    <p>${tag}</p>
                    <img src="${img}" class="card-img center" alt="">
                </div>
                <div class="card-body">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-text">${description}</p> 
                    <div>
                        <div class="flex spaceBetween">
                            <p><a href="" title="">${rate}★${count}</a></p> 
                            <p>${price}</p> 
                        </div>
                        <a href="" title="" class="btn marginAuto">Ajouter au panier</a>
                    </div>
                </div>
            </div>
    `

}