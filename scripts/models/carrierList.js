// var listUl = document.getElementById('carrierList');

function populateList() {
  Carrier.allCarriers.forEach(function(element) {
    var titleEl = document.getElementById('carriersTitle');
    var name = element.name;
    var location = element.city + ', ' + element.state + ' ' + element.zip;
    var phone = element.number;

    var listLi = document.createElement('li');
    listLi.style.font = 'normal 15pt Muli';

    var entry = 'Name: ' + name + '<br>Location: ' + location + '<br><a class="contact-button" href="tel:' + phone + '"><br>Call now</a> or <a class="contact-button" href="sms:' + phone + '">Text now</a><hr>';
    listLi.innerHTML = entry;

    titleEl.append(listLi);
  });
}
