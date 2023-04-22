import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'RoboSite';
  Arrayurl =[
    {url:"../../assets/img1.png",desc:"Primatec est une entreprise qui fournit des solutions d'IA (intelligence artificielle) et d'apprentissage automatique aux entreprises. Ils se spécialisent dans le développement de systèmes intelligents et proposent des services tels que l'analyse de données, la modélisation prédictive et des solutions d'automatisation pour aider les entreprises à optimiser leurs opérations et à améliorer leurs processus de prise de décision. L'expertise de Primatec comprend notamment le traitement du langage naturel, la vision par ordinateur et la détection d'anomalies, entre autres."},
    {url:"../../assets/img2.jpg",desc:"Talon est une entreprise spécialisée dans l'analyse de données et la création de solutions d'IA pour les entreprises. Ils proposent des services de développement de logiciels d'IA personnalisés pour aider les entreprises à optimiser leur processus de prise de décision et à améliorer leur performance. Les compétences de Talon comprennent l'analyse de données, la modélisation prédictive, la détection d'anomalies et la recommandation personnalisée, entre autres. Ils travaillent dans des secteurs tels que la santé, l'énergie et les finances."},
    {url:"../../assets/img3.png",desc:"STB Bank est une banque qui utilise l'IA pour améliorer son efficacité et offrir des services personnalisés à ses clients. Ils utilisent des technologies d'IA pour analyser les données des clients et fournir des recommandations personnalisées en matière d'investissement et de gestion de patrimoine. STB Bank utilise également l'IA pour améliorer la sécurité bancaire en détectant les fraudes et les activités suspectes. Leur expertise en matière d'IA comprend l'apprentissage automatique, le traitement du langage naturel et l'analyse prédictive, entre autres."}
  ]

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout:10000,
    autoplaySpeed:700,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['〈','〉'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
}
