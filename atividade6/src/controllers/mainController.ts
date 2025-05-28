import { Request, Response } from "express";
import pool from "./db";

class CidadeController {
  async getCidades(req: Request, res: Response): Promise<void> {
    try {
      const query = `
        SELECT 
          nome,
          id,
          ST_AsGeoJSON(geom) as geometry
        FROM cidades
      `;
      const result = await pool.query(query);

      const geoJSON = {
        type: "FeatureCollection",
        features: result.rows.map((row) => ({
          type: "Feature",
          properties: {
            nome: row.nome,
            id: row.id
          },
          geometry: JSON.parse(row.geometry),
        })),
      };

      res.status(200).json(geoJSON);
    } catch (error) {
      console.error("Erro ao buscar cidades como GeoJSON:", error);
      res.status(500).json({
        success: false,
        message: "Erro ao buscar cidades como GeoJSON",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
  async getIncidente(req: Request, res: Response): Promise<void> {
    try {
      const cidadeId = parseInt(req.params.id);
      
      if (isNaN(cidadeId)) {
        res.status(400).json({
          success: false,
          message: 'ID da cidade deve ser um número válido'
        });
        return;
      }

      const query = `
        SELECT 
          id, 
          lon, 
          lat, 
          anual,
          jan, fev, mar, abr, mai, jun,
          jul, ago, set, out, nov, dez,
          ST_AsGeoJSON(geom) as geometry
        FROM 
          incidencias
        WHERE 
          id = $1
      `;

      const result = await pool.query(query, [cidadeId]);

      if (result.rows.length === 0) {
        res.status(404).json({
          success: false,
          message: 'Nenhuma incidência encontrada para o ID fornecido'
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: {
          ...result.rows[0],
          geometry: JSON.parse(result.rows[0].geometry)
        },
        message: 'Incidência encontrada para o ID fornecido'
      });
    } catch (error) {
      console.error('Erro ao buscar incidência por ID:', error);
      res.status(500).json({
        success: false,
        message: 'Erro ao buscar incidência por ID',
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      });
    }
  }
}

export default new CidadeController();
