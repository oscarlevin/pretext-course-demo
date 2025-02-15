var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-syllabus",
  "level": "1",
  "url": "ch-syllabus.html",
  "type": "Chapter",
  "number": "1",
  "title": "Course Syllabus",
  "body": " Course Syllabus  Welcome to the course.   Course Information  This course is about magic beans. And about how bad copilot is at writing syllabi.    Grading  This course has no grades because it is just a demo.   "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "2.1",
  "title": "Week 1",
  "body": " Week 1  This week we covered the following topics:  "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "2.2",
  "title": "Week 2",
  "body": " Week 2  This week we covered the following topics in the second week.  "
},
{
  "id": "Activity-magic-beans",
  "level": "1",
  "url": "Activity-magic-beans.html",
  "type": "Worksheet",
  "number": "3.1",
  "title": "Magic Beans",
  "body": " Magic Beans   You have traded your cow for 5 magic chocolate covered espresso beans. Each night at midnight, each bean splits into three beans. To take advantage of this, you eat 8 beans each morning for breakfast. You wonder how many beans you will have after breakfast 30 days after you traded your cow.  Let be the sequence of number of beans you have days after trading your cow, (after breakfast, before midnight; take ).     Write out the first few terms of the sequence. Then give a recursive definition for the sequence and explain how you know it is correct.    What do you notice about all elements of the sequence? Will they all be ...? Prove your conjecture by mathematical induction.      Find a closed formula for and prove it is correct using induction.    "
},
{
  "id": "Activity-magic-beans-3-1",
  "level": "2",
  "url": "Activity-magic-beans.html#Activity-magic-beans-3-1",
  "type": "Worksheet Exercise",
  "number": "3.1.1",
  "title": "",
  "body": " Write out the first few terms of the sequence. Then give a recursive definition for the sequence and explain how you know it is correct.  "
},
{
  "id": "Activity-magic-beans-3-2",
  "level": "2",
  "url": "Activity-magic-beans.html#Activity-magic-beans-3-2",
  "type": "Worksheet Exercise",
  "number": "3.1.2",
  "title": "",
  "body": " What do you notice about all elements of the sequence? Will they all be ...? Prove your conjecture by mathematical induction.  "
},
{
  "id": "Activity-magic-beans-4-1",
  "level": "2",
  "url": "Activity-magic-beans.html#Activity-magic-beans-4-1",
  "type": "Worksheet Exercise",
  "number": "3.1.3",
  "title": "",
  "body": " Find a closed formula for and prove it is correct using induction.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
