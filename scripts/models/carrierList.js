var listUl = document.getElementById('carrierList');

function populateList() {
  Carrier.allCarriers.forEach(function(element) {
    var name = element.name;
    console.log(name);
    var location = element.city + ', ' + element.state + ' ' + element.zip;
    console.log(location);
    var phone = 'tel:' + element.number;
    console.log(phone);

    var entry = 'Name: ' + name + '<br>Location: ' + location + '<br><a class="phone-button" href="tel:' + phone + '">Call now</a><a class="text-button" href="sms:' + phone + '">Text now</a>';
    console.log(entry);
    var listLi = document.createElement('li');
    listLi.textContent = entry;

    listUl.append(listLi);
  });
}

populateList();