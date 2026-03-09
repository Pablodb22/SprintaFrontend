export async function getProyectos() {

}

export async function crearProyecto(datos:any) {
    try{
        const response = await fetch(`http://127.0.0.1:8000/api/crearProyectos`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
        });
        
        const data = await response.json();

        if (!response.ok) {
        console.error("Error completo de Laravel:", data);
        throw new Error(data.message || data.error || "Error al crear el proyecto");
        }

        return data;

    }catch(error) {
        console.error("Error en crear proyecto:", error);
    }
}