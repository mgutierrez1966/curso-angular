import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'mititlecase'
})


export class TitleCasePipe implements PipeTransform {
    
    transform(text: string) {

        if (!text)
            return text;

        let words = text.split(" ");
        let finalText = "";


        words.forEach((element, index) => {
            finalText += (finalText.length >0)? " ": "";
            if (index > 0 && this.isPreposition(element)){
                finalText += element.toLowerCase();
                
            } else if (element.length > 0) {
                finalText += this.toTitleCase(element);
            }
        });
        
        return finalText;

    }

    

    private isPreposition(element: string) {
        return ["the", "of"].includes(element.toLowerCase());
    }

    private toTitleCase(word: string) {
        return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
}