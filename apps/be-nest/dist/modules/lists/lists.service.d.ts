import { ListDto, CreateListDto, UpdateListDto } from './dto/list.dto';
export declare class ListsService {
    private readonly lists;
    create(createListDto: CreateListDto): string;
    findAll(): ListDto[];
    findOne(id: number): ListDto[];
    update(id: number, listDto: UpdateListDto): string;
    remove(id: number): string;
}
