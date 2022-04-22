import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {


  }
  ngOnInit(): void {

    var name: any = document.getElementById('getname');
    name.onclick = function () {
      alert('You are Owsome');
    }

    var hello1: any = document.querySelector('#hello1');
    hello1.addEventListener('click', () => {
      alert("i am Working");
      alert('are you Fine');
    }

    )

    var paraname = () => {
      alert('Paragraph Working');
    }

    var para3: any = document.querySelector(".para");
    para3.addEventListener('click', paraname);

  }
  title = 'Practise';

}
