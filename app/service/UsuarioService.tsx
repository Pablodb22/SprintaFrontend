export async function registroUsuario(datos: any) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const data = await response.json(); // Parsea SIEMPRE para ver el error

    if (!response.ok) {      
      console.error("Error completo de Laravel:", data);
      throw new Error(data.message || data.error || "Error al registrar el usuario");
    }

    return data; 
  } catch (error: any) {
    console.error("Error en registroUsuario:", error);
    throw error; 
  }
}