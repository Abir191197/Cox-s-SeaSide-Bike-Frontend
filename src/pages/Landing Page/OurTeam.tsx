

const people = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Ayesha Rahman",
    role: "Lead Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1591425868696-0db1b488d0ea?ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGF5ZXNoYXxlbnwwfHx8fDE2NjAxNTY3Njc&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Rafiq Ahmed",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1607517713965-d6f0b05fef73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHJhcmlxfGVufDB8fHx8MTY2MDg1MTMzNg&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    name: "Jasmine Khatun",
    role: "Product Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1603579127404-401ad95d7d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGphc2luZSUyMGtodXR1bnxlbnwwfHx8fDE2NjAxNTY3Njc&ixlib=rb-1.2.1&q=80&w=400",
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
