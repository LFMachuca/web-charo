const cursos = [
    {
        titulo: "Croissants Clásicos",
        descripcion: "Aprende la técnica tradicional francesa para crear croissants perfectamente laminados.",
        precio: "$299",
        img: "/img/curso1.jpg"
    },
    {
        titulo: "Laminado nivel 1",
        descripcion: "Aprende la técnica tradicional francesa para crear croissants perfectamente laminados.",
        precio: "$299",
        img: "/img/curso2.jpg"
    },
    {
        titulo: "Laminados nivel 2",
        descripcion: "Aprende la técnica tradicional francesa para crear croissants perfectamente laminados.",
        precio: "$299",
        img: "/img/curso3.jpg"
    }
];
const asesoriaServicios=[
    "Optimización de recetas y procesos",
    "Desarrollo de menú",
    "Control de costos y rentabilidad",
    "Técnicas avanzadas de laminado",
    "Resolución de problemas comunes"
]
// Render de los cursos
function cursosRender(){
    const  cursosGrid = document.getElementById("gridCursos");

    cursosGrid.innerHTML = cursos.map(curso =>`
        <div class ="curso-card">
        <img src="${curso.img}" alt="${curso.titulo}">
        <div class="curso-contenido">
        <h3>${curso.titulo}</h3>
        <p>${curso.descripcion}</p>
         <div class="curso-footer">
            <span class="precio">${curso.precio}</span>
            <button class="btn">Mas Info</button>
         </div>
        </div>
        </div>
        `).join('');
}
// render de los servicios 
function serviciosRender(){
    const listaServicios= document.getElementById("listaServicios");

    listaServicios.innerHTML = asesoriaServicios.map(lista => `
        <li><i class="fa-solid fa-pencil fa-lg" style="color: #e15b5b;"></i>${lista}</li>
        `).join('');
}

document.addEventListener('DOMContentLoaded',()=>{
    cursosRender();
    serviciosRender();
});
