import adidas from '../assets/adidas_ultraboost_22.png';
import converse from '../assets/converse_chuck_taylor_allstar.png';
import martens from '../assets/dr_martens_1460_boots.png';
import nike from '../assets/nike_air_max_270.png';
import vans from '../assets/vans_old_skool.png';

function shoeFactory(name, price){
    return {
        name: name,
        price: price,
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
    {id:0, ...shoeFactory("Nike Air Max 270", 1)},
    {id:1, ...shoeFactory("Adidas Ultraboost 22", 5)},
    {id:2, ...shoeFactory("Converse Chuck Taylor All-Star", 25)},
    {id:3, ...shoeFactory("Dr. Martens 1460 Boots", 500)},
    {id:4, ...shoeFactory("Vans Old Skool", 50)}
];

export { shoes, renderImage };