

const people = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQHGGQlgjOp0uQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716038859902?e=1730332800&v=beta&t=qtMY4h0dtQDy6I_351kIBij_jzMka5MlXq48cQ9jUfM",
  },
  {
    name: "Ayesha Rahman",
    role: "Lead Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rafiq Ahmed",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jasmine Khatun",
    role: "Product Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sara Islam",
    role: "Product Manager",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1688739352540-a75b102d8551?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jami Khan",
    role: "Product Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // Add more people as needed
];

export default function OurTeam() {
  return (
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col items-center">
              <img
                className="h-24 w-24 rounded-full"
                src={person.imageUrl}
                alt={person.name}
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
