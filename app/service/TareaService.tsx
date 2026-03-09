export async function crearTarea(tareaData: any) {
    try{

        const respuesta= await fetch('http://127.0.0.1:8000/api/crearTareas',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tareaData),
        })
        
        const data = await respuesta.json();

        if (!respuesta.ok) {
            console.error("Error completo de Laravel:", data);
            throw new Error(data.message || data.error || "Error al crear la tarea");
        }
        return data;    

    }catch(err){    
        console.error("Error en crearTarea:", err);
        return null;
    }        
}