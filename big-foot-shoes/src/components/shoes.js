import adidas from '../assets/adidas_ultraboost_22.png';
import converse from '../assets/converse_chuck_taylor_allstar.png';
import martens from '../assets/dr_martens_1460_boots.png';
import nike from '../assets/nike_air_max_270.png';
import vans from '../assets/vans_old_skool.png';

function shoeFactory(name, price, description){
    return {
        name: name,
        price: price,
        description: description,
        qty: 0,
        sizes: [11, 11.5, 12, 12.5, 13, 13.5],
    };
}

function renderImage(shoeName){
    if (shoeName.includes("martens")) return martens;
    if (shoeName.includes("nike")) return nike;
    if (shoeName.includes("adidas")) return adidas;
    if(shoeName.includes("converse")) return converse;
    if(shoeName.includes("vans")) return vans;
}

const shoes = [
    {id:0, ...shoeFactory("Nike Air Max 270", 1, "Crafted with a breathable mesh upper that hugs your foot for a snug fit, the Air Max 270 is perfect for all-day wear, whether you’re hitting the streets or lounging with friends. The striking silhouette and vibrant colorways let you express your personality, making these sneakers a standout addition to any wardrobe.")},
    {id:1, ...shoeFactory("Adidas Ultraboost 22", 5, "With the legendary Boost midsole technology, you’ll enjoy unmatched energy return with every stride. Whether you’re sprinting through the city or strolling through the park, these shoes offer incredible comfort and support, making you feel like you’re walking on air. Plus, the adaptive fit means they’ll move with you, providing just the right amount of stretch where you need it most.")},
    {id:2, ...shoeFactory("Converse Chuck Taylor All-Star", 25, "Crafted with a breathable canvas upper and a rubber toe cap, the Chuck Taylor All-Star is as comfortable as it is cool. Whether you opt for the timeless high-top or the laid-back low-top, these shoes are designed to fit seamlessly into any outfit—jeans, skirts, or that vintage band tee you love.")},
    {id:3, ...shoeFactory("Dr. Martens 1460 Boots", 500,"With their unmistakable yellow stitching and signature air-cushioned sole, these boots offer both style and comfort that lasts all day. Whether you’re stomping through city streets, dancing at a gig, or strutting into a meeting, the 1460s provide the perfect blend of rebellious flair and versatile chic.")},
    {id:4, ...shoeFactory("Vans Old Skool", 50, "Crafted with a durable canvas and suede upper, these kicks are perfect for skateboarding, cruising, or simply hanging out with friends. The padded collar offers ultimate comfort while you conquer your day, and the rubber waffle outsole provides grip that’s as solid as your dance moves at the next party.")}
];

async function getInventory(){
    const resp = await fetch('https://xh6kpco151.execute-api.us-east-1.amazonaws.com/dev//inventory-management/inventory');
    const json = await resp.json();
    return json;
}

function convertToArray(obj){
    const res = []
    for(const keey in obj){
        res.push({qty:0, ...obj[keey]})
    }
    return res;
}

export { shoes, renderImage, getInventory, convertToArray };