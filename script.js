// Add your javascript here. Plagiarism will NOT be tolerated!

// MOCK DATA
var user = {
  name: "Steve",
  surname: "Rogers",
  email: "srogers@avengers.com",
  alias: "Cap. America",
  avatar:
    "https://pm1.narvii.com/6666/c8170e7fa7acdf253d7c0f5c94425f75910aa1ce_00.jpg",
  isPremium: false,
  eventsToAttend: [],
};

var eventTypes = [
  {
    id: 1,
    name: "MeetUp",
    standOut: false,
  },
  {
    id: 2,
    name: "Leap",
    standOut: true,
  },
  {
    id: 3,
    name: "Recruiting Mission",
    standOut: true,
  },
  {
    id: 4,
    name: "VanHackaton",
    standOut: true,
  },
  {
    id: 5,
    name: "Webminar",
    standOut: false,
  },
];

var events = [
  {
    id: 0001,
    eventTypeId: 1,
    cover:
      "https://www.ttrweekly.com/site/wp-content/uploads/2018/06/Argentina.jpg",
    name: "Buenos Aires MeetUp",
    description:
      "At the Meetup, you’ll have the opportunity to be part of a live Recruiting Fair where you will see opportunities from companies in Canada and Europe looking for talents just like you.",
    country: "Argentina",
    location: "Buenos Aires",
    premiumOnly: false,
    date: new Date(2020, 09, 02, 09, 00).toISOString(),
  },
  {
    id: 0002,
    eventTypeId: 2,
    cover: "https://catalogue.novascotia.com/ManagedMedia/24191.jpg",
    name: "Leap Halifax",
    description:
      "VanHack Leap is an in-person event over 4-5 days and it is an amazing opportunity for developers, data scientists, DevOps engineers, and senior tech talent from around the world to meet top tech-based companies (startups and enterprise) and conduct face to face interviews.",
    country: "Canada",
    location: "Halifax, NS",
    premiumOnly: false,
    date: new Date(2020, 10, 17, 07, 00).toISOString(),
  },
  {
    id: 0003,
    eventTypeId: 3,
    cover:
      "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-sao-paulo-capa2019-02-820x430.jpg",
    name: "Mission Sao Paulo",
    description:
      "VanHack is bringing to São Paulo on October 02nd a Recruiting Mission for Tech Talents who want to fuel the growth of Canada’s and Europe’s tech market. Some of the best companies in North America and Europe will be attending the fair, in hopes of filling over 100 positions.",
    country: "Brazil",
    location: "Sao Paulo",
    premiumOnly: false,
    date: new Date(2020, 09, 02, 09, 00).toISOString(),
  },
  {
    id: 0004,
    eventTypeId: 4,
    cover:
      "https://blog.fluencypass.com/wp-content/uploads/2017/07/about-vancouver-facebook-size-2-1024x535.jpg",
    name: "Vanhackaton",
    description:
      "The VanHackathon is for developers and designers who want to get hired abroad. We’ll also have 3-5 companies from Canada and Europe who are looking for great tech talent to add to their teams. It will be held on September 1st.",
    country: "",
    location: "Online",
    premiumOnly: false,
    date: new Date(2020, 11, 01, 09, 00).toISOString(),
  },
  {
    id: 0005,
    eventTypeId: 5,
    cover:
      "https://i2.wp.com/www.zoom-comics.com/wp-content/uploads/sites/36/2014/12/Tony-Stark-has-a-house-party-in-waiting.jpg",
    name: "5 steps to get your job abroad",
    description:
      "Tony Stark (a genius, billionaire, playboy, philanthropist) will reveal his 5 main tricks to get a job abroad.",
    country: "",
    location: "Online",
    premiumOnly: true,
    date: new Date(2020, 10, 25, 09, 00).toISOString(),
  },
  {
    id: 0006,
    eventTypeId: 5,
    cover:
      "https://img1.looper.com/img/gallery/false-things-you-believe-about-black-widow/intro-1589569100.jpg",
    name: "How to rock in your technical interview",
    description:
      "Natasha Romanoff is going to introduce hers best tips to nail in your technical interview.",
    country: "",
    location: "Online",
    premiumOnly: false,
    date: new Date(2020, 07, 12, 13, 00).toISOString(),
  },
  {
    id: 0007,
    eventTypeId: 2,
    cover:
      "https://www.123dentist.com/wp-content/uploads/2019/07/winnipeg-manitoba.jpg",
    name: "Leap Winnipeg",
    description:
      "VanHack Leap is an in-person event over 4-5 days and it is an amazing opportunity for developers, data scientists, DevOps engineers, and senior tech talent from around the world to meet top tech-based companies (startups and enterprise) and conduct face to face interviews.",
    country: "Canada",
    location: "Winnipeg, MB",
    premiumOnly: false,
    date: new Date(2020, 11, 04, 12, 00).toISOString(),
  },
];

// FUNCTIONS

loadUserData(user);
loadEvents(events, eventTypes);

// Load events'data cards inside main element
function loadEvents(events, eventTypes) {
  let mainEventIds = eventTypes
    .filter((type) => type.standOut)
    .map((type) => type.id);

  let eventsOrderedByTypeAnDate = events
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .sort((a) => (mainEventIds.includes(a.eventTypeId) ? -1 : 1));

  let highlightedEvents = eventsOrderedByTypeAnDate.slice(0, 3);

  highlightedEvents.forEach((mainEvent, idx) => {
    let hero = document.body.querySelector(
      `.content .highlight .card:nth-child(${idx + 1})`
    );

    if (mainEvent.premiumOnly) {
      let premiumBadge = document.createElement("span");
      premiumBadge.classList.add("premium-only");
      hero.querySelector(".notification").appendChild(premiumBadge);
    }

    let [
      month,
      day,
      eventType,
      eventName,
      locationTimeAndDate,
    ] = hero.querySelectorAll(".event-details span");

    hero.style.backgroundImage = `linear-gradient(rgba(0,0,0, 0.1), rgba(0,0,0, 0.9)), url('${mainEvent.cover}')`;
    month.innerText = new Date(mainEvent.date).toDateString().split(" ")[1];
    day.innerText = new Date(mainEvent.date).toDateString().split(" ")[2];
    eventType.innerText = eventTypes
      .find((types) => types.id === mainEvent.eventTypeId)
      .name.toUpperCase();
    eventName.innerText = mainEvent.name;
    locationTimeAndDate.innerText = `${mainEvent.location === "Online" ? mainEvent.location : `${mainEvent.location}, ${mainEvent.country}` } - ${new Date(
      mainEvent.date
    )
      .toLocaleTimeString()
      .replace(":00 ", " ")}`;
    hero.onclick = function () {
      showEventDetails(mainEvent.id);
    };
  });

  let otherEvents = eventsOrderedByTypeAnDate.slice(3);

  otherEvents.forEach((event) => {
      let cardDiv = document.createElement('div');
      let notification = document.createElement('div');
      let cardContent = document.createElement('div');
      let eventDate = document.createElement('div');
      let eventDetails = document.createElement('div');
      let otherEventsContainer = document.querySelector('.other-events');

      
      let { date, name, eventTypeId, location, country } = event;

      let locationWithCountry = country ? `${location}, ${country}` : location; 
      
      let [, month, day, ] = new Date(date).toDateString().split(" ");

      cardDiv.classList.add('card');

      if(mainEventIds.includes(eventTypeId)) {
        cardDiv.classList.add('stand-out');
        cardDiv.style.backgroundImage = `url('${ event.cover }')`;
      } else {
        cardDiv.classList.add('regular');
      }

      eventDate.classList.add('event-date');
      eventDetails.classList.add('event-details');
      cardContent.classList.add('card-content');
      notification.classList.add('notification');

      if(event.premiumOnly) {
        let span = document.createElement('span');
        span.classList.add('premium-only');
        notification.appendChild(span);
      }

      [eventTypes.find(event => event.id === eventTypeId).name, name, locationWithCountry].forEach(content => {
        let span = document.createElement('span');
        span.innerText = content;
        eventDetails.appendChild(span);
      });

      [month, day].forEach(content => {
        let span = document.createElement('span');
        span.innerText = content;
        eventDate.appendChild(span);
      });

      cardContent.appendChild(eventDate);
      cardContent.appendChild(eventDetails);

      cardDiv.appendChild(notification);
      cardDiv.appendChild(cardContent);

      cardDiv.onclick = function () {
        showEventDetails(event.id);
      };

      otherEventsContainer.appendChild(cardDiv);
  })
}

// Load user's data inside his profile div
function loadUserData(user) {
    let profileElements = document.body.querySelector(".sidebar .profile")
      .children;
  
    profileElements[0].style.backgroundImage = `url('${user.avatar}')`;
    profileElements[1].innerText = `${user.name} ${user.surname}`;
    profileElements[2].innerText = user.email;
  
    handlePremium(profileElements[3], user);
  }

// Transform event types into id-like strings
function lowercaseAndHyphenated(name) {
  let newName = name.replace(" ", "-").toLowerCase();
  return newName;
}

// Check if the user is premium and add a badge
function handlePremium(node, user) {
  node.classList.add(user.isPremium ? "premium" : "default");

  let slider = node.nextElementSibling.querySelector("input[type=checkbox]");

  slider.addEventListener("click", function () {
    user.isPremium = slider.checked;
    node.classList.toggle("premium");
  });

  node.classList.remove(user.isPremium ? "default" : "premium");
}

// Show Event Details function
function showEventDetails(id) {
  let details = document.body.querySelector(".details");
  let detailsClose = document.body.querySelector(".details-close-button");

  let image = document.body.querySelector(".details-image");
  let title = document.body.querySelector(".details-title .title");
  let type = document.body.querySelector(".details-title .type");
  let dateTimeAndLocation = document.body.querySelector(
    ".details-title .subtitle"
  );
  let description = document.body.querySelector(".details-description");

  let selectedEvent = events.find((event) => event.id === id);

  let [, month, day, year] = new Date(selectedEvent.date)
    .toDateString()
    .split(" ");

  image.style.backgroundImage = `url('${selectedEvent.cover}')`;
  title.innerText = selectedEvent.name;
  type.innerText = eventTypes
    .find((type) => type.id === selectedEvent.eventTypeId)
    .name;
  dateTimeAndLocation.innerText = `${selectedEvent.location === "Online" ? selectedEvent.location : selectedEvent.location + ", " + selectedEvent.country}
  ${month} ${day}, ${year} ${new Date(selectedEvent.date).toLocaleTimeString().replace(":00 ", " ")}`;
  description.innerText = selectedEvent.description;

  if (selectedEvent.premiumOnly) {
    let premiumBadge = document.body.querySelector(
      ".details .details-title span:last-child"
    );
    premiumBadge.classList.add("premium-only");
  } else {
    let premiumBadge = document.body.querySelector(
      ".details .details-title span:last-child"
    );
    premiumBadge.setAttribute("class", "");
  }

  detailsClose.addEventListener("click", function () {
    return details.classList.remove("show");
  });

  details.classList.add("show");

  buttonGenerator(selectedEvent);
  socialShareLinks(selectedEvent);
}

// Apply to Event button action function
function applyToEvent(id) {
  let selectedEvent = events.find((event) => event.id === id);

  if (selectedEvent.premiumOnly && !user.isPremium) {
    let blocker = document.body.querySelector(".blocker");
    blocker
      .querySelector(".close-button span")
      .addEventListener("click", function () {
        blocker.classList.add("hidden");
      });
    return blocker.classList.remove("hidden");
  }

  if (!user.eventsToAttend.includes(selectedEvent)) {
    user.eventsToAttend.push(selectedEvent);
    attendedEventsSidebar(user.eventsToAttend);
  } else {
    user.eventsToAttend = user.eventsToAttend.filter(
      (event) => event !== selectedEvent
    );
    let selectCardToRemove = document.body.querySelector(
      `.sidebar .events div#event${selectedEvent.id}`
    );
    selectCardToRemove.remove();
  }

  buttonGenerator(selectedEvent);
}

// Create the attended events cards on app's sidebar
function attendedEventsSidebar(eventsToAttend) {
  let i = 0;
  let eventsSidebar = document.body.querySelector(".sidebar .events");
  let newCard = document.createElement("div");
  let eventDate = document.createElement("div");
  let eventDetails = document.createElement("div");

  eventsToAttend.forEach((event) => {
    eventsSidebar.appendChild(newCard);

    newCard.classList.add("card");
    newCard.id = `event${event.id}`;

    newCard.appendChild(eventDate);
    newCard.appendChild(eventDetails);

    eventDate.classList.add("event-date");
    eventDetails.classList.add("event-details");

    while (i < 2) {
      eventDate.appendChild(document.createElement("span"));
      eventDetails.appendChild(document.createElement("span"));
      i++;
    }

    let [monthSpan, daySpan] = eventDate.querySelectorAll("span");
    let [nameSpan, locationSpan] = eventDetails.querySelectorAll("span");

    let [, month, day] = new Date(event.date).toDateString().split(" ");

    monthSpan.innerText = month;
    daySpan.innerText = day;

    nameSpan.innerText = event.name;
    locationSpan.innerText = event.location;
    newCard.onclick = function() {
        showEventDetails(event.id);
    }
  });
}

// Conditionary Button Generator function
function buttonGenerator(vanhackEvent) {
  let applyButton = document.body.querySelector("#apply-to-event-button");
  let appliedEvents = user.eventsToAttend;

  let { id } = vanhackEvent;

  if (!appliedEvents.includes(vanhackEvent)) {
    applyButton.classList.add("to-apply");
    applyButton.classList.remove("applied");

    applyButton.onclick = function () {
      applyToEvent(id);
    };
  } else {
    applyButton.classList.add("applied");
    applyButton.classList.remove("to-apply");

    applyButton.onclick = function () {
      applyToEvent(id);
    };
  }

  return applyButton;
}

// Social Share button creator/handler function
function socialShareLinks({ name, location }) {
  let facebook = document.body.querySelector("#facebook-share");
  let twitter = document.body.querySelector("#twitter-share");
  let telegram = document.body.querySelector("#telegram-share");

  let text = `I am attending to Vanhack's ${name} ${
    location === "Online" ? location : "in " + location
  }. Come with me clicking on this link!`;

  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params = `menubar=no,toolbar=no,status=no,width=570,height=570,top=${top},left=${left}`;

  facebook.addEventListener("click", function () {
    let url = encodeURIComponent(document.URL);
    url = `https://www.facebook.com/sharer.php?u=${url}`;
    window.open(url, "NewWindow", params);
  });

  telegram.addEventListener("click", function () {
    let url = encodeURIComponent(document.URL);
    let encodedText = encodeURIComponent(text);
    url = `https://t.me/share/url?url=${url}&text=${encodedText}`;
    window.open(url, "NewWindow", params);
  });

  twitter.addEventListener("click", function () {
    let url = encodeURIComponent(document.URL);
    url = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(url, "NewWindow", params);
  });
}
