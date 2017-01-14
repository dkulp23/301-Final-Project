// var listUl = document.getElementById('carrierList');

function populateList() {
  Carrier.allCarriers.forEach(function(element) {
    var titleEl = document.getElementById('carriersTitle');
    var name = element.name;
    // console.log(name);
    var location = element.city + ', ' + element.state + ' ' + element.zip;
    // console.log(location);
    var phone = element.number;
    // console.log(phone);

    var listLi = document.createElement('li');
    listLi.style.font = 'normal 15pt Muli';

    var entry = 'Name: ' + name + '<br>Location: ' + location + '<br><a class="contact-button" href="tel:' + phone + '"><br>Call now</a> or <a class="contact-button" href="sms:' + phone + '">Text now</a><hr>';
    listLi.innerHTML = entry;

    console.log(listLi);
    titleEl.append(listLi);
  });
}
