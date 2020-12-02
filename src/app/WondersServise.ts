import {Injectable} from "@angular/core"
import { Miracle } from './miracle';

@Injectable()
export class WondersServise{
    wonders:Miracle[] = [];
    getData():Miracle[]{
        this.wonders.push(new Miracle("Пирамида Хеопса", "Разрушена: единственное из чудес, сохранившееся до наших дней", "../assets/1.jpg"));
        this.wonders.push(new Miracle("Висячие сады Семирамиды", "Разрушена: I в. до н. э.", "../assets/2.jpg"));
        this.wonders.push(new Miracle("Статуя Зевса в Олимпии", "Разрушена: V в.", "../assets/3.jpg"));
        this.wonders.push(new Miracle("Храм Артемиды в Эфесе", "Разрушена: 370 г. до н. э.356 г. до н. э. (Геростратом) или 262 г. н. э. (готами)", "../assets/4.jpg"));
        this.wonders.push(new Miracle("Мавзолей в Галикарнасе", "Разрушена: 1494 г.", "../assets/5.jpg"));
        this.wonders.push(new Miracle("Колосс Родосский", "Разрушена: 224 (или 226) г. до н. э. бронзовый корпус был демонтирован в 654 г. н. э.", "../assets/6.jpg"));
        this.wonders.push(new Miracle("Александрийский маяк", "Разрушена: 303 г. до н. э. — XIV в.", "../assets/7.jpg"));
        return this.wonders;
    }
}