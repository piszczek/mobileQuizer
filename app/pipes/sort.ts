import { Pipe } from "angular2/core";

@Pipe({
    name: "sort"
})
export class ArraySortPipe {
    transform(array: Array<string>, args: string): Array<string> {
        array.sort((a: any, b: any) => {
            let values = [-1,0,1];

            return values[Math.floor(Math.random() * values.length)];
        });
        return array;
    }
}