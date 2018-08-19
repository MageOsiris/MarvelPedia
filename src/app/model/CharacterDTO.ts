import { ImageDTO }     from "./ImageDTO";

export class CharacterDTO {
    id: number = 0;
    name: string = "";
    description: string = "";
    thumbnail: ImageDTO = new ImageDTO();
}