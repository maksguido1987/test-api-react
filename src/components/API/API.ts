import { IPicture } from '../utils/types';

class Api {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  async getAlbumNumbers(): Promise<number[]> {
    try {
      const response = await fetch(`${this.baseUrl}/photos`);
      const data: IPicture[] = await response.json();
      const albumNumbers = data.map((item) => item.albumId);
      return Array.from(new Set(albumNumbers));
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async getAllPictures(page = 1): Promise<IPicture[]> {
    try {
      const response = await fetch(`${this.baseUrl}/photos?_page=${page}`);
      const data: IPicture[] = await response.json();
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async deletePicture(id: number): Promise<{}> {
    try {
      const response = await fetch(`${this.baseUrl}/photos/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async sortByAlbumId(id: number, page: number): Promise<IPicture[]> {
    try {
      const response = await fetch(`${this.baseUrl}/albums/${id}/photos?_page=${page}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

const api = new Api();

export default api;
