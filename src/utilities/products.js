export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
  }

const products = [

  /* Categorias= 
  Remera:10 - 2 ;
  Buzo: 20;
  Pantalon:30 ;
  Zapatillas: 40;

  */
  {
    "id": 1,
    "nombre": "Remera Oversize",
    "stock": 5,
    "imagen": "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/283/338/products/dsc071531-97136dbd0146aefeb216602366140069-640-0.jpg",
    "category": "10",
    "idProduct": 12
  },
  {
    "id": 2,
    "nombre": "Remera Manga Larga",
    "stock": 10,
    "imagen": "https://www.newbalance.com.ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/m/r/mrt4327bk_nb_40_i.jpg",
    "category": "10",
    "idProduct": 14
  },
  {
    "id": 3,
    "nombre": "Buzo Adidas",
    "stock": 15,
    "imagen": "https://assets.adidas.com/images/w_600,f_auto,q_auto/ab9ff8818d60412c990bac75017e0bb8_9366/Buzo_adidas_Essentials_Negro_GN4027_01_laydown.jpg",
    "category": "20",
    "idProduct": 22
  },
  {
    "id": 4,
    "nombre": "Buzo Nike",
    "stock": 20,
    "imagen": "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa832340b/products/NI_BV4112-113/NI_BV4112-113-1.JPG",
    "category": "20",
    "idProduct": 24
  },
  {
    "id": 5,
    "nombre": "Pantalon Short",
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_836368-MLA50202046143_062022-O.webp",
    "stock": 25,
    "category": "30",
    "idProduct": 32
  },
  {
    "id": 6,
    "nombre": "Pantalon Jean",
    "imagen": "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/her_jeans_altas_1648466401.jpg?itok=OtszZ0ko",
    "stock": 30,
    "category": "30",
    "idProduct": 34
  },
  {
    "id": 7,
    "nombre": "Zapatillas Nike",
    "imagen": "https://i.pinimg.com/474x/6f/54/96/6f549652e721fa735375dcb6f043e38c.jpg",
    "stock": 35,
    "category": "40",
    "idProduct": 42
  },
  {
    "id": 8,
    "nombre": "Zapatillas Adidas Yeezy",
    "imagen": "https://media.revistagq.com/photos/601133ab9976390c571e2531/16:9/w_2560%2Cc_limit/GettyImages-631497628.jpg",
    "stock": 40,
    "category": "40",
    "idProduct": 44
  },
  {
    "id": 9,
    "nombre": "Zapatillas OCN",
    "imagen": "https://d28hi93gr697ol.cloudfront.net/f18e731e-a707-312a/img/Producto/100/7b3762053f793f490bd16ce0b7750db2-62c87ea60232e.jpg",
    "stock": 45,
    "category": "40",
    "idProduct": 46
  },
  {
    "id": 10,
    "nombre": "Buzo Nike",
    "imagen": "https://redsport.vteximg.com.br/arquivos/ids/1118003-1000-1000/BUZO-NIKE-NSW-CLUB-CRW-BB.jpg?v=637970465692570000",
    "stock": 50,
    "category": "20",
    "idProduct": 26
  },
  {
    "id": 11,
    "nombre": "Buzo Nike",
    "imagen": "https://sevensport.vteximg.com.br/arquivos/ids/516532-500-500/DD6383-661_1.jpg?v=637871837868270000",
    "stock": 55,
    "category": "20",
    "idProduct": 28
  },
  {
    "id": 12,
    "nombre": "Zapatillas Vans",
    "imagen": "https://www.digitalsport.com.ar/files/products/5c5d8bde6cecf-181658-500x500.jpg",
    "stock": 60,
    "category": "40",
    "idProduct": 48
  },
  {    
    "id": 13,
    "nombre": "Remera Manga Larga BIllabong",
    "imagen": "https://redsport.vteximg.com.br/arquivos/ids/1107583-1000-1000/REMERA-MANGA-LARGA-BILLABONG-NEW-APPLY-LONG-TEE.jpg?v=637855375884200000",
    "stock": 13,
    "category": "10",
    "idProduct": 16
    
  }
]

export default products;