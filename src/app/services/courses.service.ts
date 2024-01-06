import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses = [
    {
      id: 101,
      name: 'Indian Food Details',
      author: 'Ishita Majila',
      ratings: 3.5,
      image: 'assets/images/ind.jpeg',
      description:
        'Many types of meat are used for Indian cooking, but chicken and mutton tend to be the most commonly consumed meats. Fish and beef consumption are prevalent in some parts of India, but they are not widely consumed except for coastal areas, as well as the north east. Lentils are a staple ingredient in Indian cuisine.',
    },
    {
      id: 102,
      name: 'Famous Junk Food',
      author: 'Miss Sinha',
      ratings: 4.5,
      image: 'assets/images/junk.jpeg',
      description:
        'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step',
    },
    {
      id: 103,
      name: 'Healthy Food',
      author: 'Mr. Ray',
      ratings: 4.0,
      image: 'assets/images/heal.jpeg',
      description:
        'A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.',
    },
    {
      id: 104,
      name: 'North Indian Food',
      author: 'Dr. Banerjee',
      ratings: 4.8,
      image: 'assets/images/north.jpeg',
      description:
        'Staple Foods North Indians Seem to Prefer This region is home to the tandoori roti and naans, stuffed parathas.'
    },
    {
      id: 105,
      name: 'South Indian Food',
      author: 'Mallika SG',
      ratings: 4.5,
      image: 'assets/images/south.jpeg',
      description:
        'South Indian food is known for the use of generous coconut in their curries. Other basic and common ingredients include curry leaves, mustard oil, red chillies and oil etc. Here we have tried to demystify and explain the different cuisines of South India.',
    },
    
  
    {
      id: 108,
      name: 'Chinese Food',
      author: 'Chung Lee',
      ratings: 4.8,
      image: 'assets/images/chin.jpeg',
      description:
        'Chinese food staples such as rice, soy sauce, noodles, tea, chili oil, and tofu, and utensils such as chopsticks and the wok, can now be found worldwide'
    },
    
  ];
}
