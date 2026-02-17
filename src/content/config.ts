import { defineCollection, z } from "astro:content";

const property = defineCollection({
  schema: z.object({
    date: z.string(),
    title: z.string(),
    img: z.string(),
    ubicacion: z.string().optional(),
    precio: z.string().optional().nullable(),
    cercaDe: z.string().optional().nullable(),
    tipoPropiedad: z.string(),
    estado: z.string(),
    areaPropiedad: z.number().optional().nullable(),
    areaConstruida: z.number().optional().nullable(),
    descripcion: z.string(),
    habitaciones: z.number().optional().nullable(),
    baños: z.number().optional().nullable(),
    parqueadero: z.number().optional().nullable(),
    videoId: z.string().optional().nullable(),
    keywords: z.string().optional(),
    // ... dentro de defineCollection
    galeria: z.union([
      // Formato actual: Array simple de fotos
      z.array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      ),
      // Formato nuevo: Array de objetos por secciones (pisos)
      z.array(
        z.object({
          tituloSeccion: z.string(), // Ejemplo: "Primer Piso"
          fotos: z.array(
            z.object({
              src: z.string(),
              alt: z.string(),
            }),
          ),
        }),
      ),
    ]),
  }),
});

export const collections = { property };
