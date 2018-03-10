import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  peoples = [{
    name: "ליליקה",
    description: "!שאף אחת לא תעיז להתחתן בשנה שלי",
    img: "../../assets/ליליקה.jpg",
    cssClass: "p1"
  }, {
    name: "סתותיני",
    description: "!?מה את עושה",
    img: "../../assets/סתותיני.jpg",
    cssClass: "p2"
  }, {
    name: "גראסמין",
    description: "ברז השופכין של בית הספר",
    img: "../../assets/גראסמין.jpg",
    cssClass: "p3"
  }, {
    name: "נטע בקטע",
    description: "אבא שלי הישראלי הראשון בקוס",
    img: "../../assets/נטע בקטע.jpg",
    cssClass: "p4"
  }, {
    name: "שומינה",
    description: "!מרק",
    img: "../../assets/שומינה.jpg",
    cssClass: "p5"
  }, {
    name: "רעות",
    description: "Data scientist אוף בא לי להיות",
    img: "../../assets/רעות.jpg",
    cssClass: "p6"
  }, {
    name: "תותה מבסוטה",
    description: "?הלו",
    img: "../../assets/תותה מבסוטה.jpg",
    cssClass: "p7"
  }, {
    name: "אדרת",
    description: "אני רק מידה 40, אין לי רגליים גדולות",
    img: "../../assets/אדרת.jpg",
    cssClass: "p8"
  }]

  ngOnInit() {


  }

}
