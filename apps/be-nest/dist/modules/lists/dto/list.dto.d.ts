export declare class ListDto {
    id: number;
    title: string;
}
declare const CreateListDto_base: import("@nestjs/mapped-types").MappedType<Omit<ListDto, "id">>;
export declare class CreateListDto extends CreateListDto_base {
}
declare const UpdateListDto_base: import("@nestjs/mapped-types").MappedType<Omit<ListDto, "id">>;
export declare class UpdateListDto extends UpdateListDto_base {
}
export {};
