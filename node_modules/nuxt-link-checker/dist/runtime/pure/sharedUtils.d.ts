export interface CreateFilterOptions {
    include?: (string | RegExp)[];
    exclude?: (string | RegExp)[];
}
export declare function createFilter(options?: CreateFilterOptions): (path: string) => boolean;
