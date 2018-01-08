export class Painel_ {
    title: string;
    border_color: string;
    back_color_header: string;
    color_title: string;
    icon: string;

    /**
     * Classe modelo do painel
     * @constructor
     * */
    constructor( title, border_color, back_color_header, color_title, icon ){
        this.title = title;
        this.border_color = border_color;
        this.back_color_header = back_color_header;
        this.color_title = color_title;
        this.icon = icon;
    }
}


