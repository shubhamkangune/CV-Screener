console.log("welcome to cv screener");

const data = [
  {
    name: "Sangam",
    age: 21,
    city: "Pune",
    language: "javaScript",
    frameworks: "React.js",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },

  {
    name: "Chetan",
    age: 22,
    city: "Pune",
    language: "javaScript",
    frameworks: "React.js",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },

  {
    name: "Abhi",
    age: 23,
    city: "Pune",
    language: "javaScript",
    frameworks: "React.js",
    image: "https://randomuser.me/api/portraits/men/87.jpg",
  },

  {
    name: "DK",
    age: 21,
    city: "Pune",
    language: "java",
    frameworks: "React.js",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },

  {
    name: "Radhika",
    age: 31,
    city: "Chennai",
    language: "c",
    frameworks: "Go",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },

  {
    name: "Sushant",
    age: 21,
    city: "Pune",
    language: "Python",
    frameworks: "React.js",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Rohit Sharma",
    age: 35,
    city: "Mumbai",
    language: "C++",
    frameworks: "React.js",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },

  {
    name: "Rashmika",
    age: 31,
    city: "Mumbai",
    language: "Python",
    frameworks: "Flask",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
  },
];

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const candidates = cvIterator(data);

// button listener for next button

const next = document.getElementById("next");
next.addEventListener("click", nextCv);

function nextCv() {
  const currentCandidate = candidates.next().value;

  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  image.innerHTML = `<img src='${currentCandidate.image}' class="w-32 h-32 mx-auto rounded-full" />`;
  profile.innerHTML = `
        

    <ul class="w-80 text-sm mx-auto font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Name: ${currentCandidate.name}</li>
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Age: ${currentCandidate.age} years old</li>
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">City: lives in ${currentCandidate.city} </li>
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Language: primarily works on ${currentCandidate.language}</li>
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Frameworks: with ${currentCandidate.frameworks} framework</li>
    </ul>

    
    `;
}
