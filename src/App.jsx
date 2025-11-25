import { productos } from "./data";


function Productos({ productos, size }) {
    return (
        <div
            style={{
                background: "#1a1a1a",
                padding: "20px",
                borderRadius: "15px",
                width: "fit-content",
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                transition: "0.3s",
                marginBottom: "20px"
            }}
        >
            <div style={{ textAlign: "center" }}>
                <h3
                    style={{
                        fontSize: "28px",
                        color: "#ff4be0",
                        fontFamily: "Poppins, Arial",
                        marginBottom: "10px"
                    }}
                >
                    {productos.title}
                </h3>

                <img
                    src={productos.images}
                    alt={productos.title}
                    width={size}
                    height={size}
                    style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                        marginBottom: "10px"
                    }}
                />
            </div>

            <div>
                <h4
                    style={{
                        fontSize: "16px",
                        fontFamily: "Poppins, Arial",
                        color: "#7abfff",
                        marginBottom: "5px"
                    }}
                >
                    {productos.description}
                </h4>

                <p
                    style={{
                        fontFamily: "Poppins, Verdana",
                        color: "white",
                        background: "#ff0077",
                        padding: "10px 15px",
                        borderRadius: "10px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        display: "inline-block",
                        marginTop: "5px"
                    }}
                >
                    Precio: ${productos.price}
                </p>
            </div>
        </div>
    );
}




export default function Product() {
    return (
        productos.map(producto => (
            <Productos
                key={producto.id}
                productos={{
                    title: producto.title,
                    description: producto.description,
                    price: producto.price,
                    images: producto.images
                }}
                size={200}
            />
        ))
    )
}
