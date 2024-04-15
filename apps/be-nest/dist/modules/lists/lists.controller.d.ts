import { ListsService } from './lists.service';
import { ListDto, CreateListDto } from './dto/list.dto';
export declare class ListsController {
    private readonly listsService;
    constructor(listsService: ListsService);
    create(createListDto: CreateListDto): string;
    findAll(): ListDto[];
    findOne(id: number): ListDto[];
    update(id: number, updateListDto: ListDto): string;
    remove(id: number): string;
}
