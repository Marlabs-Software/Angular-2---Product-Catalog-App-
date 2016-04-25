import {Pipe} from 'angular2/core';

@Pipe({
    name:"searchByProp"
})
export class SearchByPropPipe{
    transform(items, [searchText]){
        if(items!=null){
            return items.filter((item)=>item.Name.toLowerCase().startsWith(searchText.toLowerCase()));
        }
    }
}