let nfts = [];

function mintNFT(moviename, actor, releaseyear, description) {
    const nft = {
        moviename: moviename,
        actor: actor,
        releaseyear: releaseyear,
        description: description
    };
    nfts.push(nft);
}
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("MovieName: " + nfts[i].moviename);
        console.log("Actor: " + nfts[i].actor);
        console.log("ReleaseYear: " + nfts[i].releaseyear);
        console.log("Description: " + nfts[i].description);
        console.log("---------------------------");
    }
}
function getTotalSupply() {
    return nfts.length;
}
mintNFT("Laapata ladies", "Sparsh", 2024, "A movie is a commentary on patriarchy, misogyny, gender inequality, women's lack of self-respect");
mintNFT("pk", "Aamir khan", 2014, "The movie follows the story of an alien who comes to Earth and experiences the differences.");
mintNFT("OMG2", "Akshay Kumar", 2023, "A movie about raising the points of importance of sex education.");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
