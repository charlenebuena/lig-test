import { Component } from '@angular/core';

@Component({
    selector: 'app-item-block',
    templateUrl: './item-block.component.html',
    styleUrls: ['./item-block.component.scss']
})
export class ItemBlockComponent {
    sampleTitle = 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト';
    sampleSubTitle = 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト…';

    limitCharacters() {
        return this.sampleTitle.substring(0, 150);
    }
}
