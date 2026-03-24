
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dotenv from "dotenv";
import { URLSearchParams } from 'url';
dotenv.config();


@Injectable()
export class NdviService {

    private accessToken: string | null=null

    async getAcccessToken(): Promise <string> {
        if(this.accessToken) return this.accessToken;

        const response = await axios.post(
             'https://services.sentinel-hub.com/oauth/token',
             new URLSearchParams({
                grant_type:  'client_credentials',
                client_id: process.env.CLIENT_ID!,
                client_secret: process.env.CLIENT_SECRET!,
             }),
             {
              headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
             }
             
        );
        this.accessToken=response.data.access_token;
                if (!this.accessToken) {
        throw new Error('Access token is not available');
        }
        return this.accessToken;
    }

  async getNdvi(boundary: any): Promise<any> {


    const token = await this.getAcccessToken()


    const correctedCordinates = boundary.coordinates[0].map(coordinate => {
      return coordinate[0]<coordinate[1]? [coordinate[1], coordinate[0]]:[coordinate[0], coordinate[1]]
    })
    const requestBody = {
      input: {
        bounds: {
          geometry: {
            type: 'Polygon',
            coordinates: [correctedCordinates],
          },
          properties: {crs: "http://www.opengis.net/def/crs/OGC/1.3/CRS84"}
        },
        data: [{
          type: 'S2L1C',
          dataFilter: {
            timeRange: {
              from: '2026-03-01T00:00:00Z',
            to: '2026-03-16T23:59:59Z',
            },
          },
        }],
      },
      output: {
        width:512,
        height: 512,
        responses: [{
          identifier: 'default',
          format: {type: "image/tiff"}
        }]
      },
      evalscript: `
      //VERSION=3
      function setup() {
        return {
          input: ["B04", "B08"],
          output: { bands: 1, sampleType: "FLOAT32" }
        };
      }
      function evaluatePixel(sample) {
        let ndvi = (sample.B08 - sample.B04) / (sample.B08 + sample.B04);
        return [ndvi];
      }
    `,
    };
    try {
    const response = await axios.post(
      'https://services.sentinel-hub.com/api/v1/process',
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'image/tiff', 
        },
        responseType: 'arraybuffer', 
      },
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error Data:", Buffer.from(error.response.data).toString());
    }
    throw error;
  }
}
}