import { ListsService } from './lists.service';
import { CreateListDto, UpdateListDto } from './dto/list.dto';
export declare class ListsController {
    private readonly listsService;
    constructor(listsService: ListsService);
    findAll(): Promise<import("./entities/list.entity").List[]>;
    findOne(id: number): Promise<import("./entities/list.entity").List>;
    create(createListDto: CreateListDto): Promise<string>;
    update(id: number, updateListDto: UpdateListDto): Promise<string>;
    remove(id: number): Promise<string>;
}
