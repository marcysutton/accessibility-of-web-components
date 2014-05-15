(function(window, document, undefined){

  var randomImg = new RandomImg();
  var workspace = document.createElement('div');
  document.body.appendChild(workspace);

  var TacoButtonPrototype = Object.create(HTMLButtonElement.prototype);
  var TacoButton = document.registerElement('taco-button', {
    prototype: TacoButtonPrototype,
    extends: 'button'
  });
  var tacoButton = new TacoButton();
  workspace.appendChild(tacoButton).textContent = 'Give me tacos';
  tacoButton = workspace.querySelector('button[is=taco-button]');
  tacoButton.addEventListener('click', function(){
    randomImg.showTacos(document);
  })
  tacoButton.addEventListener('keydown', function(event){
    if(event.which){
      console.log(event.which);
    }
    randomImg.showTacos(document);
  })
  console.log(tacoButton);

})(window, window.document);