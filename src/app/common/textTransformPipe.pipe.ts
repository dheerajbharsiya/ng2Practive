import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'transFormPrice'
})
export class TextTransformPipe implements PipeTransform {
    transform(value, discount) {
        if(discount) {
            return value-discount;
        } else {
            return value-100;
        }
    }
}