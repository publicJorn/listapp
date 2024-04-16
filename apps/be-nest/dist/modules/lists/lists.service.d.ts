import { Repository } from 'typeorm';
import { CreateListDto, UpdateListDto } from './dto/list.dto';
import { List } from './entities/list.entity';
export declare class ListsService {
    private listRepo;
    constructor(listRepo: Repository<List>);
    findAll(): Promise<List[]>;
    findOne(id: number): Promise<List>;
    create(createListDto: CreateListDto): Promise<string>;
    update(id: number, listDto: UpdateListDto): Promise<string>;
    remove(id: number): Promise<string>;
}
