import {Pipe} from  'angular2/core';

@Pipe({
    name:"orderByProp"
})
export class OrderByPropPipe{
    transform(items, [prop,direction]){
        if(items!=null){
            items.sort(function (a, b) {
                return (a[prop] > b[prop] ? 1 : -1);
            });
            if(direction=="DESC") items.reverse();
                return items;
        }
     }
}


