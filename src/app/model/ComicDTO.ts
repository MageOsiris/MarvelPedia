import { ImageDTO }     from "./ImageDTO";

export class ComicDTO {
    id: number = 0;
    title: string = "";
    description: string = "";
    thumbnail: ImageDTO = new ImageDTO();
    format:string;
    pageCount: number = 0;
}