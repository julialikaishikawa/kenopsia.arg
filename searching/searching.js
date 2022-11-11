var i = 0;

const buttonProps = [
    {
        id: 'YESearth',
        text: 'YESearth',
        route: '/searching/no-earth/noearth.html',
    },
    {
        id: 'edibles',
        text: '3Dibles',
        route: '/searching/3Dibles/3Dibles.html',
    },
    {
        id: 'infertile',
        text: '(in)fertile',
        route: '/searching/infertile/infertile.html',
    },
    {
        id: 'androids',
        text: 'androids',
        route: '/searching/androids/androids.html',
    },
    {
        id: 'cloud',
        text: 'cloud',
        route: '/searching/cloud/cloud.html',
    },
]

function move() {
  if (i === 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        
        var buttonsDiv = document.getElementById('buttons-div')
        buttonProps.forEach(({id, text, route}) => createNavigationButton(id, text, route, buttonsDiv))

      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
} 

function createNavigationButton(id, text, route, parent) {
    var button = document.createElement('button')
    button.id = id
    button.innerText = text
    parent.appendChild(button)

    button.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.replace(route)
    })
}
