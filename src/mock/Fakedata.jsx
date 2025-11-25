const products = [
  {
    id: "01",
    name: "XR 150",
    price: 5550000,
    description:
      "La Honda XR 150 es una motocicleta doble propósito (para ciudad y tierra) con un motor monocilíndrico de 149 cc que ofrece una potencia de alrededor de 12.6 CV, alimentado por carburador y con refrigeración por aire",
    img: "https://i.postimg.cc/Z5G11sfn/XR150-rojo-negro-1.jpg",
    category: "Honda",
    stock: 10,
  },
  {
    id: "02",
    name: "CG 150 TITAN",
    price: 3990000,
    description:
      "La Honda CG 150 Titan 2025 es una moto renovada con cambios de diseño, tablero digital, iluminación LED, y un asiento más largo y cómodo. Cuenta con un motor de 163 cc, suspensión mejorada, frenos de disco en ambas ruedas ",
    img: "https://i.postimg.cc/FR8WL72V/23c-2web-cgtitan-color-negro.jpg",
    category: "Honda",
    stock: 15,
  },
  {
    id: "03",
    name: "GIXXER 150i",
    price: 5690000,
    descriction:
      "De los fabricantes de Hayabusa y GSX-R, llega la New Gixxer 150i para formar parte de un linaje de leyendas y tradición con el objetivo de conquistar las calles",
    img: "https://i.postimg.cc/Dz2y9zp5/GE-GIXXER-BAUL-AZUL-768x512.png",
    category: "Suzuki",
    stock: 30,
  },
  {
    id: "04",
    name: "Suzuki AX100",
    price: 79.99,
    description:
      "La Suzuki AX100 es una motocicleta de trabajo de dos tiempos con un diseño retro, conocida por su robustez y economía. Tiene un motor monocilíndrico de 98 cc que requiere la mezcla automática de gasolina y aceite para funcionar, lo que le da un olor característico y la protege de mezclas erróneas. ",
    img: "https://i.postimg.cc/wM9CvtJk/ax100-roja-768x576.png",
    category: "Suzuki",
    stock: 20,
  },
  {
    id: "05",
    name: "Versys X 300",
    price: 14000000,
    description:
      "La Kawasaki Versys 300 es una motocicleta de aventura ligera y ágil, ideal tanto para el uso diario como para viajes. Está equipada con un motor bicilíndrico de 296 cc, suspensión de largo recorrido, chasis ligero y ruedas de radios. Ofrece una posición de conducción erguida y cómoda, y la versión ABS está disponible",
    img: "https://i.postimg.cc/vT1W5hWM/01-kawasaki-versys-x-300-2020-perfil-negro.jpg",
    category: "Kawasaki",
    stock: 5,
  },
  {
    id: "06",
    name: "Ninja 500",
    price: 15200000,
    description:
      "La Kawasaki Ninja 500 es una motocicleta deportiva que se posiciona como una evolución de la Ninja 400, con un diseño renovado y un motor bicilíndrico de 451 cc que produce unos 46 caballos de fuerza",
    img: "https://i.postimg.cc/h45FgGv0/25EX500G-242GY1DRF3CG-A-002.jpg",
    category: "Kawasaki",
    stock: 2,
  },
  {
    id: "07",
    name: "YBR 125",
    price: 4650000,
    description:
      "La Yamaha YBR 125 es una motocicleta ligera y confiable, ideal para el uso diario en ciudad, que se caracteriza por su economía de combustible (aproximadamente 40-50 km por litro) y un diseño compacto",
    img: "https://i.postimg.cc/Qxhf2GkB/yamaha-ybr-125-2010-739-a.jpg",
    category: "Yamaha",
    stock: 35,
  },
  {
    id: "08",
    name: "NEW CRYPTON",
    price: 4300000,
    description:
      "La Yamaha Crypton 110 es una moto urbana ligera, conocida por su motor de 4 tiempos de 110 cc, bajo consumo, mantenimiento económico y buena reventa",
    img: "https://i.postimg.cc/Nfj18gxh/mo0297.jpg",
    category: "Yamaha",
    stock: 30,
  },
];
let error = false;
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Error: no se pudo obtener los productos, intente más tarde");
      } else {
        resolve(products);
      }
    }, 1500);
  });
};
