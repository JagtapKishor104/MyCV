import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // message1: any;
  // message2: any;
  NUM = 0;
  // constructor() {
  //   this.message1 = "Start";
  //   this.message2="Stop"
  // }
  ngOnInit(): void {
    // var name: any = document.getElementById('getname');
    // name.onclick = function () {
    //   alert('You are Owsome');


    // }

    // var hello1: any = document.querySelector('#hello1');
    // hello1.addEventListener('click', () => {
    //   alert("i am Working");
    //   alert('are you Fine');

    // }

    // )

    // var paraname = () => {
    //   alert('Paragraph Working');
    // }

    // var para3: any = document.querySelector(".para");
    // para3.addEventListener('click', paraname);
    // const show: any = document.getElementById('num');
    // const btn1: any = document.getElementById('btn');
    // const stop: any = document.getElementById('stop')
    // var timeRef: any;
    // var NUM = 0;
    // var stop1 = () => {
    //   clearTimeout(timeRef)
    // }

    // stop.addEventListener('click', stop1)
    // var start = () => {
    //   timeRef = setInterval(() => {
    //     show.innerHTML = NUM;
    //     NUM++;
    //   }, 1000);

    // }
    // btn1.addEventListener('click', start)

    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 5,
      lazyLoad: true,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 0,

        },
        200: {
          items: 2,

        },
        400: {
          items: 5,
        }
      }
    });

  }
  title = 'Practise';
  images = [{

    img: "assets/download (1).jpg"
  },
  {
    img: "assets/download (2).jpg"
  },
  {
    img: "assets/download (3).jpg"
  },
  {
    img: "assets/download (4).jpg"
  },
  {
    img: "assets/download (5).jpg"
  },
  {
    img: "assets/download (1).jpg"

  },
  {
    img: "assets/download (2).jpg"

  }
  ]

  education = [{
    type: "Graduation",
    college_name: " Shri Chhatrapati Shivaji Mahvidyalaya,Shrigonda",
    marks: "71%"
  },
  {
    type: "H.S.C",

    college_name: " Maharaja Jivajirao Shinde Mahvidyalaya,Shrigonda",
    marks: "65%"
  },
  {
    type: "S.S.C",

    college_name: "Nutan Marathi Madhyamic Vidyalaya,Shedgaon",
    marks: "80%"
  },

  ];
  progress = [{
    value: "95",
    language: "HTML-5",
    color: "#ffce30"
  },
  {
    value: "80",
    language: "CSS-3",
    color: "e83845"

  },
  {
    language:"Bootstrap",
    value:"95",
    color:"#000000"
  },
  {
    language: "JavaScript",
    value: "60",
    color: "#e38989"

  },
  {
    language: "TypeScript",
    value: "60",
    color: "#746a80"

  },
  {
    language: "Angular-12",
    value: "80",
    color: "#800080"



  },];

  project = [
  {
    title: "Angular CRUD using Bootstrap UI",
    Language: "HTML, CSS, JavaScript, Bootstrp, TypeScript, Angular, Node JS",
    desc: "In this project we create a CRUD operations like Get, Post, Put, Delete With MongoDB as A Databas",
show:true
  },
  {
    title: "Angular CRUD using Material UI",
    Language: "HTML, CSS, JavaScript, Bootstrp, TypeScript, Angular, Node JS",
    desc: "In this project we create a filtering and sorting the employee details with CRUD operations like Get, Post, Put, Delete With MongoDB as A Database",
show:true
  },
  {
    title: "Inventory Management Sysyem",
    Language: "HTML, CSS, JavaScript, Bootstrp, PHP, Mysql",
    desc: " In Inventory Management system we store all the product details such as name, prize, image, quantity as well as customer details,vendor details, sales details.  ",
    show:false,
  },];
  training = [{
    trained: "Trained in HTML, CSS, JavaScript, Bootstrap, TypeScript and Angular in Naresh It, Ameerpet, Hyderabad. "
  },
  {
    trained: "Trainned in Special Angular-12"
  }]

}
