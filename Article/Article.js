// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement
    // create a reference to the ".expandButton" class. 
    this.expandButton =  this.domElement.querySelector('.expandButton')
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "Click to Expand"
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle())
    
    let closeBtn = document.createElement('button')
    closeBtn.textContent = "X"
    closeBtn.classList.add('close')
    this.domElement.appendChild(closeBtn)
    closeBtn.addEventListener('click', () => this.closeArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open')
    let classList = Array.from(this.domElement.classList)
    if(classList.includes('article-open')){
      this.expandButton.textContent = "Click to Close"
    }else{
      this.expandButton.textContent = "Click to Expand"
    }
  }

  closeArticle(){
    this.domElement.classList.add('article-remove')
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/
let articles = document.querySelectorAll('.article')
console.log(articles)

articles.forEach(item => {
  return new Article(item)//?
})


// Stretch ArticleComponents
let articleArr = [
  {header: "Lambda School Students: We're the best!",
   date: "Nov 5th, 2017",
   htmlText: "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twilek. Ben amidala secura skywalker landomoff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonnjar twi'lek jinn leia jango skywalker mon."
  },
  {header: "Javascript and You, ES6",
   date: "Nov 7th, 2017",
   htmlText: "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twilek. Ben amidala secura skywalker landomoff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonnjar twi'lek jinn leia jango skywalker mon."
  },
  {header: "React vs Angular vs Vue",
   date: "Nov 7th, 2017",
   htmlText: "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twilek. Ben amidala secura skywalker landomoff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonnjar twi'lek jinn leia jango skywalker mon."
  },
  {header: "Professional Software Development in 2018",
   date: "Nov 7th, 2017",
   htmlText: "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twilek. Ben amidala secura skywalker landomoff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonnjar twi'lek jinn leia jango skywalker mon."
  },
  {header: "What is Lorem Ipsum are you Another?",
   date: "Nov 7th, 2017",
   htmlText: "Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twilek. Ben amidala secura skywalker landomoff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonnjar twi'lek jinn leia jango skywalker mon."
 },
]

class ArticleComponent{
  constructor(itemData, index){
    this.scope = this;
    this.container = this.createElement('div', 'article',"")
    this.header = this.createElement('h2', "", itemData.header)
    this.date = this.createElement('p', "date", itemData.date)
    this.htmlText = this.createElement('p', "", itemData.htmlText)
    this.expandButton = this.createElement('span', "expandButton", "Click to Expand", this.expandArticle)
    this.closeButton = this.createElement('button', "close", "X",  this.closeArticle)

    this.container.appendChild(this.header)
    this.container.appendChild(this.date)
    this.container.appendChild(this.htmlText)
    this.container.appendChild(this.expandButton)
    this.container.appendChild(this.closeButton)

    console.log(this.container)
    return this.container
  }
  createElement(tagName, className="", textContent="", cb=null){
    let element = document.createElement(tagName)
    if(className){
      element.classList.add(className)
    }
    element.textContent = textContent
    if(cb){
      element.addEventListener('click', cb.bind(this))
    }
    return element
  }

  expandArticle() {
    this.container.classList.toggle('article-open')
    let classList = Array.from(this.container.classList)
    if(classList.includes('article-open')){
      this.expandButton.textContent = "Click to Close"
    }else{
      this.expandButton.textContent = "Click to Expand"
    }
  }

  closeArticle(){
    this.container.classList.add('article-remove')
  }
}

let articleComponents = document.querySelectorAll('.articles')[0]
console.log(articleComponents)
articleArr.forEach((itemData, index) => {
  articleComponents.appendChild(new ArticleComponent(itemData, index))
})

// ADD article button
let addArticleBtn = document.querySelectorAll('#addArticleBtn')[0]
console.log('addArticleBtn clickedaddArticleBtn', addArticleBtn);

addArticleBtn.addEventListener('click', function(){
  addArticle.apply() 
})


function addArticle(){
  articleComponents.appendChild(new ArticleComponent(
    {header: "This is another subject",
    date: "March 6, 2019",
    htmlText: "Here is the test tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari. Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonnjar twi'lek jinn leia jango skywalker mon."
    },
  ))
}

